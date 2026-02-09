import type { HeroData } from "./types";

export const heroData: HeroData = {
  openingLines: [
    "Every neurodegenerative disease",
    "accumulates iron.",
  ],
  openingDiseases:
    "Alzheimer\u2019s. Parkinson\u2019s. ALS. MS. Long COVID. Prion disease.",
  openingTag: "This has been known for decades.",
  quotes: [
    {
      text: "A scheme of AD pathogenesis where brain iron is center stage and is involved in every step of the sequence of events that produce characteristic AD pathology.",
      source: "Streit, Phan & Bechmann",
      journal: "Pharmacological Reviews",
      year: 2024,
      doi: "10.1124/pharmrev.123.000823",
    },
    {
      text: "Future developments directed to non-amyloid targets that might have more clinical efficacy and less adverse effects.",
      source: "Frisoni et al.",
      journal: "The Lancet",
      year: 2025,
      doi: "10.1016/S0140-6736(25)01389-3",
    },
    {
      text: "Neurons have an exceptionally large surface area and metabolic demand, which necessitates specific mechanisms to engage constantly to protect the plasma membrane against lipid peroxidation.",
      source: "Lei et al.",
      journal: "Nature Reviews Neuroscience",
      year: 2025,
      doi: "10.1038/s41583-025-00930-5",
    },
  ],
  kicker: "A natural history of neurodegeneration",
  subtitle:
    "How the brain handles iron. How glial cells distribute it. What happens when those systems fail.",
  primaryCta: "Explore the evidence",
  secondaryCta: "See the biology",
};
