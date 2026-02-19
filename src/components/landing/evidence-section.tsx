"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { TypeReveal } from "@/components/ui/type-reveal";
import { CountUp } from "@/components/ui/count-up";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { useExploreTransition } from "@/components/providers/transition-context";
import { researchTopics } from "@/data/landing/research-topics";
import type { StatSource } from "@/data/landing/findings";

const featuredSource: StatSource = {
  label: "Smith et al., PNAS, 1997",
  quote: "Iron accumulation in Alzheimer disease is a source of redox-generated free radicals.",
  url: "https://pubmed.ncbi.nlm.nih.gov/9275217/",
};

const featured = {
  name: "Alzheimer\u2019s Disease",
  stat: "2\u00D7",
  statLabel: "iron in affected brain regions vs. healthy tissue",
  statSource: featuredSource,
  explanation:
    "Iron accumulates in every brain region affected by Alzheimer\u2019s. The regions with most iron show most damage. Plaques and tangles concentrate around iron deposits \u2014 pericyte loss breaches the blood-brain barrier, and iron floods in faster than cells can buffer it.",
};

const diseases = [
  {
    name: "Parkinson\u2019s Disease",
    stat: "10-30%",
    statLabel: "GBA1 penetrance",
    explanation:
      "The substantia nigra has the highest iron concentration in the brain. GBA1 mutations compromise iron containment, but disease only develops when antioxidant defenses or the blood-brain barrier also fail.",
  },
  {
    name: "Long COVID",
    stat: "400M+",
    statLabel: "estimated cases globally",
    explanation:
      "SARS-CoV-2 infects pericytes via CD147, breaching the blood-brain barrier. Viral persistence degrades antioxidant and iron export pathways. Patients develop neurodegenerative biomarkers within months.",
  },
  {
    name: "ALS",
    stat: "90%",
    statLabel: "sporadic (no genetic cause)",
    explanation:
      "Motor cortex iron accumulates as antioxidant defenses (GPX4) and iron-buffering proteins (ferritin) are overwhelmed. 90% of cases have no genetic explanation.",
  },
  {
    name: "Multiple Sclerosis",
    stat: "2.8M",
    statLabel: "people affected worldwide",
    explanation:
      "EBV doesn\u2019t need to reactivate. Latent viral proteins disrupt iron buffering and export. Iron rim lesions mark where these systems have collapsed, driving oligodendrocyte death.",
  },
  {
    name: "Prion Disease",
    stat: "100%",
    statLabel: "fatal",
    explanation:
      "PrP misfolding destroys iron-buffering capacity. Antioxidant defenses fail, iron floods cells, and export can\u2019t compensate. The fastest progression of any neurodegenerative disease.",
  },
];

function EvidenceStickyStage({ progress }: { progress: MotionValue<number> }) {
  const formatMultiplier = useCallback(
    (v: number) => v.toFixed(1) + "\u00D7",
    []
  );

  return (
    <div className="h-full flex items-center justify-center px-6 sm:px-8">
      <div className="reading-width w-full">
        {/* Heading via TypeReveal */}
        <TypeReveal progress={progress} enter={0.05} hold={0.25}>
          <h2 className="font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.2] tracking-[-0.01em] text-white mb-12">
            Same iron signature. Six diseases.
          </h2>
        </TypeReveal>

        {/* Featured "2x" stat */}
        <ScrollBeat progress={progress} enter={0.20} hold={0.35} exit={0.75} gone={0.90} enterFrom="scale">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
            <div className="shrink-0">
              <span className="font-serif text-[clamp(4rem,12vw,7rem)] text-teal-400 leading-none">
                <CountUp
                  progress={progress}
                  enter={0.20}
                  hold={0.35}
                  from={1.0}
                  to={2.0}
                  format={formatMultiplier}
                />
              </span>
              <p className="text-sm text-gray-400 mt-1">{featured.statLabel}</p>
              <p className="text-xs text-gray-500 mt-1">{featured.statSource.label}</p>
            </div>
            <ScrollBeat progress={progress} enter={0.30} hold={0.40} enterFrom="left">
              <div>
                <h3 className="font-serif text-xl text-white mb-2">{featured.name}</h3>
                <p className="text-lg leading-relaxed text-gray-300">{featured.explanation}</p>
              </div>
            </ScrollBeat>
          </div>
        </ScrollBeat>
      </div>
    </div>
  );
}

export function EvidenceSection() {
  const { startTransition } = useExploreTransition();

  return (
    <ScrollSection id="evidence" label="Evidence" className="py-0" fullWidth>
      {/* Sticky portion */}
      <StickyScrollStage height={200}>
        {(progress) => <EvidenceStickyStage progress={progress} />}
      </StickyScrollStage>

      {/* Flowing portion */}
      <div className="reading-width mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="section-rule mb-16 sm:mb-24" />

        {/* Disease list with alternating directions */}
        {diseases.map((disease, i) => (
          <ScrollAnimate
            key={disease.name}
            enterFrom={i % 2 === 0 ? "left" : "right"}
            className={i < diseases.length - 1 ? "mb-12" : "mb-16 sm:mb-24"}
          >
            <div className="border-t border-white/5 pt-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-2xl font-bold text-gray-200 tabular-nums">{disease.stat}</span>
                <span className="text-sm text-gray-500">{disease.statLabel}</span>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">{disease.name}</h3>
              <p className="text-base leading-relaxed text-gray-300">{disease.explanation}</p>
            </div>
          </ScrollAnimate>
        ))}

        <div className="section-rule mb-16 sm:mb-24" />

        {/* Placental parallel */}
        <ScrollAnimate enterFrom="scale" className="mb-16 sm:mb-24">
          <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-6">
            This isn&apos;t just about the brain.
          </h2>
          <div className="mb-4">
            <span className="font-serif text-[clamp(2.5rem,8vw,4.5rem)] text-teal-400 leading-none">
              HR 3.46
            </span>
            <p className="text-sm text-gray-400 mt-1">
              vascular dementia risk after preeclampsia (Basit 2018)
            </p>
          </div>
          <p className="text-lg leading-relaxed text-gray-300 max-w-xl mb-6">
            The placenta runs the same iron/ferroptosis cascade in weeks, not
            decades. Same cell types. Same transporters. Same failure mode. A
            different organ confirms the pattern.
          </p>
          <button
            onClick={() => startTransition("/explore/barrier", "barrier")}
            className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1.5"
          >
            Explore the placental parallel
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </ScrollAnimate>

        <div className="section-rule mb-16 sm:mb-24" />

        {/* Research topics grid + CTA */}
        <ScrollAnimate>
          <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-4">
            Explore the research
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Each topic connects to the others. Start anywhere.
          </p>

          <div className="grid gap-2 sm:grid-cols-2 mb-10">
            {researchTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={topic.href}
                className="border border-white/5 p-4 hover:border-white/15 transition-colors"
              >
                <p className="text-sm font-semibold text-white">{topic.title}</p>
                <p className="text-xs text-gray-400 mt-1">{topic.description}</p>
              </Link>
            ))}
          </div>

          <Link href="/explore/biology">
            <Button variant="primary-inverse" size="lg">
              Explore the research
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </ScrollAnimate>
      </div>
    </ScrollSection>
  );
}
