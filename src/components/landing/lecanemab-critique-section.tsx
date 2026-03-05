"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Cite } from "@/components/citation/cite";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  critiqueHeadline,
  critiqueBody,
  critiquePoints,
  critiqueInsight,
  placeboDataPath,
  treatmentDataPath,
  placeboLinearPath,
  treatmentLinearPath,
  placeboSigmoidPath,
  treatmentSigmoidPath,
  annotations as ann,
  xTicks,
  yTicks,
} from "@/data/landing/lecanemab-critique";

const SAGE = "rgb(109,145,109)";

/* ------------------------------------------------------------------ */
/*  SVG chart — always visible, self-annotates via progress            */
/* ------------------------------------------------------------------ */

function CritiqueChart({ progress }: { progress: MotionValue<number> }) {
  // Phase 1: data curves appear (synced with "The gap")
  const dataOpacity = useTransform(progress, [0.03, 0.07], [0, 1]);
  // Phase 2: gap annotation at 18 months
  const gapOpacity = useTransform(progress, [0.07, 0.11], [0, 1]);
  // Phase 3: "27% less decline" label
  const pctOpacity = useTransform(progress, [0.12, 0.16], [0, 1]);
  // Phase 4: linear extrapolation (synced with "The assumption")
  const linearAppear = useTransform(progress, [0.24, 0.32], [0, 1]);
  const linearFade = useTransform(progress, [0.41, 0.48], [1, 0.12]);
  const linearOpacity = useTransform(
    [linearAppear, linearFade],
    ([a, f]) => (a as number) * (f as number)
  );
  const linearGapOpacity = useTransform(
    [linearAppear, linearFade],
    ([a, f]) => (a as number) * (f as number)
  );
  // Phase 5: sigmoidal overlay (synced with "The catch")
  const sigOpacity = useTransform(progress, [0.41, 0.48], [0, 1]);
  const sigGapOpacity = useTransform(progress, [0.48, 0.52], [0, 1]);

  return (
    <svg
      viewBox="0 0 640 340"
      className="w-full max-w-2xl mx-auto"
      role="img"
      aria-label="CDR-SB progression chart comparing linear and sigmoidal extrapolations"
    >
      {/* ---- Layer 1: Grid + axes (background) ---- */}
      {yTicks.map((t) => (
        <line key={t.value} x1={ann.xMin} y1={t.y} x2={ann.xMax} y2={t.y} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
      ))}
      {xTicks.map((t) => (
        <line key={t.month} x1={t.x} y1={ann.yMin} x2={t.x} y2={ann.yMax} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
      ))}
      <line x1={ann.xMin} y1={ann.yMax} x2={ann.xMax} y2={ann.yMax} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
      <line x1={ann.xMin} y1={ann.yMin} x2={ann.xMin} y2={ann.yMax} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />

      {/* ---- Layer 2: All curves + gap lines (middle) ---- */}
      <motion.line x1={ann.month18X} y1={ann.yMin} x2={ann.month18X} y2={ann.yMax} stroke="rgba(255,255,255,0.1)" strokeWidth={1} strokeDasharray="4 3" style={{ opacity: dataOpacity }} />

      {/* Phase 1: Trial data curves */}
      <motion.path d={placeboDataPath} fill="none" stroke="rgb(156,163,175)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: dataOpacity }} />
      <motion.path d={treatmentDataPath} fill="none" stroke={SAGE} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: dataOpacity }} />

      {/* Phase 2: Gap lines at 18 months */}
      <motion.g style={{ opacity: gapOpacity }}>
        <line x1={ann.month18X + 6} y1={ann.placebo18Y} x2={ann.month18X + 6} y2={ann.treatment18Y} stroke="rgb(248,113,113)" strokeWidth={2} />
        <line x1={ann.month18X + 3} y1={ann.placebo18Y} x2={ann.month18X + 9} y2={ann.placebo18Y} stroke="rgb(248,113,113)" strokeWidth={1.5} />
        <line x1={ann.month18X + 3} y1={ann.treatment18Y} x2={ann.month18X + 9} y2={ann.treatment18Y} stroke="rgb(248,113,113)" strokeWidth={1.5} />
      </motion.g>

      {/* Phase 4: Linear extrapolation curves */}
      <motion.path d={placeboLinearPath} fill="none" stroke="rgb(156,163,175)" strokeWidth={1.5} strokeDasharray="6 4" style={{ opacity: linearOpacity }} />
      <motion.path d={treatmentLinearPath} fill="none" stroke={SAGE} strokeWidth={1.5} strokeDasharray="6 4" style={{ opacity: linearOpacity }} />
      <motion.line x1={ann.month36X + 6} y1={ann.placebo36LinearY} x2={ann.month36X + 6} y2={ann.treatment36LinearY} stroke="rgb(248,113,113)" strokeWidth={1.5} strokeDasharray="3 2" style={{ opacity: linearGapOpacity }} />

      {/* Phase 5: Sigmoidal curves */}
      <motion.path d={placeboSigmoidPath} fill="none" stroke="rgb(156,163,175)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sigOpacity }} />
      <motion.path d={treatmentSigmoidPath} fill="none" stroke={SAGE} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: sigOpacity }} />
      <motion.line x1={ann.month36X + 6} y1={ann.placebo36SigY} x2={ann.month36X + 6} y2={ann.treatment36SigY} stroke="rgb(248,113,113)" strokeWidth={2} style={{ opacity: sigGapOpacity }} />

      {/* ---- Layer 3: All text labels + annotations (foreground) ---- */}

      {/* Axis labels */}
      {xTicks.map((t) => (
        <text key={t.month} x={t.x} y={ann.yMax + 18} textAnchor="middle" className="fill-gray-500 text-[10px]">{t.month}</text>
      ))}
      <text x={(ann.xMin + ann.xMax) / 2} y={ann.yMax + 34} textAnchor="middle" className="fill-gray-500 text-[11px]">Months</text>
      {yTicks.map((t) => (
        <text key={t.value} x={ann.xMin - 10} y={t.y + 4} textAnchor="end" className="fill-gray-500 text-[10px]">{t.value}</text>
      ))}
      <text x={20} y={(ann.yMin + ann.yMax) / 2} textAnchor="middle" className="fill-gray-500 text-[11px]" transform={`rotate(-90, 20, ${(ann.yMin + ann.yMax) / 2})`}>Dementia score (CDR-SB)</text>
      <text x={20} y={ann.yMin - 4} textAnchor="middle" className="fill-gray-500 text-[9px]">&#x25B2; worse</text>

      {/* Legend */}
      <motion.g style={{ opacity: dataOpacity }}>
        <line x1={420} y1={18} x2={445} y2={18} stroke="rgb(156,163,175)" strokeWidth={2.5} />
        <text x={450} y={22} className="fill-gray-400 text-[10px]">Placebo</text>
        <line x1={500} y1={18} x2={525} y2={18} stroke={SAGE} strokeWidth={2.5} />
        <text x={530} y={22} fill={SAGE} className="text-[10px]">Lecanemab</text>
      </motion.g>

      {/* Gap label at 18 months */}
      <motion.text x={ann.month18X + 16} y={ann.gap18MidY + 4} className="fill-red-400 text-[12px] font-bold" style={{ opacity: gapOpacity }}>0.45</motion.text>
      {/* "27% less decline" */}
      <motion.text x={ann.month18X + 16} y={ann.gap18MidY + 20} className="fill-gray-500 text-[10px]" style={{ opacity: pctOpacity }}>&quot;27% less decline&quot;</motion.text>

      {/* Linear extrapolation labels */}
      <motion.text x={ann.month36X - 45} y={ann.gap36LinearMidY + 4} className="fill-red-400/60 text-[11px]" style={{ opacity: linearGapOpacity }}>0.90?</motion.text>
      <motion.text x={(ann.month18X + ann.month36X) / 2} y={ann.yMin - 2} textAnchor="middle" className="fill-gray-500 text-[10px] italic" style={{ opacity: linearOpacity }}>Linear extrapolation</motion.text>

      {/* Sigmoidal labels */}
      <motion.text x={ann.month36X - 45} y={ann.gap36SigMidY + 4} className="fill-red-400 text-[11px] font-bold" style={{ opacity: sigGapOpacity }}>0.13</motion.text>
      <motion.text x={(ann.month18X + ann.month36X) / 2} y={ann.yMax + 34} textAnchor="middle" className="fill-gray-400 text-[10px]" style={{ opacity: sigOpacity }}>If progression is sigmoidal, the gap narrows</motion.text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Beat timing: maps each text annotation to a chart phase             */
