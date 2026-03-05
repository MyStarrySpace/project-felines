/**
 * Clearance narrative section — data + pre-computed SVG paths
 *
 * Runs 4 clearance simulations at import time and converts
 * ISF fold-change trajectories to SVG path strings.
 *
 * ISF (interstitial fluid iron) is used instead of LIP because
 * sleep disruption and hypertension affect glymphatic clearance
 * (ISF pathway), not intracellular LIP directly. This gives
 * visually distinct curves for each compounding risk factor.
 */

import { simulateClearance } from "@/lib/clearance/model";
import type { ClearanceResult } from "@/lib/clearance/types";

// ── Chart geometry ─────────────────────────────────────────────────

export const CHART = {
  viewBox: "0 0 640 290",
  xMin: 65,
  xMax: 610,
  yMin: 24,
  yMax: 232,
  ageMin: 20,
  ageMax: 100,
  foldMin: 0.9,
  foldMax: 3.5,
} as const;

function ageToX(age: number): number {
  return (
    CHART.xMin +
    ((age - CHART.ageMin) / (CHART.ageMax - CHART.ageMin)) *
      (CHART.xMax - CHART.xMin)
  );
}

function foldToY(fold: number): number {
  return (
    CHART.yMax -
    ((fold - CHART.foldMin) / (CHART.foldMax - CHART.foldMin)) *
      (CHART.yMax - CHART.yMin)
  );
}

// ── Pre-computed simulations ───────────────────────────────────────

const sims = {
  healthy: simulateClearance({}, {}),
  apoe4: simulateClearance({ apoe_genotype: "e4/e4" }, {}),
  apoe4Sleep: simulateClearance(
    { apoe_genotype: "e4/e4" },
    { sleepDisruption: { enabled: true, gly_reduction: 0.36 } },
  ),
  apoe4SleepHtn: simulateClearance(
    { apoe_genotype: "e4/e4" },
    {
      sleepDisruption: { enabled: true, gly_reduction: 0.36 },
      hypertension: { enabled: true, gly_reduction: 0.32 },
    },
  ),
};

// ── ISF threshold crossing ─────────────────────────────────────────

function findIsfCrossing(
  result: ClearanceResult,
  threshold: number,
): number | null {
  const base = result.baselines.Fe_ISF;
  for (const tp of result.timePoints) {
    if (tp.Fe_ISF / base >= threshold) return tp.age;
  }
  return null;
}

// ── SVG path generation (ISF fold change) ──────────────────────────

function resultToIsfPath(result: ClearanceResult): string {
  const base = result.baselines.Fe_ISF;
  return result.timePoints
    .filter((_, i) => i % 2 === 0)
    .map((tp, i) => {
      const fold = Math.min(tp.Fe_ISF / base, CHART.foldMax);
      const x = ageToX(tp.age);
      const y = foldToY(fold);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export const paths = {
  healthy: resultToIsfPath(sims.healthy),
  apoe4: resultToIsfPath(sims.apoe4),
  apoe4Sleep: resultToIsfPath(sims.apoe4Sleep),
  apoe4SleepHtn: resultToIsfPath(sims.apoe4SleepHtn),
};

// ── Chart reference positions ──────────────────────────────────────

export const baselineY = foldToY(1.0);
export const stage1Y = foldToY(1.5);
export const stage2Y = foldToY(2.5);

// ── Axis ticks ─────────────────────────────────────────────────────

export const xTicks = [20, 40, 60, 80, 100].map((age) => ({
  age,
  x: ageToX(age),
}));

export const yTicks = [
  { fold: 1.0, label: "1.0\u00D7" },
  { fold: 1.5, label: "1.5\u00D7" },
  { fold: 2.0, label: "2.0\u00D7" },
  { fold: 2.5, label: "2.5\u00D7" },
  { fold: 3.0, label: "3.0\u00D7" },
].map((t) => ({ ...t, y: foldToY(t.fold) }));

// ── Narrative steps ────────────────────────────────────────────────

export interface NarrativeStep {
  id: string;
  headline: string;
  interpretation: string;
  /** Age when ISF crosses 1.5× baseline, computed from model */
  stageAge: string | null;
  color: string;
  factorIds: string[];
}

const hCross = findIsfCrossing(sims.healthy, 1.5);
const aCross = findIsfCrossing(sims.apoe4, 1.5);
const asCross = findIsfCrossing(sims.apoe4Sleep, 1.5);
const ashCross = findIsfCrossing(sims.apoe4SleepHtn, 1.5);
const ashCross2 = findIsfCrossing(sims.apoe4SleepHtn, 2.5);

const ageGap =
  hCross && aCross ? Math.round(hCross - aCross) : 25;

export const narrativeSteps: NarrativeStep[] = [
  {
    id: "healthy",
    headline: "Everyone accumulates iron",
    interpretation: `Ferroportin export and glymphatic drainage both decline with age. Even without genetic risk, interstitial iron reaches the impaired-clearance zone around age ${hCross ? Math.round(hCross) : 80}.`,
    stageAge: hCross ? `${Math.round(hCross)}` : null,
    color: "#9CA3AF",
    factorIds: ["aging"],
  },
  {
    id: "apoe4",
    headline: "APOE4 accelerates the timeline",
    interpretation: `APOE4 impairs both ferroportin export and glymphatic efficiency. ISF iron rises ~${ageGap} years faster, consistent with Corder 1993 onset data.`,
    stageAge: aCross ? `${Math.round(aCross)}` : null,
    color: "#FBBF24",
    factorIds: ["aging", "apoe4"],
  },
  {
    id: "apoe4_sleep",
    headline: "Poor sleep compounds the damage",
    interpretation: `Glymphatic clearance depends on sleep. Chronic disruption cuts drainage ~36%, pushing impaired clearance to age ${asCross ? `~${Math.round(asCross)}` : "the 40s"}.`,
    stageAge: asCross ? `${Math.round(asCross)}` : null,
    color: "#F59E0B",
    factorIds: ["aging", "apoe4", "sleep"],
  },
  {
    id: "apoe4_sleep_htn",
    headline: "Vascular damage adds another hit",
    interpretation: `Hypertension cuts glymphatic flow another ~32%.${ashCross2 ? ` With all three factors, clearance failure arrives around age ${Math.round(ashCross2)}.` : " Together, clearance fails decades early."}`,
    stageAge: ashCross ? `${Math.round(ashCross)}` : null,
    color: "#EF4444",
    factorIds: ["aging", "apoe4", "sleep", "htn"],
  },
];

// ── Factor definitions ─────────────────────────────────────────────

export interface NarrativeFactor {
  id: string;
  label: string;
}

export const narrativeFactors: NarrativeFactor[] = [
  { id: "aging", label: "Aging" },
  { id: "apoe4", label: "APOE4 (e4/e4)" },
  { id: "sleep", label: "Poor sleep" },
  { id: "htn", label: "Hypertension" },
];

// ── Threshold zone annotations ────────────────────────────────────

export const thresholdAnnotations = {
  stage1: {
    label: "Oxidative stress begins",
    detail: "GPX4 overwhelmed, lipid peroxidation in oligodendrocytes",
  },
  stage2: {
    label: "Ferroptosis cascade",
    detail: "White matter damage, measurable on MRI",
  },
} as const;

// ── Section copy ───────────────────────────────────────────────────

export const narrativeHeadline = "Why some brains fail faster";
export const narrativeClosing =
  "Each risk factor alone is survivable. Together, they overwhelm your brain\u2019s iron drainage.";
export const narrativeExploreLabel = "Explore the full model";
export const narrativeExploreHref = "/explore/clearance";
