/**
 * Drug browser data — 61 drugs across 13 categories
 * for the interactive drug category browser section.
 */

export type DrugOutcome =
  | "worsened"
  | "failed"
  | "halted"
  | "mixed"
  | "modest"
  | "approved"
  | "contested"
  | "biomarker"
  | "ongoing"
  | "early"
  | "marginal"
  | "signal"
  | "improved";

export type DiseaseTarget =
  | "AD"
  | "PD"
  | "ALS"
  | "HD"
  | "PSP"
  | "MSA"
  | "multi";

export type TrialPhase = "1" | "1b/2" | "2" | "2/3" | "3" | "approved";

export interface Drug {
  id: number;
  name: string;
  company: string;
  category: string;
  disease: DiseaseTarget;
  phase: TrialPhase;
  outcome: DrugOutcome;
  note: string;
  /** 2-3 sentence expanded explanation */
  detail?: string;
  /** Text-based citation for tooltip display */
  attribution?: string;
  /** Bibliography source ID for traceability */
  sourceId?: string;
}

export interface DrugCategory {
  id: string;
  label: string;
  shortLabel: string;
}

export const drugCategories: DrugCategory[] = [
  { id: "anti-amyloid", label: "Anti-amyloid antibodies", shortLabel: "Anti-A\u03B2" },
  { id: "bace", label: "BACE inhibitors", shortLabel: "BACE" },
  { id: "anti-tau", label: "Anti-tau antibodies & ASOs", shortLabel: "Anti-tau" },
  { id: "anti-asyn", label: "Anti-\u03B1-synuclein", shortLabel: "Anti-\u03B1Syn" },
  { id: "htt-lowering", label: "Huntingtin lowering", shortLabel: "HTT" },
  { id: "sod1", label: "SOD1 targeting", shortLabel: "SOD1" },
  { id: "lrrk2", label: "LRRK2 inhibitors", shortLabel: "LRRK2" },
  { id: "gba", label: "GBA modulators", shortLabel: "GBA" },
  { id: "iron", label: "Iron chelators / modulators", shortLabel: "Iron" },
  { id: "glp1", label: "GLP-1 agonists", shortLabel: "GLP-1" },
  { id: "anti-inflammatory", label: "Anti-inflammatory / immune", shortLabel: "Immune" },
  { id: "antiviral", label: "Antiviral", shortLabel: "Antiviral" },
  { id: "antioxidant", label: "Antioxidant / neuroprotective", shortLabel: "Neuroprot." },
];

