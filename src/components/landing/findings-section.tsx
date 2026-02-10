"use client";

import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { findings } from "@/data/landing/findings";

export function FindingsSection() {
  const { currentStep } = useFullPage();
  const step = currentStep;

  return (
    <div className="h-full relative overflow-hidden" role="region" aria-label="Findings">
      <ParallaxOrb
        className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-teal-600 opacity-10"
        speed={0.15}
      />

      {/* Step 0: U-shaped iron toxicity */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center text-center px-6 max-w-4xl">
          <h2 className="font-serif text-[38px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[52px]">
            {findings[0].headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-3xl">
            {findings[0].body}
          </p>
          {findings[0].stat && (
            <div className="mt-8">
              <span className="font-serif text-[48px] text-gradient-teal leading-none sm:text-[56px]">
                {findings[0].stat.value}
              </span>
              <p className="mt-1 text-sm font-medium text-gray-400">
                {findings[0].stat.label}
              </p>
            </div>
          )}
          <div className="mt-8 border-l-2 border-teal-600 pl-6 text-left max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-300">
              {findings[0].insight}
            </p>
          </div>
        </div>
      </StepFragment>

      {/* Step 1: Amyloid-iron mechanism */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center text-center px-6 max-w-4xl">
          <h2 className="font-serif text-[38px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[52px]">
            {findings[1].headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-3xl">
            {findings[1].body}
          </p>
          {findings[1].stat && (
            <div className="mt-8">
              <span className="font-serif text-[48px] text-gradient-teal leading-none sm:text-[56px]">
                {findings[1].stat.value}
              </span>
              <p className="mt-1 text-sm font-medium text-gray-400">
                {findings[1].stat.label}
              </p>
            </div>
          )}
          <div className="mt-8 border-l-2 border-teal-600 pl-6 text-left max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-300">
              {findings[1].insight}
            </p>
          </div>
        </div>
      </StepFragment>

      {/* Step 2: Species comparison — bottom-left anchored */}
      <StepFragment
        step={step}
        appear={2}
        className="!items-end !justify-start pb-20 pl-10 sm:pb-28 sm:pl-16"
      >
        <div className="flex flex-col max-w-3xl px-6">
          <h2 className="font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px]">
            {findings[2].headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            {findings[2].body}
          </p>
          <div className="mt-6 border-l-2 border-teal-600 pl-6">
            <p className="text-lg leading-relaxed text-gray-300">
              {findings[2].insight}
            </p>
          </div>
        </div>
      </StepFragment>
    </div>
  );
}
