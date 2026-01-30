"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { ProblemBars } from "./problem-bars";
import { useFullPage } from "@/components/ui/full-page-scroll";

const STEP_TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

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
      <Container width="full" section className="h-full flex items-center">
        <div className="w-full">
          {/* Two-column layout */}
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
            {/* Left column: text */}
            <div>
              <motion.div
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={STEP_TRANSITION}
              >
                <span className="text-sm font-medium uppercase tracking-[0.05em] text-teal-400">
                  The Problem
                </span>
              </motion.div>

              <motion.div
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={STEP_TRANSITION}
              >
                <h2 className="mt-4 text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[56px]">
                  Every major trial has failed.{" "}
                  <span className="text-gray-400">The model is wrong.</span>
                </h2>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-col gap-6"
                animate={{
                  opacity: step >= 1 ? 1 : 0,
                  y: step >= 1 ? 0 : 20,
                }}
                transition={STEP_TRANSITION}
              >
                {stats.map((stat, i) => (
                  <p
                    key={i}
                    className="text-[24px] font-semibold leading-tight text-white sm:text-[28px]"
                  >
                    {stat.prefix}
                    <span className="text-teal-400">{stat.highlight}</span>{" "}
                    {stat.text}
                    {stat.suffix}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Right column: scroll-driven bars */}
            <motion.div
              animate={{
                opacity: step >= 1 ? 1 : 0,
                y: step >= 1 ? 0 : 30,
              }}
              transition={{ ...STEP_TRANSITION, delay: step >= 1 ? 0.1 : 0 }}
            >
              <ProblemBars />
            </motion.div>
          </div>

          {/* Insight block below columns */}
          <motion.div
            className="mt-16"
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 20,
            }}
            transition={STEP_TRANSITION}
          >
            <div className="glass-card border-l-4 border-l-teal-600 p-6">
              <p className="mb-2 font-semibold text-white">
                The wrong model, not the wrong drugs
              </p>
              <div className="text-sm text-gray-300">
                <ScrollRevealText
                  text="Every failed Alzheimer's drug targeted a single molecule: amyloid, tau, BACE. The PLIG framework explains why: neurodegeneration involves four converging systems. Blocking one protein can't stop a cascade that spans the vascular, lysosomal, iron, and glial networks."
                  dimColor="rgba(107,114,128,1)"
                  brightColor="rgba(209,213,219,1)"
                />
              </div>
            </div>
          </motion.div>

          {/* Trial failures list */}
          <motion.div
            className="mt-8"
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 20,
            }}
            transition={{ ...STEP_TRANSITION, delay: step >= 2 ? 0.1 : 0 }}
          >
            <ul className="flex flex-col gap-2">
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
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
