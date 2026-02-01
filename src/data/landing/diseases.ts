import type { DiseaseCard } from "./types";

export const diseases: DiseaseCard[] = [
  {
    name: "Alzheimer's Disease",
    stat: "99%",
    statLabel: "drug failure rate",
    explanation:
      "Neurovascular damage (pericyte loss) and export failure cause iron accumulation. Amyloid plaques and tau tangles are protective iron-buffering responses, not the disease itself. Dense-core plaques are granulomas that sequester toxic iron. Removing them releases that iron back into tissue.",
  },
  {
    name: "Parkinson's Disease",
    stat: "10-30%",
    statLabel: "GBA1 penetrance",
    explanation:
      "Substantia nigra has the highest brain iron concentration. GBA1 compromises the insulation layer (lysosomal iron containment), but disease requires concurrent failure of lysosomal defenses or neurovascular integrity.",
  },
  {
    name: "Long COVID",
    stat: "400M+",
    statLabel: "estimated cases globally",
    explanation:
      "SARS-CoV-2 directly infects pericytes via CD147, breaching the neurovascular barrier. Viral persistence degrades lysosomal integrity and export pathways. This isn't chronic infection. It's lysosomal and export failure producing neurodegenerative biomarkers within months.",
  },
  {
    name: "ALS",
    stat: "90%",
    statLabel: "sporadic (no genetic cause)",
    explanation:
      "Motor cortex iron accumulation reflects defense layer failure. Lysosomal defenses (GPX4) and insulation (ferritin) are overwhelmed before export pathways can compensate.",
  },
  {
    name: "Multiple Sclerosis",
    stat: "2.8M",
    statLabel: "people affected worldwide",
    explanation:
      "EBV persistence is a lysosome and export problem, not active viral reactivation. Iron rim lesions mark zones where insulation and export have both collapsed, driving oligodendrocyte ferroptosis in genetically susceptible individuals.",
  },
  {
    name: "Prion Disease",
    stat: "100%",
    statLabel: "fatal",
    explanation:
      "PrP misfolding collapses the insulation layer. Lysosomal integrity fails, iron floods the cytosol, and export cannot compensate. The fastest cascade across all five defense layers.",
  },
];

export const evidenceInsight = {
  title: "\"Viral reactivation\" is lysosome and export failure",
  content:
    "Researchers spent decades hunting for active virus in diseased brains and found almost nothing. FELINE explains why: the virus doesn't need to wake up. Latent viral proteins sabotage iron-buffering (tau, alpha-synuclein), while lysosomal disruption releases stored iron. No reactivation required.",
};
