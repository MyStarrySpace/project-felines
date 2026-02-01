import type { FailedTrial } from "./types";

export const failedTrials: FailedTrial[] = [
  {
    trial: "Solanezumab (Eli Lilly)",
    target: "Amyloid-beta clearance",
    result: "No cognitive benefit in 3 Phase III trials",
    felineExplanation:
      "Amyloid is downstream of iron-mediated damage. Clearing it doesn't address the upstream defense layer failures (neurovascular breach, export dysfunction) driving the disease.",
  },
  {
    trial: "Verubecestat (Merck)",
    target: "BACE1 inhibitor",
    result: "Cognitive worsening; trial halted early",
    felineExplanation:
      "BACE1 has neuroprotective roles beyond amyloid processing. Inhibiting it removed a compensatory mechanism while leaving all five defense layers unaddressed.",
  },
  {
    trial: "Aducanumab (Biogen)",
    target: "Amyloid plaque removal",
    result: "Plaques cleared; no consistent clinical benefit",
    felineExplanation:
      "Demonstrated that amyloid removal is achievable but counterproductive. Dense-core plaques are granulomas that sequester toxic iron. Removing them releases that iron back into brain tissue.",
  },
  {
    trial: "Semorinemab (Genentech)",
    target: "Tau protein",
    result: "No effect on cognitive decline",
    felineExplanation:
      "Tau has an iron-binding motif and mediates iron efflux. Tangles are a protective iron-buffering response. Targeting tau removes a defense mechanism while leaving iron accumulation unaddressed.",
  },
  {
    trial: "GV-971 (Green Valley)",
    target: "Gut-brain axis / neuroinflammation",
    result: "Conditional approval in China; no Western replication",
    felineExplanation:
      "Anti-inflammatory approaches address one contributor but miss the structural defense failures: neurovascular breach and iron export dysfunction are not inflammatory processes.",
  },
  {
    trial: "Deferiprone (various)",
    target: "Iron chelation",
    result: "Worsened Parkinson's motor symptoms",
    felineExplanation:
      "Iron is maldistributed, not simply elevated. Systemic chelation depletes iron from cells that need it (oligodendrocytes) while failing to restore the insulation and export layers.",
  },
];

export const trialsWarning = {
  title: "Why chelation backfired",
  content:
    "Deferiprone worsened Parkinson's symptoms because the problem isn't too much iron. It's iron in the wrong places. Oligodendrocytes are iron-starved while astrocytes are iron-overloaded. Systemic chelation made the starvation worse.",
};
