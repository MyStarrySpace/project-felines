/**
 * Data for the Reframe section: pan-proteinopathy narrative
 *
 * Combines the mop analogy, cross-proteinopathy convergence, trial
 * reinterpretation, and antibody selectivity into a multi-step narrative.
 */

// ---------------------------------------------------------------------------
// Step 0: Hook
// ---------------------------------------------------------------------------

export const hookContent = {
  headline: "Six proteins. Six diseases. One exposed secret.",
  subhead: "Every protein the field has targeted binds iron.",
  stat: {
    value: "0",
    label: "trials that addressed the iron those proteins manage",
  },
};

// ---------------------------------------------------------------------------
// Step 1: The mop analogy
// ---------------------------------------------------------------------------

export const mopContent = {
  kicker: "The framing error",
  analogy: [
    "Six different diseases. Six different proteins found at the scene.",
    "In Alzheimer\u2019s it was amyloid-beta. In Parkinson\u2019s, alpha-synuclein. In prion disease, PrP. In ALS, TDP-43.",
    "The field concluded: the proteins are the disease. Remove them, cure the patient.",
  ],
  reframe:
    "All six proteins bind iron. All six aggregate around iron. In every case, removing the protein left the iron unmanaged\u2009\u2014\u2009and patients got worse.",
};

// ---------------------------------------------------------------------------
// Step 2: Cross-proteinopathy convergence
// ---------------------------------------------------------------------------

export interface ProteinRow {
  name: string;
  disease: string;
  ironRole: string;
  withoutIron: string;
  contrastLabel?: string;
}

export const convergenceContent = {
  headline: "Different protein, same iron story.",
  proteins: [
    {
      name: "Amyloid-\u03B2",
      disease: "Alzheimer\u2019s",
      ironRole: "Accumulates iron within aggregates, concentrating it locally",
      withoutIron: "Aggregates formed without iron are non-toxic",
    },
    {
      name: "Alpha-synuclein",
      disease: "Parkinson\u2019s",
      ironRole: "Binds ferric iron with 10\u00B9\u00B3 M\u207B\u00B9 affinity",
      withoutIron: "No cellular aggregates form without iron",
    },
    {
      name: "Tau",
      disease: "Tauopathies / AD",
      ironRole: "Buffers iron, facilitates ferroportin export",
      withoutIron: "Hyperphosphorylation requires iron-activated kinases",
    },
    {
      name: "PrP",
      disease: "Prion disease",
      ironRole: "Descended from ZIP metal transporter family",
      withoutIron: "PrP-null mice show altered brain iron homeostasis",
    },
    {
      name: "CPEB3",
      disease: "Memory (functional amyloid)",
      ironRole: "Same A11 oligomer fold and cross-\u03B2 structure as pathological amyloids",
      withoutIron: "Hydrophilic core makes aggregates reversible and labile, unlike pathological amyloids",
      contrastLabel: "Key difference:",
    },
  ] as ProteinRow[],
  insight:
    "Five proteins. Four cause disease. One stores memories. All share the same A11-reactive oligomeric fold. The difference is regulation, not structure. The protein is the mop. Iron is the waste.",
};

// ---------------------------------------------------------------------------
// Step 3: Trial results reinterpreted
// ---------------------------------------------------------------------------

export interface TrialRow {
  drug: string;
  mechanism: string;
  result: string;
  resultType: "positive" | "neutral" | "negative";
  mopInterpretation: string;
}

export const trialContent = {
  kicker: "What the trials actually show",
  headline: "Therapies that handle the waste outperform those that merely remove the mop.",
  rows: [
    {
      drug: "Donanemab",
      mechanism: "Targets dirtiest plaques (N3pG-A\u03B2)",
      result: "35% slowing",
      resultType: "positive" as const,
      mopInterpretation: "Removes metal-laden deposits with highest iron content",
    },
    {
      drug: "Lecanemab",
      mechanism: "Targets protofibrils (mixed)",
      result: "27% slowing",
      resultType: "positive" as const,
      mopInterpretation: "Partially clears metal-enriched aggregates",
    },
    {
      drug: "Gantenerumab",
      mechanism: "Clears plaques, dumps waste",
      result: "No benefit",
      resultType: "neutral" as const,
      mopInterpretation: "Removed mops but released iron locally",
    },
    {
      drug: "Deferiprone",
      mechanism: "Removes iron indiscriminately",
      result: "Worsened decline",
      resultType: "negative" as const,
      mopInterpretation: "Stripped iron from cells that need it",
    },
  ] as TrialRow[],
  sources: [
    "Kim et al. 2025, Transl Neurodegen. DOI: 10.1186/s40035-025-00465-w",
    "Ayton et al. 2025, JAMA Neurol. DOI: 10.1001/jamaneurol.2024.3733",
  ],
};

// ---------------------------------------------------------------------------
// Step 4: Antibody selectivity pattern
// ---------------------------------------------------------------------------

export const selectivityContent = {
  kicker: "The selectivity pattern",
  headline:
    "Why do aggregate-targeting antibodies work but monomer-targeting ones don\u2019t?",
  generations: [
    {
      gen: "First-gen",
      target: "Monomer-targeting",
      examples: "Solanezumab, Bapineuzumab, Crenezumab",
      outcome: "ALL failed",
      outcomeType: "negative" as const,
      explanation: "Removed raw iron-chelation capacity (the free mops)",
    },
    {
      gen: "Second-gen",
      target: "Aggregate-targeting",
      examples: "Lecanemab, Donanemab, Aducanumab",
      outcome: "Modest benefit",
      outcomeType: "positive" as const,
      explanation: "Remove metal-laden deposits (the dirty mops full of waste)",
    },
  ],
  ironRole:
    "Iron determines conformation. Fe keeps A\u03B2 in toxic oligomer intermediates. Dense-core compacted plaques lock iron in redox-inert form.",
  sources: [
    "Kaplan et al. 2025, Alz Dement TRC. DOI: 10.1002/trc2.70184",
    "Kim et al. 2025, Transl Neurodegen. DOI: 10.1186/s40035-025-00465-w",
    "Liu et al. 2011, J Biol Chem. DOI: 10.1074/jbc.M110.158980",
  ],
};
