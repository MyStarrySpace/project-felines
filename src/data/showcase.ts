export const showcasePathwaySteps = [
  {
    step: 1,
    title: "Pericyte Dysfunction",
    description:
      "Viral infection triggers pericyte and lysosomal dysfunction, disrupting blood-brain barrier integrity and astrocyte signaling.",
    tags: ["Pericytes", "Lysosomes", "BBB"],
  },
  {
    step: 2,
    title: "Astrocyte Depolarization",
    description:
      "Astrocyte endfoot depolarization follows pericyte damage, impairing neurovascular coupling and metabolic support.",
    tags: ["Astrocytes", "Neurovascular", "Endfeet"],
  },
  {
    step: 3,
    title: "Iron Dysregulation",
    description:
      "Disrupted vascular function leads to iron accumulation in vulnerable brain regions, exceeding cellular buffering capacity.",
    tags: ["Iron", "Ferritin", "Transferrin"],
  },
  {
    step: 4,
    title: "Lipid Peroxidation",
    description:
      "Excess labile iron catalyzes Fenton chemistry, generating hydroxyl radicals that attack PUFA-phospholipids in myelin.",
    tags: ["Fenton", "PUFA-PLs", "ROS"],
  },
];

export const showcaseTableData = [
  {
    marker: "Ferritin",
    region: "Substantia nigra",
    change: "Elevated",
    condition: "Parkinson's",
  },
  {
    marker: "PUFA-PLs",
    region: "White matter",
    change: "Depleted",
    condition: "MS",
  },
  {
    marker: "Pericyte PDGFRb",
    region: "Hippocampus",
    change: "Reduced",
    condition: "Alzheimer's",
  },
  {
    marker: "MDA",
    region: "Cortex",
    change: "Elevated",
    condition: "Long COVID",
  },
];

export const showcaseStats = [
  {
    value: "99",
    unit: "%",
    label: "Alzheimer's drug failure rate",
    description: "Over 400 drugs failed in clinical trials since 2003",
  },
  {
    value: "7",
    label: "Pathway nodes",
    description: "Mechanistic steps from pericyte dysfunction to neurodegeneration",
  },
  {
    value: "4",
    label: "Disease connections",
    description: "Long COVID, MS, Parkinson's, Alzheimer's",
  },
];
