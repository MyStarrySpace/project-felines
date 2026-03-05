/**
 * FELINE Clearance Model v2 — Minimal ODE with cited parameters
 *
 * 3-state ODE: [LIP, ferritin, ISF] with CSF as algebraic steady-state.
 * Serial pathway: LIP → ISF → CSF → periphery
 * Ferritin as a saturable buffer on LIP.
 *
 * Design principles:
 *  - Every parameter is classified as "measured", "derived", or "assumed"
 *  - Derived parameters are computed from measured ones (steady-state constraints)
 *  - Optional extensions can be toggled on/off for exploration
 *  - Feedback loops removed; acceleration comes from clearance decline alone
 */

// ── Confidence classification ───────────────────────────────────────

export type ParamSource = "measured" | "derived" | "assumed";

export interface ParamCitation {
  source: ParamSource;
  /** Short citation: "Author Year, Journal" */
  cite?: string;
  /** PMID or DOI for lookup */
  pmid?: string;
  doi?: string;
  /** How derived parameters were computed, or why assumed values were chosen */
  note?: string;
}

// ── State variables ─────────────────────────────────────────────────

/** ODE state: 3 variables integrated numerically */
export interface ClearanceState {
  /** Labile iron pool — free intracellular Fe²⁺ (µM, baseline ~0.8) */
  Fe_LIP: number;
  /** Ferritin-bound storage iron (µM) */
  Fe_ferritin: number;
  /** Interstitial fluid iron — NTBI (µM, baseline ~1.0) */
  Fe_ISF: number;
}

// ── Core parameters (always active) ─────────────────────────────────

export type Sex = "male" | "female";
export type APOEGenotype = "e3/e3" | "e3/e4" | "e4/e4";

export interface CoreParameters {
  sex: Sex;
  apoe_genotype: APOEGenotype;
  startAge: number;

  // ── Iron uptake ───────────────────────────────────────────────────
  /** Net iron accumulation rate (µM/year). ~0.5 mg/year whole brain. */
  J_uptake: number;

  // ── Ferroportin export ────────────────────────────────────────────
  /** Fpn Km for Fe²⁺ (µM) */
  Km_fpn: number;
  /** Effective Fpn export rate (derived for steady state) */
  k_fpn_eff: number;
  /** Annual Fpn decline rate after age 40 */
  fpn_decline_rate: number;

  // ── Ferritin storage ──────────────────────────────────────────────
  /** Ferritin storage rate (per year, derived for steady state) */
  k_storage: number;
  /** Ferritin iron capacity (µM) */
  ferritin_capacity: number;
  /** Basal ferritinophagy rate (per year, derived for ferritin steady state) */
  k_ferritinophagy_basal: number;

  // ── ISF dynamics ──────────────────────────────────────────────────
  /** Fraction of Fpn-exported iron recaptured by neighboring cells */
  rho: number;

  // ── Glymphatic clearance ──────────────────────────────────────────
  /** Glymphatic clearance rate (per year, derived for ISF steady state) */
  k_gly: number;
  /** Annual glymphatic decline rate after age 30 */
  gly_decline_rate: number;

  // ── CSF dynamics (algebraic, not ODE) ─────────────────────────────
  /** Choroid plexus iron secretion (µM/year, derived for CSF steady state) */
  J_CP_secretion: number;
  /** CSF absorption rate (per year) — CSF turnover ~3.5x/day */
  k_CSF_absorption: number;

  // ── Ferroptosis thresholds ────────────────────────────────────────
  /** Phase 1: sublethal oxidative stress (multiple of baseline LIP) */
  phase1_threshold: number;
  /** Phase 2: frank ferroptosis (multiple of baseline LIP) */
  phase2_threshold: number;
}

// ── Optional extensions (toggled on/off) ────────────────────────────

export interface OptionalExtensions {
  /** Extra ferritinophagy: NCOA4-mediated degradation beyond basal rate (e.g., iron stress) */
  ferritinophagy: {
    enabled: boolean;
    /** Additional ferritinophagy rate constant on top of basal (per year) */
    k_ferritinophagy_extra: number;
  };

  /** Disease perturbations on glymphatic clearance */
  hypertension: {
    enabled: boolean;
    /** Fractional reduction in glymphatic clearance */
    gly_reduction: number;
  };
  diabetes: {
    enabled: boolean;
    gly_reduction: number;
  };
  sleepDisruption: {
    enabled: boolean;
    gly_reduction: number;
  };

  /** Chronic hepcidin elevation (e.g., post-stroke, chronic inflammation) */
  chronicHepcidin: {
    enabled: boolean;
    /** Fractional reduction in Fpn activity */
    fpn_reduction: number;
  };

  /** BBB leak (acute injury) */
  bbbLeak: {
    enabled: boolean;
    /** Iron leak into ISF (µM/year) */
    J_BBB_leak: number;
  };

  /** Phase 2 ferroptosis iron consumption (negative feedback) */
  ferroptosisConsumption: {
    enabled: boolean;
    /** Iron consumed during ferroptosis (per year) */
    k_ferroptosis: number;
  };
}

// ── Full parameter set ──────────────────────────────────────────────

export interface ClearanceParameters extends CoreParameters {
  extensions: OptionalExtensions;
  /** APOE decline acceleration (derived from genotype) */
  apoe_decline_accel: number;
}

// ── Output types ────────────────────────────────────────────────────

export interface ClearanceTimePoint {
  age: number;
  Fe_LIP: number;
  Fe_ferritin: number;
  Fe_ISF: number;
  /** CSF iron (µM), computed algebraically from ISF flux */
  Fe_CSF: number;
  fpn_fraction: number;
  gly_fraction: number;
  phase: 0 | 1 | 2;
}

export interface ClearanceResult {
  timePoints: ClearanceTimePoint[];
  parameters: ClearanceParameters;
  /** Sex-specific steady-state baselines used for normalization */
  baselines: ClearanceState;
  label: string;
  phase1Age: number | null;
  phase2Age: number | null;
  clearanceAt70: number;
  isfAt70: number;
}

export interface ClearanceScenario {
  id: string;
  label: string;
  description: string;
  overrides: Partial<CoreParameters>;
  extensionOverrides?: Partial<OptionalExtensions>;
}

// ── Parameter metadata for UI ───────────────────────────────────────

export interface ParameterMeta {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
  source: ParamSource;
  cite?: string;
  /** Key into the citations record for full citation details */
  citationKey?: string;
  group: "core" | "clearance" | "thresholds" | "extensions";
}
