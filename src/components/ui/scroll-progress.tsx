"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollContext } from "@/components/providers/scroll-context";

export function ScrollProgress() {
  const { progress, activeSection, sections, scrollToSection } = useScrollContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [trackHovered, setTrackHovered] = useState(false);

  const showLabels = trackHovered;

  return (
    <nav
      className="fixed right-0 top-0 z-40 hidden h-screen items-center pr-3 sm:pr-4 md:flex"
      style={{ width: 160 }}
      role="navigation"
      aria-label={`Scroll progress: ${Math.round(progress * 100)}%`}
      onMouseEnter={() => setTrackHovered(true)}
      onMouseLeave={() => {
        setTrackHovered(false);
        setHoveredIndex(null);
      }}
    >
      {/* Track */}
      <div
        className="relative ml-auto h-[60vh] w-[2px] bg-white/8"
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 w-full origin-top bg-teal-400"
          initial={false}
          animate={{ scaleY: progress }}
          transition={{ duration: 0.1, ease: "linear" }}
          layout={false}
        >
          <div className="h-[60vh] w-full bg-teal-400" />
        </motion.div>

        {/* Section dots */}
        {sections.map((section, i) => {
          const isActive = activeSection === section.id;
          const dotPosition = sections.length > 1 ? i / (sections.length - 1) : 0;

          return (
            <div
              key={section.id}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${dotPosition * 100}%` }}
            >
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center"
                style={{ position: "absolute", left: "50%", top: "50%" }}
                aria-label={`Go to ${section.label}`}
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    isActive
                      ? "h-2 w-2 bg-teal-400"
                      : "h-1.5 w-1.5 bg-white/25"
                  }`}
                />
              </button>

              {/* Section label on hover */}
              <AnimatePresence>
                {(showLabels || hoveredIndex === i) && (
                  <motion.div
                    initial={{ opacity: 0, x: 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 4 }}
                    transition={{ duration: 0.12 }}
                    className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap"
                  >
                    <p
                      className={`text-xs font-medium transition-colors duration-200 ${
                        isActive ? "text-teal-400" : "text-white/40"
                      }`}
                    >
                      {section.label}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
