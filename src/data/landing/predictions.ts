import type { Prediction } from "./types";

export const predictions: Prediction[] = [
  {
    prediction: "Iron chelation fails in PD and AD",
    status: "confirmed",
    evidence: "FAIRPARK-II + Ayton 2024",
  },
  {
    prediction: "Antivirals don't treat established disease",
    status: "confirmed",
    evidence: "VALAD trial (2025)",
  },
  {
    prediction: "Prevention \u2260 treatment",
    status: "confirmed",
    evidence: "VZV vaccine prevents but VALAD fails",
  },
  {
    prediction: "BACE inhibitors worsen outcomes",
    status: "confirmed",
    evidence: "5/5 trials showed worsening",
  },
  {
    prediction: "AQP4 affects iron accumulation",
    status: "consistent",
    evidence: "Chen 2024: AQP4-KO increases brain iron",
  },
];
