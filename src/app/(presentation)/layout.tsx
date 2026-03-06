"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { TeaserSection } from "@/components/landing/teaser-section";
import { IronBuildupSection } from "@/components/landing/iron-buildup-section";
import { CellVulnerabilitySection } from "@/components/landing/cell-vulnerability-section";
import { DrugBrowserSection } from "@/components/landing/drug-browser-section";
import { IronAlternativesSection } from "@/components/landing/iron-alternatives-section";
import { LecanemabCritiqueSection } from "@/components/landing/lecanemab-critique-section";
import { ClearanceNarrativeSection } from "@/components/landing/clearance-narrative-section";
import { FelineIntroSection } from "@/components/landing/feline-intro-section";
import { TheoriesMappingSection } from "@/components/landing/theories-mapping-section";
import { GwasSection } from "@/components/landing/gwas-section";
import { ClosingCtaSection } from "@/components/landing/survivorship-bias-section";
import { SectionIndicator } from "@/components/ui/section-indicator";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollProvider, useScrollContext } from "@/components/providers/scroll-context";
import { TransitionProvider, useExploreTransition } from "@/components/providers/transition-context";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const chevronYBuffer = 0.15; // portion of viewport height at top/bottom reserved for click-to-advance chevrons

function PresentationContent({ children }: { children: ReactNode }) {
  const { phase, completeExpand } = useExploreTransition();
  const { scrollToSection, sections, activeSection, getBreakpointScrollPositions } = useScrollContext();
  const presentationRef = useRef<HTMLDivElement>(null);
  const savedScrollRef = useRef(0);
  const didJumpRef = useRef(false);
  const rafIdRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;
  const sectionsRef = useRef(sections);
  sectionsRef.current = sections;

  const showPresentation = phase === "idle" || phase === "expanding";
  const showExplore = phase === "explore";

  // Jump to section from ?section= query param on initial load
  useEffect(() => {
    if (didJumpRef.current) return;
    const target = new URLSearchParams(window.location.search).get("section");
    if (!target || sections.length === 0) return;
    if (sections.some((s) => s.id === target)) {
      didJumpRef.current = true;
      scrollToSection(target, "instant");
    }
  }, [sections, scrollToSection]);

  // Update URL query param as active section changes
  useEffect(() => {
    if (!activeSection || !showPresentation) return;
    const url = new URL(window.location.href);
    if (url.searchParams.get("section") !== activeSection) {
      url.searchParams.set("section", activeSection);
      window.history.replaceState({}, "", url.toString());
    }
  }, [activeSection, showPresentation]);

  // Continuously track scroll position while presentation is visible
  useEffect(() => {
    if (!showPresentation) return;
    const onScroll = () => {
      savedScrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showPresentation]);

  // Restore scroll position when returning from explore
  useEffect(() => {
    if (phase === "expanding") {
      const timer = setTimeout(() => {
        window.scrollTo(0, savedScrollRef.current);
        completeExpand();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, completeExpand]);

  // Smooth scroll helper — duration scales with distance, optional override
  const smoothScrollTo = useCallback((target: number, durationOverride?: number) => {
    const start = window.scrollY;
    const delta = target - start;
    if (delta === 0) return;
    // Cancel any in-progress animation
    cancelAnimationFrame(rafIdRef.current);
    isAnimatingRef.current = true;
    // ~1800ms per viewport-height of travel, clamped to 1000–5000ms
    const duration = durationOverride ?? Math.max(1000, Math.min(5000, (Math.abs(delta) / window.innerHeight) * 1800));
    const startTime = performance.now();

    function step(now: number) {
      if (!isAnimatingRef.current) return; // cancelled by user scroll
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease-in-out cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, start + delta * eased);
      if (t < 1) {
        rafIdRef.current = requestAnimationFrame(step);
      } else {
        isAnimatingRef.current = false;
      }
    }
    rafIdRef.current = requestAnimationFrame(step);
  }, []);

  // Click-to-advance navigation + cursor chevrons (desktop only)
  useEffect(() => {
    if (!showPresentation) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = presentationRef.current;
    if (!el) return;

    const chevronUp = 'url("/cursors/chevron-up.svg") 8 8, auto';
    const chevronDown = 'url("/cursors/chevron-down.svg") 8 8, auto';

    const handleMouseMove = (e: MouseEvent) => {
      // Don't change cursor over interactive elements
      if ((e.target as HTMLElement).closest("a, button, [role='button'], input, select")) {
        el.style.cursor = "";
        return;
      }
      const y = e.clientY / window.innerHeight;
      if (y < chevronYBuffer) el.style.cursor = chevronUp;
      else if (y > 1 - chevronYBuffer) el.style.cursor = chevronDown;
      else el.style.cursor = "";
    };

    const handleClick = (e: MouseEvent) => {
      // Don't intercept clicks on interactive elements
      if ((e.target as HTMLElement).closest("a, button, [role='button'], input, select")) return;
      const y = e.clientY / window.innerHeight;
      const positions = getBreakpointScrollPositions();
      const current = Math.round(window.scrollY);
      const threshold = 10; // px tolerance to avoid getting stuck

      if (y < chevronYBuffer) {
        // Find the highest breakpoint below current position
        const target = positions.filter((p) => p < current - threshold).pop();
        if (target !== undefined) smoothScrollTo(target);
      } else if (y > 1 - chevronYBuffer) {
        // Find the lowest breakpoint above current position
        const target = positions.find((p) => p > current + threshold);
        if (target !== undefined) smoothScrollTo(target);
      }
    };

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("click", handleClick);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("click", handleClick);
      el.style.cursor = "";
    };
  }, [showPresentation, smoothScrollTo, getBreakpointScrollPositions]);

  // Scroll-idle snap: when user stops scrolling near a breakpoint, gently snap to it (desktop only)
  useEffect(() => {
    if (!showPresentation) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let idleTimer: ReturnType<typeof setTimeout>;

    // Cancel snap animation on actual user input (not scroll events, which our animation triggers)
    const cancelSnap = () => {
      if (isAnimatingRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        isAnimatingRef.current = false;
      }
    };
    window.addEventListener("wheel", cancelSnap, { passive: true });
    window.addEventListener("touchstart", cancelSnap, { passive: true });
    window.addEventListener("keydown", cancelSnap);

    const onScroll = () => {
      if (isAnimatingRef.current) return; // ignore scroll events from our own animation
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        const positions = getBreakpointScrollPositions();
        const current = window.scrollY;
        const threshold = window.innerHeight * 0.35;
        let nearest = positions[0];
        let minDist = Infinity;
        for (const p of positions) {
          const d = Math.abs(p - current);
          if (d < minDist) {
            minDist = d;
            nearest = p;
          }
        }
        if (minDist > 0 && minDist < threshold) {
          smoothScrollTo(nearest, 800);
        }
      }, 1000);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", cancelSnap);
      window.removeEventListener("touchstart", cancelSnap);
      window.removeEventListener("keydown", cancelSnap);
      clearTimeout(idleTimer);
    };
  }, [showPresentation, smoothScrollTo, getBreakpointScrollPositions]);

  return (
    <>
      {/* Presentation — native scrolling, normal document flow */}
      <div
        ref={presentationRef}
        className="min-h-screen bg-navy-900"
        style={{
          display: showPresentation ? "block" : "none",
          opacity: showPresentation ? 1 : 0,
        }}
      >
        <TeaserSection />
        <IronBuildupSection />
        <CellVulnerabilitySection />
        <DrugBrowserSection />
        <IronAlternativesSection />
        <LecanemabCritiqueSection />
        <FelineIntroSection />
        <GwasSection />
        <TheoriesMappingSection />
        <ClearanceNarrativeSection />
        <ClosingCtaSection />

        <SectionIndicator />
        <ScrollProgress />
      </div>

      {/* Explore content */}
      <motion.div
        className="min-h-screen bg-navy-900"
        initial={false}
        animate={{
          opacity: showExplore ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{
          display: showExplore ? "block" : "none",
          pointerEvents: showExplore ? "auto" : "none",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default function PresentationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TransitionProvider>
      <ScrollProvider>
        <PresentationContent>{children}</PresentationContent>
      </ScrollProvider>
    </TransitionProvider>
  );
}
