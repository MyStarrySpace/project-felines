/**
 * Derived calculations from clearance simulation results.
 * Threshold detection, phase timelines, cell-type budget, comparison utils.
 */

import type { ClearanceResult, ClearanceTimePoint, CellTypeBudget } from "./types";
import { cellTypeBudget } from "./parameters";

/** Find the age at which a compartment first crosses a threshold */
export function findThresholdAge(
  timePoints: ClearanceTimePoint[],
  key: keyof ClearanceTimePoint,
  threshold: number
): number | null {
  for (const tp of timePoints) {
    if ((tp[key] as number) >= threshold) return tp.age;
  }
  return null;
}

/** Get the phase timeline: ranges of ages spent in each phase */
export interface PhaseRange {
  phase: 0 | 1 | 2;
  startAge: number;
  endAge: number;
}

export function getPhaseTimeline(
  timePoints: ClearanceTimePoint[]
): PhaseRange[] {
  if (timePoints.length === 0) return [];

  const ranges: PhaseRange[] = [];
  let currentPhase = timePoints[0].phase;
  let startAge = timePoints[0].age;

  for (let i = 1; i < timePoints.length; i++) {
    if (timePoints[i].phase !== currentPhase) {
      ranges.push({ phase: currentPhase, startAge, endAge: timePoints[i].age });
      currentPhase = timePoints[i].phase;
      startAge = timePoints[i].age;
    }
  }
  ranges.push({
    phase: currentPhase,
    startAge,
    endAge: timePoints[timePoints.length - 1].age,
  });

  return ranges;
}

/** Compute cell-type Fpn budget with weighted contributions */
export function computeCellTypeBudget(): CellTypeBudget[] {
  const total = cellTypeBudget.reduce(
    (sum, c) => sum + c.weightedContribution,
    0
  );
  return cellTypeBudget.map((c) => ({
    ...c,
    // Normalize to percentages
    weightedContribution: c.weightedContribution / total,
  }));
}

/** Get clearance fraction at a specific age */
export function getClearanceAtAge(
  result: ClearanceResult,
  age: number
): { fpn: number; gly: number; total: number } | null {
  const tp = result.timePoints.find((t) => t.age >= age);
  if (!tp) return null;
  return {
    fpn: tp.fpn_fraction,
    gly: tp.gly_fraction,
    total: tp.fpn_fraction * tp.gly_fraction,
  };
}

/** Compare two results: time gained/lost for phase entry */
export function comparePhaseOnset(
  baseline: ClearanceResult,
  comparison: ClearanceResult
): { phase1Diff: number | null; phase2Diff: number | null } {
  const phase1Diff =
    baseline.phase1Age !== null && comparison.phase1Age !== null
      ? baseline.phase1Age - comparison.phase1Age
      : null;
  const phase2Diff =
    baseline.phase2Age !== null && comparison.phase2Age !== null
      ? baseline.phase2Age - comparison.phase2Age
      : null;
  return { phase1Diff, phase2Diff };
}

/** Summary statistics for a simulation result */
export interface ClearanceSummary {
  phase1Age: number | null;
  phase2Age: number | null;
  clearanceAt70Pct: number;
  isfAt70: number;
  lipAt70: number;
  ferritinAt70: number;
}

export function summarize(result: ClearanceResult): ClearanceSummary {
  const at70 = result.timePoints.find((tp) => tp.age >= 70);
  return {
    phase1Age: result.phase1Age,
    phase2Age: result.phase2Age,
    clearanceAt70Pct: Math.round(result.clearanceAt70 * 100),
    isfAt70: at70?.Fe_ISF ?? 1.0,
    lipAt70: at70?.Fe_LIP ?? 2.5,
    ferritinAt70: at70?.Fe_ferritin ?? 25.0,
  };
}
