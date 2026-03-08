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
    url: "https://pubmed.ncbi.nlm.nih.gov/36449420/#:~:text=increased%20(worsened)%20by%2015.6%20points%20and%206.3%20points",
    tags: ["iron", "parkinsons", "clinical-trials"],
    citations: [
      {
        citationId: "devos-2022-nejm-c1",
        sourceId: "devos-2022-nejm",
        quote:
          "A total of 372 participants were enrolled; 186 were assigned to receive deferiprone and 186 to receive placebo.",
        context:
          "FAIRPARK-II enrollment and randomization",
        location: "Results",
        projectRef:
          "Framework summary: Why every major trial has failed (Deferiprone/FAIRPARK-II)",
      },
      {
        citationId: "devos-2022-nejm-c2",
        sourceId: "devos-2022-nejm",
        quote:
          "The mean MDS-UPDRS total score at baseline was 34.3 in the deferiprone group and 33.2 in the placebo group and increased (worsened) by 15.6 points and 6.3 points, respectively (difference, 9.3 points; 95% confidence interval, 6.3 to 12.2; P<0.001).",
        context:
          "Motor worsening: deferiprone group declined 2.5× faster than placebo",
        location: "Results",
        projectRef:
          "Drug browser: Deferiprone (PD) detail tooltip — MDS-UPDRS worsening",
      },
      {
        citationId: "devos-2022-nejm-c3",
        sourceId: "devos-2022-nejm",
        quote:
          "Progression of symptoms led to the initiation of dopaminergic therapy in 22.0% of the participants in the deferiprone group and 2.7% of those in the placebo group.",
        context:
          "8× more deferiprone patients needed rescue dopaminergic therapy",
        location: "Results",
        projectRef:
          "Drug browser: Deferiprone (PD) detail tooltip — rescue therapy rate",
      },
      {
        citationId: "devos-2022-nejm-c4",
        sourceId: "devos-2022-nejm",
        quote:
          "Nigrostriatal iron content decreased more in the deferiprone group than in the placebo group.",
        context:
          "Iron chelation worked as designed: brain iron fell. But patients got worse.",
        location: "Results",
        projectRef:
          "Drug browser: Deferiprone (PD) detail tooltip — iron reduction confirmed",
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
      {
        citationId: "ayton-2017-brain-c2",
        sourceId: "ayton-2017-brain",
        quote:
          "higher hippocampal quantitative susceptibility mapping levels predicted accelerated deterioration in composite cognition tests for episodic memory",
        context:
          "QSM iron imaging in AD: hippocampal iron predicts cognitive decline independently of A\u03B2 and tau",
        projectRef:
          "Teaser: 'driven by iron?' expanded content \u2014 AD iron detection via QSM",
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
      {
        citationId: "ayton-2015-natcomms-c3",
        sourceId: "ayton-2015-natcomms",
        quote:
          "baseline CSF ferritin levels were negatively associated with cognitive performance over 7 years in 91 cognitively normal, 144 mild cognitive impairment (MCI) and 67 AD subjects, and predicted MCI conversion to AD",
        context:
          "CSF ferritin is a predictive biomarker for AD progression and MCI\u2192AD conversion",
        projectRef:
          "Teaser: 'driven by iron?' expanded content \u2014 CSF ferritin predicts AD",
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
      {
        citationId: "stockwell-2022-cell-c2",
        sourceId: "stockwell-2022-cell",
        quote:
          "Cysteine and glutamate are used in the biosynthesis of reduced glutathione, which is in turn used by GPX4 to reduce reactive PUFA phospholipid hydroperoxides (PUFA-PL-OOH) to non-reactive and non-lethal PUFA phospholipid alcohols (PUFA-PL-OH)",
        context:
          "System xc- supplies cysteine for GSH; GPX4 uses GSH to neutralize lipid peroxides",
        projectRef:
          "FELINE intro: L layer — Lipid peroxide neutralization segment",
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
    id: "kruer-2010-annneurol",
    title:
      "Defective FA2H leads to a novel form of neurodegeneration with brain iron accumulation (NBIA)",
    authors: "Kruer MC, Paisán-Ruiz C, Boddaert N, et al.",
    journal: "Annals of Neurology",
    year: 2010,
    doi: "10.1002/ana.22122",
    pmid: "20853438",
    url: "https://pubmed.ncbi.nlm.nih.gov/20853438/#:~:text=Defective%20FA2H%20leads%20to%20a%20novel%20form",
    tags: ["iron", "ferroptosis"],
    citations: [
      {
        citationId: "kruer-2010-annneurol-c1",
        sourceId: "kruer-2010-annneurol",
        quote:
          "FA2H mutations cause fatty acid hydroxylase-associated neurodegeneration (FAHN), a form of NBIA with progressive spastic paraplegia, dystonia, and cerebellar atrophy",
        context:
          "FA2H hydroxylates myelin lipids; loss-of-function causes iron accumulation and neurodegeneration, linking myelin lipid composition directly to iron homeostasis",
        projectRef:
          "Reframe section: FA2H/NBIA as evidence that myelin lipid metabolism and iron are mechanistically coupled",
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
      {
        citationId: "luck-2012-currtopics-c4",
        sourceId: "luck-2012-currtopics",
        quote:
          "Once inside the cell, iron is compartmentalized in a number of different ways. These include incorporation into heme, iron-sulfur clusters, and other iron-requiring enzymes/proteins, formation of an intracellular labile iron pool or storage in the iron storage protein ferritin",
        context:
          "Iron compartmentalization includes heme synthesis and iron-sulfur clusters (mitochondrial processes)",
        projectRef:
          "FELINE intro: Fe layer — Mitochondrial iron use segment",
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
  {
    id: "harrison-arosio-1996-bba",
    title:
      "The ferritins: molecular properties, iron storage function and cellular regulation",
    authors: "Harrison PM, Arosio P",
    journal: "Biochimica et Biophysica Acta",
    year: 1996,
    doi: "10.1016/0005-2728(96)00022-9",
    pmid: "8695634",
    url: "https://pubmed.ncbi.nlm.nih.gov/8695634/#:~:text=4500%20Fe(III)%20atoms%20as%20an%20inorganic%20complex",
    tags: ["iron"],
    citations: [
      {
        citationId: "harrison-arosio-1996-bba-c1",
        sourceId: "harrison-arosio-1996-bba",
        quote:
          "All ferritins have 24 protein subunits arranged in 432 symmetry to give a hollow shell with an 80 A diameter cavity capable of storing up to 4500 Fe(III) atoms as an inorganic complex",
        context:
          "Definitive structural characterization of ferritin iron storage capacity",
        projectRef:
          "FELINE Fe layer: Ferritin cages store up to 4,500 iron atoms each",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "levi-2014-frontpharmacol",
    title:
      "Neurodegeneration with brain iron accumulation: update on pathogenic mechanisms",
    authors: "Levi S, Finazzi D",
    journal: "Frontiers in Pharmacology",
    year: 2014,
    doi: "10.3389/fphar.2014.00099",
    pmid: "24847269",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4019866/#:~:text=The%20average%20age%20of%20onset%20is%2039%20years",
    tags: ["iron"],
    citations: [
      {
        citationId: "levi-2014-frontpharmacol-c1",
        sourceId: "levi-2014-frontpharmacol",
        quote:
          "The average age of onset is 39 years and the main clinical manifestations are those that characterize the extrapyramidal disorders.",
        context: "Neuroferritinopathy (FTL mutations) onset age",
        projectRef:
          "GWAS section: FTL neuroferritinopathy onset in the 40s",
      },
      {
        citationId: "levi-2014-frontpharmacol-c2",
        sourceId: "levi-2014-frontpharmacol",
        quote:
          "The symptoms include neurological signs with first appearance in adulthood (fourth or fifth decade of life), usually preceded by diabetes mellitus, retinal degeneration.",
        context: "Aceruloplasminemia (CP mutations) onset and symptoms",
        projectRef:
          "GWAS section: CP aceruloplasminemia onset by age 50",
      },
      {
        citationId: "levi-2014-frontpharmacol-c3",
        sourceId: "levi-2014-frontpharmacol",
        quote:
          "The classic form usually manifests in the first decade of life, more often before the age of 6 years.",
        context: "PKAN (PANK2 mutations) childhood onset",
        projectRef:
          "GWAS section: PANK2 NBIA childhood onset",
      },
      {
        citationId: "levi-2014-frontpharmacol-c4",
        sourceId: "levi-2014-frontpharmacol",
        quote:
          "Iron deposits in the cerebellum, basal ganglia and motor cortex are visible by MRI",
        context: "Neuroferritinopathy basal ganglia iron accumulation",
        projectRef:
          "GWAS section: FTL basal ganglia iron deposits",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "brissot-2018-natrevdisprimers",
    title: "Haemochromatosis",
    authors: "Brissot P, Pietrangelo A, Adams PC, et al.",
    journal: "Nature Reviews Disease Primers",
    year: 2018,
    doi: "10.1038/nrdp.2018.16",
    pmid: "29620054",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775623/#:~:text=they%20develop%20symptoms%20only%20around%2030%E2%80%9340%20years%20of%20age",
    tags: ["iron"],
    citations: [
      {
        citationId: "brissot-2018-natrevdisprimers-c1",
        sourceId: "brissot-2018-natrevdisprimers",
        quote:
          "Non-HFE forms of haemochromatosis due to mutations in HAMP, HJV or TFR2 are much rarer.",
        context: "Non-HFE hemochromatosis genes",
        projectRef:
          "GWAS section: HFE, TFR2, HAMP cause hemochromatosis",
      },
      {
        citationId: "brissot-2018-natrevdisprimers-c2",
        sourceId: "brissot-2018-natrevdisprimers",
        quote:
          "Cardiac symptoms consist of cardiac rhythm disorders and cardiac failure.",
        context: "Hemochromatosis cardiac complications",
        projectRef:
          "GWAS section: hemochromatosis causes cardiac failure",
      },
      {
        citationId: "brissot-2018-natrevdisprimers-c3",
        sourceId: "brissot-2018-natrevdisprimers",
        quote:
          "in HFE-associated haemochromatosis, they develop symptoms only around 30\u201340 years of age",
        context: "Hemochromatosis symptom onset age",
        projectRef:
          "GWAS section: hemochromatosis symptoms decades before AD onset",
      },
      {
        citationId: "brissot-2018-natrevdisprimers-c4",
        sourceId: "brissot-2018-natrevdisprimers",
        quote:
          "Cellular iron excess in HFE and non-HFE forms of haemochromatosis is caused by increased concentrations of plasma iron, which can lead to the accumulation of iron in parenchymal cells, particularly hepatocytes, pancreatic cells and cardiomyocytes.",
        context: "Hemochromatosis hepatic and cardiac iron overload",
        projectRef:
          "GWAS section: hemochromatosis causes cirrhosis",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "zhao-2023-biompharm",
    title:
      "Mechanisms of ferroptosis in Alzheimer's disease and therapeutic effects of natural plant products: A review",
    authors: "Zhao D, Yang K, Guo H, et al.",
    journal: "Biomedicine & Pharmacotherapy",
    year: 2023,
    doi: "10.1016/j.biopha.2023.114312",
    pmid: "37210894",
    url: "https://pubmed.ncbi.nlm.nih.gov/37210894/#:~:text=ferroptosis%20is%20a%20newly%20discovered%20programmed%20cell%20death",
    tags: ["ferroptosis", "alzheimers", "iron"],
    citations: [
      {
        citationId: "zhao-2023-biompharm-c1",
        sourceId: "zhao-2023-biompharm",
        quote:
          "ferroptosis is a newly discovered programmed cell death induced by iron-dependent lipid peroxidation and reactive oxygen species",
        context:
          "Review of ferroptosis mechanisms in AD, including three defense axes: GSH/GPX4, FSP1/CoQ10, GCH1/BH4",
        location: "Abstract",
        projectRef:
          "Iron buildup section: diagram attribution (Zhao et al. 2023 ferroptosis defense axes)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "mao-2021-nature",
    title:
      "DHODH-mediated ferroptosis defence is a targetable vulnerability in cancer",
    authors: "Mao C, Liu X, Zhang Y, et al.",
    journal: "Nature",
    year: 2021,
    doi: "10.1038/s41586-021-03539-7",
    pmid: "33981038",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8895686/#:~:text=DHODH%20operates%20in%20parallel%20to%20mitochondrial%20GPX4",
    tags: ["ferroptosis"],
    citations: [
      {
        citationId: "mao-2021-nature-c1",
        sourceId: "mao-2021-nature",
        quote:
          "DHODH operates in parallel to mitochondrial GPX4 (but independent of cytosolic GPX4 or FSP1) to inhibit ferroptosis in the mitochondrial inner membrane, through reducing ubiquinone (CoQ) to ubiquinol (CoQH2)",
        context:
          "Fourth ferroptosis defense axis: DHODH in mitochondrial inner membrane, independent of cytosolic defenses",
        location: "Abstract",
        projectRef:
          "Iron buildup section: DHODH/CoQH2 fourth defense axis beat",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "alves-2025-sttt",
    title: "In defence of ferroptosis",
    authors: "Alves F, Lane D, Nguyen TPM, Bush AI, Ayton S.",
    journal: "Signal Transduction and Targeted Therapy",
    year: 2025,
    doi: "10.1038/s41392-024-02088-5",
    pmid: "39746918",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11696223/#:~:text=a%20key%20cellular%20reductant",
    tags: ["ferroptosis"],
    citations: [
      {
        citationId: "alves-2025-sttt-c1",
        sourceId: "alves-2025-sttt",
        quote:
          "NADPH is a key cellular reductant that is essential for maintaining the antioxidant systems that counteract ferroptosis",
        context:
          "NADPH is the shared upstream reductant powering GPX4, FSP1, and DHODH anti-ferroptosis systems",
        projectRef:
          "Iron buildup section: NADPH as unifying reductant across all defense axes",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "zhou-2024-medcomm",
    title:
      "Ferroptosis: mechanisms and therapeutic targets",
    authors: "Zhou J, Zhang L, Yan J, et al.",
    journal: "MedComm",
    year: 2024,
    doi: "10.1002/mco2.70010",
    pmid: "39568772",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11577306/#:~:text=iNOS%20acts%20as%20another%20GPX4-independent%20ferroptosis%20resistance%20factor",
    tags: ["ferroptosis"],
    citations: [
      {
        citationId: "zhou-2024-medcomm-c1",
        sourceId: "zhou-2024-medcomm",
        quote:
          "iNOS acts as another GPX4-independent ferroptosis resistance factor",
        context:
          "iNOS generates NO radicals that trap lipid peroxyl radicals, preventing chain propagation",
        projectRef:
          "Iron buildup section: emerging defense axes (iNOS)",
      },
      {
        citationId: "zhou-2024-medcomm-c2",
        sourceId: "zhou-2024-medcomm",
        quote:
          "By reducing lipid peroxyl radicals, 7-DHC neutralizes PL peroxidation",
        context:
          "7-dehydrocholesterol acts as a radical-trapping agent in cell membranes",
        projectRef:
          "Iron buildup section: emerging defense axes (7-DHC)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "bersuker-2019-nature",
    title:
      "The CoQ oxidoreductase FSP1 acts parallel to GPX4 to inhibit ferroptosis",
    authors: "Bersuker K, Hendricks JM, Li Z, et al.",
    journal: "Nature",
    year: 2019,
    doi: "10.1038/s41586-019-1705-2",
    pmid: "31634900",
    url: "https://pubmed.ncbi.nlm.nih.gov/31634900/#:~:text=a%20key%20component%20of%20a%20non-mitochondrial%20CoQ%20antioxidant%20system",
    tags: ["ferroptosis", "iron"],
    citations: [
      {
        citationId: "bersuker-2019-nature-c1",
        sourceId: "bersuker-2019-nature",
        quote:
          "FSP1 as a key component of a non-mitochondrial CoQ antioxidant system that acts in parallel to the canonical glutathione-based GPX4 pathway",
        context:
          "Co-discovery of FSP1/CoQ10 as a GPX4-independent ferroptosis defense axis",
        projectRef:
          "Iron buildup section: FSP1/CoQ10 defense axis beat",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kraft-2020-acscentsci",
    title:
      "GTP Cyclohydrolase 1/Tetrahydrobiopterin Counteract Ferroptosis through Lipid Remodeling",
    authors: "Kraft VAN, Bezjian CT, Pfeiffer S, et al.",
    journal: "ACS Central Science",
    year: 2020,
    doi: "10.1021/acscentsci.9b01063",
    pmid: "31989025",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6978838/#:~:text=Synthesis%20of%20BH4%2FBH2%20by%20GCH1-expressing%20cells%20caused%20lipid%20remodeling",
    tags: ["ferroptosis", "iron"],
    citations: [
      {
        citationId: "kraft-2020-acscentsci-c1",
        sourceId: "kraft-2020-acscentsci",
        quote:
          "Synthesis of BH4/BH2 by GCH1-expressing cells caused lipid remodeling, suppressing ferroptosis",
        context:
          "Discovery of GCH1/BH4 as a third independent ferroptosis defense axis",
        projectRef:
          "Iron buildup section: GCH1/BH4 defense axis beat",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kapralov-2020-natchembiol",
    title:
      "Redox lipid reprogramming commands susceptibility of macrophages and microglia to ferroptotic death",
    authors: "Kapralov AA, Yang Q, Dar HH, et al.",
    journal: "Nature Chemical Biology",
    year: 2020,
    doi: "10.1038/s41589-019-0462-8",
    pmid: "32080625",
    url: "https://pubmed.ncbi.nlm.nih.gov/32080625/#:~:text=iNOS%2FNO-enrichment%20of%20activated%20M1",
    tags: ["ferroptosis", "microglia"],
    citations: [
      {
        citationId: "kapralov-2020-natchembiol-c1",
        sourceId: "kapralov-2020-natchembiol",
        quote:
          "iNOS/NO\u00B7-enrichment of activated M1 (but not alternatively activated M2) macrophages/microglia modulates susceptibility to ferroptosis",
        context:
          "Discovery that iNOS/NO acts as a GPX4-independent ferroptosis resistance mechanism",
        projectRef:
          "Iron buildup section: emerging defense axes (iNOS/NO)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "freitas-2024-nature",
    title:
      "7-Dehydrocholesterol is an endogenous suppressor of ferroptosis",
    authors: "Freitas FP, Alborzinia H, Dos Santos AF, et al.",
    journal: "Nature",
    year: 2024,
    doi: "10.1038/s41586-023-06878-9",
    pmid: "38297129",
    url: "https://pubmed.ncbi.nlm.nih.gov/38297129/#:~:text=7-DHC%20effectively%20shields%20(phospho)lipids%20from%20autoxidation",
    tags: ["ferroptosis", "iron"],
    citations: [
      {
        citationId: "freitas-2024-nature-c1",
        sourceId: "freitas-2024-nature",
        quote:
          "7-DHC effectively shields (phospho)lipids from autoxidation and subsequent fragmentation",
        context:
          "Discovery of 7-dehydrocholesterol as an endogenous ferroptosis suppressor",
        projectRef:
          "Iron buildup section: emerging defense axes (7-DHC)",
      },
    ],
    verificationStatus: "verified",
  },
];
