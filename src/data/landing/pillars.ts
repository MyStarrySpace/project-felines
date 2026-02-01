import type { PillarData } from "./types";

export const pillars: PillarData[] = [
  {
    letter: "Fe",
    title: "Iron",
    description:
      "The core pathogenic element. Iron is essential for myelin synthesis but toxic when mislocalized. Fenton chemistry generates hydroxyl radicals that destroy PUFA-rich membranes.",
  },
  {
    letter: "L",
    title: "Lysosome",
    description:
      "GPX4, the NAD+/SIRT3 axis, and glutathione protect membranes from peroxidation. When these defenses fail, PUFA-rich oligodendrocyte membranes become vulnerable to ferroptotic death.",
  },
  {
    letter: "I",
    title: "Insulation",
    description:
      "Myelin sheaths, lysosomes, ferritin, tau, and alpha-synuclein. Oligodendrocytes provide both electrical insulation (myelin) and iron insulation (FTH1 export to neurons). When insulation fails, labile iron triggers Fenton chemistry.",
  },
  {
    letter: "N",
    title: "Neurovascular",
    description:
      "Pericytes, BBB, astrocyte endfeet, and Schwann cell vasculature. Pericyte death is among the earliest events in neurodegeneration, breaching the barrier that controls brain iron entry.",
  },
  {
    letter: "E",
    title: "Export",
    description:
      "Brain-level (ferroportin/Cp on endfeet, glymphatic, AQP4) and systemic (liver hepcidin/bile, spleen recycling, gut absorption/microbiome) iron export. When export fails, iron accumulates even at normal intake levels.",
  },
];

export const frameworkInsight =
  "GBA1 mutations are the strongest genetic risk factor for Parkinson's, yet only 10-30% of carriers develop disease. This incomplete penetrance is a key clue: one compromised defense layer isn't sufficient. The FELINE framework explains why multiple layers must fail simultaneously.";