export const drugs: Drug[] = [
  // 1. Anti-amyloid antibodies (AD)
  {
    id: 1, name: "AN1792", company: "Elan/Wyeth", category: "anti-amyloid", disease: "AD", phase: "2", outcome: "halted",
    note: "Meningoencephalitis; first active A\u03B2 vaccine",
    detail: "Phase IIa trial: 300 patients immunized, 72 placebo. 6% (18/300) developed meningoencephalitis, halting the trial. Some antibody responders showed plaque clearance on autopsy, but no cognitive benefit.",
    attribution: "Gilman et al., Neurology 2005", // PMID: 15883316
  },
  {
    id: 2, name: "Bapineuzumab", company: "Pfizer/J&J", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "No cognitive benefit; high ARIA rate",
    detail: "Two Phase 3 trials: 1,121 APOE4 carriers and 1,331 non-carriers. ARIA-E in 21% of carriers (35% of homozygotes). Biomarkers shifted but neither trial showed cognitive benefit on ADAS-Cog or DAD.",
    attribution: "Salloway et al., NEJM 2014", // PMID: 24450891
  },
  {
    id: 3, name: "Solanezumab", company: "Eli Lilly", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "3 Phase III trials; monomer-targeting",
    detail: "EXPEDITION3: 2,129 patients with mild AD, 80 weeks. No significant slowing on ADAS-Cog14 (primary) or any secondary endpoint. Targets soluble A\u03B2 monomers without clearing plaques.",
    attribution: "Honig et al., NEJM 2018", // PMID: 29365294
  },
  {
    id: 4, name: "Crenezumab", company: "Genentech", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "No benefit in sporadic or autosomal-dominant AD",
    detail: "CREAD/CREAD2: 813 and 806 patients with early AD. Stopped at interim analysis for futility. No effect on CDR-SB or AD biomarkers. Separately tested in autosomal-dominant AD (API Colombia) without benefit.",
    attribution: "Ostrowitzki et al., JAMA Neurol 2022", // PMID: 36121669
  },
  {
    id: 5, name: "Gantenerumab", company: "Roche", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "Cleared plaques; no cognitive benefit",
    detail: "GRADUATE I/II: 1,965 patients with early AD, 116 weeks. Reduced amyloid plaque burden vs placebo but missed the primary endpoint on CDR-SB. Subgroup with complete clearance showed a cognitive signal.",
    attribution: "Bateman et al., NEJM 2023", // PMID: 37966285
  },
  {
    id: 6, name: "Aducanumab", company: "Biogen", category: "anti-amyloid", disease: "AD", phase: "approved", outcome: "contested",
    note: "Accelerated approval 2021; withdrawn 2024",
    detail: "EMERGE/ENGAGE: 3,285 patients across 348 sites. EMERGE met primary endpoint (22% slowing on CDR-SB); ENGAGE did not. FDA granted accelerated approval in June 2021 despite 10-0 advisory committee vote against. Biogen withdrew it in January 2024.",
    attribution: "Budd Haeberlein et al., J Prev Alzheimers Dis 2022", // PMID: 35542991
  },
  {
    id: 7, name: "Lecanemab", company: "Eisai/Biogen", category: "anti-amyloid", disease: "AD", phase: "approved", outcome: "modest",
    note: "27% slowing on CDR-SB; ARIA risk",
    detail: "CLARITY-AD: 1,795 patients with early AD, 18 months. CDR-SB declined 1.21 vs 1.66 placebo (27% slowing, p<0.001). ARIA-E in 12.6%, ARIA-H in 17.3%. Amyloid plaque burden reduced by 59 centiloids.",
    attribution: "van Dyck et al., NEJM 2023", // PMID: 36449413
  },
  {
    id: 8, name: "Donanemab", company: "Eli Lilly", category: "anti-amyloid", disease: "AD", phase: "approved", outcome: "modest",
    note: "35% slowing; targets pyroglutamate-A\u03B2",
    detail: "TRAILBLAZER-ALZ 2: 1,736 patients, 76 weeks. In the low/medium tau group, iADRS slowed 35% and CDR-SB slowed 36% vs placebo. Targets pyroglutamate-modified A\u03B2 on plaques; treatment stopped once plaques cleared.",
    attribution: "Sims et al., JAMA 2023", // PMID: 37459141
  },

  // 2. BACE inhibitors (AD)
  {
    id: 9, name: "Verubecestat", company: "Merck", category: "bace", disease: "AD", phase: "3", outcome: "worsened",
    note: "Cognitive worsening; halted early",
    detail: "EPOCH: 1,958 patients with mild-to-moderate AD, 78 weeks. Terminated for futility. No cognitive benefit; adverse events included rash, falls, sleep disturbance, suicidal ideation, and weight loss at both doses.",
    attribution: "Egan et al., NEJM 2018", // PMID: 29719179
  },
  {
    id: 10, name: "Atabecestat", company: "Janssen", category: "bace", disease: "AD", phase: "2/3", outcome: "halted",
    note: "Liver toxicity + cognitive worsening",
    detail: "EARLY trial: 557 cognitively normal, amyloid-positive participants (planned 1,650). Stopped in May 2018 for liver enzyme elevations. Dose-dependent cognitive worsening on PACC at 3 months. Both effects reversed after washout.",
    attribution: "Sperling et al., JAMA Neurol 2021", // PMID: 33464300
  },
  {
    id: 11, name: "Lanabecestat", company: "AstraZeneca/Lilly", category: "bace", disease: "AD", phase: "3", outcome: "failed",
    note: "Halted for futility",
    detail: "AMARANTH (2,218 pts, early AD) and DAYBREAK-ALZ (1,722 pts, mild AD). Both halted in June 2018 at interim futility analysis. CSF A\u03B2 dropped 50\u201373% but cognition did not change.",
    attribution: "Wessels et al., JAMA Neurol 2020", // PMID: 31764959
  },
  {
    id: 12, name: "Elenbecestat", company: "Eisai/Biogen", category: "bace", disease: "AD", phase: "3", outcome: "failed",
    note: "Unfavorable risk-benefit",
    detail: "MISSION AD1/AD2: 2,212 patients with early AD randomized. DSMB halted both trials in September 2019 for unfavorable risk-benefit. No efficacy signal at 12 months; higher rates of weight loss, rash, and neuropsychiatric events.",
    attribution: "Eisai/Biogen press release, Sep 2019", // No peer-reviewed publication of full results
  },
  {
    id: 13, name: "Umibecestat", company: "Novartis/Amgen", category: "bace", disease: "AD", phase: "2/3", outcome: "worsened",
    note: "Cognitive worsening in prevention trial",
    detail: "API Generation: 1,556 cognitively unimpaired APOE4 carriers, mean 7 months treatment. Stopped in July 2019 after cognitive worsening on RBANS and API composite. Effects were small and reversed after washout.",
    attribution: "Tariot et al., Alzheimers Dement 2024", // PMID: 39320017
  },

  // 3. Anti-tau antibodies + ASOs (AD/PSP)
  {
    id: 14, name: "Gosuranemab", company: "Biogen", category: "anti-tau", disease: "AD", phase: "2", outcome: "failed",
    note: "98% CSF tau reduction; zero cognitive benefit",
    detail: "TANGO trial: 654 participants with early AD. Reduced CSF unbound N-terminal tau by 98%, confirming target engagement. No benefit on CDR-SB or any cognitive endpoint at 78 weeks. All three dose groups performed numerically worse than placebo.",
    attribution: "Shulman et al., Nature Aging 2023", // PMID: 38012285
  },
  {
    id: 15, name: "Tilavonemab", company: "AbbVie", category: "anti-tau", disease: "PSP", phase: "2", outcome: "failed",
    note: "No benefit in PSP or AD",
    detail: "Phase 2 PSP trial: 378 participants randomized. Terminated after prespecified futility criteria met at interim analysis. No difference in PSPRS scores at 52 weeks. Separate Phase 2 AD trial (453 pts) also showed no benefit on CDR-SB at 96 weeks.",
    attribution: "Hoglinger et al., Lancet Neurol 2021", // PMID: 33609476
  },
  {
    id: 16, name: "Zagotenemab", company: "Eli Lilly", category: "anti-tau", disease: "AD", phase: "2", outcome: "failed",
    note: "MC1 conformational epitope; missed endpoint",
    detail: "PERISCOPE-ALZ: 360 participants with early symptomatic AD. Targets a conformational MC1 epitope spanning the N-terminus and microtubule-binding domain. No drug-placebo difference on iADRS or on tau PET, volumetric MRI, or NfL.",
    attribution: "Fleisher et al., Neurology 2024", // PMID: 38386949
  },
  {
    id: 17, name: "Semorinemab", company: "Genentech", category: "anti-tau", disease: "AD", phase: "2", outcome: "failed",
    note: "N-terminal; no effect on decline",
    detail: "LAURIET trial: 272 participants with mild-to-moderate AD. Showed 42% reduction in ADAS-Cog11 decline vs placebo at week 49, but coprimary ADCS-ADL functional endpoint showed no benefit. CDR-SB and MMSE secondary endpoints also negative.",
    attribution: "Monteiro et al., Neurology 2023", // PMID: 37643887
  },
  {
    id: 18, name: "Bepranemab", company: "UCB", category: "anti-tau", disease: "AD", phase: "2", outcome: "mixed",
    note: "33\u201358% tau PET slowing; APOE4 non-carriers only",
    detail: "TOGETHER trial: 466 participants with prodromal-to-mild AD. Primary CDR-SB endpoint not met. Slowed tau PET accumulation by 33\u201358% and cognitive decline by 21\u201325% vs placebo at 80 weeks. In APOE4 non-carriers with low baseline tau, high-dose slowed tau accumulation by 63\u201367%.",
    attribution: "Barton et al., CTAD 2024", // Peer-reviewed publication pending
  },
  {
    id: 19, name: "E2814", company: "Eisai", category: "anti-tau", disease: "AD", phase: "2", outcome: "ongoing",
    note: "MTBR epitope; in DIAN-TU",
    detail: "Anti-MTBR tau antibody in the DIAN-TU Tau NexGen Phase II/III trial (197 participants, dominantly inherited AD, combined with lecanemab). CSF eMTBR-tau243 reduced by 62% at 3 months and 89% at 9 months. FDA Fast Track designation.",
    attribution: "Wildsmith et al., J Prev Alzheimers Dis 2025", // Trial ongoing through 2028
  },
  {
    id: 20, name: "BIIB080", company: "Biogen/Ionis", category: "anti-tau", disease: "AD", phase: "1b/2", outcome: "ongoing",
    note: "Tau ASO; CSF tau \u221250\u201360%; fast-tracked",
    detail: "Phase 1b trial: 46 participants with mild AD. Intrathecal BIIB080 reduced CSF total-tau and p-tau181 by up to 60%, sustained for 6 months post-dosing. Tau PET signal dropped across cortical regions at the highest dose. FDA Fast Track designation.",
    attribution: "Mummery et al., Nature Medicine 2023", // PMID: 37095250
  },

  // 4. Anti-\u03B1-synuclein (PD)
  {
    id: 21, name: "Prasinezumab", company: "Roche", category: "anti-asyn", disease: "PD", phase: "2", outcome: "mixed",
    note: "Motor subscale signal; missed primary",
    detail: "PASADENA trial: 316 participants with early PD. Missed primary endpoint (MDS-UPDRS Parts I+II+III) at 52 weeks. A prespecified motor subscale (Part III) showed slower decline. Open-label extension showed sustained motor benefit over 4 years. Roche advanced to Phase III (PADOVA).",
    attribution: "Pagano et al., NEJM 2022", // PMID: 35921451
  },
  {
    id: 22, name: "Cinpanemab", company: "Biogen", category: "anti-asyn", disease: "PD", phase: "2", outcome: "failed",
    note: "No effect on motor or imaging",
    detail: "SPARK trial: 357 participants with early PD. No evidence of benefit vs placebo on MDS-UPDRS, DAT-SPECT imaging, or quality-of-life measures at 52 weeks. Trial stopped at week 72 interim for futility. Biogen terminated development in February 2021.",
    attribution: "Lang et al., NEJM 2022", // PMID: 35921450
  },

  // 5. Huntingtin lowering (HD)
  {
    id: 23, name: "Tominersen", company: "Roche/Ionis", category: "htt-lowering", disease: "HD", phase: "3", outcome: "worsened",
    note: "HTT ASO; dose-dependent worsening",
    detail: "GENERATION HD1: 791 participants with manifest HD. CSF mutant huntingtin decreased dose-dependently, but the every-8-weeks group performed worse on clinical rating scales than placebo. Trial halted in March 2021 after DSMB found risks outweighed benefits.",
    attribution: "McColgan et al., NEJM 2023", // PMID: 38055260
  },
  {
    id: 24, name: "WVE-003", company: "Wave Life Sciences", category: "htt-lowering", disease: "HD", phase: "1b/2", outcome: "halted",
    note: "Allele-selective; insufficient efficacy",
    detail: "SELECT-HD Phase 1b/2a trial. First-in-class allele-selective ASO that lowers mutant HTT while preserving wild-type. CSF mHTT reduced 46% vs placebo (p=0.0007). Reduction correlated with slowing of caudate atrophy. Wave transitioned to next-generation chemistry (WVE-007).",
    attribution: "Wave Life Sciences press release, Jun 2024", // Peer-reviewed publication pending
  },

  // 6. SOD1 targeting (ALS)
  {
    id: 25, name: "Tofersen", company: "Biogen/Ionis", category: "sod1", disease: "ALS", phase: "approved", outcome: "biomarker",
    note: "Missed primary endpoint; approved on biomarker + OLE",
    detail: "VALOR trial: 108 participants with SOD1 ALS. Missed primary ALSFRS-R endpoint (P=0.97). Reduced CSF SOD1 and plasma NfL substantially vs placebo. In the open-label extension, early-start participants showed a 3.5-point ALSFRS-R advantage over delayed-start at 52 weeks. FDA approved April 2023 on biomarker surrogate.",
    attribution: "Miller et al., NEJM 2022", // PMID: 36129998
  },

  // 7. Iron chelators / modulators (multi-disease)
  {
    id: 26, name: "Deferiprone", company: "ApoPharma", category: "iron", disease: "PD", phase: "3", outcome: "worsened",
    note: "FAIRPARK-II: motor worsening",
    detail: "FAIRPARK-II: 372 patients, 36 weeks. Substantia nigra iron fell but MDS-UPDRS worsened (+15.6 vs +6.3 placebo). 22% needed rescue therapy vs 2.7% placebo.",
    attribution: "Devos et al., NEJM 2022",
    sourceId: "devos-2022-nejm",
  },
  {
    id: 27, name: "Deferiprone", company: "Various", category: "iron", disease: "AD", phase: "2", outcome: "worsened",
    note: "3D trial: cognitive worsening; Cohen\u2019s d = \u22120.704",
    detail: "3D trial: 171 patients, 12 months. Hippocampal iron fell but cognition worsened (Cohen\u2019s d = \u22120.70 per-protocol). Chelation removes iron the brain needs for myelination and ferroxidase activity.",
    attribution: "Ayton et al., JAMA Neurol 2025",
    sourceId: "ayton-2025-jamaneurol",
  },
  {
    id: 28, name: "Deferiprone", company: "Academic", category: "iron", disease: "HD", phase: "1", outcome: "early",
    note: "Preclinical only; mouse motor improvement",
    detail: "No human trial. In R6/2 HD mice, 10-day oral deferiprone removed mitochondrial iron, reduced lipid peroxidation, and improved motor endurance. HD striatum shows genuine mitochondrial iron accumulation from mutant HTT disrupting frataxin.",
    attribution: "Agrawal et al., Free Radic Biol Med 2018",
    sourceId: "agrawal-2018-frbm",
  },
  {
    id: 29, name: "ATH434", company: "Alterity", category: "iron", disease: "MSA", phase: "2", outcome: "signal",
    note: "Iron redistribution (not chelation)",
    detail: "Redistributes iron rather than chelating it out. Slower brain atrophy, reduced basal ganglia iron, stable NfL. 43% stable and 30% improved on clinical scales.",
    attribution: "Alterity Therapeutics, 2025",
    sourceId: "ath434-2025-msa",
  },
  {
    id: 30, name: "Deferoxamine", company: "Various", category: "iron", disease: "AD", phase: "2", outcome: "marginal",
    note: "Crapper McLachlan 1991; small study",
    detail: "48 AD patients, IM deferoxamine twice daily for 24 months. Rate of cognitive decline halved vs no-treatment group (p = 0.03). Small sample, no replication in 35 years.",
    attribution: "Crapper McLachlan et al., Lancet 1991",
    sourceId: "crapper-mclachlan-1991-lancet",
  },

  // 8. Anti-inflammatory / immune (multi-disease)
  {
    id: 31, name: "NSAIDs (ADAPT)", company: "NIA", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "Naproxen + celecoxib; no disease modification",
    detail: "ADAPT trial: 2,528 older adults (age 70+, family history of AD) randomized to naproxen, celecoxib, or placebo. Neither drug improved cognition; naproxen showed a weak detrimental trend. Suspended in December 2004 due to cardiovascular safety concerns.",
    attribution: "ADAPT Research Group, Arch Neurol 2008", // PMID: 18474729
  },
  {
    id: 32, name: "GV-971", company: "Green Valley", category: "anti-inflammatory", disease: "AD", phase: "approved", outcome: "contested",
    note: "China conditional; no Western replication",
    detail: "Phase 3: 818 patients with mild-to-moderate AD, 36 weeks. GV-971 (sodium oligomannate) showed a 2.15-point ADAS-Cog12 advantage over placebo (p<0.0001). Conditionally approved in China in November 2019. Proposed gut-microbiota-neuroinflammation mechanism. No Western replication.",
    attribution: "Xiao et al., Alzheimers Res Ther 2021", // PMID: 33731209
  },
  {
    id: 33, name: "Semaglutide", company: "Novo Nordisk", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "EVOKE/EVOKE+ trials",
    detail: "EVOKE (n=1,855) and EVOKE+ (n=1,953) randomized 3,808 early-stage AD patients to oral semaglutide or placebo for 104 weeks. Neither trial met its primary CDR-SB endpoint despite improvements in inflammatory biomarkers.",
    attribution: "Cummings et al., Alzheimers Res Ther 2025", // PMID: 39780249 (design paper; topline failure Nov 2025)
  },
  {
    id: 34, name: "AL002", company: "Alector/AbbVie", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "failed",
    note: "INVOKE-2: anti-TREM2; no benefit",
    detail: "INVOKE-2: 381 early AD patients randomized to three AL002 dose regimens or placebo for up to 96 weeks. Failed primary CDR-SB endpoint with no benefit on secondary endpoints or biomarkers despite sustained TREM2 target engagement.",
    attribution: "Alector press release, Nov 2024", // Peer-reviewed publication pending
  },
  {
    id: 35, name: "Dapansutrile", company: "Olatec", category: "anti-inflammatory", disease: "PD", phase: "1", outcome: "early",
    note: "NLRP3 inflammasome inhibitor",
    detail: "Phase 1 in healthy volunteers showed 1,000 mg/day for 8 days was safe, reaching plasma levels 100x those needed to inhibit NLRP3 in vitro. Phase 2 DAPA-PD trial (36 patients, early PD, University of Cambridge) is underway, funded by Cure Parkinson's.",
    attribution: "Marchetti et al., PNAS 2018", // PMID: 29378952
  },

  // 9. Antiviral (AD)
  {
    id: 36, name: "Valacyclovir", company: "Generic", category: "antiviral", disease: "AD", phase: "2", outcome: "worsened",
    note: "VALAD: ADAS-Cog +10.86 vs +6.92 placebo",
    detail: "VALAD Phase 2: 120 HSV-seropositive early AD patients, 78 weeks. Valacyclovir worsened cognition: ADAS-Cog11 change was +10.86 vs +6.92 placebo (between-group difference 3.93, p=0.01). Antiviral approach did not slow decline.",
    attribution: "Devanand et al., JAMA 2026", // PMID: 41405855
  },

  // 10. Antioxidant / neuroprotective (ALS)
  {
    id: 37, name: "Edaravone", company: "Mitsubishi Tanabe", category: "antioxidant", disease: "ALS", phase: "approved", outcome: "contested",
    note: "Free radical scavenger; later study negative",
    detail: "MCI186-19: 137 patients with early-stage definite/probable ALS, 24 weeks. ALSFRS-R declined 5.01 vs 7.50 placebo (p=0.001). Approved in Japan 2015, US 2017. Earlier confirmatory trial (MCI186-16, 206 pts) was negative (p=0.41), limiting generalizability.",
    attribution: "Edaravone (MCI-186) ALS 19 Study Group, Lancet Neurol 2017", // PMID: 28522181
  },
  {
    id: 38, name: "Riluzole", company: "Sanofi", category: "antioxidant", disease: "ALS", phase: "approved", outcome: "modest",
    note: "Glutamate modulator; ~3 month survival",
    detail: "Dose-ranging trial: 959 patients randomized to placebo or riluzole 50/100/200 mg daily, 18-month follow-up. 100 mg dose reduced death risk by 35% vs placebo. Median survival extended ~3 months. First ALS drug approved (1995).",
    attribution: "Lacomblez et al., Lancet 1996", // PMID: 8676624
  },

  // 11. Anti-\u03B1-synuclein (additional)
  {
    id: 39, name: "TAK-341", company: "Takeda/AstraZeneca", category: "anti-asyn", disease: "MSA", phase: "2", outcome: "failed",
    note: "CSF \u03B1-syn \u221259%; no clinical benefit in MSA",
    detail: "Phase 1 trials reduced CSF free \u03B1-synuclein by 54\u201359% in healthy volunteers and PD patients. Phase 2 MSA trial (159 patients, 52 weeks) failed primary and secondary endpoints on the Modified UMSARS. Takeda discontinued development.",
    attribution: "Shering et al., Brain Commun 2025", // PMID: 40936651 (Phase 1); Phase 2 MSA not yet published
  },
  {
    id: 40, name: "Minzasolmin", company: "UCB/Novartis", category: "anti-asyn", disease: "PD", phase: "2", outcome: "failed",
    note: "ORCHESTRA: 496 pts; missed all endpoints",
    detail: "ORCHESTRA trial: 496 participants with early PD across 100+ sites. Oral \u03B1-synuclein misfolding inhibitor. Failed all primary and secondary clinical endpoints at 18 months. Hypersensitivity reactions in 8.5% on drug vs 1.2% placebo. UCB discontinued the program in December 2024.",
    attribution: "UCB press release, Dec 2024", // Peer-reviewed publication pending
  },

  // 12. Huntingtin lowering (additional)
  {
    id: 41, name: "Votoplam", company: "Novartis/PTC", category: "htt-lowering", disease: "HD", phase: "2", outcome: "signal",
    note: "PIVOT-HD: dose-dependent HTT reduction; Phase 3 planned",
    detail: "PIVOT-HD Phase 2 in Stage 2/3 HD. Met primary endpoint of dose-dependent blood HTT reduction (p<0.0001). At 24 months, favorable trends on cUHDRS, TFC, and SDMT vs natural history. No NfL spikes or treatment-related serious adverse events. Novartis planning Phase 3.",
    attribution: "PTC Therapeutics press release, May 2025", // Peer-reviewed publication pending
  },
  {
    id: 42, name: "Branaplam", company: "Novartis", category: "htt-lowering", disease: "HD", phase: "2", outcome: "halted",
    note: "78% peripheral neuropathy; NfL elevation",
    detail: "VIBRANT-HD Phase 2b: 26 participants enrolled before early termination. Oral HTT splicing modifier originally developed for SMA. Stopped after safety monitoring revealed peripheral neuropathy, NfL elevations, and ventricular volume increases at 17 weeks. Novartis discontinued all HD development.",
    attribution: "Borowsky et al., Nature Medicine 2026", // DOI: 10.1038/s41591-025-04117-4
  },

  // 13. LRRK2 inhibitors (PD)
  {
    id: 43, name: "BIIB122", company: "Denali/Biogen", category: "lrrk2", disease: "PD", phase: "2", outcome: "ongoing",
    note: "Phase 3 terminated (timeline); Phase 2b LUMA ongoing",
    detail: "Phase 3 LIGHTHOUSE study terminated in 2024 due to study complexity and projected 2031 completion, not safety or efficacy concerns. Phase 2b LUMA study (640 participants, early PD with or without LRRK2 mutations, 48\u2013144 weeks) is ongoing.",
    attribution: "Jennings et al., Mov Disord 2023", // PMID: 36807624 (Phase 1 data)
  },

  // 14. GBA modulators (PD)
  {
    id: 44, name: "Venglustat", company: "Sanofi", category: "gba", disease: "PD", phase: "2", outcome: "worsened",
    note: "MOVES-PD: motor worsening despite 75% substrate reduction",
    detail: "MOVES-PD: 221 participants with GBA1-associated PD across 52 centers. Despite ~75% glucosylceramide reduction in CSF and plasma, venglustat showed no clinical benefit. Motor scores worsened on MDS-UPDRS Parts II+III vs placebo. Sanofi discontinued GBA-PD development.",
    attribution: "Giladi et al., Lancet Neurol 2023", // PMID: 37479372
  },
  {
    id: 45, name: "Ambroxol", company: "Academic", category: "gba", disease: "PD", phase: "2", outcome: "mixed",
    note: "Repurposed mucolytic; CSF GCase\u2191; no cognitive benefit",
    detail: "Open-label trial (17 PD patients): ambroxol crossed BBB, CSF GCase protein increased 35%, motor scores improved 6.8 MDS-UPDRS Part III points. Subsequent 52-week RCT (55 PD dementia patients) confirmed target engagement but found no cognitive benefit on primary or secondary endpoints.",
    attribution: "Mullin et al., JAMA Neurol 2020", // PMID: 31930374
  },

  // 15. GLP-1 agonists (multi-disease)
  {
    id: 46, name: "Exenatide", company: "UCL/AstraZeneca", category: "glp1", disease: "PD", phase: "3", outcome: "failed",
    note: "96-week Phase 3; no motor benefit vs Phase 2 positive",
    detail: "Exenatide-PD3: 194 patients across 6 UK sites, 96 weeks. MDS-UPDRS III OFF-medication worsened 5.7 (drug) vs 4.5 (placebo) points (p=0.47). No evidence of disease modification despite positive Phase 2 signal (Athauda 2017, 62 pts).",
    attribution: "Vijiaratnam et al., Lancet 2025", // PMID: 39919773
  },
  {
    id: 47, name: "Liraglutide", company: "Imperial/Novo Nordisk", category: "glp1", disease: "AD", phase: "2", outcome: "mixed",
    note: "ELAD: primary missed; 50% less brain atrophy",
    detail: "ELAD trial: 204 patients with mild-to-moderate AD, 52 weeks. Primary endpoint (brain glucose metabolism) missed. Secondary: 50% less volume loss in frontal, temporal, parietal, and total gray matter. 18% less cognitive decline on executive function measures.",
    attribution: "Edison et al., Nature Medicine 2026", // PMID: 41326666
  },
  {
    id: 48, name: "Lixisenatide", company: "Toulouse/Sanofi", category: "glp1", disease: "PD", phase: "2", outcome: "signal",
    note: "LixiPark: motor stability vs worsening; GI side effects",
    detail: "LixiPark: 156 patients with early PD, 12 months + 2-month washout. MDS-UPDRS III changed \u22120.04 (drug) vs +3.04 (placebo) points (p=0.007). Motor stability persisted after washout. Nausea in 46%, vomiting in 13%.",
    attribution: "Meissner et al., NEJM 2024", // PMID: 38598572
  },

  // 16. Anti-inflammatory (additional)
  {
    id: 49, name: "Minocycline", company: "Academic", category: "anti-inflammatory", disease: "ALS", phase: "3", outcome: "worsened",
    note: "Faster ALSFRS-R decline than placebo",
    detail: "Phase 3: 412 ALS patients randomized to minocycline or placebo for 9 months. ALSFRS-R decline was 25% faster in the minocycline group (\u22121.30 vs \u22121.04 units/month, p=0.005), with trends toward worse FVC decline and higher mortality. Anti-inflammatory approach backfired.",
    attribution: "Gordon et al., Lancet Neurol 2007", // PMID: 17980667
  },
  {
    id: 50, name: "Masitinib", company: "AB Science", category: "anti-inflammatory", disease: "ALS", phase: "2/3", outcome: "signal",
    note: "27% slowing; EMA rejected; confirmatory Phase 3 ongoing",
    detail: "Phase 2/3: 394 ALS patients randomized to masitinib 4.5 mg/kg/day, 3.0 mg/kg/day, or placebo, all added to riluzole. Masitinib 4.5 mg/kg slowed ALSFRS-R decline by 27% vs placebo (p=0.016). EMA upheld a negative opinion on conditional approval, citing insufficient evidence from a single trial.",
    attribution: "Mora et al., Amyotroph Lateral Scler Frontotemporal Degener 2020", // PMID: 31280619
  },
  {
    id: 51, name: "Sargramostim", company: "Univ. Colorado", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "signal",
    note: "GM-CSF: MMSE +1.45 pts; immune-boosting approach",
    detail: "Phase 2: 40 mild-to-moderate AD patients randomized to GM-CSF 250 mcg/m\u00B2/day subcutaneous for 3 weeks. Sargramostim group improved 1.45 MMSE points from baseline (p=0.007); between-group difference was 1.80 points (p=0.037). No ARIA events.",
    attribution: "Potter et al., Alzheimers Dement (TRCI) 2021", // PMID: 33778150
  },
  {
    id: 52, name: "Pioglitazone", company: "Takeda", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "TOMMORROW: 3,494 pts; prevention trial; futility",
    detail: "TOMMORROW Phase 3: 3,494 cognitively normal adults (age 65\u201383) at genetic risk of AD randomized to low-dose pioglitazone or placebo. Stopped in January 2018 after failing a prespecified futility analysis. Did not delay onset of mild cognitive impairment.",
    attribution: "Burns et al., Lancet Neurol 2021", // PMID: 34146512
  },

  // 17. Antioxidant / neuroprotective (additional)
  {
    id: 53, name: "Relyvrio", company: "Amylyx", category: "antioxidant", disease: "ALS", phase: "approved", outcome: "contested",
    note: "Approved 2022; PHOENIX Phase 3 failed; withdrawn 2024",
    detail: "CENTAUR Phase 2: 137 patients, 24 weeks. ALSFRS-R declined 1.24 vs 1.66 pts/month (p=0.03). FDA approved September 2022. PHOENIX Phase 3: 664 patients, 48 weeks. No difference on ALSFRS-R (p=0.667) or any secondary endpoint. Withdrawn from market October 2024.",
    attribution: "Paganoni et al., NEJM 2020", // PMID: 32877582
  },
  {
    id: 54, name: "CoQ10", company: "NINDS", category: "antioxidant", disease: "PD", phase: "3", outcome: "failed",
    note: "QE3: 600 pts; terminated for futility",
    detail: "QE3 trial: 600 patients randomized to placebo, 1200 mg/d, or 2400 mg/d CoQ10 (all with vitamin E). Terminated at prespecified futility analysis. UPDRS worsened 6.9 (placebo), 7.5 (1200 mg, p=0.49), 8.0 (2400 mg, p=0.21). No benefit at any dose.",
    attribution: "Parkinson Study Group QE3 Investigators, JAMA Neurol 2014", // PMID: 24664227
  },
  {
    id: 55, name: "Inosine", company: "PSG/MJFF", category: "antioxidant", disease: "PD", phase: "3", outcome: "failed",
    note: "SURE-PD3: urate elevation; futility at 298 pts",
    detail: "SURE-PD3: 298 patients (149 per arm), up to 2 years. Serum urate raised 2.03 mg/dL by inosine. Stopped at prespecified futility analysis. MDS-UPDRS progression 11.1 (drug) vs 9.9 (placebo) pts/year (p=0.18). More kidney stones (7.0 vs 1.4 per 100 pt-years).",
    attribution: "Schwarzschild et al., JAMA 2021", // PMID: 34519802
  },
  {
    id: 56, name: "Dimebon", company: "Medivation/Pfizer", category: "antioxidant", disease: "AD", phase: "3", outcome: "failed",
    note: "$725M Pfizer deal; all Phase 3 trials negative",
    detail: "CONNECTION: 598 patients with mild-to-moderate AD, 26 weeks. No effect on co-primary endpoints ADAS-Cog (p=0.86) or CIBIC-plus (p=0.81). CONCERT (1,003 pts) also negative. Phase 2 (183 pts) had shown improvement on all 5 endpoints, prompting the $725M deal.",
    attribution: "Doody et al., Lancet 2008", // PMID: 18640457 (Phase 2; CONNECTION results only published as conference abstract)
  },
  {
    id: 57, name: "LMTM", company: "TauRx", category: "antioxidant", disease: "AD", phase: "3", outcome: "mixed",
    note: "Tau aggregation inhibitor; monotherapy subgroup only",
    detail: "Phase 3: 891 patients with mild-to-moderate AD across 115 sites in 16 countries, 15 months. LMTM (methylene blue derivative) failed as add-on therapy on both ADAS-Cog and ADCS-ADL. Pre-specified monotherapy subgroup (15% of patients) showed a signal, but this was underpowered.",
    attribution: "Gauthier et al., Lancet 2016", // PMID: 27863809
  },
  {
    id: 58, name: "Troriluzole", company: "Biohaven", category: "antioxidant", disease: "AD", phase: "2/3", outcome: "failed",
    note: "Glutamate modulator; 350 pts; missed both endpoints",
    detail: "T2 Protect AD: 350 patients with mild-to-moderate AD, 48 weeks. No significant effect on co-primary outcomes ADAS-Cog11 and CDR-SB vs placebo. Also failed the key secondary measure of hippocampal volume by MRI. Biohaven dropped the AD indication in 2021.",
    attribution: "Biohaven press release, Jan 2021", // No peer-reviewed publication of full results
  },
  {
    id: 59, name: "Arimoclomol", company: "Orphazyme", category: "antioxidant", disease: "ALS", phase: "3", outcome: "failed",
    note: "Heat shock amplifier; 245 pts; missed ALSFRS-R",
    detail: "ORARIALS-01: 245 patients across 29 sites in 12 countries, up to 76 weeks. Randomized 2:1 to arimoclomol 248 mg TID or placebo. Failed the primary combined assessment of function and survival (CAFS) and all key secondary endpoints including ALSFRS-R and overall survival.",
    attribution: "Benatar et al., Lancet Neurol 2024", // PMID: 38782015
  },
  {
    id: 60, name: "Dexpramipexole", company: "Biogen", category: "antioxidant", disease: "ALS", phase: "3", outcome: "failed",
    note: "EMPOWER: 943 pts; no benefit; neutropenia signal",
    detail: "EMPOWER: 943 patients randomized to dexpramipexole 150 mg BID or placebo, 12\u201318 months. No difference on CAFS or ALSFRS-R. Neutropenia in 8% (drug) vs 2% (placebo). Biogen ended development after these results.",
    attribution: "Cudkowicz et al., Lancet Neurol 2013", // PMID: 24067398
  },
  {
    id: 61, name: "TUDCA", company: "Academic", category: "antioxidant", disease: "ALS", phase: "3", outcome: "failed",
    note: "Bile acid; Phase 2 positive; Phase 3 (336 pts) negative",
    detail: "Phase 2 (Elia 2016): 34 patients, 54 weeks. 87% responders on TUDCA vs 43% placebo (p=0.02). Phase 3 TUDCA-ALS: 336 patients across 26 European centers, 18 months. Failed to meet primary ALSFRS-R endpoint. No difference on survival or neurofilament biomarkers.",
    attribution: "Elia et al., Eur J Neurol 2016", // PMID: 25664595 (Phase 2; Phase 3 results not yet published in journal)
  },
];

