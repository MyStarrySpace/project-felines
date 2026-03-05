/**
 * FELINE Clearance Model v2 — Parameters with citations
 *
 * Every parameter is tagged: measured / derived / assumed.
 * Derived parameters are computed from measured values + steady-state constraints.
 */

import type {
  ClearanceState,
  ClearanceParameters,
  CoreParameters,
  OptionalExtensions,
  ClearanceScenario,
  ParamCitation,
  ParameterMeta,
} from "./types";

// ── Parameter citations ─────────────────────────────────────────────

export const citations: Record<string, ParamCitation> = {
  // ── Measured ──────────────────────────────────────────────────────
  Km_fpn: {
    source: "measured",
    cite: "Li 2020, Blood Advances",
    pmid: "33007076",
    doi: "10.1182/bloodadvances.2020001864",
    note: "Km = 77 nM in proteoliposome reconstitution. Confirmed by Mitchell 2014 (<100 nM in oocytes).",
  },
  Fe_CSF_baseline: {
    source: "measured",
    cite: "LeVine 1998, Anal Biochem",
    pmid: "9866710",
    note: "61.01 ± 18.3 µg/L in normal CSF (n=8). Converted to µM: 61/55.845 = 1.09 µM.",
  },
  k_CSF_absorption: {
    source: "measured",
    cite: "Hladky & Barrand 2022, Physiology",
    doi: "10.1152/physiol.00019.2022",
    note: "CSF turnover ~3-4x/day. 500 mL/day production, 125-150 mL volume. k = 365 * 3.5 ≈ 1277/year.",
  },
  J_uptake: {
    source: "measured",
    cite: "Hallgren & Sourander 1958, J Neurochem",
    pmid: "13611557",
    note: "Total brain Fe ~60 mg adult; accumulation ~0.5 mg/year midlife from postmortem data. Region-dependent, nonlinear with age.",
  },
  Fe_LIP_baseline: {
    source: "measured",
    cite: "Kakhlon & Cabantchik 2002, Free Radic Biol Med",
    pmid: "12374615",
    note: "Consensus: LIP <1 µM, <5% total cellular iron. Epsztejn 1997 (PMID 9177722): 0.2-1.5 µM range. We use 0.8 µM as midpoint.",
  },
  Fe_ISF_baseline: {
    source: "measured",
    cite: "Singh 2014, BBA; Moos & Morgan 1998",
    note: "Brain ISF NTBI sub-micromolar (<1 µM). CSF iron ~1.09 µM (61 µg/L ÷ 55.845). We use 1.0 µM.",
  },
  htn_gly: {
    source: "measured",
    cite: "Mortensen 2019, J Neurosci",
    pmid: "31209176",
    note: "Young SHR: 29% lower K1 (P=0.0088). Adult SHR: 36% lower K1, 26% lower k2.",
  },
  dm_gly: {
    source: "measured",
    cite: "Jiang 2017, J Cereb Blood Flow Metab",
    pmid: "27306755",
    note: "84% reduced clearance of Gd-DTPA in hippocampus. 3-fold slowing.",
  },
  sleep_gly: {
    source: "measured",
    cite: "Xie 2013, Science",
    pmid: "24136970",
    note: "2-fold faster Aβ clearance during sleep; 60% ISF expansion. Chronic partial disruption estimated ~36%.",
  },
  hepcidin_fpn: {
    source: "measured",
    cite: "Rivera 2005, Blood; Nemeth 2004, Science",
    pmid: "16123223",
    note: "50 µg hepcidin → 80% serum iron drop in 1h. Fpn degradation at 10 nM, complete at 350 nM. 30-60% range for chronic elevation.",
  },
  apoe_onset: {
    source: "measured",
    cite: "Corder 1993, Science; Fortea 2024, Nature Medicine",
    pmid: "8346443",
    note: "e3/e4 onset -8y, e4/e4 onset -16y vs e3/e3 (Corder). Fortea: e4/e4 symptoms at 65 vs ~75 noncarriers.",
  },

  // ── Derived ──────────────────────────────────────────────────────
  k_fpn_eff: {
    source: "derived",
    note: "Set so that at steady state: J_uptake = k_fpn_eff * Fe_LIP_baseline. k_fpn_eff = J_uptake / Fe_LIP_baseline.",
  },
  k_storage: {
    source: "derived",
    note: "Set so ferritin is at half-capacity at steady state. Actual ferritin t½ = 11-24h (rapid); this captures net annual balance.",
  },
  k_gly: {
    source: "derived",
    note: "Set so ISF is at steady state: k_gly * Fe_ISF = (1-rho) * k_fpn_eff * Fe_LIP. k_gly = (1-rho) * J_uptake / Fe_ISF.",
  },
  J_CP_secretion: {
    source: "derived",
    note: "Set so CSF is at steady state: J_CP = k_CSF * Fe_CSF_baseline - k_gly * Fe_ISF_baseline. Choroid plexus dominates CSF iron.",
  },

  // ── Assumed ──────────────────────────────────────────────────────
  rho: {
    source: "assumed",
    note: "85% recapture. Supported by 90-99% astrocyte endfoot coverage (Moos 2007), but never directly measured.",
  },
  fpn_decline_rate: {
    source: "assumed",
    note: "Direction confirmed: Fpn protein decreases in aged brain (Raha 2022 eLife, Lupo 2022). No annualized rate published. 1%/year is estimate.",
  },
  gly_decline_rate: {
    source: "assumed",
    cite: "Patterson 2015, Ann Neurol",
    pmid: "26312904",
    note: "Aβ fractional turnover declines ~60% from age 30→80, ~1.2%/year linear. This is total Aβ clearance, not glymphatic-specific. May be nonlinear.",
  },
  phase1_threshold: {
    source: "assumed",
    note: "No measured LIP threshold for sublethal stress. A 2025 study (PMC12236665) found LIP may not increase during ferroptosis; redistribution may matter more than total level. Treat as illustrative.",
  },
  phase2_threshold: {
    source: "assumed",
    note: "No measured LIP threshold for frank ferroptosis. Same caveat as phase1. 100 µM DFO rescues (Dixon 2012, PMID 22632970).",
  },
  ferritin_capacity: {
    source: "assumed",
    note: "Ferritin holds up to 4,500 Fe atoms. Brain ferritin ~1,500 atoms/molecule normally (Dedman 1992). Intracellular neuronal ferritin ~220 µM (Reinert 2019). Model uses tissue-averaged compartment.",
  },
  k_ferritinophagy_basal: {
    source: "derived",
    note: "Derived from ferritin steady state: k_fp * Fe_ferritin = k_storage * Fe_LIP * capFrac. Ferritin t½ = 11-24h in cell culture (Mancias 2014, PMID 25131923).",
  },
  k_ferritinophagy_extra: {
    source: "assumed",
    note: "No published rate for stress-induced NCOA4 upregulation in brain. Extension for exploring iron-stress response.",
  },
};

