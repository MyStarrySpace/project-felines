"use client";

import { useState } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { WhatIfLines, WhatIfLinesMobile } from "@/components/landing/what-if-lines";
import { ProteinTrials, ProteinTrialsMobile } from "@/components/landing/protein-trials";
import { teaserContent } from "@/data/landing/teaser";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const FILL_BG = "#EDE6DB";
const DARK_TEXT = "#1A0F0A";
const DARK_GOLD = "#92400E";

/** Wrap occurrences of "iron" in <em> */
function emphasize(text: string) {
  const parts = text.split(/(iron)/i);
  return parts.map((p, i) =>
    p.toLowerCase() === "iron" ? <em key={i}>{p}</em> : p
  );
}

/** Quote text rendered in either original (light-on-dark) or inverted (dark-on-light) colors */
function QuoteText({ inverted = false }: { inverted?: boolean }) {
  const whiteStyle = inverted ? { color: DARK_TEXT } : undefined;
  const goldStyle = inverted ? { color: DARK_GOLD } : undefined;
  const whiteClass = inverted ? "" : "text-white";
  const goldClass = inverted ? "" : "text-teal-400";

  return (
    <div className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.8] tracking-[-0.02em] text-center">
      <motion.p
        className={whiteClass}
        style={whiteStyle}
        initial={{ clipPath: "inset(-0.2em 100% -0.2em 0)" }}
        animate={{ clipPath: "inset(-0.2em 0% -0.2em 0)" }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        {teaserContent.quote.line1}
      </motion.p>
      <motion.p
        className={goldClass}
        style={goldStyle}
        initial={{ clipPath: "inset(-0.2em 100% -0.2em 0)" }}
        animate={{ clipPath: "inset(-0.2em 0% -0.2em 0)" }}
        transition={{ duration: 1, delay: 0.7, ease: EASE }}
      >
        {emphasize(teaserContent.quote.line1Gold)}
      </motion.p>
      <motion.p
        className={`${whiteClass} mt-3`}
        style={whiteStyle}
        initial={{ clipPath: "inset(-0.2em 100% -0.2em 0)" }}
        animate={{ clipPath: "inset(-0.2em 0% -0.2em 0)" }}
        transition={{ duration: 1, delay: 1.3, ease: EASE }}
      >
        {teaserContent.quote.line2}
      </motion.p>
      <motion.p
        className={goldClass}
        style={goldStyle}
        initial={{ clipPath: "inset(-0.2em 100% -0.2em 0)" }}
        animate={{ clipPath: "inset(-0.2em 0% -0.2em 0)" }}
        transition={{ duration: 1, delay: 1.7, ease: EASE }}
      >
        {emphasize(teaserContent.quote.line2Gold)}
      </motion.p>
    </div>
  );
}

