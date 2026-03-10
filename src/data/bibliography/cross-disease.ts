import type { Source } from "./types";

export const crossDiseaseSources: Source[] = [
  {
    id: "hulse-2001-glia",
    title: "Astrocytic clasmatodendrosis in hippocampal organ culture",
    authors: "Hulse RE, Winterfield J, Kunkler PE, et al.",
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
          "A significant reduction in astrocytic process length occurred 15 min (and remained for 60 min) after exposure to acidic Ringer's and mitochondrial inhibition in the pyramidal cell body layer.",
        context:
          "Astrocyte process damage begins within 15 minutes of metabolic insult",
        projectRef:
          "Kinetics model Step 2b: clasmatodendrosis timeline",
          fragmentText: "a significant reduction in astrocytic process length occurred",
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
          "During ageing, different iron complexes accumulate in brain regions associated with motor and cognitive impairment.",
        context:
          "Review of brain iron accumulation in neurodegeneration",
        projectRef:
          "Kinetics model Step 3: iron per cell estimates",
          fragmentText: "During ageing, different iron complexes accumulate in brain",
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
          "In lifetime, CSF sPDGFRβ continually increased since age of 20 years, followed by the increases of phosphorylated tau-181 (P-tau181) and total tau (T-tau) at the age of 22.2 years and 31.7 years, respectively; CSF Aβ42 began to decline since the age of 39.6 years, indicating Aβ deposition.",
        context:
          "Pericyte injury (CSF sPDGFRβ) is earliest AD biomarker, preceding tau and Aβ",
        projectRef:
          "Cross-disease biomarker: sPDGFRβ timing in AD, peaks at MCI",
          fragmentText: "In lifetime, CSF sPDGFR continually increased since age",
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
          "TBI patients showed progressive volume loss regardless of injury severity over several years, and TAI was independently associated with accelerated brain atrophy.",
        context:
          "Progressive brain atrophy continues for years after TBI regardless of severity",
        projectRef:
          "Cross-disease biomarker: TBI progressive neurodegeneration",
          fragmentText: "TBI patients showed progressive volume loss regardless of",
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
          fragmentText: "lowering the ferroptosis threshold",
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
          "Persistent neurological and neuropsychiatric symptoms affect a substantial fraction of people after COVID-19 and represent a major component of the post-acute COVID-19 syndrome, also known as long COVID.",
        context:
          "Review of post-acute COVID-19 neurological impact mechanisms",
        projectRef:
          "Kinetics model Part IX: chemo-brain parallel for COVID brain fog",
          fragmentText: "Persistent neurological and neuropsychiatric symptoms affect a substantial",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "gibson-2018-cell",
    title:
      "Methotrexate chemotherapy induces persistent tri-glial dysregulation that underlies chemotherapy-related cognitive impairment",
    authors: "Gibson EM, Nagaraja S, Ocampo A, et al.",
    journal: "Cell",
    year: 2018,
    doi: "10.1016/j.cell.2018.10.049",
    pmid: "30528430",
    url: "https://pubmed.ncbi.nlm.nih.gov/30528430/",
    tags: ["oligodendrocyte", "microglia", "astrocyte"],
    citations: [
      {
        citationId: "gibson-2018-cell-c1",
        sourceId: "gibson-2018-cell",
        quote:
          "Methotrexate chemotherapy induces persistent tri-glial dysregulation with microglial activation, oligodendrocyte loss, and astrocyte reactivity",
        context:
          "Establishes the tri-glial dysregulation model underlying cognitive impairment",
        projectRef:
          "Kinetics model Part IX: brain fog tri-glial mechanism reference",
          fragmentText: "Methotrexate Chemotherapy Induces Persistent Tri-glial Dysregulation",
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
          "We identify chemokines--including CCL11 (also known as eotaxin)--the plasma levels of which correlate with reduced neurogenesis in heterochronic parabionts and aged mice, and the levels of which are increased in the plasma and cerebrospinal fluid of healthy ageing humans.",
        context:
          "CCL11/eotaxin increases with age and correlates with reduced neurogenesis",
        projectRef:
          "Kinetics model Part IX: CCL11 as brain fog mediator",
          fragmentText: "We identify chemokines--including CCL11 also known as eotaxin--the",
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
          "Our results provided evidence that Aβ accumulation starts in all brain regions simultaneously and that its spatiotemporal distribution is due to heterogeneous regional carrying capacities for the aggregated protein rather than to longer-term spreading from seed regions.",
        context:
          "Amyloid accumulation follows logistic growth with heterogeneous regional carrying capacities",
        projectRef:
          "Kinetics model Part III: mathematical model of amyloid accumulation",
          fragmentText: "Our results provided evidence that A accumulation starts",
      },
    ],
    verificationStatus: "verified",
  },
];
