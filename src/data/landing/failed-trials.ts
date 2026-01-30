import type { FailedTrial } from "./types";

export const failedTrials: FailedTrial[] = [
  {
    trial: "Solanezumab (Eli Lilly)",
    target: "Amyloid-beta clearance",
    result: "No cognitive benefit in 3 Phase III trials",
    pligExplanation:
      "Amyloid is downstream of iron-mediated damage. Clearing it doesn't address the upstream pericyte loss or iron maldistribution driving the disease.",
  },
  {
    trial: "Verubecestat (Merck)",
    target: "BACE1 inhibitor",
    result: "Cognitive worsening; trial halted early",
    pligExplanation:
      "BACE1 has neuroprotective roles beyond amyloid processing. Inhibiting it removed a compensatory mechanism while leaving the iron cascade intact.",
  },
  {
    trial: "Aducanumab (Biogen)",
    target: "Amyloid plaque removal",
    result: "Plaques cleared; no consistent clinical benefit",
    pligExplanation:
      "Demonstrated that amyloid removal is achievable but insufficient. The PLIG framework predicts this: plaques are a marker, not the mechanism.",
  },
  {
    trial: "Semorinemab (Genentech)",
    target: "Tau protein",
    result: "No effect on cognitive decline",
    pligExplanation:
      "Tau tangles, like amyloid, are downstream consequences. The framework predicts that targeting any single downstream marker will fail.",
  },
  {
    trial: "GV-971 (Green Valley)",
    target: "Gut-brain axis / neuroinflammation",
    result: "Conditional approval in China; no Western replication",
    pligExplanation:
      "Anti-inflammatory approaches address one branch of the cascade but miss the structural damage: pericyte loss and iron redistribution are not inflammatory processes.",
  },
  {
    trial: "Deferiprone (various)",
    target: "Iron chelation",
    result: "Worsened Parkinson's motor symptoms",
    pligExplanation:
      "Iron is maldistributed, not simply elevated. Systemic chelation removes iron from cells that need it (oligodendrocytes) while failing to address the redistribution problem.",
  },
];

export const trialsWarning = {
  title: "Why chelation backfired",
  content:
    "Deferiprone worsened Parkinson's symptoms because the problem isn't too much iron. It's iron in the wrong places. Oligodendrocytes are iron-starved while astrocytes are iron-overloaded. Systemic chelation made the starvation worse.",
};