// ── Measured baselines ──────────────────────────────────────────────

const BASELINES: ClearanceState = {
  Fe_LIP: 0.8,      // µM — consensus <1 µM (Kakhlon & Cabantchik 2002)
  Fe_ferritin: 25.0, // µM — tissue-averaged compartment
  Fe_ISF: 1.0,       // µM — sub-micromolar NTBI (Singh 2014)
};

/** CSF baseline in µM (61 µg/L ÷ 55.845 g/mol) — for display, not in ODE */
export const CSF_BASELINE_UM = 61.0 / 55.845; // ≈ 1.092 µM

// ── Derived parameters from steady-state constraints ────────────────

const J_UPTAKE = 0.55; // µM/year (~0.5 mg/year, Hallgren & Sourander 1958)
const RHO = 0.85;

// At steady state: J_uptake = k_fpn_eff * Fe_LIP
const K_FPN_EFF = J_UPTAKE / BASELINES.Fe_LIP;

// At steady state: k_gly * Fe_ISF = (1 - rho) * k_fpn_eff * Fe_LIP
const K_GLY = ((1 - RHO) * J_UPTAKE) / BASELINES.Fe_ISF;

// Ferritin at half-capacity steady state
const FERRITIN_CAPACITY = 50.0;
const CAP_FRAC = (FERRITIN_CAPACITY - BASELINES.Fe_ferritin) / FERRITIN_CAPACITY;
const K_STORAGE = J_UPTAKE / (BASELINES.Fe_LIP * CAP_FRAC);

