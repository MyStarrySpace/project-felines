import { simulate } from "@/lib/kinetics/model";
import type { SimulationResult } from "@/lib/kinetics/types";

/** Pre-computed simulation results for each default scenario */
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
