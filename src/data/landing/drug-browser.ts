/**
 * Drug browser data — drugs across neurodegenerative disease categories
 * for the interactive drug category browser section.
 */

import type { DiseaseTarget } from "./types";

export type { DiseaseTarget };

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
  | "improved"
;

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
  /** Specific citation IDs to show in tooltip (filters bibliography quotes) */
  citationIds?: string[];
  /** Gene targets for cross-referencing with GWAS data */
  targetGenes?: string[];
}

export type CategoryGroup = "target" | "mechanism";

export interface DrugCategory {
  id: string;
  label: string;
  shortLabel: string;
  group: CategoryGroup;
  /** If false, category is only shown on the full explore browser */
  showOnLanding?: boolean;
}

export const categoryGroups: { id: CategoryGroup; label: string }[] = [
  { id: "target", label: "Target" },
  { id: "mechanism", label: "Mechanism" },
];

export const drugCategories: DrugCategory[] = [
  // Target — drugs named after the specific protein they target
  { id: "anti-amyloid", label: "Anti-amyloid antibodies", shortLabel: "Anti-A\u03B2", group: "target" },
  { id: "bace", label: "BACE inhibitors", shortLabel: "BACE", group: "target" },
  { id: "gamma-secretase", label: "Gamma-secretase inhibitors", shortLabel: "\u03B3-Secretase", group: "target" },
  { id: "anti-tau", label: "Anti-tau antibodies & ASOs", shortLabel: "Anti-tau", group: "target" },
  { id: "anti-asyn", label: "Anti-\u03B1-synuclein", shortLabel: "Anti-\u03B1Syn", group: "target" },
  { id: "htt-lowering", label: "Huntingtin lowering", shortLabel: "HTT", group: "target" },
  { id: "sod1", label: "SOD1 targeting", shortLabel: "SOD1", group: "target" },
  { id: "lrrk2", label: "LRRK2 inhibitors", shortLabel: "LRRK2", group: "target" },
  { id: "gba", label: "GBA modulators", shortLabel: "GBA", group: "target" },
  // Mechanism — drugs categorized by how they work
  { id: "iron-chelator", label: "Iron chelators", shortLabel: "Chelators", group: "mechanism" },
  { id: "iron-redist", label: "Iron redistribution", shortLabel: "Redist.", group: "mechanism" },
  { id: "glp1", label: "GLP-1 agonists", shortLabel: "GLP-1", group: "mechanism" },
  { id: "anti-inflammatory", label: "Anti-inflammatory / immune", shortLabel: "Immune", group: "mechanism" },
  { id: "antiviral", label: "Antiviral", shortLabel: "Antiviral", group: "mechanism" },
  { id: "antioxidant", label: "Antioxidant / neuroprotective", shortLabel: "Neuroprot.", group: "mechanism" },
  { id: "cholinesterase", label: "Cholinesterase inhibitors", shortLabel: "AChEI", group: "mechanism" },
  { id: "nmda", label: "NMDA antagonists", shortLabel: "NMDA", group: "mechanism" },
  { id: "ms-dmt", label: "MS disease-modifying", shortLabel: "MS DMT", group: "mechanism" },
  { id: "nad", label: "NAD+ boosters", shortLabel: "NAD+", group: "mechanism" },
  { id: "mitochondrial", label: "Mitochondrial", shortLabel: "Mito", group: "mechanism" },
  { id: "gene-therapy", label: "Gene therapy", shortLabel: "Gene Tx", group: "mechanism" },
  { id: "dopamine", label: "Dopaminergic", shortLabel: "Dopamine", group: "mechanism" },
  { id: "progranulin", label: "Progranulin", shortLabel: "GRN", group: "target" },
  { id: "c9orf72", label: "C9orf72 targeting", shortLabel: "C9orf72", group: "target" },
  { id: "trem2", label: "TREM2 agonists", shortLabel: "TREM2", group: "target" },
  // Mechanism additions
  { id: "kinase", label: "Kinase inhibitors", shortLabel: "Kinase", group: "mechanism" },
  { id: "calcium", label: "Calcium channel blockers", shortLabel: "Ca\u00B2\u207A", group: "mechanism" },
  { id: "sigma", label: "Sigma-1 receptor", shortLabel: "\u03C3-1R", group: "mechanism" },
  { id: "catalytic-nano", label: "Catalytic nanomedicine", shortLabel: "NanoCat", group: "mechanism" },
  { id: "serotonin", label: "Serotonin modulators", shortLabel: "5-HT", group: "mechanism" },
  { id: "stem-cell", label: "Stem cell therapy", shortLabel: "Stem cell", group: "mechanism" },
  { id: "mtor", label: "mTOR / autophagy", shortLabel: "mTOR", group: "mechanism" },
  // Explore-only categories (showOnLanding: false)
  { id: "muscarinic", label: "Muscarinic agonists", shortLabel: "mAChR", group: "mechanism", showOnLanding: false },
  { id: "nicotinic", label: "Nicotinic agonists", shortLabel: "nAChR", group: "mechanism", showOnLanding: false },
  { id: "histamine", label: "Histamine H3 antagonists", shortLabel: "H3", group: "mechanism", showOnLanding: false },
  { id: "pde", label: "Phosphodiesterase inhibitors", shortLabel: "PDE", group: "mechanism", showOnLanding: false },
  { id: "metabolic", label: "Metabolic / repurposed", shortLabel: "Metabolic", group: "mechanism", showOnLanding: false },
  { id: "growth-factor", label: "Growth factor / neurotrophic", shortLabel: "GF", group: "mechanism", showOnLanding: false },
  { id: "glutamate", label: "Glutamate modulators", shortLabel: "Glutamate", group: "mechanism", showOnLanding: false },
];

