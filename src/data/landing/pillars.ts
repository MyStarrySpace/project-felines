import type { PillarData } from "./types";

export const pillars: PillarData[] = [
  {
    letter: "Fe",
    title: "Iron",
    description:
      "Essential for myelin but toxic when mislocalized. Free iron generates hydroxyl radicals that destroy cell membranes.",
  },
  {
    letter: "L",
    title: "Lysosome",
    description:
      "GPX4 and glutathione protect cell membranes from iron-driven oxidation. When these defenses fail, glial cells die by ferroptosis.",
  },
  {
    letter: "I",
    title: "Insulation",
    description:
      "Myelin, ferritin, tau, and alpha-synuclein all sequester iron. Oligodendrocytes provide both electrical and iron insulation. When these buffers fail, free iron triggers damage.",
  },
  {
    letter: "N",
    title: "Neurovascular",
    description:
      "Pericytes, the blood-brain barrier, and astrocyte endfeet. Pericyte death breaches the barrier that controls brain iron entry.",
  },
  {
    letter: "E",
    title: "Export",
    description:
      "Brain-level (ferroportin, glymphatic, AQP4) and systemic (liver, spleen, gut) iron export. When export fails, iron accumulates even at normal dietary intake.",
  },
];

export const defenseInsight =
  "GBA1 mutations are the strongest genetic risk factor for Parkinson\u2019s. Yet only 10 to 30% of carriers develop disease. One compromised system isn\u2019t enough. Multiple defenses have to fail.";
