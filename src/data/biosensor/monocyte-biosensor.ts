/**
 * Data for the Monocyte Iron Biosensor proposal page.
 *
 * Distilled from monocyte_iron_biosensor_tracker_v1.md — a proposal for
 * cheap, early AD detection by measuring how monocytes handle iron.
 */

// ---------------------------------------------------------------------------
// Hypothesis summary
// ---------------------------------------------------------------------------

export const hypothesis = {
  headline: "A blood test for Alzheimer\u2019s risk, years before symptoms",
  subhead:
    "If iron dysregulation drives neurodegeneration, monocytes should show it first.",
  core: "Peripheral blood monocytes share iron-handling machinery with brain microglia. Measuring how monocytes store, process, and export iron could detect the systemic iron mishandling that precedes brain pathology by years or decades.",
  keyInsight:
    "Every major AD risk factor converges on monocyte iron. Not as a coincidence, but because monocytes are the immune system\u2019s front-line iron handlers.",
  cost: "~$15\u201325/test (consumables)",
  comparison: "vs. $5,000\u2013$8,000 for amyloid PET",
};

// ---------------------------------------------------------------------------
// Convergence: AD risk factors that share monocyte iron
// ---------------------------------------------------------------------------

export interface ConvergenceFactor {
  factor: string;
  adRisk: string;
  ironLink: string;
}

export const convergenceFactors: ConvergenceFactor[] = [
  {
    factor: "Anemia",
    adRisk: "2\u00D7 dementia risk (Hong 2013, n=2,552)",
    ironLink:
      "Iron deficiency anemia forces compensatory changes in monocyte iron handling. Chronic anemia dysregulates hepcidin, altering iron distribution across all myeloid cells.",
  },
  {
    factor: "Chronic infections",
    adRisk:
      "HSV, H. pylori, periodontitis, T. gondii all increase AD risk. Antiherpetics reduce risk 90% (Tzeng 2018)",
    ironLink:
      "Pathogens hijack monocyte iron for replication. The immune response traps iron inside monocytes via hepcidin upregulation. Repeated infections create cycles of iron loading.",
  },
  {
    factor: "Autoimmune disease",
    adRisk: "1.4\u00D7 AD risk (Ramey 2025, n=459,000)",
    ironLink:
      "Chronic inflammation drives hepcidin-mediated iron sequestration in monocytes. Anemia of chronic disease is fundamentally a monocyte iron redistribution disorder.",
  },
  {
    factor: "Liver disease",
    adRisk:
      "Altered liver enzymes associated with AD biomarkers (Nho 2019, ADNI)",
    ironLink:
      "The liver produces systemic hepcidin, the master regulator of iron distribution. Liver dysfunction directly impairs iron homeostasis across all tissues.",
  },
  {
    factor: "APOE4 genotype",
    adRisk: "3\u201312\u00D7 AD risk",
    ironLink:
      "APOE4 is associated with higher brain iron on QSM MRI and inhibits ferroptosis less effectively than APOE3 (Belaidi 2022). APOE4 monocytes may handle iron differently.",
  },
  {
    factor: "Female sex (post-menopause)",
    adRisk: "~2/3 of AD patients are women",
    ironLink:
      "Menstruation exports ~1 mg/day of iron. Post-menopause, this export stops. Iron accumulates. Rahman 2025 showed sex-specific microglial ferritin patterns in AD brain.",
  },
];

// ---------------------------------------------------------------------------
// Key evidence studies
// ---------------------------------------------------------------------------

export interface EvidenceStudy {
  id: string;
  authors: string;
  year: number;
  title: string;
  finding: string;
  significance: string;
}

