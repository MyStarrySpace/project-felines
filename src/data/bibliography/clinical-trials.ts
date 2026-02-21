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
          "Iron REDISTRIBUTION (not chelation) shows benefit in MSA. Validates FELINE iron maldistribution model",
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
  {
    id: "cummings-2014-alzrt",
    title:
      "Alzheimer's disease drug-development pipeline: few candidates, frequent failures",
    authors: "Cummings JL, Morstorf T, Zhong K.",
    journal: "Alzheimer's Research & Therapy",
    year: 2014,
    doi: "10.1186/alzrt269",
    pmid: "25024750",
    url: "https://pubmed.ncbi.nlm.nih.gov/25024750/",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "cummings-2014-alzrt-c1",
        sourceId: "cummings-2014-alzrt",
        quote:
          "Overall, 244 compounds were assessed in the decade of 2002 through 2012 and one was approved for marketing; excluding the 14 compounds currently in Phase 3, the success rate for advancing agents for regulatory approval is 0.4% (99.6% attrition).",
        context:
          "Landmark figure establishing AD as the hardest therapeutic area in drug development",
        projectRef:
          "Problem section: clinical trial success rate comparison bar chart (Alzheimer's bar)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wong-2019-biostatistics",
    title:
      "Estimation of clinical trial success rates and related parameters",
    authors: "Wong CH, Siah KW, Lo AW.",
    journal: "Biostatistics",
    year: 2019,
    doi: "10.1093/biostatistics/kxx069",
    pmid: "29394327",
    url: "https://pubmed.ncbi.nlm.nih.gov/29394327/",
    tags: ["clinical-trials"],
    citations: [
      {
        citationId: "wong-2019-biostatistics-c1",
        sourceId: "wong-2019-biostatistics",
        quote:
          "The overall POS ranges from a minimum of 3.4% for oncology to a maximum of 33.4% for vaccines (infectious disease).",
        context:
          "Cross-therapeutic-area comparison showing oncology at 3.4% Phase I-to-approval success",
        projectRef:
          "Problem section: clinical trial success rate comparison bar chart (oncology, infectious disease bars)",
      },
      {
        citationId: "wong-2019-biostatistics-c2",
        sourceId: "wong-2019-biostatistics",
        quote:
          "13.8% of all drug development programs eventually lead to approval",
        context:
          "Industry-wide baseline success rate across all therapeutic areas",
        projectRef:
          "Problem section: clinical trial success rate comparison bar chart (all drugs bar)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kim-2022-jad",
    title:
      "Alzheimer's Disease: Key Insights from Two Decades of Clinical Trial Failures",
    authors: "Kim CK, Lee YR, Ong L, Gold M, Kalali A, Sarkar J.",
    journal: "Journal of Alzheimer's Disease",
    year: 2022,
    doi: "10.3233/JAD-215699",
    pmid: "35342092",
    url: "https://pubmed.ncbi.nlm.nih.gov/35342092/",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "kim-2022-jad-c1",
        sourceId: "kim-2022-jad",
        quote:
          "These two successes against the 98 failures gives a 2.0% phase II and III success rate since 2003, when the previous novel compound was approved.",
        context:
          "Updated AD success rate (2003-2022): 2% at Phase II/III level",
        projectRef:
          "Problem section: clinical trial success rate context",
      },
      {
        citationId: "kim-2022-jad-c2",
        sourceId: "kim-2022-jad",
        quote:
          "risk (measured by probability of success) is almost 9 times higher (2.0% versus 17.8%); time for development is almost 40% longer (7.6 years versus 5.5 years); and cost is over 2.2 times greater ($5.69 billion versus $2.56 billion)",
        context:
          "AD drug development is 9x riskier, 40% slower, and 2.2x more expensive than industry average",
        projectRef:
          "Problem section: right-side explanatory text",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "vandyck-2023-nejm-lecanemab",
    title: "Lecanemab in Early Alzheimer's Disease",
    authors: "van Dyck CH, Swanson CJ, Aisen P, et al.",
    journal: "New England Journal of Medicine",
    year: 2023,
    doi: "10.1056/NEJMoa2212948",
    pmid: "36449413",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10040446/#:~:text=least-squares%20mean%20change%20from%20baseline%20at%2018%20months",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "vandyck-2023-nejm-lecanemab-c1",
        sourceId: "vandyck-2023-nejm-lecanemab",
        quote:
          "The adjusted least-squares mean change from baseline at 18 months was 1.21 with lecanemab and 1.66 with placebo (difference, \u22120.45; 95% confidence interval [CI], \u22120.67 to \u22120.23; P<0.001).",
        context:
          "27% slowing of decline (0.45/1.66) on CDR-SB scale, less than half a point on 18-point scale",
        location: "Results",
        projectRef:
          "Protein trials: Alzheimer's expanded detail (lecanemab efficacy)",
      },
      {
        citationId: "vandyck-2023-nejm-lecanemab-c2",
        sourceId: "vandyck-2023-nejm-lecanemab",
        quote:
          "Lecanemab resulted in infusion-related reactions in 26.4% of the participants and amyloid-related imaging abnormalities with edema or effusions in 12.6%.",
        context:
          "Combined ARIA-E (12.6%) and ARIA-H (17.3%) = 21.3% any ARIA",
        location: "Results, Safety",
        projectRef:
          "Protein trials: Alzheimer's expanded detail (ARIA incidence)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "mcdade-2022-alz-res-ther",
    title:
      "Lecanemab in patients with early Alzheimer's disease: detailed results on biomarker, cognitive, and clinical effects from the randomized and open-label extension of the phase 2 proof-of-concept study",
    authors:
      "McDade E, Cummings JL, Dhadda S, Swanson CJ, Reyderman L, Kanekiyo M, Koyama A, Irizarry M, Kramer LD, Bateman RJ.",
    journal: "Alzheimer's Research & Therapy",
    year: 2022,
    doi: "10.1186/s13195-022-01124-2",
    pmid: "36544184",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9768996/#:~:text=gradual%20re-accumulation%20of%20pathological%20biomarkers%20supports%20the%20need",
    tags: ["clinical-trials", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "mcdade-2022-alz-res-ther-c1",
        sourceId: "mcdade-2022-alz-res-ther",
        quote:
          "Clinical progression and gradual re-accumulation of pathological biomarkers supports the need for continued dosing, even after the observed clearance of brain amyloid.",
        context:
          "Off-treatment gap period (mean 24 months): biomarkers return toward baseline",
        location: "Discussion",
        projectRef:
          "Protein trials: Alzheimer's expanded detail (treatment discontinuation)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "miller-2022-nejm-tofersen",
    title: "Trial of Antisense Oligonucleotide Tofersen for SOD1 ALS",
    authors: "Miller TM, Cudkowicz ME, Genge A, et al.",
    journal: "New England Journal of Medicine",
    year: 2022,
    doi: "10.1056/NEJMoa2204705",
    pmid: "36129998",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11524200/#:~:text=tofersen%20reduced%20concentrations%20of%20SOD1",
    tags: ["clinical-trials", "als"],
    citations: [
      {
        citationId: "miller-2022-nejm-tofersen-c1",
        sourceId: "miller-2022-nejm-tofersen",
        quote:
          "In persons with SOD1 ALS, tofersen reduced concentrations of SOD1 in CSF and of neurofilament light chains in plasma over 28 weeks but did not improve clinical end points and was associated with adverse events.",
        context:
          "Primary endpoint (ALSFRS-R) not met, P=0.97. FDA approved on biomarker surrogate only.",
        location: "Conclusions",
        projectRef:
          "Protein trials: ALS expanded detail (tofersen VALOR trial failure)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "tarawneh-2024-alz-res-ther",
    title:
      "The search for clarity regarding 'clinically meaningful outcomes' in Alzheimer disease clinical trials: CLARITY-AD and Beyond",
    authors: "Tarawneh R, Pankratz VS.",
    journal: "Alzheimer's Research & Therapy",
    year: 2024,
    doi: "10.1186/s13195-024-01412-z",
    pmid: "38365811",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10870501/#:~:text=slowing%20in%20CDR-SB%20progression%20by",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "tarawneh-2024-alz-res-ther-c1",
        sourceId: "tarawneh-2024-alz-res-ther",
        quote:
          "slowing in CDR-SB progression by ~3.2 months at 12 months, ~5 months at 18 months, ~6.5 months at 2 years, and ~10 months at 3 years",
        context:
          "Translates the CDR-SB difference into practical time saved: ~5 months at the 18-month trial endpoint",
        location: "Results",
        projectRef:
          "Protein trials: Alzheimer's expanded detail (practical meaning of 27%)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "biogen-2024-aduhelm-withdrawal",
    title:
      "Biogen to Realign Resources for Alzheimer's Disease Franchise",
    authors: "Biogen Inc.",
    journal: "Press release (Biogen)",
    year: 2024,
    url: "https://investors.biogen.com/news-releases/news-release-details/biogen-realign-resources-alzheimers-disease-franchise#:~:text=reprioritizing%20resources%20to%20build%20a%20leading%20franchise",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "biogen-2024-aduhelm-withdrawal-c1",
        sourceId: "biogen-2024-aduhelm-withdrawal",
        quote:
          "Biogen is reprioritizing resources to build a leading franchise to address the multiple pathologies of the disease and patient needs.",
        context:
          "Aducanumab withdrawn Jan 2024; confirmatory ENVISION trial terminated; Medicare had restricted coverage to clinical trials only",
        location: "Press release",
        projectRef:
          "Protein trials: Alzheimer's expanded detail (aducanumab withdrawal)",
      },
    ],
    verificationStatus: "verified",
  },
];
