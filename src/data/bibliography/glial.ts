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
          fragmentText: "myelinated axon density at",
      },
      {
        citationId: "fernandez-castaneda-2022-cell-c2",
        sourceId: "fernandez-castaneda-2022-cell",
        quote:
          "Concordantly, humans with lasting cognitive symptoms post-COVID exhibit elevated CCL11 levels.",
        context:
          "Elevated CCL11 in humans with persistent cognitive symptoms after COVID",
        projectRef:
          "Kinetics model Part IX: brain fog mechanism, CCL11 as key mediator",
          fragmentText: "Concordantly, humans with lasting cognitive symptoms post-COVID exhibit",
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
          "The Morris water maze test revealed an impaired learning and memory ability of 9-mo-old APP/PS1 mice (P = 0.001), which was completely rescued by OLT1177 fed to mice (P = 0.008 to untreated APP/PS1).",
        context:
          "OLT1177 (NLRP3 inhibitor) rescued cognitive impairment in APP/PS1 mice",
        projectRef:
          "Cross-disease: NLRP3 inflammasome inhibitors, dapansutrile preclinical data",
          fragmentText: "The Morris water maze test revealed an impaired",
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
          fragmentText: "Symptom onset in autosomal dominant",
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
          fragmentText: "Il-1, TNF, and C1q",
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
          fragmentText: "long COVID-associated cognitive impairment",
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
          "While GFAP values were within the normal range at ~8 months, many patients showed a secondary and temporally distinct elevations up to >5 years after injury.",
        context:
          "GFAP shows biphasic pattern with secondary elevation years after TBI",
        projectRef:
          "Cross-disease biomarker: TBI GFAP biphasic profile",
          fragmentText: "months, many patients showed a secondary and temporally",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "santiago-gonzalez-2021-redoxbiol",
    title:
      "Ceruloplasmin deletion in myelinating glial cells induces myelin disruption and oxidative stress in the central and peripheral nervous systems",
    authors: "Santiago González DA, Cheli VT, Rosenblum SL, Denaroso G, Paez PM",
    journal: "Redox Biology",
    year: 2021,
    doi: "10.1016/j.redox.2021.102118",
    pmid: "34474395",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8411591/",
    tags: ["oligodendrocyte", "iron", "glia"],
    citations: [
      {
        citationId: "santiago-gonzalez-2021-redoxbiol-c1",
        sourceId: "santiago-gonzalez-2021-redoxbiol",
        quote:
          "Cp loss in aged OLs (8 months) induced cell iron overload, apoptotic cell death, brain oxidative stress, neurodegeneration and myelin disruption.",
        context:
          "Ceruloplasmin loss in oligodendrocytes causes iron overload, cell death, and myelin disruption",
        projectRef:
          "Reframe section: ceruloplasmin KO reproduces full cascade in OLs",
          fragmentText: "Cp loss in aged OLs 8 months induced",
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
          "One hundred years since its inception, an examination of the Doctrine indicates that it no longer encompasses important aspects of neuron function.",
        context:
          "Science Perspectives piece reexamining the Neuron Doctrine after 100 years",
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
          fragmentText: "hippocampus, amygdala, thalamus, midbrain",
      },
    ],
    verificationStatus: "verified",
  },
];
