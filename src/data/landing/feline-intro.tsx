/**
 * Data for FELINE Introduction section.
 *
 * Uses T. gondii (cat parasite → AD without plaques) to motivate the acronym,
 * then walks through each defense layer.
 */

import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";

// ---------------------------------------------------------------------------
// Beat 1: T. gondii puzzle
// ---------------------------------------------------------------------------

export const toxoPuzzle = {
  stat: "2.9\u00D7",
  statLabel: "dementia risk with T. gondii infection",
  headline: "A cat parasite causes dementia without plaques.",
  body: (
    <>
      <em>T. gondii</em> infection nearly triples dementia risk in a
      Taiwan cohort of 800.
      <Cite id="yang-2021-parasitesvectors" />
      {" "}But in AD mice, the same parasite reduces amyloid plaque
      density.
      <Cite id="yanes-2024-jinfectdis" />
    </>
  ),
  paradox:
    "Fewer plaques should mean less disease. T. gondii does the opposite.",
  resolution: (
    <>
      T. gondii activates ferroptosis in the hippocampus
      <Cite id="wang-2023-plosntd" />
      {" "}and disrupts blood-brain barrier integrity.
      <Cite id="olivera-2021-elife" />
      {" "}The plaques were never the problem.
    </>
  ),
};

// ---------------------------------------------------------------------------
// Beat 2: Cat connection + FELINE reveal
// ---------------------------------------------------------------------------

export const catReveal = {
  hookLine: "T. gondii\u2019s definitive host is the cat.",
  revealLine:
    "The framework that explains why it causes dementia also explains every other neurodegenerative disease.",
};

export const felineLetters = [
  { letter: "F", subscript: "e" },
  { letter: "L", subscript: "" },
  { letter: "I", subscript: "" },
  { letter: "N", subscript: "" },
  { letter: "E", subscript: "" },
] as const;

// ---------------------------------------------------------------------------
// Beat 3: Five defense layers
// ---------------------------------------------------------------------------

export interface FelineLayer {
  id: string;
  letter: string;
  subscript: string;
  name: string;
  protects: ReactNode;
  failureMode: ReactNode;
}

export const felineLayers: FelineLayer[] = [
  {
    id: "Fe",
    letter: "F",
    subscript: "e",
    name: "Iron homeostasis",
    protects:
      "Ferritin stores iron safely. Transferrin moves it. Ferroportin exports it.",
    failureMode:
      "Iron escapes containment. Fenton chemistry generates hydroxyl radicals.",
  },
  {
    id: "L",
    letter: "L",
    subscript: "",
    name: "Lysosome / antioxidant",
    protects:
      "GPX4 neutralizes lipid peroxides. GSH and NAD+/SIRT3 maintain defenses.",
    failureMode: "GPX4 depletion triggers lipid peroxidation cascades.",
  },
  {
    id: "I",
    letter: "I",
    subscript: "",
    name: "Insulation / buffering",
    protects: (
      <>
        Myelin, ferritin, tau, \u03B1-synuclein. Oligodendrocytes provide both
        electrical insulation and iron insulation via FTH1 export.
      </>
    ),
    failureMode:
      "Demyelination and protein aggregation release sequestered iron.",
  },
  {
    id: "N",
    letter: "N",
    subscript: "",
    name: "Neurovascular",
    protects: "Pericytes, BBB, and astrocyte endfeet gate iron entry.",
    failureMode:
      "Pericyte loss breaches the BBB. Uncontrolled iron floods the parenchyma.",
  },
  {
    id: "E",
    letter: "E",
    subscript: "",
    name: "Export",
    protects:
      "Ferroportin/ceruloplasmin exports iron. Glymphatic/AQP4 clears waste.",
    failureMode:
      "Export stalls. Iron accumulates at normal dietary intake.",
  },
];

// ---------------------------------------------------------------------------
// Beat 4: Swiss cheese summary
// ---------------------------------------------------------------------------

export const swissCheese = {
  line1:
    "When multiple layers fail simultaneously, iron-driven ferroptosis cascades through oligodendrocytes.",
  line2:
    "No single layer failure causes disease. Neurodegeneration begins when the holes line up.",
};
