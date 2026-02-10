"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { AnimatedShape } from "@/components/ui/animated-shape";
import { useExploreTransition } from "@/components/providers/transition-context";
import { ArrowRight } from "lucide-react";
import { diseaseEntryPoints, defenseLayers } from "@/data/landing/entry-points";
import { researchTopics } from "@/data/landing/research-topics";

const featured = {
  name: "Alzheimer\u2019s Disease",
  stat: 99,
  statSuffix: "%",
  statLabel: "drug failure rate",
  explanation:
    "Pericyte loss breaches the blood-brain barrier. Iron accumulates. Plaques and tangles form to buffer that iron. Remove them with drugs, and the iron has nowhere to go.",
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
    stat: 400,
    statSuffix: "M+",
    statLabel: "estimated cases globally",
    explanation:
      "SARS-CoV-2 infects pericytes via CD147, breaching the blood-brain barrier. Viral persistence degrades antioxidant and iron export pathways. Patients develop neurodegenerative biomarkers within months.",
  },
  {
    name: "ALS",
    stat: 90,
    statSuffix: "%",
    statLabel: "sporadic (no genetic cause)",
    explanation:
      "Motor cortex iron accumulates as antioxidant defenses (GPX4) and iron-buffering proteins (ferritin) are overwhelmed. 90% of cases have no genetic explanation.",
  },
  {
    name: "Multiple Sclerosis",
    stat: 2.8,
    statSuffix: "M",
    statLabel: "people affected worldwide",
    explanation:
      "EBV doesn\u2019t need to reactivate. Latent viral proteins disrupt iron buffering and export. Iron rim lesions mark where these systems have collapsed, driving oligodendrocyte death.",
  },
  {
    name: "Prion Disease",
    stat: 100,
    statSuffix: "%",
    statLabel: "fatal",
    explanation:
      "PrP misfolding destroys iron-buffering capacity. Antioxidant defenses fail, iron floods cells, and export can\u2019t compensate. The fastest progression of any neurodegenerative disease.",
  },
];

function parseStatForCounter(stat: string | number): {
  value: number;
  suffix: string;
  decimals: number;
} | null {
  if (typeof stat === "number") return null;
  if (stat.includes("-")) return null;
  const match = stat.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return null;
  const value = parseFloat(match[1]);
  return { value, suffix: match[2], decimals: value % 1 !== 0 ? 1 : 0 };
}

