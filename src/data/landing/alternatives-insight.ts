export const insightLines = [
  "Five are natural proteins the body already produces.",
  "Total investment in them for neurodegeneration: one underpowered pilot.",
  "ATH434 mimics what they do and is in active Phase 2 trials, starting with MSA because it progresses faster than Alzheimer\u2019s.",
  "Phase 3 success would open repurposing across neurodegenerative diseases.",
];

export interface FloatingProtein {
  src: string;
  name: string;
  sizeVw: number;
  /**
   * Arc path: [startX%, startY_vh, midX%, midY_vh, endX%, endY_vh]
   * Start positions align with the 3x2 grid layout within the sticky viewport.
   * Mid/end positions arc outward to frame the insight text.
   * X is percentage from left, Y is vh from top of the sticky viewport.
   */
  arc: [number, number, number, number, number, number];
}

/**
 * Same 6 proteins from the alternatives grid. Start positions approximate
 * the grid card locations in the sticky viewport, so images appear behind
 * the grid text initially and then arc outward as the text fades.
 */
export const floatingProteins: FloatingProtein[] = [
  // Lactoferrin (grid col 0, row 0): arcs down-left
  { src: "/images/proteins/1LFG-lactoferrin.png", name: "Lactoferrin", sizeVw: 18,
    arc: [20, 25, 8, 48, -2, 75] },
  // Ceruloplasmin (grid col 1, row 0): arcs down-left to center-left
  { src: "/images/proteins/2J5W-ceruloplasmin.png", name: "Ceruloplasmin", sizeVw: 22,
    arc: [42, 25, 20, 42, 5, 55] },
  // Transferrin (grid col 2, row 0): arcs far right then down
  { src: "/images/proteins/3QYT-transferrin.png", name: "Transferrin", sizeVw: 16,
    arc: [62, 25, 80, 38, 85, 65] },
  // Ferritin (grid col 0, row 1): arcs down-left to far bottom-left
  { src: "/images/proteins/2FHA-ferritin.png", name: "Ferritin", sizeVw: 20,
    arc: [20, 54, 0, 65, -5, 85] },
  // Hepcidin (grid col 1, row 1): arcs down-left
  { src: "/images/proteins/2KEF-hepicidin.png", name: "Hepcidin", sizeVw: 14,
    arc: [42, 54, 25, 65, 10, 80] },
  // ATH434 (grid col 2, row 1): arcs down-right
  { src: "/images/structures/46236251-ath434.png", name: "ATH434", sizeVw: 16,
    arc: [62, 54, 75, 65, 82, 80] },
];

export interface MabCritique {
  stat: string;
  statLabel: string;
  points: string[];
}

export const mabCritique: MabCritique = {
  stat: "0.45",
  statLabel: "CDR-SB point benefit (lecanemab, 18 months)",
  points: [
    "Below the 1-point minimal clinically important difference threshold.",
    "ARIA in 22\u201344% of treated patients likely unblinded trials.",
    "Anti-amyloid antibodies accelerate brain volume loss (r\u2009=\u20090.86 correlation with ARIA).",
  ],
};