export const keyEvidence: EvidenceStudy[] = [
  {
    id: "zhou-2025",
    authors: "Zhou et al.",
    year: 2025,
    title: "SLC11A1 in AD brain and peripheral monocytes",
    finding:
      "SLC11A1 (NRAMP1, the monocyte iron transporter) is upregulated in both AD brain tissue AND peripheral blood monocytes. Single-cell RNA-seq confirms monocyte-specific expression.",
    significance:
      "Direct evidence that AD involves monocyte iron gene dysregulation detectable in peripheral blood. The same gene is altered in brain and blood.",
  },
  {
    id: "bolen-2025",
    authors: "Bolen et al.",
    year: 2025,
    title: "PBMC transcriptome in PD and IBD",
    finding:
      "PBMCs from PD patients show iron-related transcript enrichment overlapping with IBD patients. Bioenergetic analysis reveals shared mitochondrial dysfunction.",
    significance:
      "Extends monocyte iron dysregulation beyond AD to PD. Suggests a common myeloid iron signature across neuroinflammatory diseases.",
  },
  {
    id: "andersen-2014",
    authors: "Andersen et al.",
    year: 2014,
    title: "Iron deposits in the chronically inflamed CNS",
    finding:
      "Iron-laden monocytes cross the BBB, differentiate into macrophages, die, and release their iron cargo into brain parenchyma. This is a direct delivery mechanism.",
    significance:
      "The monocyte iron load isn\u2019t just a biomarker. It\u2019s the actual vehicle delivering iron to the brain.",
  },
  {
    id: "risko-2017",
    authors: "Risko et al.",
    year: 2017,
    title: "Monocyte labile iron pool in cardiovascular disease",
    finding:
      "Monocyte labile iron pool (LIP) correlates with atherosclerotic disease activity. Established a practical protocol for measuring monocyte LIP from clinical blood draws.",
    significance:
      "Proof of concept: monocyte iron can be measured clinically and predicts disease. The protocol can be adapted for neurodegeneration cohorts.",
  },
  {
    id: "hanson-2024",
    authors: "Hanson, Smith et al.",
    year: 2024,
    title: "Iron dysregulation in Long COVID",
    finding:
      "Peripheral monocyte iron loading signatures predict Long COVID neurological outcomes. Iron dysregulation persists months after infection.",
    significance:
      "Monocyte iron predicts neurological outcomes in an inflammatory condition. Long COVID may be an accelerated model of FELINE layer failure.",
  },
  {
    id: "mertens-2025",
    authors: "Mertens et al.",
    year: 2025,
    title: "Monocyte iron in sepsis",
    finding:
      "Monocyte iron accumulation is detectable from day 1 of sepsis. Correlates with immune suppression (HLA-DR loss) and impairs mitochondrial metabolism. Measured by atomic absorption spectroscopy on isolated CD14+ cells.",
    significance:
      "The most direct quantification of monocyte iron to date. Shows the acute-to-chronic continuum: the same iron loading seen in sepsis may persist into Long COVID.",
  },
  {
    id: "gustavsson-2024",
    authors: "Gustavsson et al.",
    year: 2024,
    title: "Peripheral blood iron and brain iron correlation",
    finding:
      "A composite of peripheral blood iron markers positively correlates with basal ganglia iron measured by QSM MRI, especially in younger adults and APOE4 carriers.",
    significance:
      "Peripheral iron status reflects brain iron. The correlation is strongest in the exact population most relevant for early detection.",
  },
];

// ---------------------------------------------------------------------------
// Assay strategies (top 3 most practical)
// ---------------------------------------------------------------------------

export interface AssayStrategy {
  id: string;
  label: string;
  name: string;
  principle: string;
  advantage: string;
  limitation: string;
  readiness: string;
}

export const topStrategies: AssayStrategy[] = [
  {
    id: "C",
    label: "Strategy C",
    name: "FerroOrange (labile Fe\u00B2\u207A probe)",
    principle:
      "Small-molecule fluorescent probe (RhoNox-4) that lights up in the presence of labile ferrous iron. Apply to isolated monocytes, read on flow cytometer or plate reader.",
    advantage:
      "Off-the-shelf reagent (Dojindo F374). Already validated for high-throughput screening (3,399 compounds). Detected hepcidin-induced iron changes. ~$1/sample for probe alone.",
    limitation:
      "Requires live cells (fresh blood, not frozen). Measures snapshot of labile iron, not functional capacity.",
    readiness: "Available now. Could start tomorrow.",
  },
  {
    id: "H",
    label: "Strategy H",
    name: "Ferritin Saturation Assay",
    principle:
      "Immunoprecipitate ferritin from monocyte lysate, strip and quantify iron. Calculate iron-per-ferritin-molecule ratio. Higher ratio = closer to iron overload.",
    advantage:
      "Works on lysate, not live cells. May work with frozen/banked PBMCs (ferritin cages are thermostable). Standard immunoprecipitation + colorimetric iron assay. Opens access to existing biobank cohorts (ADNI, Framingham, ARIC).",
    limitation:
      "Requires antibody validation. Multi-step protocol. Fresh-vs-frozen equivalence must be tested.",
    readiness: "Needs validation but uses standard lab techniques.",
  },
  {
    id: "E",
    label: "Strategy E",
    name: "Iron Tolerance Test (functional kinetics)",
    principle:
      "Challenge monocytes with a defined iron load. Measure how quickly they sequester it into ferritin, and how efficiently they export it. Rate constants reveal functional capacity, not just snapshot levels.",
    advantage:
      "Measures functional iron handling, not just iron quantity. May distinguish disease-specific signatures. Kinetic measurements are more robust to inter-individual variability (dietary iron, time of day).",
    limitation:
      "Requires live cells and 4-6 hour protocol. More complex than snapshot assays. Needs standardization.",
    readiness: "Concept stage. Requires Phase 1 development.",
  },
];

