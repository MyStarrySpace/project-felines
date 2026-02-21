"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { TrialBars } from "@/components/landing/trial-bars";
import { WhatIfLines } from "@/components/landing/what-if-lines";
import { ProteinTrials } from "@/components/landing/protein-trials";
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
    <div className="font-serif text-[clamp(2.75rem,6.5vw,5rem)] leading-[1.1] tracking-[-0.02em] text-center">
      <motion.p
        className={whiteClass}
        style={whiteStyle}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        {teaserContent.quote.line1}
      </motion.p>
      <motion.p
        className={goldClass}
        style={goldStyle}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, delay: 0.7, ease: EASE }}
      >
        {emphasize(teaserContent.quote.line1Gold)}
      </motion.p>
      <motion.p
        className={`${whiteClass} mt-3`}
        style={whiteStyle}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, delay: 1.3, ease: EASE }}
      >
        {teaserContent.quote.line2}
      </motion.p>
      <motion.p
        className={goldClass}
        style={goldStyle}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, delay: 1.7, ease: EASE }}
      >
        {emphasize(teaserContent.quote.line2Gold)}
      </motion.p>
    </div>
  );
}

function TeaserStage({ progress }: { progress: MotionValue<number> }) {
  // Timeline aligned to 4 beats (450vh section, 350vh travel, ~0.286 per 100vh)

  // --- Beat 1 (0.00–0.26): Quote + fill rise ---
  const fillTop = useTransform(progress, [0.04, 0.20], [100, 0]);
  const fillClip = useTransform(fillTop, (v) => `inset(${v}% 0 0 0)`);
  const fillFade = useTransform(progress, [0.64, 0.72], [1, 0]);
  const fillVisible = useTransform(fillFade, (v) =>
    v > 0.01 ? "visible" : "hidden"
  );
  const quoteHidden = useTransform(progress, (v) =>
    v < 0.24 ? "visible" : "hidden"
  );
  const invertedQuoteFade = useTransform(progress, [0.18, 0.24], [1, 0]);

  // --- Beat 2 (0.24–0.46): Protein trial stats on cream ---
  const proteinOpacity = useTransform(
    progress,
    [0.24, 0.27, 0.42, 0.46],
    [0, 1, 1, 0]
  );
  const proteinVisible = useTransform(proteinOpacity, (v) =>
    v > 0.02 ? "visible" : "hidden"
  );

  // --- Beat 3 (0.44–0.68): Headline on cream ---
  const headlineOpacity = useTransform(
    progress,
    [0.44, 0.50, 0.62, 0.68],
    [0, 1, 1, 0]
  );
  const headlineVisible = useTransform(headlineOpacity, (v) =>
    v > 0.02 ? "visible" : "hidden"
  );

  // --- Beat 4 (0.72–1.00): Stats on dark ---
  const statsIn = useTransform(progress, [0.72, 0.80], [0, 1]);
  const statsVisible = useTransform(statsIn, (v) =>
    v > 0.02 ? "visible" : "hidden"
  );

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

      {/* Fill layer: cream bg + inverted quote text */}
      <motion.div
        style={{
          clipPath: fillClip,
          opacity: fillFade,
          visibility: fillVisible,
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

      {/* Headline (dark text on cream) */}
      <motion.div
        style={{ opacity: headlineOpacity, visibility: headlineVisible }}
        className="absolute inset-0 flex items-center px-6 sm:px-8"
      >
        <div className="reading-width mx-auto w-full">
          <ScrollBeat progress={progress} enter={0.46} hold={0.52} enterFrom="scale">
            <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[#1A0F0A] max-w-[16ch]">
              {teaserContent.headline}
            </h1>
          </ScrollBeat>
          <WhatIfLines progress={progress} />
        </div>
      </motion.div>

      {/* Trial bars + context (white/gold on dark bg) */}
      <motion.div
        style={{ opacity: statsIn, visibility: statsVisible }}
        className="absolute inset-0 flex items-center px-6 sm:px-8"
      >
        <div className="w-full max-w-4xl mx-auto">
          <TrialBars progress={progress} />

          <ScrollBeat progress={progress} enter={0.90} hold={0.96} enterFrom="left">
            <div className="border-l-2 border-teal-600/50 pl-6 max-w-lg mt-8 ml-[5.5rem] sm:ml-28">
              <p className="text-xl text-gray-300 leading-relaxed">
                {teaserContent.context}
              </p>
            </div>
          </ScrollBeat>
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

const TEASER_BREAKPOINTS = [0, 0.44, 0.58, 0.80];

export function TeaserSection() {
  return (
    <ScrollSection id="teaser" label="Teaser" className="py-0" fullWidth breakpoints={TEASER_BREAKPOINTS}>
      <StickyScrollStage height={450}>
        {(progress) => <TeaserStage progress={progress} />}
      </StickyScrollStage>
    </ScrollSection>
  );
}
