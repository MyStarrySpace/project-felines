/**
 * Data for the Swiss-Cheese Multi-Layer Interventions section.
 *
 * Neurodegeneration is a multi-layer failure. Single-layer interventions fail
 * because they leave other holes open. This section maps lifestyle and
 * treatment interventions to FELINE defense layers.
 */

import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";

export const sectionHeadline = "No single layer is enough.";
export const sectionSubhead =
  "Neurodegeneration is a swiss-cheese failure: every defense has holes. Disease begins when the holes line up. The interventions that work protect multiple layers at once.";

export interface LifestyleIntervention {
  name: string;
  layers: string[];
  note: string;
}

export const lifestyleInterventions: LifestyleIntervention[] = [
  {
    name: "Exercise",
    layers: ["Fe", "L", "I", "N", "E"],
    note: "Upregulates ferroportin, boosts GPX4/GSH, strengthens BBB, enhances glymphatic flow.",
  },
  {
    name: "Sleep",
    layers: ["N", "E"],
    note: "Glymphatic clearance peaks during deep sleep. BBB repair requires consolidated rest.",
  },
  {
    name: "Vaccination",
    layers: ["L", "N"],
    note: "Prevents viral BBB breach (COVID, flu, shingles). Many AD-linked infections also damage lysosomes.",
  },
  {
    name: "Dental care",
    layers: ["Fe", "N"],
    note: "P. gingivalis hijacks host iron machinery directly. Gingipains degrade transferrin and hemoglobin to harvest iron.",
  },
];

export interface MultiLayerTreatment {
  name: string;
  layers: string[];
  status: string;
  note: ReactNode;
}

export const multiLayerTreatments: MultiLayerTreatment[] = [
  {
    name: "Blarcamesine",
    layers: ["Fe", "L", "I", "N"],
    status: "Phase 2b/3",
    note: (
      <>
        Sigma-1 receptor agonist. Restores autophagy, protects pericytes/BBB,
        supports oligodendrocytes. &ldquo;Improvement compared to placebo in
        all clinical endpoints at 48 weeks.&rdquo;
        <Cite id="sabbagh-2025-alzdement" citationIds={["sabbagh-2025-alzdement-c1"]} />
        {" "}Oral, no ARIA.
      </>
    ),
  },
  {
    name: "Low-dose lithium",
    layers: ["L", "I", "N"],
    status: "Phase 2 / OTC",
    note: (
      <>
        GSK-3{"\u03B2"} inhibition: &ldquo;can reduce amyloid deposition
        and tau phosphorylation, regulate autophagy, inflammation, oxidative
        stress.&rdquo;
        <Cite id="shen-2024-frontpharmacol" citationIds={["shen-2024-frontpharmacol-c1"]} />
        {" "}Safe at microdose (5{"\u2013"}20 mg lithium orotate).
      </>
    ),
  },
  {
    name: "NAD+ restoration (NR/NMN)",
    layers: ["L"],
    status: "Phase 1/2 / supplement",
    note: "Restores SIRT3 and mitochondrial antioxidant machinery. Single layer but critical bottleneck.",
  },
  {
    name: "40 Hz gamma stimulation",
    layers: ["L", "N", "E"],
    status: "Phase 2",
    note: (
      <>
        Entrains microglial clearance. Pilot: &ldquo;lesser ventricular
        dilation and hippocampal atrophy, increased functional connectivity
        in the default mode network.&rdquo;
        <Cite id="chan-2022-plosone" citationIds={["chan-2022-plosone-c1"]} />
        {" "}Non-invasive.
      </>
    ),
  },
  {
    name: "Melatonin",
    layers: ["Fe", "L", "I", "N", "E"],
    status: "Supplement",
    note: (
      <>
        &ldquo;An efficient anti-inflammatory, iron chelator, antioxidant,
        angiotensin II antagonist, and clock gene regulator.&rdquo;
        <Cite id="yehia-2024-molneurodegen" citationIds={["yehia-2024-molneurodegen-c1"]} />
        {" "}Restores AQP4 polarization for glymphatic clearance.
      </>
    ),
  },
  {
    name: "Sulforaphane",
    layers: ["Fe", "L", "I", "N"],
    status: "Phase 2 / supplement",
    note: (
      <>
        Nrf2 activator: &ldquo;can directly or indirectly regulate GPX4
        protein content{"\u2026"}intracellular free iron content{"\u2026"}
        thereby regulating ferroptosis process.&rdquo;
        <Cite id="song-2020-frontneurosci" citationIds={["song-2020-frontneurosci-c1"]} />
        {" "}From broccoli sprouts.
      </>
    ),
  },
];

export const sectionClosing =
  "Single-target drugs fail a multi-layer disease. The framework predicts that interventions touching more layers, at lower intensity, will outperform those hitting one layer hard.";