// ---------------------------------------------------------------------------
// Biomarker comparison table
// ---------------------------------------------------------------------------

export interface BiomarkerRow {
  name: string;
  type: string;
  timing: string;
  cost: string;
  accessibility: string;
  specificity: string;
}

export const biomarkerComparison: BiomarkerRow[] = [
  {
    name: "Amyloid PET",
    type: "Imaging",
    timing: "15\u201320 years before symptoms",
    cost: "$5,000\u2013$8,000",
    accessibility: "Specialized center",
    specificity: "High for A\u03B2 plaques",
  },
  {
    name: "p-tau217",
    type: "Blood protein",
    timing: "~10\u201315 years before symptoms",
    cost: "$200\u2013$500",
    accessibility: "CLIA lab (Lumipulse)",
    specificity: "High for AD tau",
  },
  {
    name: "CSF ferritin",
    type: "CSF protein",
    timing: "Predicts MCI\u2192AD conversion",
    cost: "$500\u2013$1,000 (+ lumbar puncture)",
    accessibility: "Specialist referral",
    specificity: "Moderate (iron-specific, not disease-specific)",
  },
  {
    name: "GFAP",
    type: "Blood protein",
    timing: "Early astrocyte reactivity marker",
    cost: "$200\u2013$400",
    accessibility: "CLIA lab (Simoa)",
    specificity: "Moderate (astrogliosis, not AD-specific)",
  },
  {
    name: "SMOC1",
    type: "CSF protein",
    timing: "~20\u201330 years before symptoms (DIAN data)",
    cost: "Research only",
    accessibility: "Not yet clinical",
    specificity: "High for AD (colocalizes with plaques)",
  },
  {
    name: "Monocyte iron",
    type: "Functional blood assay",
    timing: "Unknown (predicted earliest, pre-amyloid)",
    cost: "$15\u2013$25 consumables",
    accessibility: "Any lab with flow cytometry",
    specificity:
      "Broad (captures iron-driven risk from all sources). Pair with SMOC1 for AD specificity.",
  },
];

// ---------------------------------------------------------------------------
// Critical test populations
// ---------------------------------------------------------------------------

export interface CriticalTest {
  population: string;
  size: string;
  rationale: string;
  felineOverlap: string[];
  prediction: string;
}

export const criticalTests: CriticalTest[] = [
  {
    population: "Gulf War Illness veterans",
    size: "~250,000 affected, now in 50s\u201360s",
    rationale:
      "30 years of documented chronic neuroinflammation, approaching typical sporadic AD onset age. GFAP elevated ~7-fold, hippocampal volume loss, BBB disruption. Neither SMOC1 nor monocyte iron has ever been measured.",
    felineOverlap: [
      "Persistent microglial activation",
      "Lysosomal alterations",
      "Disrupted lipid metabolism",
      "BBB leak",
      "White matter damage",
    ],
    prediction:
      "Predicted to show Outcome B (abnormal monocyte iron AND abnormal SMOC1) due to 30 years of inflammation. If confirmed, GWI veterans are at high AD risk and need monitoring.",
  },
  {
    population: "Long COVID (cognitive impairment)",
    size: "Millions affected worldwide",
    rationale:
      "Processing speed and executive function deficits persisting at 42 months. SARS-CoV-2 causes iron dysregulation via hepcidin upregulation. GFAP and NfL elevated. SMOC1 never measured.",
    felineOverlap: [
      "Iron dysregulation (viral hijacking)",
      "BBB disruption and microthrombosis",
      "Persistent microglial activation",
      "Transcriptomic overlap with AD",
    ],
    prediction:
      "Predicted to show Outcome A (abnormal monocyte iron, normal SMOC1) because exposure is shorter (~5 years max). If confirmed, identifies a population at elevated future AD risk with a clear intervention window.",
  },
];

