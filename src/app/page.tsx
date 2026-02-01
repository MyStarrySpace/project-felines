"use client";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { FrameworkSection } from "@/components/landing/framework-section";
import { EvidenceSection } from "@/components/landing/evidence-section";
import { CtaSection } from "@/components/landing/cta-section";
import { SectionIndicator } from "@/components/ui/section-indicator";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FullPageScroll, type SlideConfig } from "@/components/ui/full-page-scroll";

const slides: SlideConfig[] = [
  {
    id: "hero",
    steps: 3,
    bg: "bg-gradient-to-b from-navy-900 to-[#0a0a12]",
    content: <HeroSection />,
  },
  {
    id: "problem",
    steps: 4,
    bg: "bg-[#0a0a12]",
    content: <ProblemSection />,
  },
  {
    id: "framework",
    steps: 4,
    bg: "bg-navy-900",
    content: <FrameworkSection />,
  },
  {
    id: "evidence",
    steps: 2,
    bg: "bg-navy-800",
    content: <EvidenceSection part="a" />,
  },
  {
    id: "evidence-b",
    steps: 2,
    bg: "bg-navy-800",
    content: <EvidenceSection part="b" />,
  },
  {
    id: "cta",
    steps: 1,
    bg: "bg-gradient-to-b from-navy-800 to-navy-900",
    content: <CtaSection />,
  },
];

export default function Home() {
  return (
    <FullPageScroll sections={slides}>
      <Header />
      <SectionIndicator />
      <ScrollProgress />
    </FullPageScroll>
  );
}
