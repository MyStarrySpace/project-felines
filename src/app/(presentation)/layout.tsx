"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/landing/hero-section";
import { IronBuildupSection } from "@/components/landing/iron-buildup-section";
import { FerroptosisSection } from "@/components/landing/ferroptosis-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { FindingsSection } from "@/components/landing/findings-section";
import { EvidenceSection } from "@/components/landing/evidence-section";
import { CtaSection } from "@/components/landing/cta-section";
import { SectionIndicator } from "@/components/ui/section-indicator";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SlideEdgeNav } from "@/components/ui/slide-edge-nav";
import { FullPageScroll, type SlideConfig } from "@/components/ui/full-page-scroll";
import { TransitionProvider, useExploreTransition } from "@/components/providers/transition-context";

const slides: SlideConfig[] = [
  {
    id: "hero",
    steps: 3,
    bg: "bg-gradient-to-b from-navy-900 to-[#110B07]",
    content: <HeroSection />,
  },
  {
    id: "iron",
    steps: 4,
    bg: "bg-[#110B07]",
    content: <IronBuildupSection />,
  },
  {
    id: "ferroptosis",
    steps: 3,
    bg: "bg-[#110B07]",
    content: <FerroptosisSection />,
  },
  {
    id: "problem",
    steps: 4,
    bg: "bg-[#110B07]",
    content: <ProblemSection />,
  },
  {
    id: "findings",
    steps: 3,
    bg: "bg-navy-900",
    content: <FindingsSection />,
  },
  {
    id: "evidence",
    steps: 4,
    bg: "bg-navy-800",
    content: <EvidenceSection />,
  },
  {
    id: "cta",
    steps: 1,
    bg: "bg-gradient-to-b from-navy-800 to-navy-900",
    content: <CtaSection />,
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function PresentationContent({ children }: { children: ReactNode }) {
  const { phase, completeExpand } = useExploreTransition();

  const showPresentation = phase === "idle" || phase === "expanding";
  const showExplore = phase === "explore";

  // Lock body scroll when in presentation mode
  useEffect(() => {
    document.body.style.overflow = phase === "idle" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Presentation: fade content only — no scale/blur/transform
  const presentationAnimate = showPresentation
    ? { opacity: 1 }
    : { opacity: 0 };

  // Explore: expand vertically (already full width), clip reveals from top
  const exploreAnimate = showExplore
    ? { clipPath: "inset(0% 0% 0% 0%)" }
    : { clipPath: "inset(0% 0% 100% 0%)" };

  return (
    <>
      {/* Persistent dark background — stays visible during transitions */}
      <div className="fixed inset-0 z-0 bg-navy-900" />

      {/* Presentation — fades out, background shows through */}
      <motion.div
        className="fixed inset-0 z-10"
        initial={false}
        animate={presentationAnimate}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ pointerEvents: showPresentation ? "auto" : "none" }}
        onAnimationComplete={() => {
          if (phase === "expanding") {
            completeExpand();
          }
        }}
      >
        <FullPageScroll sections={slides} active={phase === "idle"}>
          <SectionIndicator />
          <ScrollProgress />
          <SlideEdgeNav />
        </FullPageScroll>
      </motion.div>

      {/* Explore content — expands vertically over the fading presentation */}
      <motion.div
        className="relative z-20 min-h-screen bg-navy-900"
        initial={false}
        animate={exploreAnimate}
        transition={{
          duration: 0.5,
          delay: showExplore ? 0.15 : 0,
          ease: EASE,
        }}
        style={{ pointerEvents: showExplore ? "auto" : "none" }}
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
      <PresentationContent>{children}</PresentationContent>
    </TransitionProvider>
  );
}
