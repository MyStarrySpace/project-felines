import type { Source } from "./types";

export const gwasGeneticsSources: Source[] = [
  {
    id: "bellenguez-2022-natgenet",
    title:
      "New insights into the genetic etiology of Alzheimer's disease and related dementias",
    authors: "Bellenguez C, Kucukali F, Jansen IE, et al.",
    journal: "Nature Genetics",
    year: 2022,
    doi: "10.1038/s41588-022-01024-z",
    pmid: "35379992",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9005347/",
    tags: ["genetics", "alzheimers"],
    citations: [
      {
        citationId: "bellenguez-2022-natgenet-c1",
        sourceId: "bellenguez-2022-natgenet",
        quote:
          "We found 75 risk loci, of which 42 were new at the time of analysis.",
        context: "AD GWAS landmark: 75 loci, none are canonical iron genes",
        projectRef: "GWAS section: headline stat — 75+ risk loci",
        fragmentText: "We found 75 risk loci, of which 42",
      },
      {
        citationId: "bellenguez-2022-natgenet-c2",
        sourceId: "bellenguez-2022-natgenet",
        quote:
          "Pathway enrichment analyses confirmed the involvement of amyloid/tau pathways and highlighted microglia implication.",
        context:
          "Pathway enrichment shows microglia, not iron — but microglial function IS iron management (TREM2, CD33, SPI1)",
        projectRef:
          "GWAS section: lysosome layer enrichment for microglial genes",
          fragmentText: "Pathway enrichment analyses confirmed the involvement of amyloidtau",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "derossi-2016-molneurodegen",
    title:
      "Predominant expression of Alzheimer's disease-associated BIN1 in mature oligodendrocytes and localization to white matter tracts",
    authors: "De Rossi P, Bhuggia-Prevot V, Clayton BLL, et al.",
    journal: "Molecular Neurodegeneration",
    year: 2016,
    doi: "10.1186/s13024-016-0124-1",
    pmid: "27488240",
    url: "https://pubmed.ncbi.nlm.nih.gov/27488240/",
    tags: ["genetics", "oligodendrocyte", "alzheimers"],
    citations: [
      {
        citationId: "derossi-2016-molneurodegen-c1",
        sourceId: "derossi-2016-molneurodegen",
        quote:
          "The large majority of BIN1 is expressed in mature oligodendrocytes whereas neuronal BIN1 represents a minor fraction.",
        context:
          "AD risk gene #2 is an oligodendrocyte gene — the most iron-rich cells in the brain",
        projectRef: "GWAS section: BIN1 gene card — iron connection",
        fragmentText: "the large majority of BIN1 is expressed in",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "scotland-2012-plosone",
    title:
      "The PICALM protein plays a key role in iron homeostasis and cell proliferation",
    authors: "Scotland PB, Heath JL, Conway AE, et al.",
    journal: "PLoS One",
    year: 2012,
    doi: "10.1371/journal.pone.0044252",
    pmid: "22952941",
    url: "https://pubmed.ncbi.nlm.nih.gov/22952941/",
    tags: ["genetics", "iron", "alzheimers"],
    citations: [
      {
        citationId: "scotland-2012-plosone-c1",
        sourceId: "scotland-2012-plosone",
        quote: "PICALM plays a critical role in iron homeostasis",
        context:
          "PICALM controls transferrin receptor endocytosis — literally the iron import mechanism",
        projectRef: "GWAS section: PICALM gene card — iron connection",
        fragmentText: "PICALM plays a critical role in iron homeostasis",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "belaidi-2024-molpsychiatry",
    title:
      "Apolipoprotein E potently inhibits ferroptosis by blocking ferritinophagy",
    authors: "Belaidi AA, Masaldan S, Southon A, et al.",
    journal: "Molecular Psychiatry",
    year: 2024,
    doi: "10.1038/s41380-022-01568-w",
    pmid: "35484240",
    url: "https://pubmed.ncbi.nlm.nih.gov/35484240/",
    tags: ["genetics", "iron", "ferroptosis", "alzheimers"],
    citations: [
      {
        citationId: "belaidi-2024-molpsychiatry-c1",
        sourceId: "belaidi-2024-molpsychiatry",
        quote:
          "apoE is a potent inhibitor of ferroptosis (EC50 approximately 10 nM; N27 neurons)",
        context: "ApoE directly blocks ferroptosis — links #1 risk gene to iron death",
        projectRef: "GWAS section: APOE gene card — ferroptosis inhibition",
        fragmentText: "apoE is a potent inhibitor of ferroptosis EC50",
      },
      {
        citationId: "belaidi-2024-molpsychiatry-c2",
        sourceId: "belaidi-2024-molpsychiatry",
        quote:
          "While protection against ferroptosis did not differ between apoE isoforms in vitro, other features of epsilon4 carriers, such as low abundance of apoE protein and higher levels of polyunsaturated fatty acids (which fuel ferroptosis) could mediate the epsilon4 allele's heightened risk of AD",
        context:
          "Risk comes from lower APOE4 abundance, not weaker function per molecule",
        projectRef:
          "GWAS section: APOE gene card — why epsilon4 is risky",
          fragmentText: "While protection against ferroptosis did not differ between",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "cantoni-2015-actaneuropathol",
    title:
      "TREM2 regulates microglial cell activation in response to demyelination in vivo",
    authors: "Cantoni C, Bollman B, Licastro D, et al.",
    journal: "Acta Neuropathologica",
    year: 2015,
    doi: "10.1007/s00401-015-1388-1",
    pmid: "25631124",
    url: "https://pubmed.ncbi.nlm.nih.gov/25631124/",
    tags: ["genetics", "microglia", "alzheimers"],
    citations: [
      {
        citationId: "cantoni-2015-actaneuropathol-c1",
        sourceId: "cantoni-2015-actaneuropathol",
        quote:
          "TREM2(-/-) mice had defective clearance of myelin debris and more axonal pathology",
        context:
          "TREM2 loss-of-function = failed myelin debris clearance, accumulation of iron-loaded debris",
        projectRef: "GWAS section: TREM2 gene card — iron connection",
        fragmentText: "mice had defective clearance of myelin debris and",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "huang-2017-natneurosci",
    title:
      "A common haplotype lowers PU.1 expression in myeloid cells and delays onset of Alzheimer's disease",
    authors: "Huang KL, Marcora E, Pimenova AA, et al.",
    journal: "Nature Neuroscience",
    year: 2017,
    doi: "10.1038/nn.4587",
    pmid: "28628103",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5759334/",
    tags: ["genetics", "microglia", "alzheimers"],
    citations: [
      {
        citationId: "huang-2017-natneurosci-c1",
        sourceId: "huang-2017-natneurosci",
        quote:
          "lower SPI1 expression reduces AD risk by regulating myeloid gene expression",
        context:
          "SPI1/PU.1 is the master transcription factor for microglial program — regulates ferritin and iron genes",
        projectRef: "GWAS section: SPI1 gene card — iron connection",
        fragmentText: "lower SPI1 expression reduces AD risk by regulating",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "leonard-2025-medrxiv",
    title:
      "Novel Parkinson's Disease Genetic Risk Factors Within and Across European Populations",
    authors: "Leonard HL, Makarious MB, Vitale D, et al.",
    journal: "medRxiv",
    year: 2025,
    doi: "10.1101/2025.03.14.24319455",
    url: "https://www.medrxiv.org/content/10.1101/2025.03.14.24319455v1",
    tags: ["genetics", "parkinsons"],
    citations: [
      {
        citationId: "leonard-2025-medrxiv-c1",
        sourceId: "leonard-2025-medrxiv",
        quote:
          "The final combined cross-European meta-analysis identified 134 risk loci (59 novel), with a total of 157 independent signals, significantly expanding our understanding of Parkinson's disease risk.",
        context:
          "Largest PD GWAS: 63,555 cases, 134 loci — defense-layer genes dominate, not iron transport genes",
        projectRef: "GWAS section: PD loci count and layer mapping",
        fragmentText: "The final combined cross-European meta-analysis identified 134 risk",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "lange-2025-npjpd",
    title:
      "Prioritizing Parkinson's disease risk genes in genome-wide association loci",
    authors: "Lange LM, Cerquera-Cleves C, Schipper M, et al.",
    journal: "npj Parkinson's Disease",
    year: 2025,
    doi: "10.1038/s41531-025-00933-0",
    pmid: "40240380",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12003903/",
    tags: ["genetics", "parkinsons"],
    citations: [
      {
        citationId: "lange-2025-npjpd-c1",
        sourceId: "lange-2025-npjpd",
        quote:
          "The polygenic priority score (PoPS) integrates genome-wide information from MAGMA gene-level associations and over 57,000 gene-level features.",
        context:
          "Gene prioritization method used to nominate causal genes at PD GWAS loci",
        projectRef: "GWAS section: PD gene prioritization methodology",
        fragmentText: "The polygenic priority score PoPS integrates genome-wide information",
      },
    ],
    verificationStatus: "verified",
  },
];
