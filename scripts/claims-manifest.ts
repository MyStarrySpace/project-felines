/**
 * Claims Manifest — data-file claims paired with bibliography sources.
 *
 * The verify-claims script scans .tsx files for <Cite> tags, but many factual
 * claims live in data files (src/data/landing/*.ts) with no <Cite> tags.
 * This manifest ensures those claims are also verified against source quotes.
 *
 * Each entry pairs a claim string (from a data file) with a bibliography
 * source ID. The script looks up the source's quotes and sends both to
 * Haiku for verification.
 */

export interface ManifestClaim {
  /** Source file containing the claim (for reporting) */
  file: string;
  /** The factual claim text to verify */
  claim: string;
  /** Bibliography source ID to verify against */
  sourceId: string;
  /** Specific citation IDs (optional; falls back to first citation) */
  citationIds?: string[];
}

export const manifestClaims: ManifestClaim[] = [
  // ─── cell-vulnerability.ts ────────────────────────────────────────
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "Oligodendrocytes: 3.05 mM iron concentration (5.4× neurons). The most iron-rich cell in the brain.",
    sourceId: "reinert-2019",
    citationIds: ["reinert-2019-c1", "reinert-2019-c2"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "Oligodendrocytes have low glutathione and high iron, making them susceptible to oxidative stress.",
    sourceId: "thorburne-juurlink-1996",
    citationIds: ["thorburne-juurlink-1996-c1"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "Oligodendrocytes provide antioxidant defense function for neurons by secreting ferritin heavy chain.",
    sourceId: "mukherjee-2020",
    citationIds: ["mukherjee-2020-c1"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "Ferroptosis mediates cuprizone-induced loss of oligodendrocytes and demyelination.",
    sourceId: "jhelum-2020-jneurosci",
    citationIds: ["jhelum-2020-jneurosci-c1"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "Astrocytes: 1.29 mM iron concentration.",
    sourceId: "reinert-2019",
    citationIds: ["reinert-2019-c1"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "One astrocyte contains 10^6-10^8 iron atoms in ferritin nanocages.",
    sourceId: "ward-2014-lancetneurol",
    citationIds: ["ward-2014-lancetneurol-c1"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "Activated microglia induce neurotoxic A1 reactive astrocytes.",
    sourceId: "liddelow-2017-nature",
    citationIds: ["liddelow-2017-nature-c1"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "Microglia: 1.76 mM iron concentration.",
    sourceId: "reinert-2019",
    citationIds: ["reinert-2019-c1"],
  },
  {
    file: "src/data/landing/cell-vulnerability.ts",
    claim: "In MS, iron rim lesions show slow expansion driven by iron-laden microglia.",
    sourceId: "dal-bianco-2017",
    citationIds: ["dal-bianco-2017-c1"],
  },

  // ─── failed-trials.ts ────────────────────────────────────────────
  {
    file: "src/data/landing/failed-trials.ts",
    claim: "Solanezumab did not significantly affect cognitive decline in patients with mild Alzheimer's disease.",
    sourceId: "honig-2018-solanezumab",
    citationIds: ["honig-2018-solanezumab-c1"],
  },
  {
    file: "src/data/landing/failed-trials.ts",
    claim: "Verubecestat (BACE1 inhibitor): Cognitive worsening; trial halted early for futility.",
    sourceId: "egan-2019-verubecestat",
    citationIds: ["egan-2019-verubecestat-c1", "egan-2019-verubecestat-c2"],
  },
  {
    file: "src/data/landing/failed-trials.ts",
    claim: "Aducanumab: Biogen reprioritized resources away from aducanumab to build a broader Alzheimer's franchise.",
    sourceId: "biogen-2024-aduhelm-withdrawal",
    citationIds: ["biogen-2024-aduhelm-withdrawal-c1"],
  },
  {
    file: "src/data/landing/failed-trials.ts",
    claim: "Deferiprone worsened Parkinson's motor symptoms despite reducing substantia nigra iron.",
    sourceId: "devos-2022-nejm",
    citationIds: ["devos-2022-nejm-c1"],
  },

  // ─── findings.ts (deferiprone) ────────────────────────────────────
  {
    file: "src/data/landing/findings.ts",
    claim: "Deferiprone treatment accelerated cognitive decline despite reducing hippocampal iron. NTB z-score = -0.80 (deferiprone) vs. -0.30 (placebo).",
    sourceId: "ayton-2025-jamaneurol",
    citationIds: ["ayton-2025-jamaneurol-c1", "ayton-2025-jamaneurol-c2"],
  },

  // ─── problem-stats.ts ────────────────────────────────────────────
  {
    file: "src/data/landing/problem-stats.ts",
    claim: "244 compounds were assessed in a decade of Alzheimer's trials with 99.6% attrition. One was approved for marketing.",
    sourceId: "cummings-2014-alzrt",
    citationIds: ["cummings-2014-alzrt-c1"],
  },

  // ─── pillars.ts ──────────────────────────────────────────────────
  {
    file: "src/data/landing/pillars.ts",
    claim: "GPX4 depletion is early and universal across SOD1, TDP-43, and C9orf72 ALS models. GPX4 overexpression delayed disease onset and prolonged lifespan.",
    sourceId: "wang-2022-celldeathdiff",
    citationIds: ["wang-2022-celldeathdiff-c1"],
  },
  {
    file: "src/data/landing/pillars.ts",
    claim: "Ferroptosis is an iron-dependent form of regulated cell death driven by lipid peroxidation.",
    sourceId: "stockwell-2022-cell",
    citationIds: ["stockwell-2022-cell-c1"],
  },
  {
    file: "src/data/landing/pillars.ts",
    claim: "Blood-brain barrier breakdown is an early biomarker of human cognitive dysfunction, with pericyte damage detectable via CSF sPDGFRβ.",
    sourceId: "nation-2019-natmed",
    citationIds: ["nation-2019-natmed-c1", "nation-2019-natmed-c2"],
  },

  // ─── predictions.ts ──────────────────────────────────────────────
  {
    file: "src/data/landing/predictions.ts",
    claim: "Iron chelation fails in PD. Deferiprone reduced substantia nigra iron but worsened motor symptoms.",
    sourceId: "devos-2022-nejm",
    citationIds: ["devos-2022-nejm-c1"],
  },
  {
    file: "src/data/landing/predictions.ts",
    claim: "Iron chelation fails in AD. Deferiprone decreased hippocampal iron but accelerated cognitive decline.",
    sourceId: "ayton-2025-jamaneurol",
    citationIds: ["ayton-2025-jamaneurol-c1"],
  },
  {
    file: "src/data/landing/predictions.ts",
    claim: "BACE inhibitors worsen outcomes. Verubecestat worsened cognitive outcomes in trials.",
    sourceId: "egan-2019-verubecestat",
    citationIds: ["egan-2019-verubecestat-c1"],
  },
];
