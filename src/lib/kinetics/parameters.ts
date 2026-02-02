import type { ModelParameters, Scenario, TherapeuticWindow, CascadeMode } from "./types";

/** Default parameters for the FELINE kinetics model */
export const defaultParameters: ModelParameters = {
  cascade_mode: "post_injury",

  damage_severity: 0.4,
  apoe_genotype: "e3/e3",
  repeated_insults: 1,

  // Aging parameters (used in spontaneous mode)
  k_age_export: 0.008,
  k_age_lysosome: 0.006,
  k_age_insulation: 0.007,
  k_age_neurovascular: 0.005,
  k_age_floor: 0.25,

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
    label: "Mild (20%)",
    description:
      "Single minor event (mild concussion, flu with high fever). 20% clearance damage. Many individuals never reach the plaque threshold.",
    realWorldExample: "Single mild concussion, flu with high fever",
    damagePercent: 20,
    parameters: { damage_severity: 0.2, repeated_insults: 1 },
  },
  {
    id: "moderate",
    label: "Moderate (40%)",
    description:
      "Significant neurological event (COVID with brain fog, moderate TBI). 40% clearance damage. Slow progression toward threshold over decades.",
    realWorldExample: "COVID with brain fog, moderate TBI",
    damagePercent: 40,
    parameters: { damage_severity: 0.4, repeated_insults: 1 },
  },
  {
    id: "severe",
    label: "Severe (60%)",
    description:
      "Repeated or severe insults (3+ concussions, severe COVID + reinfection). 60% clearance damage. Fastest progression to plaque threshold.",
    realWorldExample: "3+ concussions, severe COVID + reinfection",
    damagePercent: 60,
    parameters: { damage_severity: 0.6, repeated_insults: 3 },
  },
];

/** Pre-defined scenarios for spontaneous AD mode */
export const spontaneousScenarios: Scenario[] = [
  {
    id: "e3e3",
    label: "APOE e3/e3",
    description:
      "Most common genotype (60% of population). Normal clearance speed. Lowest AD risk.",
    realWorldExample: "60% of population, normal clearance",
    parameters: {
      cascade_mode: "spontaneous",
      damage_severity: 0,
      repeated_insults: 0,
      apoe_genotype: "e3/e3",
    },
  },
  {
    id: "e3e4",
    label: "APOE e3/e4",
    description:
      "One risk allele (25% of population). Clearance reduced ~18%. 3x Alzheimer's risk.",
    realWorldExample: "25% of population, 3x AD risk",
    parameters: {
      cascade_mode: "spontaneous",
      damage_severity: 0,
      repeated_insults: 0,
      apoe_genotype: "e3/e4",
    },
  },
  {
    id: "e4e4",
    label: "APOE e4/e4",
    description:
      "Two risk alleles (2-3% of population). Clearance reduced ~35%. 12x Alzheimer's risk. Fastest progression.",
    realWorldExample: "2-3% of population, 12x AD risk",
    parameters: {
      cascade_mode: "spontaneous",
      damage_severity: 0,
      repeated_insults: 0,
      apoe_genotype: "e4/e4",
    },
  },
];

/** Therapeutic windows for spontaneous AD mode */
export const spontaneousWindows: TherapeuticWindow[] = [
  {
    id: 1,
    label: "Lifestyle Prevention",
    startYear: 0,
    endYear: 15,
    target: "Delay layer decline",
    intervention: "Exercise, sleep, vascular health, diet",
    efficacy: "highest",
    estimatedEffect: "30-50% risk reduction",
    color: "#059669",
  },
  {
    id: 2,
    label: "Early Detection",
    startYear: 10,
    endYear: 20,
    target: "Identify pre-clinical decline",
    intervention: "Biomarker screening, risk assessment",
    efficacy: "high",
    estimatedEffect: "Enables early intervention",
    color: "#0891B2",
  },
  {
    id: 3,
    label: "Anti-amyloid",
    startYear: 15,
    endYear: 30,
    target: "Reduce amyloid burden",
    intervention: "Lecanemab, donanemab, aducanumab",
    efficacy: "moderate",
    estimatedEffect: "27% slowing of decline",
    color: "#D97706",
  },
  {
    id: 4,
    label: "Clearance Support",
    startYear: 20,
    endYear: 40,
    target: "Restore glymphatic/lysosomal function",
    intervention: "Sleep optimization, TREM2 agonists, chelation",
    efficacy: "low",
    estimatedEffect: "Under investigation",
    color: "#9CA3AF",
  },
  {
    id: 5,
    label: "Symptomatic",
    startYear: 30,
    endYear: 50,
    target: "Manage symptoms",
    intervention: "Cholinesterase inhibitors, supportive care",
    efficacy: "unknown",
    estimatedEffect: "Symptom management only",
    color: "#6B7280",
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
    estimatedEffect: "Prevents cascade entirely",
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
    estimatedEffect: "50-80% damage reduction",
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
    estimatedEffect: "30-50% improved clearance",
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
    estimatedEffect: "10-30% slowing",
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
    estimatedEffect: "Under investigation",
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
    estimatedEffect: "Limited evidence",
    color: "#374151", // gray-700
  },
];
