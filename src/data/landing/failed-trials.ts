import type { FailedTrial } from "./types";

export const failedTrials: FailedTrial[] = [
  {
    trial: "Solanezumab (Eli Lilly)",
    target: "Amyloid-beta clearance",
    result: "No cognitive benefit in 3 Phase III trials",
    ironAnalysis:
      "Amyloid is downstream of iron-mediated damage. Clearing it doesn\u2019t address the upstream causes: neurovascular breach and iron export dysfunction.",
  },
  {
    trial: "Verubecestat (Merck)",
    target: "BACE1 inhibitor",
    result: "Cognitive worsening; trial halted early",
    ironAnalysis:
      "BACE1 has neuroprotective roles beyond amyloid processing. Inhibiting it removed a compensatory mechanism while leaving iron accumulation unaddressed.",
  },
  {
    trial: "Aducanumab (Biogen)",
    target: "Amyloid plaque removal",
    result: "Plaques cleared; no consistent clinical benefit",
    ironAnalysis:
      "A\u03B2 concentrates and reduces iron within plaques. Plaque removal may redistribute this iron. Amyloid removal is achievable but addressing a downstream process.",
  },
  {
    trial: "Semorinemab (Genentech)",
    target: "Tau protein",
    result: "No effect on cognitive decline",
    ironAnalysis:
      "Tau has an iron-binding motif and mediates iron efflux. Tangles are a protective iron-buffering response. Targeting tau removes a defense mechanism while leaving iron accumulation unaddressed.",
  },
  {
    trial: "GV-971 (Green Valley)",
    target: "Gut-brain axis / neuroinflammation",
    result: "Conditional approval in China; no Western replication",
    ironAnalysis:
      "Anti-inflammatory approaches address one contributor but miss the structural failures. Neurovascular breach and iron export dysfunction are not inflammatory processes.",
  },
  {
    trial: "Deferiprone (various)",
    target: "Iron chelation",
    result: "Worsened Parkinson\u2019s motor symptoms",
    ironAnalysis:
      "Iron is maldistributed, not simply elevated. Systemic chelation depletes iron from cells that need it (oligodendrocytes) while failing to restore iron distribution and export.",
  },
];

export const trialsWarning = {
  title: "Why chelation backfired",
  content:
    "Deferiprone worsened Parkinson's symptoms because the problem isn't too much iron. It's iron in the wrong places. Oligodendrocytes are iron-starved while astrocytes are iron-overloaded. Systemic chelation made the starvation worse.",
};
