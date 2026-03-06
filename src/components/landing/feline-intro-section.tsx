"use client";

import { useCallback, useLayoutEffect, useRef, useState, useMemo } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  toxoPuzzle,
  catReveal,
  felineLetters,
  felineLayers,
  felineLayerSegments,
  echoGenesForLayer,
  swissCheese,
  type LayerSegment,
} from "@/data/landing/feline-intro";

/* ------------------------------------------------------------------ */
/*  Accessibility: skip echo marquee for reduced-motion / slow devices  */
/* ------------------------------------------------------------------ */

function useCanShowEcho(): boolean {
  const [ok, setOk] = useState(false);
  useLayoutEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Skip on slow connections (2G / slow-3G)
    const nav = navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean };
    };
    if (nav.connection?.saveData) return;
    if (
      nav.connection?.effectiveType === "slow-2g" ||
      nav.connection?.effectiveType === "2g"
    ) return;
    // Skip on low-end devices (≤4 logical cores)
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      return;
    setOk(true);
  }, []);
  return ok;
}

/* ------------------------------------------------------------------ */
/*  Acronym bar — letters highlight as each layer is described          */
/* ------------------------------------------------------------------ */

function AcronymBar({ progress }: { progress: MotionValue<number> }) {
  // Each letter transitions from dim to bright as its layer enters
  const layerStarts = [0.35, 0.44, 0.52, 0.60, 0.68, 0.76];
  const opacities = layerStarts.map((start) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(progress, [start, start + 0.04], [0.15, 1])
  );

  // Bar itself fades in with beat 2
  const barOpacity = useTransform(progress, [0.22, 0.28], [0, 1]);

  return (
    <motion.div
      className="flex gap-4 sm:gap-6 mb-8"
      style={{ opacity: barOpacity }}
      aria-label="FELINES acronym"
      role="img"
    >
      {felineLetters.map((fl, i) => (
        <motion.span
          key={fl.letter + fl.subscript}
          className="font-serif text-teal-400 text-5xl sm:text-7xl"
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
/*  Echo gene field — infinite marquee of gene names                     */
/* ------------------------------------------------------------------ */

/** Simple hash to shuffle genes differently per row */
function stableHash(s: string, seed: number): number {
  let h = seed;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  }
  return h;
}

function shuffleGenes(genes: string[], seed: number): string[] {
  return [...genes].sort((a, b) => stableHash(a, seed) - stableHash(b, seed));
}

/** Build a single half of the marquee content (repeated enough to overshoot viewport) */
function MarqueeHalf({
  genes,
  activeGenes,
  baseOpacity,
}: {
  genes: string[];
  activeGenes: string[];
  baseOpacity: number;
}) {
  const count = Math.max(6, Math.ceil(32 / genes.length));
  const repeated = Array.from({ length: count }, () => genes).flat();

  return (
    <span className="inline-flex items-center shrink-0" aria-hidden="true">
      {repeated.map((gene, i) => (
        <span key={i} className="inline-flex items-center">
          <span
            className="font-serif text-5xl sm:text-7xl text-teal-400 transition-opacity duration-300 mx-4 sm:mx-6"
            style={{
              opacity: activeGenes.includes(gene) ? 0.85 : baseOpacity,
            }}
          >
            {gene}
          </span>
        </span>
      ))}
    </span>
  );
}

/** Row config for each marquee line */
interface MarqueeRowConfig {
  genes: string[];
  speed: number;
  direction: "left" | "right";
  baseOpacity: number;
}

/**
 * Build rows that span roughly half the viewport height.
 * Opacity decreases with distance from content (Rendomat-style echo).
 */
function buildRows(genes: string[], position: "top" | "bottom"): MarqueeRowConfig[] {
  // 5 rows per position, alternating direction, decreasing opacity toward edges
  const count = 5;
  // Scale duration by gene count so visual speed stays consistent.
  // The CSS animation moves by -50% of element width; more genes = wider element.
  // Calibrated so ~6 genes ≈ 160s (the original speed).
  const referenceCount = 6;
  const referenceSpeed = 160;
  const baseSpeed = referenceSpeed * (genes.length / referenceCount);
  const speedJitter = 25;    // variation between rows

  return Array.from({ length: count }, (_, i) => {
    // distance from the content edge: 0 = closest, count-1 = farthest
    const dist = position === "top" ? count - 1 - i : i;
    // opacity fades toward edges
    const baseOpacity = 0.10 - dist * 0.015;
    // alternate direction per row
    const direction: "left" | "right" = (i % 2 === 0) ? "left" : "right";
    // stagger speed so rows don't move in lock-step
    const speed = baseSpeed + (i % 3) * speedJitter;

    return {
      genes: shuffleGenes(genes, (position === "top" ? 0 : count) + i),
      speed,
      direction,
      baseOpacity: Math.max(0.02, baseOpacity),
    };
  });
}

function EchoGeneField({
  genes,
  activeGenes,
  position,
  height,
  padBottom = 0,
}: {
  genes: string[];
  activeGenes: string[];
  position: "top" | "bottom";
  height: number;
  padBottom?: number;
}) {
  const rows = buildRows(genes, position);

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 w-[100vw] overflow-hidden pointer-events-none select-none"
      style={{
        ...(position === "top"
          ? {
              bottom: "100%",
              height: height > 0 ? `${height}px` : "40vh",
              paddingBottom: padBottom > 0 ? `${padBottom}px` : undefined,
            }
          : { top: "100%", height: height > 0 ? `${height}px` : "40vh" }),
        display: "flex",
        flexDirection: "column",
        justifyContent: position === "top" ? "flex-end" : "flex-start",
      }}
    >
      {rows.map((row, ri) => (
        <div
          key={ri}
          className="echo-marquee-row inline-flex whitespace-nowrap"
          style={{
            width: "max-content",
            animation: `echo-scroll-${row.direction} ${row.speed}s linear infinite`,
            willChange: "transform",
            backfaceVisibility: "hidden",
            lineHeight: "1.3",
          }}
        >
          <MarqueeHalf genes={row.genes} activeGenes={activeGenes} baseOpacity={row.baseOpacity} />
          <MarqueeHalf genes={row.genes} activeGenes={activeGenes} baseOpacity={row.baseOpacity} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Segmented description — structured lines with category labels        */
/* ------------------------------------------------------------------ */

function SegmentedDescription({
  segments,
  onHoverGenes,
}: {
  segments: LayerSegment[];
  onHoverGenes: (genes: string[]) => void;
}) {
  return (
    <div className="space-y-2.5 mb-2 max-w-[52ch]">
      {segments.map((seg, i) => (
        <div
          key={i}
          className="group cursor-default rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-400/50 focus-visible:outline-offset-2"
          tabIndex={0}
          role="group"
          aria-label={seg.label}
          onMouseEnter={() => onHoverGenes(seg.genes)}
          onMouseLeave={() => onHoverGenes([])}
          onFocus={() => onHoverGenes(seg.genes)}
          onBlur={() => onHoverGenes([])}
        >
          <p className="text-[11px] uppercase tracking-wider text-teal-400/70 mb-0.5 group-hover:text-teal-400/90 group-focus-visible:text-teal-400/90 transition-colors duration-200">
            {seg.label}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 group-focus-visible:text-gray-300 transition-colors duration-200">
            {seg.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Mobile-only: structured segments without hover */
function SegmentedDescriptionStatic({
  segments,
}: {
  segments: LayerSegment[];
}) {
  return (
    <div className="space-y-2.5 mb-2">
      {segments.map((seg, i) => (
        <div key={i}>
          <p className="text-[11px] uppercase tracking-wider text-teal-400/70 mb-0.5">
            {seg.label}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {seg.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gold background for T. gondii beat                                  */
/* ------------------------------------------------------------------ */

const GOLD_BG = "#FCEFC7";
const GOLD_TEXT = "#1A0F0A";
const GOLD_MUTED = "#5C4B1F";
const GOLD_ACCENT = "#92400E";

/** Cat scribble illustration for gold background */
function CatDoodle({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/illustrations/cat-scribble.svg"
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop: sticky scroll stage                                        */
/* ------------------------------------------------------------------ */

// Beat timing
const BEAT1 = { enter: 0.02, hold: 0.06, exit: 0.16, gone: 0.20 };
const BEAT2 = { enter: 0.20, hold: 0.25, exit: 0.32, gone: 0.35 };
// Layers: staggered, each one exits as next enters
const LAYER_BEATS = [
  { enter: 0.35, hold: 0.38, exit: 0.42, gone: 0.44 },
  { enter: 0.44, hold: 0.47, exit: 0.50, gone: 0.52 },
  { enter: 0.52, hold: 0.55, exit: 0.58, gone: 0.60 },
  { enter: 0.60, hold: 0.63, exit: 0.66, gone: 0.68 },
  { enter: 0.68, hold: 0.71, exit: 0.74, gone: 0.76 },
  { enter: 0.76, hold: 0.79, exit: 0.82, gone: 0.84 },
];
const BEAT4 = { enter: 0.86, hold: 0.90 };

function FelineStage({ progress }: { progress: MotionValue<number> }) {
  const [hoveredGenes, setHoveredGenes] = useState<string[]>([]);
  const showEcho = useCanShowEcho();
  const layerGenes = useMemo(() => {
    const result: Record<string, string[]> = {};
    for (const layer of felineLayers) {
      result[layer.id] = echoGenesForLayer(layer.id);
    }
    return result;
  }, []);
  const stageRef = useRef<HTMLDivElement>(null);
  const acronymRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [echoH, setEchoH] = useState({ top: 0, topPad: 0, bottom: 0 });

  // Gold background for Beat 1 (T. gondii)
  const goldOpacity = useTransform(
    progress,
    [BEAT1.enter, BEAT1.enter + 0.02, BEAT1.exit, BEAT1.gone],
    [0, 1, 1, 0]
  );

  const measure = useCallback(() => {
    const stage = stageRef.current;
    const acronym = acronymRef.current;
    const grid = gridRef.current;
    if (!stage || !acronym || !grid) return;
    const sr = stage.getBoundingClientRect();
    const ar = acronym.getBoundingClientRect();
    const gr = grid.getBoundingClientRect();
    setEchoH({
      // Full height from grid top to stage top
      top: Math.max(0, gr.top - sr.top),
      // Padding to keep rows above the acronym bar (measured from bar top, not bottom)
      topPad: Math.max(0, gr.top - ar.top),
      bottom: Math.max(0, sr.bottom - gr.bottom),
    });
  }, []);

  // Measure after layout and on resize
  useLayoutEffect(() => {
    measure();
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (stageRef.current) ro.observe(stageRef.current);
    if (gridRef.current) ro.observe(gridRef.current);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [measure]);

  // Pointer-events gates
  const pe1 = useBeatPointerEvents(progress, BEAT1.enter, BEAT1.gone);
  const pe2 = useBeatPointerEvents(progress, BEAT2.enter, BEAT2.gone);
  const peLayer = LAYER_BEATS.map((b) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBeatPointerEvents(progress, b.enter, b.gone)
  );
  const pe4 = useBeatPointerEvents(progress, BEAT4.enter);

  return (
    <div ref={stageRef} className="h-full relative">
      {/* Gold background for T. gondii beat */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: GOLD_BG, opacity: goldOpacity }}
      >
        <CatDoodle className="absolute inset-0 w-full h-full object-contain opacity-30" />
      </motion.div>

      <div className="relative h-full flex flex-col justify-center px-6 sm:px-8">
      <div className="reading-width w-full mx-auto">
        {/* Acronym bar — persistent from beat 2 onward */}
        <div ref={acronymRef}>
          <AcronymBar progress={progress} />
        </div>

        {/* Overlapping grid for beats */}
        <div
          ref={gridRef}
          className="grid"
          style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
        >
          {/* Beat 1: T. gondii puzzle (dark text on gold bg) */}
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
              <p className="font-serif text-[clamp(4rem,10vw,8rem)] leading-none mb-2" style={{ color: GOLD_ACCENT }}>
                {toxoPuzzle.stat}
              </p>
              <p className="text-sm mb-6" style={{ color: GOLD_MUTED }}>
                {toxoPuzzle.statLabel}
              </p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] mb-4" style={{ color: GOLD_TEXT }}>
                {toxoPuzzle.headline}
              </h2>
              <p className="text-base leading-relaxed mb-4 max-w-[52ch]" style={{ color: GOLD_MUTED }}>
                {toxoPuzzle.body}
              </p>
              <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.15] mb-3 max-w-[28ch]" style={{ color: GOLD_TEXT }}>
                {toxoPuzzle.paradox}
              </p>
              <p className="text-base leading-relaxed max-w-[52ch]" style={{ color: GOLD_MUTED }}>
                {toxoPuzzle.resolution}
              </p>
            </ScrollBeat>
          </motion.div>

          {/* Beat 2: Cat connection + FELINES reveal */}
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
              <p className="font-serif text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.15] tracking-[-0.01em] text-gray-200 max-w-[24ch]">
                {catReveal.hookLine}
              </p>
            </ScrollBeat>
          </motion.div>

          {/* Beat 3: Five defense layers — staggered, with echo gene fields */}
          {felineLayers.map((layer, i) => {
            const echoData = felineLayerSegments[layer.id];
            return (
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
                  <div className="relative overflow-visible">
                    {/* Echo genes — top */}
                    {showEcho && layerGenes[layer.id]?.length > 0 && (
                      <EchoGeneField
                        genes={layerGenes[layer.id]}
                        activeGenes={hoveredGenes}
                        position="top"
                        height={echoH.top}
                        padBottom={echoH.topPad}
                      />
                    )}

                    <h3 className="flex items-baseline gap-3 mb-3">
                      <span className="font-serif text-teal-400 text-2xl sm:text-3xl">
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
                    </h3>

                    {/* Segmented description with hover highlights */}
                    {echoData ? (
                      <SegmentedDescription
                        segments={echoData.segments}
                        onHoverGenes={setHoveredGenes}
                      />
                    ) : (
                      <p className="text-gray-300 text-base leading-relaxed mb-2 max-w-[52ch]">
                        {layer.protects}
                      </p>
                    )}

                    <p className="text-gray-400 text-sm leading-relaxed max-w-[52ch]">
                      {layer.failureMode}
                    </p>

                    {/* Echo genes — bottom */}
                    {showEcho && layerGenes[layer.id]?.length > 0 && (
                      <EchoGeneField
                        genes={layerGenes[layer.id]}
                        activeGenes={hoveredGenes}
                        position="bottom"
                        height={echoH.bottom}
                      />
                    )}
                  </div>
                </ScrollBeat>
              </motion.div>
            );
          })}

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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: flowing layout                                              */
/* ------------------------------------------------------------------ */

function FelineFlowing() {
  return (
    <div className="space-y-16">
      {/* T. gondii puzzle (gold background) */}
      <div style={{ backgroundColor: GOLD_BG }} className="relative min-h-[100dvh] flex flex-col justify-center px-6 py-24 overflow-hidden mobile-snap">
        <CatDoodle className="absolute inset-0 w-full h-full object-contain opacity-30" />
        <ScrollAnimate>
          <div className="reading-width mx-auto">
            <p className="font-serif text-[clamp(4rem,10vw,8rem)] leading-none mb-2" style={{ color: GOLD_ACCENT }}>
              {toxoPuzzle.stat}
            </p>
            <p className="text-sm mb-6" style={{ color: GOLD_MUTED }}>{toxoPuzzle.statLabel}</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] mb-4" style={{ color: GOLD_TEXT }}>
              {toxoPuzzle.headline}
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: GOLD_MUTED }}>
              {toxoPuzzle.body}
            </p>
            <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.15] mb-3" style={{ color: GOLD_TEXT }}>
              {toxoPuzzle.paradox}
            </p>
            <p className="text-base leading-relaxed" style={{ color: GOLD_MUTED }}>
              {toxoPuzzle.resolution}
            </p>
          </div>
        </ScrollAnimate>
      </div>

      {/* Remaining content on dark background */}
      <div className="px-6 pt-8 space-y-16">
      {/* Cat connection */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <p className="font-serif text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.15] tracking-[-0.01em] text-gray-200">
            {catReveal.hookLine}
          </p>
        </div>
      </ScrollAnimate>

      {/* FELINES acronym bar */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <div className="flex gap-3 sm:gap-5 mb-2" aria-label="FELINES acronym" role="img">
            {felineLetters.map((fl) => (
              <span
                key={fl.letter + fl.subscript}
                className="font-serif text-teal-400 text-2xl sm:text-4xl"
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
      {felineLayers.map((layer) => {
        const echoData = felineLayerSegments[layer.id];
        return (
          <ScrollAnimate key={layer.id} enterFrom="bottom">
            <div className="reading-width mx-auto">
              <h3 className="flex items-baseline gap-3 mb-3">
                <span className="font-serif text-teal-400 text-2xl">
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
              </h3>
              {echoData ? (
                <SegmentedDescriptionStatic segments={echoData.segments} />
              ) : (
                <p className="text-gray-300 text-base leading-relaxed mb-2">
                  {layer.protects}
                </p>
              )}
              <p className="text-gray-400 text-sm leading-relaxed">
                {layer.failureMode}
              </p>
            </div>
          </ScrollAnimate>
        );
      })}

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
      breakpoints={[0, 0.30, 0.40, 0.45, 0.50, 0.56, 0.61, 0.66, 0.77]}
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
