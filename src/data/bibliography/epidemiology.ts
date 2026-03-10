import type { Source } from "./types";

export const epidemiologySources: Source[] = [
  {
    id: "jagust-2021-neurology",
    title:
      "Temporal Dynamics of β-Amyloid Accumulation in Aging and Alzheimer Disease",
    authors: "Jagust WJ, Landau SM.",
    journal: "Neurology",
    year: 2021,
    doi: "10.1212/WNL.0000000000011524",
    pmid: "33408147",
    url: "https://pubmed.ncbi.nlm.nih.gov/33408147/",
    tags: ["epidemiology", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "jagust-2021-neurology-c1",
        sourceId: "jagust-2021-neurology",
        quote:
          "The relationship between time and brain Aβ was sigmoidal, taking 6.4 years to transition from amyloid negative to positive and another 13.9 years to the onset of MCI.",
        context:
          "Amyloid accumulation follows sigmoidal kinetics: 6.4 years to positivity, 13.9 more to MCI",
        projectRef:
          "Kinetics model Part III: empirical data on amyloid accumulation, sigmoidal kinetics",
          fragmentText: "The relationship between time and brain A was",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "barthelemy-2024-annneurol",
    title:
      "Timing of Biomarker Changes in Sporadic Alzheimer's Disease in Estimated Years from Symptom Onset",
    authors: "Barthélemy NR, et al.",
    journal: "Annals of Neurology",
    year: 2024,
    // DOI 10.1002/ana.26875 points to an unrelated ALS paper; correct DOI needs verification
    tags: ["epidemiology", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "barthelemy-2024-annneurol-c1",
        sourceId: "barthelemy-2024-annneurol",
        quote:
          "CSF Aβ42/Aβ40, plasma Aβ42/Aβ40, and CSF pT217/T217 change 15-19 years before symptom onset",
        context:
          "Establishes precise biomarker timing sequence in sporadic AD",
        projectRef:
          "Kinetics model Part VII: established AD biomarker sequence",
      },
    ],
    verificationStatus: "unverified",
  },
  {
    id: "barthelemy-2021-neurology",
    title:
      "Predicting Symptom Onset in Sporadic Alzheimer Disease With Amyloid PET",
    authors: "Barthélemy NR, et al.",
    journal: "Neurology",
    year: 2021,
    // DOI 10.1212/WNL.0000000000012775 points to a Schindler et al. paper; correct DOI needs verification
    tags: ["epidemiology", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "barthelemy-2021-neurology-c1",
        sourceId: "barthelemy-2021-neurology",
        quote:
          "Tipping point at SUVR ~1.2: below threshold stochastic and weakly predicted (r = 0.17), above threshold deterministic with strong correlation",
        context:
          "Nucleation threshold concept: below = reversible, above = autocatalytic seeding",
        projectRef:
          "Kinetics model Part III: nucleation threshold, tipping point at SUVR 1.2",
      },
    ],
    verificationStatus: "unverified",
  },
  {
    id: "jansen-2022-jamaneurol",
    title:
      "Prevalence Estimates of Amyloid Abnormality Across the Alzheimer Disease Clinical Spectrum",
    authors: "Jansen WJ, Janssen O, Tijms BM, et al.",
    journal: "JAMA Neurology",
    year: 2022,
    doi: "10.1001/jamaneurol.2021.5216",
    pmid: "35099509",
    url: "https://pubmed.ncbi.nlm.nih.gov/35099509/",
    tags: ["epidemiology", "alzheimers"],
    citations: [
      {
        citationId: "jansen-2022-jamaneurol-c1",
        sourceId: "jansen-2022-jamaneurol",
        quote:
          "This cross-sectional, individual-participant pooled study included participants from 85 Amyloid Biomarker Study cohorts to estimate the prevalence of amyloid abnormality and examine the potential implications of age, sex, APOE genotype, cognitive status, and biomarker modality on these estimates.",
        context:
          "Amyloid prevalence meta-analysis across 85 cohorts by age, sex, APOE genotype",
        projectRef: "Epidemiology: amyloid prevalence data",
        fragmentText: "This cross-sectional, individual-participant pooled study included participants from",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "taquet-2024-natmed",
    title:
      "The recombinant shingles vaccine is associated with lower risk of dementia",
    authors: "Taquet M, Dercon Q, Todd JA, Harrison PJ.",
    journal: "Nature Medicine",
    year: 2024,
    doi: "10.1038/s41591-024-03201-5",
    pmid: "39053634",
    url: "https://pubmed.ncbi.nlm.nih.gov/39053634/",
    tags: ["epidemiology", "covid"],
    citations: [
      {
        citationId: "taquet-2024-natmed-c1",
        sourceId: "taquet-2024-natmed",
        quote:
          "Recombinant vaccine: 17% increase in diagnosis-free time, translating to 164 additional days without dementia diagnosis",
        context:
          "Shingles vaccination reduces dementia risk; vaccine prevents VZV-driven FELINE cascade",
        projectRef:
          "Cross-disease: VZV vaccination reduces dementia risk",
          fragmentText: "17 increase in diagnosis-free time, translating",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "taquet-2025-npjvaccines",
    title:
      "Lower risk of dementia with AS01-adjuvanted vaccination against shingles and respiratory syncytial virus infections",
    authors: "Taquet M, Todd JA, Harrison PJ.",
    journal: "npj Vaccines",
    year: 2025,
    doi: "10.1038/s41541-025-01172-3",
    pmid: "40562756",
    url: "https://pubmed.ncbi.nlm.nih.gov/40562756/",
    tags: ["epidemiology", "ebv"],
    citations: [
      {
        citationId: "taquet-2025-npjvaccines-c1",
        sourceId: "taquet-2025-npjvaccines",
        quote:
          "No difference between AS01-adjuvanted shingles and RSV vaccines in dementia risk reduction despite different antigens",
        context:
          "Suggests AS01 adjuvant itself provides neuroprotection via IFNγ pathway",
        projectRef:
          "Cross-disease: AS01 adjuvant mechanism for dementia prevention",
          fragmentText: "shingles and RSV vaccines",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "eyting-2025-nature",
    title:
      "A natural experiment on the effect of herpes zoster vaccination on dementia",
    authors: "Eyting M, Xie M, Michalik F, et al.",
    journal: "Nature",
    year: 2025,
    doi: "10.1038/s41586-025-08800-x",
    pmid: "40175543",
    url: "https://pubmed.ncbi.nlm.nih.gov/40175543/",
    tags: ["epidemiology", "ebv"],
    citations: [
      {
        citationId: "eyting-2025-nature-c1",
        sourceId: "eyting-2025-nature",
        quote:
          "Using these comparison groups in a regression discontinuity design, we show that receiving the zoster vaccine reduced the probability of a new dementia diagnosis over a follow-up period of 7 years by 3.5 percentage points (95% confidence interval (CI) = 0.6-7.1, P = 0.019), corresponding to a 20.0% (95% CI = 6.5-33.4) relative reduction.",
        context:
          "Zoster vaccine reduced dementia diagnosis probability by 20% over 7 years",
        projectRef:
          "Cross-disease: VZV vaccine causal evidence for dementia prevention",
          fragmentText: "Using these comparison groups in a regression discontinuity",
      },
    ],
    verificationStatus: "verified",
  },
];
