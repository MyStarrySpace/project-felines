"use client";

import { Container } from "@/components/ui/container";
import { ProblemBars } from "./problem-bars";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";

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
      {/* Step 0: Section kicker + heading */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center text-center max-w-3xl px-6">
          <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
            The Problem
          </span>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[56px]">
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
              className="text-[28px] font-semibold leading-tight text-white sm:text-[36px] text-center"
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

      {/* Step 3: Insight callout + trial failures list */}
      <StepFragment step={step} appear={3}>
        <div className="max-w-2xl px-6">
          <div className="border-l-2 border-teal-600 pl-6">
            <p className="mb-2 font-semibold text-white">
              The wrong model, not the wrong drugs
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              Every failed Alzheimer&apos;s drug targeted a single molecule: amyloid, tau, BACE. The PLIG framework explains why: neurodegeneration involves four converging systems. Blocking one protein can&apos;t stop a cascade that spans the vascular, lysosomal, iron, and glial networks.
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-2">
            {trialFailures.map((trial) => (
              <li
                key={trial}
                className="flex items-center gap-3 text-sm text-gray-400"
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