/** Map outcome to display color */
export function outcomeColor(outcome: DrugOutcome): string {
  switch (outcome) {
    case "worsened":
      return "#EF4444"; // red-500
    case "failed":
    case "halted":
      return "#6B7280"; // gray-500
    case "mixed":
    case "marginal":
    case "signal":
      return "#F59E0B"; // amber-500
    case "modest":
    case "improved":
    case "biomarker":
      return "#10B981"; // emerald-500
    case "approved":
      return "#10B981";
    case "contested":
      return "#F59E0B";
    case "ongoing":
    case "early":
      return "#6B7280";
    default:
      return "#6B7280";
  }
}

/** Map outcome to short display label */
export function outcomeLabel(outcome: DrugOutcome): string {
  switch (outcome) {
    case "worsened": return "Worsened";
    case "failed": return "Failed";
    case "halted": return "Halted";
    case "mixed": return "Mixed";
    case "modest": return "Modest";
    case "approved": return "Approved";
    case "contested": return "Contested";
    case "biomarker": return "Biomarker";
    case "ongoing": return "Ongoing";
    case "early": return "Early";
    case "marginal": return "Marginal";
    case "signal": return "Signal";
    case "improved": return "Improved";
    default: return outcome;
  }
}

/** Disease rows for the grid layout */
export const diseaseRows: { id: DiseaseTarget; label: string; shortLabel: string }[] = [
  { id: "AD", label: "Alzheimer\u2019s", shortLabel: "AD" },
  { id: "PD", label: "Parkinson\u2019s", shortLabel: "PD" },
  { id: "ALS", label: "ALS", shortLabel: "ALS" },
  { id: "HD", label: "Huntington\u2019s", shortLabel: "HD" },
  { id: "PSP", label: "PSP", shortLabel: "PSP" },
  { id: "MSA", label: "MSA", shortLabel: "MSA" },
];

