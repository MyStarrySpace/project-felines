import { simulate } from "@/lib/kinetics/model";
import type { SimulationResult } from "@/lib/kinetics/types";

/** Pre-computed simulation results for each post-injury scenario */
export const mildResult: SimulationResult = simulate(
  { damage_severity: 0.2, repeated_insults: 1 },
  50
);

export const moderateResult: SimulationResult = simulate(
  { damage_severity: 0.4, repeated_insults: 1 },
  50
);

export const severeResult: SimulationResult = simulate(
  { damage_severity: 0.6, repeated_insults: 3 },
  50
);

export const scenarioResults: Record<string, SimulationResult> = {
  mild: mildResult,
  moderate: moderateResult,
  severe: severeResult,
};

/** Pre-computed simulation results for spontaneous AD scenarios */
export const e3e3Result: SimulationResult = simulate(
  {
    cascade_mode: "spontaneous",
    damage_severity: 0,
    repeated_insults: 0,
    apoe_genotype: "e3/e3",
  },
  50
);

export const e3e4Result: SimulationResult = simulate(
  {
    cascade_mode: "spontaneous",
    damage_severity: 0,
    repeated_insults: 0,
    apoe_genotype: "e3/e4",
  },
  50
);

export const e4e4Result: SimulationResult = simulate(
  {
    cascade_mode: "spontaneous",
    damage_severity: 0,
    repeated_insults: 0,
    apoe_genotype: "e4/e4",
  },
  50
);

export const spontaneousResults: Record<string, SimulationResult> = {
  e3e3: e3e3Result,
  e3e4: e3e4Result,
  e4e4: e4e4Result,
};

/**
 * Linear approximation for amyloid (for comparison on the amyloid chart).
 * Shows the incorrect constant-rate assumption.
 */
export function linearApproximation(
  baseline: number,
  rate: number,
  tMax: number,
  step: number
): { t: number; value: number }[] {
  const points: { t: number; value: number }[] = [];
  for (let t = 0; t <= tMax; t += step) {
    points.push({
      t: Math.round(t * 10) / 10,
      value: baseline + rate * t,
    });
  }
  return points;
}
