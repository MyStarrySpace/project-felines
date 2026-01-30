import type { PathwayStep } from "./types";

export const pathwaySteps: PathwayStep[] = [
  {
    step: 1,
    title: "Pericyte death",
    description:
      "Viral infection, metabolic stress, or genetic vulnerability kills pericytes on brain capillaries. This is the initiating insult.",
    timing: "Days to weeks",
    tags: ["SARS-CoV-2", "Diabetes", "Aging"],
  },
  {
    step: 2,
    title: "Astrocyte endfoot depolarization",
    description:
      "Without pericyte signaling, astrocyte endfeet lose polarity. AQP4 water channels delocalize, disrupting the glymphatic clearance system.",
    timing: "Weeks to months",
    tags: ["AQP4", "Glymphatic"],
  },
  {
    step: 3,
    title: "Blood-brain barrier breakdown",
    description:
      "Depolarized astrocyte endfeet can no longer maintain tight junctions. The BBB becomes permeable to serum proteins and peripheral immune cells.",
    timing: "Months",
    tags: ["BBB", "Tight junctions"],
  },
  {
    step: 4,
    title: "Iron maldistribution",
    description:
      "Serum iron and ferritin flood the parenchyma. Iron redistributes from oligodendrocytes (which need it) to astrocytes (which sequester it). Oligodendrocytes become iron-starved.",
    timing: "Months to years",
    tags: ["Ferritin", "Transferrin"],
  },
  {
    step: 5,
    title: "Fenton chemistry",
    description:
      "Free iron catalyzes hydroxyl radical production via the Fenton reaction. These radicals attack polyunsaturated fatty acid phospholipids (PUFA-PLs) in cell membranes.",
    timing: "Ongoing",
    tags: ["ROS", "PUFA-PLs", "Lipid peroxidation"],
  },
  {
    step: 6,
    title: "Oligodendrocyte death",
    description:
      "Oligodendrocytes have the highest PUFA-PL content and lowest antioxidant capacity in the brain. They die first and fastest from peroxidative damage.",
    timing: "Years",
    tags: ["Myelin loss", "White matter"],
  },
  {
    step: 7,
    title: "Neurodegeneration",
    description:
      "Demyelinated axons become vulnerable to degeneration. Regional patterns of oligodendrocyte loss determine whether the clinical outcome is Alzheimer's, Parkinson's, MS, or ALS.",
    timing: "Years to decades",
    tags: ["Clinical onset", "Regional specificity"],
  },
];

export const pathwayKeyStat = {
  value: "10\u201335",
  unit: "years",
  label: "Estimated latent period from first insult to clinical symptoms",
};