export interface PredictedOutcome {
  label: string;
  monocyteIron: string;
  smoc1: string;
  interpretation: string;
  felineStatus: string;
}

export const predictedOutcomes: PredictedOutcome[] = [
  {
    label: "A",
    monocyteIron: "Abnormal",
    smoc1: "Normal",
    interpretation:
      "Iron dysregulated but amyloid cascade not triggered. Intervention window open.",
    felineStatus: "Supported",
  },
  {
    label: "B",
    monocyteIron: "Abnormal",
    smoc1: "Abnormal",
    interpretation:
      "Neuroinflammation has triggered amyloid pathology. Urgent intervention.",
    felineStatus: "Supported (alarming)",
  },
  {
    label: "C",
    monocyteIron: "Normal",
    smoc1: "Abnormal",
    interpretation: "Amyloid pathology via non-iron mechanism.",
    felineStatus: "Challenges FELINE",
  },
  {
    label: "D",
    monocyteIron: "Normal",
    smoc1: "Normal",
    interpretation: "Cognitive impairment not on AD trajectory.",
    felineStatus: "Neutral",
  },
];

// ---------------------------------------------------------------------------
// Experimental roadmap
// ---------------------------------------------------------------------------

export interface RoadmapPhase {
  phase: string;
  title: string;
  cost: string;
  timeline: string;
  objective: string;
  keySteps: string[];
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: "1",
    title: "Assay development",
    cost: "$50K\u2013$200K",
    timeline: "6\u201312 months",
    objective:
      "Establish a monocyte iron assay with sufficient sensitivity and reproducibility.",
    keySteps: [
      "Run FerroOrange (Strategy C) and Ferritin Saturation (Strategy H) in parallel on CD14+ monocytes",
      "APOE4-stratified cohort: 4 groups \u00D7 15\u201320 subjects (young non-carriers, young APOE4 carriers, older AD, older controls)",
      "Test fresh vs. frozen monocyte equivalence for Strategy H",
      "Test whole-blood shortcut (skip monocyte isolation, gate on CD14+ during flow cytometry)",
    ],
  },
  {
    phase: "2",
    title: "Clinical validation",
    cost: "$500K\u2013$2M",
    timeline: "12\u201318 months",
    objective:
      "Validate the assay across disease stages and determine diagnostic performance.",
    keySteps: [
      "200-patient multi-site study across the AD continuum",
      "Add Long COVID and GWI cohorts for the critical test",
      "Correlate monocyte iron with p-tau217, GFAP, CSF ferritin, and brain iron MRI",
      "Develop the Iron Tolerance Test (Strategy E) for functional signatures",
    ],
  },
  {
    phase: "3",
    title: "Longitudinal tracking",
    cost: "$2M\u2013$5M",
    timeline: "18\u201324 months",
    objective:
      "Determine whether monocyte iron changes precede cognitive decline and amyloid pathology.",
    keySteps: [
      "Enroll 500+ cognitively normal participants at elevated risk (APOE4, family history)",
      "Serial measurements every 6 months for rate-of-change analysis",
      "Establish iron-handling \u201Cage\u201D vs. chronological age",
    ],
  },
  {
    phase: "4",
    title: "Population screening",
    cost: "$5M\u2013$10M",
    timeline: "3\u20135 years",
    objective:
      "Validate as a population-level screening tool and therapy selection biomarker.",
    keySteps: [
      "10,000+ participant screening study",
      "Integrate with electronic health records for automated risk alerts",
      "Use as inclusion criterion for iron-redistribution therapy trials",
      "Test with biobanked PBMCs from existing cohorts (ADNI, Framingham, ARIC)",
    ],
  },
];

// ---------------------------------------------------------------------------
// Iron \u2192 Memory connection (CPEB3 integration)
// ---------------------------------------------------------------------------

