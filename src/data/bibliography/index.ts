import type { Source, Citation, TopicTag, VerificationStatus } from "./types";
import { pericyteVascularSources } from "./pericyte-vascular";
import { lysosomalSources } from "./lysosomal";
import { ironFerrOptosisSources } from "./iron-ferroptosis";
import { glialSources } from "./glial";
import { clinicalTrialsSources } from "./clinical-trials";
import { epidemiologySources } from "./epidemiology";
import { crossDiseaseSources } from "./cross-disease";
import { ironCascadesSources } from "./iron-cascades";
import { viralReactivationSources } from "./viral-reactivation";

// Re-export types
export type { Source, Citation, TopicTag, VerificationStatus };

// Re-export module arrays
export {
  pericyteVascularSources,
  lysosomalSources,
  ironFerrOptosisSources,
  glialSources,
  clinicalTrialsSources,
  epidemiologySources,
  crossDiseaseSources,
  ironCascadesSources,
  viralReactivationSources,
};

// Aggregate all sources
const allModules: Source[][] = [
  pericyteVascularSources,
  lysosomalSources,
  ironFerrOptosisSources,
  glialSources,
  clinicalTrialsSources,
  epidemiologySources,
  crossDiseaseSources,
  ironCascadesSources,
  viralReactivationSources,
];

export const sources: Source[] = allModules.flat();

// Runtime duplicate ID check
const idCounts = new Map<string, number>();
for (const source of sources) {
  idCounts.set(source.id, (idCounts.get(source.id) ?? 0) + 1);
}
const duplicates = [...idCounts.entries()].filter(([, count]) => count > 1);
if (duplicates.length > 0) {
  throw new Error(
    `Duplicate source IDs found: ${duplicates.map(([id]) => id).join(", ")}`
  );
}

// Build lookup map
export const sourcesMap = new Map<string, Source>(
  sources.map((s) => [s.id, s])
);

// Citation lookup
const citationEntries: [string, Citation][] = sources.flatMap((s) =>
  s.citations.map((c): [string, Citation] => [c.citationId, c])
);
export const citationsMap = new Map<string, Citation>(citationEntries);
