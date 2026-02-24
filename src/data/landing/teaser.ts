/**
 * Data for Slide 0: Teaser hook
 *
 * Provocative paradigm-shift framing that builds intrigue
 * for the reframings to come.
 */

export interface TrialBarSource {
  label: string;
  detail: string;
  url?: string;
}

export interface TrialBar {
  disease: string;
  shortName: string;
  /** Cumulative % of drugs surviving past each phase (out of 100 entering Phase 1) */
  pastPhase1: number;
  pastPhase2: number;
  approved: number;
  /** True for AD — gets gold accent on approved bar */
  highlight?: boolean;
  /** Source citation shown in hover tooltip */
  source: TrialBarSource;
}

export const trialBars: TrialBar[] = [
  {
    disease: "Alzheimer\u2019s",
    shortName: "AD",
    pastPhase1: 28,
    pastPhase2: 2,
    approved: 0.4,
    highlight: true,
    source: {
      label: "Cummings 2014",
      detail:
        "Phase 1\u21922: 28%, Phase 2\u21923: 8%, Phase 3\u2192approval: 1.8%. Overall: 0.4% (1 of 244 compounds, 2002\u20132012). PMID 25024750.",
      url: "https://pubmed.ncbi.nlm.nih.gov/25024750/",
    },
  },
  {
    disease: "Parkinson\u2019s",
    shortName: "PD",
    pastPhase1: 60,
    pastPhase2: 25,
    approved: 15,
    source: {
      label: "Boucherie 2021",
      detail:
        "14.9% FDA approval rate. Phase 2\u21923 success: 42.4%. Phase 1\u21922 not calculable (more compounds entered Phase 2 directly).",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8150606/",
    },
  },
  {
    disease: "ALS",
    shortName: "ALS",
    pastPhase1: 75,
    pastPhase2: 27,
    approved: 4,
    source: {
      label: "Miller 2019",
      detail:
        "Cumulative from Phase 1: 75% past Ph1, 27% past Ph2, 4% launched. 3 FDA-approved drugs (riluzole, edaravone, tofersen) out of 76+ tested.",
      url: "https://pubmed.ncbi.nlm.nih.gov/31477856/",
    },
  },
  {
    disease: "Huntington\u2019s",
    shortName: "HD",
    pastPhase1: 25,
    pastPhase2: 5,
    approved: 0.7,
    source: {
      label: "Travessa 2017",
      detail:
        "Phase 1\u21922: 25%, Phase 2\u21923: 19.4%, Phase 3\u2192approval: 14.3%. Overall 3.5% (includes drugs entering at Phase 2+). 99 trials, 41 compounds.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28671135/",
    },
  },
  {
    disease: "All diseases",
    shortName: "All",
    pastPhase1: 66,
    pastPhase2: 23,
    approved: 14,
    source: {
      label: "Wong 2019",
      detail:
        "13.8% likelihood of approval from Phase 1. Phase 1\u21922: 66.4%. N = 21,143 compounds, 2000\u20132015.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/",
    },
  },
];

export interface WhatIfLine {
  label: string;
  underlineFrom: "left" | "right";
}

export const whatIfLines: WhatIfLine[] = [
  { label: "\u2026an immune weapon that never switched off?", underlineFrom: "left" },
  { label: "\u2026not even unique to the brain?", underlineFrom: "right" },
  { label: "\u2026iron, in every brain they\u2019ve checked?", underlineFrom: "left" },
];

export interface ProteinTrialStat {
  disease: string;
  protein: string;
  tested: number;
  approved: number;
  approvedNote?: string;
  image?: string | string[];
}

export const proteinTrialStats: ProteinTrialStat[] = [
  {
    disease: "Alzheimer\u2019s",
    protein: "A\u03B2 / tau",
    tested: 28,
    approved: 2,
    approvedNote: "contested benefit",
    image: ["5OQV-ab.png", "5O3L-tau.png"],
  },
  {
    disease: "Parkinson\u2019s",
    protein: "\u03B1-synuclein",
    tested: 5,
    approved: 0,
    image: "6CU7-a-syn.png",
  },
  {
    disease: "ALS",
    protein: "SOD1 / TDP-43",
    tested: 5,
    approved: 1,
    approvedNote: "missed primary endpoint",
    image: "2C9V-sod1.png",
  },
  {
    disease: "Huntington\u2019s",
    protein: "huntingtin",
    tested: 6,
    approved: 0,
    image: "6X9O-huntingtin.png",
  },
  { disease: "Prion", protein: "PrP", tested: 5, approved: 0, image: "1I4M-prion.png" },
];

export const proteinTrialContent = {
  heading: "49 drugs targeted the protein.",
  subhead: "Across five neurodegenerative diseases.",
  punchline: "0 clear successes.",
};

export const teaserContent = {
  quote: {
    line1: "What makes our minds unique",
    line1Gold: "is built on iron.",
    line2: "What makes us lose our minds uniquely",
    line2Gold: "is driven by iron.",
  },
  headline: "What if the protein isn\u2019t the only problem?",
  subtextLeadIn: "What if it\u2019s\u2026",
  context:
    "Every major protein targeted by drug trials binds iron. None of the trials addressed iron.",
  scrollHintDesktop: "Click or scroll to explore",
  scrollHintMobile: "Tap or scroll to explore",
};
