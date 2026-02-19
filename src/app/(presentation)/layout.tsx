"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { TeaserSection } from "@/components/landing/teaser-section";
import { IronBuildupSection } from "@/components/landing/iron-buildup-section";
import { ReframeSection } from "@/components/landing/reframe-section";
import { ParadoxSection } from "@/components/landing/paradox-section";
import { EvidenceSection } from "@/components/landing/evidence-section";
import { SummarySection } from "@/components/landing/summary-section";
import { SectionIndicator } from "@/components/ui/section-indicator";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollProvider, useScrollContext } from "@/components/providers/scroll-context";
import { TransitionProvider, useExploreTransition } from "@/components/providers/transition-context";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function PresentationContent({ children }: { children: ReactNode }) {
  const { phase, completeExpand } = useExploreTransition();
  const { scrollToSection, sections, activeSection, getBreakpointScrollPositions } = useScrollContext();
  const presentationRef = useRef<HTMLDivElement>(null);
  const savedScrollRef = useRef(0);
  const didJumpRef = useRef(false);
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

  // Save/restore scroll position when transitioning
  useEffect(() => {
    if (phase === "collapsing") {
      savedScrollRef.current = window.scrollY;
    } else if (phase === "expanding") {
      // Restore scroll position after transition back
      const timer = setTimeout(() => {
        window.scrollTo(0, savedScrollRef.current);
        completeExpand();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, completeExpand]);

  // Smooth scroll helper — duration scales with distance
  const smoothScrollTo = useCallback((target: number) => {
    const start = window.scrollY;
    const delta = target - start;
    if (delta === 0) return;
    // ~1800ms per viewport-height of travel, clamped to 1000–5000ms
    const duration = Math.max(1000, Math.min(5000, (Math.abs(delta) / window.innerHeight) * 1800));
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease-in-out cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, start + delta * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, []);

  // Click-to-advance navigation + cursor chevrons
  useEffect(() => {
    if (!showPresentation) return;
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
      if (y < 0.25) el.style.cursor = chevronUp;
      else if (y > 0.75) el.style.cursor = chevronDown;
      else el.style.cursor = "";
    };

    const handleClick = (e: MouseEvent) => {
      // Don't intercept clicks on interactive elements
      if ((e.target as HTMLElement).closest("a, button, [role='button'], input, select")) return;
      const y = e.clientY / window.innerHeight;
      const positions = getBreakpointScrollPositions();
      const current = Math.round(window.scrollY);
      const threshold = 10; // px tolerance to avoid getting stuck

      if (y < 0.25) {
        // Find the highest breakpoint below current position
        const target = positions.filter((p) => p < current - threshold).pop();
        if (target !== undefined) smoothScrollTo(target);
      } else if (y > 0.75) {
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
        <ReframeSection />
        <ParadoxSection />
        <EvidenceSection />
        <SummarySection />

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