export const ironMemoryConnection = {
  headline: "Iron may directly corrupt the molecular substrate of memory",
  intro:
    "CPEB3, a prion-like protein, forms functional amyloid at synapses to make memories permanent. Its structure contains histidine residues that are vulnerable to iron interference, but iron has never been tested.",
  mechanisms: [
    {
      title: "Aberrant metal-templated aggregation",
      detail:
        "Ni\u00B2\u207A binding to the related Orb2 protein (Drosophila) produces aberrant, non-functional aggregates (Bajakian 2017). Fe\u00B2\u207A has similar coordination chemistry but has never been tested. If iron produces similar aberrant CPEB3 aggregates, new memories cannot form.",
    },
    {
      title: "Histidine oxidation",
      detail:
        "Fenton chemistry from labile Fe\u00B2\u207A generates hydroxyl radicals locally. Histidine is among the most oxidation-sensitive amino acids. Oxidized H141/H142 on the CPEB3 fibril surface would lose metal coordination capacity and potentially block chaperone interactions needed for memory encoding.",
    },
    {
      title: "Local pH disruption",
      detail:
        "Fe\u00B3\u207A is a strong Lewis acid (pKa ~2.2). Its hydrolysis releases protons. CPEB3 fibrils are labile and pH-sensitive. Local acidification at iron-overloaded synapses could shift CPEB3 toward its translationally repressive, non-aggregated state.",
    },
    {
      title: "Membrane platform destruction",
      detail:
        "CPEB3 oligomerization likely occurs at cholesterol-dependent lipid raft microdomains. Iron overload causes cholesterol dysregulation in both neurons and astrocytes (Maniscalchi 2024). Iron-induced cholesterol cacostasis would dissolve the membrane platform for functional amyloid seeding.",
    },
  ],
  implication:
    "Iron is not merely creating oxidative damage as a generic toxin. It may be specifically disrupting the molecular mechanism evolution uses to make memories permanent. This reframes iron chelation from nonspecific neuroprotection to targeted preservation of the memory encoding pathway.",
};

// ---------------------------------------------------------------------------
// Open questions & risks
// ---------------------------------------------------------------------------

export interface OpenQuestion {
  question: string;
  answer: string;
}

export const openQuestions: OpenQuestion[] = [
  {
    question: "Do monocytes mirror brain iron status?",
    answer:
      "Indirect support: shared regulatory machinery (Zhou 2025), peripheral-brain iron correlation (Gustavsson 2024), monocyte iron predicts neurological outcomes (Hanson 2024). Even if they don\u2019t mirror microglia perfectly, monocytes carry iron INTO the brain (Andersen 2014), so the peripheral measurement is functionally relevant.",
  },
  {
    question: "Is the signal early enough?",
    answer:
      "Current transcriptomic evidence comes from diagnosed patients. CSF ferritin predicts MCI\u2192AD conversion. Definitive test requires measuring monocyte iron in presymptomatic APOE4 carriers. ADNI and A4 Study have banked blood from exactly these people.",
  },
  {
    question: "Is it specific enough for AD?",
    answer:
      "High sensitivity (captures risk from multiple pathways) but potentially lower specificity (many conditions produce the signal). For screening, high sensitivity with moderate specificity is acceptable. Pair with SMOC1 or p-tau217 for disease-specific confirmation. The Iron Tolerance Test may provide disease-specific kinetic signatures.",
  },
  {
    question: "What if iron is downstream, not upstream?",
    answer:
      "Even if iron accumulation is a consequence rather than a cause, the biomarker would still correlate with disease. The causal ordering can be tested empirically: does monocyte iron abnormality precede SMOC1 elevation over time?",
  },
  {
    question: "Is the cost estimate realistic?",
    answer:
      "Consumables run $15\u2013$25/sample. The real cost driver is 4 hours of skilled technician time ($120\u2013$200/sample). The whole-blood shortcut (skip monocyte isolation, gate on CD14+ in flow cytometry) could cut hands-on time to under 1 hour and bring fully loaded cost to ~$50. Whether this works is an empirical question for Phase 1.",
  },
  {
    question: "Can frozen samples be used?",
    answer:
      "Live-cell probes (FerroOrange) require fresh blood. But the Ferritin Saturation Assay (Strategy H) works on lysate. Ferritin iron cages are thermostable and likely survive freeze-thaw. If confirmed, this opens access to thousands of banked PBMCs from existing longitudinal cohorts.",
  },
];
