/** FELINE Kinetics Model — Type Definitions */

/** Cascade mode: post-injury (acute insult) or spontaneous (age-related AD) */
export type CascadeMode = "post_injury" | "spontaneous";

/** State variables tracked by the ODE system */
export interface ModelState {
  /** Free labile iron in brain (arbitrary units, normalized to baseline = 1.0) */
  Fe_free: number;
  /** Ferritin-sequestered iron */
  Fe_stored: number;
  /** Total brain iron (QSM-observable) */
  Fe_brain: number;
  /** Amyloid-beta accumulation (SUVR units) */
  Abeta: number;
  /** Tau aggregation (SUVR units, baseline ~1.0) */
  Tau: number;
  /** GPX4 activity (0 = none, 1 = full) */
  GPX4: number;
  /** Export function composite (AQP4 x pericyte x glymphatic) */
  Export_fx: number;
  /** Lysosomal function (0-1) */
  Lysosome_fx: number;
  /** Insulation function (ferritin + myelin, 0-1) */
  Insulation_fx: number;
  /** Neurovascular function (pericyte coverage, 0-1) */
  Neurovascular_fx: number;
}

/** Rate constants and model parameters */
export interface ModelParameters {
  // Cascade mode
  cascade_mode: CascadeMode;

  // Damage parameters (post-injury mode)
  damage_severity: number; // 0-1 scale
  apoe_genotype: "e3/e3" | "e3/e4" | "e4/e4";
  repeated_insults: number;

  // Aging parameters (spontaneous mode)
  k_age_export: number; // annual decline rate for export function
  k_age_lysosome: number;
  k_age_insulation: number;
  k_age_neurovascular: number;
  k_age_floor: number; // minimum layer value from aging alone

  // Iron dynamics
  k_release: number;
  k_sequester: number;
  k_export_base: number;
  k_ferroptosis: number;

  // Protein accumulation
  k_production: number; // Abeta production rate
  k_clearance_lysosomal: number;
  k_clearance_glymphatic: number;
  k_clearance_insulation: number;
  k_seed: number; // Autocatalytic seeding rate
  seed_threshold: number; // SUVR threshold for seeding (1.2)
  seed_exponent: number; // Cooperativity (n > 1)

  // Iron-driven amyloid
  k_iron_abeta: number; // Iron-driven APP processing rate

  // Tau
  k_tau_production: number;
  k_tau_clearance: number;
  k_tau_seed: number;

  // Secondary iron
  k_aggregation_death: number;

  // Recovery rates
  k_gpx4_recovery: number;
  k_export_recovery: number;
  k_lysosome_recovery: number;
  k_insulation_recovery: number;
  k_neurovascular_recovery: number;

  // APOE modifiers
  apoe_clearance_modifier: number;
  apoe_recovery_modifier: number;

  // Cell death burst
  cell_death_peak: number; // Peak cell death (days)
  cell_death_width: number; // Width of burst (days)
}

/** A single time point in the simulation output */
export interface TimePoint {
  t: number; // Time in years
  Fe_free: number;
  Fe_stored: number;
  Fe_brain: number;
  Abeta: number;
  Tau: number;
  GPX4: number;
  Export_fx: number;
  Lysosome_fx: number;
  Insulation_fx: number;
  Neurovascular_fx: number;
}

/** Complete simulation result */
export interface SimulationResult {
  timePoints: TimePoint[];
  parameters: ModelParameters;
  label: string;
}

/** Scenario configuration for the UI */
export interface Scenario {
  id: string;
  label: string;
  description: string;
  /** Plain-language example of what this scenario represents */
  realWorldExample?: string;
  /** Damage percentage for display (post-injury mode) */
  damagePercent?: number;
  parameters: Partial<ModelParameters>;
}

/** Therapeutic window definition */
export interface TherapeuticWindow {
  id: number;
  label: string;
  startYear: number;
  endYear: number;
  target: string;
  intervention: string;
  efficacy: "highest" | "high" | "moderate" | "low" | "unknown";
  /** Plain-language estimated effect size */
  estimatedEffect?: string;
  color: string;
}
