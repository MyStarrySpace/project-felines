import type { Source } from "./types";

export const viralReactivationSources: Source[] = [
  // ──────────────────────────────────────────────────────────────────────
  // MECHANISM 1: JmjC DEMETHYLASES
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "liang-2009-natmed",
    title:
      "Inhibition of the histone demethylase LSD1 blocks alpha-herpesvirus lytic replication and reactivation from latency",
    authors: "Liang Y, Vogel JL, Narayanan A, et al.",
    journal: "Nature Medicine",
    year: 2009,
    doi: "10.1038/nm.2051",
    pmid: "19855399",
    url: "https://pubmed.ncbi.nlm.nih.gov/19855399/#:~:text=Inhibition%20of%20the%20histone%20demethylase%20LSD1",
    tags: ["viral", "hsv", "iron"],
    citations: [
      {
        citationId: "liang-2009-natmed-c1",
        sourceId: "liang-2009-natmed",
        quote:
          "Inhibition of the histone demethylase LSD1 blocks alpha-herpesvirus lytic replication and reactivation from latency",
        context:
          "LSD1 inhibition by tranylcypromine blocks HSV reactivation, demonstrating that histone demethylases are required gatekeepers of latency",
        projectRef:
          "Viral reactivation: JmjC mechanism step 3 — demethylase inhibitors block reactivation",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "liang-2013-scitranslmed",
    title:
      "Targeting the JMJD2 histone demethylases to epigenetically control herpesvirus infection and reactivation from latency",
    authors: "Liang Y, Vogel JL, Arbuckle JH, et al.",
    journal: "Science Translational Medicine",
    year: 2013,
    doi: "10.1126/scitranslmed.3005145",
    pmid: "23303604",
    url: "https://pubmed.ncbi.nlm.nih.gov/23303604/#:~:text=Targeting%20the%20JMJD2%20histone%20demethylases%20to",
    tags: ["viral", "hsv", "iron"],
    citations: [
      {
        citationId: "liang-2013-scitranslmed-c1",
        sourceId: "liang-2013-scitranslmed",
        quote:
          "Targeting the JMJD2 histone demethylases to epigenetically control herpesvirus infection and reactivation from latency",
        context:
          "JMJD2 inhibitor ML324 blocks HSV-1 reactivation from latency, confirming iron-dependent demethylases as reactivation gatekeepers",
        projectRef:
          "Viral reactivation: JmjC mechanism step 3 — JMJD2 inhibition blocks HSV-1 reactivation",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "hong-2007-pnas",
    title:
      "Identification of JmjC domain-containing UTX and JMJD3 as histone H3 lysine 27 demethylases",
    authors: "Hong S, Cho YW, Yu LR, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2007,
    doi: "10.1073/pnas.0707292104",
    pmid: "18003914",
    url: "https://pubmed.ncbi.nlm.nih.gov/18003914/#:~:text=Identification%20of%20JmjC%20domain%20containing%20UTX%20and",
    tags: ["viral", "iron"],
    citations: [
      {
        citationId: "hong-2007-pnas-c1",
        sourceId: "hong-2007-pnas",
        quote:
          "Identification of JmjC domain-containing UTX and JMJD3 as histone H3 lysine 27 demethylases",
        context:
          "Identified JmjC domain demethylases as H3K27-specific enzymes requiring Fe2+ and alpha-ketoglutarate as cofactors",
        projectRef:
          "Viral reactivation: JmjC mechanism step 1 — JmjC domain identification",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "yang-2017-plospathogens",
    title:
      "SUMO modification of a heterochromatin histone demethylase JMJD2A enables viral gene transactivation and viral replication",
    authors: "Yang WS, Campbell M, Chang PC",
    journal: "PLOS Pathogens",
    year: 2017,
    doi: "10.1371/journal.ppat.1006216",
    pmid: "28212444",
    url: "https://pubmed.ncbi.nlm.nih.gov/28212444/#:~:text=SUMO%20modification%20of%20a%20heterochromatin%20histone",
    tags: ["viral", "iron"],
    citations: [
      {
        citationId: "yang-2017-plospathogens-c1",
        sourceId: "yang-2017-plospathogens",
        quote:
          "SUMO modification of a heterochromatin histone demethylase JMJD2A enables viral gene transactivation and viral replication",
        context:
          "JMJD2A (iron-dependent JmjC demethylase) is required for KSHV lytic reactivation",
        projectRef:
          "Viral reactivation: JmjC mechanism — JMJD2A in KSHV reactivation",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "messer-2015-jvirol",
    title:
      "Inhibition of H3K27me3-specific histone demethylases JMJD3 and UTX blocks reactivation of herpes simplex virus 1 in trigeminal ganglion neurons",
    authors: "Messer HGP, Jacobs D, Dhummakupt A, et al.",
    journal: "Journal of Virology",
    year: 2015,
    doi: "10.1128/JVI.03052-14",
    pmid: "25552720",
    url: "https://pubmed.ncbi.nlm.nih.gov/25552720/#:~:text=Inhibition%20of%20H3K27me3%20specific%20histone%20demethylases%20JMJD3",
    tags: ["viral", "hsv", "iron"],
    citations: [
      {
        citationId: "messer-2015-jvirol-c1",
        sourceId: "messer-2015-jvirol",
        quote:
          "Inhibition of H3K27me3-specific histone demethylases JMJD3 and UTX blocks reactivation of herpes simplex virus 1 in trigeminal ganglion neurons",
        context:
          "GSK-J4 (JMJD3/UTX inhibitor) blocks HSV-1 reactivation from trigeminal ganglia neurons",
        projectRef:
          "Viral reactivation: JmjC mechanism — JMJD3/UTX inhibition blocks HSV-1",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // MECHANISM 2: GSH DEPLETION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "ye-2011-plospathogens",
    title:
      "Reactive oxygen species hydrogen peroxide mediates Kaposi's sarcoma-associated herpesvirus reactivation from latency",
    authors: "Ye F, Zhou F, Bedolla RG, et al.",
    journal: "PLOS Pathogens",
    year: 2011,
    doi: "10.1371/journal.ppat.1002054",
    pmid: "21625536",
    url: "https://pubmed.ncbi.nlm.nih.gov/21625536/#:~:text=Reactive%20oxygen%20species%20hydrogen%20peroxide%20mediates",
    tags: ["viral", "ferroptosis"],
    citations: [
      {
        citationId: "ye-2011-plospathogens-c1",
        sourceId: "ye-2011-plospathogens",
        quote:
          "Reactive oxygen species hydrogen peroxide mediates Kaposi's sarcoma-associated herpesvirus reactivation from latency",
        context:
          "H2O2 mediates KSHV reactivation via ROS; GSH depletion and oxidative stress trigger lytic switch",
        projectRef:
          "Viral reactivation: GSH mechanism step 2 — oxidative stress activates KSHV lytic switch",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "li-2011-jvirol",
    title:
      "Oxidative stress induces reactivation of Kaposi's sarcoma-associated herpesvirus and death of primary effusion lymphoma cells",
    authors: "Li X, Feng J, Sun R",
    journal: "Journal of Virology",
    year: 2011,
    doi: "10.1128/JVI.01742-10",
    pmid: "21068240",
    url: "https://pubmed.ncbi.nlm.nih.gov/21068240/#:~:text=Oxidative%20stress%20induces%20reactivation%20of%20Kaposis",
    tags: ["viral", "ferroptosis"],
    citations: [
      {
        citationId: "li-2011-jvirol-c1",
        sourceId: "li-2011-jvirol",
        quote:
          "Oxidative stress induces reactivation of Kaposi's sarcoma-associated herpesvirus and death of primary effusion lymphoma cells",
        context:
          "GSH depletion via diethyl maleate reactivates KSHV; direct evidence that antioxidant depletion triggers reactivation",
        projectRef:
          "Viral reactivation: GSH mechanism step 2 — GSH depletion reactivates KSHV",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // MECHANISM 3: GR ACTIVATION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "jones-2023-ccmr",
    title:
      "Intimate Relationship Between Stress and Human Alpha-Herpes Virus 1 (HSV-1) Reactivation from Latency",
    authors: "Jones C",
    journal: "Current Clinical Microbiology Reports",
    year: 2023,
    doi: "10.1007/s40588-023-00202-9",
    pmid: "38173564",
    url: "https://pubmed.ncbi.nlm.nih.gov/38173564/#:~:text=Intimate%20Relationship%20Between%20Stress%20and%20Human",
    tags: ["viral", "hsv"],
    citations: [
      {
        citationId: "jones-2023-ccmr-c1",
        sourceId: "jones-2023-ccmr",
        quote:
          "Intimate Relationship Between Stress and Human Alpha-Herpes Virus 1 (HSV-1) Reactivation from Latency",
        context:
          "GR activation via S134 phosphorylation by oxidative stress provides ligand-independent reactivation signal for HSV-1",
        projectRef:
          "Viral reactivation: GR mechanism — ligand-independent GR activation and HSV-1",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // MECHANISM 4: HETEROCHROMATIN EROSION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "mathew-2010-frbm",
    title: "Accumulation of oxidized proteins in Herpesvirus infected cells",
    authors: "Mathew SS, Bryant PW, Burch AD",
    journal: "Free Radical Biology and Medicine",
    year: 2010,
    doi: "10.1016/j.freeradbiomed.2010.04.026",
    pmid: "20441790",
    url: "https://pubmed.ncbi.nlm.nih.gov/20441790/#:~:text=Accumulation%20of%20oxidized%20proteins%20in%20Herpesvirus",
    tags: ["viral", "hsv", "ferroptosis"],
    citations: [
      {
        citationId: "mathew-2010-frbm-c1",
        sourceId: "mathew-2010-frbm",
        quote:
          "Accumulation of oxidized proteins in Herpesvirus infected cells",
        context:
          "ROS-driven protein carbonylation damages heterochromatin maintenance proteins during herpesvirus infection",
        projectRef:
          "Viral reactivation: Heterochromatin mechanism — oxidized proteins erode viral silencing",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // LATENCY / CHROMATIN BACKGROUND
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "bloom-2010-bba",
    title: "Epigenetic regulation of latent HSV-1 gene expression",
    authors: "Bloom DC, Giordani NV, Kwiatkowski DL",
    journal: "Biochimica et Biophysica Acta",
    year: 2010,
    doi: "10.1016/j.bbagrm.2009.12.001",
    pmid: "20045093",
    url: "https://pubmed.ncbi.nlm.nih.gov/20045093/#:~:text=Epigenetic%20regulation%20of%20latent%20HSV%201%20gene",
    tags: ["viral", "hsv"],
    citations: [
      {
        citationId: "bloom-2010-bba-c1",
        sourceId: "bloom-2010-bba",
        quote:
          "Epigenetic regulation of latent HSV-1 gene expression",
        context:
          "Review of H3K9me2/me3 and H3K27me3 repressive marks on HSV-1 lytic promoters during latency",
        projectRef:
          "Viral reactivation: Latency background — epigenetic silencing of lytic genes",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "knipe-2008-nrmicro",
    title:
      "Chromatin control of herpes simplex virus lytic and latent infection",
    authors: "Knipe DM, Cliffe A",
    journal: "Nature Reviews Microbiology",
    year: 2008,
    doi: "10.1038/nrmicro1794",
    pmid: "18264117",
    url: "https://pubmed.ncbi.nlm.nih.gov/18264117/#:~:text=Chromatin%20control%20of%20herpes%20simplex%20virus",
    tags: ["viral", "hsv"],
    citations: [
      {
        citationId: "knipe-2008-nrmicro-c1",
        sourceId: "knipe-2008-nrmicro",
        quote:
          "Chromatin control of herpes simplex virus lytic and latent infection",
        context:
          "Foundational review of chromatin-based viral latency; heterochromatin maintenance as the gate to reactivation",
        projectRef:
          "Viral reactivation: Latency background — chromatin control of herpesvirus latency",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "cliffe-2015-cellhostmicrobe",
    title:
      "Neuronal Stress Pathway Mediating a Histone Methyl/Phospho Switch Is Required for Herpes Simplex Virus Reactivation",
    authors: "Cliffe AR, Arbuckle JH, Vogel JL, et al.",
    journal: "Cell Host & Microbe",
    year: 2015,
    doi: "10.1016/j.chom.2015.11.007",
    pmid: "26651941",
    url: "https://pubmed.ncbi.nlm.nih.gov/26651941/#:~:text=Neuronal%20Stress%20Pathway%20Mediating%20a%20Histone",
    tags: ["viral", "hsv"],
    citations: [
      {
        citationId: "cliffe-2015-cellhostmicrobe-c1",
        sourceId: "cliffe-2015-cellhostmicrobe",
        quote:
          "Neuronal Stress Pathway Mediating a Histone Methyl/Phospho Switch Is Required for Herpes Simplex Virus Reactivation",
        context:
          "JNK-mediated histone methyl/phospho switch triggers HSV-1 reactivation; DLK pathway connects neuronal stress to epigenetic derepression",
        projectRef:
          "Viral reactivation: JmjC mechanism — stress-mediated epigenetic switch",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // EPIDEMIOLOGICAL EVIDENCE
  // ──────────────────────────────────────────────────────────────────────

  // eyting-2025-nature — already in epidemiology module

  {
    id: "xie-2025-cell",
    title:
      "The effect of shingles vaccination at different stages of the dementia disease course",
    authors: "Xie M, Eyting M, Bommer C, et al.",
    journal: "Cell",
    year: 2025,
    doi: "10.1016/j.cell.2025.11.007",
    pmid: "41338191",
    url: "https://pubmed.ncbi.nlm.nih.gov/41338191/#:~:text=effect%20of%20shingles%20vaccination%20at%20different",
    tags: ["viral", "epidemiology", "alzheimers"],
    citations: [
      {
        citationId: "xie-2025-cell-c1",
        sourceId: "xie-2025-cell",
        quote:
          "The effect of shingles vaccination at different stages of the dementia disease course",
        context:
          "Extended analysis confirmed dementia reduction and showed lower MCI and dementia mortality in vaccinated cohort",
        projectRef:
          "Viral reactivation: Epidemiological evidence — extended vaccine analysis",
      },
    ],
    verificationStatus: "verified",
  },
  // taquet-2024-natmed — already in epidemiology module

  {
    id: "polisky-2025-natmed",
    title:
      "Varicella-zoster virus reactivation and the risk of dementia",
    authors: "Polisky V, Littmann M, Triastcyn A, et al.",
    journal: "Nature Medicine",
    year: 2025,
    doi: "10.1038/s41591-025-03972-5",
    pmid: "41053450",
    url: "https://pubmed.ncbi.nlm.nih.gov/41053450/#:~:text=Varicella%20zoster%20virus%20reactivation%20and%20the%20risk",
    tags: ["viral", "epidemiology", "alzheimers"],
    citations: [
      {
        citationId: "polisky-2025-natmed-c1",
        sourceId: "polisky-2025-natmed",
        quote:
          "Varicella-zoster virus reactivation and the risk of dementia",
        context:
          "100M-person EHR study: recurrent herpes zoster increased dementia risk; vaccination reduced it dose-dependently",
        projectRef:
          "Viral reactivation: Epidemiological evidence — largest EHR study confirming reactivation-dementia link",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "cairns-2022-jad",
    title:
      "Potential Involvement of Varicella Zoster Virus in Alzheimer's Disease via Reactivation of Quiescent Herpes Simplex Virus Type 1",
    authors: "Cairns DM, Itzhaki RF, Kaplan DL",
    journal: "Journal of Alzheimer's Disease",
    year: 2022,
    doi: "10.3233/JAD-220287",
    pmid: "35754275",
    url: "https://pubmed.ncbi.nlm.nih.gov/35754275/#:~:text=Potential%20Involvement%20of%20Varicella%20Zoster%20Virus",
    tags: ["viral", "hsv", "alzheimers"],
    citations: [
      {
        citationId: "cairns-2022-jad-c1",
        sourceId: "cairns-2022-jad",
        quote:
          "Potential Involvement of Varicella Zoster Virus in Alzheimer's Disease via Reactivation of Quiescent Herpes Simplex Virus Type 1",
        context:
          "VZV triggers HSV-1 reactivation in latently infected neural stem cells, producing AD-like changes. VZV alone produces neither Abeta nor pTau.",
        projectRef:
          "Viral reactivation: Epidemiological evidence — two-stage cascade VZV to HSV-1 to AD",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // CROSS-VIRUS / IRON BIOLOGY
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "readhead-2018-neuron",
    title:
      "Multiscale Analysis of Independent Alzheimer's Cohorts Finds Disruption of Molecular, Genetic, and Clinical Networks by Human Herpesvirus",
    authors: "Readhead B, Haure-Mirande JV, Funk CC, et al.",
    journal: "Neuron",
    year: 2018,
    doi: "10.1016/j.neuron.2018.05.023",
    pmid: "29937276",
    url: "https://pubmed.ncbi.nlm.nih.gov/29937276/#:~:text=Multiscale%20Analysis%20of%20Independent%20Alzheimers%20Cohorts",
    tags: ["viral", "alzheimers"],
    citations: [
      {
        citationId: "readhead-2018-neuron-c1",
        sourceId: "readhead-2018-neuron",
        quote:
          "Multiscale Analysis of Independent Alzheimer's Cohorts Finds Disruption of Molecular, Genetic, and Clinical Networks by Human Herpesvirus",
        context:
          "HHV-6A and HHV-7 enriched in AD brains across independent cohorts; viral abundance correlated with clinical severity",
        projectRef:
          "Viral reactivation: Cross-virus table — HHV-6A in AD brains",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "bjornevik-2022-science",
    title:
      "Longitudinal analysis reveals high prevalence of Epstein-Barr virus associated with multiple sclerosis",
    authors: "Bjornevik K, Cortese M, Healy BC, et al.",
    journal: "Science",
    year: 2022,
    doi: "10.1126/science.abj8222",
    pmid: "35025605",
    url: "https://pubmed.ncbi.nlm.nih.gov/35025605/#:~:text=Longitudinal%20analysis%20reveals%20high%20prevalence%20of",
    tags: ["viral", "ebv", "ms"],
    citations: [
      {
        citationId: "bjornevik-2022-science-c1",
        sourceId: "bjornevik-2022-science",
        quote:
          "Longitudinal analysis reveals high prevalence of Epstein-Barr virus associated with multiple sclerosis",
        context:
          "EBV infection increased MS risk 32-fold; virtually all MS patients were EBV-seropositive",
        projectRef:
          "Viral reactivation: Cross-virus table — EBV and MS risk",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "drakesmith-2008-nrmicro",
    title: "Viral infection and iron metabolism",
    authors: "Drakesmith H, Prentice A",
    journal: "Nature Reviews Microbiology",
    year: 2008,
    doi: "10.1038/nrmicro1930",
    pmid: "18552864",
    url: "https://pubmed.ncbi.nlm.nih.gov/18552864/#:~:text=Viral%20infection%20and%20iron%20metabolism",
    tags: ["viral", "iron"],
    citations: [
      {
        citationId: "drakesmith-2008-nrmicro-c1",
        sourceId: "drakesmith-2008-nrmicro",
        quote: "Viral infection and iron metabolism",
        context:
          "Comprehensive review of how pathogens manipulate host iron homeostasis for replication advantage",
        projectRef:
          "Viral reactivation: Cross-virus — pathogens manipulate iron",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "gilden-2009-lancetneurol",
    title:
      "Varicella zoster virus vasculopathies: diverse clinical manifestations, laboratory features, pathogenesis, and treatment",
    authors: "Gilden D, Cohrs RJ, Mahalingam R, et al.",
    journal: "The Lancet Neurology",
    year: 2009,
    doi: "10.1016/S1474-4422(09)70134-6",
    pmid: "19608099",
    url: "https://pubmed.ncbi.nlm.nih.gov/19608099/#:~:text=Varicella%20zoster%20virus%20vasculopathies%3A%20diverse%20clinical",
    tags: ["viral", "vascular"],
    citations: [
      {
        citationId: "gilden-2009-lancetneurol-c1",
        sourceId: "gilden-2009-lancetneurol",
        quote:
          "Varicella zoster virus vasculopathies: diverse clinical manifestations, laboratory features, pathogenesis, and treatment",
        context:
          "VZV vasculopathy targets cerebral vessels, particularly in basal ganglia regions that are also the most iron-rich brain structures",
        projectRef:
          "Viral reactivation: Age window — VZV vasculopathy targets iron-rich regions",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // IRON / BRAIN AGING
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "aquino-2009-radiology",
    title:
      "Age-related iron deposition in the basal ganglia: quantitative analysis in healthy subjects",
    authors: "Aquino D, Bizzi A, Grisoli M, et al.",
    journal: "Radiology",
    year: 2009,
    doi: "10.1148/radiol.2522081399",
    pmid: "19561255",
    url: "https://pubmed.ncbi.nlm.nih.gov/19561255/#:~:text=Age%20related%20iron%20deposition%20in%20the%20basal",
    tags: ["iron", "aging", "imaging"],
    citations: [
      {
        citationId: "aquino-2009-radiology-c1",
        sourceId: "aquino-2009-radiology",
        quote:
          "Age-related iron deposition in the basal ganglia: quantitative analysis in healthy subjects",
        context:
          "Basal ganglia iron concentration plateaus at age 50-60; most iron-rich structures AND primary VZV vasculopathy targets",
        projectRef:
          "Viral reactivation: Age window table — basal ganglia iron plateau",
      },
    ],
    verificationStatus: "verified",
  },
  // hallgren-1958-jneurochem — already in iron-ferroptosis module

  {
    id: "xiang-2026-natcomm",
    title:
      "Counteracting FOX proteins epigenetically control the herpesvirus lytic-latent balance",
    authors: "Xiang Y, Yang X, Zhang J, et al.",
    journal: "Nature Communications",
    year: 2026,
    doi: "10.1038/s41467-026-68915-1",
    url: "https://www.nature.com/articles/s41467-026-68915-1#:~:text=Counteracting%20FOX%20proteins%20epigenetically%20control%20the",
    tags: ["viral", "hsv"],
    citations: [
      {
        citationId: "xiang-2026-natcomm-c1",
        sourceId: "xiang-2026-natcomm",
        quote:
          "Counteracting FOX proteins epigenetically control the herpesvirus lytic-latent balance",
        context:
          "FOX transcription factors regulate herpesvirus latency; neurons express repressive Fox genes abundantly, limiting reactivation",
        projectRef:
          "Viral reactivation: Latency background — FOX transcription factor control of latency",
      },
    ],
    verificationStatus: "verified",
  },
];
