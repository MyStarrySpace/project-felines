"use client";

import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";

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

      {/* Step 0: Large PLIG letters — centered */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex items-center gap-8 sm:gap-12">
          {pillars.map((pillar) => (
            <span
              key={pillar.letter}
              className="glow-letter font-serif text-[100px] leading-none text-teal-400 sm:text-[120px]"
            >
              {pillar.letter}
            </span>
          ))}
        </div>
      </StepFragment>

      {/* Step 1: Section header + pillar letter+title grid */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center text-center px-6">
          <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
            The Framework
          </span>
          <h2 className="mt-4 font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px]">
            Four pillars. One disease.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.letter} className="text-center">
                <span className="glow-letter inline-block font-serif text-[64px] leading-none text-teal-400 sm:text-[80px]">
                  {pillar.letter}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </StepFragment>

      {/* Step 2: Pillar descriptions + pathway chain + "10–35 years" */}
      <StepFragment step={step} appear={2} recede={3}>
        <div className="flex flex-col items-center px-6 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.letter} className="text-center">
                <span className="glow-letter inline-block font-serif text-[48px] leading-none text-teal-400">
                  {pillar.letter}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 w-full overflow-x-auto pb-4">
            <div className="flex items-start gap-0 min-w-[700px] justify-center">
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
        </div>
      </StepFragment>

      {/* Step 3: Convergence insight callout */}
      <StepFragment step={step} appear={3}>
        <div className="max-w-2xl px-6">
          <div className="border-l-2 border-teal-600 pl-6">
            <p className="mb-2 font-semibold text-teal-400">
              Convergence, not single cause
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              GBA1 mutations are the strongest genetic risk factor for Parkinson&apos;s, yet only 10–30% of carriers develop disease. This incomplete penetrance is a key clue: lysosomal dysfunction alone isn&apos;t sufficient. The PLIG framework explains what additional factors are required.
            </p>
          </div>
        </div>
      </StepFragment>
    </div>
  );
}
