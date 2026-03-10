export type TopicTag =
  | "pericyte"
  | "vascular"
  | "lysosomal"
  | "iron"
  | "ferroptosis"
  | "glia"
  | "oligodendrocyte"
  | "microglia"
  | "astrocyte"
  | "clinical-trials"
  | "epidemiology"
  | "covid"
  | "aging"
  | "alzheimers"
  | "parkinsons"
  | "als"
  | "ms"
  | "prion"
  | "huntingtons"
  | "ftd"
  | "dlb"
  | "frda"
  | "psp"
  | "msa"
  | "tbi"
  | "ebv"
  | "viral"
  | "hsv"
  | "biomarkers"
  | "imaging"
  | "genetics"
  | "toxoplasma"
  | "gap-junctions"
  | "neuron-doctrine";

export type VerificationStatus = "verified" | "unverified" | "unverifiable";

export interface Citation {
  /** Unique citation ID, e.g. "armulik-2010-nature-c1" */
  citationId: string;
  /** Parent source ID */
  sourceId: string;
  /** Exact quote from the paper (Ctrl+F verifiable) */
  quote: string;
  /** Editorial note or context for how the quote is used */
  context?: string;
  /** Location in source: page, section, figure, table */
  location?: string;
  /** What text/section in this project uses or references this quote */
  projectRef?: string;
  /** Verified text snippet for #:~:text= URL deep-linking (confirmed to exist on the source page) */
  fragmentText?: string;
}

export interface Source {
  /** Unique source ID, e.g. "armulik-2010-nature" */
  id: string;
  /** Full paper title */
  title: string;
  /** Authors in abbreviated format: "Armulik A, Genové G, Mäe M, et al." */
  authors: string;
  /** Journal name (full, not abbreviated) */
  journal: string;
  /** Publication year */
  year: number;
  /** DOI without https://doi.org/ prefix */
  doi?: string;
  /** PubMed ID (numeric string) */
  pmid?: string;
  /** Direct URL to the paper (PubMed, PMC, or publisher) */
  url?: string;
  /** Topic tags for cross-module discoverability */
  tags: TopicTag[];
  /** Citations (exact quotes) used in this project */
  citations: Citation[];
  /** Whether title/authors/year have been verified against PubMed or CrossRef */
  verificationStatus: VerificationStatus;
}
