/** FELINE Clearance Model — Type Definitions
 *
 * 4-compartment serial ODE system modeling brain iron clearance:
 * Cell (LIP + ferritin) → ISF → CSF → periphery
 */

/** State variables for the 5-compartment model */
export interface ClearanceState {
  /** Labile iron pool — free intracellular Fe2+ (µM, baseline ~2.5) */
  Fe_LIP: number;
  /** Ferritin-bound storage iron (µM, baseline ~25) */
  Fe_ferritin: number;
  /** Interstitial fluid iron — NTBI in transit (µM, baseline ~0.005) */
  Fe_ISF: number;
  /** CSF iron (µg/L, baseline ~61) */
  Fe_CSF: number;
  /** Cumulative oxidative damage (0-1): drives Cu depletion, ferroxidase loss, protein aggregation */
  damage: number;
}

export type Sex = "male" | "female";
export type APOEGenotype = "e3/e3" | "e3/e4" | "e4/e4";

/** Disease perturbation toggles */
export interface DiseasePerturbations {
  hypertension: boolean;
  diabetes: boolean;
  sleepDisruption: boolean;
  chronicHepcidin: boolean;
}

/** Full parameter set for the clearance model */
export interface ClearanceParameters {
  // Demographics
  sex: Sex;
  apoe_genotype: APOEGenotype;
  startAge: number;

  // Ferroportin kinetics
  /** Fpn surface copies per cell (30-300 range) */
  N_fpn: number;
  /** Single-Fpn turnover rate (s^-1) */
  k_cat: number;
  /** Michaelis constant for Fpn (µM) */
  Km_fpn: number;
  /** Ferroxidase efficiency (0-1; depends on Cu availability) */
  f_ferroxidase: number;
  /** Annual Fpn decline rate after age 40 */
  fpn_decline_rate: number;
  /** Base effective Fpn export rate constant (per year, calibrated) */
  k_fpn_base: number;

  // Iron uptake and storage
  /** Basal iron uptake rate (µM/year) */
  J_uptake: number;
  /** Ferritinophagy rate constant (per year) */
  k_ferritinophagy: number;
  /** Ferritin storage rate constant (per year) */
  k_storage: number;
  /** Ferritin capacity (µM) */
  ferritin_capacity: number;
  /** EV-mediated ferritin secretion rate (per year) */
  k_EV_secretion: number;

  // ISF dynamics
  /** ISF recapture fraction (baseline ~0.85) */
  rho: number;
  /** BBB leak rate (µM/year, normally ~0) */
  J_BBB_leak: number;
  /** Cell death iron release rate (µM/year) */
  J_cell_death: number;

  // Glymphatic kinetics
  /** Glymphatic clearance rate constant (per year) */
  k_gly: number;
  /** Annual glymphatic decline rate after age 30 */
  gly_decline_rate: number;
  /** AQP4 polarity (0-1, baseline 1.0) */
  aqp4_polarity: number;

  // CSF dynamics
  /** Choroid plexus iron secretion rate (µg/L/year) */
  J_CP_secretion: number;
  /** CSF absorption rate constant (per year) */
  k_CSF_absorption: number;

  // Ferroptosis thresholds (as multiples of baseline LIP)
  /** Phase 1 threshold (sublethal stress) */
  phase1_threshold: number;
  /** Phase 2 threshold (frank ferroptosis) */
  phase2_threshold: number;
  /** Ferroptosis consumption rate */
  k_ferroptosis: number;

  // Disease perturbations (multiplicative factors on clearance)
  /** Hypertension: glymphatic reduction */
  htn_gly_factor: number;
  /** Diabetes: glymphatic reduction */
  dm_gly_factor: number;
  /** Sleep disruption: glymphatic reduction */
  sleep_gly_factor: number;
  /** Chronic hepcidin: Fpn reduction */
  hepcidin_fpn_factor: number;

  // Iron-coupled feedback loops
  /** Rate of cumulative oxidative damage per unit LIP excess per year */
  k_oxidative_damage: number;
  /** Hepcidin response: Fpn suppression per unit LIP elevation above baseline */
  k_hepcidin_response: number;
  /** Rho sensitivity to cumulative damage (rho_eff = rho * (1 - k_rho_damage * D)) */
  k_rho_damage: number;
  /** Mild protein-iron amplifier: uptake increase per unit damage above threshold */
  k_protein_amplifier: number;
  /** Damage threshold before protein effects engage */
  protein_damage_threshold: number;

  // APOE modifiers
  /** APOE decline acceleration multiplier */
  apoe_decline_accel: number;

  // Active disease toggles
  perturbations: DiseasePerturbations;
}

/** A single time point in the simulation output */
export interface ClearanceTimePoint {
  /** Age in years */
  age: number;
  /** Labile iron pool (µM) */
  Fe_LIP: number;
  /** Ferritin-stored iron (µM) */
  Fe_ferritin: number;
  /** ISF iron (µM) */
  Fe_ISF: number;
  /** CSF iron (µg/L) */
  Fe_CSF: number;
  /** Effective Fpn export rate at this age (fraction of baseline) */
  fpn_fraction: number;
  /** Effective glymphatic clearance at this age (fraction of baseline) */
  gly_fraction: number;
  /** Current rho (recapture fraction) */
  rho: number;
  /** Cumulative oxidative damage (0-1) */
  damage: number;
  /** Effective ferroxidase fraction after Cu depletion */
  ferroxidase_eff: number;
  /** Current ferroptosis phase (0, 1, or 2) */
  phase: 0 | 1 | 2;
}

/** Complete simulation result */
export interface ClearanceResult {
  timePoints: ClearanceTimePoint[];
  parameters: ClearanceParameters;
  label: string;
  /** Age at Phase 1 entry (null if never reached) */
  phase1Age: number | null;
  /** Age at Phase 2 entry (null if never reached) */
  phase2Age: number | null;
  /** Clearance at age 70 as fraction of clearance at age 30 */
  clearanceAt70: number;
  /** ISF iron concentration at age 70 (µM) */
  isfAt70: number;
}

/** Scenario configuration for the UI */
export interface ClearanceScenario {
  id: string;
  label: string;
  description: string;
  parameters: Partial<ClearanceParameters>;
}

/** Cell-type Fpn budget entry */
export interface CellTypeBudget {
  cellType: string;
  fractionOfCells: number;
  relativeFpnFlux: number;
  weightedContribution: number;
}

/** Confidence level for parameter display */
export type ConfidenceLevel = "high" | "moderate" | "low";

/** Parameter metadata for slider display */
export interface ParameterMeta {
  key: keyof ClearanceParameters;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
  confidence: ConfidenceLevel;
  group: "demographics" | "fpn" | "glymphatic" | "advanced";
}
