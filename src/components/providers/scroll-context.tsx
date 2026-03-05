"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SectionEntry {
  id: string;
  label: string;
  element: HTMLElement;
  /** Section-progress breakpoints (0-1) used by click-to-advance navigation */
  breakpoints: number[];
}

interface ScrollContextType {
  /** 0-1 overall scroll progress */
  progress: number;
  /** ID of section currently most visible */
  activeSection: string | null;
  /** Per-section progress (0-1) keyed by section id */
  sectionProgress: Record<string, number>;
  /** All registered sections in DOM order */
  sections: SectionEntry[];
  /** Register a section element */
  registerSection: (id: string, label: string, element: HTMLElement, breakpoints?: number[]) => void;
  /** Unregister a section element */
  unregisterSection: (id: string) => void;
  /** Scroll to a section by id */
  scrollToSection: (id: string, behavior?: ScrollBehavior) => void;
  /** Get all breakpoint scrollY positions across all sections, sorted ascending */
  getBreakpointScrollPositions: () => number[];
}

const ScrollContext = createContext<ScrollContextType | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});
  const sectionsRef = useRef<SectionEntry[]>([]);
  const [sections, setSections] = useState<SectionEntry[]>([]);
  const rafRef = useRef<number | null>(null);

  const registerSection = useCallback(
    (id: string, label: string, element: HTMLElement, breakpoints?: number[]) => {
      const bp = breakpoints !== undefined ? breakpoints : [0];
      // Avoid duplicates
      const existing = sectionsRef.current.findIndex((s) => s.id === id);
      if (existing >= 0) {
        sectionsRef.current[existing] = { id, label, element, breakpoints: bp };
      } else {
        sectionsRef.current.push({ id, label, element, breakpoints: bp });
      }
      // Sort by DOM position
      sectionsRef.current.sort((a, b) => {
        const pos = a.element.compareDocumentPosition(b.element);
        return pos & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
      setSections([...sectionsRef.current]);
    },
    []
  );

  const unregisterSection = useCallback((id: string) => {
    sectionsRef.current = sectionsRef.current.filter((s) => s.id !== id);
    setSections([...sectionsRef.current]);
  }, []);

  const scrollToSection = useCallback((id: string, behavior: ScrollBehavior = "smooth") => {
    const entry = sectionsRef.current.find((s) => s.id === id);
    if (!entry) return;

    // If section has content breakpoints beyond 0, scroll to the first
    // content beat so fade-in animations are already visible
    const firstContentBp = entry.breakpoints.find((b) => b > 0);
    if (firstContentBp) {
      const el = entry.element;
      const sh = el.offsetHeight;
      const scrollY = el.offsetTop + firstContentBp * (sh + window.innerHeight) - window.innerHeight;
      window.scrollTo({ top: Math.max(0, scrollY), behavior });
    } else {
      entry.element.scrollIntoView({ behavior });
    }
  }, []);

  const getBreakpointScrollPositions = useCallback(() => {
    const positions: number[] = [];
    for (const section of sectionsRef.current) {
      const el = section.element;
      const sectionHeight = el.offsetHeight;
      if (sectionHeight === 0) continue;
      const sectionTop = el.offsetTop;
      for (const bp of section.breakpoints) {
        // Inverse of progress formula:
        // progress = (innerHeight - rect.top) / (sectionHeight + innerHeight)
        // scrollY = sectionTop + progress * (sectionHeight + innerHeight) - innerHeight
        const scrollY = sectionTop + bp * (sectionHeight + window.innerHeight) - window.innerHeight;
        positions.push(Math.max(0, Math.round(scrollY)));
      }
    }
    // Dedupe and sort ascending
    return [...new Set(positions)].sort((a, b) => a - b);
  }, []);

  // Scroll listener: update progress, active section, per-section progress
  useEffect(() => {
    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress(maxScroll > 0 ? Math.min(1, currentScroll / maxScroll) : 0);

      // Per-section progress + active section detection
      let bestId: string | null = null;
      let bestRatio = 0;
      const newSectionProgress: Record<string, number> = {};

      for (const section of sectionsRef.current) {
        const rect = section.element.getBoundingClientRect();
        const sectionHeight = rect.height;
        if (sectionHeight === 0) continue;

        // How far through this section are we?
        // 0 = section top is at viewport bottom, 1 = section bottom is at viewport top
        const rawProgress = (window.innerHeight - rect.top) / (sectionHeight + window.innerHeight);
        newSectionProgress[section.id] = Math.max(0, Math.min(1, rawProgress));

        // Active section: which section occupies most of the viewport center?
        const viewportCenter = window.innerHeight / 2;
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        if (sectionTop < viewportCenter && sectionBottom > viewportCenter) {
          const visibleRatio = Math.min(sectionBottom, window.innerHeight) - Math.max(sectionTop, 0);
          if (visibleRatio > bestRatio) {
            bestRatio = visibleRatio;
            bestId = section.id;
          }
        }
      }

      // Fallback: if no section spans center, pick the one with most viewport overlap
      if (!bestId && sectionsRef.current.length > 0) {
        for (const section of sectionsRef.current) {
          const rect = section.element.getBoundingClientRect();
          const overlap =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          if (overlap > bestRatio) {
            bestRatio = overlap;
            bestId = section.id;
          }
        }
      }

      setSectionProgress(newSectionProgress);
      setActiveSection(bestId);
      rafRef.current = null;

      // Debug: log position on every scroll update
      if (process.env.NODE_ENV === "development") {
        const parts = Object.entries(newSectionProgress)
          .filter(([, v]) => v > 0 && v < 1)
          .map(([id, v]) => `${id}: ${(v * 100).toFixed(1)}%`);
        const overall = maxScroll > 0 ? Math.min(1, currentScroll / maxScroll) : 0;
        console.log(
          `[scroll] overall=${(overall * 100).toFixed(1)}% active=${bestId ?? "—"}` +
            (parts.length ? ` | ${parts.join(", ")}` : "")
        );
      }
    };

    const onScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    // Initial update
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        progress,
        activeSection,
        sectionProgress,
        sections,
        registerSection,
        unregisterSection,
        scrollToSection,
        getBreakpointScrollPositions,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return ctx;
}
