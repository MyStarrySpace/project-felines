"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Cite } from "@/components/citation/cite";
import {
  CHART,
  paths,
  baselineY,
  stage1Y,
  stage2Y,
  xTicks,
  yTicks,
  narrativeSteps,
  narrativeFactors,
  narrativeHeadline,
  narrativeClosing,
  narrativeExploreLabel,
  narrativeExploreHref,
  thresholdAnnotations,
} from "@/data/landing/clearance-narrative";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const LINE_CONFIGS = [
  { path: paths.healthy, color: "#9CA3AF", width: 1.5, dashed: true },
  { path: paths.apoe4, color: "#FBBF24", width: 2, dashed: false },
  { path: paths.apoe4Sleep, color: "#F59E0B", width: 2, dashed: false },
  { path: paths.apoe4SleepHtn, color: "#EF4444", width: 2.5, dashed: false },
] as const;

/** Progress values where each line appears */
const LINE_ENTER = [0.08, 0.28, 0.48, 0.68];

/** Beat timing for each step's text (enter / hold / exit / gone) */
const BEATS = [
  { enter: 0.10, hold: 0.16, exit: 0.24, gone: 0.28 },
  { enter: 0.30, hold: 0.36, exit: 0.44, gone: 0.48 },
  { enter: 0.50, hold: 0.56, exit: 0.64, gone: 0.68 },
  { enter: 0.70, hold: 0.76, exit: 0.84, gone: 0.88 },
];

/** Progress values where each factor pill activates */
const PILL_ACTIVATE = [0.08, 0.28, 0.48, 0.68];

/* ------------------------------------------------------------------ */
/*  SVG Chart (scroll-animated)                                        */
/* ------------------------------------------------------------------ */

