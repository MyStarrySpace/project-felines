import { simulateClearance } from "@/lib/clearance/model";
import { clearanceScenarios } from "@/lib/clearance/parameters";
import type { ClearanceResult } from "@/lib/clearance/types";

/** Pre-computed simulation results for each scenario (run at import time) */
export const healthyResult: ClearanceResult = simulateClearance(
  clearanceScenarios[0].parameters
);

export const apoe4HetResult: ClearanceResult = simulateClearance(
  clearanceScenarios[1].parameters
);

export const apoe4HomResult: ClearanceResult = simulateClearance(
  clearanceScenarios[2].parameters
);

export const multimorbidResult: ClearanceResult = simulateClearance(
  clearanceScenarios[3].parameters
);

export const postStrokeResult: ClearanceResult = simulateClearance(
  clearanceScenarios[4].parameters
);

export const femalePostmenoResult: ClearanceResult = simulateClearance(
  clearanceScenarios[5].parameters
);

/** Map from scenario ID to pre-computed result */
export const scenarioResults: Record<string, ClearanceResult> = {
  healthy: healthyResult,
  apoe4_het: apoe4HetResult,
  apoe4_hom: apoe4HomResult,
  multimorbid: multimorbidResult,
  post_stroke: postStrokeResult,
  female_postmeno: femalePostmenoResult,
};