/** Phase columns for the grid layout */
export const phaseColumns: { id: TrialPhase; label: string; shortLabel: string }[] = [
  { id: "1", label: "Phase 1", shortLabel: "Ph 1" },
  { id: "2", label: "Phase 2", shortLabel: "Ph 2" },
  { id: "3", label: "Phase 3", shortLabel: "Ph 3" },
  { id: "approved", label: "Approved", shortLabel: "Apprvd" },
];

/* ------------------------------------------------------------------ */
/*  Molecule type classification                                       */
/* ------------------------------------------------------------------ */

export type MoleculeType = "small" | "peptide" | "aso" | "protein" | "antibody";

const moleculeTypeOverrides: Record<number, MoleculeType> = {
  1: "peptide",    // AN1792 — Aβ peptide vaccine
  20: "aso",       // BIIB080 — tau ASO
  33: "peptide",   // Semaglutide — GLP-1 peptide (in anti-inflammatory cat)
  34: "antibody",  // AL002 — TREM2 mAb (in anti-inflammatory cat)
  40: "small",     // Minzasolmin — oral small molecule (in anti-asyn cat)
  41: "small",     // Votoplam — oral splicing modifier (in htt-lowering cat)
  42: "small",     // Branaplam — oral splicing modifier (in htt-lowering cat)
  51: "protein",   // Sargramostim — GM-CSF glycoprotein (in anti-inflammatory cat)
};

