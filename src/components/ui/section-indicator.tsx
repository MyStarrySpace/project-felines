"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFullPage } from "./full-page-scroll";

const INDICATOR_SECTIONS = [
  { label: "Hero", slideIndex: 0 },
  { label: "Problem", slideIndex: 1 },
  { label: "Framework", slideIndex: 2 },
  { label: "Evidence", slideIndex: 3 },
  { label: "PNS", slideIndex: 5 },
  { label: "Conclusion", slideIndex: 6 },
];

function getActiveIndicator(currentSlide: number): number {
  for (let i = INDICATOR_SECTIONS.length - 1; i >= 0; i--) {
    if (currentSlide >= INDICATOR_SECTIONS[i].slideIndex) return i;
  }
  return 0;
}

export function SectionIndicator() {
  const { currentIndex, goToSlide, currentStep, totalSteps } = useFullPage();
  const activeIdx = getActiveIndicator(currentIndex);
  const visible = currentIndex > 0;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed left-1/2 top-20 z-40 -translate-x-1/2"
        >
          <div className="flex items-center gap-3 bg-navy-900/80 px-4 py-2 backdrop-blur-md border border-white/10">
            <span className="text-xs font-medium text-white">
              {INDICATOR_SECTIONS[activeIdx].label}
            </span>
            <div className="flex items-center gap-1.5">
              {INDICATOR_SECTIONS.map((section, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(section.slideIndex)}
                  className="relative flex items-center"
                  aria-label={`Go to ${section.label}`}
                >
                  {i === activeIdx ? (
                    <span className="relative block h-1.5 w-4 bg-white/20 overflow-hidden">
                      <motion.span
                        className="absolute inset-y-0 left-0 bg-teal-400"
                        initial={false}
                        animate={{
                          width: totalSteps > 1
                            ? `${((currentStep + 1) / totalSteps) * 100}%`
                            : "100%",
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </span>
                  ) : (
                    <span className="block h-1.5 w-1.5 bg-white/30 hover:bg-white/50 transition-all duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