/* ------------------------------------------------------------------ */

const BEATS = [
  { enter: 0.05, hold: 0.10, exit: 0.20, gone: 0.23 },  // gap
  { enter: 0.23, hold: 0.28, exit: 0.38, gone: 0.41 },  // assumption
  { enter: 0.41, hold: 0.46, exit: 0.58, gone: 0.62 },  // catch
];

/** Disable pointer-events on overlapping beats when they're invisible */
function useBeatPointerEvents(
  progress: MotionValue<number>,
  enter: number,
  gone?: number
) {
  return useTransform(progress, (p) => {
    const visible = gone !== undefined
      ? p >= enter - 0.02 && p <= gone + 0.02
      : p >= enter - 0.02;
    return visible ? "auto" : "none";
  });
}

/* ------------------------------------------------------------------ */
/*  Desktop: sticky-scroll stage                                       */
/* ------------------------------------------------------------------ */

function CritiqueStage({ progress }: { progress: MotionValue<number> }) {
  const headingOpacity = useTransform(progress, [0, 0.03], [0, 1]);
  const chartOpacity = useTransform(progress, [0.01, 0.05], [0, 1]);

  // Pointer-events gates so invisible overlapping beats don't block tooltips
  const pe0 = useBeatPointerEvents(progress, BEATS[0].enter, BEATS[0].gone);
  const pe1 = useBeatPointerEvents(progress, BEATS[1].enter, BEATS[1].gone);
  const pe2 = useBeatPointerEvents(progress, BEATS[2].enter, BEATS[2].gone);
  const peClose = useBeatPointerEvents(progress, 0.64);
  const peAll = [pe0, pe1, pe2];

  return (
    <div className="h-full flex flex-col justify-center px-6 sm:px-8">
      <div className="reading-width w-full mx-auto">
        {/* Heading — fades in and stays */}
        <motion.div style={{ opacity: headingOpacity }}>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-2">
            {critiqueHeadline}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            {critiqueBody}
            <Cite id="vandyck-2023-nejm" />
          </p>
        </motion.div>

        {/* Chart — always visible after initial fade-in */}
        <motion.div style={{ opacity: chartOpacity }}>
          <CritiqueChart progress={progress} />
        </motion.div>

        {/* Text annotations below chart — overlap in same grid cell */}
        <div
          className="mt-4 grid"
          style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
        >
          {critiquePoints.map((point, i) => (
            <motion.div key={point.label} className="col-start-1 row-start-1" style={{ pointerEvents: peAll[i] }}>
              <ScrollBeat
                progress={progress}
                enter={BEATS[i].enter}
                hold={BEATS[i].hold}
                exit={BEATS[i].exit}
                gone={BEATS[i].gone}
                enterFrom="bottom"
              >
                <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200">
                  {point.text}
                  {i === 0 && <Cite id="vandyck-2023-nejm" />}
                  {i === 1 && <Cite id="espay-2024-eneuro" citationIds={["espay-2024-eneuro-c4", "espay-2024-eneuro-c3"]} />}
                  {i === 2 && <Cite id="samtani-2014-ndt" />}
                </p>
              </ScrollBeat>
            </motion.div>
          ))}

          {/* Closing insight */}
          <motion.div className="col-start-1 row-start-1" style={{ pointerEvents: peClose }}>
            <ScrollBeat
              progress={progress}
              enter={0.64}
              hold={0.74}
              enterFrom="fade"
            >
              <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 max-w-[28ch]">
                {critiqueInsight}
                <Cite id="espay-2024-eneuro" citationIds={["espay-2024-eneuro-c2"]} />
                <Cite id="daly-2024-alz-dement" citationIds={["daly-2024-alz-dement-c1"]} />
              </p>
            </ScrollBeat>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: flowing layout                                             */
/* ------------------------------------------------------------------ */

function CritiqueFlowing() {
  return (
    <div className="py-24 space-y-12 px-6">
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-2">
            {critiqueHeadline}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {critiqueBody}
            <Cite id="vandyck-2023-nejm" />
          </p>

          {/* Static chart showing all elements */}
          <svg
            viewBox="0 0 640 340"
            className="w-full mb-8"
            role="img"
            aria-label="CDR-SB progression chart"
          >
            {/* Grid */}
            {yTicks.map((t) => (
              <line key={t.value} x1={ann.xMin} y1={t.y} x2={ann.xMax} y2={t.y} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
            ))}
            {xTicks.map((t) => (
              <line key={t.month} x1={t.x} y1={ann.yMin} x2={t.x} y2={ann.yMax} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
            ))}
            {/* Axes */}
            <line x1={ann.xMin} y1={ann.yMax} x2={ann.xMax} y2={ann.yMax} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
            <line x1={ann.xMin} y1={ann.yMin} x2={ann.xMin} y2={ann.yMax} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
            {/* Labels */}
            {xTicks.map((t) => (
              <text key={t.month} x={t.x} y={ann.yMax + 18} textAnchor="middle" className="fill-gray-500 text-[10px]">{t.month}</text>
            ))}
            <text x={(ann.xMin + ann.xMax) / 2} y={ann.yMax + 34} textAnchor="middle" className="fill-gray-500 text-[11px]">Months</text>
            {yTicks.map((t) => (
              <text key={t.value} x={ann.xMin - 10} y={t.y + 4} textAnchor="end" className="fill-gray-500 text-[10px]">{t.value}</text>
            ))}
            <text x={20} y={(ann.yMin + ann.yMax) / 2} textAnchor="middle" className="fill-gray-500 text-[11px]" transform={`rotate(-90, 20, ${(ann.yMin + ann.yMax) / 2})`}>Dementia score (CDR-SB)</text>
            <text x={20} y={ann.yMin - 4} textAnchor="middle" className="fill-gray-500 text-[9px]">&#x25B2; worse</text>
            {/* 18-month divider */}
            <line x1={ann.month18X} y1={ann.yMin} x2={ann.month18X} y2={ann.yMax} stroke="rgba(255,255,255,0.1)" strokeWidth={1} strokeDasharray="4 3" />
            {/* Data curves */}
            <path d={placeboDataPath} fill="none" stroke="rgb(156,163,175)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d={treatmentDataPath} fill="none" stroke={SAGE} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            {/* Sigmoidal extensions */}
            <path d={placeboSigmoidPath} fill="none" stroke="rgb(156,163,175)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d={treatmentSigmoidPath} fill="none" stroke={SAGE} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            {/* Linear extensions (faded) */}
            <path d={placeboLinearPath} fill="none" stroke="rgb(156,163,175)" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.25} />
            <path d={treatmentLinearPath} fill="none" stroke={SAGE} strokeWidth={1.5} strokeDasharray="6 4" opacity={0.25} />
            {/* Gap at 18mo */}
            <line x1={ann.month18X + 6} y1={ann.placebo18Y} x2={ann.month18X + 6} y2={ann.treatment18Y} stroke="rgb(248,113,113)" strokeWidth={2} />
            <text x={ann.month18X + 16} y={ann.gap18MidY + 4} className="fill-red-400 text-[12px] font-bold">0.45</text>
            {/* Gap at 36mo sigmoid */}
            <line x1={ann.month36X + 6} y1={ann.placebo36SigY} x2={ann.month36X + 6} y2={ann.treatment36SigY} stroke="rgb(248,113,113)" strokeWidth={2} />
            <text x={ann.month36X - 45} y={ann.gap36SigMidY + 4} className="fill-red-400 text-[11px] font-bold">0.13</text>
            {/* Legend */}
            <line x1={420} y1={18} x2={445} y2={18} stroke="rgb(156,163,175)" strokeWidth={2.5} />
            <text x={450} y={22} className="fill-gray-400 text-[10px]">Placebo</text>
            <line x1={500} y1={18} x2={525} y2={18} stroke={SAGE} strokeWidth={2.5} />
            <text x={530} y={22} fill={SAGE} className="text-[10px]">Lecanemab</text>
            {/* Label */}
            <text x={(ann.month18X + ann.month36X) / 2} y={ann.yMax + 34} textAnchor="middle" className="fill-gray-400 text-[10px]">If progression is sigmoidal, the gap narrows</text>
          </svg>
        </div>
      </ScrollAnimate>

      {critiquePoints.map((point, i) => (
        <ScrollAnimate key={point.label} enterFrom="bottom">
          <div className="reading-width mx-auto">
            <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200">
              {point.text}
              {i === 0 && <Cite id="vandyck-2023-nejm" />}
              {i === 1 && <Cite id="espay-2024-eneuro" citationIds={["espay-2024-eneuro-c4", "espay-2024-eneuro-c3"]} />}
              {i === 2 && <Cite id="samtani-2014-ndt" />}
            </p>
          </div>
        </ScrollAnimate>
      ))}

      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 max-w-[28ch]">
            {critiqueInsight}
            <Cite id="espay-2024-eneuro" citationIds={["espay-2024-eneuro-c2"]} />
            <Cite id="daly-2024-alz-dement" citationIds={["daly-2024-alz-dement-c1"]} />
          </p>
        </div>
      </ScrollAnimate>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export function LecanemabCritiqueSection() {
  return (
    <ScrollSection id="critique" label="27% means 2.5%" className="py-0" fullWidth breakpoints={[0, 0.32, 0.42, 0.53, 0.65]}>
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={350}>
          {(progress) => <CritiqueStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <CritiqueFlowing />
      </div>
    </ScrollSection>
  );
}
