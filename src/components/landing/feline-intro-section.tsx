"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Cite } from "@/components/citation/cite";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  toxoPuzzle,
  catReveal,
  felineLetters,
  felineLayers,
  swissCheese,
} from "@/data/landing/feline-intro";

/* ------------------------------------------------------------------ */
/*  Acronym bar — letters highlight as each layer is described          */
/* ------------------------------------------------------------------ */

function AcronymBar({ progress }: { progress: MotionValue<number> }) {
  // Each letter transitions from dim to bright as its layer enters
  const layerStarts = [0.35, 0.47, 0.56, 0.65, 0.74];
  const opacities = layerStarts.map((start) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(progress, [start, start + 0.04], [0.15, 1])
  );

  // Bar itself fades in with beat 2
  const barOpacity = useTransform(progress, [0.22, 0.28], [0, 1]);

  return (
    <motion.div
      className="flex gap-3 sm:gap-5 mb-8"
      style={{ opacity: barOpacity }}
    >
      {felineLetters.map((fl, i) => (
        <motion.span
          key={fl.letter + fl.subscript}
          className="font-mono text-teal-400 text-lg sm:text-xl"
          style={{ opacity: opacities[i] }}
        >
          {fl.letter}
          {fl.subscript && (
            <span className="text-[0.7em] align-baseline">{fl.subscript}</span>
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pointer-events gate for overlapping beats                           */
/* ------------------------------------------------------------------ */

function useBeatPointerEvents(
  progress: MotionValue<number>,
  enter: number,
  gone?: number
) {
  return useTransform(progress, (p) => {
    const visible =
      gone !== undefined
        ? p >= enter - 0.02 && p <= gone + 0.02
        : p >= enter - 0.02;
    return visible ? "auto" : "none";
  });
}

/* ------------------------------------------------------------------ */
/*  Desktop: sticky scroll stage                                        */
/* ------------------------------------------------------------------ */

// Beat timing
const BEAT1 = { enter: 0.02, hold: 0.06, exit: 0.16, gone: 0.20 };
const BEAT2 = { enter: 0.20, hold: 0.25, exit: 0.32, gone: 0.35 };
// Layers: staggered, each one exits as next enters
const LAYER_BEATS = [
  { enter: 0.35, hold: 0.39, exit: 0.44, gone: 0.47 },
  { enter: 0.47, hold: 0.50, exit: 0.53, gone: 0.56 },
  { enter: 0.56, hold: 0.59, exit: 0.62, gone: 0.65 },
  { enter: 0.65, hold: 0.68, exit: 0.71, gone: 0.74 },
  { enter: 0.74, hold: 0.77, exit: 0.80, gone: 0.83 },
];
const BEAT4 = { enter: 0.85, hold: 0.90 };

function FelineStage({ progress }: { progress: MotionValue<number> }) {
  // Pointer-events gates
  const pe1 = useBeatPointerEvents(progress, BEAT1.enter, BEAT1.gone);
  const pe2 = useBeatPointerEvents(progress, BEAT2.enter, BEAT2.gone);
  const peLayer = LAYER_BEATS.map((b) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBeatPointerEvents(progress, b.enter, b.gone)
  );
  const pe4 = useBeatPointerEvents(progress, BEAT4.enter);

  return (
    <div className="h-full flex flex-col justify-center px-6 sm:px-8">
      <div className="reading-width w-full mx-auto">
        {/* Acronym bar — persistent from beat 2 onward */}
        <AcronymBar progress={progress} />

        {/* Overlapping grid for beats */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
        >
          {/* Beat 1: T. gondii puzzle */}
          <motion.div
            className="col-start-1 row-start-1"
            style={{ pointerEvents: pe1 }}
          >
            <ScrollBeat
              progress={progress}
              enter={BEAT1.enter}
              hold={BEAT1.hold}
              exit={BEAT1.exit}
              gone={BEAT1.gone}
              enterFrom="bottom"
            >
              <p className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-teal-400 mb-2">
                {toxoPuzzle.stat}
              </p>
              <p className="text-gray-400 text-sm mb-6">
                {toxoPuzzle.statLabel}
              </p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
                {toxoPuzzle.headline}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4 max-w-[52ch]">
                {toxoPuzzle.body}
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-3 max-w-[52ch]">
                {toxoPuzzle.paradox}
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-[52ch]">
                {toxoPuzzle.resolution}
              </p>
            </ScrollBeat>
          </motion.div>

          {/* Beat 2: Cat connection + FELINE reveal */}
          <motion.div
            className="col-start-1 row-start-1"
            style={{ pointerEvents: pe2 }}
          >
            <ScrollBeat
              progress={progress}
              enter={BEAT2.enter}
              hold={BEAT2.hold}
              exit={BEAT2.exit}
              gone={BEAT2.gone}
              enterFrom="fade"
            >
              <p className="font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] leading-relaxed text-gray-200 mb-4 max-w-[28ch]">
                {catReveal.hookLine}
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-[44ch]">
                {catReveal.revealLine}
              </p>
            </ScrollBeat>
          </motion.div>

          {/* Beat 3: Five defense layers — staggered */}
          {felineLayers.map((layer, i) => (
            <motion.div
              key={layer.id}
              className="col-start-1 row-start-1"
              style={{ pointerEvents: peLayer[i] }}
            >
              <ScrollBeat
                progress={progress}
                enter={LAYER_BEATS[i].enter}
                hold={LAYER_BEATS[i].hold}
                exit={LAYER_BEATS[i].exit}
                gone={LAYER_BEATS[i].gone}
                enterFrom="bottom"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-teal-400 text-2xl sm:text-3xl">
                    {layer.letter}
                    {layer.subscript && (
                      <span className="text-[0.7em] align-baseline">
                        {layer.subscript}
                      </span>
                    )}
                  </span>
                  <span className="font-serif text-white text-xl sm:text-2xl">
                    {layer.name}
                  </span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-2 max-w-[52ch]">
                  {layer.protects}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[52ch]">
                  {layer.failureMode}
                </p>
              </ScrollBeat>
            </motion.div>
          ))}

          {/* Beat 4: Swiss cheese summary */}
          <motion.div
            className="col-start-1 row-start-1"
            style={{ pointerEvents: pe4 }}
          >
            <ScrollBeat
              progress={progress}
              enter={BEAT4.enter}
              hold={BEAT4.hold}
              enterFrom="fade"
            >
              <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 mb-4 max-w-[32ch]">
                {swissCheese.line1}
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-[44ch]">
                {swissCheese.line2}
              </p>
            </ScrollBeat>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: flowing layout                                              */
/* ------------------------------------------------------------------ */

function FelineFlowing() {
  return (
    <div className="py-24 space-y-16 px-6">
      {/* T. gondii puzzle */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <p className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-teal-400 mb-2">
            {toxoPuzzle.stat}
          </p>
          <p className="text-gray-400 text-sm mb-6">{toxoPuzzle.statLabel}</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            {toxoPuzzle.headline}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            {toxoPuzzle.body}
          </p>
          <p className="text-gray-300 text-base leading-relaxed mb-3">
            {toxoPuzzle.paradox}
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            {toxoPuzzle.resolution}
          </p>
        </div>
      </ScrollAnimate>

      {/* Cat connection */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <p className="font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] leading-relaxed text-gray-200 mb-4">
            {catReveal.hookLine}
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            {catReveal.revealLine}
          </p>
        </div>
      </ScrollAnimate>

      {/* FELINE acronym bar */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <div className="flex gap-3 sm:gap-5 mb-2">
            {felineLetters.map((fl) => (
              <span
                key={fl.letter + fl.subscript}
                className="font-mono text-teal-400 text-lg sm:text-xl"
              >
                {fl.letter}
                {fl.subscript && (
                  <span className="text-[0.7em] align-baseline">
                    {fl.subscript}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </ScrollAnimate>

      {/* Five layers */}
      {felineLayers.map((layer) => (
        <ScrollAnimate key={layer.id} enterFrom="bottom">
          <div className="reading-width mx-auto">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-teal-400 text-2xl">
                {layer.letter}
                {layer.subscript && (
                  <span className="text-[0.7em] align-baseline">
                    {layer.subscript}
                  </span>
                )}
              </span>
              <span className="font-serif text-white text-xl">
                {layer.name}
              </span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-2">
              {layer.protects}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {layer.failureMode}
            </p>
          </div>
        </ScrollAnimate>
      ))}

      {/* Swiss cheese summary */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 mb-4">
            {swissCheese.line1}
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            {swissCheese.line2}
          </p>
        </div>
      </ScrollAnimate>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export function FelineIntroSection() {
  return (
    <ScrollSection
      id="feline"
      label="Cat parasite, five defenses"
      className="py-0"
      fullWidth
    >
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={350}>
          {(progress) => <FelineStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <FelineFlowing />
      </div>
    </ScrollSection>
  );
}
