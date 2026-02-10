import type { DiseaseEntryPoint } from "./types";

export const diseaseEntryPoints: DiseaseEntryPoint[] = [
  {
    disease: "Alzheimer's",
    layers: ["N"],
    tooltips: {
      N: "Pericyte loss breaches the BBB, allowing uncontrolled iron entry. Neurovascular failure is the primary initiating event.",
    },
  },
  {
    disease: "Parkinson's",
    layers: ["N", "L"],
    tooltips: {
      N: "Substantia nigra vasculature is uniquely vulnerable. BBB breach allows iron into the most iron-dense brain region.",
      L: "GBA1 mutations compromise lysosomal function, reducing GPX4 and glutathione defenses against ferroptosis.",
    },
  },
  {
    disease: "Long COVID",
    layers: ["N"],
    tooltips: {
      N: "SARS-CoV-2 infects pericytes via CD147, directly breaching the BBB. Neurovascular damage is the initiating mechanism.",
    },
  },
  {
    disease: "ALS",
    layers: ["L", "E"],
    tooltips: {
      L: "Motor neurons have high metabolic demand and low antioxidant reserves. GPX4 depletion triggers ferroptosis in motor cortex.",
      E: "AQP4 depolarization impairs glymphatic clearance of iron from motor regions.",
    },
  },
  {
    disease: "MS",
    layers: ["I", "L"],
    tooltips: {
      I: "EBV latent proteins disrupt oligodendrocyte iron buffering. Demyelination exposes neurons to free iron.",
      L: "Lysosomal iron release in oligodendrocytes overwhelms local antioxidant defenses.",
    },
  },
  {
    disease: "Prion",
    layers: ["L"],
    tooltips: {
      L: "PrP misfolding destroys iron-buffering capacity. Lysosomal antioxidant defenses fail rapidly, driving the fastest ferroptosis cascade.",
    },
  },
];

export const defenseLayers = ["Fe", "L", "I", "N", "E"] as const;
