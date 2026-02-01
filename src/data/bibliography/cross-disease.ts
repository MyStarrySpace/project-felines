import type { Source } from "./types";

export const crossDiseaseSources: Source[] = [
  {
    id: "hulse-2001-glia",
    title: "Astrocytic clasmatodendrosis in hippocampal organ culture",
    authors: "Hulse RE, Winterfield J, Bhatt H, et al.",
    journal: "Glia",
    year: 2001,
    doi: "10.1002/1098-1136(200102)33:2<169::AID-GLIA1016>3.0.CO;2-B",
    pmid: "11180514",
    url: "https://pubmed.ncbi.nlm.nih.gov/11180514/",
    tags: ["astrocyte"],
    citations: [
      {
        citationId: "hulse-2001-glia-c1",
        sourceId: "hulse-2001-glia",
        quote:
          "Process beading begins 15 minutes post-insult; fragmentation at 15-60 minutes",
        context:
          "Establishes rapid timeline for irreversible astrocyte degeneration",
        projectRef:
          "Kinetics model Step 2b: clasmatodendrosis timeline",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ward-2014-lancetneurol",
    title:
      "The role of iron in brain ageing and neurodegenerative disorders",
    authors: "Ward RJ, Zucca FA, Duyn JH, et al.",
    journal: "The Lancet. Neurology",
    year: 2014,
    doi: "10.1016/S1474-4422(14)70117-6",
    pmid: "25231526",
    url: "https://pubmed.ncbi.nlm.nih.gov/25231526/",
    tags: ["iron", "aging"],
    citations: [
      {
        citationId: "ward-2014-lancetneurol-c1",
        sourceId: "ward-2014-lancetneurol",
        quote:
          "One astrocyte contains 10^6-10^8 iron atoms in ferritin nanocages",
        context:
          "Quantifies iron content per cell type in the brain",
        projectRef:
          "Kinetics model Step 3: iron per cell estimates",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wang-2022-molneurodegen",
    title:
      "Dynamic changes of CSF sPDGFRβ during ageing and AD progression and associations with CSF ATN biomarkers",
    authors: "Wang J, Fan DY, Li HY, et al.",
    journal: "Molecular Neurodegeneration",
    year: 2022,
    doi: "10.1186/s13024-021-00512-w",
    pmid: "35033164",
    url: "https://pubmed.ncbi.nlm.nih.gov/35033164/",
    tags: ["pericyte", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "wang-2022-molneurodegen-c1",
        sourceId: "wang-2022-molneurodegen",
        quote:
          "CSF sPDGFRβ begins rising at age 20 and precedes p-tau (age 22) and Aβ decline (age 40)",
        context:
          "Pericyte injury is upstream of classical AD pathology",
        projectRef:
          "Cross-disease biomarker: sPDGFRβ timing in AD, peaks at MCI",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "shahim-2024-alzdement",
    title:
      "Serum NfL and GFAP as biomarkers of progressive neurodegeneration in TBI",
    authors: "Shahim P, Pham DL, van der Merwe AJ, et al.",
    journal: "Alzheimer's & Dementia",
    year: 2024,
    doi: "10.1002/alz.13898",
    pmid: "38805359",
    url: "https://pubmed.ncbi.nlm.nih.gov/38805359/",
    tags: ["tbi", "biomarkers"],
    citations: [
      {
        citationId: "shahim-2024-alzdement-c1",
        sourceId: "shahim-2024-alzdement",
        quote:
          "Brain atrophy continues for years even after mild TBI",
        context:
          "Progressive neurodegeneration after TBI matches FELINE downstream cascade model",
        projectRef:
          "Cross-disease biomarker: TBI progressive neurodegeneration",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "larosa-2020-biomolecules",
    title:
      "Ferroptosis in Friedreich's Ataxia: A Metal-Induced Neurodegenerative Disease",
    authors: "La Rosa P, Petrillo S, Fiorenza MT, et al.",
    journal: "Biomolecules",
    year: 2020,
    doi: "10.3390/biom10111551",
    pmid: "33202971",
    url: "https://pubmed.ncbi.nlm.nih.gov/33202971/",
    tags: ["ferroptosis", "iron"],
    citations: [
      {
        citationId: "larosa-2020-biomolecules-c1",
        sourceId: "larosa-2020-biomolecules",
        quote:
          "FXN deficiency lowers the threshold for ferroptosis induction; metal-induced oxidative damage may accumulate over time, lowering the ferroptosis threshold",
        context:
          "FRDA demonstrates delayed ferroptosis onset despite congenital mutation",
        projectRef:
          "Cross-disease: FRDA ferroptosis threshold lowering mechanism",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "monje-2022-neuron",
    title: "The neurobiology of long COVID",
    authors: "Monje M, Iwasaki A.",
    journal: "Neuron",
    year: 2022,
    doi: "10.1016/j.neuron.2022.10.006",
    pmid: "36288726",
    url: "https://pubmed.ncbi.nlm.nih.gov/36288726/",
    tags: ["covid", "oligodendrocyte"],
    citations: [
      {
        citationId: "monje-2022-neuron-c1",
        sourceId: "monje-2022-neuron",
        quote:
          "COVID brain fog shares cellular pathology with chemotherapy-induced cognitive impairment: white matter-selective microglial activation, oligodendrocyte loss, myelin loss, hippocampal neurogenesis inhibition",
        context:
          "Key insight linking COVID brain fog to chemo brain mechanism",
        projectRef:
          "Kinetics model Part IX: chemo-brain parallel for COVID brain fog",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "gibson-2019-cell",
    title:
      "Methotrexate chemotherapy induces persistent tri-glial dysregulation that underlies chemotherapy-related cognitive impairment",
    authors: "Gibson EM, Nagaraja S, Ocampo A, et al.",
    journal: "Cell",
    year: 2019,
    doi: "10.1016/j.cell.2018.10.049",
    pmid: "30528430",
    url: "https://pubmed.ncbi.nlm.nih.gov/30528430/",
    tags: ["oligodendrocyte", "microglia", "astrocyte"],
    citations: [
      {
        citationId: "gibson-2019-cell-c1",
        sourceId: "gibson-2019-cell",
        quote:
          "Methotrexate chemotherapy induces persistent tri-glial dysregulation with microglial activation, oligodendrocyte loss, and astrocyte reactivity",
        context:
          "Establishes the tri-glial dysregulation model underlying cognitive impairment",
        projectRef:
          "Kinetics model Part IX: brain fog tri-glial mechanism reference",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "villeda-2011-nature",
    title:
      "The ageing systemic milieu negatively regulates neurogenesis and cognitive function",
    authors: "Villeda SA, Luo J, Mosher KI, et al.",
    journal: "Nature",
    year: 2011,
    doi: "10.1038/nature10357",
    pmid: "21886162",
    url: "https://pubmed.ncbi.nlm.nih.gov/21886162/",
    tags: ["aging", "glia"],
    citations: [
      {
        citationId: "villeda-2011-nature-c1",
        sourceId: "villeda-2011-nature",
        quote:
          "CCL11 (eotaxin) increases with age and inhibits hippocampal neurogenesis",
        context:
          "CCL11 as age-related mediator of cognitive decline",
        projectRef:
          "Kinetics model Part IX: CCL11 as brain fog mediator",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "whittington-2018-jnuclmed",
    title:
      "Spatiotemporal Distribution of β-Amyloid in Alzheimer Disease Is the Result of Heterogeneous Regional Carrying Capacities",
    authors: "Whittington A, Sharp DJ, Gunn RN.",
    journal: "Journal of Nuclear Medicine",
    year: 2018,
    doi: "10.2967/jnumed.117.194720",
    pmid: "29146694",
    url: "https://pubmed.ncbi.nlm.nih.gov/29146694/",
    tags: ["epidemiology", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "whittington-2018-jnuclmed-c1",
        sourceId: "whittington-2018-jnuclmed",
        quote:
          "Peak accumulation rate ~24-28 years after initiation; regional carrying capacity heterogeneous",
        context:
          "Mathematical model: logistic growth with heterogeneous regional K values",
        projectRef:
          "Kinetics model Part III: mathematical model of amyloid accumulation",
      },
    ],
    verificationStatus: "verified",
  },
];
