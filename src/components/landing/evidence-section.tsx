"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { AnimatedShape } from "@/components/ui/animated-shape";

const featured = {
  name: "Alzheimer's Disease",
  stat: 99,
  statSuffix: "%",
  statLabel: "drug failure rate",
  explanation:
    "Pericyte loss breaches the neurovascular barrier. Iron accumulates in brain tissue. Amyloid plaques and tau tangles form as protective iron-buffering responses. Removing them with drugs makes things worse.",
};

const diseases = [
  {
    name: "Parkinson's Disease",
    stat: "10-30%",
    statLabel: "GBA1 penetrance",
    explanation:
      "Substantia nigra has the highest brain iron concentration. GBA1 compromises the insulation layer, but disease requires concurrent failure of lysosomal defenses or neurovascular integrity.",
  },
  {
    name: "Long COVID",
    stat: 400,
    statSuffix: "M+",
    statLabel: "estimated cases globally",
    explanation:
      "SARS-CoV-2 directly infects pericytes via CD147, breaching the neurovascular barrier. Viral persistence degrades lysosomal integrity and export pathways, producing neurodegenerative biomarkers within months.",
  },
  {
    name: "ALS",
    stat: 90,
    statSuffix: "%",
    statLabel: "sporadic (no genetic cause)",
    explanation:
      "Motor cortex iron accumulation reflects defense layer failure. Lysosomal defenses (GPX4) and insulation (ferritin) are overwhelmed.",
  },
  {
    name: "Multiple Sclerosis",
    stat: 2.8,
    statSuffix: "M",
    statLabel: "people affected worldwide",
    explanation:
      "EBV persistence is a lysosome and export problem, not active viral reactivation. Iron rim lesions mark zones where insulation and export have both collapsed.",
  },
  {
    name: "Prion Disease",
    stat: 100,
    statSuffix: "%",
    statLabel: "fatal",
    explanation:
      "PrP misfolding collapses the insulation layer. Lysosomal integrity fails, iron floods the cytosol, and export cannot compensate. The fastest cascade across all five layers.",
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

// Part A diseases: Parkinson's + Long COVID (index 0, 1)
const partADiseases = diseases.slice(0, 2);
// Part B diseases: ALS + MS + Prion (index 2, 3, 4)
const partBDiseases = diseases.slice(2);

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

export function EvidenceSection({ part }: { part: "a" | "b" }) {
  const { currentStep } = useFullPage();
  const step = currentStep;

  if (part === "a") {
    return (
      <div className="h-full relative overflow-hidden">
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
            <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
              The Evidence
            </span>
            <h2 className="mt-4 font-serif text-[38px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[52px] text-center">
              One framework. Six diseases.
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

        {/* Step 1: Parkinson's + Long COVID cards */}
        <StepFragment step={step} appear={1}>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl px-6">
            {partADiseases.map((disease) => (
              <DiseaseCard key={disease.name} disease={disease} />
            ))}
          </div>
        </StepFragment>
      </div>
    );
  }

  // Part B
  return (
    <div className="h-full relative overflow-hidden">
      {/* Decorative accent lines */}
      <AnimatedShape
        direction="top"
        shape="line"
        className="top-0 right-[15%] h-[15%] w-px"
        delay={0.1}
        visible={step === 0}
        color="border-teal-600/30 bg-teal-600/30"
      />

      {/* Step 0: ALS + MS + Prion disease cards (3-col grid) */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl px-6">
          {partBDiseases.map((disease) => (
            <DiseaseCard key={disease.name} disease={disease} />
          ))}
        </div>
      </StepFragment>

      {/* Step 1: Clinical implication callout — bottom-right anchored */}
      <StepFragment step={step} appear={1} className="!items-end !justify-end pb-20 pr-10 sm:pb-28 sm:pr-16">
        <div className="max-w-2xl px-6">
          <div className="flex gap-4 border-l-2 border-teal-600 pl-6">
            <div>
              <span className="mb-0.5 inline-block bg-teal-600/20 px-2.5 py-0.5 text-xs font-medium text-teal-400">
                Paradigm shift
              </span>
              <p className="mt-1 font-medium text-white">
                &ldquo;Viral reactivation&rdquo; is lysosome and export failure
              </p>
              <p className="mt-1 text-lg leading-relaxed text-gray-300">
                Researchers spent decades hunting for active virus in diseased brains and found almost nothing. FELINE explains why: the virus doesn&apos;t need to wake up. Latent viral proteins sabotage iron-buffering (tau, alpha-synuclein), while lysosomal disruption releases stored iron. No reactivation required.
              </p>
            </div>
          </div>
        </div>
      </StepFragment>
    </div>
  );
}