// At steady state: J_storage = J_ferritinophagy → k_fp * Fe_ferritin = k_storage * Fe_LIP * capFrac
const K_FERRITINOPHAGY_BASAL = K_STORAGE * BASELINES.Fe_LIP * CAP_FRAC / BASELINES.Fe_ferritin;

// CSF turnover rate
const K_CSF_ABSORPTION = 1277; // 3.5 turnovers/day * 365

// CSF steady state: J_CP + J_gly = k_CSF * Fe_CSF
// J_CP = k_CSF * Fe_CSF_baseline - k_gly * Fe_ISF_baseline
const J_CP_SECRETION = K_CSF_ABSORPTION * CSF_BASELINE_UM - K_GLY * BASELINES.Fe_ISF;

// ── Default extensions (all off) ────────────────────────────────────

export const defaultExtensions: OptionalExtensions = {
  ferritinophagy: { enabled: false, k_ferritinophagy_extra: 0.05 },
  hypertension: { enabled: false, gly_reduction: 0.32 },    // Mortensen 2019: 29-36%
  diabetes: { enabled: false, gly_reduction: 0.84 },          // Jiang 2017: 84%
  sleepDisruption: { enabled: false, gly_reduction: 0.36 },   // Xie 2013: estimated
  chronicHepcidin: { enabled: false, fpn_reduction: 0.40 },   // Rivera 2005: 30-60% range
  bbbLeak: { enabled: false, J_BBB_leak: 0.3 },
  ferroptosisConsumption: { enabled: false, k_ferroptosis: 0.5 },
};

// ── Default core parameters ─────────────────────────────────────────

const defaultCore: CoreParameters = {
  sex: "male",
  apoe_genotype: "e3/e3",
  startAge: 20,

  // Measured
  J_uptake: J_UPTAKE,
  Km_fpn: 0.077,                // µM — Li 2020 (77 nM)

  // Derived
  k_fpn_eff: K_FPN_EFF,         // = J_uptake / Fe_LIP_baseline
  k_storage: K_STORAGE,
  k_ferritinophagy_basal: K_FERRITINOPHAGY_BASAL,
  k_gly: K_GLY,                 // = (1-rho) * J_uptake / Fe_ISF_baseline
  J_CP_secretion: J_CP_SECRETION,
  k_CSF_absorption: K_CSF_ABSORPTION,

  // Assumed (with literature direction)
  fpn_decline_rate: 0.01,       // 1%/year after 40 (Raha 2022, Lupo 2022)
  ferritin_capacity: FERRITIN_CAPACITY,
  rho: RHO,
  gly_decline_rate: 0.012,      // ~1.2%/year (Patterson 2015)

  // Assumed (illustrative)
  phase1_threshold: 1.2,
  phase2_threshold: 1.5,
};

// ── APOE modifiers ──────────────────────────────────────────────────
// Corder 1993: e3/e4 onset -8y, e4/e4 onset -16y
// We model this as accelerated decline rates.

const apoeModifiers: Record<APOEGenotype, number> = {
  "e3/e3": 1.0,
  "e3/e4": 1.5,   // produces ~-8y shift
  "e4/e4": 2.5,   // produces ~-16y shift
};

type APOEGenotype = ClearanceParameters["apoe_genotype"];

// ── Build full parameter set ────────────────────────────────────────

export function buildClearanceParameters(
  coreOverrides: Partial<CoreParameters> = {},
  extensionOverrides: Partial<OptionalExtensions> = {},
): ClearanceParameters {
  const core: CoreParameters = { ...defaultCore, ...coreOverrides };

  // Merge extension overrides deeply
  const extensions: OptionalExtensions = {
    ferritinophagy: { ...defaultExtensions.ferritinophagy, ...extensionOverrides.ferritinophagy },
    hypertension: { ...defaultExtensions.hypertension, ...extensionOverrides.hypertension },
    diabetes: { ...defaultExtensions.diabetes, ...extensionOverrides.diabetes },
    sleepDisruption: { ...defaultExtensions.sleepDisruption, ...extensionOverrides.sleepDisruption },
    chronicHepcidin: { ...defaultExtensions.chronicHepcidin, ...extensionOverrides.chronicHepcidin },
    bbbLeak: { ...defaultExtensions.bbbLeak, ...extensionOverrides.bbbLeak },
    ferroptosisConsumption: { ...defaultExtensions.ferroptosisConsumption, ...extensionOverrides.ferroptosisConsumption },
  };

  return {
    ...core,
    extensions,
    apoe_decline_accel: apoeModifiers[core.apoe_genotype],
  };
}

