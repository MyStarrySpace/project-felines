"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrollContext } from "@/components/providers/scroll-context";

export function SectionIndicator() {
  const { activeSection, sections, scrollToSection } = useScrollContext();
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLabel = sections.find((s) => s.id === activeSection)?.label ?? "";
  const visible = !!activeSection && sections.length > 0;

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

  // Close when active section changes
  useEffect(() => {
    setExpanded(false);
  }, [activeSection]);

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
          <nav role="navigation" aria-label="Section navigator">
            <AnimatePresence mode="wait" initial={false}>
              {expanded ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden bg-navy-900/95 border border-white/10"
                >
                  <ul className="py-1" role="list">
                    {sections.map((section) => {
                      const isCurrent = activeSection === section.id;
                      return (
                        <li key={section.id}>
                          <button
                            onClick={() => {
                              scrollToSection(section.id);
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
                  className="flex items-center gap-3 bg-navy-900/80 px-4 py-2 border border-white/10"
                  aria-expanded={false}
                  aria-haspopup="true"
                >
                  <span className="text-xs font-medium text-white" aria-live="polite">
                    {activeLabel}
                  </span>
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
