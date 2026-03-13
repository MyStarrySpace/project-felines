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
    title: "Immune / inflammatory",
    description:
      "Microglia, complement cascade, cytokine signaling, and hepcidin-driven iron sequestration. Chronic activation turns protective immunity into a self-amplifying iron trap.",
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
  {
    letter: "S",
    title: "Sheathing",
    description:
      "Myelin, ferritin, tau, and alpha-synuclein all sequester iron. Oligodendrocytes provide both electrical and iron insulation via FTH1 export. When these buffers fail, free iron triggers damage.",
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
    evidence: "Cuprizone-induced oligodendrocyte loss is mediated by ferroptosis (Jhelum et al. 2020). GPX4 depletion is early across multiple ALS mouse models (Wang et al. 2022).",
    therapeuticTarget: "Ferroptosis inhibitors, NAD+ boosters",
    entryFor: ["Huntington's", "Prion"],
  },
  {
    letter: "I",
    title: "Immune / inflammatory",
    description: pillars[2].description,
    failureMode: "Chronic activation: complement tags healthy myelin, microglia attack oligodendrocytes. Hepcidin traps iron in cells. Each infection primes a lower threshold for the next.",
    evidence: "Shingles vaccine reduced dementia probability by ~20% over 7 years (Eyting et al. 2025). Each prevented infection is one fewer immune assault on iron-buffering systems.",
    therapeuticTarget: "Immune modulation, hepcidin regulation",
    entryFor: ["MS"],
  },
  {
    letter: "N",
    title: "Neurovascular",
    description: pillars[3].description,
    failureMode: "Pericyte death and astrocyte endfoot retraction. The blood-brain barrier loses its gatekeeping function.",
    evidence: "BBB breakdown is an early biomarker of cognitive decline, detectable via CSF sPDGFR\u03B2 before amyloid or tau changes (Nation et al. 2019).",
    therapeuticTarget: "Vascular risk reduction, pericyte protection",
    entryFor: ["AD", "Long COVID"],
  },
  {
    letter: "E",
    title: "Export",
    description: pillars[4].description,
    failureMode: "AQP4 depolarization and ferroportin downregulation. Iron can enter the brain but can't leave.",
    evidence: "AQP4 depolarization impairs glymphatic clearance. Export failure causes iron accumulation even at normal dietary intake.",
    therapeuticTarget: "Glymphatic enhancement (sleep, exercise)",
    entryFor: ["ALS"],
  },
  {
    letter: "S",
    title: "Sheathing",
    description: pillars[5].description,
    failureMode: "Demyelination and iron buffer exhaustion. Loss of myelin, ferritin, tau, and alpha-synuclein iron sequestration.",
    evidence: "GBA1 penetrance depends on variant severity and polygenic background (Hassanin et al. 2025). Most carriers never develop disease. One layer failing isn't enough.",
    therapeuticTarget: "Myelin repair, ferritinophagy regulation",
    entryFor: ["Friedreich's ataxia"],
  },
];

export const defenseInsight =
  "GBA1 mutations are the strongest genetic risk factor for Parkinson\u2019s. Yet most carriers never develop disease. Penetrance depends on variant severity and polygenic background. One compromised system isn\u2019t enough. Multiple defenses have to fail.";
