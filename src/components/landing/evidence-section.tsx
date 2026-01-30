"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { useFullPage } from "@/components/ui/full-page-scroll";

const STEP_TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

const featured = {
  name: "Alzheimer's Disease",
  stat: 99,
  statSuffix: "%",
  statLabel: "drug failure rate",
  explanation:
    "Hippocampal pericyte loss precedes amyloid plaques. The PLIG framework positions amyloid as a downstream response to iron-mediated damage, not the root cause.",
};

const diseases = [
  {
    name: "Parkinson's Disease",
    stat: "10-30%",
    statLabel: "GBA1 penetrance",
    explanation:
      "Substantia nigra has the highest brain iron concentration. GBA1 lysosomal dysfunction plus iron maldistribution explains why most carriers never develop PD.",
  },
  {
    name: "Long COVID",
    stat: 400,
    statSuffix: "M+",
    statLabel: "estimated cases globally",
    explanation:
      "SARS-CoV-2 directly infects pericytes via CD147. Persistent neuroinflammation and pericyte loss trigger the same cascade.",
  },
  {
    name: "ALS",
    stat: 90,
    statSuffix: "%",
    statLabel: "sporadic (no genetic cause)",
    explanation:
      "Motor cortex and spinal cord oligodendrocytes show early degeneration. Iron accumulation follows the PLIG pathway.",
  },
  {
    name: "Multiple Sclerosis",
    stat: 2.8,
    statSuffix: "M",
    statLabel: "people affected worldwide",
    explanation:
      "EBV infection triggers pericyte damage. Iron rim lesions and oligodendrocyte loss fit the PLIG causal chain.",
  },
  {
    name: "Prion Disease",
    stat: 100,
    statSuffix: "%",
    statLabel: "fatal",
    explanation:
      "PrP misfolding disrupts lysosomal degradation. Iron dysregulation and rapid oligodendrocyte loss follow.",
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
        <span className="text-gradient-teal font-serif text-[32px] leading-none tracking-tight">
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
        <p className="mt-1 text-xs font-medium text-gray-400">
          {disease.statLabel}
        </p>
      </div>
      <h3 className="mb-2 font-serif text-lg text-white">{disease.name}</h3>
      <p className="text-sm leading-relaxed text-gray-300">
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

        <Container width="full" section className="relative z-10 h-full flex items-center">
          <div className="w-full">
            {/* Header */}
            <motion.div
              className="mb-12"
              animate={{ opacity: 1, y: 0 }}
              transition={STEP_TRANSITION}
            >
              <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
                The Evidence
              </span>
              <h2 className="mt-4 font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px]">
                One framework. Six diseases.
              </h2>
            </motion.div>

            {/* Featured: Alzheimer's — always visible on this slide */}
            <motion.div
              className="mb-8"
              animate={{ opacity: 1, scale: 1 }}
              transition={STEP_TRANSITION}
            >
              <div className="pb-8 mb-8 border-b border-white/10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="shrink-0">
                    <span className="text-gradient-teal font-serif text-[64px] leading-none sm:text-[80px]">
                      <AnimatedCounter
                        value={featured.stat}
                        suffix={featured.statSuffix}
                      />
                    </span>
                    <p className="mt-1 text-xs font-medium text-gray-400">
                      {featured.statLabel}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-2xl text-white">
                      {featured.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {featured.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Part A diseases: Parkinson's + Long COVID — step 1 */}
            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              animate={{
                opacity: step >= 1 ? 1 : 0,
                y: step >= 1 ? 0 : 30,
              }}
              transition={STEP_TRANSITION}
            >
              {partADiseases.map((disease) => (
                <DiseaseCard key={disease.name} disease={disease} />
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    );
  }

  // Part B
  return (
    <div className="h-full relative overflow-hidden">
      <Container width="full" section className="relative z-10 h-full flex items-center">
        <div className="w-full">
          {/* Part B diseases: ALS + MS + Prion — always visible */}
          <motion.div
            className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            animate={{ opacity: 1, y: 0 }}
            transition={STEP_TRANSITION}
          >
            {partBDiseases.map((disease) => (
              <DiseaseCard key={disease.name} disease={disease} />
            ))}
          </motion.div>

          {/* Clinical implication callout — step 1 */}
          <motion.div
            animate={{
              opacity: step >= 1 ? 1 : 0,
              y: step >= 1 ? 0 : 20,
            }}
            transition={STEP_TRANSITION}
          >
            <div className="flex gap-4 border-l-2 border-teal-600 pl-6">
              <div>
                <span className="mb-0.5 inline-block bg-teal-600/20 px-2.5 py-0.5 text-xs font-medium text-teal-400">
                  Clinical implication
                </span>
                <p className="mt-1 font-medium text-white">
                  The recovery illusion
                </p>
                <div className="mt-1 text-sm leading-relaxed text-gray-300">
                  <ScrollRevealText
                    text="After viral infection, serum inflammatory markers normalize within weeks. Patients feel better. But brain iron redistribution persists. MRI studies show elevated iron years after infection resolves. The serum says recovery. The brain says otherwise."
                    dimColor="rgba(107,114,128,1)"
                    brightColor="rgba(209,213,219,1)"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