function EntryPointMatrix() {
  const [activeTooltip, setActiveTooltip] = useState<{ disease: string; layer: string } | null>(
    null
  );

  const tooltipText =
    activeTooltip &&
    diseaseEntryPoints
      .find((d) => d.disease === activeTooltip.disease)
      ?.tooltips[activeTooltip.layer];

  return (
    <div className="mt-8 w-full max-w-lg mx-auto">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-3 text-center" id="entry-matrix-caption">
        Primary entry layer by disease
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" aria-labelledby="entry-matrix-caption">
          <thead>
            <tr>
              <th className="py-1 pr-3 text-left text-xs font-medium text-gray-500" />
              {defenseLayers.map((layer) => (
                <th
                  key={layer}
                  className="py-1 px-2 text-center text-xs font-medium text-teal-400/70"
                >
                  {layer}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {diseaseEntryPoints.map((entry) => (
              <tr key={entry.disease} className="border-t border-white/5">
                <td className="py-2 pr-3 text-xs font-medium text-gray-300 whitespace-nowrap">
                  {entry.disease}
                </td>
                {defenseLayers.map((layer) => {
                  const isActive = entry.layers.includes(layer);
                  const isTooltipShown =
                    activeTooltip?.disease === entry.disease &&
                    activeTooltip?.layer === layer;

                  return (
                    <td key={layer} className="py-2 px-2 text-center relative">
                      {isActive ? (
                        <button
                          onClick={() =>
                            setActiveTooltip(
                              isTooltipShown
                                ? null
                                : { disease: entry.disease, layer }
                            )
                          }
                          className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-teal-400 transition-transform hover:scale-125"
                          aria-label={`${entry.disease} enters via ${layer}`}
                        />
                      ) : (
                        <span className="inline-block h-2 w-2 rounded-full bg-gray-700" aria-label="Not a primary entry layer" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltipText && (
          <motion.div
            key={`${activeTooltip!.disease}-${activeTooltip!.layer}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="mt-3 rounded-lg border border-white/5 bg-navy-900/95 p-3 text-sm leading-relaxed text-gray-300 backdrop-blur-sm"
          >
            <span className="font-semibold text-teal-400">{activeTooltip!.disease}</span>
            {" \u2192 "}
            <span className="font-semibold text-teal-400">{activeTooltip!.layer}</span>
            {": "}
            {tooltipText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DiseaseCard({ disease }: { disease: (typeof diseases)[number] }) {
  const counter =
    typeof disease.stat === "number"
      ? {
          value: disease.stat,
          suffix: disease.statSuffix ?? "",
          decimals: disease.stat % 1 !== 0 ? 1 : 0,
        }
      : parseStatForCounter(disease.stat);

  return (
    <div className="h-full pt-6 border-t border-white/10">
      <div className="mb-3">
        <span className="text-gradient-teal font-serif text-[40px] leading-none tracking-tight">
          {counter ? (
            <AnimatedCounter
              value={counter.value}
              suffix={counter.suffix}
              decimals={counter.decimals}
            />
          ) : (
            disease.stat
          )}
        </span>
        <p className="mt-1 text-sm font-medium text-gray-400">
          {disease.statLabel}
        </p>
      </div>
      <h3 className="mb-2 font-serif text-xl text-white">{disease.name}</h3>
      <p className="text-lg leading-relaxed text-gray-300">
        {disease.explanation}
      </p>
    </div>
  );
}

function ResearchTopicsGrid() {
  const router = useRouter();
  const { phase, selectedTopic, startTransition } = useExploreTransition();

  const handleCardClick = (href: string, slug: string) => {
    if (href.startsWith("/explore")) {
      startTransition(href, slug);
    } else {
      router.push(href);
    }
  };

  return (
    <div className="flex flex-col items-center px-6 max-w-6xl w-full overflow-y-auto max-h-full py-8">
      <h2 className="font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px] text-center">
        Explore the research
      </h2>
      <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl">
        Each topic connects to the others. Start anywhere.
      </p>
      <div className="mt-8 w-full grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {researchTopics.map((topic) => {
          const isCollapsing = phase === "collapsing";
          const isSelected = selectedTopic === topic.slug;

          return (
            <motion.button
              key={topic.slug}
              onClick={() => handleCardClick(topic.href, topic.slug)}
              className="group rounded-lg border border-white/5 bg-white/[0.02] p-4 text-left transition-colors hover:border-teal-400/30 hover:bg-white/[0.04]"
              animate={
                isCollapsing && !isSelected
                  ? { opacity: 0, scale: 0.95, filter: "blur(4px)" }
                  : isCollapsing && isSelected
                    ? { opacity: 1, scale: 1.02 }
                    : { opacity: 1, scale: 1, filter: "blur(0px)" }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">
                {topic.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-400">
                {topic.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function PlacentaHighlight() {
  const { phase, startTransition } = useExploreTransition();
  const isCollapsing = phase === "collapsing";

  return (
    <motion.div
      className="flex flex-col items-center px-6 max-w-3xl text-center"
      animate={
        isCollapsing
          ? { opacity: 0, scale: 0.92, y: -20, filter: "blur(6px)" }
          : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px]">
        This isn&apos;t just about the brain.
      </h2>
      <div className="mt-8">
        <span className="text-gradient-teal font-serif text-[64px] leading-none sm:text-[80px]">
          HR 3.46
        </span>
        <p className="mt-2 text-sm font-medium text-gray-400">
          vascular dementia risk after preeclampsia (Basit 2018)
        </p>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-xl">
        The placenta runs the same iron/ferroptosis cascade in weeks, not
        decades. Same cell types. Same transporters. Same failure mode. A
        different organ confirms the pattern.
      </p>
      <button
        onClick={() => startTransition("/explore/barrier", "barrier")}
        className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-500"
      >
        Explore the placental parallel
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.div>
  );
}

export function EvidenceSection() {
  const { currentStep } = useFullPage();
  const step = currentStep;

  return (
    <div className="h-full relative overflow-hidden" role="region" aria-label="Evidence">
      <ParallaxOrb
        className="right-0 top-1/4 h-[500px] w-[500px] bg-teal-600 opacity-10"
        speed={0.2}
      />

      {/* Decorative accent lines */}
      <AnimatedShape
        direction="right"
        shape="line"
        className="top-[20%] right-0 w-[30%]"
        delay={0.1}
        visible={step === 0}
      />
      <AnimatedShape
        direction="left"
        shape="line"
        className="bottom-[20%] left-0 w-[20%]"
        delay={0.2}
        visible={step === 0}
      />

      {/* Step 0: Section header + featured Alzheimer's card */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center px-6 max-w-3xl">
          <h2 id="evidence-heading" className="font-serif text-[38px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[52px] text-center">
            Same iron signature. Six diseases.
          </h2>

          <div className="mt-12 w-full">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <span className="text-gradient-teal font-serif text-[80px] leading-none sm:text-[100px]">
                  <AnimatedCounter
                    value={featured.stat}
                    suffix={featured.statSuffix}
                  />
                </span>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  {featured.statLabel}
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-2xl text-white">
                  {featured.name}
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  {featured.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </StepFragment>

      {/* Step 1: All 5 remaining disease cards in grid + entry point matrix */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.map((disease) => (
              <DiseaseCard key={disease.name} disease={disease} />
            ))}
          </div>
          <EntryPointMatrix />
        </div>
      </StepFragment>

      {/* Step 2: Placental parallel highlight */}
      <StepFragment step={step} appear={2} recede={3}>
        <PlacentaHighlight />
      </StepFragment>

      {/* Step 3: Research topics grid */}
      <StepFragment step={step} appear={3}>
        <ResearchTopicsGrid />
      </StepFragment>
    </div>
  );
}
