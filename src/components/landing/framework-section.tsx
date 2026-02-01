"use client";

import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { AnimatedShape } from "@/components/ui/animated-shape";

const layers = [
  {
    letter: "Fe",
    title: "Iron",
    description:
      "The core pathogenic element. Essential for myelin but toxic when mislocalized. Fenton chemistry generates hydroxyl radicals that destroy PUFA-rich membranes.",
  },
  {
    letter: "L",
    title: "Lysosome",
    description:
      "GPX4, the NAD+/SIRT3 axis, and glutathione protect membranes from peroxidation. Failure here exposes oligodendrocytes to ferroptotic death.",
  },
  {
    letter: "I",
    title: "Insulation",
    description:
      "Myelin sheaths, lysosomes, ferritin, tau, and alpha-synuclein. Oligodendrocytes provide both electrical insulation (myelin) and iron insulation (FTH1 export to neurons). When insulation fails, labile iron triggers Fenton chemistry.",
  },
  {
    letter: "N",
    title: "Neurovascular",
    description:
      "Pericytes, BBB, astrocyte endfeet, and Schwann cell vasculature. Pericyte death breaches the barrier that controls brain iron entry.",
  },
  {
    letter: "E",
    title: "Export",
    description:
      "Brain-level (ferroportin/Cp on endfeet, glymphatic, AQP4) and systemic (liver hepcidin/bile, spleen recycling, gut absorption/microbiome) iron export. Failure here means iron accumulates at normal intake.",
  },
];

const defenseSteps = [
  { num: 1, title: "Neurovascular breach" },
  { num: 2, title: "Iron entry" },
  { num: 3, title: "Insulation overload" },
  { num: 4, title: "Lysosome failure" },
  { num: 5, title: "Export stall" },
  { num: 6, title: "Ferroptosis cascade" },
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

      {/* Corner bracket decorations for FELINE letters step */}
      <AnimatedShape
        direction="left"
        shape="bracket"
        className="top-[15%] left-[10%]"
        delay={0.1}
        visible={step === 0}
      />
      <AnimatedShape
        direction="right"
        shape="bracket"
        className="top-[15%] right-[10%] rotate-90"
        delay={0.15}
        visible={step === 0}
      />
      <AnimatedShape
        direction="left"
        shape="bracket"
        className="bottom-[15%] left-[10%] -rotate-90"
        delay={0.2}
        visible={step === 0}
      />
      <AnimatedShape
        direction="right"
        shape="bracket"
        className="bottom-[15%] right-[10%] rotate-180"
        delay={0.25}
        visible={step === 0}
      />

      {/* Step 0: Large FELINE letters — centered */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex items-center gap-6 sm:gap-10">
          {layers.map((layer) => (
            <span
              key={layer.letter}
              className="glow-letter font-serif text-[100px] leading-none text-teal-400 sm:text-[140px]"
            >
              {layer.letter}
            </span>
          ))}
        </div>
      </StepFragment>

      {/* Step 1: Section header + layer letter+title grid */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center text-center px-6">
          <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
            The Framework
          </span>
          <h2 className="mt-4 font-serif text-[38px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[52px]">
            Five defense layers. One threshold.
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-8 sm:grid-cols-5 sm:gap-10">
            {layers.map((layer) => (
              <div key={layer.letter} className="text-center">
                <span className="glow-letter inline-block font-serif text-[56px] leading-none text-teal-400 sm:text-[72px]">
                  {layer.letter}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {layer.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </StepFragment>

      {/* Step 2: Layer descriptions + defense chain + "10–35 years" */}
      <StepFragment step={step} appear={2} recede={3}>
        <div className="flex flex-col items-center px-6 max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {layers.map((layer) => (
              <div key={layer.letter} className="text-center">
                <span className="glow-letter inline-block font-serif text-[40px] leading-none text-teal-400">
                  {layer.letter}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {layer.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-gray-300">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 w-full overflow-x-auto pb-4">
            <div className="flex items-start gap-0 min-w-[700px] justify-center">
              {defenseSteps.map((ps, i) => (
                <div key={ps.num} className="flex items-start">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center border border-teal-600 text-sm font-medium text-teal-400">
                      {ps.num}
                    </div>
                    <span className="mt-2 max-w-[90px] text-center text-sm leading-tight text-gray-400">
                      {ps.title}
                    </span>
                  </div>
                  {i < defenseSteps.length - 1 && (
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
            <span className="ml-3 text-base text-gray-400">
              latent period before clinical symptoms
            </span>
          </p>
        </div>
      </StepFragment>

      {/* Step 3: Defense failure insight callout — bottom-left anchored */}
      <StepFragment step={step} appear={3} className="!items-end !justify-start pb-20 pl-10 sm:pb-28 sm:pl-16">
        <div className="max-w-2xl px-6">
          <div className="border-l-2 border-teal-600 pl-6">
            <p className="mb-2 font-semibold text-teal-400">
              Multi-layer failure, not single cause
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              GBA1 mutations are the strongest genetic risk factor for Parkinson&apos;s, yet only 10–30% of carriers develop disease. One compromised layer isn&apos;t enough.
            </p>
          </div>
        </div>
      </StepFragment>
    </div>
  );
}
