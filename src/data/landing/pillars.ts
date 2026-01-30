import type { PillarData } from "./types";

export const pillars: PillarData[] = [
  {
    letter: "P",
    title: "Pericyte",
    description:
      "Pericytes wrap brain capillaries and regulate blood-brain barrier integrity. Their death is among the earliest detectable events in neurodegeneration, preceding amyloid plaques by years.",
  },
  {
    letter: "L",
    title: "Lysosomal",
    description:
      "Lysosomes are the cell's recycling centers. GBA1 mutations impair lysosomal function, driving alpha-synuclein accumulation. But GBA1 is only 10-30% penetrant, meaning cofactors are required.",
  },
  {
    letter: "I",
    title: "Iron",
    description:
      "Iron is essential for myelin synthesis but toxic when mislocalized. After BBB breakdown, iron redistributes from oligodendrocytes to astrocytes, starving myelin repair and fueling Fenton chemistry.",
  },
  {
    letter: "G",
    title: "Glia",
    description:
      "Oligodendrocytes are the most iron-dependent and peroxidation-vulnerable cells in the brain. Their death strips axons of myelin, producing the white matter damage seen across neurodegenerative diseases.",
  },
];

export const frameworkInsight =
  "GBA1 mutations are the strongest genetic risk factor for Parkinson's, yet only 10-30% of carriers develop disease. This incomplete penetrance is a key clue: lysosomal dysfunction alone isn't sufficient. The PLIG framework explains what additional factors are required.";
