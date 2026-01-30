import type { Source } from "./types";

export const clinicalTrialsSources: Source[] = [
  {
    id: "pagano-2024-invoke2",
    title:
      "INVOKE-2: AL002 (anti-TREM2) in early Alzheimer's disease",
    authors: "Pagano G, et al.",
    journal: "Press release (Alector Inc.)",
    year: 2024,
    tags: ["clinical-trials", "alzheimers", "microglia"],
    citations: [
      {
        citationId: "pagano-2024-invoke2-c1",
        sourceId: "pagano-2024-invoke2",
        quote:
          "AL002 showed no benefit in early Alzheimer's disease despite confirmed TREM2 target engagement",
        context:
          "INVOKE-2 failure: single-pillar (glial) intervention in multi-pillar disease",
        projectRef:
          "Framework summary: Why every major trial has failed (INVOKE-2)",
      },
    ],
    verificationStatus: "unverifiable",
  },
  {
    id: "egan-2019-verubecestat",
    title:
      "Randomized Trial of Verubecestat for Prodromal Alzheimer's Disease",
    authors: "Egan MF, Kost J, Voss T, et al.",
    journal: "New England Journal of Medicine",
    year: 2019,
    doi: "10.1056/NEJMoa1812840",
    pmid: "30970186",
    url: "https://pubmed.ncbi.nlm.nih.gov/30970186/",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "egan-2019-verubecestat-c1",
        sourceId: "egan-2019-verubecestat",
        quote:
          "Verubecestat did not improve and there were suggestions it may have worsened cognitive outcomes",
        context:
          "BACE inhibitor caused cognitive worsening. Aβ production is a trigger, not the driver",
        projectRef:
          "Framework summary: Why every major trial has failed (BACE inhibitors)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "adapt-2006-plosct",
    title:
      "Cardiovascular and cerebrovascular events in the randomized, controlled Alzheimer's Disease Anti-Inflammatory Prevention Trial (ADAPT)",
    authors: "ADAPT Research Group.",
    journal: "PLoS Clinical Trials",
    year: 2006,
    doi: "10.1371/journal.pctr.0010033",
    pmid: "17111043",
    url: "https://pubmed.ncbi.nlm.nih.gov/17111043/",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "adapt-2006-plosct-c1",
        sourceId: "adapt-2006-plosct",
        quote:
          "ADAPT trial of NSAIDs for Alzheimer's prevention showed potential harm rather than benefit",
        context:
          "NSAIDs are too blunt: suppress both harmful and beneficial inflammatory clearance",
        projectRef:
          "Framework summary: Why every major trial has failed (NSAIDs/ADAPT)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "evoke-2024-semaglutide",
    title:
      "EVOKE/EVOKE+ trials of semaglutide in early Alzheimer's disease",
    authors: "Novo Nordisk.",
    journal: "Clinical trial report",
    year: 2024,
    tags: ["clinical-trials", "alzheimers", "vascular"],
    citations: [
      {
        citationId: "evoke-2024-semaglutide-c1",
        sourceId: "evoke-2024-semaglutide",
        quote:
          "Semaglutide did not meet primary endpoints in early Alzheimer's disease",
        context:
          "Poor BBB penetration; CNS inflammation may have increased",
        projectRef:
          "Framework summary: Why every major trial has failed (EVOKE semaglutide)",
      },
    ],
    verificationStatus: "unverifiable",
  },
  {
    id: "ath434-2025-msa",
    title:
      "ATH434 Phase 2 trial in Multiple System Atrophy",
    authors: "Alterity Therapeutics.",
    journal: "Clinical trial report",
    year: 2025,
    tags: ["clinical-trials", "iron"],
    citations: [
      {
        citationId: "ath434-2025-msa-c1",
        sourceId: "ath434-2025-msa",
        quote:
          "Iron redistribution therapy showed slower brain atrophy, reduced basal ganglia iron, stable NfL; 43% participants stable, 30% improved on clinical scales",
        context:
          "Iron REDISTRIBUTION (not chelation) shows benefit in MSA. Validates PLIG iron maldistribution model",
        projectRef:
          "Cross-disease: MSA iron redistribution therapy validation",
      },
    ],
    verificationStatus: "unverifiable",
  },
  {
    id: "honig-2018-solanezumab",
    title:
      "Trial of Solanezumab for Mild Dementia Due to Alzheimer's Disease",
    authors: "Honig LS, Vellas B, Woodward M, et al.",
    journal: "New England Journal of Medicine",
    year: 2018,
    doi: "10.1056/NEJMoa1705971",
    pmid: "29365294",
    url: "https://pubmed.ncbi.nlm.nih.gov/29365294/",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "honig-2018-solanezumab-c1",
        sourceId: "honig-2018-solanezumab",
        quote:
          "Solanezumab did not significantly affect cognitive decline in patients with mild Alzheimer's disease dementia",
        context:
          "Anti-Aβ antibody targeting soluble amyloid failed. Extracellular-only approach insufficient",
        projectRef:
          "Framework summary: Why every major trial has failed (Tau/Aβ antibodies)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "henley-2019-atabecestat",
    title:
      "Preliminary Results of a Trial of Atabecestat in Preclinical Alzheimer's Disease",
    authors: "Henley D, Raghavan N, Sperling R, et al.",
    journal: "New England Journal of Medicine",
    year: 2019,
    doi: "10.1056/NEJMc1813435",
    pmid: "30970197",
    url: "https://pubmed.ncbi.nlm.nih.gov/30970197/",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "henley-2019-atabecestat-c1",
        sourceId: "henley-2019-atabecestat",
        quote:
          "Atabecestat was associated with liver toxicity and cognitive worsening in at-risk individuals",
        context:
          "Another BACE inhibitor failure with cognitive worsening",
        projectRef:
          "Framework summary: Why every major trial has failed (BACE inhibitors)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "dapansutrile-pd-2025",
    title:
      "Dapansutrile (OLT1177) Phase 2 trial in Parkinson's disease",
    authors: "Olatec Therapeutics / Williams-Gray C.",
    journal: "Clinical trial (funded by Cure Parkinson's)",
    year: 2025,
    tags: ["clinical-trials", "parkinsons", "microglia"],
    citations: [
      {
        citationId: "dapansutrile-pd-2025-c1",
        sourceId: "dapansutrile-pd-2025",
        quote:
          "Phase 2 PD trial of dapansutrile funded by Cure Parkinson's, collaboration with Cambridge",
        context:
          "First oral NLRP3 inflammasome inhibitor in PD clinical trial",
        projectRef:
          "Cross-disease: NLRP3 inhibitor clinical pipeline",
      },
    ],
    verificationStatus: "unverifiable",
  },
];
