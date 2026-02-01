"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { pnsHeadline, pnsComparison, pnsInsight } from "@/data/landing/pns";

export function PnsSection() {
  const { currentStep } = useFullPage();
  const step = currentStep;

  return (
    <div className="h-full relative overflow-hidden">
      <ParallaxOrb
        className="left-1/4 top-1/3 h-[500px] w-[500px] bg-teal-600 opacity-10"
        speed={0.15}
      />

      {/* Step 0: Headline + key stat */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center px-6 max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
            {pnsHeadline.kicker}
          </span>
          <h2 className="mt-4 font-serif text-[38px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[52px] text-center">
            {pnsHeadline.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
            {pnsHeadline.body}
          </p>
          <div className="mt-10 flex flex-col items-center">
            <span className="text-gradient-teal font-serif text-[80px] leading-none sm:text-[100px]">
              <AnimatedCounter value={pnsHeadline.stat} />
            </span>
            <p className="mt-1 text-sm font-medium text-gray-400">
              {pnsHeadline.statLabel}
            </p>
          </div>
        </div>
      </StepFragment>

      {/* Step 1: CNS vs PNS comparison table */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center px-6 max-w-4xl w-full">
          <h3 className="mb-8 font-serif text-2xl text-white text-center">
            CNS vs PNS defense layers
          </h3>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-4 text-left text-sm font-medium text-teal-400 w-16">
                    Layer
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">
                    CNS
                  </th>
                  <th className="py-3 pl-4 text-left text-sm font-medium text-gray-400">
                    PNS
                  </th>
                </tr>
              </thead>
              <tbody>
                {pnsComparison.map((row) => (
                  <tr
                    key={row.layer}
                    className="border-b border-white/5"
                  >
                    <td className="py-3 pr-4">
                      <span className="font-serif text-lg text-teal-400">
                        {row.layer}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-base text-gray-300">
                      {row.cns}
                    </td>
                    <td className="py-3 pl-4 text-base text-gray-300">
                      {row.pns}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </StepFragment>

      {/* Step 2: N-layer compartment boundary insight — bottom-anchored */}
      <StepFragment
        step={step}
        appear={2}
        className="!items-end !justify-start pb-20 pl-10 sm:pb-28 sm:pl-16"
      >
        <div className="max-w-2xl px-6">
          <div className="border-l-2 border-teal-600 pl-6">
            <p className="mb-2 font-semibold text-teal-400">
              {pnsInsight.title}
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              {pnsInsight.body}
            </p>
          </div>
        </div>
      </StepFragment>
    </div>
  );
}
