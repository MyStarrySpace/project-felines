import type { PillarData, PillarDeepDive } from "./types";

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

export const pillarDeepDives: PillarDeepDive[] = [
  {
    letter: "Fe",
    title: "Iron",
    description: pillars[0].description,
    failureMode: "Iron maldistribution (not overload). Astrocytes become iron-overloaded while oligodendrocytes are iron-starved.",
    evidence: "Chelation worsened PD and AD despite reducing brain iron. This suggests the problem may be distribution, not quantity.",
    therapeuticTarget: "Redistribution, not chelation",
    entryFor: ["Friedreich's ataxia"],
  },
  {
    letter: "L",
    title: "Lysosome",
    description: pillars[1].description,
    failureMode: "GPX4 depletion, glutathione loss, NAD+ decline. Cells lose their ability to neutralize lipid peroxides.",
    evidence: "GPX4-KO mice develop ferroptosis specifically in oligodendrocytes, resembling the white matter damage seen in neurodegeneration.",
    therapeuticTarget: "Ferroptosis inhibitors, NAD+ boosters",
    entryFor: ["Huntington's", "Prion"],
  },
  {
    letter: "I",
    title: "Insulation",
    description: pillars[2].description,
    failureMode: "Demyelination and iron buffer exhaustion. Loss of myelin, ferritin, tau, and alpha-synuclein iron sequestration.",
    evidence: "GBA1 carriers: 10\u201330% penetrance. One layer failing isn't enough. Disease requires multi-layer failure.",
    therapeuticTarget: "Myelin repair, ferritinophagy regulation",
    entryFor: ["MS"],
  },
  {
    letter: "N",
    title: "Neurovascular",
    description: pillars[3].description,
    failureMode: "Pericyte death and astrocyte endfoot retraction. The blood-brain barrier loses its gatekeeping function.",
    evidence: "Pericyte loss detectable from ~age 20 (Montagne 2020). Decades of silent barrier erosion before symptoms.",
    therapeuticTarget: "Vascular risk reduction, pericyte protection",
    entryFor: ["AD", "Long COVID"],
  },
  {
    letter: "E",
    title: "Export",
    description: pillars[4].description,
    failureMode: "AQP4 depolarization and ferroportin downregulation. Iron can enter the brain but can't leave.",
    evidence: "AQP4-KO increases brain iron (Chen 2024). Export failure could cause accumulation even at normal dietary intake.",
    therapeuticTarget: "Glymphatic enhancement (sleep, exercise)",
    entryFor: ["ALS"],
  },
];

export const defenseInsight =
  "GBA1 mutations are the strongest genetic risk factor for Parkinson\u2019s. Yet only 10 to 30% of carriers develop disease. One compromised system isn\u2019t enough. Multiple defenses have to fail.";
