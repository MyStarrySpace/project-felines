/**
 * Data for Slide 4: "The wrong tool for the right problem"
 *
 * Combines deferiprone failure, size-dependent therapeutics,
 * and the antiviral paradox into a 4-step narrative.
 */

// Re-export types used by stat-with-source and other components
export interface StatSource {
  label: string;
  quote: string;
  url?: string;
  caveat?: string;
}

export interface KeyFinding {
  id: string;
  kicker: string;
  headline: string;
  body: string;
  stat?: { value: string; label: string; source?: StatSource };
  insight: string;
}

// ---------------------------------------------------------------------------
// Step 0: Deferiprone paradox
// ---------------------------------------------------------------------------

export const deferiproneContent = {
  kicker: "The chelation paradox",
  headline:
    "If iron drives neurodegeneration, why did removing iron make patients worse?",
  stat: {
    value: "-0.80",
    label: "NTB z-score (deferiprone) vs. -0.30 (placebo)",
    source: {
      label: "Ayton et al. 2025, JAMA Neurology",
      quote:
        "Deferiprone treatment was associated with worse cognitive outcomes despite reducing hippocampal iron.",
      url: "https://doi.org/10.1001/jamaneurol.2024.3733",
    } as StatSource,
  },
  cohenD: "Cohen\u2019s d = -0.704",
  body: "Deferiprone successfully reduced hippocampal iron on MRI. Cognitive decline accelerated. The drug did exactly what it was designed to do and made things worse.",
  source: "Ayton et al. 2025, JAMA Neurol. DOI: 10.1001/jamaneurol.2024.3733",
};

// ---------------------------------------------------------------------------
// Step 1: Iron mislocalization, not overload
// ---------------------------------------------------------------------------

export interface ComparisonColumn {
  label: string;
  view: string;
  points: string[];
}

export const mislocalizationContent = {
  kicker: "A different reading",
  headline: "What if it\u2019s not too much iron, but iron in the wrong places?",
  columns: [
    {
      label: "Conventional view",
      view: "Iron overload",
      points: [
        "Too much iron in the brain",
        "Remove iron with chelation",
        "Chelation should help",
      ],
    },
    {
      label: "FELINES view",
      view: "Iron maldistribution",
      points: [
        "Iron in wrong compartments",
        "Restore compartmentalization",
        "Chelation worsens maldistribution",
      ],
    },
  ] as ComparisonColumn[],
  functionalIron: [
    "Mitochondria (energy)",
    "Myelin machinery (insulation)",
    "GPX4 system (antioxidant defense)",
  ],
  trappedIron: [
    "Reactive microglia",
    "Endothelial cells",
    "Plaque cores",
    "Damaged lysosomes",
  ],
};

// ---------------------------------------------------------------------------
// Step 2: Size-dependent therapeutics
// ---------------------------------------------------------------------------

export interface TherapeuticMolecule {
  name: string;
  weight: string;
  metaphor: string;
  access: string;
  selectivity: string;
  outcome: string;
  outcomeType: "negative" | "modest" | "positive";
}

export const sizeTherapeuticsContent = {
  kicker: "Size determines fate",
  headline:
    "Larger molecules should outperform smaller ones. The opposite of standard drug design.",
  molecules: [
    {
      name: "Deferiprone",
      weight: "139 Da",
      metaphor: "Sledgehammer",
      access: "Crosses all compartments via passive diffusion",
      selectivity: "None \u2014 chelates all Fe",
      outcome: "WORSENED outcomes",
      outcomeType: "negative" as const,
    },
    {
      name: "Curcumin",
      weight: "368 Da",
      metaphor: "Multi-tool",
      access: "Lipophilic; partitions into membranes",
      selectivity: "Preferential Fe\u00B2\u207A/Cu\u00B2\u207A at membrane interface",
      outcome: "Modest benefit",
      outcomeType: "modest" as const,
    },
    {
      name: "Apo-lactoferrin",
      weight: "80,000 Da",
      metaphor: "Scalpel",
      access: "Cannot enter cells. Receptor-mediated BBB transport only.",
      selectivity: "300\u00D7 affinity vs. transferrin; retains binding at acidic pH",
      outcome: "Pilot positive",
      outcomeType: "positive" as const,
    },
  ] as TherapeuticMolecule[],
  source: "FELINES Appendix 6.5; Devos 2022 NEJM; Small 2018; Mohamed 2019",
};

// ---------------------------------------------------------------------------
// Step 3: Antiviral paradox
// ---------------------------------------------------------------------------

export const antiviralContent = {
  kicker: "The viral paradox",
  headline:
    "Vaccination prevents dementia. Treatment doesn\u2019t. Why?",
  prevention: [
    {
      label: "VZV vaccine",
      effect: "~20% dementia reduction over 7 years",
      source: "Eyting et al. 2025, Nature",
    },
    {
      label: "Taiwan early antivirals",
      effect: "~90% reduction in matched cohort",
      source: "Tzeng et al. 2018",
    },
  ],
  treatment: [
    {
      label: "VALAD trial (valacyclovir)",
      effect: "WORSENED cognition",
      detail: "Valacyclovir group showed worse cognitive decline than placebo",
      source: "Devanand et al. 2026, JAMA",
    },
  ],
  resolution:
    "What if viral reactivation isn\u2019t really reactivation, but failed clearance of old damage?",
  fragmentModel: [
    "Initial infection deposits viral DNA, proteins, and modified host proteins",
    "Autophagy normally clears these fragments",
    "As autophagy declines with age, fragments accumulate",
    "Accumulated fragments trigger inflammation, iron release, ferroptosis",
    "No viral replication needed \u2014 just failed clearance",
  ],
  insight:
    "If this model is right, prevention works because it prevents fragment deposition. Treatment fails because antivirals can\u2019t clear fragments that aren\u2019t replicating.",
  metaAnalysis: {
    hr: "0.88",
    label: "pooled HR for antiviral prevention of dementia",
    source: {
      label: "Drinkall et al. 2025, Alzheimer\u2019s Res Ther",
      quote:
        "Antiviral medications or vaccinations were associated with a significantly reduced risk of dementia.",
      url: "https://doi.org/10.1186/s13195-025-01838-z",
    } as StatSource,
  },
};

// ---------------------------------------------------------------------------
// Legacy export for backward compatibility (stat-with-source imports this)
// ---------------------------------------------------------------------------
export const findings: KeyFinding[] = [];
