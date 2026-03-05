import { simulateClearance } from "@/lib/clearance/model";
import { clearanceScenarios } from "@/lib/clearance/parameters";
import type { ClearanceResult } from "@/lib/clearance/types";

/** Pre-computed simulation results for each scenario (run at import time) */
const results: Record<string, ClearanceResult> = {};

for (const scenario of clearanceScenarios) {
  results[scenario.id] = simulateClearance(
    scenario.overrides,
    scenario.extensionOverrides,
  );
}

export const healthyResult = results["healthy"];
export const apoe4HetResult = results["apoe4_het"];
export const apoe4HomResult = results["apoe4_hom"];
export const multimorbidResult = results["multimorbid"];
export const postStrokeResult = results["post_stroke"];
export const femalePostmenoResult = results["female_postmeno"];

export const scenarioResults = results;
