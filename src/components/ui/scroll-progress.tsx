"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollContext } from "@/components/providers/scroll-context";

// Teaser stage progress ranges that drive the cream fill
const CREAM_FILL_START = 0.04;
const CREAM_FILL_END = 0.26;

/**
 * Compute the CSS clip-path that reveals the cream-mode sidebar layer
 * in sync with the teaser section's cream background fill.
 */
function computeCreamClip(
  sections: { id: string; element: HTMLElement }[],
  sectionProgress: Record<string, number>
): string {
  const hidden = "inset(100% 0 0 0)";
  if (typeof window === "undefined") return hidden;

  const teaserSection = sections.find((s) => s.id === "teaser");
  if (!teaserSection) return hidden;

  const tp = sectionProgress["teaser"] ?? 0;
  if (tp <= 0) return hidden;

  const el = teaserSection.element;
  const sh = el.offsetHeight;
  const vh = window.innerHeight;
  if (sh <= 0 || vh <= 0) return hidden;

  // Convert section-level progress → StickyScrollStage internal progress
  const entryP = vh / (sh + vh); // section top reaches viewport top
  const exitP = sh / (sh + vh); // section bottom reaches viewport bottom

  if (tp < entryP) return hidden;

  if (tp <= exitP) {
    // Sticky phase: cream fill rising from bottom
    const stageP = (tp - entryP) / (exitP - entryP);
    if (stageP <= CREAM_FILL_START) return hidden;

    const fillFraction = Math.min(
      1,
      (stageP - CREAM_FILL_START) / (CREAM_FILL_END - CREAM_FILL_START)
    );
    const clipTop = (1 - fillFraction) * 100;
    return `inset(${clipTop}% 0 0% 0)`;
  }

  // Post-sticky: section scrolling away, cream slides up
  const rect = el.getBoundingClientRect();
  if (rect.bottom <= 0) return hidden;

  const clipBottom = Math.max(0, (1 - rect.bottom / vh) * 100);
  return `inset(0% 0 ${clipBottom}% 0)`;
}

/** Color scheme for dark or cream backgrounds */
interface Colors {
  track: string;
  fill: string;
  activeDot: string;
  inactiveDot: string;
  activeLabel: string;
  inactiveLabel: string;
}

const DARK: Colors = {
  track: "rgba(255,255,255,0.15)",
  fill: "#2dd4bf",
  activeDot: "#2dd4bf",
  inactiveDot: "rgba(255,255,255,0.35)",
  activeLabel: "#2dd4bf",
  inactiveLabel: "rgba(255,255,255,0.4)",
};

const CREAM: Colors = {
  track: "rgba(26,15,10,0.12)",
  fill: "#92400E",
  activeDot: "#92400E",
  inactiveDot: "rgba(26,15,10,0.25)",
  activeLabel: "#92400E",
  inactiveLabel: "rgba(26,15,10,0.4)",
};

export function ScrollProgress() {
  const { progress, activeSection, sections, sectionProgress, scrollToSection } =
    useScrollContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [trackHovered, setTrackHovered] = useState(false);

  const showLabels = trackHovered;
  const creamClip = computeCreamClip(sections, sectionProgress);

  /** Render the track + fill + dots for a given color scheme */
  const renderTrack = (colors: Colors, interactive: boolean) => (
    <div
      className="relative h-[60vh] w-[2px]"
      style={{ backgroundColor: colors.track }}
      {...(interactive
        ? {
            role: "progressbar",
            "aria-valuenow": Math.round(progress * 100),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
          }
        : {})}
    >
      {/* Fill */}
      <motion.div
        className="absolute left-0 top-0 w-full origin-top"
        initial={false}
        animate={{ scaleY: progress }}
        transition={{ duration: 0.1, ease: "linear" }}
        layout={false}
      >
        <div
          className="h-[60vh] w-full"
          style={{ backgroundColor: colors.fill }}
        />
      </motion.div>

      {/* Section dots */}
      {sections.map((section, i) => {
        const isActive = activeSection === section.id;
        const dotPosition =
          sections.length > 1 ? i / (sections.length - 1) : 0;

        return (
          <div
            key={section.id}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${dotPosition * 100}%` }}
          >
            {interactive ? (
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
                    isActive ? "h-2 w-2" : "h-1.5 w-1.5"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? colors.activeDot
                      : colors.inactiveDot,
                  }}
                />
              </button>
            ) : (
              <div
                className="flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                style={{ position: "absolute", left: "50%", top: "50%" }}
              >
                <span
                  className={`block rounded-full ${
                    isActive ? "h-2 w-2" : "h-1.5 w-1.5"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? colors.activeDot
                      : colors.inactiveDot,
                  }}
                />
              </div>
            )}

            {/* Section label */}
            {interactive ? (
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
                      className="text-xs font-medium"
                      style={{
                        color: isActive
                          ? colors.activeLabel
                          : colors.inactiveLabel,
                      }}
                    >
                      {section.label}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              (showLabels || hoveredIndex === i) && (
                <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap">
                  <p
                    className="text-xs font-medium"
                    style={{
                      color: isActive
                        ? colors.activeLabel
                        : colors.inactiveLabel,
                    }}
                  >
                    {section.label}
                  </p>
                </div>
              )
            )}
          </div>
        );
      })}
    </div>
  );

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
      {/* Dark-mode layer (always visible, interactive) */}
      <div className="ml-auto">{renderTrack(DARK, true)}</div>

      {/* Cream-mode overlay (clipped to cream background, non-interactive) */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-end pr-3 sm:pr-4"
        style={{ clipPath: creamClip }}
        aria-hidden="true"
      >
        {renderTrack(CREAM, false)}
      </div>
    </nav>
  );
}