const categoryMoleculeDefaults: Record<string, MoleculeType> = {
  "anti-amyloid": "antibody",
  "bace": "small",
  "anti-tau": "antibody",
  "anti-asyn": "antibody",
  "htt-lowering": "aso",
  "sod1": "aso",
  "lrrk2": "small",
  "gba": "small",
  "iron": "small",
  "glp1": "peptide",
  "anti-inflammatory": "small",
  "antiviral": "small",
  "antioxidant": "small",
};

/** Approximate molecular weight in Daltons for each drug */
export const drugMW: Record<number, number> = {
  // Anti-amyloid antibodies + vaccine
  1: 4514, 2: 150000, 3: 150000, 4: 150000, 5: 150000, 6: 150000, 7: 150000, 8: 150000,
  // BACE inhibitors
  9: 409, 10: 367, 11: 413, 12: 437, 13: 514,
  // Anti-tau antibodies + ASOs
  14: 150000, 15: 150000, 16: 150000, 17: 150000, 18: 150000, 19: 150000, 20: 7000,
  // Anti-α-synuclein
  21: 150000, 22: 150000, 39: 150000, 40: 426,
  // Huntingtin lowering
  23: 7000, 24: 7000, 41: 420, 42: 393,
  // SOD1
  25: 7000,
  // Iron chelators
  26: 139, 27: 139, 28: 139, 29: 290, 30: 560,
  // Anti-inflammatory / immune
  31: 306, 32: 800, 33: 4114, 34: 150000, 35: 134, 49: 457, 50: 499, 51: 16000, 52: 357,
  // Antiviral
  36: 324,
  // Antioxidant / neuroprotective
  37: 174, 38: 234, 53: 343, 54: 863, 55: 268, 56: 319, 57: 285, 58: 420, 59: 314, 60: 211, 61: 500,
  // LRRK2
  43: 450,
  // GBA
  44: 390, 45: 378,
  // GLP-1
  46: 4187, 47: 3751, 48: 4859,
};

