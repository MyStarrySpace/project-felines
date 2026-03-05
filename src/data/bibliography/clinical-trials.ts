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
      {
        citationId: "egan-2019-verubecestat-c2",
        sourceId: "egan-2019-verubecestat",
        quote:
          "The trial was terminated for futility after 1454 patients had been enrolled",
        context: "Early stopping due to lack of efficacy",
        projectRef:
          "Failed trials: Verubecestat halted early",
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
      "Alterity Therapeutics Announces Positive ATH434 Phase 2 Trial Results in Multiple System Atrophy Led By Robust Clinical Efficacy",
    authors: "Alterity Therapeutics.",
    journal: "Press release (GlobeNewsWire)",
    year: 2025,
    url: "https://www.globenewswire.com/news-release/2025/01/30/3017941/0/en/Alterity-Therapeutics-Announces-Positive-ATH434-Phase-2-Trial-Results-in-Multiple-System-Atrophy-Led-By-Robust-Clinical-Efficacy.html#:~:text=48%25%20slowing%20of%20clinical%20progression",
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
      {
        citationId: "ath434-2025-msa-c2",
        sourceId: "ath434-2025-msa",
        quote:
          "The 50 mg dose declined by a mean of 4.3 points over 52 weeks, equivalent to a 48% slowing of clinical progression (p=0.03)",
        context:
          "ATH434 Phase 2 primary endpoint result: clinically meaningful slowing of MSA progression",
        location: "Press release",
        projectRef:
          "Iron alternatives section: ATH434 trial status",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ayton-2025-jamaneurol",
    title: "Deferiprone in Alzheimer Disease: A Randomized Clinical Trial",
    authors: "Ayton S, Barton D, Brew B, et al.",
    journal: "JAMA Neurology",
    year: 2025,
    doi: "10.1001/jamaneurol.2024.3733",
    pmid: "39495531",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11536302/#:~:text=accelerated%20cognitive%20decline%20in%20patients%20with%20amyloid-confirmed%20early%20AD",
    tags: ["clinical-trials", "alzheimers", "iron"],
    citations: [
      {
        citationId: "ayton-2025-jamaneurol-c1",
        sourceId: "ayton-2025-jamaneurol",
        quote:
          "These trial findings show that deferiprone 15 mg/kg twice a day decreased hippocampal QSM and accelerated cognitive decline in patients with amyloid-confirmed early AD, suggesting that lowering iron with deferiprone is detrimental to patients with AD.",
        context:
          "3D trial: chelation removed iron the brain needs, worsening cognition despite reducing hippocampal iron",
        location: "Abstract, Conclusions",
        projectRef:
          "Drug browser: Deferiprone (AD) detail tooltip",
      },
      {
        citationId: "ayton-2025-jamaneurol-c2",
        sourceId: "ayton-2025-jamaneurol",
        quote:
          "change in NTB composite z score for deferiprone, \u22120.80 [95% CI, \u22120.98 to \u22120.62]; for placebo, \u22120.30 [95% CI, \u22120.54 to \u22120.06]",
        context: "Primary outcome NTB z-scores showing deferiprone worsened cognition",
        location: "Results",
        projectRef:
          "Findings section: Deferiprone NTB z-score comparison",
      },
      {
        citationId: "ayton-2025-jamaneurol-c3",
        sourceId: "ayton-2025-jamaneurol",
        quote:
          "81 were found to be eligible and consented to participate in a phase 2, double-masked, placebo-controlled randomized clinical trial",
        context:
          "3D trial enrollment: 81 patients randomized (53 deferiprone, 28 placebo)",
        location: "Abstract, Methods",
        projectRef:
          "Drug browser: Deferiprone (AD) detail tooltip — enrollment",
      },
      {
        citationId: "ayton-2025-jamaneurol-c4",
        sourceId: "ayton-2025-jamaneurol",
        quote:
          "deferiprone decreased QSM (iron) of the hippocampus compared with placebo",
        context:
          "Iron chelation worked: hippocampal iron fell, but cognition worsened",
        location: "Results",
        projectRef:
          "Drug browser: Deferiprone (AD) detail tooltip — hippocampal iron reduction",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "crapper-mclachlan-1991-lancet",
    title:
      "Intramuscular desferrioxamine in patients with Alzheimer's disease",
    authors: "Crapper McLachlan DR, Dalton AJ, Kruck TP, et al.",
    journal: "The Lancet",
    year: 1991,
    doi: "10.1016/0140-6736(91)92978-b",
    pmid: "1674295",
    url: "https://pubmed.ncbi.nlm.nih.gov/1674295/#:~:text=significant%20reduction%20in%20the%20rate%20of%20decline",
    tags: ["clinical-trials", "alzheimers", "iron"],
    citations: [
      {
        citationId: "crapper-mclachlan-1991-lancet-c1",
        sourceId: "crapper-mclachlan-1991-lancet",
        quote:
          "Desferrioxamine treatment led to significant reduction in the rate of decline of daily living skills as assessed by both group means (p = 0.03) and variances (p less than 0.04). The mean rate of decline was twice as rapid for the no-treatment group.",
        context:
          "First iron chelation trial in AD: 48 patients, 24 months IM deferoxamine. Slowed decline but never replicated.",
        location: "Abstract",
        projectRef:
          "Drug browser: Deferoxamine (AD) detail tooltip",
      },
    ],
    verificationStatus: "verified",
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

  // ── Iron alternatives section sources ──────────────────────────────

  {
    id: "mohamed-2019-biomed-pharmacother",
    title:
      "A pilot study on the effect of lactoferrin on Alzheimer's disease pathological sequelae: Impact of the p-Akt/PTEN pathway",
    authors: "Mohamed WA, Salama RM, Schaalan MF.",
    journal: "Biomedicine & Pharmacotherapy",
    year: 2019,
    doi: "10.1016/j.biopha.2018.12.118",
    pmid: "30611996",
    url: "https://pubmed.ncbi.nlm.nih.gov/30611996/#:~:text=enhanced%20cognitive%20function%20assessed%20by%20the%20Mini-Mental%20State%20Examination",
    tags: ["clinical-trials", "iron", "alzheimers"],
    citations: [
      {
        citationId: "mohamed-2019-biomed-pharmacother-c1",
        sourceId: "mohamed-2019-biomed-pharmacother",
        quote:
          "Improvement in the aforementioned AD surrogate markers post-LF treatment was reflected in enhanced cognitive function assessed by the Mini-Mental State Examination (MMSE) and Alzheimer's Disease Assessment Scale-Cognitive Subscale 11-item (ADAS-COG 11) questionnaires as clinical endpoints.",
        context:
          "Lactoferrin pilot study in AD showed cognitive improvement on standard scales",
        location: "Abstract",
        projectRef:
          "Iron alternatives section: Lactoferrin trial status",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "zanardi-2018-embo",
    title:
      "Ceruloplasmin replacement therapy ameliorates neurological symptoms in a preclinical model of aceruloplasminemia",
    authors: "Zanardi A, Conti A, Cremonesi M, et al.",
    journal: "EMBO Molecular Medicine",
    year: 2018,
    doi: "10.15252/emmm.201708361",
    pmid: "29183916",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5760856/#:~:text=treatment%20with%20Cp%20promoted%20a%20rescue%20of%20Purkinje%20cell%20loss",
    tags: ["clinical-trials", "iron"],
    citations: [
      {
        citationId: "zanardi-2018-embo-c1",
        sourceId: "zanardi-2018-embo",
        quote:
          "Ceruloplasmin-treated mice showed amelioration of motor incoordination that was associated with diminished loss of Purkinje neurons and reduced brain iron deposition, in particular in the choroid plexus.",
        context:
          "Ceruloplasmin replacement prevented neuron loss and reduced brain iron in aceruloplasminemia model",
        location: "Abstract",
        projectRef:
          "Iron alternatives section: Ceruloplasmin trial status",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kedrion-2025-fda-orphan",
    title:
      "Kedrion receives FDA Orphan Drug Designation for investigational plasma-derived treatment for Congenital Aceruloplasminemia",
    authors: "Kedrion Biopharma.",
    journal: "Press release (PR Newswire)",
    year: 2025,
    url: "https://www.prnewswire.com/news-releases/kedrion-receives-fda-orphan-drug-designation-for-investigational-plasma-derived-treatment-for-congenital-aceruloplasminemia-302524420.html#:~:text=Orphan%20Drug%20Designation%20from%20the%20FDA",
    tags: ["clinical-trials", "iron"],
    citations: [
      {
        citationId: "kedrion-2025-fda-orphan-c1",
        sourceId: "kedrion-2025-fda-orphan",
        quote:
          "Receiving Orphan Drug Designation from the FDA is a fundamental step in our journey to bring hope to patients affected by Congenital Aceruloplasminemia.",
        context:
          "First ceruloplasmin replacement therapy to receive FDA designation for neurodegeneration-related disease",
        location: "Press release",
        projectRef:
          "Iron alternatives section: Ceruloplasmin trial status",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "fillebeen-1999-jbc",
    title:
      "Receptor-mediated transcytosis of lactoferrin through the blood-brain barrier",
    authors: "Fillebeen C, Descamps L, Dehouck MP, et al.",
    journal: "Journal of Biological Chemistry",
    year: 1999,
    doi: "10.1074/jbc.274.11.7011",
    pmid: "10066755",
    url: "https://pubmed.ncbi.nlm.nih.gov/10066755/#:~:text=iron%20may%20cross%20the%20bovine%20brain%20capillary%20endothelial%20cells",
    tags: ["iron"],
    citations: [
      {
        citationId: "fillebeen-1999-jbc-c1",
        sourceId: "fillebeen-1999-jbc",
        quote:
          "A specific unidirectional transport then occurred via a receptor-mediated process with no apparent intraendothelial degradation.",
        context:
          "Lactoferrin crosses the BBB via receptor-mediated transcytosis",
        location: "Abstract",
        projectRef:
          "Iron alternatives section: Lactoferrin description",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "takeda-2026-rusfertide-nda",
    title:
      "Takeda and Protagonist Submit NDA for Rusfertide in Polycythemia Vera",
    authors: "Takeda Pharmaceutical Company.",
    journal: "Press release (Takeda)",
    year: 2026,
    url: "https://www.takeda.com/newsroom/newsreleases/2025/new-drug-application-pv/#:~:text=mimics%20the%20action%20of%20hepcidin",
    tags: ["clinical-trials", "iron"],
    citations: [
      {
        citationId: "takeda-2026-rusfertide-nda-c1",
        sourceId: "takeda-2026-rusfertide-nda",
        quote:
          "Rusfertide is a first-in-class investigational subcutaneous treatment that mimics the action of hepcidin, a natural hormone that regulates iron homeostasis and red blood cell production.",
        context:
          "Hepcidin mimetic with NDA submitted for PV, never tested for neurodegeneration",
        location: "Press release",
        projectRef:
          "Iron alternatives section: Hepcidin trial status",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "pulsesight-2025-pst611",
    title:
      "First patient dosed in the Phase I clinical trial of PulseSight Therapeutics' PST-611 treatment for dry AMD/Geographic Atrophy",
    authors: "PulseSight Therapeutics.",
    journal: "Press release (GlobeNewsWire)",
    year: 2025,
    url: "https://www.globenewswire.com/news-release/2025/07/07/3110761/0/en/First-patient-dosed-in-the-Phase-I-clinical-trial-of-PulseSight-Therapeutics-PST-611-treatment-for-dry-AMD-Geographic-Atrophy.html#:~:text=expressing%20human%20transferrin",
    tags: ["clinical-trials", "iron"],
    citations: [
      {
        citationId: "pulsesight-2025-pst611-c1",
        sourceId: "pulsesight-2025-pst611",
        quote:
          "PST-611 is a first-in-class non-viral vectorized therapy for the treatment of dry Age-related Macular Degeneration (AMD) /Geographic Atrophy (GA), expressing human transferrin, a highly potent iron regulator, playing a central role in restoring normal iron homeostasis.",
        context:
          "Transferrin gene therapy in Phase 1 for AMD; proof-of-concept for transferrin as iron management therapy",
        location: "Press release",
        projectRef:
          "Iron alternatives section: Transferrin trial status",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wen-2026-ijn-ferritin",
    title:
      "The Landscape of Ferritin Nanocages for Neurodegenerative Diseases Treatment",
    authors: "Wen S, Gao J, Sun J, et al.",
    journal: "International Journal of Nanomedicine",
    year: 2026,
    doi: "10.2147/IJN.S571993",
    url: "https://www.dovepress.com/the-landscape-of-ferritin-nanocages-for-neurodegenerative-diseases-tre-peer-reviewed-fulltext-article-IJN#:~:text=high-affinity%20binding%20domains%20for%20transferrin%20receptor%201",
    tags: ["iron"],
    citations: [
      {
        citationId: "wen-2026-ijn-ferritin-c1",
        sourceId: "wen-2026-ijn-ferritin",
        quote:
          "Upon binding to TfR1, HFn is internalized via clathrin-coated pit formation, resulting in transport vesicles that traverse endothelial cells",
        context:
          "Ferritin nanocages cross the BBB via TfR1-mediated transcytosis",
        location: "Full text",
        projectRef:
          "Iron alternatives section: Ferritin nanocages description",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "alves-2023-neurology",
    title:
      "Accelerated Brain Volume Loss Caused by Anti-\u03B2-Amyloid Drugs: A Systematic Review and Meta-analysis",
    authors: "Alves F, Kalinowski P, Ayton S.",
    journal: "Neurology",
    year: 2023,
    doi: "10.1212/WNL.0000000000207156",
    pmid: "36973044",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10186239/#:~:text=enlargement%20of%20ventricles%20was%20strongly%20correlated%20with",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "alves-2023-neurology-c1",
        sourceId: "alves-2023-neurology",
        quote:
          "the enlargement of ventricles was strongly correlated with % ARIA (r = 0.86, p = 6.22 \u00D7 10\u207B\u2077)",
        context:
          "Anti-amyloid antibodies accelerate brain atrophy; ventricular enlargement correlates with ARIA",
        location: "Results",
        projectRef:
          "Insight section: mAb critique (brain volume loss)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wolters-2024-alz-dement",
    title:
      "Potential impact of unblinding on observed treatment effects in Alzheimer's disease trials",
    authors: "Wolters FJ, Labrecque JA.",
    journal: "Alzheimer's & Dementia",
    year: 2024,
    doi: "10.1002/alz.13690",
    pmid: "38380503",
    url: "https://pubmed.ncbi.nlm.nih.gov/38380503/#:~:text=Psychological%20treatment%20effects%20due%20to%20unblinding",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "wolters-2024-alz-dement-c1",
        sourceId: "wolters-2024-alz-dement",
        quote:
          "Psychological treatment effects due to unblinding may explain a substantial share of observed treatment effects in RCTs",
        context:
          "ARIA in 22-44% of treatment arms likely unblinded trials; placebo/nocebo effects could explain CDR-SB differences",
        location: "Abstract",
        projectRef:
          "Insight section: mAb critique (unblinding)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "muir-2024-alz-dement",
    title:
      "Minimal clinically important difference in Alzheimer's disease: Rapid review",
    authors: "Muir RT, Hill MD, Black SE, Smith EE.",
    journal: "Alzheimer's & Dementia",
    year: 2024,
    doi: "10.1002/alz.13770",
    pmid: "38561021",
    url: "https://pubmed.ncbi.nlm.nih.gov/38561021/#:~:text=Average%20treatment%20effects%20in%20recent%20trials",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "muir-2024-alz-dement-c1",
        sourceId: "muir-2024-alz-dement",
        quote:
          "Average treatment effects in recent trials of anti-amyloid disease modifying monoclonal antibodies are lower than previously published MCIDs",
        context:
          "Lecanemab's 0.45-point CDR-SB benefit is below the 1-point MCID threshold for MCI",
        location: "Abstract",
        projectRef:
          "Insight section: mAb critique (clinical significance)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "finkelstein-2017-actaneuropathol",
    title:
      "The novel compound PBT434 prevents iron mediated neurodegeneration and alpha-synuclein toxicity in multiple models of Parkinson's disease",
    authors: "Finkelstein DI, Billings JL, Adlard PA, et al.",
    journal: "Acta Neuropathologica Communications",
    year: 2017,
    doi: "10.1186/s40478-017-0456-2",
    pmid: "28659169",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5490188/#:~:text=binds%20iron%20sufficiently%20to%20abolish%20pathological%20reaction",
    tags: ["iron", "parkinsons", "clinical-trials"],
    citations: [
      {
        citationId: "finkelstein-2017-actaneuropathol-c1",
        sourceId: "finkelstein-2017-actaneuropathol",
        quote:
          "PBT434, an orally bioavailable 8-hydroxyquinazolin-4(3H)-one, binds iron sufficiently to abolish pathological reaction with α-synuclein, but with an affinity that is designed not to disrupt physiological iron homeostasis",
        context:
          "ATH434 (formerly PBT434) moderate-affinity iron binding mechanism",
        projectRef:
          "Iron alternatives section: ATH434 description",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "bailey-2025-jbc",
    title:
      "Potent antioxidant and mitochondrial-protective effects of ATH434, a moderate affinity iron chaperone",
    authors: "Bailey DK, Nihlawi R, Bradbury MJ, et al.",
    journal: "Journal of Biological Chemistry",
    year: 2025,
    doi: "10.1016/j.jbc.2025.110595",
    pmid: "40812418",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12450639/#:~:text=functioned%20as%20a%20ferrous%20iron%20chaperone",
    tags: ["iron", "clinical-trials"],
    citations: [
      {
        citationId: "bailey-2025-jbc-c1",
        sourceId: "bailey-2025-jbc",
        quote:
          "functioned as a ferrous iron chaperone in contrast to being a ferric iron chelator",
        context:
          "ATH434 is an iron chaperone, not a chelator",
        projectRef:
          "Iron alternatives section: ATH434 description (chaperone vs chelator)",
      },
      {
        citationId: "bailey-2025-jbc-c2",
        sourceId: "bailey-2025-jbc",
        quote:
          "supports the redistribution of excess iron, supplementing the function of the cytoplasmic and nuclear PCBP1/2 iron chaperones",
        context:
          "ATH434 mimics endogenous PCBP1/2 iron chaperones",
        projectRef:
          "Iron alternatives section: ATH434 description (PCBP1/2 mimicry)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "vandyck-2023-nejm",
    title:
      "Lecanemab in Early Alzheimer\u2019s Disease",
    authors: "van Dyck CH, Swanson CJ, Aisen P, et al.",
    journal: "New England Journal of Medicine",
    year: 2023,
    doi: "10.1056/NEJMoa2212948",
    pmid: "36449413",
    url: "https://pubmed.ncbi.nlm.nih.gov/36449413/#:~:text=adjusted%20least-squares%20mean%20change%20from%20baseline",
    tags: ["clinical-trials", "alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "vandyck-2023-nejm-c1",
        sourceId: "vandyck-2023-nejm",
        quote:
          "The adjusted least-squares mean change from baseline at 18 months was 1.21 with lecanemab and 1.66 with placebo (difference, \u22120.45; 95% CI, \u22120.67 to \u22120.23; P<0.001)",
        context:
          "CLARITY-AD primary endpoint: 0.45-point CDR-SB difference at 18 months",
        projectRef:
          "Lecanemab critique section: trial data for graph",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "espay-2024-eneuro",
    title:
      "Lecanemab and Donanemab as Therapies for Alzheimer\u2019s Disease: An Illustrated Perspective on the Data",
    authors: "Espay AJ, Kepp KP, Herrup K.",
    journal: "eNeuro",
    year: 2024,
    doi: "10.1523/ENEURO.0319-23.2024",
    pmid: "38951040",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11218032/#:~:text=differences%20imperceptible%20to%20patients",
    tags: ["clinical-trials", "alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "espay-2024-eneuro-c1",
        sourceId: "espay-2024-eneuro",
        quote:
          "Average changes of \u223C3 on the iADRS and \u223C0.5 on the CDR-SB represent differences imperceptible to patients, their families, and their physicians",
        context:
          "Clinical imperceptibility of lecanemab effect size",
        projectRef:
          "Lecanemab critique section: effect size imperceptibility",
      },
      {
        citationId: "espay-2024-eneuro-c2",
        sourceId: "espay-2024-eneuro",
        quote:
          "This translates to a treatment effect of 2.5% (0.45 / 18) for lecanemab",
        context:
          "Full-scale percentage reframing of lecanemab effect",
        projectRef:
          "Lecanemab critique section: 2.5% vs 27% framing",
      },
      {
        citationId: "espay-2024-eneuro-c3",
        sourceId: "espay-2024-eneuro",
        quote:
          "For this metric to remain constant, the curves must separate linearly. However, if over time the curves become parallel, as might easily be the case for many patients, then this metric will decline",
        context:
          "Linear divergence assumption underlying the 27% figure",
        projectRef:
          "Lecanemab critique section: linear assumption problem",
      },
      {
        citationId: "espay-2024-eneuro-c4",
        sourceId: "espay-2024-eneuro",
        quote:
          "The percent \u2018improvement\u2019 was then calculated as [X \u2212 Y] / Y. This is how the 27% effect figure is obtained.",
        context:
          "Derivation of the 27% figure from trial data",
        projectRef:
          "Lecanemab critique section: 27% calculation explanation",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "daly-2024-alz-dement",
    title:
      "Are lecanemab and donanemab disease\u2010modifying therapies?",
    authors: "Daly T, Kepp KP, Imbimbo BP.",
    journal: "Alzheimer\u2019s & Dementia",
    year: 2024,
    doi: "10.1002/alz.14114",
    pmid: "39096161",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11497653/#:~:text=slopes%20of%20the%20scales%20based%20on%20caregiver%20input%20diverge",
    tags: ["clinical-trials", "alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "daly-2024-alz-dement-c1",
        sourceId: "daly-2024-alz-dement",
        quote:
          "The slopes of the scales based on caregiver input diverge, while the slopes of the objective cognitive variables collected by the patients are parallel.",
        context:
          "CDR-SB diverges but ADAS-Cog14/MMSE parallel \u2014 measurement-dependent effect",
        projectRef:
          "Lecanemab critique section: caregiver vs objective measures",
      },
      {
        citationId: "daly-2024-alz-dement-c2",
        sourceId: "daly-2024-alz-dement",
        quote:
          "Available data do not confirm that lecanemab and donanemab are disease\u2010modifying.",
        context:
          "Anti-amyloid antibodies not confirmed disease-modifying",
        projectRef:
          "Lecanemab critique section: disease-modification conclusion",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "samtani-2014-ndt",
    title:
      "Disease progression model for Clinical Dementia Rating\u2013Sum of Boxes in mild cognitive impairment and Alzheimer\u2019s subjects from the Alzheimer\u2019s Disease Neuroimaging Initiative",
    authors: "Samtani MN, Raghavan N, Novak G, Nandy P, Narayan VA.",
    journal: "Neuropsychiatric Disease and Treatment",
    year: 2014,
    doi: "10.2147/NDT.S62323",
    pmid: "24926196",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4049432/#:~:text=characteristic%20of%20an%20S-shaped%20progression%20curve",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "samtani-2014-ndt-c1",
        sourceId: "samtani-2014-ndt",
        quote:
          "This inverted U-shaped relationship for progression rate vs baseline score is a characteristic of an S-shaped progression curve",
        context:
          "CDR-SB progression follows a sigmoidal (S-shaped) trajectory",
        projectRef:
          "Lecanemab critique section: sigmoidal disease progression",
      },
      {
        citationId: "samtani-2014-ndt-c2",
        sourceId: "samtani-2014-ndt",
        quote:
          "The results show that scores increase exponentially during the early phase of the disease and as AD worsens the scores theoretically level off as the CDR\u2013SB approaches 18",
        context:
          "CDR-SB accelerates early then decelerates, producing sigmoidal shape",
        projectRef:
          "Lecanemab critique section: sigmoidal trajectory detail",
      },
    ],
    verificationStatus: "verified",
  },
  // ---- Multi-layer treatments & alternatives insight section ----
  {
    id: "cummings-2022-alzdement",
    title:
      "The costs of developing treatments for Alzheimer's disease: A retrospective exploration",
    authors: "Cummings JL, Goldman DP, Simmons-Stern NR, Ponton E.",
    journal: "Alzheimer's & Dementia",
    year: 2022,
    doi: "10.1002/alz.12450",
    pmid: "34581499",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8940715/#:~:text=cumulative%20private%20expenditures%20on%20clinical%20stage%20AD%20R%26D%20were%20estimated%20at%20%2442.5%20billion",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "cummings-2022-alzdement-c1",
        sourceId: "cummings-2022-alzdement",
        quote:
          "Since 1995, cumulative private expenditures on clinical stage AD R&D were estimated at $42.5 billion",
        context: "Total private spending on Alzheimer's drug development",
        projectRef:
          "Alternatives insight: amyloid beta spending comparison",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "sabbagh-2025-alzdement",
    title:
      "Blarcamesine in Early Alzheimer Disease Phase 2b/3 Randomized Clinical Trial",
    authors: "Sabbagh MN, Chezem WR, Jin K, Missling CU.",
    journal: "Alzheimer's & Dementia",
    year: 2025,
    doi: "10.1002/alz.090729",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11713060/#:~:text=blarcamesine%20group%20demonstrated%20improvement%20compared%20to%20the%20placebo%20group%20in%20all%20clinical%20endpoints",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "sabbagh-2025-alzdement-c1",
        sourceId: "sabbagh-2025-alzdement",
        quote:
          "The blarcamesine group demonstrated improvement compared to the placebo group in all clinical endpoints at 48 weeks",
        context:
          "Phase 2b/3 trial results for sigma-1 receptor agonist",
        projectRef:
          "Multi-layer treatments: blarcamesine efficacy",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "shen-2024-frontpharmacol",
    title:
      "Molecular mechanisms and therapeutic potential of lithium in Alzheimer's disease: repurposing an old class of drugs",
    authors: "Shen Y, Zhao M, Zhao P, et al.",
    journal: "Frontiers in Pharmacology",
    year: 2024,
    doi: "10.3389/fphar.2024.1408462",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1408462/full#:~:text=lithium%20can%20reduce%20amyloid%20deposition%20and%20tau%20phosphorylation%2C%20regulate%20autophagy",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "shen-2024-frontpharmacol-c1",
        sourceId: "shen-2024-frontpharmacol",
        quote:
          "lithium can reduce amyloid deposition and tau phosphorylation, regulate autophagy, inflammation, oxidative stress",
        context: "Lithium multi-target neuroprotection mechanisms",
        projectRef:
          "Multi-layer treatments: lithium multi-layer note",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "chan-2022-plosone",
    title:
      "Gamma frequency sensory stimulation in mild probable Alzheimer's dementia patients: Results of feasibility and pilot studies",
    authors: "Chan D, Suk HJ, Jackson BL, et al.",
    journal: "PLoS One",
    year: 2022,
    doi: "10.1371/journal.pone.0278412",
    pmid: "36454969",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9714888/#:~:text=lesser%20ventricular%20dilation%20and%20hippocampal%20atrophy",
    tags: ["clinical-trials", "alzheimers"],
    citations: [
      {
        citationId: "chan-2022-plosone-c1",
        sourceId: "chan-2022-plosone",
        quote:
          "the group receiving 40Hz stimulation showed lesser ventricular dilation and hippocampal atrophy, increased functional connectivity in the default mode network",
        context:
          "40Hz gamma stimulation reduces brain atrophy and improves connectivity",
        projectRef:
          "Multi-layer treatments: 40 Hz gamma stimulation note",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "yehia-2024-molneurodegen",
    title:
      "Melatonin: a ferroptosis inhibitor with potential therapeutic efficacy for the post-COVID-19 trajectory of accelerated brain aging and neurodegeneration",
    authors: "Yehia A, Abulseoud OA.",
    journal: "Molecular Neurodegeneration",
    year: 2024,
    doi: "10.1186/s13024-024-00728-6",
    pmid: "38641847",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11031980/#:~:text=Melatonin%20can%20block%20the%20leading%20events%20of%20ferroptosis%20since%20it%20is%20an%20efficient%20anti-inflammatory%2C%20iron%20chelator",
    tags: ["ferroptosis", "iron", "clinical-trials"],
    citations: [
      {
        citationId: "yehia-2024-molneurodegen-c1",
        sourceId: "yehia-2024-molneurodegen",
        quote:
          "Melatonin can block the leading events of ferroptosis since it is an efficient anti-inflammatory, iron chelator, antioxidant, angiotensin II antagonist, and clock gene regulator",
        context:
          "Melatonin as multi-mechanism ferroptosis inhibitor",
        projectRef:
          "Multi-layer treatments: melatonin note",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "song-2020-frontneurosci",
    title:
      "Nrf2 and Ferroptosis: A New Research Direction for Neurodegenerative Diseases",
    authors: "Song X, Long D.",
    journal: "Frontiers in Neuroscience",
    year: 2020,
    doi: "10.3389/fnins.2020.00267",
    pmid: "32372896",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7186402/#:~:text=Nrf2%20can%20directly%20or%20indirectly%20regulate%20GPX4%20protein%20content",
    tags: ["ferroptosis", "iron"],
    citations: [
      {
        citationId: "song-2020-frontneurosci-c1",
        sourceId: "song-2020-frontneurosci",
        quote:
          "Nrf2 can directly or indirectly regulate GPX4 protein content...intracellular free iron content...mitochondrial function...thereby regulating ferroptosis process",
        context:
          "Nrf2 as master regulator of ferroptosis pathways",
        projectRef:
          "Multi-layer treatments: sulforaphane Nrf2 note",
      },
    ],
    verificationStatus: "verified",
  },
];
