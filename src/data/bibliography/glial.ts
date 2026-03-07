import type { Source } from "./types";

export const glialSources: Source[] = [
  {
    id: "fernandez-castaneda-2022-cell",
    title:
      "Mild respiratory COVID can cause multi-lineage neural cell and myelin dysregulation",
    authors: "Fernández-Castañeda A, Lu P, Geraghty AC, et al.",
    journal: "Cell",
    year: 2022,
    doi: "10.1016/j.cell.2022.06.008",
    pmid: "35768006",
    url: "https://pubmed.ncbi.nlm.nih.gov/35768006/",
    tags: ["oligodendrocyte", "microglia", "covid"],
    citations: [
      {
        citationId: "fernandez-castaneda-2022-cell-c1",
        sourceId: "fernandez-castaneda-2022-cell",
        quote:
          "~30% oligodendrocyte loss and reduced myelinated axon density at day 7; OL loss persists at week 7",
        context:
          "COVID brain fog shares identical cellular pathology with chemo brain",
        projectRef:
          "Kinetics model Part IX: brain fog, oligodendrocyte loss timeline",
      },
      {
        citationId: "fernandez-castaneda-2022-cell-c2",
        sourceId: "fernandez-castaneda-2022-cell",
        quote:
          "CCL11 elevated in brain fog patients; white matter-selective microglial activation",
        context:
          "CCL11 (eotaxin-1) mediates brain fog via oligodendrocyte loss and neurogenesis inhibition",
        projectRef:
          "Kinetics model Part IX: brain fog mechanism, CCL11 as key mediator",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "lonnemann-2020-pnas",
    title:
      "The NLRP3 inflammasome inhibitor OLT1177 rescues cognitive impairment in a mouse model of Alzheimer's disease",
    authors: "Lonnemann N, Hosseini S, Marchetti C, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2020,
    doi: "10.1073/pnas.2009680117",
    pmid: "33257576",
    url: "https://pubmed.ncbi.nlm.nih.gov/33257576/",
    tags: ["microglia", "alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "lonnemann-2020-pnas-c1",
        sourceId: "lonnemann-2020-pnas",
        quote:
          "OLT1177 rescued cognitive impairment, synaptic plasticity, and reduced plaques in APP/PS1 mice",
        context:
          "NLRP3 inflammasome inhibition as therapeutic approach for AD",
        projectRef:
          "Cross-disease: NLRP3 inflammasome inhibitors, dapansutrile preclinical data",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "johansson-2023-brain",
    title:
      "Plasma biomarker profiles in autosomal dominant Alzheimer's disease",
    authors: "Johansson C, Thordardottir S, Laffita-Mesa J, et al.",
    journal: "Brain",
    year: 2023,
    doi: "10.1093/brain/awac399",
    pmid: "36626935",
    url: "https://pubmed.ncbi.nlm.nih.gov/36626935/",
    tags: ["astrocyte", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "johansson-2023-brain-c1",
        sourceId: "johansson-2023-brain",
        quote:
          "GFAP increases ~10 years before symptom onset in autosomal dominant AD, followed by P-tau181, then NfL",
        context:
          "GFAP is the earliest blood biomarker of AD, reflecting astrocyte activation",
        projectRef:
          "Kinetics model Part VII: GFAP as earliest blood biomarker",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "liddelow-2017-nature",
    title:
      "Neurotoxic reactive astrocytes are induced by activated microglia",
    authors: "Liddelow SA, Guttenplan KA, Clarke LE, et al.",
    journal: "Nature",
    year: 2017,
    doi: "10.1038/nature21029",
    pmid: "28099414",
    url: "https://pubmed.ncbi.nlm.nih.gov/28099414/",
    tags: ["astrocyte", "microglia", "glia"],
    citations: [
      {
        citationId: "liddelow-2017-nature-c1",
        sourceId: "liddelow-2017-nature",
        quote:
          "Activated microglia induce neurotoxic A1 reactive astrocytes via IL-1α, TNFα, and C1q",
        context:
          "Microglia-astrocyte crosstalk creates neurotoxic glial environment",
        projectRef:
          "Cross-disease: glial dysfunction pillar, microglia-astrocyte cascade",
      },
      {
        citationId: "liddelow-2017-nature-c2",
        sourceId: "liddelow-2017-nature",
        quote:
          "A1s secrete a soluble toxin that rapidly kills a subset of CNS neurons and mature oligodendrocytes, but not other CNS cell types",
        context:
          "A1 reactive astrocytes selectively kill oligodendrocytes and neurons",
        projectRef:
          "FELINE intro: I layer — Reactive astrocyte damage segment",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "greene-2024-natneurosci",
    title:
      "Blood-brain barrier disruption and sustained systemic inflammation in individuals with long COVID-associated cognitive impairment",
    authors: "Greene C, Connolly R, Brennan D, et al.",
    journal: "Nature Neuroscience",
    year: 2024,
    doi: "10.1038/s41593-024-01576-9",
    pmid: "38388736",
    url: "https://pubmed.ncbi.nlm.nih.gov/38388736/",
    tags: ["vascular", "covid", "glia", "biomarkers"],
    citations: [
      {
        citationId: "greene-2024-natneurosci-c1",
        sourceId: "greene-2024-natneurosci",
        quote:
          "S100β and albumin quotient elevated in long COVID-associated cognitive impairment",
        context:
          "BBB dysfunction persists in cognitive Long COVID",
        projectRef:
          "Cross-disease biomarker: Long COVID BBB dysfunction evidence",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "newcombe-2022-brain",
    title:
      "Post-acute blood biomarkers and disease progression in traumatic brain injury",
    authors: "Newcombe VFJ, Ashton NJ, Posti JP, et al.",
    journal: "Brain",
    year: 2022,
    doi: "10.1093/brain/awac126",
    pmid: "35377407",
    url: "https://pubmed.ncbi.nlm.nih.gov/35377407/",
    tags: ["biomarkers", "tbi", "astrocyte"],
    citations: [
      {
        citationId: "newcombe-2022-brain-c1",
        sourceId: "newcombe-2022-brain",
        quote:
          "GFAP shows biphasic pattern: initial spike, decline, then secondary increase months-years later",
        context:
          "Biphasic GFAP in TBI matches FELINE prediction of acute damage then chronic reactive astrogliosis",
        projectRef:
          "Cross-disease biomarker: TBI GFAP biphasic profile",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "bullock-2005-science",
    title: "Neuroscience. The neuron doctrine, redux",
    authors: "Bullock TH, Bennett MVL, Johnston D, Josephson R, Marder E, Fields RD",
    journal: "Science",
    year: 2005,
    doi: "10.1126/science.1114394",
    pmid: "16272104",
    url: "https://pubmed.ncbi.nlm.nih.gov/16272104/",
    tags: ["glia", "astrocyte", "gap-junctions", "neuron-doctrine"],
    citations: [
      {
        citationId: "bullock-2005-science-c1",
        sourceId: "bullock-2005-science",
        quote:
          "Perspectives piece challenging the classical neuron doctrine, arguing that non-synaptic communication (gap junctions, glial signaling) is functionally important and systematically underappreciated",
        context:
          "Foundational argument that glia and non-neuronal signaling are essential to brain function, not just support cells",
        projectRef:
          "Cell vulnerability section: why the cells that fail first in neurodegeneration are not neurons",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "nakatomi-2014-jnuclmed",
    title:
      "Neuroinflammation in Patients with Chronic Fatigue Syndrome/Myalgic Encephalomyelitis: An ¹¹C-(R)-PK11195 PET Study",
    authors: "Nakatomi Y, Mizuno K, Ishii A, et al.",
    journal: "Journal of Nuclear Medicine",
    year: 2014,
    doi: "10.2967/jnumed.113.131045",
    pmid: "24665088",
    url: "https://pubmed.ncbi.nlm.nih.gov/24665088/",
    tags: ["microglia", "imaging"],
    citations: [
      {
        citationId: "nakatomi-2014-jnuclmed-c1",
        sourceId: "nakatomi-2014-jnuclmed",
        quote:
          "45-199% increase in TSPO binding in cingulate, hippocampus, amygdala, thalamus, midbrain in ME/CFS patients",
        context:
          "PET imaging confirms widespread neuroinflammation in ME/CFS",
        projectRef:
          "Cross-disease biomarker: ME/CFS neuroinflammation PET evidence",
      },
    ],
    verificationStatus: "verified",
  },
];
