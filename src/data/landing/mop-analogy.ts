/**
 * Data for Slide 3: "The mop, not the weapon"
 *
 * Combines the mop analogy, dual-domain Aβ, trial reinterpretation,
 * and antibody selectivity into a 5-step narrative.
 */

// ---------------------------------------------------------------------------
// Step 0: Hook
// ---------------------------------------------------------------------------

export const hookContent = {
  headline: "We spent 30 years removing the brain\u2019s own defense system.",
  subhead: "Then wondered why patients got worse.",
  stat: {
    value: "0.4%",
    label: "clinical trial success rate for Alzheimer\u2019s",
    source: "Cummings JL, Morstorf T, Zhong K. Alzheimers Res Ther. 2014;6(4):37.",
    sourceId: "cummings-2014-alzrt",
  },
  trialCount: "244 compounds tested. One conditional approval.",
};

// ---------------------------------------------------------------------------
// Step 1: The mop analogy
// ---------------------------------------------------------------------------

export const mopContent = {
  kicker: "The framing error",
  analogy: [
    "The field observed someone mopping up biohazardous waste.",
    "They noticed the mop was covered in hazardous material and that people near dirty mops were sick.",
    "They concluded: mops make people sick.",
  ],
  reframe:
    "Amyloid-beta is not the disease. It is the cleanup crew. Removing it leaves the waste unmanaged.",
};

// ---------------------------------------------------------------------------
// Step 2: Dual-domain Aβ
// ---------------------------------------------------------------------------

export interface DomainCard {
  domain: string;
  residues: string;
  label: string;
  function: string;
  character: string;
  details: string[];
}

export const dualDomainContent = {
  kicker: "One peptide, two jobs",
  headline: "The same molecule is both a weapon and a mop.",
  insight:
    "When A\u03B2 inserts into a bacterial membrane via Domain B, the metal-binding Domain A faces AWAY from the target. Iron at plaques is not a weapon. It is cleanup.",
  domains: [
    {
      domain: "B",
      residues: "res 17\u201342",
      label: "The weapon",
      function: "Antimicrobial killing",
      character: "Hydrophobic",
      details: [
        "Inserts into bacterial membranes",
        "Requires no metals",
        "Shared with LL-37 antimicrobial peptide",
      ],
    },
    {
      domain: "A",
      residues: "res 1\u201316",
      label: "The mop",
      function: "Iron cleanup",
      character: "Hydrophilic",
      details: [
        "Faces outward in membrane-bound form",
        "Contains His6/His13/His14 metal-binding residues",
        "Chelates Fe\u00B2\u207A, Cu\u00B2\u207A, Zn\u00B2\u207A",
      ],
    },
  ] as DomainCard[],
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