/** Get MW for a drug, with fallback */
export function getDrugMW(drug: Drug): number {
  return drugMW[drug.id] ?? 400;
}

/** Classify a drug by molecule size category */
export function getMoleculeType(drug: Drug): MoleculeType {
  return moleculeTypeOverrides[drug.id] ?? categoryMoleculeDefaults[drug.category] ?? "small";
}

/** Dot diameter (px) for each molecule type — log-scaled */
export function moleculeDotSize(type: MoleculeType): number {
  switch (type) {
    case "small":    return 6;   // ~300 Da
    case "peptide":  return 10;  // ~4 kDa
    case "aso":      return 13;  // ~7 kDa
    case "protein":  return 16;  // ~16 kDa
    case "antibody": return 22;  // ~150 kDa
  }
}

/** Display label for molecule types */
export function moleculeTypeLabel(type: MoleculeType): string {
  switch (type) {
    case "small":    return "Small molecule";
    case "peptide":  return "Peptide";
    case "aso":      return "ASO";
    case "protein":  return "Protein";
    case "antibody": return "Antibody";
  }
}

/** Map a drug's phase to the appropriate column */
export function phaseToColumn(phase: TrialPhase): "1" | "2" | "3" | "approved" {
  switch (phase) {
    case "1":
    case "1b/2":
      return "1";
    case "2":
    case "2/3":
      return "2";
    case "3":
      return "3";
    case "approved":
      return "approved";
  }
}
