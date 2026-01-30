import type { DiseaseCard } from "./types";

export const diseases: DiseaseCard[] = [
  {
    name: "Alzheimer's Disease",
    stat: "99%",
    statLabel: "drug failure rate",
    explanation:
      "Hippocampal pericyte loss precedes amyloid plaques. The PLIG framework positions amyloid as a downstream response to iron-mediated damage, not the root cause.",
  },
  {
    name: "Parkinson's Disease",
    stat: "10-30%",
    statLabel: "GBA1 penetrance",
    explanation:
      "Substantia nigra has the highest brain iron concentration. GBA1 lysosomal dysfunction plus iron maldistribution explains why most carriers never develop PD.",
  },
  {
    name: "Long COVID",
    stat: "400M+",
    statLabel: "estimated cases globally",
    explanation:
      "SARS-CoV-2 directly infects pericytes via CD147. Persistent neuroinflammation and pericyte loss trigger the same cascade, with neurodegenerative biomarkers appearing within months.",
  },
  {
    name: "ALS",
    stat: "90%",
    statLabel: "sporadic (no genetic cause)",
    explanation:
      "Motor cortex and spinal cord oligodendrocytes show early degeneration. Iron accumulation in motor regions follows the PLIG pathway, explaining sporadic onset patterns.",
  },
  {
    name: "Multiple Sclerosis",
    stat: "2.8M",
    statLabel: "people affected worldwide",
    explanation:
      "EBV infection triggers pericyte damage in genetically susceptible individuals. Iron rim lesions and oligodendrocyte loss are hallmarks, fitting the PLIG causal chain precisely.",
  },
  {
    name: "Prion Disease",
    stat: "100%",
    statLabel: "fatal",
    explanation:
      "PrP misfolding disrupts lysosomal degradation pathways. Iron dysregulation and rapid oligodendrocyte loss follow, producing the fastest progression along the PLIG cascade.",
  },
];

export const evidenceInsight = {
  title: "The recovery illusion",
  content:
    "After viral infection, serum inflammatory markers normalize within weeks. Patients feel better. But brain iron redistribution persists. MRI studies show elevated iron years after infection resolves. The serum says recovery. The brain says otherwise.",
};
