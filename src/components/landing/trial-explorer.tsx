"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { trialCategories, chelationTrifecta } from "@/data/landing/trial-categories";
import { failedTrials } from "@/data/landing/failed-trials";

function TrialAccordion({
  trial,
  isOpen,
  onToggle,
}: {
  trial: (typeof failedTrials)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-3 text-left transition-colors hover:text-teal-400"
      >
        <div className="min-w-0">
          <span className="text-sm font-semibold text-white">{trial.trial}</span>
          <span className="ml-2 text-sm text-gray-500">{trial.target}</span>
        </div>
        <ChevronDown
          className={`ml-2 h-4 w-4 shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 border-l border-teal-600/40">
              <p className="text-sm text-gray-400">
                <span className="font-medium text-gray-300">Result:</span> {trial.result}
              </p>
              <p className="mt-1 text-sm text-gray-400">
                <span className="font-medium text-teal-400/80">Analysis:</span> {trial.ironAnalysis}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TrialExplorer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { setScrollLocked } = useFullPage();
  const [openTrialIndex, setOpenTrialIndex] = useState<number | null>(null);

  useEffect(() => {
    setScrollLocked(isOpen);
    return () => setScrollLocked(false);
  }, [isOpen, setScrollLocked]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Trial Explorer"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 z-30 h-[85vh] overflow-y-auto rounded-t-2xl bg-navy-900/95 backdrop-blur-xl border-t border-white/10"
        >
          {/* Close button */}
          <div className="sticky top-0 z-10 flex justify-end p-4 bg-navy-900/80 backdrop-blur-sm">
            <button
              onClick={onClose}
              aria-label="Close trial explorer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="px-6 pb-8 sm:px-10 space-y-8">
            {/* Section 1: Drug Validation Summary */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Drug Validation Summary</h3>
              <p className="text-sm text-gray-500 mb-4">
                28 of 28 outcomes matched
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" aria-label="Drug validation summary: 28 of 28 outcomes matched">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th scope="col" className="py-2 pr-4 font-medium text-gray-400">Category</th>
                      <th scope="col" className="py-2 pr-4 font-medium text-gray-400 text-center">Count</th>
                      <th scope="col" className="py-2 pr-4 font-medium text-gray-400">Expected outcome</th>
                      <th scope="col" className="py-2 pr-4 font-medium text-gray-400">Outcome</th>
                      <th scope="col" className="py-2 font-medium text-teal-400 text-center">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trialCategories.map((cat) => (
                      <tr key={cat.category} className="border-b border-white/5">
                        <td className="py-2.5 pr-4 font-medium text-white">{cat.category}</td>
                        <td className="py-2.5 pr-4 text-center text-gray-300">{cat.count}</td>
                        <td className="py-2.5 pr-4 text-gray-400">{cat.expectedOutcome}</td>
                        <td className="py-2.5 pr-4 text-gray-400">{cat.actualOutcome}</td>
                        <td className="py-2.5 text-center font-mono font-semibold text-teal-400">
                          {cat.accuracy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Chelation Trifecta */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">The Chelation Trifecta</h3>
              <p className="text-sm text-gray-500 mb-4">
                Same treatment, three diseases, three predicted outcomes. All correct.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {chelationTrifecta.map((row) => (
                  <div
                    key={row.disease}
                    className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
                  >
                    <p className="font-semibold text-white">{row.disease}</p>
                    <p className="mt-1 text-sm font-medium text-teal-400/80">{row.chelationResult}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {row.ironAnalysis}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Individual Trial Cards */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Individual Trials</h3>
              <p className="text-sm text-gray-500 mb-4">
                Click to expand analysis
              </p>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] px-4">
                {failedTrials.map((trial, i) => (
                  <TrialAccordion
                    key={trial.trial}
                    trial={trial}
                    isOpen={openTrialIndex === i}
                    onToggle={() => setOpenTrialIndex(openTrialIndex === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