// ── Initial state ───────────────────────────────────────────────────

export function initialState(): ClearanceState {
  return { ...BASELINES };
}

// ── Export baselines for reference ──────────────────────────────────

export { BASELINES };

// ── Scenarios ───────────────────────────────────────────────────────

export const clearanceScenarios: ClearanceScenario[] = [
  {
    id: "healthy",
    label: "Healthy aging",
    description: "APOE e3/e3, no comorbidities. Age-related clearance decline only.",
    overrides: {},
  },
  {
    id: "apoe4_het",
    label: "APOE4 heterozygous",
    description: "e3/e4. 1.5x accelerated decline. Onset ~8 years earlier (Corder 1993).",
    overrides: { apoe_genotype: "e3/e4" },
  },
  {
    id: "apoe4_hom",
    label: "APOE4 homozygous",
    description: "e4/e4. 2.5x accelerated decline. Onset ~16 years earlier (Corder 1993).",
    overrides: { apoe_genotype: "e4/e4" },
  },
  {
    id: "multimorbid",
    label: "Multi-morbid",
    description: "HTN + diabetes + sleep disruption. Compound glymphatic impairment.",
    overrides: {},
    extensionOverrides: {
      hypertension: { enabled: true, gly_reduction: 0.32 },
      diabetes: { enabled: true, gly_reduction: 0.84 },
      sleepDisruption: { enabled: true, gly_reduction: 0.36 },
    },
  },
  {
    id: "post_stroke",
    label: "Post-stroke",
    description: "Chronic hepcidin elevation + BBB leak.",
    overrides: {},
    extensionOverrides: {
      hypertension: { enabled: true, gly_reduction: 0.32 },
      chronicHepcidin: { enabled: true, fpn_reduction: 0.40 },
      bbbLeak: { enabled: true, J_BBB_leak: 0.3 },
    },
  },
  {
    id: "female_postmeno",
    label: "Female post-menopause",
    description: "Accelerated iron accumulation after age 51.",
    overrides: { sex: "female" },
  },
];

// ── Parameter metadata for UI ───────────────────────────────────────

export const parameterMeta: ParameterMeta[] = [
  // Core — measured
  {
    key: "J_uptake", label: "Iron uptake rate", min: 0.2, max: 1.5, step: 0.05,
    unit: "µM/year", source: "measured",
    cite: "Hallgren & Sourander 1958", citationKey: "J_uptake", group: "core",
  },
  {
    key: "Km_fpn", label: "Fpn Km (Fe²⁺)", min: 0.02, max: 0.5, step: 0.01,
    unit: "µM", source: "measured",
    cite: "Li 2020 (77 nM)", citationKey: "Km_fpn", group: "core",
  },

  // Core — assumed with literature direction
  {
    key: "rho", label: "ISF recapture fraction", min: 0.5, max: 0.95, step: 0.01,
    unit: "", source: "assumed", citationKey: "rho", group: "core",
  },
  {
    key: "fpn_decline_rate", label: "Fpn annual decline", min: 0.002, max: 0.025, step: 0.001,
    unit: "/year", source: "assumed",
    cite: "Raha 2022 (direction)", citationKey: "fpn_decline_rate", group: "clearance",
  },
  {
    key: "gly_decline_rate", label: "Glymphatic annual decline", min: 0.002, max: 0.03, step: 0.001,
    unit: "/year", source: "assumed",
    cite: "Patterson 2015 (~1.2%/yr)", citationKey: "gly_decline_rate", group: "clearance",
  },

  // Thresholds — assumed (illustrative)
  {
    key: "phase1_threshold", label: "Phase 1 threshold", min: 1.05, max: 1.6, step: 0.05,
    unit: "× baseline", source: "assumed", citationKey: "phase1_threshold", group: "thresholds",
  },
  {
    key: "phase2_threshold", label: "Phase 2 threshold", min: 1.2, max: 2.0, step: 0.05,
    unit: "× baseline", source: "assumed", citationKey: "phase2_threshold", group: "thresholds",
  },
];
