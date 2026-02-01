"use client";

import { Container } from "@/components/ui/container";
import { ProblemBars } from "./problem-bars";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { AnimatedShape } from "@/components/ui/animated-shape";

const stats = [
  {
    text: "drugs failed",
    highlight: "400+",
  },
  {
    text: "spent. Zero cures.",
    highlight: "$42.5 billion",
  },
  {
    text: "BACE inhibitors",
    highlight: "worsened",
    suffix: " cognition",
    prefix: "5 ",
  },
];

const trialFailures = [
  "Solanezumab — cleared amyloid, no benefit",
  "Verubecestat — BACE inhibitor, cognition worsened",
  "Deferiprone — chelation backfired",
];

export function ProblemSection() {
  const { currentStep } = useFullPage();
  const step = currentStep;

  return (
    <div className="h-full relative overflow-hidden">
      {/* Decorative lines for bars step */}
      <AnimatedShape
        direction="left"
        shape="line"
        className="top-[30%] left-0 w-[40%]"
        delay={0}
        visible={step === 2}
      />
      <AnimatedShape
        direction="left"
        shape="line"
        className="top-[50%] left-0 w-[25%]"
        delay={0.1}
        visible={step === 2}
      />

      {/* Step 0: Section kicker + heading — top-left anchored */}
      <StepFragment step={step} appear={0} recede={1} className="!items-start !justify-start pt-24 pl-10 sm:pt-32 sm:pl-16">
        <div className="flex flex-col items-start text-left max-w-3xl px-6">
          <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
            The Problem
          </span>
          <h2 className="mt-4 text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[64px]">
            Every major trial has failed.{" "}
            <span className="text-gray-400">The model is wrong.</span>
          </h2>
        </div>
      </StepFragment>

      {/* Step 1: Three stats — large, centered */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center gap-8">
          {stats.map((stat, i) => (
            <p
              key={i}
              className="text-[36px] font-semibold leading-tight text-white sm:text-[44px] text-center"
            >
              {stat.prefix}
              <span className="text-teal-400">{stat.highlight}</span>{" "}
              {stat.text}
              {stat.suffix}
            </p>
          ))}
        </div>
      </StepFragment>

      {/* Step 2: ProblemBars chart — centered, full width */}
      <StepFragment step={step} appear={2} recede={3}>
        <Container width="full" className="px-6">
          <ProblemBars />
        </Container>
      </StepFragment>

      {/* Step 3: Insight callout + trial failures — bottom-right anchored */}
      <StepFragment step={step} appear={3} className="!items-end !justify-end pb-20 pr-10 sm:pb-28 sm:pr-16">
        <div className="max-w-2xl px-6">
          <div className="border-l-2 border-teal-600 pl-6">
            <p className="mb-2 font-semibold text-white">
              The wrong model, not the wrong drugs
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Every failed Alzheimer&apos;s drug targeted a single molecule: amyloid, tau, BACE. The PLIG framework explains why: neurodegeneration involves four converging systems. Blocking one protein can&apos;t stop a cascade that spans the vascular, lysosomal, iron, and glial networks.
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-2">
            {trialFailures.map((trial) => (
              <li
                key={trial}
                className="flex items-center gap-3 text-base text-gray-400"
              >
                <span className="h-px w-2 shrink-0 bg-teal-600" />
                {trial}
              </li>
            ))}
          </ul>
        </div>
      </StepFragment>
    </div>
  );
}
