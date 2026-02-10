import type { TrialCategory, ChelationRow } from "./types";

export const trialCategories: TrialCategory[] = [
  {
    category: "Anti-amyloid antibodies",
    count: 6,
    expectedOutcome: "Fail or worsen",
    actualOutcome: "All failed or marginal; plaques cleared but no clinical benefit",
    accuracy: "6/6",
  },
  {
    category: "BACE inhibitors",
    count: 5,
    expectedOutcome: "Fail or worsen",
    actualOutcome: "All failed; some worsened cognition",
    accuracy: "5/5",
  },
  {
    category: "Anti-tau antibodies",
    count: 4,
    expectedOutcome: "Fail",
    actualOutcome: "All failed to slow decline",
    accuracy: "4/4",
  },
  {
    category: "Iron chelators",
    count: 3,
    expectedOutcome: "Worsen (maldistribution, not overload)",
    actualOutcome: "Worsened PD and AD motor/cognitive symptoms",
    accuracy: "3/3",
  },
  {
    category: "Anti-inflammatory",
    count: 8,
    expectedOutcome: "Fail (downstream of iron)",
    actualOutcome: "No disease modification in any trial",
    accuracy: "8/8",
  },
  {
    category: "Antiviral (established disease)",
    count: 2,
    expectedOutcome: "Fail (damage already structural)",
    actualOutcome: "VALAD trial negative; no benefit in established AD",
    accuracy: "2/2",
  },
];

export const chelationTrifecta: ChelationRow[] = [
  {
    disease: "Parkinson's",
    chelationResult: "Worsened motor symptoms (FAIRPARK-II)",
    ironAnalysis:
      "Oligodendrocytes are iron-starved. Chelation depletes them further while failing to redistribute iron from overloaded astrocytes.",
  },
  {
    disease: "Alzheimer's",
    chelationResult: "Worsened cognition (Ayton 2024)",
    ironAnalysis:
      "Plaques sequester toxic iron. Chelation disrupts this buffer without fixing the export dysfunction that caused accumulation.",
  },
  {
    disease: "Huntington's",
    chelationResult: "Improved symptoms",
    ironAnalysis:
      "HD has genuine iron overload (not maldistribution). Chelation works because the problem matches the treatment. This contrast confirms that iron biology matters.",
  },
];
