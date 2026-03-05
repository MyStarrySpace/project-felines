export type DiseaseTarget =
  | "AD"
  | "PD"
  | "ALS"
  | "HD"
  | "PSP"
  | "MSA"
  | "FTD"
  | "MS"
  | "DLB"
  | "FRDA"
  | "multi";

export interface ProblemStat {
  value: string;
  label: string;
  description: string;
}

export interface PillarData {
  letter: string;
  title: string;
  description: string;
}

export interface PathwayStep {
  step: number;
  title: string;
  description: string;
  timing?: string;
  tags?: string[];
}

export interface DiseaseCard {
  name: string;
  stat: string;
  statLabel: string;
  explanation: string;
}

export interface FailedTrial {
  trial: string;
  target: string;
  result: string;
  ironAnalysis: string;
}

export interface TrialCategory {
  category: string;
  count: number;
  expectedOutcome: string;
  actualOutcome: string;
  accuracy: string;
}

export interface ChelationRow {
  disease: string;
  chelationResult: string;
  ironAnalysis: string;
}

export interface Prediction {
  prediction: string;
  status: "confirmed" | "consistent";
  evidence: string;
}

export interface DiseaseEntryPoint {
  disease: string;
  layers: string[];
  tooltips: Record<string, string>;
}

export interface PillarDeepDive {
  letter: string;
  title: string;
  description: string;
  failureMode: string;
  evidence: string;
  therapeuticTarget: string;
  entryFor: string[];
}
