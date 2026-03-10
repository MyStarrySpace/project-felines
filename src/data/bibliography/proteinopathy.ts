import type { Source } from "./types";

export const proteinopathySources: Source[] = [
  {
    id: "liu-2011-jbc",
    title:
      "Iron promotes the toxicity of amyloid beta peptide by impeding its ordered aggregation",
    authors:
      "Liu B, Moloney A, Meehan S, Morris K, Thomas SE, Serpell LC, Hider R, Marciniak SJ, Lomas DA, Crowther DC",
    journal: "Journal of Biological Chemistry",
    year: 2011,
    doi: "10.1074/jbc.M110.158980",
    pmid: "21147772",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3039358/",
    tags: ["iron", "alzheimers", "ferroptosis"],
    citations: [
      {
        citationId: "liu-2011-jbc-c1",
        sourceId: "liu-2011-jbc",
        quote:
          "iron specifically enhances A\u03B2 toxicity but only if the metal is present throughout the aggregation process",
        context:
          "Iron-free A\u03B2 aggregates are non-toxic; iron must be co-present during aggregation to produce toxicity",
        location: "Abstract",
        projectRef:
          "Landing teaser: 'Without iron present during aggregation, these aggregates are non-toxic'",
          fragmentText: "iron specifically enhances A toxicity but only if",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "shahmoradian-2019-natneurosci",
    title:
      "Lewy pathology in Parkinson's disease consists of crowded organelles and lipid membranes",
    authors:
      "Shahmoradian SH, Lewis AJ, Genoud C, Hench J, Moors TE, Navarro PP, et al.",
    journal: "Nature Neuroscience",
    year: 2019,
    doi: "10.1038/s41593-019-0423-2",
    pmid: "31235907",
    url: "https://pubmed.ncbi.nlm.nih.gov/31235907/",
    tags: ["parkinsons"],
    citations: [
      {
        citationId: "shahmoradian-2019-natneurosci-c1",
        sourceId: "shahmoradian-2019-natneurosci",
        quote:
          "a crowded environment of membranes therein, including vesicular structures and dysmorphic organelles",
        context:
          "Lewy bodies are primarily organelle/membrane accumulations, not pure alpha-synuclein fibrils.",
        location: "Abstract",
        projectRef:
          "Landing teaser: 'Lewy bodies are not protein fibrils. They are crowded organelles and lipid membranes.'",
          fragmentText: "a crowded environment of membranes therein, including vesicular",
      },
      {
        citationId: "shahmoradian-2019-natneurosci-c2",
        sourceId: "shahmoradian-2019-natneurosci",
        quote:
          "Filaments interspersed between the membranes and organelles were identifiable in many, but not all, parsing α-synuclein inclusions",
        context:
          "Fibrils were not universally present in Lewy bodies — filaments appeared in many but not all inclusions.",
        location: "Abstract",
        projectRef:
          "Landing: Parkinson's evidence — fibrils not the dominant component of Lewy bodies",
          fragmentText: "Filaments interspersed between the membranes and organelles were",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "peng-2010-jinorgbiochem",
    title:
      "Binding of alpha-synuclein with Fe(III) and with Fe(II) and biological implications of the resultant complexes",
    authors: "Peng Y, Wang C, Xu HH, Liu YN, Zhou F",
    journal: "Journal of Inorganic Biochemistry",
    year: 2010,
    doi: "10.1016/j.jinorgbio.2009.11.005",
    pmid: "20005574",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2824027/",
    tags: ["iron", "parkinsons"],
    citations: [
      {
        citationId: "peng-2010-jinorgbiochem-c1",
        sourceId: "peng-2010-jinorgbiochem",
        quote:
          "The complex is of a 1:1 stoichiometry and can be readily oxidized electrochemically and chemically (by O(2)) to the putative alpha-syn-Fe(III) complex, with H(2)O(2) as a co-product",
        context:
          "Alpha-synuclein binds Fe\u00B3\u207A with ~1.2\u00D710\u00B9\u00B3 M\u207B\u00B9 affinity, demonstrating high-affinity iron binding",
        location: "Abstract",
        fragmentText: "The complex is of a 11 stoichiometry and",
        projectRef:
          "Landing teaser: 'Alpha-synuclein binds ferric iron with 10\u00B9\u00B3 M\u207B\u00B9 affinity'",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "singh-2009-plosone",
    title:
      "Prion protein modulates cellular iron uptake: a novel function with implications for prion disease pathogenesis",
    authors: "Singh A, Mohan ML, Isaac AO, Luo X, Petrak J, Vyoral D, Singh N",
    journal: "PLoS ONE",
    year: 2009,
    doi: "10.1371/journal.pone.0004468",
    pmid: "19212444",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2637434/",
    tags: ["iron", "prion"],
    citations: [
      {
        citationId: "singh-2009-plosone-c1",
        sourceId: "singh-2009-plosone",
        quote:
          "PrP(C) mediates cellular iron uptake and transport, and mutant PrP forms alter cellular iron levels differentially",
        context:
          "PrP functions as an iron uptake/transport protein; dysfunction contributes to brain iron imbalance in prion disease",
        location: "Abstract",
        projectRef:
          "Landing teaser: PrP iron uptake function (prion disease pathogenesis)",
          fragmentText: "PrPC mediates cellular iron uptake and transport, and",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "singh-2009-plosone-ko",
    title:
      "Prion protein (PrP) knock-out mice show altered iron metabolism: a functional role for PrP in iron uptake and transport",
    authors: "Singh A, Kong Q, Luo X, Petersen RB, Meyerson H, Singh N",
    journal: "PLoS ONE",
    year: 2009,
    doi: "10.1371/journal.pone.0006115",
    pmid: "19568430",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2699477/",
    tags: ["iron", "prion"],
    citations: [
      {
        citationId: "singh-2009-plosone-ko-c1",
        sourceId: "singh-2009-plosone-ko",
        quote:
          "selective deletion of PrP in transgenic mice (PrP(KO)) alters systemic iron homeostasis",
        context:
          "PrP knockout disrupts iron transport; brain iron is reduced, not accumulated, showing PrP is needed for normal iron handling",
        location: "Abstract",
        projectRef:
          "Reframe section convergence table: PrP-null mice iron homeostasis",
          fragmentText: "selective deletion of PrP in transgenic mice PrPKO",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "schmitt-ulms-2009-plosone",
    title:
      "Evolutionary descent of prion genes from the ZIP family of metal ion transporters",
    authors: "Schmitt-Ulms G, Ehsani S, Watts JC, Westaway D, Wille H",
    journal: "PLoS ONE",
    year: 2009,
    doi: "10.1371/journal.pone.0007208",
    pmid: "19784368",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2745754/",
    tags: ["iron", "prion"],
    citations: [
      {
        citationId: "schmitt-ulms-2009-plosone-c1",
        sourceId: "schmitt-ulms-2009-plosone",
        quote:
          "the prion gene family is phylogenetically derived from a ZIP-like ancestral molecule",
        context:
          "PrP is descended from the ZIP family of zinc/iron transporters; iron handling is its original evolutionary function",
        location: "Abstract",
        projectRef:
          "Landing teaser: 'PrP descended from a zinc/iron transporter family'",
          fragmentText: "the prion gene family is phylogenetically derived from",
      },
      {
        citationId: "schmitt-ulms-2009-plosone-c2",
        sourceId: "schmitt-ulms-2009-plosone",
        quote:
          "The level of sequence homology and the presence of prion protein genes in most chordate species place the split from the ZIP-like ancestor gene at the base of the chordate lineage",
        context:
          "Base of chordate lineage is approximately 530 Mya based on fossil and molecular clock evidence",
        location: "Abstract",
        projectRef:
          "Landing teaser: PrP evolutionary age (~530 Mya)",
          fragmentText: "The level of sequence homology and the presence",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "tharp-2013-bmcgenomics",
    title: "Origins of amyloid-beta",
    authors: "Tharp WG, Sarkar IN",
    journal: "BMC Genomics",
    year: 2013,
    doi: "10.1186/1471-2164-14-290",
    pmid: "23627794",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3660159/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "tharp-2013-bmcgenomics-c1",
        sourceId: "tharp-2013-bmcgenomics",
        quote:
          "The presence of an A\u03B2PP-like sequence in hydra (Hydra magnipapillata) and sea anemone (Nematostella vectensis) genomes suggests that the ancestral gene arose around metazoic divergence in the Ediacaran period, between 630\u2013540 million years ago (Mya)",
        context:
          "APP predates the bilaterian radiation; homologs exist in cnidarians",
        location: "Results",
        projectRef:
          "Landing teaser: APP evolutionary age (>540 Mya, ancient metazoan)",
          fragmentText: "that the ancestral gene",
      },
      {
        citationId: "tharp-2013-bmcgenomics-c2",
        sourceId: "tharp-2013-bmcgenomics",
        quote:
          "Invertebrate species genomes encode a single homologue referred to as either amyloid precursor like 1 protein (APL-1) or A\u03B2PP-like 1 protein (APPL-1)",
        context:
          "Flies (APPL-1) and worms (APL-1) both carry APP homologs",
        location: "Background",
        projectRef:
          "Landing teaser: APP homologs in flies, worms, and cnidarians",
          fragmentText: "Invertebrate species genomes encode a single homologue referred",
      },
      {
        citationId: "tharp-2013-bmcgenomics-c3",
        sourceId: "tharp-2013-bmcgenomics",
        quote:
          "fruit flies express APPL-1 only in neurons",
        context:
          "Drosophila APP homolog has neuron-specific expression",
        location: "Results",
        projectRef:
          "Landing teaser: APP homologs in flies",
          fragmentText: "fruit flies express APPL-1 only in neurons",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kaiser-2012-plosone",
    title:
      "Amyloid beta precursor protein and prion protein have a conserved interaction affecting cell adhesion and CNS development",
    authors: "Kaiser DM, Acharya M, Leighton PLA, et al.",
    journal: "PLoS ONE",
    year: 2012,
    doi: "10.1371/journal.pone.0051305",
    pmid: "23236467",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3516539/",
    tags: ["iron", "prion", "alzheimers"],
    citations: [
      {
        citationId: "kaiser-2012-plosone-c1",
        sourceId: "kaiser-2012-plosone",
        quote:
          "APP and PrP interact with each other and that the interaction is conserved in Drosophila and zebrafish",
        context:
          "APP and PrPC physically interact in a conserved complex across vertebrates and invertebrates, suggesting a shared ancestral iron-management function",
        projectRef:
          "Reframe section: APP-PrPC conserved physical interaction as evidence of cooperative iron handling",
          fragmentText: "APP and PrP Interact",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "davies-2011-plosone",
    title: "Alpha-Synuclein Is a Cellular Ferrireductase",
    authors: "Davies P, Moualla D, Brown DR",
    journal: "PLoS ONE",
    year: 2011,
    doi: "10.1371/journal.pone.0015814",
    pmid: "21249223",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3018422/",
    tags: ["iron", "parkinsons"],
    citations: [
      {
        citationId: "davies-2011-plosone-c1",
        sourceId: "davies-2011-plosone",
        quote:
          "Here we provide strong evidence that \u03B1S is a cellular ferrireductase, responsible for reducing iron (III) to bio available iron (II)",
        context:
          "Alpha-synuclein's normal function is iron reduction (Fe\u00B3\u207A\u2192Fe\u00B2\u207A), using copper as cofactor and NADH as electron donor",
        location: "Abstract",
        projectRef:
          "Landing teaser: '\u03B1-synuclein is a cellular ferrireductase'",
          fragmentText: "Here we provide strong evidence that S is",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "sundermann-2016-bmcgenomics",
    title:
      "An evolutionary roadmap to the microtubule-associated protein MAP Tau",
    authors: "Sundermann F, Fernandez MP, Morgan RO",
    journal: "BMC Genomics",
    year: 2016,
    doi: "10.1186/s12864-016-2590-9",
    pmid: "27030133",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4815063/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "sundermann-2016-bmcgenomics-c1",
        sourceId: "sundermann-2016-bmcgenomics",
        quote:
          "Their confirmed presence in Chondrichthyes sets their period of formation around 550+ million years ago",
        context:
          "MAPT as a distinct gene arose from vertebrate whole-genome duplication ~550 Mya",
        location: "Discussion",
        projectRef:
          "Landing teaser: tau evolutionary age (~550 Mya, vertebrate WGD)",
          fragmentText: "sets their period of formation around 550 million",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "nishioka-2026-lsa",
    title:
      "Amyloid-\u03B2 fibrils accumulated in preeclamptic placentas suppress cytotrophoblast syncytialization",
    authors:
      "Nishioka K, Ikezaki M, Iwahashi N, Arakawa M, Fukushima M, Mori N, Mizoguchi M, Horiuchi-Tanizaki Y, Fujino M, Tomiyama T, Ihara Y, Uchimura K, Ino K, Nishitsuji K",
    journal: "Life Science Alliance",
    year: 2026,
    doi: "10.26508/lsa.202503453",
    pmid: "41558820",
    url: "https://www.life-science-alliance.org/content/9/4/e202503453",
    tags: ["alzheimers", "iron"],
    citations: [
      {
        citationId: "nishioka-2026-lsa-c1",
        sourceId: "nishioka-2026-lsa",
        quote:
          "A\u03B242 fibrils inhibited CTB syncytialization, a critical step in maintaining pregnancy, by inducing loss of membrane localization of cell-cell adhesion molecules",
        context:
          "A\u03B2 fibrils in preeclamptic placentas suppress cytotrophoblast fusion, demonstrating A\u03B2 pathology outside the brain",
        location: "Abstract",
        projectRef:
          "Landing teaser: 'not even unique to the brain' \u2014 placental A\u03B2 plaques in preeclampsia",
          fragmentText: "A42 fibrils inhibited CTB syncytialization, a critical step",
      },
      {
        citationId: "nishioka-2026-lsa-c2",
        sourceId: "nishioka-2026-lsa",
        quote:
          "levels of hypoxia-inducible factor 1-\u03B1 and \u03B2-secretase (BACE-1) increased concurrently with placental A\u03B2 deposition in late-stage preeclamptic placentas",
        context:
          "Hypoxia drives BACE1 upregulation and A\u03B2 production in placenta, paralleling the hypoxia\u2192iron\u2192A\u03B2 axis in brain",
        location: "Abstract",
        projectRef:
          "Landing teaser: hypoxia driving placental A\u03B2 production",
          fragmentText: "levels of hypoxia-inducible factor 1- and -secretase BACE-1",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "yang-2026-hypertension",
    title:
      "Iron Overload-Induced Ferroptosis Drives Placental Dysfunction in Preeclampsia",
    authors: "Yang Y, Zuo H, Ma X, et al.",
    journal: "Hypertension",
    year: 2026,
    doi: "10.1161/HYPERTENSIONAHA.125.26344",
    pmid: "41608783",
    url: "https://pubmed.ncbi.nlm.nih.gov/41608783/",
    tags: ["iron", "ferroptosis"],
    citations: [
      {
        citationId: "yang-2026-hypertension-c1",
        sourceId: "yang-2026-hypertension",
        quote:
          "Patients with preeclampsia exhibited elevated hemoglobin, ferritin, and serum iron levels from the second trimester, alongside placental iron overload",
        context:
          "Iron overload is present in preeclamptic placentas from 2nd trimester onward",
        location: "Abstract",
        projectRef:
          "Landing teaser: 'not even unique to the brain' \u2014 iron overload in preeclamptic placentas",
          fragmentText: "Patients with preeclampsia exhibited elevated hemoglobin, ferritin, and",
      },
      {
        citationId: "yang-2026-hypertension-c2",
        sourceId: "yang-2026-hypertension",
        quote:
          "Iron overload induced ferroptosis and apoptosis in trophoblasts, evidenced by increased lipid peroxidation (4HNE\u2191, Gpx4\u2193), ROS, Tunnel staining positive and cell death",
        context:
          "Iron overload causes both ferroptosis and apoptosis in trophoblasts, not just ferroptosis alone",
        location: "Abstract",
        projectRef:
          "Landing teaser: 'not even unique to the brain' \u2014 iron-driven ferroptosis + apoptosis in placenta",
          fragmentText: "Iron overload induced ferroptosis and apoptosis in trophoblasts,",
      },
      {
        citationId: "yang-2026-hypertension-c3",
        sourceId: "yang-2026-hypertension",
        quote:
          "Both deferoxamine and MitoQ rescued these effects in vitro and in preeclampsia-derived organoids",
        context:
          "Iron chelation and mitochondrial antioxidant rescue placental cell death, paralleling iron-targeting approaches in neurodegeneration",
        location: "Abstract",
        projectRef:
          "Landing teaser: deferoxamine + MitoQ rescue of placental damage",
          fragmentText: "Both deferoxamine and MitoQ rescued these effects in",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "george-2002-genomebiology",
    title: "The synucleins",
    authors: "George JM",
    journal: "Genome Biology",
    year: 2002,
    doi: "10.1186/gb-2001-3-1-reviews3002",
    pmid: "11806835",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC150459/",
    tags: ["parkinsons"],
    citations: [
      {
        citationId: "george-2002-genomebiology-c1",
        sourceId: "george-2002-genomebiology",
        quote:
          "Synuclein family members are not found outside vertebrates",
        context:
          "Alpha-synuclein is vertebrate-specific; no invertebrate ortholog exists",
        location: "Gene organization and evolutionary history",
        projectRef:
          "Landing teaser: \u03B1-synuclein vertebrate-specific origin (~500 Mya)",
          fragmentText: "Synuclein family members are not found outside vertebrates",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "simakov-2020-natecol",
    title:
      "Deeply conserved synteny resolves early events in vertebrate evolution",
    authors: "Simakov O, Marl\u00E9taz F, Yue JX, et al.",
    journal: "Nature Ecology & Evolution",
    year: 2020,
    doi: "10.1038/s41559-020-1156-z",
    pmid: "32313176",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7269912/",
    tags: ["genetics"],
    citations: [
      {
        citationId: "simakov-2020-natecol-c1",
        sourceId: "simakov-2020-natecol",
        quote:
          "The first\u2014an autotetraploidization (1R)\u2014preceded the divergence of lamprey and jawed vertebrate lineages ~490 million years ago (Ma)",
        context:
          "WGD1 timing: mid/late Cambrian, ~490 Ma. This is the duplication that generated the synuclein gene family.",
        location: "Conclusion",
        projectRef:
          "Landing teaser: \u03B1-synuclein evolutionary origin dating (~490 Mya via WGD1)",
          fragmentText: "the divergence of lamprey and jawed vertebrate lineages",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "marin-2023-biology",
    title: "Emergence of the Synucleins",
    authors: "Mar\u00EDn I",
    journal: "Biology",
    year: 2023,
    doi: "10.3390/biology12081053",
    pmid: "37626939",
    url: "https://pubmed.ncbi.nlm.nih.gov/37626939/",
    tags: ["parkinsons", "genetics"],
    citations: [
      {
        citationId: "marin-2023-biology-c1",
        sourceId: "marin-2023-biology",
        quote:
          "A single synuclein-coding gene was present in the ancestor of all vertebrates. WGD1 generated two different genes prior to the agnathan/gnathostome split",
        context:
          "Synucleins arose from the first vertebrate WGD; the second WGD produced the three classical synuclein genes SNCA, SNCB, SNCG",
        location: "Abstract",
        projectRef:
          "Landing teaser: \u03B1-synuclein origin via vertebrate WGD1",
          fragmentText: "A single synuclein-coding gene was present in the",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "cortez-2022-protsci",
    title:
      "Probing the origin of prion protein misfolding via reconstruction of ancestral proteins",
    authors:
      "Cortez LM, Morrison AJ, Garen CR, Patterson S, Uyesugi T, Petrosyan R, Sekar RV, Harms MJ, Woodside MT, Sim VL",
    journal: "Protein Science",
    year: 2022,
    doi: "10.1002/pro.4477",
    pmid: "36254680",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9667828/",
    tags: ["prion", "genetics"],
    citations: [
      {
        citationId: "cortez-2022-protsci-c1",
        sourceId: "cortez-2022-protsci",
        quote:
          "PrP likely evolved from the ZIP family of transmembrane proteins when vertebrates emerged roughly 500 million years ago",
        context:
          "Specific dating of PrP origin to ~500 Mya, confirming the chordate-lineage timing from Schmitt-Ulms 2009",
        location: "Introduction",
        projectRef:
          "Landing teaser: PrP evolutionary origin dating (~500 Mya)",
          fragmentText: "PrP likely evolved from the ZIP family of",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "bateman-2006-natmed",
    title:
      "Human amyloid-beta synthesis and clearance rates as measured in cerebrospinal fluid in vivo",
    authors:
      "Bateman RJ, Munsell LY, Morris JC, Swarm R, Yarasheski KE, Holtzman DM",
    journal: "Nature Medicine",
    year: 2006,
    doi: "10.1038/nm1438",
    pmid: "16799555",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2983090/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "bateman-2006-natmed-c1",
        sourceId: "bateman-2006-natmed",
        quote:
          "Our results indicate A\u03B2 is rapidly produced and cleared in the CNS in humans.",
        context:
          "Soluble A\u03B2 has a half-life of ~8 hours (FCR 8.2%/hr); constitutive production at 7.6%/hr matches clearance at steady state",
        location: "Results",
        projectRef:
          "Landing teaser: A\u03B2 constitutive production and rapid turnover (~8h half-life)",
          fragmentText: "Our results indicate A is rapidly produced and",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "mawuenyega-2010-science",
    title:
      "Decreased clearance of CNS beta-amyloid in Alzheimer's disease",
    authors:
      "Mawuenyega KG, Sigurdson W, Ovod V, Munsell L, Kasten T, Morris JC, Yarasheski KE, Bateman RJ",
    journal: "Science",
    year: 2010,
    doi: "10.1126/science.1197623",
    pmid: "21148344",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3073454/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "mawuenyega-2010-science-c1",
        sourceId: "mawuenyega-2010-science",
        quote:
          "We found that late onset AD is associated with a 30% impairment in the clearance of both A\u03B242 and A\u03B240, indicating that A\u03B2 clearance mechanisms may be critically important in the development of AD.",
        context:
          "Production rates identical between AD and controls (6.7 vs 6.6%/hr for A\u03B242); clearance is the deficit",
        location: "Results",
        projectRef:
          "Landing teaser: In sporadic AD, A\u03B2 production unchanged, clearance drops ~30%",
          fragmentText: "in the development of",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "zoltowska-2024-elife",
    title:
      "Alzheimer's disease linked A\u03B242 exerts product feedback inhibition on \u03B3-secretase impairing downstream cell signaling",
    authors: "Zoltowska KM, Das U, Lismont S, Enzlein T, Maesako M, Houser MCQ, et al.",
    journal: "eLife",
    year: 2024,
    doi: "10.7554/eLife.90690",
    pmid: "39027984",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11259434/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "zoltowska-2024-elife-c1",
        sourceId: "zoltowska-2024-elife",
        quote:
          "Collectively, our analyses support a model wherein A\u03B242 forms a non-productive E-S-like complex with \u03B3-secretase and its binding is reversible.",
        context:
          "A\u03B242 competitively inhibits \u03B3-secretase at IC50 ~1.3 \u03BCM (at KM substrate concentration); human-specific (murine A\u03B242 barely inhibits, max ~20%)",
        location: "Results",
        fragmentText: "Collectively, our analyses support a model wherein A42",
        projectRef:
          "Landing teaser: A\u03B242 product feedback inhibition on \u03B3-secretase",
      },
      {
        citationId: "zoltowska-2024-elife-c2",
        sourceId: "zoltowska-2024-elife",
        quote:
          "neither murine A\u03B242 nor human A\u03B217\u201342 (p3), inhibit \u03B3-secretases",
        context:
          "Human-specific: murine A\u03B242 barely inhibits, attributed to three N-terminal amino acid differences (R5G, Y10F, H13R); may explain why wild-type mice don't develop AD pathology",
        location: "Abstract",
        projectRef:
          "Landing teaser: species specificity of A\u03B242 \u03B3-secretase inhibition",
          fragmentText: "neither murine A42 nor human A17-42 p3, inhibit",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "quintela-lopez-2019-celldeathdis",
    title:
      "A\u03B2 oligomers promote oligodendrocyte differentiation and maturation via integrin \u03B21 and Fyn kinase signaling",
    authors:
      "Quintela-L\u00F3pez T, Ortiz-Sanz C, Serrano-Regal MP, Gaminde-Blasco A, Valero J, Baleriola J, S\u00E1nchez-G\u00F3mez MV, Matute C, Alberdi E",
    journal: "Cell Death & Disease",
    year: 2019,
    doi: "10.1038/s41419-019-1636-8",
    pmid: "31171765",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6554322/",
    tags: ["alzheimers", "oligodendrocyte", "glia"],
    citations: [
      {
        citationId: "quintela-lopez-2019-celldeathdis-c1",
        sourceId: "quintela-lopez-2019-celldeathdis",
        quote:
          "A\u03B2 oligomers promoted oligodendrocyte differentiation and maturation, as well as cell survival in cultured oligodendrocytes",
        context:
          "At moderate concentrations, A\u03B2 oligomers promote OL differentiation and MBP expression via integrin \u03B21 and Fyn kinase signaling",
        location: "Abstract",
        projectRef:
          "Landing teaser: A\u03B2 promotes myelination as an extracellular signal",
          fragmentText: "as well as cell survival in cultured oligodendrocytes",
      },
      {
        citationId: "quintela-lopez-2019-celldeathdis-c2",
        sourceId: "quintela-lopez-2019-celldeathdis",
        quote:
          "A\u03B2 oligomers required integrin \u03B21 receptor, Src-family kinase Fyn and Ca2+/CaMKII as effectors to modulate MBP protein expression.",
        context:
          "Mechanism: integrin \u03B21 \u2192 Fyn kinase \u2192 Ca2+/CaMKII \u2192 MBP translation",
        location: "Abstract",
        projectRef:
          "Landing teaser: A\u03B2 myelination signaling mechanism",
          fragmentText: "A oligomers required integrin 1 receptor, Src-family kinase",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kayed-2003-science",
    title:
      "Common structure of soluble amyloid oligomers implies common mechanism of pathogenesis",
    authors: "Kayed R, Head E, Thompson JL, et al.",
    journal: "Science",
    year: 2003,
    doi: "10.1126/science.1079469",
    pmid: "12702875",
    url: "https://pubmed.ncbi.nlm.nih.gov/12702875/",
    tags: ["alzheimers", "prion"],
    citations: [
      {
        citationId: "kayed-2003-science-c1",
        sourceId: "kayed-2003-science",
        quote:
          "All of the soluble oligomers tested display a common conformation-dependent structure that is unique to soluble oligomers regardless of sequence.",
        context:
          "A11 antibody recognizes shared oligomeric fold across A\u03B2, \u03B1-syn, PrP, IAPP, insulin amyloid",
        projectRef:
          "Reframe section: convergence table \u2014 shared A11 conformation across proteins",
          fragmentText: "all of the soluble oligomers tested display a",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "fioriti-2015-neuron",
    title:
      "The Persistence of Hippocampal-Based Memory Requires Protein Synthesis Mediated by the Prion-like Protein CPEB3",
    authors:
      "Fioriti L, Myers C, Huang YY, et al.",
    journal: "Neuron",
    year: 2015,
    doi: "10.1016/j.neuron.2015.05.021",
    pmid: "26074003",
    url: "https://pubmed.ncbi.nlm.nih.gov/26074003/",
    tags: ["prion", "alzheimers"],
    citations: [
      {
        citationId: "fioriti-2015-neuron-c1",
        sourceId: "fioriti-2015-neuron",
        quote:
          "Persistence of long-term memory results from the assembly of CPEB3 into aggregates. These aggregates serve as functional prions and regulate local protein synthesis necessary for the maintenance of long-term memory.",
        context:
          "CPEB3 uses the same amyloid fold as pathological proteins, but for memory storage",
        projectRef:
          "Reframe section: convergence table \u2014 CPEB3 functional amyloid",
          fragmentText: "persistence of long-term memory results from the assembly",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "majumdar-2012-cell",
    title:
      "Critical role of amyloid-like oligomers of Drosophila Orb2 in the persistence of memory",
    authors:
      "Majumdar A, Cesario WC, White-Grindley E, et al.",
    journal: "Cell",
    year: 2012,
    doi: "10.1016/j.cell.2012.01.004",
    pmid: "22284910",
    url: "https://pubmed.ncbi.nlm.nih.gov/22284910/",
    tags: ["prion"],
    citations: [
      {
        citationId: "majumdar-2012-cell-c1",
        sourceId: "majumdar-2012-cell",
        quote:
          "the oligomeric Orb2 is amyloid in nature based on resistance to heat and detergents, higher binding to Thioflavin T, interaction with the amyloidogenic anti-oligomeric antibody A11",
        context:
          "Orb2 (Drosophila CPEB) confirmed A11-reactive \u2014 same oligomeric fold as A\u03B2 and \u03B1-syn",
        projectRef:
          "Reframe section: convergence table \u2014 CPEB3/Orb2 A11 reactivity",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "hervas-2020-science",
    title:
      "Cryo-EM structure of a neuronal functional amyloid implicated in memory persistence in Drosophila",
    authors: "Herv\u00E1s R, Rau MJ, Park Y, et al.",
    journal: "Science",
    year: 2020,
    doi: "10.1126/science.aba3526",
    pmid: "32165583",
    url: "https://pubmed.ncbi.nlm.nih.gov/32165583/",
    tags: ["prion"],
    citations: [
      {
        citationId: "hervas-2020-science-c1",
        sourceId: "hervas-2020-science",
        quote:
          "Unlike the hydrophobic core of pathogenic amyloids, the hydrophilic core of Orb2 filaments suggests how some neuronal amyloids could be a stable yet regulatable substrate of memory.",
        context:
          "Same cross-beta fold as pathological amyloids but hydrophilic/reversible \u2014 functional version",
        projectRef:
          "Reframe section: convergence table \u2014 CPEB3 hydrophilic vs pathological hydrophobic core",
          fragmentText: "Unlike the hydrophobic core of pathogenic amyloids, the",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "chen-2026-actaneuropathol",
    title:
      "Disentangling on and off-target binding in flortaucipir PET: a voxel-to-voxel P-tau, ferric iron, and MAO-B histology-to-flortaucipir PET comparison",
    authors:
      "Chen Y, La Joie R, Pereira FL, Blazhenets G, Zhu L, Spina S, Seeley WW, Heinsen H, Ushizima D, Tosun D, Rabinovici GD, Grinberg LT",
    journal: "Acta Neuropathologica",
    year: 2026,
    doi: "10.1007/s00401-026-02983-x",
    url: "https://link.springer.com/article/10.1007/s00401-026-02983-x",
    tags: ["iron", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "chen-2026-actaneuropathol-c1",
        sourceId: "chen-2026-actaneuropathol",
        quote:
          "in non-Alzheimer\u2019s tauopathies and FTLD-TDP-43, correlations between Flortaucipir signal and tau pathology were weak or negligible. Instead, Flortaucipir signal correlated more strongly with ferric iron and MAO-B",
        context:
          "The FDA-approved tau PET tracer binds ferric iron deposits, not just tau protein",
        location: "Abstract",
        fragmentText: "tauopathies and FTLD-TDP-43, correlations between Flortaucipir signal and",
        projectRef:
          "Landing teaser: tau PET tracer binds ferric iron in non-AD tauopathies",
      },
      {
        citationId: "chen-2026-actaneuropathol-c2",
        sourceId: "chen-2026-actaneuropathol",
        quote:
          "ferric iron was the main positive predictor in PSP, and combined ferric iron plus MAO-B models best explained Flortaucipir signal variance in FTLD-MAPT-S305I and FTLD-TDP, while p-tau/CP-13 lacked significant predictive value",
        context:
          "In non-AD tauopathies, ferric iron predicts the tau tracer signal better than tau itself",
        location: "Discussion",
        projectRef:
          "Landing teaser: iron predicts tau PET signal better than tau in PSP/FTLD",
          fragmentText: "ferric iron was the main positive predictor in",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "chen-2006-jbiochem",
    title:
      "The effect of Abeta conformation on the metal affinity and aggregation mechanism studied by circular dichroism spectroscopy",
    authors: "Chen YR, Huang HB, Chyan CL, Shiao MS, Lin TH, Chen YC",
    journal: "Journal of Biochemistry",
    year: 2006,
    doi: "10.1093/jb/mvj083",
    pmid: "16672274",
    url: "https://pubmed.ncbi.nlm.nih.gov/16672274/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "chen-2006-jbiochem-c1",
        sourceId: "chen-2006-jbiochem",
        quote:
          "Only in 5% and 25% TFE can Abeta undergo an alpha-helix to beta-sheet aggregation, which involve a three-state mechanism for the metal-free state, and a two-state transition for the metal-bound state, respectively. The aggregation-inducing activity of metals is in the order, Cu2+ > Fe3+ > or = Al3+ > Zn2+.",
        context:
          "Fe3+ accelerates A\u03B2 from alpha-helix to beta-sheet via a simplified two-state mechanism",
        location: "Abstract",
        projectRef:
          "Landing teaser: Fe\u00B3\u207A promotes A\u03B2 beta-sheet transition",
          fragmentText: "Only in 5 and 25 TFE can Abeta",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "lipinski-2013-currneurovascres",
    title: "Iron-induced fibrin in cardiovascular disease",
    authors: "Lipinski B, Pretorius E",
    journal: "Current Neurovascular Research",
    year: 2013,
    doi: "10.2174/15672026113109990016",
    pmid: "23721262",
    url: "https://pubmed.ncbi.nlm.nih.gov/23721262/",
    tags: ["iron", "vascular"],
    citations: [
      {
        citationId: "lipinski-2013-currneurovascres-c1",
        sourceId: "lipinski-2013-currneurovascres",
        quote:
          "trivalent iron (FeIII) initiates a hydroxyl radical-catalyzed conversion of fibrinogen into a fibrin-like polymer (parafibrin) that is remarkably resistant to the proteolytic dissolution and thus promotes its intravascular deposition",
        context:
          "Fenton-derived hydroxyl radicals convert fibrinogen into protease-resistant amyloid-like deposits",
          fragmentText: "trivalent iron FeIII initiates a hydroxyl radical-catalyzed conversion",
        location: "Abstract",
        projectRef:
          "Landing teaser: Fenton radicals convert fibrinogen to amyloid",
      },
    ],
    verificationStatus: "verified",
  },
];
