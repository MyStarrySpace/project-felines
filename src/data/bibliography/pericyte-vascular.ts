import type { Source } from "./types";

export const pericyteVascularSources: Source[] = [
  {
    id: "armulik-2010-nature",
    title: "Pericytes regulate the blood-brain barrier",
    authors: "Armulik A, Genové G, Mäe M, et al.",
    journal: "Nature",
    year: 2010,
    doi: "10.1038/nature09522",
    pmid: "20944627",
    url: "https://pubmed.ncbi.nlm.nih.gov/20944627/",
    tags: ["pericyte", "vascular"],
    citations: [
      {
        citationId: "armulik-2010-nature-c1",
        sourceId: "armulik-2010-nature",
        quote:
          "Pericytes are necessary for blood-brain barrier formation and that pericyte-endothelial cell interactions regulate BBB-specific gene expression patterns in endothelial cells",
        context:
          "Establishes pericytes as essential regulators of BBB integrity",
        projectRef:
          "Kinetics model Step 2: AQP4 depolarization onset within hours of pericyte loss",
          fragmentText: "BBB-specific gene expression patterns in endothelial cells",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "roth-2025-jcbfm",
    title:
      "Pericyte response to ischemic stroke precedes endothelial cell death and blood-brain barrier breakdown",
    authors: "Roth M, Carlsson R, Buizza C, et al.",
    journal: "Journal of Cerebral Blood Flow and Metabolism",
    year: 2025,
    doi: "10.1177/0271678X241261946",
    pmid: "39053491",
    url: "https://pubmed.ncbi.nlm.nih.gov/39053491/",
    tags: ["pericyte", "vascular"],
    citations: [
      {
        citationId: "roth-2025-jcbfm-c1",
        sourceId: "roth-2025-jcbfm",
        quote:
          "We find that approximately 30% of the pericyte population dies as early as 1 hour after stroke, while ca 50% express markers that indicate activation.",
        context:
          "Pericyte death (30%) and activation (50%) within 1 hour of stroke onset",
        projectRef:
          "Kinetics model Step 1: pericyte death onset, detachment, BBB leakage timeline",
          fragmentText: "We find that approximately 30 of the pericyte",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "qiao-2024-jmv",
    title:
      "SARS-CoV-2 induces blood-brain barrier and choroid plexus barrier impairments and vascular inflammation in mice",
    authors: "Qiao H, Deng X, Qiu L, et al.",
    journal: "Journal of Medical Virology",
    year: 2024,
    doi: "10.1002/jmv.29671",
    pmid: "38747003",
    url: "https://pubmed.ncbi.nlm.nih.gov/38747003/",
    tags: ["pericyte", "vascular", "covid"],
    citations: [
      {
        citationId: "qiao-2024-jmv-c1",
        sourceId: "qiao-2024-jmv",
        quote:
          "SARS-CoV-2 causes pericyte damage, tight junction loss, endothelial activation in mouse models",
        context: "COVID-19 directly damages BBB pericytes",
        projectRef:
          "Cross-disease: COVID-19 pericyte/vascular pillar evidence",
          fragmentText: "pericyte damage, tight junction loss, endothelial activation",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "frydenlund-2006-pnas",
    title:
      "Temporary loss of perivascular aquaporin-4 in neocortex after transient middle cerebral artery occlusion in mice",
    authors: "Frydenlund DS, Bhardwaj A, Otsuka T, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2006,
    doi: "10.1073/pnas.0605796103",
    pmid: "16938871",
    url: "https://pubmed.ncbi.nlm.nih.gov/16938871/",
    tags: ["pericyte", "vascular", "astrocyte"],
    citations: [
      {
        citationId: "frydenlund-2006-pnas-c1",
        sourceId: "frydenlund-2006-pnas",
        quote:
          "Temporary loss of perivascular aquaporin-4 in neocortex after transient middle cerebral artery occlusion",
        context: "AQP4 depolarization after ischemic insult",
        projectRef: "Kinetics model Step 2: AQP4 redistribution timeline",
        fragmentText: "Temporary loss of perivascular aquaporin-4 in neocortex after",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "haj-yasein-2011-pnas",
    title:
      "Glial-conditional deletion of aquaporin-4 (Aqp4) reduces blood-brain water uptake and confers barrier function on perivascular astrocyte endfeet",
    authors: "Haj-Yasein NN, Vindedal GF, Eilert-Olsen M, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2011,
    doi: "10.1073/pnas.1110655108",
    pmid: "21990350",
    url: "https://pubmed.ncbi.nlm.nih.gov/21990350/",
    tags: ["pericyte", "vascular", "astrocyte"],
    citations: [
      {
        citationId: "haj-yasein-2011-pnas-c1",
        sourceId: "haj-yasein-2011-pnas",
        quote:
          "Compared with litter controls, glial-conditional Aqp4 knockout mice showed a 31% reduction in brain water uptake after systemic hypoosmotic stress and a delayed postnatal resorption of brain water.",
        context:
          "AQP4 knockout reduces brain water uptake by 31% (BBB water transport, not glymphatic clearance)",
        projectRef:
          "Kinetics model Step 2: water uptake reduction in glial AQP4 KO",
          fragmentText: "Compared with litter controls, glial-conditional Aqp4 knockout mice",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "tachibana-2019-braindev",
    title:
      "Clasmatodendrosis is associated with dendritic spines and does not represent autophagic astrocyte death in influenza-associated encephalopathy",
    authors: "Tachibana M, Mohri I, Hirata I, et al.",
    journal: "Brain & Development",
    year: 2019,
    doi: "10.1016/j.braindev.2018.07.008",
    pmid: "30057207",
    url: "https://pubmed.ncbi.nlm.nih.gov/30057207/",
    tags: ["astrocyte", "vascular"],
    citations: [
      {
        citationId: "tachibana-2019-braindev-c1",
        sourceId: "tachibana-2019-braindev",
        quote:
          "Clasmatodendrosis was present in all examined regions of the IAE brains, but none of the control brains. Furthermore, whereas aquaporin 4 was predominantly detected in the perivascular endfeet of astrocytes in the control brains, its primary localization site shifted to the fragmented perisynaptic processes in the IAE brains.",
        context:
          "Clasmatodendrosis with AQP4 redistribution from perivascular endfeet to fragmented processes",
        projectRef:
          "Kinetics model Step 2b: clasmatodendrosis and AQP4 redistribution",
          fragmentText: "Clasmatodendrosis was present in all examined regions of",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kim-2023-eid",
    title: "Neurologic Effects of SARS-CoV-2 Transmitted among Dogs",
    authors: "Kim DH, Kim DY, Kim KS, et al.",
    journal: "Emerging Infectious Diseases",
    year: 2023,
    doi: "10.3201/eid2911.230804",
    pmid: "37877548",
    url: "https://pubmed.ncbi.nlm.nih.gov/37877548/",
    tags: ["pericyte", "vascular", "covid"],
    citations: [
      {
        citationId: "kim-2023-eid-c1",
        sourceId: "kim-2023-eid",
        quote:
          "Decreased pericyte coverage, BBB resembling small vessel disease in canine model",
        context:
          "Animal model showing COVID-induced BBB damage resembles vascular dementia",
        projectRef:
          "Cross-disease: COVID-19 pericyte/vascular pillar evidence",
          fragmentText: "resembling small vessel disease",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "nation-2019-natmed",
    title:
      "Blood-brain barrier breakdown is an early biomarker of human cognitive dysfunction",
    authors: "Nation DA, Sweeney MD, Montagne A, et al.",
    journal: "Nature Medicine",
    year: 2019,
    doi: "10.1038/s41591-018-0297-y",
    pmid: "30643288",
    url: "https://pubmed.ncbi.nlm.nih.gov/30643288/",
    tags: ["pericyte", "vascular", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "nation-2019-natmed-c1",
        sourceId: "nation-2019-natmed",
        quote:
          "Blood-brain barrier breakdown is an early biomarker of human cognitive dysfunction",
        context:
          "CSF sPDGFRβ elevated early in cognitive decline, independent of amyloid/tau",
        projectRef:
          "Cross-disease biomarker validation: sPDGFRβ as early AD marker",
          fragmentText: "Blood-brain barrier breakdown is an early biomarker of",
      },
      {
        citationId: "nation-2019-natmed-c2",
        sourceId: "nation-2019-natmed",
        quote:
          "brain capillary damage using a novel cerebrospinal fluid biomarker of BBB-associated capillary mural cell pericyte, soluble platelet-derived growth factor receptor-\u03B2",
        context: "sPDGFR\u03B2 shed from damaged pericytes as BBB breakdown biomarker",
        projectRef:
          "Pillars section: Neurovascular layer pericyte loss evidence",
          fragmentText: "brain capillary damage using a novel cerebrospinal fluid",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "miners-2019-alzrt",
    title:
      "CSF evidence of pericyte damage in Alzheimer's disease is associated with markers of blood-brain barrier dysfunction and disease pathology",
    authors: "Miners JS, Kehoe PG, Love S, et al.",
    journal: "Alzheimer's Research & Therapy",
    year: 2019,
    doi: "10.1186/s13195-019-0534-8",
    pmid: "31521199",
    url: "https://pubmed.ncbi.nlm.nih.gov/31521199/",
    tags: ["pericyte", "vascular", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "miners-2019-alzrt-c1",
        sourceId: "miners-2019-alzrt",
        quote:
          "CSF sPDGFRβ level was significantly increased in AD (p = 0.0038) and correlated positively with albumin (r = 0.45, p = 0.007), total tau (r = 0.50, p = 0.0017) and phosphorylated tau (r = 0.41, p = 0.013) in AD but not in controls.",
        context:
          "CSF sPDGFRβ correlates with BBB dysfunction and tau pathology in AD",
        projectRef:
          "Cross-disease biomarker validation: AD sPDGFRβ correlations",
          fragmentText: "CSF sPDGFR level was significantly increased in AD",
      },
    ],
    verificationStatus: "verified",
  },
];
