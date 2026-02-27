import type { Source } from "./types";

export const ironFerrOptosisSources: Source[] = [
  {
    id: "devos-2022-nejm",
    title: "Trial of Deferiprone in Parkinson's Disease",
    authors: "Devos D, Labreuche J, Rascol O, et al.",
    journal: "New England Journal of Medicine",
    year: 2022,
    doi: "10.1056/NEJMoa2209254",
    pmid: "36449420",
    url: "https://pubmed.ncbi.nlm.nih.gov/36449420/",
    tags: ["iron", "parkinsons", "clinical-trials"],
    citations: [
      {
        citationId: "devos-2022-nejm-c1",
        sourceId: "devos-2022-nejm",
        quote:
          "Deferiprone reduced substantia nigra iron but worsened motor symptoms in Parkinson's disease",
        context:
          "FAIRPARK-II: iron chelation worsened PD. Supports maldistribution model, not excess",
        projectRef:
          "Framework summary: Why every major trial has failed (Deferiprone/FAIRPARK-II)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "agrawal-2018-frbm",
    title:
      "Brain mitochondrial iron accumulates in Huntington's disease, mediates mitochondrial dysfunction, and can be removed pharmacologically",
    authors: "Agrawal S, Fox J, Bhatt Thyagarajan B, Fox JH.",
    journal: "Free Radical Biology and Medicine",
    year: 2018,
    doi: "10.1016/j.freeradbiomed.2018.04.002",
    pmid: "29625173",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5940499/#:~:text=deferiprone%20removed%20mitochondrial%20iron",
    tags: ["iron", "huntingtons"],
    citations: [
      {
        citationId: "agrawal-2018-frbm-c1",
        sourceId: "agrawal-2018-frbm",
        quote:
          "A 10-day oral deferiprone treatment in 9-week R6/2 HD mice indicated that deferiprone removed mitochondrial iron, restored mitochondrial potentials, decreased lipid peroxidation, and improved motor endurance.",
        context:
          "Preclinical only. HD has genuine mitochondrial iron accumulation (mutant HTT disrupts frataxin), making chelation potentially rational unlike AD/PD maldistribution.",
        location: "Abstract",
        projectRef:
          "Drug browser: Deferiprone (HD) detail tooltip",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "seo-2025-natcomms",
    title:
      "Distinct brain alterations and neurodegenerative processes in cognitive impairment associated with post-acute sequelae of COVID-19",
    authors: "Seo D, Choi Y, Jeong E, et al.",
    journal: "Nature Communications",
    year: 2025,
    doi: "10.1038/s41467-025-65597-z",
    pmid: "41298414",
    url: "https://pubmed.ncbi.nlm.nih.gov/41298414/",
    tags: ["iron", "covid", "imaging", "biomarkers"],
    citations: [
      {
        citationId: "seo-2025-natcomms-c1",
        sourceId: "seo-2025-natcomms",
        quote:
          "Increased paramagnetic susceptibility (QSM) in hippocampus in Cog-PASC patients at 1 year post-infection",
        context:
          "Brain iron does NOT clear after COVID. Elevated at 1 year in cognitively impaired Long COVID patients",
        projectRef:
          "Kinetics model: iron does not clear in Long COVID (critical update)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "hanson-2024-natimmunol",
    title:
      "Iron dysregulation and inflammatory stress erythropoiesis associates with long-term outcome of COVID-19",
    authors: "Hanson AL, Mulè MP, Ruffieux H, et al.",
    journal: "Nature Immunology",
    year: 2024,
    doi: "10.1038/s41590-024-01754-8",
    pmid: "38429458",
    url: "https://pubmed.ncbi.nlm.nih.gov/38429458/",
    tags: ["iron", "covid", "biomarkers"],
    citations: [
      {
        citationId: "hanson-2024-natimmunol-c1",
        sourceId: "hanson-2024-natimmunol",
        quote:
          "Iron maldistribution differentiates those who develop PASC; iron-laden CD16+ classical and CD14+ nonclassical monocytes persist for months",
        context:
          "Iron is compartmentally trapped, not cleared. Low serum iron + high intracellular monocyte iron",
        projectRef:
          "Kinetics model: iron maldistribution syndrome, compartmental trapping",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ayton-2017-brain",
    title:
      "Cerebral quantitative susceptibility mapping predicts amyloid-β-related cognitive decline",
    authors: "Ayton S, Fazlollahi A, Bourgeat P, et al.",
    journal: "Brain",
    year: 2017,
    doi: "10.1093/brain/awx137",
    pmid: "28899019",
    url: "https://pubmed.ncbi.nlm.nih.gov/28899019/",
    tags: ["iron", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "ayton-2017-brain-c1",
        sourceId: "ayton-2017-brain",
        quote:
          "Iron accelerates decline only in amyloid-positive individuals",
        context:
          "Iron acts as accelerator that requires existing amyloid pathology",
        projectRef:
          "Kinetics model Part III: iron kinetics in AD, accelerator role",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ayton-2015-natcomms",
    title:
      "Ferritin levels in the cerebrospinal fluid predict Alzheimer's disease outcomes and are regulated by APOE",
    authors: "Ayton S, Faux NG, Bush AI; Alzheimer's Disease Neuroimaging Initiative.",
    journal: "Nature Communications",
    year: 2015,
    doi: "10.1038/ncomms7760",
    pmid: "25988319",
    url: "https://pubmed.ncbi.nlm.nih.gov/25988319/",
    tags: ["iron", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "ayton-2015-natcomms-c1",
        sourceId: "ayton-2015-natcomms",
        quote:
          "CSF ferritin predicts cognitive decline and is regulated by APOE genotype",
        context:
          "CSF ferritin as prognostic biomarker for AD progression",
        projectRef:
          "Kinetics model Part III: iron kinetics in AD, CSF ferritin predicts decline",
      },
      {
        citationId: "ayton-2015-natcomms-c2",
        sourceId: "ayton-2015-natcomms",
        quote:
          "Ferritin was strongly associated with CSF apolipoprotein E levels and was elevated by the Alzheimer's risk allele, APOE-epsilon4.",
        context:
          "APOE4 elevates CSF ferritin — connects #1 AD risk gene to iron",
        projectRef: "GWAS section: APOE gene card — iron connection",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ayton-2021-alzdement",
    title:
      "Regional brain iron associated with deterioration in Alzheimer's disease: A large cohort study and theoretical significance",
    authors: "Ayton S, Portbury S, Kalinowski P, et al.",
    journal: "Alzheimer's & Dementia",
    year: 2021,
    doi: "10.1002/alz.12282",
    pmid: "33491917",
    url: "https://pubmed.ncbi.nlm.nih.gov/33491917/",
    tags: ["iron", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "ayton-2021-alzdement-c1",
        sourceId: "ayton-2021-alzdement",
        quote:
          "Iron changes appear to occur AFTER the development of AD pathology markers",
        context:
          "Iron is a late marker and accelerator, not the initial cause",
        projectRef:
          "Kinetics model Part III: iron is both trigger (acute) and late marker",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wang-2022-celldeathdiff",
    title:
      "Ferroptosis mediates selective motor neuron death in amyotrophic lateral sclerosis",
    authors: "Wang T, Tomas D, Perera ND, et al.",
    journal: "Cell Death and Differentiation",
    year: 2022,
    doi: "10.1038/s41418-021-00910-z",
    pmid: "34857917",
    url: "https://pubmed.ncbi.nlm.nih.gov/34857917/",
    tags: ["ferroptosis", "als"],
    citations: [
      {
        citationId: "wang-2022-celldeathdiff-c1",
        sourceId: "wang-2022-celldeathdiff",
        quote:
          "GPX4 depletion is early and universal across SOD1, TDP-43, and C9orf72 mouse models; transgenic GPX4 overexpression delayed disease onset and prolonged lifespan",
        context:
          "Ferroptosis is the universal death mechanism across all ALS genetic subtypes",
        projectRef:
          "Cross-disease: ALS/FTD ferroptosis pillar, universal GPX4 depletion",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "peng-2025-natcomms",
    title: "Prion-induced ferroptosis is facilitated by RAC3",
    authors: "Peng H, Pfeiffer S, Varynskyi B, et al.",
    journal: "Nature Communications",
    year: 2025,
    doi: "10.1038/s41467-025-60793-3",
    pmid: "40562790",
    url: "https://pubmed.ncbi.nlm.nih.gov/40562790/",
    tags: ["ferroptosis", "prion"],
    citations: [
      {
        citationId: "peng-2025-natcomms-c1",
        sourceId: "peng-2025-natcomms",
        quote:
          "Both PrPC and infectious CJD prions trigger ferroptotic markers and sensitization; RAC3-expressing cells were specifically lost in CJD-affected cortices",
        context:
          "Breakthrough: ferroptosis confirmed as primary death mechanism in prion disease via RAC3",
        projectRef:
          "Cross-disease: Prion disease ferroptosis confirmation",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "stockwell-2022-cell",
    title:
      "Ferroptosis turns 10: Emerging mechanisms, physiological functions, and therapeutic applications",
    authors: "Stockwell BR.",
    journal: "Cell",
    year: 2022,
    doi: "10.1016/j.cell.2022.06.003",
    pmid: "35803244",
    url: "https://pubmed.ncbi.nlm.nih.gov/35803244/",
    tags: ["ferroptosis"],
    citations: [
      {
        citationId: "stockwell-2022-cell-c1",
        sourceId: "stockwell-2022-cell",
        quote:
          "Ferroptosis is an iron-dependent form of regulated cell death driven by lipid peroxidation",
        context: "Landmark review defining ferroptosis mechanisms",
        projectRef:
          "Kinetics model Step 4: ferroptosis execution pathway",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "jhelum-2020-jneurosci",
    title:
      "Ferroptosis Mediates Cuprizone-Induced Loss of Oligodendrocytes and Demyelination",
    authors: "Jhelum P, Santos-Nogueira E, Teo W, et al.",
    journal: "Journal of Neuroscience",
    year: 2020,
    doi: "10.1523/JNEUROSCI.1749-20.2020",
    pmid: "33106352",
    url: "https://pubmed.ncbi.nlm.nih.gov/33106352/",
    tags: ["ferroptosis", "oligodendrocyte"],
    citations: [
      {
        citationId: "jhelum-2020-jneurosci-c1",
        sourceId: "jhelum-2020-jneurosci",
        quote:
          "Ferroptosis mediates cuprizone-induced loss of oligodendrocytes; oligodendrocyte loss at 2 days",
        context:
          "Oligodendrocytes are uniquely vulnerable to ferroptosis due to high iron and PUFA-rich myelin",
        projectRef:
          "Kinetics model Step 4: ferroptosis execution timeline, OL loss",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "filo-2023-natcomms",
    title:
      "Non-invasive assessment of normal and impaired iron homeostasis in the brain",
    authors: "Filo S, Shaharabani R, Bar Hanin D, et al.",
    journal: "Nature Communications",
    year: 2023,
    doi: "10.1038/s41467-023-40999-z",
    pmid: "37699931",
    url: "https://pubmed.ncbi.nlm.nih.gov/37699931/",
    tags: ["iron", "imaging"],
    citations: [
      {
        citationId: "filo-2023-natcomms-c1",
        sourceId: "filo-2023-natcomms",
        quote:
          "Iron mobilization capacity (transferrin/iron ratio) differs between AD, PD, and controls",
        context:
          "New MRI can distinguish iron forms in vivo; not just total iron matters",
        projectRef:
          "Framework summary: Step 2 iron maldistribution evidence (MRI 2023)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "hallgren-1958-jneurochem",
    title:
      "The effect of age on the non-haemin iron in the human brain",
    authors: "Hallgren B, Sourander P.",
    journal: "Journal of Neurochemistry",
    year: 1958,
    doi: "10.1111/j.1471-4159.1958.tb12607.x",
    pmid: "13611557",
    url: "https://pubmed.ncbi.nlm.nih.gov/13611557/",
    tags: ["iron", "aging"],
    citations: [
      {
        citationId: "hallgren-1958-jneurochem-c1",
        sourceId: "hallgren-1958-jneurochem",
        quote:
          "Non-haemin iron increases with age in human brain; highest in substantia nigra and globus pallidus",
        context:
          "Foundational study on regional brain iron distribution across lifespan",
        projectRef:
          "Kinetics model Step 3: iron content by cell type and brain region",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "sanz-alcazar-2024-redoxbiol",
    title:
      "Deciphering the ferroptosis pathways in dorsal root ganglia of Friedreich ataxia models. The role of LKB1/AMPK, KEAP1, and GSK3β in the impairment of the NRF2 response",
    authors: "Sanz-Alcázar A, Portillo-Carrasquer M, Delaspre F, et al.",
    journal: "Redox Biology",
    year: 2024,
    doi: "10.1016/j.redox.2024.103339",
    pmid: "39243573",
    url: "https://pubmed.ncbi.nlm.nih.gov/39243573/",
    tags: ["ferroptosis", "iron"],
    citations: [
      {
        citationId: "sanz-alcazar-2024-redoxbiol-c1",
        sourceId: "sanz-alcazar-2024-redoxbiol",
        quote:
          "TFR1 upregulated, ferritin decreased, mitochondrial iron accumulation, NRF2 impairment via KEAP1, GSK3β, and LKB1/AMPK pathways; AMPK activation rescues the phenotype",
        context:
          "Detailed ferroptosis pathway in Friedreich ataxia DRG neurons",
        projectRef:
          "Cross-disease: FRDA ferroptosis pathway details",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "patel-2002-jneurosci",
    title:
      "Ceruloplasmin regulates iron levels in the CNS and prevents free radical injury",
    authors: "Patel BN, Dunn RJ, Jeong SY, et al.",
    journal: "The Journal of Neuroscience",
    year: 2002,
    doi: "10.1523/JNEUROSCI.22-15-06578.2002",
    pmid: "12151537",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6758125/#:~:text=oxidizing%20the%20ferrous%20%5BFe%20(II)%5D%20form%20of%20iron%20to%20the%20ferric",
    tags: ["iron"],
    citations: [
      {
        citationId: "patel-2002-jneurosci-c1",
        sourceId: "patel-2002-jneurosci",
        quote:
          "By oxidizing the ferrous [Fe (II)] form of iron to the ferric [Fe (III)] form, Cp promotes iron loading onto transferrin",
        context:
          "Ceruloplasmin ferroxidase activity converts Fe2+ to Fe3+ for safe export",
        projectRef:
          "Iron alternatives section: Ceruloplasmin description",
      },
      {
        citationId: "patel-2002-jneurosci-c2",
        sourceId: "patel-2002-jneurosci",
        quote:
          "GPI\u2013ceruloplasmin in the brain could also potentially play a role in controlling the efflux of ferrous iron via Ireg1 by rapidly oxidizing it to the ferric form as it exits at the cell surface",
        context: "Ceruloplasmin enables ferroportin (Ireg1) mediated iron export in the brain",
        projectRef:
          "Iron alternatives section: Ceruloplasmin ferroportin coupling",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "luck-2012-currtopics",
    title: "Transferrin-mediated cellular iron delivery",
    authors: "Luck AN, Mason AB.",
    journal: "Current Topics in Membranes",
    year: 2012,
    doi: "10.1016/B978-0-12-394390-3.00001-X",
    pmid: "23046645",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4479283/#:~:text=Each%20lobe%20(N-%20and%20C-lobe)%20of%20hTF%20forms%20a%20deep%20cleft",
    tags: ["iron"],
    citations: [
      {
        citationId: "luck-2012-currtopics-c1",
        sourceId: "luck-2012-currtopics",
        quote:
          "Each lobe (N- and C-lobe) of hTF forms a deep cleft which binds a single Fe3+",
        context: "Transferrin binds two Fe3+ ions, one per lobe",
        projectRef:
          "Iron alternatives section: Transferrin description",
      },
      {
        citationId: "luck-2012-currtopics-c2",
        sourceId: "luck-2012-currtopics",
        quote:
          "Fe2+ catalyzed Fenton reactions...reduction of O2 by Fe2+ generates superoxide, which can ultimately lead to the formation of the hydroxyl radical, a powerful oxidant known to damage DNA, proteins and lipids",
        context:
          "When transferrin is saturated, unbound iron drives Fenton chemistry",
        projectRef:
          "Iron alternatives section: Transferrin description (Fenton danger)",
      },
      {
        citationId: "luck-2012-currtopics-c3",
        sourceId: "luck-2012-currtopics",
        quote:
          "iron-bearing hTF in the blood binds tightly to the specific transferrin receptor (TFR), a homodimeric transmembrane protein. After undergoing endocytosis",
        context: "Classic clathrin-dependent receptor-mediated endocytosis pathway for iron delivery",
        projectRef:
          "Iron alternatives section: Transferrin receptor-mediated endocytosis",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "nemeth-2004-science",
    title:
      "Hepcidin regulates cellular iron efflux by binding to ferroportin and inducing its internalization",
    authors: "Nemeth E, Tuttle MS, Powelson J, et al.",
    journal: "Science",
    year: 2004,
    doi: "10.1126/science.1104742",
    pmid: "15514116",
    url: "https://pubmed.ncbi.nlm.nih.gov/15514116/#:~:text=hepcidin%20bound%20to%20ferroportin%20in%20tissue%20culture%20cells",
    tags: ["iron"],
    citations: [
      {
        citationId: "nemeth-2004-science-c1",
        sourceId: "nemeth-2004-science",
        quote:
          "hepcidin bound to ferroportin in tissue culture cells. After binding, ferroportin was internalized and degraded, leading to decreased export of cellular iron",
        context:
          "Hepcidin degrades ferroportin to control iron flow",
        projectRef:
          "Iron alternatives section: Hepcidin description",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "you-2022-celldeath",
    title:
      "Astrocyte-derived hepcidin controls iron traffic at the blood-brain-barrier via regulating ferroportin 1 of microvascular endothelial cells",
    authors: "You L, Yu PP, Dong T, et al.",
    journal: "Cell Death & Disease",
    year: 2022,
    doi: "10.1038/s41419-022-05043-w",
    pmid: "35915080",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9343463/#:~:text=FPN1%20of%20BMVECs%20is%20a%20gateway%20for%20iron%20transport",
    tags: ["iron", "astrocyte", "vascular"],
    citations: [
      {
        citationId: "you-2022-celldeath-c1",
        sourceId: "you-2022-celldeath",
        quote:
          "FPN1 of BMVECs is a gateway for iron transport into the brain from circulation",
        context:
          "Astrocyte hepcidin guards the BBB iron gate",
        projectRef:
          "Iron alternatives section: Hepcidin description (BBB)",
      },
      {
        citationId: "you-2022-celldeath-c2",
        sourceId: "you-2022-celldeath",
        quote:
          "the controller of this gateway is hepcidin secreted by astrocyte at its endfeet through physical contact with BMVECs",
        context: "Astrocyte endfeet secrete hepcidin to regulate endothelial ferroportin",
        projectRef:
          "Iron alternatives section: Astrocyte-derived hepcidin guards BBB",
      },
    ],
    verificationStatus: "verified",
  },
];