export const drugs: Drug[] = [
  // 1. Anti-amyloid antibodies (AD)
  {
    id: 1, name: "AN1792", company: "Elan/Wyeth", category: "anti-amyloid", disease: "AD", phase: "2", outcome: "halted",
    note: "Meningoencephalitis; first active A\u03B2 vaccine",
    detail: "Phase IIa trial: 300 patients immunized, 72 placebo. 6% (18/300) developed meningoencephalitis, halting the trial. Some antibody responders showed plaque clearance on autopsy, but no cognitive benefit.",
    sourceId: "gilman-2005-neurology",
  },
  {
    id: 2, name: "Bapineuzumab", company: "Pfizer/J&J", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "No cognitive benefit; high ARIA rate",
    detail: "Two Phase 3 trials: 1,121 APOE4 carriers and 1,331 non-carriers. ARIA-E in 21% of carriers (35% of homozygotes). Biomarkers shifted but neither trial showed cognitive benefit on ADAS-Cog or DAD.",
    sourceId: "salloway-2014-nejm",
  },
  {
    id: 3, name: "Solanezumab", company: "Eli Lilly", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "3 Phase III trials; monomer-targeting",
    detail: "EXPEDITION3: 2,129 patients with mild AD, 80 weeks. No significant slowing on ADAS-Cog14 (primary) or any secondary endpoint. Targets soluble A\u03B2 monomers without clearing plaques.",
    sourceId: "honig-2018-nejm",
  },
  {
    id: 4, name: "Crenezumab", company: "Genentech", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "No benefit in sporadic or autosomal-dominant AD",
    detail: "CREAD/CREAD2: 813 and 806 patients with early AD. Stopped at interim analysis for futility. No effect on CDR-SB or AD biomarkers. Separately tested in autosomal-dominant AD (API Colombia) without benefit.",
    sourceId: "ostrowitzki-2022-jamaneurol",
  },
  {
    id: 5, name: "Gantenerumab", company: "Roche", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "Cleared plaques; no cognitive benefit",
    detail: "GRADUATE I/II: 1,965 patients with early AD, 116 weeks. Reduced amyloid plaque burden vs placebo but missed the primary endpoint on CDR-SB. Subgroup with complete clearance showed a cognitive signal.",
    sourceId: "bateman-2023-nejm",
  },
  {
    id: 6, name: "Aducanumab", company: "Biogen", category: "anti-amyloid", disease: "AD", phase: "approved", outcome: "contested",
    note: "Accelerated approval 2021; withdrawn 2024",
    detail: "EMERGE/ENGAGE: 3,285 patients across 348 sites. EMERGE met primary endpoint (22% slowing on CDR-SB); ENGAGE did not. FDA granted accelerated approval in June 2021 despite 10-0 advisory committee vote against. Biogen withdrew it in January 2024.",
    sourceId: "budd-haeberlein-2022-jpad",
  },
  {
    id: 7, name: "Lecanemab", company: "Eisai/Biogen", category: "anti-amyloid", disease: "AD", phase: "approved", outcome: "modest",
    note: "27% slowing on CDR-SB; ARIA risk",
    detail: "CLARITY-AD: 1,795 patients with early AD, 18 months. CDR-SB declined 1.21 vs 1.66 placebo (27% slowing, p<0.001). ARIA-E in 12.6%, ARIA-H in 17.3%. Amyloid plaque burden reduced by 59 centiloids.",
    sourceId: "van-dyck-2023-nejm",
  },
  {
    id: 8, name: "Donanemab", company: "Eli Lilly", category: "anti-amyloid", disease: "AD", phase: "approved", outcome: "modest",
    note: "35% slowing; targets pyroglutamate-A\u03B2",
    detail: "TRAILBLAZER-ALZ 2: 1,736 patients, 76 weeks. In the low/medium tau group, iADRS slowed 35% and CDR-SB slowed 36% vs placebo. Targets pyroglutamate-modified A\u03B2 on plaques; treatment stopped once plaques cleared.",
    sourceId: "sims-2023-jama",
  },

  // 2. BACE inhibitors (AD)
  {
    id: 9, name: "Verubecestat", company: "Merck", category: "bace", disease: "AD", phase: "3", outcome: "worsened",
    note: "Cognitive worsening; halted early",
    detail: "EPOCH: 1,958 patients with mild-to-moderate AD, 78 weeks. Terminated for futility. No cognitive benefit; adverse events included rash, falls, sleep disturbance, suicidal ideation, and weight loss at both doses.",
    sourceId: "egan-2018-nejm-verubecestat",
  },
  {
    id: 10, name: "Atabecestat", company: "Janssen", category: "bace", disease: "AD", phase: "2/3", outcome: "halted",
    note: "Liver toxicity + cognitive worsening",
    detail: "EARLY trial: 557 cognitively normal, amyloid-positive participants (planned 1,650). Stopped in May 2018 for liver enzyme elevations. Dose-dependent cognitive worsening on PACC at 3 months. Both effects reversed after washout.",
    sourceId: "sperling-2021-jamaneurol",
  },
  {
    id: 11, name: "Lanabecestat", company: "AstraZeneca/Lilly", category: "bace", disease: "AD", phase: "3", outcome: "failed",
    note: "Halted for futility",
    detail: "AMARANTH (2,218 pts, early AD) and DAYBREAK-ALZ (1,722 pts, mild AD). Both halted in June 2018 at interim futility analysis. CSF A\u03B2 dropped 50\u201373% but cognition did not change.",
    sourceId: "wessels-2020-jamaneurol",
  },
  {
    id: 12, name: "Elenbecestat", company: "Eisai/Biogen", category: "bace", disease: "AD", phase: "3", outcome: "failed",
    note: "Unfavorable risk-benefit",
    detail: "MISSION AD1/AD2: 2,212 patients with early AD randomized. DSMB halted both trials in September 2019 for unfavorable risk-benefit. No efficacy signal at 12 months; higher rates of weight loss, rash, and neuropsychiatric events.",
    sourceId: "eisai-2019-elenbecestat",
  },
  {
    id: 13, name: "Umibecestat", company: "Novartis/Amgen", category: "bace", disease: "AD", phase: "2/3", outcome: "worsened",
    note: "Cognitive worsening in prevention trial",
    detail: "API Generation: 1,556 cognitively unimpaired APOE4 carriers, mean 7 months treatment. Stopped in July 2019 after cognitive worsening on RBANS and API composite. Effects were small and reversed after washout.",
    sourceId: "tariot-2024-alzdement",
  },

  // 3. Anti-tau antibodies + ASOs (AD/PSP)
  {
    id: 14, name: "Gosuranemab", company: "Biogen", category: "anti-tau", disease: "AD", phase: "2", outcome: "failed",
    note: "98% CSF tau reduction; zero cognitive benefit",
    detail: "TANGO trial: 654 participants with early AD. Reduced CSF unbound N-terminal tau by 98%, confirming target engagement. No benefit on CDR-SB or any cognitive endpoint at 78 weeks. All three dose groups performed numerically worse than placebo.",
    sourceId: "shulman-2023-nataging",
  },
  {
    id: 15, name: "Tilavonemab", company: "AbbVie", category: "anti-tau", disease: "PSP", phase: "2", outcome: "failed",
    note: "No benefit in PSP or AD",
    detail: "Phase 2 PSP trial: 378 participants randomized. Terminated after prespecified futility criteria met at interim analysis. No difference in PSPRS scores at 52 weeks. Separate Phase 2 AD trial (453 pts) also showed no benefit on CDR-SB at 96 weeks.",
    sourceId: "hoglinger-2021-lancetneurol",
  },
  {
    id: 16, name: "Zagotenemab", company: "Eli Lilly", category: "anti-tau", disease: "AD", phase: "2", outcome: "failed",
    note: "MC1 conformational epitope; missed endpoint",
    detail: "PERISCOPE-ALZ: 360 participants with early symptomatic AD. Targets a conformational MC1 epitope spanning the N-terminus and microtubule-binding domain. No drug-placebo difference on iADRS or on tau PET, volumetric MRI, or NfL.",
    sourceId: "fleisher-2024-neurology",
  },
  {
    id: 17, name: "Semorinemab", company: "Genentech", category: "anti-tau", disease: "AD", phase: "2", outcome: "failed",
    note: "N-terminal; no effect on decline",
    detail: "LAURIET trial: 272 participants with mild-to-moderate AD. Showed 42% reduction in ADAS-Cog11 decline vs placebo at week 49, but coprimary ADCS-ADL functional endpoint showed no benefit. CDR-SB and MMSE secondary endpoints also negative.",
    sourceId: "monteiro-2023-neurology",
  },
  {
    id: 18, name: "Bepranemab", company: "UCB", category: "anti-tau", disease: "AD", phase: "2", outcome: "mixed",
    note: "33\u201358% tau PET slowing; APOE4 non-carriers only",
    detail: "TOGETHER trial: 466 participants with prodromal-to-mild AD. Primary CDR-SB endpoint not met. Slowed tau PET accumulation by 33\u201358% and cognitive decline by 21\u201325% vs placebo at 80 weeks. In APOE4 non-carriers with low baseline tau, high-dose slowed tau accumulation by 63\u201367%.",
    sourceId: "barton-2024-ctad",
  },
  {
    id: 19, name: "E2814", company: "Eisai", category: "anti-tau", disease: "AD", phase: "2", outcome: "ongoing",
    note: "MTBR epitope; in DIAN-TU",
    detail: "Anti-MTBR tau antibody in the DIAN-TU Tau NexGen Phase II/III trial (197 participants, dominantly inherited AD, combined with lecanemab). CSF eMTBR-tau243 reduced by 62% at 3 months and 89% at 9 months. FDA Fast Track designation.",
    sourceId: "wildsmith-2025-jpad",
  },
  {
    id: 20, name: "BIIB080", company: "Biogen/Ionis", category: "anti-tau", disease: "AD", phase: "1b/2", outcome: "ongoing",
    note: "Tau ASO; CSF tau \u221250\u201360%; fast-tracked",
    detail: "Phase 1b trial: 46 participants with mild AD. Intrathecal BIIB080 reduced CSF total-tau and p-tau181 by up to 60%, sustained for 6 months post-dosing. Tau PET signal dropped across cortical regions at the highest dose. FDA Fast Track designation.",
    sourceId: "mummery-2023-natmed",
  },

  // 4. Anti-\u03B1-synuclein (PD)
  {
    id: 21, name: "Prasinezumab", company: "Roche", category: "anti-asyn", disease: "PD", phase: "2", outcome: "mixed",
    note: "Motor subscale signal; missed primary",
    detail: "PASADENA trial: 316 participants with early PD. Missed primary endpoint (MDS-UPDRS Parts I+II+III) at 52 weeks. A prespecified motor subscale (Part III) showed slower decline. Open-label extension showed sustained motor benefit over 4 years. Roche advanced to Phase III (PADOVA).",
    sourceId: "pagano-2022-nejm",
  },
  {
    id: 22, name: "Cinpanemab", company: "Biogen", category: "anti-asyn", disease: "PD", phase: "2", outcome: "failed",
    note: "No effect on motor or imaging",
    detail: "SPARK trial: 357 participants with early PD. No evidence of benefit vs placebo on MDS-UPDRS, DAT-SPECT imaging, or quality-of-life measures at 52 weeks. Trial stopped at week 72 interim for futility. Biogen terminated development in February 2021.",
    sourceId: "lang-2022-nejm",
  },

  // 5. Huntingtin lowering (HD)
  {
    id: 23, name: "Tominersen", company: "Roche/Ionis", category: "htt-lowering", disease: "HD", phase: "3", outcome: "worsened",
    note: "HTT ASO; dose-dependent worsening",
    detail: "GENERATION HD1: 791 participants with manifest HD. CSF mutant huntingtin decreased dose-dependently, but the every-8-weeks group performed worse on clinical rating scales than placebo. Trial halted in March 2021 after DSMB found risks outweighed benefits.",
    sourceId: "mccolgan-2023-nejm",
  },
  {
    id: 24, name: "WVE-003", company: "Wave Life Sciences", category: "htt-lowering", disease: "HD", phase: "1b/2", outcome: "halted",
    note: "Allele-selective; insufficient efficacy",
    detail: "SELECT-HD Phase 1b/2a trial. First-in-class allele-selective ASO that lowers mutant HTT while preserving wild-type. CSF mHTT reduced 46% vs placebo (p=0.0007). Reduction correlated with slowing of caudate atrophy. Wave transitioned to next-generation chemistry (WVE-007).",
    sourceId: "wave-2024-wve003",
  },

  // 6. SOD1 targeting (ALS)
  {
    id: 25, name: "Tofersen", company: "Biogen/Ionis", category: "sod1", disease: "ALS", phase: "approved", outcome: "biomarker",
    note: "Missed primary endpoint; approved on biomarker + OLE",
    detail: "VALOR trial: 108 participants with SOD1 ALS. Missed primary ALSFRS-R endpoint (P=0.97). Reduced CSF SOD1 and plasma NfL substantially vs placebo. In the open-label extension, early-start participants showed a 3.5-point ALSFRS-R advantage over delayed-start at 52 weeks. FDA approved April 2023 on biomarker surrogate.",
    sourceId: "miller-2022-nejm",
  },

  // 7. Iron chelators (multi-disease)
  {
    id: 26, name: "Deferiprone", company: "ApoPharma", category: "iron-chelator", disease: "PD", phase: "3", outcome: "worsened",
    note: "FAIRPARK-II: motor worsening",
    detail: "FAIRPARK-II: 372 patients, 36 weeks. Substantia nigra iron fell but MDS-UPDRS worsened (+15.6 vs +6.3 placebo). 22% needed rescue therapy vs 2.7% placebo. The chelator removed iron the brain still needs.",
    sourceId: "devos-2022-nejm",
    citationIds: ["devos-2022-nejm-c2", "devos-2022-nejm-c3"],
  },
  {
    id: 27, name: "Deferiprone", company: "Various", category: "iron-chelator", disease: "AD", phase: "2", outcome: "worsened",
    note: "3D trial: cognitive worsening; Cohen\u2019s d = \u22120.704",
    detail: "3D trial: 81 patients, 12 months. Hippocampal iron fell but cognition worsened (Cohen\u2019s d = \u22120.70 per-protocol). Chelation removes iron the brain needs for myelination and ferroxidase activity.",
    sourceId: "ayton-2025-jamaneurol",
    citationIds: ["ayton-2025-jamaneurol-c1", "ayton-2025-jamaneurol-c3"],
  },
  {
    id: 28, name: "Deferiprone", company: "Academic", category: "iron-chelator", disease: "HD", phase: "1", outcome: "early",
    note: "Preclinical only; mouse motor improvement",
    detail: "No human trial. In R6/2 HD mice, 10-day oral deferiprone removed mitochondrial iron, reduced lipid peroxidation, and improved motor endurance. HD striatum shows genuine mitochondrial iron accumulation from mutant HTT disrupting frataxin.",
    sourceId: "agrawal-2018-frbm",
    citationIds: ["agrawal-2018-frbm-c1"],
  },
  {
    id: 29, name: "ATH434", company: "Alterity", category: "iron-redist", disease: "MSA", phase: "2", outcome: "signal",
    note: "Iron redistribution (not chelation)",
    detail: "Redistributes iron rather than chelating it out. Slower brain atrophy, reduced basal ganglia iron, stable NfL. 43% stable and 30% improved on clinical scales.",
    sourceId: "ath434-2025-msa",
  },
  {
    id: 30, name: "Deferoxamine", company: "Various", category: "iron-chelator", disease: "AD", phase: "2", outcome: "signal",
    note: "Crapper McLachlan 1991; small study",
    detail: "Tested under the aluminum hypothesis, not iron. 48 AD patients received IM injections twice daily for 24 months. Cognitive decline halved (p = 0.03), but the regimen was impractical and no one replicated it in 35 years.",
    sourceId: "crapper-mclachlan-1991-lancet",
    citationIds: ["crapper-mclachlan-1991-lancet-c1"],
  },

  // 8. Anti-inflammatory / immune (multi-disease)
  {
    id: 31, name: "NSAIDs (ADAPT)", company: "NIA", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "Naproxen + celecoxib; no disease modification",
    detail: "ADAPT trial: 2,528 older adults (age 70+, family history of AD) randomized to naproxen, celecoxib, or placebo. Neither drug improved cognition; naproxen showed a weak detrimental trend. Suspended in December 2004 due to cardiovascular safety concerns.",
    sourceId: "adapt-2008-archneurol",
  },
  {
    id: 32, name: "GV-971", company: "Green Valley", category: "anti-inflammatory", disease: "AD", phase: "approved", outcome: "contested",
    note: "China conditional; no Western replication",
    detail: "Phase 3: 818 patients with mild-to-moderate AD, 36 weeks. GV-971 (sodium oligomannate) showed a 2.15-point ADAS-Cog12 advantage over placebo (p<0.0001). Conditionally approved in China in November 2019. Proposed gut-microbiota-neuroinflammation mechanism. No Western replication.",
    sourceId: "xiao-2021-alzresther",
  },
  {
    id: 33, name: "Semaglutide", company: "Novo Nordisk", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "EVOKE/EVOKE+ trials",
    detail: "EVOKE (n=1,855) and EVOKE+ (n=1,953) randomized 3,808 early-stage AD patients to oral semaglutide or placebo for 104 weeks. Neither trial met its primary CDR-SB endpoint despite improvements in inflammatory biomarkers.",
    sourceId: "cummings-2025-alzresther",
  },
  {
    id: 34, name: "AL002", company: "Alector/AbbVie", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "failed",
    note: "INVOKE-2: anti-TREM2; no benefit",
    detail: "INVOKE-2: 381 early AD patients randomized to three AL002 dose regimens or placebo for up to 96 weeks. Failed primary CDR-SB endpoint with no benefit on secondary endpoints or biomarkers despite sustained TREM2 target engagement.",
    sourceId: "alector-2024-al002",
  },
  {
    id: 35, name: "Dapansutrile", company: "Olatec", category: "anti-inflammatory", disease: "PD", phase: "1", outcome: "early",
    note: "NLRP3 inflammasome inhibitor",
    detail: "Phase 1 in healthy volunteers showed 1,000 mg/day for 8 days was safe, reaching plasma levels 100x those needed to inhibit NLRP3 in vitro. Phase 2 DAPA-PD trial (36 patients, early PD, University of Cambridge) is underway, funded by Cure Parkinson's.",
    sourceId: "marchetti-2018-pnas",
  },

  // 9. Antiviral (AD)
  {
    id: 36, name: "Valacyclovir", company: "Generic", category: "antiviral", disease: "AD", phase: "2", outcome: "worsened",
    note: "VALAD: ADAS-Cog +10.86 vs +6.92 placebo",
    detail: "VALAD Phase 2: 120 HSV-seropositive early AD patients, 78 weeks. Valacyclovir worsened cognition: ADAS-Cog11 change was +10.86 vs +6.92 placebo (between-group difference 3.93, p=0.01). Antiviral approach did not slow decline.",
    sourceId: "devanand-2026-jama",
  },

  // 10. Antioxidant / neuroprotective (ALS)
  {
    id: 37, name: "Edaravone", company: "Mitsubishi Tanabe", category: "antioxidant", disease: "ALS", phase: "approved", outcome: "contested",
    note: "Free radical scavenger; later study negative",
    detail: "MCI186-19: 137 patients with early-stage definite/probable ALS, 24 weeks. ALSFRS-R declined 5.01 vs 7.50 placebo (p=0.001). Approved in Japan 2015, US 2017. Earlier confirmatory trial (MCI186-16, 206 pts) was negative (p=0.41), limiting generalizability.",
    sourceId: "edaravone-2017-lancetneurol",
  },
  {
    id: 38, name: "Riluzole", company: "Sanofi", category: "antioxidant", disease: "ALS", phase: "approved", outcome: "modest",
    note: "Glutamate modulator; ~3 month survival",
    detail: "Dose-ranging trial: 959 patients randomized to placebo or riluzole 50/100/200 mg daily, 18-month follow-up. 100 mg dose reduced death risk by 35% vs placebo. Median survival extended ~3 months. First ALS drug approved (1995).",
    sourceId: "lacomblez-1996-lancet",
  },

  // 11. Anti-\u03B1-synuclein (additional)
  {
    id: 39, name: "TAK-341", company: "Takeda/AstraZeneca", category: "anti-asyn", disease: "MSA", phase: "2", outcome: "failed",
    note: "CSF \u03B1-syn \u221259%; no clinical benefit in MSA",
    detail: "Phase 1 trials reduced CSF free \u03B1-synuclein by 54\u201359% in healthy volunteers and PD patients. Phase 2 MSA trial (159 patients, 52 weeks) failed primary and secondary endpoints on the Modified UMSARS. Takeda discontinued development.",
    sourceId: "shering-2025-braincomm",
  },
  {
    id: 40, name: "Minzasolmin", company: "UCB/Novartis", category: "anti-asyn", disease: "PD", phase: "2", outcome: "failed",
    note: "ORCHESTRA: 496 pts; missed all endpoints",
    detail: "ORCHESTRA trial: 496 participants with early PD across 100+ sites. Oral \u03B1-synuclein misfolding inhibitor. Failed all primary and secondary clinical endpoints at 18 months. Hypersensitivity reactions in 8.5% on drug vs 1.2% placebo. UCB discontinued the program in December 2024.",
    sourceId: "ucb-2024-minzasolmin",
  },

  // 12. Huntingtin lowering (additional)
  {
    id: 41, name: "Votoplam", company: "Novartis/PTC", category: "htt-lowering", disease: "HD", phase: "2", outcome: "signal",
    note: "PIVOT-HD: dose-dependent HTT reduction; Phase 3 planned",
    detail: "PIVOT-HD Phase 2 in Stage 2/3 HD. Met primary endpoint of dose-dependent blood HTT reduction (p<0.0001). At 24 months, favorable trends on cUHDRS, TFC, and SDMT vs natural history. No NfL spikes or treatment-related serious adverse events. Novartis planning Phase 3.",
    sourceId: "ptc-2025-votoplam",
  },
  {
    id: 42, name: "Branaplam", company: "Novartis", category: "htt-lowering", disease: "HD", phase: "2", outcome: "halted",
    note: "78% peripheral neuropathy; NfL elevation",
    detail: "VIBRANT-HD Phase 2b: 26 participants enrolled before early termination. Oral HTT splicing modifier originally developed for SMA. Stopped after safety monitoring revealed peripheral neuropathy, NfL elevations, and ventricular volume increases at 17 weeks. Novartis discontinued all HD development.",
    sourceId: "borowsky-2026-natmed",
  },

  // 13. LRRK2 inhibitors (PD)
  {
    id: 43, name: "BIIB122", company: "Denali/Biogen", category: "lrrk2", disease: "PD", phase: "2", outcome: "ongoing",
    note: "Phase 3 terminated (timeline); Phase 2b LUMA ongoing",
    detail: "Phase 3 LIGHTHOUSE study terminated in 2024 due to study complexity and projected 2031 completion, not safety or efficacy concerns. Phase 2b LUMA study (640 participants, early PD with or without LRRK2 mutations, 48\u2013144 weeks) is ongoing.",
    sourceId: "jennings-2023-movdisord",
  },

  // 14. GBA modulators (PD)
  {
    id: 44, name: "Venglustat", company: "Sanofi", category: "gba", disease: "PD", phase: "2", outcome: "worsened",
    note: "MOVES-PD: motor worsening despite 75% substrate reduction",
    detail: "MOVES-PD: 221 participants with GBA1-associated PD across 52 centers. Despite ~75% glucosylceramide reduction in CSF and plasma, venglustat showed no clinical benefit. Motor scores worsened on MDS-UPDRS Parts II+III vs placebo. Sanofi discontinued GBA-PD development.",
    sourceId: "giladi-2023-lancetneurol",
  },
  {
    id: 45, name: "Ambroxol", company: "Academic", category: "gba", disease: "PD", phase: "2", outcome: "mixed",
    note: "Repurposed mucolytic; CSF GCase\u2191; no cognitive benefit",
    detail: "Open-label trial (17 PD patients): ambroxol crossed BBB, CSF GCase protein increased 35%, motor scores improved 6.8 MDS-UPDRS Part III points. Subsequent 52-week RCT (55 PD dementia patients) confirmed target engagement but found no cognitive benefit on primary or secondary endpoints.",
    sourceId: "mullin-2020-jamaneurol",
  },

  // 15. GLP-1 agonists (multi-disease)
  {
    id: 46, name: "Exenatide", company: "UCL/AstraZeneca", category: "glp1", disease: "PD", phase: "3", outcome: "failed",
    note: "96-week Phase 3; no motor benefit vs Phase 2 positive",
    detail: "Exenatide-PD3: 194 patients across 6 UK sites, 96 weeks. MDS-UPDRS III OFF-medication worsened 5.7 (drug) vs 4.5 (placebo) points (p=0.47). No evidence of disease modification despite positive Phase 2 signal (Athauda 2017, 62 pts).",
    sourceId: "vijiaratnam-2025-lancet",
  },
  {
    id: 47, name: "Liraglutide", company: "Imperial/Novo Nordisk", category: "glp1", disease: "AD", phase: "2", outcome: "mixed",
    note: "ELAD: primary missed; 50% less brain atrophy",
    detail: "ELAD trial: 204 patients with mild-to-moderate AD, 52 weeks. Primary endpoint (brain glucose metabolism) missed. Secondary: 50% less volume loss in frontal, temporal, parietal, and total gray matter. 18% less cognitive decline on executive function measures.",
    sourceId: "edison-2026-natmed",
  },
  {
    id: 48, name: "Lixisenatide", company: "Toulouse/Sanofi", category: "glp1", disease: "PD", phase: "2", outcome: "signal",
    note: "LixiPark: motor stability vs worsening; GI side effects",
    detail: "LixiPark: 156 patients with early PD, 12 months + 2-month washout. MDS-UPDRS III changed \u22120.04 (drug) vs +3.04 (placebo) points (p=0.007). Motor stability persisted after washout. Nausea in 46%, vomiting in 13%.",
    sourceId: "meissner-2024-nejm",
  },

  // 16. Anti-inflammatory (additional)
  {
    id: 49, name: "Minocycline", company: "Academic", category: "anti-inflammatory", disease: "ALS", phase: "3", outcome: "worsened",
    note: "Faster ALSFRS-R decline than placebo",
    detail: "Phase 3: 412 ALS patients randomized to minocycline or placebo for 9 months. ALSFRS-R decline was 25% faster in the minocycline group (\u22121.30 vs \u22121.04 units/month, p=0.005), with trends toward worse FVC decline and higher mortality. Anti-inflammatory approach backfired.",
    sourceId: "gordon-2007-lancetneurol",
  },
  {
    id: 50, name: "Masitinib", company: "AB Science", category: "anti-inflammatory", disease: "ALS", phase: "2/3", outcome: "signal",
    note: "27% slowing; EMA rejected; confirmatory Phase 3 ongoing",
    detail: "Phase 2/3: 394 ALS patients randomized to masitinib 4.5 mg/kg/day, 3.0 mg/kg/day, or placebo, all added to riluzole. Masitinib 4.5 mg/kg slowed ALSFRS-R decline by 27% vs placebo (p=0.016). EMA upheld a negative opinion on conditional approval, citing insufficient evidence from a single trial.",
    sourceId: "mora-2020-alsftd",
  },
  {
    id: 51, name: "Sargramostim", company: "Univ. Colorado", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "signal",
    note: "GM-CSF: MMSE +1.45 pts; immune-boosting approach",
    detail: "Phase 2: 40 mild-to-moderate AD patients randomized to GM-CSF 250 mcg/m\u00B2/day subcutaneous for 3 weeks. Sargramostim group improved 1.45 MMSE points from baseline (p=0.007); between-group difference was 1.80 points (p=0.037). No ARIA events.",
    sourceId: "potter-2021-alzdemtrci",
  },
  {
    id: 52, name: "Pioglitazone", company: "Takeda", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "TOMMORROW: 3,494 pts; prevention trial; futility",
    detail: "TOMMORROW Phase 3: 3,494 cognitively normal adults (age 65\u201383) at genetic risk of AD randomized to low-dose pioglitazone or placebo. Stopped in January 2018 after failing a prespecified futility analysis. Did not delay onset of mild cognitive impairment.",
    sourceId: "burns-2021-lancetneurol",
  },

  // 17. Antioxidant / neuroprotective (additional)
  {
    id: 53, name: "Relyvrio", company: "Amylyx", category: "antioxidant", disease: "ALS", phase: "approved", outcome: "contested",
    note: "Approved 2022; PHOENIX Phase 3 failed; withdrawn 2024",
    detail: "CENTAUR Phase 2: 137 patients, 24 weeks. ALSFRS-R declined 1.24 vs 1.66 pts/month (p=0.03). FDA approved September 2022. PHOENIX Phase 3: 664 patients, 48 weeks. No difference on ALSFRS-R (p=0.667) or any secondary endpoint. Withdrawn from market October 2024.",
    sourceId: "paganoni-2020-nejm",
  },
  {
    id: 54, name: "CoQ10", company: "NINDS", category: "antioxidant", disease: "PD", phase: "3", outcome: "failed",
    note: "QE3: 600 pts; terminated for futility",
    detail: "QE3 trial: 600 patients randomized to placebo, 1200 mg/d, or 2400 mg/d CoQ10 (all with vitamin E). Terminated at prespecified futility analysis. UPDRS worsened 6.9 (placebo), 7.5 (1200 mg, p=0.49), 8.0 (2400 mg, p=0.21). No benefit at any dose.",
    sourceId: "psg-2014-jamaneurol",
  },
  {
    id: 55, name: "Inosine", company: "PSG/MJFF", category: "antioxidant", disease: "PD", phase: "3", outcome: "failed",
    note: "SURE-PD3: urate elevation; futility at 298 pts",
    detail: "SURE-PD3: 298 patients (149 per arm), up to 2 years. Serum urate raised 2.03 mg/dL by inosine. Stopped at prespecified futility analysis. MDS-UPDRS progression 11.1 (drug) vs 9.9 (placebo) pts/year (p=0.18). More kidney stones (7.0 vs 1.4 per 100 pt-years).",
    sourceId: "schwarzschild-2021-jama",
  },
  {
    id: 56, name: "Dimebon", company: "Medivation/Pfizer", category: "antioxidant", disease: "AD", phase: "3", outcome: "failed",
    note: "$725M Pfizer deal; all Phase 3 trials negative",
    detail: "CONNECTION: 598 patients with mild-to-moderate AD, 26 weeks. No effect on co-primary endpoints ADAS-Cog (p=0.86) or CIBIC-plus (p=0.81). CONCERT (1,003 pts) also negative. Phase 2 (183 pts) had shown improvement on all 5 endpoints, prompting the $725M deal.",
    sourceId: "doody-2008-lancet",
  },
  {
    id: 57, name: "LMTM", company: "TauRx", category: "antioxidant", disease: "AD", phase: "3", outcome: "mixed",
    note: "Tau aggregation inhibitor; monotherapy subgroup only",
    detail: "Phase 3: 891 patients with mild-to-moderate AD across 115 sites in 16 countries, 15 months. LMTM (methylene blue derivative) failed as add-on therapy on both ADAS-Cog and ADCS-ADL. Pre-specified monotherapy subgroup (15% of patients) showed a signal, but this was underpowered.",
    sourceId: "gauthier-2016-lancet",
  },
  {
    id: 58, name: "Troriluzole", company: "Biohaven", category: "antioxidant", disease: "AD", phase: "2/3", outcome: "failed",
    note: "Glutamate modulator; 350 pts; missed both endpoints",
    detail: "T2 Protect AD: 350 patients with mild-to-moderate AD, 48 weeks. No significant effect on co-primary outcomes ADAS-Cog11 and CDR-SB vs placebo. Also failed the key secondary measure of hippocampal volume by MRI. Biohaven dropped the AD indication in 2021.",
    sourceId: "biohaven-2021-troriluzole",
  },
  {
    id: 59, name: "Arimoclomol", company: "Orphazyme", category: "antioxidant", disease: "ALS", phase: "3", outcome: "failed",
    note: "Heat shock amplifier; 245 pts; missed ALSFRS-R",
    detail: "ORARIALS-01: 245 patients across 29 sites in 12 countries, up to 76 weeks. Randomized 2:1 to arimoclomol 248 mg TID or placebo. Failed the primary combined assessment of function and survival (CAFS) and all key secondary endpoints including ALSFRS-R and overall survival.",
    sourceId: "benatar-2024-lancetneurol",
  },
  {
    id: 60, name: "Dexpramipexole", company: "Biogen", category: "antioxidant", disease: "ALS", phase: "3", outcome: "failed",
    note: "EMPOWER: 943 pts; no benefit; neutropenia signal",
    detail: "EMPOWER: 943 patients randomized to dexpramipexole 150 mg BID or placebo, 12\u201318 months. No difference on CAFS or ALSFRS-R. Neutropenia in 8% (drug) vs 2% (placebo). Biogen ended development after these results.",
    sourceId: "cudkowicz-2013-lancetneurol",
  },
  {
    id: 61, name: "TUDCA", company: "Academic", category: "antioxidant", disease: "ALS", phase: "3", outcome: "failed",
    note: "Bile acid; Phase 2 positive; Phase 3 (336 pts) negative",
    detail: "Phase 2 (Elia 2016): 34 patients, 54 weeks. 87% responders on TUDCA vs 43% placebo (p=0.02). Phase 3 TUDCA-ALS: 336 patients across 26 European centers, 18 months. Failed to meet primary ALSFRS-R endpoint. No difference on survival or neurofilament biomarkers.",
    sourceId: "elia-2016-eurjneurol",
  },

  // 18. Iron redistribution (natural proteins and chaperones)
  {
    id: 62, name: "Lactoferrin", company: "Academic", category: "iron-redist", disease: "AD", phase: "2", outcome: "signal",
    note: "AD pilot: cognitive improvement; ~$15/month",
    detail: "Pilot in AD patients showed enhanced cognitive function on MMSE and ADAS-COG 11. Crosses BBB via receptor-mediated transport. Available as a supplement for ~$15/month. No Phase 2 RCT funded.",
    sourceId: "mohamed-2019-biomed-pharmacother",
  },
  {
    id: 63, name: "Ceruloplasmin", company: "Kedrion", category: "iron-redist", disease: "multi", phase: "1", outcome: "signal",
    note: "FDA Orphan Drug; ferroxidase for safe iron export",
    detail: "Converts Fe\u00B2\u207A to Fe\u00B3\u207A so ferroportin can export iron safely. FDA Orphan Drug Designation (2025) for aceruloplasminemia. In mice, treated animals showed amelioration of motor incoordination and reduced brain iron deposition. No proposal for AD or PD.",
    sourceId: "zanardi-2018-embo",
  },
  {
    id: 64, name: "Transferrin (PST-611)", company: "PulseSight", category: "iron-redist", disease: "multi", phase: "1", outcome: "early",
    note: "Gene therapy expressing transferrin; Phase 1 in dry AMD",
    detail: "PST-611 is a first-in-class non-viral gene therapy expressing human transferrin, the body\u2019s iron courier. Phase 1 in dry AMD. No trial for neurodegeneration.",
    sourceId: "pulsesight-2025-pst611",
  },
  {
    id: 65, name: "Ferritin nanocages", company: "Academic", category: "iron-redist", disease: "multi", phase: "1", outcome: "early",
    note: "Preclinical; sequesters up to 4,500 iron atoms",
    detail: "24-subunit protein shell storing up to 4,500 iron atoms. Crosses BBB via TfR1 clathrin-coated pit formation. In preclinical development as drug delivery vehicles. No clinical trial for direct iron management.",
    sourceId: "wen-2026-ijn-ferritin",
  },
  {
    id: 66, name: "Rusfertide", company: "Protagonist/Takeda", category: "iron-redist", disease: "multi", phase: "1", outcome: "signal",
    note: "Hepcidin mimic; NDA submitted for polycythemia vera",
    detail: "First-in-class hepcidin mimic. NDA submitted for polycythemia vera. Hepcidin is the master switch for systemic iron; astrocyte-derived hepcidin guards the blood-brain barrier. Never tested for neurodegeneration.",
    sourceId: "takeda-2026-rusfertide-nda",
  },

  // 19. Gamma-secretase inhibitors (AD)
  {
    id: 67, name: "Semagacestat", company: "Eli Lilly", category: "gamma-secretase", disease: "AD", phase: "3", outcome: "worsened",
    note: "Cognitive worsening + skin cancer; halted by DSMB",
    detail: "Phase 3: 1,537 patients with mild-to-moderate AD. DSMB halted the trial for futility and safety. Cognition worsened on ADAS-Cog vs placebo. Increased risk of skin cancer and infections. Blocking \u03B3-secretase also blocked Notch signaling.",
    sourceId: "doody-2013-nejm",
  },
  {
    id: 68, name: "Avagacestat", company: "Bristol-Myers Squibb", category: "gamma-secretase", disease: "AD", phase: "2", outcome: "worsened",
    note: "Cognitive worsening at higher doses; skin cancers",
    detail: "Phase 2: 209 patients with mild-to-moderate AD and 263 prodromal AD patients. Higher doses worsened cognition and produced skin cancers. Notch-related toxicity similar to semagacestat. BMS terminated development.",
    sourceId: "coric-2015-jamaneurol",
  },

  // 20. Cholinesterase inhibitors (AD)
  {
    id: 69, name: "Donepezil", company: "Eisai/Pfizer", category: "cholinesterase", disease: "AD", phase: "approved", outcome: "modest",
    note: "Approved 1996; symptomatic only; no disease modification",
    detail: "Phase 3: 473 patients with mild-to-moderate AD. ADAS-Cog improved 2.5\u20133.1 points vs placebo at 24 weeks. Approved in 1996. After 30 years of use, no evidence of disease modification. GI side effects in ~20%.",
    sourceId: "rogers-1998-neurology",
  },
  {
    id: 70, name: "Rivastigmine", company: "Novartis", category: "cholinesterase", disease: "AD", phase: "approved", outcome: "modest",
    note: "Approved 2000; dual AChE/BuChE; symptomatic only",
    detail: "Phase 3: 725 patients with mild-to-moderate AD, 26 weeks. ADAS-Cog improved 3.78 points vs placebo at higher doses. Dual acetylcholinesterase and butyrylcholinesterase inhibitor. Approved 2000. Transdermal patch reduced GI side effects. No disease modification.",
    sourceId: "corey-bloom-1998-ijgp",
  },

  {
    id: 72, name: "Galantamine", company: "Janssen", category: "cholinesterase", disease: "AD", phase: "approved", outcome: "modest",
    note: "Approved 2001; dual AChE + nicotinic modulator; symptomatic only",
    detail: "Five Phase 3 trials totaling 3,000+ patients with mild-to-moderate AD. ADAS-Cog improved ~4 points vs placebo at 6 months. Dual mechanism: AChE inhibition plus allosteric nicotinic receptor modulation. Approved 2001. No disease modification.",
    sourceId: "raskind-2000-neurology",
  },

  // 21. NMDA antagonists (AD)
  {
    id: 71, name: "Memantine", company: "Forest/Allergan", category: "nmda", disease: "AD", phase: "approved", outcome: "modest",
    note: "Approved 2003; moderate-severe AD; no disease modification",
    detail: "Phase 3: 252 patients with moderate-to-severe AD, 28 weeks. SIB improved 5.7 points vs placebo (p<0.001). ADCS-ADL improved 3.4 points (p=0.02). Approved 2003 for moderate-to-severe AD. Does not slow progression.",
    sourceId: "reisberg-2003-nejm",
  },

  // 22. NAD+ boosters
  {
    id: 73, name: "Nicotinamide riboside", company: "ChromaDex/Academic", category: "nad", disease: "PD", phase: "1", outcome: "signal",
    note: "NR-SAFE: 3000 mg/day safe; augmented NAD+ metabolome",
    detail: "NR-SAFE: 20 PD patients, randomized 1:1, NR 1500 mg twice daily for 30 days. Safe with pronounced systemic NAD+ augmentation. No methyl donor depletion. Earlier NADPARK trial (n=30) showed cerebral NAD+ increase and reduced neuroinflammation markers.",
    sourceId: "berven-2023-nat-commun",
  },
  {
    id: 74, name: "Nicotinamide riboside", company: "Academic", category: "nad", disease: "AD", phase: "2", outcome: "mixed",
    note: "MCI trial: NAD+ increased; no cognitive benefit at 8 weeks",
    detail: "Crossover RCT: older adults with MCI, NR 1 g/day for 8 weeks. Blood NAD+ levels significantly increased. No significant change in cognition (MoCA) or plasma AD biomarkers (pTau217, GFAP, NfL) at this dose and duration.",
    sourceId: "wu-2025-alzheimers-dement",
  },

  // ── MS disease-modifying therapies ──────────────────────────────────
  {
    id: 75, name: "Ocrelizumab", company: "Roche/Genentech", category: "ms-dmt", disease: "MS", phase: "approved", outcome: "approved",
    note: "First approved therapy for primary progressive MS",
    detail: "OPERA I/II (relapsing): 1,656 patients, 96 weeks. Reduced annualized relapse rate 46\u201347% vs interferon \u03B2-1a. ORATORIO (PPMS): 732 patients, confirmed disability progression reduced by 24% (p=0.03). Anti-CD20 B-cell depleting antibody. Approved 2017.",
    sourceId: "montalban-2017-nejm",
  },
  {
    id: 76, name: "Natalizumab", company: "Biogen/Elan", category: "ms-dmt", disease: "MS", phase: "approved", outcome: "approved",
    note: "68% relapse reduction; PML risk limits use",
    detail: "AFFIRM: 942 relapsing MS patients, 2 years. Reduced annualized relapse rate by 68% and risk of sustained disability progression by 42%. Anti-\u03B14 integrin antibody blocks leukocyte BBB migration. PML risk (~1:1000 in JCV-positive patients) limits long-term use. Approved 2004.",
    sourceId: "polman-2006-nejm",
  },
  {
    id: 77, name: "Fingolimod", company: "Novartis", category: "ms-dmt", disease: "MS", phase: "approved", outcome: "approved",
    note: "First oral MS therapy; S1P receptor modulator",
    detail: "FREEDOMS: 1,272 relapsing MS patients, 24 months. Reduced annualized relapse rate by 54% vs placebo. TRANSFORMS: superior to interferon \u03B2-1a IM (52% relapse reduction). S1P receptor modulator traps lymphocytes in lymph nodes. Approved 2010.",
    sourceId: "kappos-2010-nejm",
  },
  {
    id: 78, name: "Dimethyl fumarate", company: "Biogen", category: "ms-dmt", disease: "MS", phase: "approved", outcome: "approved",
    note: "Nrf2 activator; oral; approved 2013",
    detail: "DEFINE: 1,234 relapsing MS patients, 2 years. Reduced annualized relapse rate by 53% and disability progression by 38% vs placebo. CONFIRM: 49% relapse reduction vs placebo. Activates Nrf2 antioxidant pathway. Approved 2013.",
    sourceId: "gold-2012-nejm",
  },
  {
    id: 79, name: "Siponimod", company: "Novartis", category: "ms-dmt", disease: "MS", phase: "approved", outcome: "approved",
    note: "First oral therapy for active SPMS",
    detail: "EXPAND: 1,651 SPMS patients, up to 37 months. Reduced risk of 3-month confirmed disability progression by 21% (p=0.013). Reduced annualized relapse rate by 55%. Selective S1P1/S1P5 modulator. Approved 2019 for active SPMS.",
    sourceId: "kappos-2018-lancet",
  },
  {
    id: 80, name: "Ofatumumab", company: "Novartis", category: "ms-dmt", disease: "MS", phase: "approved", outcome: "approved",
    note: "Subcutaneous anti-CD20; self-administered",
    detail: "ASCLEPIOS I/II: 1,882 relapsing MS patients. Reduced annualized relapse rate by 51\u201359% vs teriflunomide. Reduced Gd-enhancing lesions by 98%. Fully human anti-CD20 antibody, subcutaneous monthly injection. Approved 2020.",
    sourceId: "hauser-2020-nejm",
  },
  {
    id: 81, name: "Cladribine", company: "Merck KGaA", category: "ms-dmt", disease: "MS", phase: "approved", outcome: "approved",
    note: "Oral immune reconstitution therapy; 2 short courses",
    detail: "CLARITY: 1,326 relapsing MS patients, 96 weeks. Reduced annualized relapse rate by 58% and disability progression by 33% vs placebo. Purine analog that selectively depletes lymphocytes. Two short oral courses (10 days/year) provide durable effect. Approved 2017 (EU), 2019 (US).",
    sourceId: "giovannoni-2010-nejm",
  },

  // ── Dopaminergic (PD symptomatic) ───────────────────────────────────
  {
    id: 82, name: "Levodopa/Carbidopa", company: "Various", category: "dopamine", disease: "PD", phase: "approved", outcome: "approved",
    note: "Gold standard PD symptomatic therapy since 1970",
    detail: "Dopamine precursor combined with peripheral decarboxylase inhibitor. Dramatic motor symptom improvement. ELLDOPA (2004): 361 early PD patients, 40 weeks. Higher doses showed greater motor benefit but faster wearing-off. Does not slow disease progression. Motor complications (dyskinesia, wearing-off) develop in 40\u201350% of patients within 5 years.",
    sourceId: "fahn-2004-nejm",
  },
  {
    id: 83, name: "Pramipexole", company: "Boehringer Ingelheim", category: "dopamine", disease: "PD", phase: "approved", outcome: "approved",
    note: "D2/D3 agonist; no proven disease modification",
    detail: "CALM-PD: 301 early PD patients randomized to pramipexole vs levodopa, 4 years. Pramipexole reduced motor complications (28% vs 51% dyskinesia) but levodopa provided greater symptom control. INSPECT DaTSCAN substudy suggested reduced dopamine transporter loss, but confounded by drug-receptor interaction on imaging.",
    sourceId: "parkinson-study-group-2000-jama",
  },
  {
    id: 84, name: "Rasagiline", company: "Teva", category: "dopamine", disease: "PD", phase: "approved", outcome: "approved",
    note: "MAO-B inhibitor; ADAGIO disease-modification signal at 1 mg only",
    detail: "ADAGIO: 1,176 early PD patients, 72 weeks. Early-start rasagiline 1 mg met all 3 hierarchical endpoints for disease modification. But 2 mg dose failed, undermining the result. FDA did not grant disease-modification labeling. Irreversible MAO-B inhibitor. Approved 2006 for PD.",
    sourceId: "olanow-2009-nejm",
  },
  {
    id: 85, name: "Opicapone", company: "BIAL/Neurocrine", category: "dopamine", disease: "PD", phase: "approved", outcome: "approved",
    note: "COMT inhibitor; once-daily adjunct to levodopa",
    detail: "BIPARK-I: 600 PD patients with motor fluctuations, 14\u201315 weeks. Opicapone 50 mg reduced daily OFF-time by 60 minutes vs placebo (p<0.001). Third-generation COMT inhibitor with once-daily dosing and no hepatotoxicity signal (unlike tolcapone). Approved 2020 (US).",
    sourceId: "ferreira-2016-lancet-neurol",
  },

  // ── Mitochondrial ───────────────────────────────────────────────────
  {
    id: 86, name: "Idebenone", company: "Santhera", category: "mitochondrial", disease: "MS", phase: "2", outcome: "failed",
    note: "Synthetic CoQ10 analog; failed in progressive MS",
    detail: "IPPoMS (EPIC): 85 PPMS patients, 2 years. No significant effect on brain atrophy, disability progression, or lesion burden. CoQ10 analog and electron carrier that bypasses Complex I. Approved in some countries for Leber hereditary optic neuropathy but failed in MS and Friedreich\u2019s ataxia Phase 3 (DELOS extension).",
    sourceId: "kosa-2020-msard",
  },
  {
    id: 87, name: "Omaveloxolone", company: "Reata/Biogen", category: "mitochondrial", disease: "FRDA", phase: "approved", outcome: "approved",
    note: "Nrf2 activator; first approved Friedreich\u2019s ataxia therapy",
    detail: "MOXIe Part 2: 103 Friedreich\u2019s ataxia patients, 48 weeks. mFARS score improved by 2.40 points vs placebo (p=0.014). Activates Nrf2 to upregulate antioxidant genes and improve mitochondrial function. Approved February 2023, first FDA-approved therapy for FRDA.",
    sourceId: "lynch-2021-ann-neurol",
  },
  {
    id: 88, name: "Coenzyme Q10", company: "Various/NINDS", category: "mitochondrial", disease: "PD", phase: "3", outcome: "failed",
    note: "QE3: 600 PD patients; futile at all doses",
    detail: "QE3 (NINDS): 600 early PD patients, 1200 or 2400 mg/day, 16 months. Stopped for futility at prespecified interim analysis. No benefit on UPDRS or any secondary endpoint. Earlier Phase 2 (Shults 2002) had suggested dose-dependent slowing, but QE3 definitively showed no disease modification.",
    sourceId: "parkinson-study-group-2014-jama-neurol",
  },
  {
    id: 89, name: "MitoQ", company: "Antipodean Pharmaceuticals", category: "mitochondrial", disease: "PD", phase: "2", outcome: "failed",
    note: "Mitochondria-targeted antioxidant; no PD benefit",
    detail: "RCT: 128 untreated PD patients, 40 or 80 mg/day, 12 months. No difference from placebo on UPDRS progression (primary) or any secondary endpoint. Mitochondria-targeted ubiquinone conjugated to triphenylphosphonium cation for 100\u20131000x mitochondrial concentration.",
    sourceId: "snow-2010-mov-disord",
  },

  // ── Gene therapy ────────────────────────────────────────────────────
  {
    id: 90, name: "VY-HTT01", company: "Voyager/Sanofi", category: "gene-therapy", disease: "HD", phase: "1", outcome: "halted",
    note: "AAV-miRNA targeting HTT; discontinued 2021 before human trials",
    detail: "Planned Phase 1b (VYTAL): AAV1 vector delivering artificial miRNA to suppress huntingtin mRNA via RNA interference. Intrastriatal delivery to putamen and thalamus. Preclinical NHP data showed reduced huntingtin mRNA, but Voyager discontinued in 2021 before the trial launched, pivoting to less invasive IV-delivered gene therapies.",
    sourceId: "voyager-2021-vyhtt01",
  },
  {
    id: 91, name: "LX1001", company: "Lexeo Therapeutics", category: "gene-therapy", disease: "AD", phase: "1b/2", outcome: "signal",
    note: "AAV-APOE2 gene therapy; CSF APOE2 detected, pTau reduced",
    detail: "Phase 1/2: AAVrh.10 vector delivering APOE2 cDNA via intrathecal injection in 15 APOE4 homozygotes with MCI to moderate dementia. Study completed November 2024. APOE2 protein detectable in CSF across all participants. CSF pTau and total tau reduced in most patients. 12/15 had transient CSF pleocytosis. No ARIA reported. FDA fast-track designation 2021.",
    sourceId: "lexeo-2024-lx1001",
  },
  {
    id: 92, name: "PR006", company: "Prevail/Lilly", category: "gene-therapy", disease: "FTD", phase: "1b/2", outcome: "ongoing",
    note: "AAV9-GRN for progranulin-deficient FTD",
    detail: "Phase 1b/2 (PROCLAIM): AAV9 vector delivering progranulin gene via intracisternal magna injection for GRN-associated FTD. Aims to restore progranulin protein levels in CSF. Initial cohorts showed dose-dependent CSF progranulin increase.",
    sourceId: "sevigny-2024-nat-med",
  },

  // ── Progranulin ─────────────────────────────────────────────────────
  {
    id: 93, name: "Latozinemab", company: "Alector/AbbVie", category: "progranulin", disease: "FTD", phase: "3", outcome: "failed",
    note: "Anti-sortilin antibody; INFRONT-3 missed primary endpoint",
    detail: "INFRONT-3 Phase 3: Anti-sortilin antibody that blocks sortilin-mediated progranulin degradation, raising circulating progranulin levels by 50\u201370%. Phase 1 showed dose-dependent CSF and plasma progranulin elevation in GRN-FTD patients. Phase 3 missed primary clinical endpoint; development terminated 2025.",
    sourceId: "ward-2024-alzheimers-dement",
  },
  {
    id: 94, name: "PBFT02", company: "Passage Bio", category: "progranulin", disease: "FTD", phase: "1b/2", outcome: "signal",
    note: "AAV1-GRN gene therapy; CSF progranulin restored, SAEs noted",
    detail: "Phase 1/2 (upliFT-D): AAV1 vector delivering GRN gene via intracisternal injection for GRN-FTD. CSF progranulin increased from <3 ng/mL to 13\u201327 ng/mL at 6 months and 22\u201334 ng/mL at 12 months in all patients. Plasma NfL 13% lower than baseline at 12 months (vs expected 29% annual increase untreated). SAEs: 2/7 patients with asymptomatic venous sinus thrombosis. No DRG toxicity.",
    sourceId: "passagebio-2025-pbft02",
  },

  // ── C9orf72 targeting ───────────────────────────────────────────────
  {
    id: 95, name: "BIIB078", company: "Biogen/Ionis", category: "c9orf72", disease: "ALS", phase: "1", outcome: "failed",
    note: "ASO for C9orf72; discontinued 2022, no efficacy",
    detail: "Phase 1: Antisense oligonucleotide targeting C9orf72 repeat expansion RNA in ALS patients with C9orf72 mutation. Discontinued in 2022 after failing to show clinical efficacy. Did not significantly reduce poly(GP) dipeptide repeat proteins in CSF at tested doses.",
    sourceId: "vandenberg-2024-lancet-neurol",
  },
  {
    id: 96, name: "WVE-004", company: "Wave Life Sciences", category: "c9orf72", disease: "ALS", phase: "1b/2", outcome: "halted",
    note: "Stereopure ASO for C9orf72; discontinued 2023",
    detail: "Phase 1b/2: Stereopure antisense oligonucleotide selectively targeting C9orf72 mutant (repeat-containing) transcripts while sparing normal allele. Preclinical: 84% V3 transcript knockdown and 96% poly(GP) reduction in mouse spinal cord. Clinical: reduced CSF poly(GP) by ~40% but discontinued in 2023 as reduction was deemed insufficient. ALS + FTD indication.",
    sourceId: "liu-2022-mol-ther-na",
  },

  // ── LRRK2 inhibitors (additions) ────────────────────────────────────
  {
    id: 97, name: "BIIB122", company: "Biogen/Denali", category: "lrrk2", disease: "PD", phase: "2", outcome: "ongoing",
    note: "LRRK2 kinase inhibitor; LUMA Phase 2b trial",
    detail: "Phase 2b (LUMA): Small-molecule LRRK2 kinase inhibitor in PD patients with and without LRRK2 mutations. Also known as DNL151. Testing whether LRRK2 kinase inhibition slows PD progression regardless of mutation status. Preclinical: normalized lysosomal dysfunction and reduced \u03B1-synuclein pathology.",
    sourceId: "jennings-2023-mov-disord",
  },

  // ── GBA modulators (additions) ──────────────────────────────────────
  {
    id: 98, name: "Venglustat", company: "Sanofi", category: "gba", disease: "PD", phase: "2", outcome: "worsened",
    note: "GCase substrate reduction; MOVES-PD: worsened motor scores",
    detail: "MOVES-PD: 221 GBA-PD patients, 52 weeks. Venglustat (glucosylceramide synthase inhibitor) worsened MDS-UPDRS Part II and Part III scores vs placebo. Cognitive measures also trended worse. Substrate reduction strategy (reducing GCase substrates rather than restoring enzyme) may have been counterproductive in neurons.",
    sourceId: "giladi-2023-lancet-neurol",
  },
  {
    id: 99, name: "Ambroxol", company: "Various/Academic", category: "gba", disease: "PD", phase: "2", outcome: "signal",
    note: "GCase chaperone; AIM-PD showed target engagement",
    detail: "AIM-PD: 17 PD patients (with and without GBA mutations), open-label, 186 days, high-dose (1260 mg/day). CSF ambroxol and GCase activity increased significantly. CSF \u03B1-synuclein decreased. Well-tolerated. Repurposed mucolytic available for ~$0.10/day. Larger placebo-controlled trial needed.",
    sourceId: "mullin-2020-jama-neurol",
  },

  // ── GLP-1 agonists (additions) ──────────────────────────────────────
  {
    id: 100, name: "Liraglutide", company: "Novo Nordisk", category: "glp1", disease: "AD", phase: "2", outcome: "mixed",
    note: "ELAD: primary (FDG-PET) negative; secondary cognition signal",
    detail: "ELAD: 204 AD patients, 12 months. Primary outcome (cerebral glucose metabolism, FDG-PET) showed no significant difference (p=0.14). Secondary outcome (ADAS-Exec) improved in liraglutide group (p=0.01). GLP-1 agonist approved for diabetes and obesity.",
    sourceId: "edison-2026-natmed",
  },
  {
    id: 101, name: "Lixisenatide", company: "Sanofi", category: "glp1", disease: "PD", phase: "2", outcome: "signal",
    note: "LixiPark: motor progression slowed at 12 months",
    detail: "LixiPark: 156 early PD patients, 12 months treatment + 2 months washout. MDS-UPDRS Part III improved 0.04 points (lixisenatide) vs worsened 3.04 points (placebo), difference 3.08 (p=0.007) at 12 months. Effect persisted at 14-month washout. GLP-1 agonist. Nausea in 46% (vs 12% placebo).",
    sourceId: "meissner-2024-nejm",
  },

  // ── Kinase inhibitors ─────────────────────────────────────────────
  {
    id: 102, name: "Nilotinib", company: "Georgetown/Novartis", category: "kinase", disease: "PD", phase: "2", outcome: "failed",
    note: "NILO-PD: negligible CSF penetration; trended worse than placebo",
    detail: "NILO-PD: Phase 2 in moderately advanced PD. CSF/serum ratio only 0.2\u20130.3%. No evidence of dopamine metabolite changes. Both dose arms (150 mg, 300 mg) trended toward worsening on MDS-UPDRS-3 vs placebo. Investigators concluded nilotinib should not be further tested in PD.",
    sourceId: "simuni-2021-jama-neurol",
  },
  {
    id: 103, name: "Saracatinib", company: "AstraZeneca", category: "kinase", disease: "AD", phase: "2", outcome: "failed",
    note: "Fyn kinase inhibitor; no effect on cerebral metabolism or cognition",
    detail: "Phase 2a: 159 amyloid-confirmed mild AD patients, AZD0530 100\u2013125 mg daily, 52 weeks. Primary endpoint (FDG-PET metabolic decline) showed no treatment difference (P=0.34). All secondary clinical and biomarker measures also negative. Repurposed cancer drug targeting Fyn/A\u03B2/tau synapse toxicity pathway.",
    sourceId: "vandyck-2019-jama-neurol",
  },
  {
    id: 104, name: "Neflamapimod", company: "EIP Pharma", category: "kinase", disease: "DLB", phase: "2", outcome: "mixed",
    note: "p38\u03B1 MAPK inhibitor; missed primary but improved mobility and CDR-SB",
    detail: "AscenD-LB: 91 mild-to-moderate DLB patients on cholinesterase inhibitors, 16 weeks. Primary endpoint (cognitive-test battery) not met. Secondary endpoints (Timed Up and Go, CDR-SB) significantly improved. In \u201cpure\u201d DLB patients without AD co-pathology, effect sizes were substantial. Phase 2b RewinD-LB ongoing.",
    sourceId: "jiang-2022-nat-commun",
  },
  {
    id: 105, name: "Tideglusib", company: "Zeltia/Noscira", category: "kinase", disease: "PSP", phase: "2", outcome: "failed",
    note: "GSK-3\u03B2 inhibitor; TAUROS: no efficacy at 52 weeks",
    detail: "TAUROS: 146 mild-to-moderate PSP patients, tideglusib 600 mg or 800 mg vs placebo, 52 weeks. No significant differences on PSP rating scale (primary) or any secondary endpoints. A separate imaging substudy showed reduced brain atrophy, but this did not translate to clinical benefit. Well tolerated.",
    sourceId: "tolosa-2014-mov-disord",
  },

  {
    id: 117, name: "Lithium carbonate", company: "Generic", category: "kinase", disease: "multi", phase: "3", outcome: "failed",
    note: "GSK-3\u03B2 inhibitor; LiCALS Phase 3 ALS: no survival benefit; AD trial: no biomarker effect",
    detail: "LiCALS Phase 3: 214 ALS patients, lithium carbonate vs placebo, 18 months. No evidence of survival benefit. Also tested in AD (Hampel 2009): 10-week RCT showed no effect on GSK-3 activity, CSF tau phosphorylation, or cognition. A cheap generic with strong preclinical rationale (GSK-3\u03B2 inhibition, autophagy, neuroprotection) that failed to translate clinically.",
    sourceId: "morrison-2013-lancet-neurol",
  },

  // ── Calcium channel blockers ──────────────────────────────────────
  {
    id: 106, name: "Isradipine", company: "NINDS", category: "calcium", disease: "PD", phase: "3", outcome: "failed",
    note: "STEADY-PD III: no slowing of PD progression over 36 months",
    detail: "STEADY-PD III: 336 early PD patients across 57 sites, isradipine 5 mg twice daily vs placebo, 36 months. Primary endpoint (UPDRS I-III change) showed no treatment effect: -0.27 points (P=0.85). 95% completion rate ruled out attrition confounds. Dihydropyridine calcium channel blocker targeting Cav1.3 in dopaminergic neurons.",
    sourceId: "psg-2020-ann-intern-med",
  },

  // ── Anti-amyloid (additions) ──────────────────────────────────────
  {
    id: 107, name: "Gantenerumab", company: "Roche", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "GRADUATE I/II: cleared amyloid but no clinical benefit",
    detail: "GRADUATE I/II: 1,965 early AD patients across two Phase 3 trials, subcutaneous gantenerumab vs placebo, 116 weeks. Amyloid reduction significant (28% amyloid-negative) but CDR-SB difference was -0.31 (P=0.10) in GRADUATE I and -0.19 (P=0.30) in GRADUATE II. ARIA-E in 24.9%. Development halted in sporadic AD.",
    sourceId: "bateman-2023-nejm",
  },

  // ── TREM2 ─────────────────────────────────────────────────────────
  {
    id: 108, name: "AL002", company: "Alector/AbbVie", category: "trem2", disease: "AD", phase: "2", outcome: "failed",
    note: "TREM2 agonist; INVOKE-2: no slowing of decline despite target engagement",
    detail: "INVOKE-2 Phase 2: TREM2 agonist antibody in early AD patients, IV dosing. Failed to meet primary endpoints: no significant slowing of cognitive decline or amyloid PET reduction. Soluble TREM2 levels elevated (confirming target engagement), but no clinical benefit. ARIA observed, especially in APOE4 carriers.",
    sourceId: "long-2024-alz-res-ther",
  },

  // ── Sigma-1 receptor ──────────────────────────────────────────────
  {
    id: 109, name: "Pridopidine", company: "Prilenia Therapeutics", category: "sigma", disease: "HD", phase: "3", outcome: "failed",
    note: "PROOF-HD: sigma-1 agonist missed primary and secondary endpoints",
    detail: "PROOF-HD: 499 early-stage manifest HD patients, pridopidine 45 mg BID vs placebo, 65 weeks. TFC difference -0.18 (P=0.26); cUHDRS difference -0.11 (P=0.45). Pre-specified subgroup without antidopaminergics showed consistent pattern favoring pridopidine. Fourth failed HD trial for this compound.",
    sourceId: "reilmann-2025-nat-med",
  },

  // ── Serotonin modulators ──────────────────────────────────────────
  {
    id: 110, name: "Pimavanserin", company: "Acadia", category: "serotonin", disease: "PD", phase: "approved", outcome: "approved",
    note: "5-HT2A inverse agonist; first approved PD psychosis drug",
    detail: "Pivotal Phase 3: 185 PD psychosis patients, pimavanserin 40 mg/day vs placebo, 6 weeks. SAPS-PD improvement -5.79 (pimavanserin) vs -2.73 (placebo), P=0.001. First drug approved specifically for PD psychosis (2016). No worsening of motor function, unlike typical antipsychotics.",
    sourceId: "cummings-2014-lancet",
  },

  // ── Anti-inflammatory (additions) ─────────────────────────────────
  {
    id: 111, name: "Ibudilast", company: "MediciNova", category: "anti-inflammatory", disease: "MS", phase: "2", outcome: "signal",
    note: "SPRINT-MS: 48% less brain atrophy in progressive MS",
    detail: "SPRINT-MS: 255 primary or secondary progressive MS patients, ibudilast \u2264100 mg/day vs placebo, 96 weeks. Brain atrophy rate 48% slower with ibudilast (P=0.04). PDE/MIF inhibitor crossing BBB. Higher rates of GI side effects, headache, depression. Phase 3 NN6401 trial ongoing.",
    sourceId: "fox-2018-nejm",
  },
  {
    id: 112, name: "Verdiperstat", company: "Biohaven", category: "anti-inflammatory", disease: "MSA", phase: "3", outcome: "failed",
    note: "M-STAR: MPO inhibitor failed in MSA Phase 3",
    detail: "M-STAR Phase 3: MPO (myeloperoxidase) inhibitor in multiple system atrophy. Failed to meet primary and key secondary endpoints. Suppresses microglial activation and improved motor function in transgenic MSA mice, but no clinical benefit in humans. Also tested in HEALEY ALS platform trial (negative).",
    sourceId: "verdiperstat-2024-mstar",
  },

  // ── Stem cell therapy ─────────────────────────────────────────────
  {
    id: 113, name: "NurOwn (MSC-NTF)", company: "BrainStorm Cell", category: "stem-cell", disease: "ALS", phase: "3", outcome: "failed",
    note: "Phase 3: stem cell therapy missed primary endpoint in ALS",
    detail: "Phase 3: 189 ALS patients, intrathecal MSC-NTF cells (autologous mesenchymal stem cells secreting neurotrophic factors) vs placebo. 33% MSC-NTF vs 28% placebo met response criteria (OR=1.33, P=0.45). Pre-specified subgroup with baseline ALSFRS-R \u226535 showed 35% vs 16% response. Biomarkers suggested target engagement.",
    sourceId: "cudkowicz-2022-muscle-nerve",
  },

  // ── Sigma-1 receptor (AD) ─────────────────────────────────────────
  {
    id: 114, name: "Blarcamesine", company: "Anavex Life Sciences", category: "sigma", disease: "AD", phase: "2/3", outcome: "signal",
    note: "ANAVEX2-73: 36% slowing of cognitive decline at 48 weeks; EMA filing accepted",
    detail: "ANAVEX2-73-AD-004: 508 early AD patients across 52 centers, blarcamesine 30/50 mg vs placebo, 48 weeks. ADAS-Cog13 slowed 36.3% (P<0.05). CDR-SB secondary significantly improved. Plasma A\u03B242/40 ratio increased; brain volume loss reduced. No ARIA. 4-year OLE (ATTENTION-AD) showed continued benefit. EMA filing accepted for EU review.",
    sourceId: "macfarlane-2025-j-prev-alzheimers-dis",
  },

  // ── mTOR / autophagy ──────────────────────────────────────────────
  {
    id: 115, name: "Rapamycin", company: "IRCCS Modena", category: "mtor", disease: "ALS", phase: "2", outcome: "failed",
    note: "RANsOM: safe but failed to expand regulatory T cells in ALS",
    detail: "RANsOM: 63 ALS patients randomized 1:1:1 to rapamycin 2 mg/m\u00B2/day, 1 mg/m\u00B2/day, or placebo. Primary endpoint (>30% Treg increase) not attained. Reduced IL-18 mRNA and plasma protein (anti-inflammatory signal). Safe and well tolerated. mTOR inhibitor targeting neuroinflammation via Treg expansion and autophagy.",
    sourceId: "mandrioli-2023-nat-commun",
  },

  // ── Catalytic nanomedicine ────────────────────────────────────────
  {
    id: 116, name: "CNM-Au8", company: "Clene Nanomedicine", category: "catalytic-nano", disease: "ALS", phase: "2", outcome: "mixed",
    note: "RESCUE-ALS: missed primary but 60% mortality reduction in exploratory analysis",
    detail: "RESCUE-ALS: 45 ALS patients, CNM-Au8 30 mg daily vs placebo, 36 weeks. Primary (MUNIX) and secondary (FVC) endpoints not met. Exploratory: 60% reduction in all-cause mortality; significant responder analysis (ALSFRS-R). Gold nanocrystal catalyst boosting cellular NAD+ and reducing oxidative stress. FDA rejected accelerated approval; Phase 3 ongoing.",
    sourceId: "vucic-2023-eclinmedicine",
  },

  // ══════════════════════════════════════════════════════════════════
  // EXPANDED AD DRUG LANDSCAPE (from stress-test spreadsheet)
  // ══════════════════════════════════════════════════════════════════

  // ── Additional BACE inhibitors (early discontinued) ─────────────
  {
    id: 118, name: "BI 1181181", company: "Boehringer Ingelheim", category: "bace", disease: "AD", phase: "1", outcome: "halted",
    note: "Discontinued in early development",
    detail: "BACE inhibitor discontinued in early clinical development. Part of the wave of BACE programs abandoned after class-wide safety signals (cognitive worsening, skin/hair changes) emerged from larger trials of competitors.",
  },
  {
    id: 119, name: "RG7129", company: "Roche", category: "bace", disease: "AD", phase: "1", outcome: "halted",
    note: "Discontinued in early development",
    detail: "BACE inhibitor discontinued by Roche in early clinical development. Roche pivoted to other approaches after BACE class failures.",
  },
  {
    id: 120, name: "LY2811376", company: "Eli Lilly", category: "bace", disease: "AD", phase: "1", outcome: "halted",
    note: "First oral BACE inhibitor in humans; halted for retinal toxicity",
    detail: "First oral BACE1 inhibitor to demonstrate CNS A\u03B2 reduction in humans. Phase 1 showed dose-dependent A\u03B240 reduction in CSF. Discontinued after preclinical retinal epithelium pathology was discovered in long-term animal studies.",
  },
  {
    id: 121, name: "LY2886721", company: "Eli Lilly", category: "bace", disease: "AD", phase: "1", outcome: "halted",
    note: "Halted for liver toxicity in Phase 2",
    detail: "Phase 1 showed robust CSF A\u03B2 reduction. Phase 2 halted in June 2013 after liver enzyme elevations detected in several participants. Lilly subsequently developed LY3202626 as successor.",
  },
  {
    id: 122, name: "LY3202626", company: "Eli Lilly", category: "bace", disease: "AD", phase: "2", outcome: "halted",
    note: "Discontinued after class-wide BACE failures",
    detail: "Third-generation Lilly BACE inhibitor. Phase 2 discontinued in 2018 after verubecestat and atabecestat failures established cognitive worsening as a BACE class effect. Lilly concluded the BACE target was unlikely to succeed.",
  },
  {
    id: 123, name: "AZD-3839", company: "AstraZeneca", category: "bace", disease: "AD", phase: "1", outcome: "halted",
    note: "Discontinued in early development",
    detail: "BACE inhibitor with selectivity over BACE2 (17-fold). Discontinued in Phase 1. AstraZeneca later partnered with Lilly on lanabecestat, which also failed.",
  },
  {
    id: 124, name: "CTS-21166", company: "CoMentis", category: "bace", disease: "AD", phase: "1", outcome: "halted",
    note: "First BACE inhibitor in clinical trials; discontinued",
    detail: "First BACE inhibitor to enter human trials (Phase 1, 2008). Demonstrated dose-dependent plasma A\u03B2 reduction. Development did not progress beyond early clinical stage.",
  },

  // ── Additional \u03B3-secretase inhibitors/modulators ─────────────────
  {
    id: 125, name: "Begacestat", company: "Bristol-Myers Squibb", category: "gamma-secretase", disease: "AD", phase: "1", outcome: "halted",
    note: "Notch-sparing \u03B3-secretase inhibitor; discontinued",
    detail: "Designed as Notch-sparing \u03B3-secretase inhibitor (GSI-953) to avoid semagacestat-type toxicity. Phase 1 showed A\u03B2 lowering but development discontinued.",
  },
  {
    id: 126, name: "Flurizan", company: "Myriad Genetics", category: "gamma-secretase", disease: "AD", phase: "3", outcome: "failed",
    note: "Phase 3: 1,684 patients; no benefit on cognition or function",
    detail: "Phase 3: 1,684 mild AD patients, tarenflurbil 800 mg BID vs placebo, 18 months. No significant differences on co-primary endpoints (ADAS-Cog, ADCS-ADL). R-enantiomer of flurbiprofen repurposed as \u03B3-secretase modulator. Weak CNS penetration likely contributed to failure.",
  },
  {
    id: 127, name: "EVP-0962", company: "EnVivo/Forum", category: "gamma-secretase", disease: "AD", phase: "1", outcome: "halted",
    note: "\u03B3-secretase modulator; discontinued in Phase 1",
    detail: "Notch-sparing \u03B3-secretase modulator. Discontinued in early clinical development.",
  },
  {
    id: 128, name: "E2012", company: "Eisai", category: "gamma-secretase", disease: "AD", phase: "1", outcome: "halted",
    note: "\u03B3-secretase modulator; halted for lenticular opacity",
    detail: "Second-generation \u03B3-secretase modulator. Phase 1 discontinued after preclinical findings of lenticular opacities (cataracts) in animals. Eisai later developed BAN2401 (lecanemab) instead.",
  },

  // ── Additional anti-A\u03B2 antibodies ──────────────────────────────────
  {
    id: 129, name: "AAB-003", company: "Janssen/Pfizer", category: "anti-amyloid", disease: "AD", phase: "1", outcome: "halted",
    note: "Re-engineered bapineuzumab; Fc modified to reduce ARIA",
    detail: "Fc-engineered variant of bapineuzumab designed to reduce ARIA-E risk by lowering effector function. Phase 1 completed but development not advanced after bapineuzumab program failure.",
  },
  {
    id: 130, name: "GSK933776", company: "GlaxoSmithKline", category: "anti-amyloid", disease: "AD", phase: "1", outcome: "halted",
    note: "Anti-A\u03B2 antibody; discontinued after Phase 1",
    detail: "Anti-A\u03B2 N-terminal monoclonal antibody with Fc modifications to reduce effector function. Phase 1 showed peripheral A\u03B2 reduction but no clear CNS effect. Development discontinued.",
  },
  {
    id: 131, name: "Ponezumab", company: "Pfizer", category: "anti-amyloid", disease: "AD", phase: "2", outcome: "failed",
    note: "Anti-A\u03B2 antibody targeting C-terminus; no amyloid reduction",
    detail: "Anti-A\u03B2 monoclonal antibody targeting A\u03B240 C-terminus (peripheral sink hypothesis). Phase 2 in cerebral amyloid angiopathy and AD showed no significant amyloid reduction or clinical benefit.",
  },

  // ── Active A\u03B2 immunotherapy ────────────────────────────────────────
  {
    id: 132, name: "CAD106", company: "Novartis", category: "anti-amyloid", disease: "AD", phase: "2/3", outcome: "halted",
    note: "A\u03B2 vaccine; Generation Study discontinued",
    detail: "Second-generation active A\u03B2 immunotherapy (A\u03B21-6 peptide on virus-like particle). Avoided the T-cell-mediated meningoencephalitis of AN1792 by targeting B-cell epitope only. Generation Study (prevention trial with CNP520) discontinued due to CNP520 arm worsening; CAD106 arm not independently evaluated.",
  },
  {
    id: 133, name: "ACC-001", company: "Janssen/Pfizer", category: "anti-amyloid", disease: "AD", phase: "2", outcome: "halted",
    note: "A\u03B2 vaccine conjugate; development discontinued",
    detail: "Active immunotherapy: A\u03B21-7 peptide conjugated to CRM197 carrier protein (vanutide cridificar). Multiple Phase 2 trials showed antibody generation but no clear clinical benefit. Development discontinued.",
  },
  {
    id: 134, name: "Affitope AD02", company: "AFFiRiS", category: "anti-amyloid", disease: "AD", phase: "2", outcome: "failed",
    note: "Peptide mimotope vaccine; no efficacy signal",
    detail: "Synthetic peptide mimicking A\u03B2 N-terminus. Phase 2 showed antibody response but no clinical benefit on ADAS-Cog or CDR-SB. Mimotope approach designed to avoid autoimmune reactions of full-length A\u03B2 vaccines.",
  },
  {
    id: 135, name: "Bexarotene", company: "Various", category: "anti-amyloid", disease: "AD", phase: "2", outcome: "failed",
    note: "RXR agonist; no reproducible A\u03B2 clearance in humans",
    detail: "Retinoid X receptor agonist approved for T-cell lymphoma. Cramer 2012 (Science) reported rapid amyloid clearance in mice. Small open-label studies showed no reproducible amyloid reduction in humans. Raises triglycerides substantially.",
  },

  // ── Additional anti-tau ──────────────────────────────────────────
  {
    id: 136, name: "BIIB076", company: "Biogen", category: "anti-tau", disease: "AD", phase: "1", outcome: "halted",
    note: "Anti-tau monoclonal antibody; discontinued",
    detail: "Monoclonal antibody targeting monomeric and fibrillar tau. Phase 1 completed. Biogen discontinued development to focus on BIIB080 (tau ASO) and other pipeline priorities.",
  },
  {
    id: 137, name: "Epothilone D", company: "Bristol-Myers Squibb", category: "anti-tau", disease: "AD", phase: "1", outcome: "halted",
    note: "Microtubule stabilizer; discontinued for tolerability",
    detail: "Brain-penetrant microtubule stabilizer (BMS-241027) repurposed from oncology. Rationale: compensate for tau-mediated microtubule destabilization. Phase 1 discontinued due to tolerability concerns.",
  },
  {
    id: 138, name: "TPI-287", company: "Cortice Biosciences", category: "anti-tau", disease: "AD", phase: "1", outcome: "halted",
    note: "Taxane-derived microtubule stabilizer; discontinued",
    detail: "Synthetic taxane designed to cross BBB. Phase 1 in AD and PSP/CBS. Hypersensitivity reactions and falls observed. No clear efficacy signal; development discontinued.",
  },
  {
    id: 139, name: "Davunetide", company: "Allon Therapeutics", category: "anti-tau", disease: "PSP", phase: "2/3", outcome: "failed",
    note: "Neuroprotective peptide; Phase 2/3 negative in PSP",
    detail: "Activity-dependent neuroprotective protein (ADNP)-derived peptide (NAP/AL-108). Phase 2/3 in progressive supranuclear palsy (328 patients, 52 weeks): no benefit on any endpoint. Also negative in MCI. Intranasal formulation.",
  },
  {
    id: 140, name: "Rember", company: "TauRx", category: "anti-tau", disease: "AD", phase: "2", outcome: "failed",
    note: "Methylene blue; Phase 2 mixed, replaced by LMTM (also failed)",
    detail: "Methylene blue (methylthioninium chloride) as tau aggregation inhibitor. Phase 2 showed mixed results: 81% cognitive decline reduction claimed at 24 weeks, but dosing inconsistencies and high dropout. Replaced by LMTM (leuco-methylthioninium), which also failed Phase 3.",
  },

  // ── A\u03B2 aggregation inhibitors ───────────────────────────────────────
  {
    id: 141, name: "Tramiprosate", company: "Neurochem/Bellus", category: "anti-amyloid", disease: "AD", phase: "3", outcome: "failed",
    note: "A\u03B2 aggregation inhibitor; Phase 3 negative in 1,052 patients",
    detail: "Phase 3 (Alphase): 1,052 mild-to-moderate AD patients, tramiprosate 100/150 mg BID vs placebo, 78 weeks. No effect on ADAS-Cog or CDR-SB. Glycosaminoglycan mimetic blocking A\u03B242 aggregation. Later reformulated as ALZ-801 (prodrug) for APOE4 homozygotes.",
  },
  {
    id: 142, name: "Scyllo-inositol", company: "Elan/Transition", category: "anti-amyloid", disease: "AD", phase: "2", outcome: "halted",
    note: "ELND005; higher doses halted for safety (9 deaths)",
    detail: "Phase 2: 353 mild-to-moderate AD patients. 250 mg showed trends but higher doses (1000/2000 mg) halted for serious infections (9 deaths). Stereoisomer of myo-inositol stabilizing non-toxic A\u03B2 conformations.",
  },

  // ── Metal-protein attenuating compounds ─────────────────────────
  {
    id: 143, name: "PBT2", company: "Prana Biotechnology", category: "iron-chelator", disease: "AD", phase: "2", outcome: "failed",
    note: "Metal-protein attenuating compound; no cognitive benefit",
    detail: "Phase 2 (EURO): 78 early AD patients, PBT2 250 mg vs placebo, 12 months. No effect on NTB composite. Reduced CSF A\u03B242 (p=0.006). 8-hydroxyquinoline derivative redistributing zinc and copper from A\u03B2 aggregates. Successor to clioquinol.",
  },
  {
    id: 144, name: "Clioquinol", company: "Prana Biotechnology", category: "iron-chelator", disease: "AD", phase: "2", outcome: "halted",
    note: "Metal chelator (PBT1); manufacturing contamination halted development",
    detail: "8-hydroxyquinoline metal chelator (PBT1). Small Phase 2 (36 patients) suggested slowed cognitive decline. Halted due to manufacturing contamination. Previously withdrawn globally in 1970s for SMON (subacute myelo-optic neuropathy) in Japan.",
  },

  // ── RAGE antagonist ─────────────────────────────────────────────
  {
    id: 145, name: "Azeliragon", company: "vTv Therapeutics", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "RAGE antagonist; Phase 3 failed in mild AD",
    detail: "RAGE (receptor for advanced glycation endproducts) antagonist. Failed primary (ADAS-Cog14) and secondary endpoints. RAGE mediates A\u03B2 transport across BBB and inflammatory signaling. First-in-class oral small molecule. Multiple failed trials over 15+ years.",
  },

  // ── Additional cholinesterase inhibitors ─────────────────────────
  {
    id: 146, name: "Tacrine", company: "Parke-Davis", category: "cholinesterase", disease: "AD", phase: "approved", outcome: "approved",
    note: "First approved AD drug (1993); withdrawn for hepatotoxicity",
    detail: "First FDA-approved AD treatment (1993). Reversible AChE inhibitor requiring four-times-daily dosing. Hepatotoxicity (elevated ALT) in ~50% of patients. Voluntarily withdrawn from market in 2013. Replaced by donepezil, rivastigmine, galantamine.",
  },
  {
    id: 147, name: "Metrifonate", company: "Bayer", category: "cholinesterase", disease: "AD", phase: "3", outcome: "halted",
    note: "Irreversible AChE inhibitor; halted for respiratory paralysis risk",
    detail: "Organophosphate prodrug producing dichlorvos (irreversible AChE inhibitor). Three Phase 3 trials showed cognitive benefit comparable to donepezil. Halted in 1998 for neuromuscular toxicity including respiratory muscle weakness. Originally an anthelmintic.",
  },
  {
    id: 148, name: "Phenserine", company: "Axonyx/QR Pharma", category: "cholinesterase", disease: "AD", phase: "3", outcome: "failed",
    note: "Dual AChE / APP translation inhibitor; Phase 3 negative",
    detail: "Dual mechanism: AChE inhibition + reduction of APP translation (lowering A\u03B2 production). Phase 3 failed to show benefit. Posiphen (its enantiomer) continued development as a pure APP-lowering agent.",
  },
  {
    id: 149, name: "Huperzine A", company: "Various", category: "cholinesterase", disease: "AD", phase: "2", outcome: "failed",
    note: "Natural AChE inhibitor; NIA Phase 2 negative",
    detail: "Alkaloid from Chinese club moss. NIA Phase 2: 210 mild-to-moderate AD patients, huperzine A 200/400 \u03BCg BID, 16 weeks. No effect on ADAS-Cog. Widely used as supplement in China. Potent, reversible AChE inhibitor with additional NMDA antagonist properties.",
  },

  // ── 5-HT6 antagonists ──────────────────────────────────────────
  {
    id: 150, name: "Idalopirdine", company: "Lundbeck", category: "serotonin", disease: "AD", phase: "3", outcome: "failed",
    note: "5-HT6 antagonist; three Phase 3 trials all negative",
    detail: "STARSHINE/STARBEAM/STAR: three Phase 3 trials (>2,500 total patients) as add-on to donepezil in mild-to-moderate AD, 24 weeks. All negative on ADAS-Cog. 5-HT6 antagonism hypothesized to enhance cholinergic/glutamatergic transmission.",
  },
  {
    id: 151, name: "Intepirdine", company: "Axovant", category: "serotonin", disease: "AD", phase: "3", outcome: "failed",
    note: "5-HT6 antagonist; MINDSET Phase 3 negative",
    detail: "MINDSET Phase 3: 1,315 mild-to-moderate AD patients, intepirdine 35 mg vs placebo as donepezil add-on, 24 weeks. No benefit on ADAS-Cog (p=0.22) or ADCS-ADL (p=0.73). Stock dropped 70% on results.",
  },

  // ── Brexpiprazole (AD agitation) ─────────────────────────────────
  {
    id: 152, name: "Brexpiprazole", company: "Otsuka/Lundbeck", category: "serotonin", disease: "AD", phase: "approved", outcome: "approved",
    note: "First drug approved for AD agitation (2023); symptom management only",
    detail: "Phase 3: two pivotal trials in AD-related agitation. 5-HT2A/D2 partial agonist. CMAI improvement significant vs placebo. FDA approved May 2023. Does not modify disease course. Atypical antipsychotic class.",
  },

  // ── AVP-786 ──────────────────────────────────────────────────────
  {
    id: 153, name: "AVP-786", company: "Avanir/Otsuka", category: "nmda", disease: "AD", phase: "3", outcome: "failed",
    note: "Deuterated dextromethorphan; Phase 3 negative for AD agitation",
    detail: "Deuterated dextromethorphan/quinidine combination. Phase 3 for agitation in AD dementia: did not meet primary CMAI endpoint. NMDA antagonist/sigma-1 agonist. Failed where brexpiprazole succeeded.",
  },

  // ── Fosgonimeton ─────────────────────────────────────────────────
  {
    id: 154, name: "Fosgonimeton", company: "Athira Pharma", category: "growth-factor", disease: "AD", phase: "2/3", outcome: "failed",
    note: "HGF/MET pathway modulator; ACT-AD Phase 2/3 negative",
    detail: "HGF/MET receptor pathway enhancer (ATH-1017). ACT-AD Phase 2/3 in mild-to-moderate AD: failed primary (EEG P300 latency) and secondary (ADAS-Cog) endpoints. Development discontinued 2024.",
  },

  // ── IVIG ──────────────────────────────────────────────────────────
  {
    id: 155, name: "IVIG", company: "Baxter/Grifols", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "Gammagard: Phase 3 negative in 390 AD patients",
    detail: "GAP Study Phase 3: 390 mild-to-moderate AD patients, IV immunoglobulin 200/400 mg/kg every 2 weeks vs placebo, 18 months. No benefit on ADAS-Cog or ADCS-ADL. Hypothesis: natural anti-A\u03B2 antibodies in pooled IgG would clear amyloid.",
  },

  // ── Additional calcium channel blockers ──────────────────────────
  {
    id: 156, name: "Nilvadipine", company: "Archer Pharmaceuticals", category: "calcium", disease: "AD", phase: "3", outcome: "failed",
    note: "NILVAD Phase 3: 511 patients; no benefit in AD",
    detail: "NILVAD Phase 3: 511 mild-to-moderate AD patients across Europe, nilvadipine 8 mg vs placebo, 78 weeks. No benefit on ADAS-Cog or CDR-SB. Dihydropyridine CCB with preclinical evidence of A\u03B2 clearance enhancement.",
  },

  // ── Additional anti-inflammatory ────────────────────────────────
  {
    id: 157, name: "Rofecoxib", company: "Merck", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "COX-2 inhibitor; no AD benefit; withdrawn for cardiovascular risk",
    detail: "Phase 3 prevention: no benefit in AD prevention. Voluntarily withdrawn globally in September 2004 after APPROVE trial showed doubled cardiovascular risk. Ended the broader NSAID-for-AD hypothesis alongside ADAPT trial failures.",
  },
  {
    id: 158, name: "Etanercept", company: "Amgen/Pfizer", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "failed",
    note: "Anti-TNF biologic; perispinal injection claims not replicated",
    detail: "TNF receptor fusion protein approved for rheumatoid arthritis. Perispinal injection claims of rapid cognitive improvement from small open-label reports. No placebo-controlled trial confirmed efficacy. Large biologic that does not cross BBB.",
  },
  {
    id: 159, name: "XPro1595", company: "INmune Bio", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "failed",
    note: "Selective TNF inhibitor; Phase 2 negative",
    detail: "Dominant-negative TNF (pegipanermin) selectively neutralizing soluble TNF while sparing transmembrane TNF and TNFR2 signaling. Phase 2 in mild AD with neuroinflammation biomarkers: did not meet primary endpoint.",
  },
  {
    id: 160, name: "Rosiglitazone", company: "GlaxoSmithKline", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "PPAR\u03B3 agonist; REFLECT Phase 3 negative; cardiovascular concerns",
    detail: "REFLECT Phase 3: 693 mild-to-moderate AD patients, rosiglitazone XR vs placebo, 48 weeks. No effect on ADAS-Cog or CIBIC+. Separately linked to cardiovascular risk. Same PPAR\u03B3 target as pioglitazone (also failed).",
  },
  {
    id: 161, name: "Divalproex sodium", company: "Abbott/Generic", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "Valproate; ADCS trial: no benefit, greater brain volume loss",
    detail: "ADCS Phase 3: 313 moderate AD patients, divalproex sodium 10\u201312 mg/kg/day vs placebo, 24 months. No benefit on neuropsychiatric symptoms or cognition. Greater brain volume loss in treatment group. HDAC inhibitor and GSK-3 properties.",
  },
  {
    id: 162, name: "Doxycycline + rifampin", company: "McMaster University", category: "anti-inflammatory", disease: "AD", phase: "3", outcome: "failed",
    note: "DARAD: antibiotic combo Phase 3 negative in 406 patients",
    detail: "DARAD Phase 3: 406 mild-to-moderate AD patients, doxycycline 200 mg + rifampin 300 mg daily vs placebo, 12 months. No benefit on ADAS-Cog. Hypothesis: antibiotics reduce neuroinflammation and A\u03B2 aggregation. Earlier small trial (Loeb 2004) had shown benefit.",
  },
  {
    id: 163, name: "Rilapladib", company: "GlaxoSmithKline", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "failed",
    note: "Lp-PLA2 inhibitor; Phase 2 negative",
    detail: "Lipoprotein-associated phospholipase A2 (Lp-PLA2) inhibitor. No cognitive benefit vs placebo. Lp-PLA2 involved in vascular inflammation and oxidized lipid metabolism. Also tested as darapladib in cardiovascular disease without success.",
  },
  {
    id: 164, name: "Prednisone", company: "NIH", category: "anti-inflammatory", disease: "AD", phase: "2", outcome: "failed",
    note: "Corticosteroid; no benefit, behavioral side effects",
    detail: "Controlled trial in AD patients, 1 year. No cognitive benefit and worsening behavioral symptoms. Systemic corticosteroids caused more harm than benefit. Chronic immunosuppression risks outweighed theoretical gains.",
  },

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
  { id: "FTD", label: "FTD", shortLabel: "FTD" },
  { id: "MS", label: "Multiple Sclerosis", shortLabel: "MS" },
  { id: "DLB", label: "Dementia w/ Lewy Bodies", shortLabel: "DLB" },
  { id: "FRDA", label: "Friedreich\u2019s Ataxia", shortLabel: "FRDA" },
  { id: "multi", label: "Multi-disease", shortLabel: "Multi" },
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
  29: "small",     // ATH434 — small molecule chaperone (in iron-redist cat)
  66: "peptide",   // Rusfertide — hepcidin peptide mimic (in iron-redist cat)
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
  "iron-chelator": "small",
  "iron-redist": "protein",
  "glp1": "peptide",
  "anti-inflammatory": "small",
  "antiviral": "small",
  "antioxidant": "small",
  "gamma-secretase": "small",
  "cholinesterase": "small",
  "nmda": "small",
  "ms-dmt": "small",
  "nad": "small",
  "mitochondrial": "small",
  "gene-therapy": "aso",
  "dopamine": "small",
  "progranulin": "antibody",
  "c9orf72": "aso",
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
  26: 139, 27: 139, 28: 139, 30: 560,
  // Iron redistribution
  29: 290, 62: 80000, 63: 132000, 64: 80000, 65: 480000, 66: 2789,
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
  // Gamma-secretase inhibitors
  67: 360, 68: 361,
  // Cholinesterase inhibitors
  69: 379, 70: 250, 72: 287,
  // NMDA antagonists
  71: 179,
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
    case "aso":      return "Antisense oligonucleotide";
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
