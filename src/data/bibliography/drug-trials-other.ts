import type { Source } from "./types";

export const drugTrialsOtherSources: Source[] = [
  // Huntingtin lowering
  {
    id: "mccolgan-2023-nejm",
    title: "Tominersen in Adults with Manifest Huntington's Disease.",
    authors: "McColgan P, Thobhani A, Boak L, et al.",
    journal: "New England Journal of Medicine",
    year: 2023,
    doi: "10.1056/NEJMc2300400",
    pmid: "38055260",
    url: "https://pubmed.ncbi.nlm.nih.gov/38055260/",
    tags: ["clinical-trials", "huntingtons"],
    citations: [
      {
        citationId: "mccolgan-2023-nejm-c1",
        sourceId: "mccolgan-2023-nejm",
        quote: "Tominersen in Adults with Manifest Huntington's Disease",
        projectRef: "Drug browser: Tominersen HTT ASO dose-dependent worsening",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wave-2024-wve003",
    title: "Wave Life Sciences announces SELECT-HD Phase 1b/2a results for WVE-003",
    authors: "Wave Life Sciences.",
    journal: "Press release",
    year: 2024,
    tags: ["clinical-trials", "huntingtons"],
    citations: [
      {
        citationId: "wave-2024-wve003-c1",
        sourceId: "wave-2024-wve003",
        quote: "WVE-003 allele-selective ASO reduced CSF mHTT 46% vs placebo",
        projectRef: "Drug browser: WVE-003 allele-selective, insufficient efficacy",
      },
    ],
    verificationStatus: "unverifiable",
  },
  {
    id: "ptc-2025-votoplam",
    title: "PTC Therapeutics announces PIVOT-HD Phase 2 results for votoplam",
    authors: "PTC Therapeutics.",
    journal: "Press release",
    year: 2025,
    tags: ["clinical-trials", "huntingtons"],
    citations: [
      {
        citationId: "ptc-2025-votoplam-c1",
        sourceId: "ptc-2025-votoplam",
        quote: "Votoplam met primary endpoint of dose-dependent blood HTT reduction",
        projectRef: "Drug browser: Votoplam PIVOT-HD dose-dependent HTT reduction, Phase 3 planned",
      },
    ],
    verificationStatus: "unverifiable",
  },
  {
    id: "borowsky-2026-natmed",
    title: "Oral splicing modulator branaplam in Huntington's disease: a phase 2 randomized controlled trial.",
    authors: "Borowsky B, et al.",
    journal: "Nature Medicine",
    year: 2026,
    doi: "10.1038/s41591-025-04117-4",
    tags: ["clinical-trials", "huntingtons"],
    citations: [
      {
        citationId: "borowsky-2026-natmed-c1",
        sourceId: "borowsky-2026-natmed",
        quote: "A phase 2b study of branaplam in Huntington's disease",
        projectRef: "Drug browser: Branaplam VIBRANT-HD 78% peripheral neuropathy, halted",
      },
    ],
    verificationStatus: "unverified",
  },
];
