import type { ModelParameters, Scenario, TherapeuticWindow } from "./types";

/** Default parameters for the FELINE kinetics model */
export const defaultParameters: ModelParameters = {
  damage_severity: 0.4,
  apoe_genotype: "e3/e3",
  repeated_insults: 1,

  // Iron dynamics (per year)
  k_release: 5.0,
  k_sequester: 2.0,
  k_export_base: 0.8,
  k_ferroptosis: 0.3,

  // Protein accumulation (per year, in SUVR units)
  k_production: 0.08,
  k_clearance_lysosomal: 0.03,
  k_clearance_glymphatic: 0.05,
  k_clearance_insulation: 0.02,
  k_seed: 0.015,
  seed_threshold: 1.1,
  seed_exponent: 2,

  // Iron-driven amyloid (oxidative stress increases APP processing)
  k_iron_abeta: 0.003,

  // Tau (SUVR units — baseline ~1.0, AD-level ~2.0-2.5)
  k_tau_production: 0.05,
  k_tau_clearance: 0.05,
  k_tau_seed: 0.015,

  // Secondary iron from neuronal death
  k_aggregation_death: 0.02,

  // Recovery rates (per year) — slow biological processes
  k_gpx4_recovery: 0.5,
  k_export_recovery: 0.08,
  k_lysosome_recovery: 0.12,
  k_insulation_recovery: 0.06,
  k_neurovascular_recovery: 0.1,

  // APOE modifiers (1.0 = no effect)
  apoe_clearance_modifier: 1.0,
  apoe_recovery_modifier: 1.0,

  // Cell death burst (in days, converted to years in model)
  cell_death_peak: 3,
  cell_death_width: 4,
};

/** APOE genotype modifiers */
const apoeModifiers: Record<
  ModelParameters["apoe_genotype"],
  { clearance: number; recovery: number }
> = {
  "e3/e3": { clearance: 1.0, recovery: 1.0 },
  "e3/e4": { clearance: 0.82, recovery: 0.85 },
  "e4/e4": { clearance: 0.65, recovery: 0.7 },
};

/** Build a full parameter set from a scenario's partial overrides */
export function buildParameters(
  overrides: Partial<ModelParameters> = {}
): ModelParameters {
  const params = { ...defaultParameters, ...overrides };
  const apoe = apoeModifiers[params.apoe_genotype];
  params.apoe_clearance_modifier = apoe.clearance;
  params.apoe_recovery_modifier = apoe.recovery;
  return params;
}

/** Pre-defined scenarios */
export const scenarios: Scenario[] = [
  {
    id: "mild",
    label: "Mild",
    description:
      "Single mild insult, 30% clearance damage. Many individuals never reach nucleation threshold.",
    parameters: { damage_severity: 0.2, repeated_insults: 1 },
  },
  {
    id: "moderate",
    label: "Moderate",
    description:
      "Moderate insult (e.g., COVID with neurological involvement), 55% clearance damage.",
    parameters: { damage_severity: 0.4, repeated_insults: 1 },
  },
  {
    id: "severe",
    label: "Severe",
    description:
      "Severe or repeated insults, 70% clearance damage. Fastest progression to threshold.",
    parameters: { damage_severity: 0.6, repeated_insults: 3 },
  },
];

/** Therapeutic windows for visualization */
export const therapeuticWindows: TherapeuticWindow[] = [
  {
    id: 1,
    label: "Prevention",
    startYear: -2,
    endYear: 0,
    target: "Avoid/mitigate insult",
    intervention: "Vaccines, antivirals, neuroprotection",
    efficacy: "highest",
    color: "#059669", // green-600
  },
  {
    id: 2,
    label: "Acute",
    startYear: 0,
    endYear: 0.02, // ~7 days
    target: "Limit pericyte death, ferroptosis",
    intervention: "Imatinib, ferroptosis inhibitors, iron chelation",
    efficacy: "high",
    color: "#0891B2", // teal-600
  },
  {
    id: 3,
    label: "Subacute",
    startYear: 0.02,
    endYear: 0.25, // ~3 months
    target: "Iron redistribution, AQP4 restoration",
    intervention: "Extended chelation, acetazolamide, sleep",
    efficacy: "moderate",
    color: "#D97706", // amber-600
  },
  {
    id: 4,
    label: "Chronic",
    startYear: 0.25,
    endYear: 5,
    target: "Support clearance, prevent accumulation",
    intervention: "Sleep, exercise, anti-inflammatory",
    efficacy: "low",
    color: "#9CA3AF", // gray-400
  },
  {
    id: 5,
    label: "Pre-threshold",
    startYear: 5,
    endYear: 20,
    target: "Prevent nucleation",
    intervention: "Clearance enhancement, TREM2 agonists",
    efficacy: "unknown",
    color: "#6B7280", // gray-500
  },
  {
    id: 6,
    label: "Post-threshold",
    startYear: 20,
    endYear: 40,
    target: "Slow progression",
    intervention: "TREM2 agonists, ferroptosis inhibitors",
    efficacy: "unknown",
    color: "#374151", // gray-700
  },
];
