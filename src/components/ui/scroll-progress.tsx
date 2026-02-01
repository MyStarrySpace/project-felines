"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFullPage } from "./full-page-scroll";

/**
 * Slide configs mirrored from page.tsx so we can compute global progress.
 * Each entry is the number of steps for that slide index.
 */
const SLIDE_STEPS = [3, 4, 4, 2, 2, 1];

const SECTION_META = [
  { label: "Hero", desc: "The 99% failure rate" },
  { label: "Problem", desc: "Why trials keep failing" },
  { label: "Framework", desc: "The PLIG pathway" },
  { label: "Evidence", desc: "AD, PD, Long COVID" },
  { label: "Evidence B", desc: "ALS, MS, Prion disease" },
  { label: "Conclusion", desc: "Clinical implications" },
];

function getProgress(slideIndex: number, step: number): number {
  const totalSteps = SLIDE_STEPS.reduce((a, b) => a + b, 0);
  let completed = 0;
  for (let i = 0; i < slideIndex; i++) {
    completed += SLIDE_STEPS[i];
  }
  completed += step;
  return totalSteps > 0 ? completed / (totalSteps - 1) : 0;
}

/** Cumulative step index where each slide begins (for dot markers). */
function getSlideBoundaries(): number[] {
  const totalSteps = SLIDE_STEPS.reduce((a, b) => a + b, 0);
  const boundaries: number[] = [];
  let cumulative = 0;
  for (let i = 0; i < SLIDE_STEPS.length; i++) {
    boundaries.push(cumulative / (totalSteps - 1));
    cumulative += SLIDE_STEPS[i];
  }
  return boundaries;
}

export function ScrollProgress() {
  const { currentIndex, currentStep, goToSlide } = useFullPage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const progress = getProgress(currentIndex, currentStep);
  const boundaries = getSlideBoundaries();

  return (
    <div className="fixed right-3 top-0 z-40 flex h-screen w-3 items-center sm:right-4">
      {/* Track */}
      <div className="relative h-[60vh] w-[3px] rounded-full bg-white/10">
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 w-full origin-top rounded-full bg-teal-400"
          style={{ boxShadow: "0 0 8px rgba(45,212,191,0.5)" }}
          initial={false}
          animate={{ scaleY: progress }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          layout={false}
        >
          <div className="h-[60vh] w-full rounded-full bg-teal-400" />
        </motion.div>

        {/* Slide boundary dots */}
        {boundaries.map((pos, i) => {
          const isActive = currentIndex >= i;
          const isCurrent = currentIndex === i;
          const meta = SECTION_META[i];

          return (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${pos * 100}%` }}
            >
              <button
                type="button"
                onClick={() => goToSlide(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center"
                style={{ position: "absolute", left: "50%", top: "50%" }}
                aria-label={`Go to ${meta?.label ?? `section ${i + 1}`}`}
              >
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-teal-400" : "bg-white/30"
                  } ${isCurrent ? "shadow-[0_0_6px_2px_rgba(45,212,191,0.5)]" : ""}`}
                />
              </button>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredIndex === i && meta && (
                  <motion.div
                    initial={{ opacity: 0, x: 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 4 }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-navy-900/90 px-3 py-2 backdrop-blur-sm"
                  >
                    {/* Arrow pointing right */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="h-0 w-0 border-y-[5px] border-l-[5px] border-y-transparent border-l-navy-900/90" />
                    </div>
                    <p className="text-xs font-semibold text-white">
                      {meta.label}
                    </p>
                    <p className="text-[11px] text-white/50">{meta.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
