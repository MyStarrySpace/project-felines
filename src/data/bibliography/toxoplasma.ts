import type { Source } from "./types";

export const toxoplasmaSources: Source[] = [
  {
    id: "yang-2021-parasitesvectors",
    title:
      "Risk of dementia in patients with toxoplasmosis: a nationwide, population-based cohort study in Taiwan",
    authors: "Yang HY, Chien WC, Chung CH, et al.",
    journal: "Parasites & Vectors",
    year: 2021,
    doi: "10.1186/s13071-021-04928-7",
    pmid: "34454590",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8401101/",
    tags: ["toxoplasma", "alzheimers", "epidemiology"],
    citations: [
      {
        citationId: "yang-2021-parasitesvectors-c1",
        sourceId: "yang-2021-parasitesvectors",
        quote:
          "the adjusted HR was 2.878 (95% CI = 1.709\u20134.968, P < 0.001)",
        context:
          "Taiwan nationwide cohort: T. gondii infection nearly triples dementia risk",
        projectRef:
          "FELINE intro: T. gondii puzzle — 2.9× dementia risk statistic",
          fragmentText: "the adjusted HR was 2.878 95 CI 1.709-4.968,",
      },
      {
        citationId: "yang-2021-parasitesvectors-c2",
        sourceId: "yang-2021-parasitesvectors",
        quote:
          "The usage of sulfadiazine or clindamycin in the treatment of toxoplasmosis was associated with a decreased risk of dementia",
        context: "Anti-parasitic treatment reduces the dementia risk",
        projectRef:
          "FELINE intro: treatment evidence supporting causal link",
          fragmentText: "The usage of sulfadiazine or clindamycin in the",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "yanes-2024-jinfectdis",
    title:
      "Toxoplasma gondii Infection of Alzheimer's Disease Mice Reduces Brain Amyloid Density Globally and Regionally",
    authors: "Yanes KJO, Guanzon NA, Azevedo R, et al.",
    journal: "The Journal of Infectious Diseases",
    year: 2024,
    doi: "10.1093/infdis/jiae227",
    pmid: "39255396",
    url: "https://pubmed.ncbi.nlm.nih.gov/39255396/",
    tags: ["toxoplasma", "alzheimers"],
    citations: [
      {
        citationId: "yanes-2024-jinfectdis-c1",
        sourceId: "yanes-2024-jinfectdis",
        quote:
          "T. gondii infection decreased amyloid burden in the brain globally as well as in the cortex and hippocampus, and many daughter regions",
        context:
          "Paradox: infection causes dementia yet reduces the hallmark plaques",
        projectRef:
          "FELINE intro: T. gondii puzzle — plaques dissolve but disease worsens",
          fragmentText: "T. gondii infection decreased amyloid burden in the",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wang-2023-plosntd",
    title:
      "Iron-overload-induced ferroptosis in mouse cerebral toxoplasmosis promotes brain injury and could be inhibited by Deferiprone",
    authors: "Wang C, Xie L, Xing Y, et al.",
    journal: "PLoS Neglected Tropical Diseases",
    year: 2023,
    doi: "10.1371/journal.pntd.0011607",
    pmid: "37651502",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10508604/",
    tags: ["toxoplasma", "iron", "ferroptosis"],
    citations: [
      {
        citationId: "wang-2023-plosntd-c1",
        sourceId: "wang-2023-plosntd",
        quote:
          "TgCtwh3 infection is followed by the activation of ferroptosis-related signaling pathways and hippocampal pathological damage in mice",
        context:
          "T. gondii triggers ferroptosis via iron overload in the brain",
        projectRef:
          "FELINE intro: T. gondii attacks iron homeostasis (Fe layer)",
          fragmentText: "TgCtwh3 infection is followed by the activation of",
      },
      {
        citationId: "wang-2023-plosntd-c2",
        sourceId: "wang-2023-plosntd",
        quote:
          "The use of DFP led to ferroptosis resistance and attenuated pathological changes, inflammatory reactions and T. gondii burden of the mice",
        context: "Deferiprone (iron chelator) rescues the ferroptosis damage",
        projectRef:
          "FELINE intro: iron chelation reverses T. gondii brain damage",
          fragmentText: "The use of DFP led to ferroptosis resistance",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "olivera-2021-elife",
    title:
      "Blood-brain barrier-restricted translocation of Toxoplasma gondii from cortical capillaries",
    authors: "Olivera GC, Ross EC, Peuckert C, Barragan A",
    journal: "eLife",
    year: 2021,
    doi: "10.7554/eLife.69182",
    pmid: "34877929",
    url: "https://elifesciences.org/articles/69182",
    tags: ["toxoplasma", "vascular"],
    citations: [
      {
        citationId: "olivera-2021-elife-c1",
        sourceId: "olivera-2021-elife",
        quote:
          "The integrity of the microvascular BBB restricts parasite transit, which conversely is exacerbated by the inflammatory response",
        context:
          "T. gondii crosses the BBB via cortical capillaries, inflammation worsens permeability",
        projectRef:
          "FELINE intro: T. gondii attacks the neurovascular barrier (N layer)",
          fragmentText: "The integrity of the microvascular BBB restricts parasite",
      },
    ],
    verificationStatus: "verified",
  },
];
