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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3039358/#:~:text=iron%20specifically%20enhances%20A%CE%B2%20toxicity%20but%20only%20if%20the%20metal",
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
    url: "https://pubmed.ncbi.nlm.nih.gov/31235907/#:~:text=crowded%20environment%20of%20membranes%20therein",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2824027/#:~:text=1%3A1%20stoichiometry%20and%20can%20be%20readily%20oxidized",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2637434/#:~:text=mediates%20cellular%20iron%20uptake%20and%20transport",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2699477/#:~:text=selective%20deletion%20of%20PrP",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2745754/#:~:text=prion%20gene%20family%20is%20phylogenetically%20derived",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3660159/#:~:text=The%20presence%20of%20an",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3018422/#:~:text=a%20cellular%20ferrireductase%2C%20responsible%20for%20reducing",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4815063/#:~:text=confirmed%20presence%20in%20Chondrichthyes",
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
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC150459/#:~:text=not%20found%20outside%20vertebrates",
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
      },
    ],
    verificationStatus: "verified",
  },
];
