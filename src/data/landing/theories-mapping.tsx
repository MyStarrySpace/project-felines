/**
 * Data for Theories Mapping section.
 *
 * Shows how current leading theories (neuroinflammation, NAD+, BBB breakdown, etc.)
 * each describe a single FELINE layer, not a competing hypothesis.
 */

export interface TheoryMapping {
  theory: string;
  layers: string[];
  treatments: string;
  explanation: string;
}

export const theoriesMappingHeadline = "The theories that survive target the layers.";
export const theoriesMappingSubhead = "None describes the system.";

export const theoryMappings: TheoryMapping[] = [
  {
    theory: "Iron dysregulation / ferroptosis",
    layers: ["Fe"],
    treatments: "Deferiprone, deferoxamine",
    explanation:
      "The substrate. Iron makes every other failure lethal.",
  },
  {
    theory: "Oxidative stress / lipid peroxidation",
    layers: ["Fe", "L"],
    treatments: "CoQ10, edaravone, inosine",
    explanation:
      "Iron-generated radicals overwhelm antioxidant defenses.",
  },
  {
    theory: "NAD+ decline / mitochondrial dysfunction",
    layers: ["L"],
    treatments: "NR, NMN (no Phase 3)",
    explanation:
      "NAD+/SIRT3 maintain the antioxidant machinery. Their decline disables it.",
  },
  {
    theory: "Chronic neuroinflammation",
    layers: ["L", "N"],
    treatments: "NSAIDs, pioglitazone, AL002, minocycline",
    explanation:
      "Microglia sequester iron, suppress repair, and breach barriers.",
  },
  {
    theory: "Myelin / oligodendrocyte failure",
    layers: ["I"],
    treatments: "Clemastine (remyelination, Phase 2 MS)",
    explanation:
      "Oligodendrocytes are the most iron-rich cells. Their death releases iron and removes insulation.",
  },
  {
    theory: "BBB breakdown / pericyte loss",
    layers: ["N"],
    treatments: "No clinical candidates",
    explanation:
      "Without the gate, circulating iron enters uncontrolled.",
  },
  {
    theory: "Impaired glymphatic / waste clearance",
    layers: ["E"],
    treatments: "No clinical candidates",
    explanation:
      "Export failure means accumulation at normal intake.",
  },
  {
    theory: "Protein aggregation (A\u03B2, tau, \u03B1-syn)",
    layers: ["I"],
    treatments: "Lecanemab, donanemab, prasinezumab",
    explanation:
      "These proteins bind iron. Aggregation is downstream of iron overload, not upstream.",
  },
];

export interface FailedTheory {
  theory: string;
  treatment: string;
  outcome: string;
}

export const failedTheories: FailedTheory[] = [
  {
    theory: "Amyloid production",
    treatment: "BACE inhibitors",
    outcome: "5 trials: cognitive worsening in every one. Removing A\u03B2 production removed a defense protein.",
  },
  {
    theory: "Gamma secretase",
    treatment: "Semagacestat, avagacestat",
    outcome: "Blocked APP processing. Semagacestat worsened cognition and increased skin cancer.",
  },
  {
    theory: "Cholinergic deficit",
    treatment: "Donepezil, rivastigmine",
    outcome: "Symptomatic relief only. No disease modification after 30 years of use.",
  },
  {
    theory: "Glutamate excitotoxicity",
    treatment: "Memantine",
    outcome: "Modest symptomatic benefit. Does not slow progression.",
  },
  {
    theory: "Prion-like spreading",
    treatment: "Anti-tau antibodies",
    outcome: "Gosuranemab cut CSF tau 98%. Zero cognitive benefit. Spreading is not the cause.",
  },
];

export const failedTheoriesHeadline = "The theories that didn\u2019t.";

export const theoriesMappingClosing =
  "FELINE doesn\u2019t replace these theories. It explains why they all coexist.";
