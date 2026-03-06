import type { DiseaseCard } from "./types";

export const diseases: DiseaseCard[] = [
  {
    name: "Alzheimer\u2019s Disease",
    stat: "99%",
    statLabel: "drug failure rate",
    explanation:
      "Pericyte loss breaches the blood-brain barrier. Iron accumulates. Plaques and tangles may form to buffer that iron. If so, removing them with drugs leaves the iron unmanaged.",
  },
  {
    name: "Parkinson\u2019s Disease",
    stat: "10-30%",
    statLabel: "GBA1 penetrance",
    explanation:
      "The substantia nigra has the highest iron concentration in the brain. GBA1 mutations compromise iron containment, but disease only develops when antioxidant defenses or the blood-brain barrier also fail. Why the multi-hit requirement?",
  },
  {
    name: "Long COVID",
    stat: "400M+",
    statLabel: "estimated cases globally",
    explanation:
      "SARS-CoV-2 infects pericytes via CD147, breaching the blood-brain barrier. Viral persistence may degrade antioxidant and iron export pathways. Some patients develop neurodegenerative biomarkers within months.",
  },
  {
    name: "ALS",
    stat: "90%",
    statLabel: "sporadic (no genetic cause)",
    explanation:
      "Motor cortex iron accumulates as antioxidant defenses (GPX4) and iron-buffering proteins (ferritin) are overwhelmed. 90% of cases have no genetic explanation.",
  },
  {
    name: "Multiple Sclerosis",
    stat: "2.8M",
    statLabel: "people affected worldwide",
    explanation:
      "EBV may not need to reactivate. Latent viral proteins can disrupt iron buffering and export. Iron rim lesions mark where these systems appear to have collapsed, driving oligodendrocyte death.",
  },
  {
    name: "Prion Disease",
    stat: "100%",
    statLabel: "fatal",
    explanation:
      "PrP misfolding may destroy iron-buffering capacity. If antioxidant defenses fail and iron floods cells, export can\u2019t compensate. The fastest progression of any neurodegenerative disease.",
  },
];

export const evidenceInsight = {
  title: "Do viruses need to wake up?",
  content:
    "Researchers spent decades hunting for active virus in diseased brains and found almost nothing. One possibility: latent viral proteins disrupt iron-buffering systems (tau, alpha-synuclein) and the antioxidant defenses that contain stored iron. If so, no reactivation would be required.",
};