function TeaserStage({ progress }: { progress: MotionValue<number> }) {
  // Timeline: 3 beats over 330vh (230vh travel)

  // --- Beat 1 (0.00–0.34): Quote + fill rise ---
  const fillTop = useTransform(progress, [0.04, 0.26], [100, 0]);
  const fillClip = useTransform(fillTop, (v) => `inset(${v}% 0 0 0)`);
  const quoteHidden = useTransform(progress, (v) =>
    v < 0.32 ? "visible" : "hidden"
  );
  const invertedQuoteFade = useTransform(progress, [0.24, 0.32], [1, 0]);

  // --- Beat 2 (0.30–0.62): Protein trial stats on cream ---
  const proteinOpacity = useTransform(
    progress,
    [0.30, 0.34, 0.56, 0.62],
    [0, 1, 1, 0]
  );
  const proteinVisible = useTransform(proteinOpacity, (v) =>
    v > 0.02 ? "visible" : "hidden"
  );

  // --- Beat 3 (0.58–1.00): Headline + WhatIfLines on cream (stays visible) ---
  const headlineOpacity = useTransform(
    progress,
    [0.58, 0.66],
    [0, 1]
  );
  const headlineVisible = useTransform(headlineOpacity, (v) =>
    v > 0.02 ? "visible" : "hidden"
  );
  const headlinePointer = useTransform(headlineOpacity, (v): "auto" | "none" =>
    v > 0.02 ? "auto" : "none"
  );

  // Track whether a "What if" line is expanded to shrink heading
  const [anyExpanded, setAnyExpanded] = useState(false);

  // Scroll hint: fades out as user starts scrolling
  const hintOpacity = useTransform(progress, [0, 0.06], [1, 0]);

  return (
    <div className="h-full relative">
      {/* Original quote (white/gold on dark bg) */}
      <motion.div
        style={{ visibility: quoteHidden }}
        className="absolute inset-0 flex items-center px-6 sm:px-8"
      >
        <div className="reading-width mx-auto w-full">
          <QuoteText />
        </div>
      </motion.div>

      {/* Fill layer: cream bg + inverted quote text — stays for entire section */}
      <motion.div
        style={{
          clipPath: fillClip,
          backgroundColor: FILL_BG,
        }}
        className="absolute inset-0"
      >
        <motion.div
          style={{ opacity: invertedQuoteFade }}
          className="h-full flex items-center px-6 sm:px-8"
        >
          <div className="reading-width mx-auto w-full">
            <QuoteText inverted />
          </div>
        </motion.div>
      </motion.div>

      {/* Protein trial stats (dark text on cream) */}
      <motion.div
        style={{ opacity: proteinOpacity, visibility: proteinVisible }}
        className="absolute inset-0 flex items-center px-6 sm:px-8"
      >
        <ProteinTrials progress={progress} />
      </motion.div>

      {/* Headline + WhatIfLines (dark text on cream) */}
      <motion.div
        style={{ opacity: headlineOpacity, visibility: headlineVisible, pointerEvents: headlinePointer }}
        className="absolute inset-0 flex items-center px-6 sm:px-8"
      >
        <div className="reading-width mx-auto w-full">
          <ScrollBeat progress={progress} enter={0.60} hold={0.68} enterFrom="scale">
            <h1
              className="font-serif leading-[0.95] tracking-[-0.03em] text-[#1A0F0A] max-w-[16ch]"
              style={{
                fontSize: anyExpanded ? "clamp(1.5rem,4vw,3rem)" : "clamp(2.5rem,7vw,5.5rem)",
                transition: "font-size 300ms ease",
              }}
            >
              {teaserContent.headline}
            </h1>
          </ScrollBeat>
          <WhatIfLines progress={progress} onExpandChange={setAnyExpanded} />
        </div>
      </motion.div>

      {/* Scroll hint — appears after mount animations, fades on scroll */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        {/* Responsive hint text */}
        <motion.p
          className="text-sm text-gray-400 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8, ease: EASE }}
        >
          <span className="hidden md:inline">{teaserContent.scrollHintDesktop}</span>
          <span className="md:hidden">{teaserContent.scrollHintMobile}</span>
        </motion.p>

        {/* Desktop: mouse scroll icon */}
        <motion.span
          className="hidden md:block w-5 h-8 rounded-full border border-gray-500 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8, ease: EASE }}
        >
          <motion.span
            className="absolute left-1/2 top-1.5 w-1 h-1.5 -ml-0.5 rounded-full bg-gray-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          />
        </motion.span>

        {/* Mobile/tablet: pointing hand with pulsating circle at fingertip */}
        <motion.span
          className="md:hidden relative w-6 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8, ease: EASE }}
        >
          {/* Pulsating ring at fingertip (top-center) */}
          <motion.span
            className="absolute -top-1.5 left-1/2 -ml-1.5 w-3 h-3 rounded-full border border-gray-400"
            animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 3.5 }}
          />
          <motion.span
            className="absolute -top-1 left-1/2 -ml-0.5 w-1 h-1 rounded-full bg-gray-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          />
          {/* Lucide "pointer" icon — index finger pointing up */}
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 absolute top-1 left-0"
          >
            <path d="M12 2v10" />
            <path d="M9 12.5V12a1.5 1.5 0 0 0-3 0v4l-1.8-1.8a1.5 1.5 0 0 0-2.12 2.12L7 22a7 7 0 0 0 5 2h1a7 7 0 0 0 7-7v-5a1.5 1.5 0 0 0-3 0" />
            <path d="M15 12v-1a1.5 1.5 0 0 0-3 0v1" />
            <path d="M12 12a1.5 1.5 0 0 0-3 0v.5" />
          </svg>
        </motion.span>
      </motion.div>
    </div>
  );
}

function TeaserFlowing() {
  return (
    <>
      {/* Dark bg section with quote */}
      <div className="min-h-[80vh] flex items-center px-6 sm:px-8">
        <div className="reading-width mx-auto w-full">
          <QuoteText />
        </div>
      </div>

      {/* Cream bg section with protein trials + what-if lines */}
      <div style={{ backgroundColor: FILL_BG }} className="px-6 sm:px-8 py-16">
        <ProteinTrialsMobile />

        <div className="reading-width mx-auto w-full mt-16">
          <h1
            className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] max-w-[16ch]"
            style={{ color: DARK_TEXT }}
          >
            {teaserContent.headline}
          </h1>
          <WhatIfLinesMobile />
        </div>
      </div>
    </>
  );
}

const TEASER_BREAKPOINTS = [0.34, 0.72];

export function TeaserSection() {
  return (
    <ScrollSection id="teaser" label="Five proteins, one metal" className="py-0" fullWidth breakpoints={TEASER_BREAKPOINTS}>
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={330}>
          {(progress) => <TeaserStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <TeaserFlowing />
      </div>
    </ScrollSection>
  );
}
