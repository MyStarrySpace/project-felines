"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useFullPage } from "./full-page-scroll";

const INDICATOR_SECTIONS = [
  { label: "Hero", slideIndex: 0 },
  { label: "Iron", slideIndex: 1 },
  { label: "Problem", slideIndex: 2 },
  { label: "Findings", slideIndex: 3 },
  { label: "Evidence", slideIndex: 4 },
  { label: "Conclusion", slideIndex: 5 },
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
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!expanded) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [expanded]);

  // Close when slide changes
  useEffect(() => {
    setExpanded(false);
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed left-1/2 top-5 z-40 -translate-x-1/2 md:hidden"
        >
          <nav
            role="navigation"
            aria-label="Presentation section navigator"
          >
            <AnimatePresence mode="wait" initial={false}>
              {expanded ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden rounded-lg bg-navy-900/95 border border-white/10 backdrop-blur-md"
                >
                  <ul className="py-1" role="list">
                    {INDICATOR_SECTIONS.map((section, i) => {
                      const isCurrent = i === activeIdx;
                      return (
                        <li key={i}>
                          <button
                            onClick={() => {
                              goToSlide(section.slideIndex);
                              setExpanded(false);
                            }}
                            className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                              isCurrent
                                ? "text-teal-400 font-medium"
                                : "text-gray-400 hover:text-white"
                            }`}
                            aria-current={isCurrent ? "step" : undefined}
                          >
                            <span>{section.label}</span>
                            {isCurrent && (
                              <span className="ml-3 h-1.5 w-1.5 rounded-full bg-teal-400" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ) : (
                <motion.button
                  key="collapsed"
                  type="button"
                  onClick={() => setExpanded(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-3 rounded-lg bg-navy-900/80 px-4 py-2 backdrop-blur-md border border-white/10"
                  aria-expanded={false}
                  aria-haspopup="true"
                >
                  <span className="text-xs font-medium text-white" aria-live="polite">
                    {INDICATOR_SECTIONS[activeIdx].label}
                  </span>
                  <div className="flex items-center gap-1.5" role="list">
                    {INDICATOR_SECTIONS.map((section, i) => (
                      <span
                        key={i}
                        role="listitem"
                        aria-label={section.label}
                      >
                        {i === activeIdx ? (
                          <span className="relative block h-1.5 w-4 bg-white/20 overflow-hidden rounded-sm">
                            <motion.span
                              className="absolute inset-y-0 left-0 bg-teal-400 rounded-sm"
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
                          <span className="block h-1.5 w-1.5 rounded-full bg-white/30" />
                        )}
                      </span>
                    ))}
                  </div>
                  <ChevronDown className="h-3 w-3 text-gray-500" />
                </motion.button>
              )}
            </AnimatePresence>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
