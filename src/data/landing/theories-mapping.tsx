/**
 * Data for the Swiss-Cheese Multi-Layer Interventions section.
 *
 * Neurodegeneration is a multi-layer failure. Single-layer interventions fail
 * because they leave other holes open. This section maps lifestyle and
 * treatment interventions to FELINE defense layers.
 */

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
  note: string;
}

export const multiLayerTreatments: MultiLayerTreatment[] = [
  {
    name: "Blarcamesine",
    layers: ["Fe", "L", "I", "N"],
    status: "Phase 2b/3",
    note: "Sigma-1 receptor agonist. Restores autophagy, protects pericytes/BBB, supports oligodendrocytes. Oral, no ARIA.",
  },
  {
    name: "Low-dose lithium",
    layers: ["L", "I", "N"],
    status: "Phase 2 / OTC",
    note: "GSK-3\u03B2 inhibition: autophagy + tau dephosphorylation + BBB tight junctions. Safe at microdose (5\u201320 mg lithium orotate).",
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
    note: "Entrains microglial clearance, enhances cerebral blood flow, promotes glymphatic transport. Non-invasive.",
  },
  {
    name: "Melatonin",
    layers: ["Fe", "L", "I", "N", "E"],
    status: "Supplement",
    note: "Iron chelator, antioxidant, BBB protector, restores AQP4 polarization for glymphatic clearance.",
  },
  {
    name: "Sulforaphane",
    layers: ["Fe", "L", "I", "N"],
    status: "Phase 2 / supplement",
    note: "Nrf2 activator: master switch for ferritin, ferroportin, GPX4, GSH. From broccoli sprouts.",
  },
];

export const sectionClosing =
  "Single-target drugs fail a multi-layer disease. The framework predicts that interventions touching more layers, at lower intensity, will outperform those hitting one layer hard.";