function NarrativeChart({ progress }: { progress: MotionValue<number> }) {
  const o0 = useTransform(progress, [LINE_ENTER[0], LINE_ENTER[0] + 0.06], [0, 1]);
  const o1 = useTransform(progress, [LINE_ENTER[1], LINE_ENTER[1] + 0.06], [0, 1]);
  const o2 = useTransform(progress, [LINE_ENTER[2], LINE_ENTER[2] + 0.06], [0, 1]);
  const o3 = useTransform(progress, [LINE_ENTER[3], LINE_ENTER[3] + 0.06], [0, 1]);
  const lineOpacities = [o0, o1, o2, o3];

  return (
    <svg
      viewBox={CHART.viewBox}
      className="w-full max-w-2xl mx-auto"
      role="img"
      aria-label="Brain iron clearance under different risk factors"
    >
      {/* Grid lines */}
      {yTicks.map((t) => (
        <line
          key={t.fold}
          x1={CHART.xMin} y1={t.y} x2={CHART.xMax} y2={t.y}
          stroke="rgba(255,255,255,0.06)" strokeWidth={1}
        />
      ))}
      {xTicks.map((t) => (
        <line
          key={t.age}
          x1={t.x} y1={CHART.yMin} x2={t.x} y2={CHART.yMax}
          stroke="rgba(255,255,255,0.04)" strokeWidth={1}
        />
      ))}

      {/* Axes */}
      <line
        x1={CHART.xMin} y1={CHART.yMax} x2={CHART.xMax} y2={CHART.yMax}
        stroke="rgba(255,255,255,0.2)" strokeWidth={1}
      />
      <line
        x1={CHART.xMin} y1={CHART.yMin} x2={CHART.xMin} y2={CHART.yMax}
        stroke="rgba(255,255,255,0.2)" strokeWidth={1}
      />

      {/* Stage bands */}
      <rect
        x={CHART.xMin} y={stage2Y}
        width={CHART.xMax - CHART.xMin} height={stage1Y - stage2Y}
        fill="rgba(251,191,36,0.04)"
      />
      <rect
        x={CHART.xMin} y={CHART.yMin}
        width={CHART.xMax - CHART.xMin} height={stage2Y - CHART.yMin}
        fill="rgba(239,68,68,0.04)"
      />

      {/* Threshold lines */}
      <line
        x1={CHART.xMin} y1={baselineY} x2={CHART.xMax} y2={baselineY}
        stroke="#6B7280" strokeWidth={1} strokeDasharray="4 4" opacity={0.4}
      />
      <line
        x1={CHART.xMin} y1={stage1Y} x2={CHART.xMax} y2={stage1Y}
        stroke="#FBBF24" strokeWidth={1} strokeDasharray="6 4" opacity={0.3}
      />
      <line
        x1={CHART.xMin} y1={stage2Y} x2={CHART.xMax} y2={stage2Y}
        stroke="#EF4444" strokeWidth={1} strokeDasharray="6 4" opacity={0.3}
      />

      {/* Threshold labels — outcome-focused */}
      <text x={CHART.xMin + 4} y={baselineY - 5} className="fill-gray-500 text-[9px]" opacity={0.6}>
        Baseline
      </text>
      <text x={CHART.xMax - 4} y={stage1Y - 5} textAnchor="end" fill="#FBBF24" className="text-[9px]" opacity={0.6}>
        {thresholdAnnotations.stage1.label}
      </text>
      <text x={CHART.xMax - 4} y={stage1Y + 12} textAnchor="end" fill="#FBBF24" className="text-[8px]" opacity={0.35}>
        {thresholdAnnotations.stage1.detail}
      </text>
      <text x={CHART.xMax - 4} y={stage2Y - 5} textAnchor="end" fill="#EF4444" className="text-[9px]" opacity={0.6}>
        {thresholdAnnotations.stage2.label}
      </text>
      <text x={CHART.xMax - 4} y={stage2Y + 12} textAnchor="end" fill="#EF4444" className="text-[8px]" opacity={0.35}>
        {thresholdAnnotations.stage2.detail}
      </text>

      {/* Scenario lines */}
      {LINE_CONFIGS.map((cfg, i) => (
        <motion.path
          key={cfg.color}
          d={cfg.path}
          fill="none"
          stroke={cfg.color}
          strokeWidth={cfg.width}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={cfg.dashed ? "6 4" : undefined}
          style={{ opacity: lineOpacities[i] }}
        />
      ))}

      {/* X-axis labels */}
      {xTicks.map((t) => (
        <text key={t.age} x={t.x} y={CHART.yMax + 18} textAnchor="middle" className="fill-gray-500 text-[10px]">
          {t.age}
        </text>
      ))}
      <text x={(CHART.xMin + CHART.xMax) / 2} y={CHART.yMax + 34} textAnchor="middle" className="fill-gray-500 text-[11px]">
        Age (years)
      </text>

      {/* Y-axis labels */}
      {yTicks.map((t) => (
        <text key={t.fold} x={CHART.xMin - 8} y={t.y + 4} textAnchor="end" className="fill-gray-500 text-[10px]">
          {t.label}
        </text>
      ))}
      <text
        x={18}
        y={(CHART.yMin + CHART.yMax) / 2}
        textAnchor="middle"
        className="fill-gray-500 text-[10px]"
        transform={`rotate(-90, 18, ${(CHART.yMin + CHART.yMax) / 2})`}
      >
        ISF iron (fold change)
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Factor pill (individual component to keep hooks at top level)      */
/* ------------------------------------------------------------------ */

function FactorPill({
  label,
  stepColor,
  progress,
  activateAt,
}: {
  label: string;
  stepColor: string;
  progress: MotionValue<number>;
  activateAt: number;
}) {
  const activeOpacity = useTransform(
    progress,
    [activateAt - 0.02, activateAt + 0.04],
    [0, 1],
  );

  return (
    <div className="relative inline-flex items-center">
      <span className="px-2.5 py-1 text-xs border border-white/10 text-gray-500 flex items-center gap-1.5">
        <span
          className="w-1.5 h-1.5 flex-shrink-0"
          style={{ backgroundColor: stepColor }}
        />
        {label}
      </span>
      <motion.span
        className="absolute inset-0 px-2.5 py-1 text-xs border text-white/90 flex items-center gap-1.5"
        style={{
          opacity: activeOpacity,
          borderColor: stepColor,
          backgroundColor: `${stepColor}10`,
        }}
      >
        <span
          className="w-1.5 h-1.5 flex-shrink-0"
          style={{ backgroundColor: stepColor }}
        />
        {label}
      </motion.span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pointer-events helper                                              */
/* ------------------------------------------------------------------ */

function useBeatPointerEvents(
  progress: MotionValue<number>,
  enter: number,
  gone?: number,
) {
  return useTransform(progress, (p) => {
    const visible =
      gone !== undefined
        ? p >= enter - 0.02 && p <= gone + 0.02
        : p >= enter - 0.02;
    return visible ? ("auto" as const) : ("none" as const);
  });
}

/* ------------------------------------------------------------------ */
/*  Desktop: sticky scroll stage                                       */
/* ------------------------------------------------------------------ */

function NarrativeStage({ progress }: { progress: MotionValue<number> }) {
  const headingOpacity = useTransform(progress, [0, 0.04], [0, 1]);
  const chartOpacity = useTransform(progress, [0.02, 0.08], [0, 1]);

  const pe0 = useBeatPointerEvents(progress, BEATS[0].enter, BEATS[0].gone);
  const pe1 = useBeatPointerEvents(progress, BEATS[1].enter, BEATS[1].gone);
  const pe2 = useBeatPointerEvents(progress, BEATS[2].enter, BEATS[2].gone);
  const pe3 = useBeatPointerEvents(progress, BEATS[3].enter, BEATS[3].gone);
  const peClose = useBeatPointerEvents(progress, 0.88);
  const peAll = [pe0, pe1, pe2, pe3];

  return (
    <div className="h-full flex flex-col justify-center px-6 sm:px-8">
      <div className="reading-width w-full mx-auto">
        <motion.div style={{ opacity: headingOpacity }}>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            {narrativeHeadline}
          </h2>
        </motion.div>

        <motion.div style={{ opacity: chartOpacity }} className="flex flex-wrap gap-2 mb-4">
          {narrativeFactors.map((factor, i) => (
            <FactorPill
              key={factor.id}
              label={factor.label}
              stepColor={narrativeSteps[i].color}
              progress={progress}
              activateAt={PILL_ACTIVATE[i]}
            />
          ))}
        </motion.div>

        <motion.div style={{ opacity: chartOpacity }}>
          <NarrativeChart progress={progress} />
        </motion.div>

        <div
          className="mt-4 grid"
          style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
        >
          {narrativeSteps.map((step, i) => (
            <motion.div
              key={step.id}
              className="col-start-1 row-start-1"
              style={{ pointerEvents: peAll[i] }}
            >
              <ScrollBeat
                progress={progress}
                enter={BEATS[i].enter}
                hold={BEATS[i].hold}
                exit={BEATS[i].exit}
                gone={BEATS[i].gone}
                enterFrom="bottom"
              >
                <p className="font-serif text-[clamp(1.1rem,2.5vw,1.5rem)] leading-snug text-white/90 mb-1">
                  {step.headline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-prose">
                  {step.interpretation}
                  {i === 0 && <Cite id="hallgren-1958-jneurochem" />}
                </p>
                {step.stageAge && (
                  <span
                    className="inline-block mt-2 px-2 py-0.5 text-xs font-medium border"
                    style={{ color: step.color, borderColor: `${step.color}40` }}
                  >
                    Impaired clearance: age ~{step.stageAge}
                  </span>
                )}
              </ScrollBeat>
            </motion.div>
          ))}

          <motion.div
            className="col-start-1 row-start-1"
            style={{ pointerEvents: peClose }}
          >
            <ScrollBeat progress={progress} enter={0.88} hold={0.93} enterFrom="fade">
              <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 max-w-[30ch]">
                {narrativeClosing}
              </p>
              <Link
                href={narrativeExploreHref}
                className="inline-block mt-4 text-sm text-teal-400 hover:text-teal-300 underline underline-offset-4"
              >
                {narrativeExploreLabel} &rarr;
              </Link>
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

function NarrativeFlowing() {
  return (
    <div className="py-24 space-y-12 px-6">
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
            {narrativeHeadline}
          </h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {narrativeFactors.map((factor, i) => (
              <span
                key={factor.id}
                className="px-2.5 py-1 text-xs border text-white/90 flex items-center gap-1.5"
                style={{
                  borderColor: narrativeSteps[i].color,
                  backgroundColor: `${narrativeSteps[i].color}10`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 flex-shrink-0"
                  style={{ backgroundColor: narrativeSteps[i].color }}
                />
                {factor.label}
              </span>
            ))}
          </div>

          <svg
            viewBox={CHART.viewBox}
            className="w-full mb-4"
            role="img"
            aria-label="Brain iron clearance under different risk factors"
          >
            {yTicks.map((t) => (
              <line
                key={t.fold}
                x1={CHART.xMin} y1={t.y} x2={CHART.xMax} y2={t.y}
                stroke="rgba(255,255,255,0.06)" strokeWidth={1}
              />
            ))}
            <line
              x1={CHART.xMin} y1={CHART.yMax} x2={CHART.xMax} y2={CHART.yMax}
              stroke="rgba(255,255,255,0.2)" strokeWidth={1}
            />
            <line
              x1={CHART.xMin} y1={CHART.yMin} x2={CHART.xMin} y2={CHART.yMax}
              stroke="rgba(255,255,255,0.2)" strokeWidth={1}
            />
            <rect
              x={CHART.xMin} y={stage2Y}
              width={CHART.xMax - CHART.xMin} height={stage1Y - stage2Y}
              fill="rgba(251,191,36,0.04)"
            />
            <rect
              x={CHART.xMin} y={CHART.yMin}
              width={CHART.xMax - CHART.xMin} height={stage2Y - CHART.yMin}
              fill="rgba(239,68,68,0.04)"
            />
            <line
              x1={CHART.xMin} y1={baselineY} x2={CHART.xMax} y2={baselineY}
              stroke="#6B7280" strokeWidth={1} strokeDasharray="4 4" opacity={0.4}
            />
            <line
              x1={CHART.xMin} y1={stage1Y} x2={CHART.xMax} y2={stage1Y}
              stroke="#FBBF24" strokeWidth={1} strokeDasharray="6 4" opacity={0.3}
            />
            <line
              x1={CHART.xMin} y1={stage2Y} x2={CHART.xMax} y2={stage2Y}
              stroke="#EF4444" strokeWidth={1} strokeDasharray="6 4" opacity={0.3}
            />
            <text x={CHART.xMin + 4} y={baselineY - 5} className="fill-gray-500 text-[9px]" opacity={0.6}>
              Baseline
            </text>
            <text x={CHART.xMax - 4} y={stage1Y - 5} textAnchor="end" fill="#FBBF24" className="text-[9px]" opacity={0.6}>
              {thresholdAnnotations.stage1.label}
            </text>
            <text x={CHART.xMax - 4} y={stage1Y + 12} textAnchor="end" fill="#FBBF24" className="text-[8px]" opacity={0.35}>
              {thresholdAnnotations.stage1.detail}
            </text>
            <text x={CHART.xMax - 4} y={stage2Y - 5} textAnchor="end" fill="#EF4444" className="text-[9px]" opacity={0.6}>
              {thresholdAnnotations.stage2.label}
            </text>
            <text x={CHART.xMax - 4} y={stage2Y + 12} textAnchor="end" fill="#EF4444" className="text-[8px]" opacity={0.35}>
              {thresholdAnnotations.stage2.detail}
            </text>
            {LINE_CONFIGS.map((cfg) => (
              <path
                key={cfg.color}
                d={cfg.path}
                fill="none"
                stroke={cfg.color}
                strokeWidth={cfg.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={cfg.dashed ? "6 4" : undefined}
              />
            ))}
            {xTicks.map((t) => (
              <text key={t.age} x={t.x} y={CHART.yMax + 18} textAnchor="middle" className="fill-gray-500 text-[10px]">
                {t.age}
              </text>
            ))}
            <text x={(CHART.xMin + CHART.xMax) / 2} y={CHART.yMax + 34} textAnchor="middle" className="fill-gray-500 text-[11px]">
              Age (years)
            </text>
            {yTicks.map((t) => (
              <text key={t.fold} x={CHART.xMin - 8} y={t.y + 4} textAnchor="end" className="fill-gray-500 text-[10px]">
                {t.label}
              </text>
            ))}
            <text
              x={18}
              y={(CHART.yMin + CHART.yMax) / 2}
              textAnchor="middle"
              className="fill-gray-500 text-[10px]"
              transform={`rotate(-90, 18, ${(CHART.yMin + CHART.yMax) / 2})`}
            >
              ISF iron (fold change)
            </text>
          </svg>
        </div>
      </ScrollAnimate>

      {narrativeSteps.map((step, i) => (
        <ScrollAnimate key={step.id} enterFrom="bottom">
          <div className="reading-width mx-auto">
            <p className="font-serif text-[clamp(1.1rem,2.5vw,1.5rem)] leading-snug text-white/90 mb-1">
              {step.headline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-prose">
              {step.interpretation}
              {i === 0 && <Cite id="hallgren-1958-jneurochem" />}
            </p>
            {step.stageAge && (
              <span
                className="inline-block mt-2 px-2 py-0.5 text-xs font-medium border"
                style={{ color: step.color, borderColor: `${step.color}40` }}
              >
                Impaired clearance: age ~{step.stageAge}
              </span>
            )}
          </div>
        </ScrollAnimate>
      ))}

      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 max-w-[30ch]">
            {narrativeClosing}
          </p>
          <Link
            href={narrativeExploreHref}
            className="inline-block mt-4 text-sm text-teal-400 hover:text-teal-300 underline underline-offset-4"
          >
            {narrativeExploreLabel} &rarr;
          </Link>
        </div>
      </ScrollAnimate>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported section                                                   */
/* ------------------------------------------------------------------ */

const BREAKPOINTS = [0, 0.12, 0.32, 0.52, 0.72, 0.90];

export function ClearanceNarrativeSection() {
  return (
    <ScrollSection
      id="clearance-narrative"
      label="Why some brains fail faster"
      className="py-0"
      fullWidth
      breakpoints={BREAKPOINTS}
    >
      <div className="hidden md:block">
        <StickyScrollStage height={350}>
          {(progress) => <NarrativeStage progress={progress} />}
        </StickyScrollStage>
      </div>

      <div className="md:hidden">
        <NarrativeFlowing />
      </div>
    </ScrollSection>
  );
}
