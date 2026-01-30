"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { useFullPage } from "@/components/ui/full-page-scroll";

const STEP_TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

const pillars = [
  {
    letter: "P",
    title: "Pericyte",
    description:
      "Brain capillary gatekeepers. Their death is among the earliest detectable events, preceding amyloid plaques by years.",
  },
  {
    letter: "L",
    title: "Lysosomal",
    description:
      "The cell's recycling system. GBA1 mutations impair lysosomal function, but only 10-30% of carriers develop disease.",
  },
  {
    letter: "I",
    title: "Iron",
    description:
      "Essential for myelin but toxic when mislocalized. After BBB breakdown, iron fuels Fenton chemistry and peroxidation.",
  },
  {
    letter: "G",
    title: "Glia",
    description:
      "Oligodendrocytes are the most iron-dependent and peroxidation-vulnerable cells. Their death strips axons of myelin.",
  },
];

const pathwaySteps = [
  { num: 1, title: "Pericyte loss" },
  { num: 2, title: "BBB breakdown" },
  { num: 3, title: "Astrocyte depolarization" },
  { num: 4, title: "Iron maldistribution" },
  { num: 5, title: "Fenton chemistry" },
  { num: 6, title: "Lipid peroxidation" },
  { num: 7, title: "Oligodendrocyte death" },
];

export function FrameworkSection() {
  const { currentStep } = useFullPage();
  const step = currentStep;

  return (
    <div className="h-full relative overflow-hidden">
      <ParallaxOrb
        className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-teal-600 opacity-10"
        speed={0.15}
      />

      <Container width="full" section className="relative z-10 h-full flex items-center">
        <div className="w-full">
          {/* Header — visible from step 1 */}
          <motion.div
            className="mb-16"
            animate={{
              opacity: step >= 1 ? 1 : 0,
              y: step >= 1 ? 0 : -10,
            }}
            transition={STEP_TRANSITION}
          >
            <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
              The Framework
            </span>
            <h2 className="mt-4 font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px]">
              Four pillars. One disease.
            </h2>
          </motion.div>

          {/* Pillar display: 4-column grid */}
          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <div key={pillar.letter} className="relative text-center">
                {/* Connector line (not on last) */}
                {i < pillars.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-gradient-to-r from-teal-600/40 to-transparent lg:block" />
                )}

                {/* Letter — always visible, scales down at step 1 */}
                <motion.span
                  className="glow-letter inline-block font-serif leading-none text-teal-400"
                  animate={{
                    fontSize: step >= 1 ? "80px" : "120px",
                  }}
                  transition={STEP_TRANSITION}
                >
                  {pillar.letter}
                </motion.span>

                {/* Title — visible from step 1 */}
                <motion.h3
                  className="mt-2 text-lg font-semibold text-white"
                  animate={{
                    opacity: step >= 1 ? 1 : 0,
                    y: step >= 1 ? 0 : 10,
                  }}
                  transition={STEP_TRANSITION}
                >
                  {pillar.title}
                </motion.h3>

                {/* Description — visible from step 1 */}
                <motion.p
                  className="mt-2 text-sm leading-relaxed text-gray-300"
                  animate={{
                    opacity: step >= 1 ? 1 : 0,
                    y: step >= 1 ? 0 : 10,
                  }}
                  transition={{ ...STEP_TRANSITION, delay: step >= 1 ? 0.05 * i : 0 }}
                >
                  {pillar.description}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Pathway chain — visible from step 1 */}
          <motion.div
            className="mb-16"
            animate={{
              opacity: step >= 1 ? 1 : 0,
              y: step >= 1 ? 0 : 20,
            }}
            transition={{ ...STEP_TRANSITION, delay: step >= 1 ? 0.15 : 0 }}
          >
            <div className="overflow-x-auto pb-4">
              <div className="flex items-start gap-0 min-w-[700px]">
                {pathwaySteps.map((ps, i) => (
                  <div key={ps.num} className="flex items-start">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center border border-teal-600 text-sm font-medium text-teal-400">
                        {ps.num}
                      </div>
                      <span className="mt-2 max-w-[90px] text-center text-xs leading-tight text-gray-400">
                        {ps.title}
                      </span>
                    </div>
                    {i < pathwaySteps.length - 1 && (
                      <div className="mt-4 h-px w-12 bg-gradient-to-r from-teal-600/60 to-teal-600/20 sm:w-16" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-center">
              <span className="font-serif text-[32px] text-gradient-teal leading-none">
                10–35 years
              </span>
              <span className="ml-3 text-sm text-gray-400">
                latent period before clinical symptoms
              </span>
            </p>
          </motion.div>

          {/* Convergence insight — visible from step 2 */}
          <motion.div
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 20,
            }}
            transition={STEP_TRANSITION}
          >
            <div className="glass-card border-l-4 border-l-teal-600 p-6">
              <p className="mb-2 font-semibold text-teal-400">
                Convergence, not single cause
              </p>
              <div className="text-sm text-gray-300">
                <ScrollRevealText
                  text="GBA1 mutations are the strongest genetic risk factor for Parkinson's, yet only 10-30% of carriers develop disease. This incomplete penetrance is a key clue: lysosomal dysfunction alone isn't sufficient. The PLIG framework explains what additional factors are required."
                  dimColor="rgba(107,114,128,1)"
                  brightColor="rgba(209,213,219,1)"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
