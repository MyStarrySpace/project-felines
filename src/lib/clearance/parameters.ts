import type {
  ClearanceParameters,
  ClearanceScenario,
  CellTypeBudget,
  ParameterMeta,
} from "./types";

/** Default parameters — healthy e3/e3 male baseline */
export const defaultClearanceParameters: ClearanceParameters = {
  // Demographics
  sex: "male",
  apoe_genotype: "e3/e3",
  startAge: 20,

  // Ferroportin kinetics (from Bao 2021 back-calculation, §4.5)
  N_fpn: 150, // 30-300 range, midpoint
  k_cat: 5.0, // s^-1 (SLC-class transporter)
  Km_fpn: 0.1, // µM (~100 nM from oocyte data)
  f_ferroxidase: 0.9, // Cu-dependent, 0-1
  fpn_decline_rate: 0.01, // 1% per year after age 40
  k_fpn_base: 0.11, // effective Fpn export rate (calibrated for steady state)

  // Iron uptake and storage
  J_uptake: 0.55, // µM/year — net uptake into LIP (calibrated for ~0.5 mg/year)
  k_ferritinophagy: 0.08, // per year
  k_storage: 1.8, // per year (fast sequestration, calibrated for ferritin SS)
  ferritin_capacity: 50.0, // µM
  k_EV_secretion: 0.01, // per year (redistribution, not clearance)

  // ISF dynamics
  rho: 0.85, // 85% recapture in healthy young brain (§6.3)
  J_BBB_leak: 0.0, // normally zero
  J_cell_death: 0.0, // normally zero

  // Glymphatic kinetics
  k_gly: 8.0, // per year — calibrated for steady-state ISF ~1 µM
  gly_decline_rate: 0.012, // 1.2% per year after age 30 (§5.1)
  aqp4_polarity: 1.0, // full polarization

  // CSF dynamics
  J_CP_secretion: 5.0, // µg/L/year
  k_CSF_absorption: 4.0, // per year (~3-4 turnovers/day)

  // Ferroptosis thresholds (multiples of baseline LIP)
  phase1_threshold: 1.2, // 1.2-1.4x baseline → sublethal stress
  phase2_threshold: 1.5, // 1.5-1.8x baseline → frank ferroptosis
  k_ferroptosis: 0.5, // consumption rate

  // Disease perturbation factors
  htn_gly_factor: 0.27, // 27% reduction (Mestre 2018)
  dm_gly_factor: 0.67, // 67% reduction (Jiang 2017)
  sleep_gly_factor: 0.36, // 36% reduction (~60% of sleep-dependent 60% enhancement)
  hepcidin_fpn_factor: 0.40, // 30-60% Fpn loss, midpoint

  // Iron-coupled feedback loops
  k_oxidative_damage: 0.04, // cumulative damage rate per unit LIP excess/year
  k_hepcidin_response: 0.5, // Fpn suppression per unit LIP ratio above 1.0
  k_rho_damage: 0.4, // rho sensitivity to cumulative damage
  k_protein_amplifier: 0.15, // mild uptake amplification per unit damage
  protein_damage_threshold: 0.15, // damage level before protein effects engage

  // APOE modifier
  apoe_decline_accel: 1.0,

  // No active perturbations by default
  perturbations: {
    hypertension: false,
    diabetes: false,
    sleepDisruption: false,
    chronicHepcidin: false,
  },
};

/** APOE genotype modifiers */
const apoeModifiers: Record<
  ClearanceParameters["apoe_genotype"],
  { declineAccel: number }
> = {
  "e3/e3": { declineAccel: 1.0 },
  "e3/e4": { declineAccel: 1.5 },
  "e4/e4": { declineAccel: 2.5 },
};

/** Build a full parameter set from partial overrides */
export function buildClearanceParameters(
  overrides: Partial<ClearanceParameters> = {}
): ClearanceParameters {
  const params = {
    ...defaultClearanceParameters,
    ...overrides,
    perturbations: {
      ...defaultClearanceParameters.perturbations,
      ...overrides.perturbations,
    },
  };
  const apoe = apoeModifiers[params.apoe_genotype];
  params.apoe_decline_accel = apoe.declineAccel;
  return params;
}

/** Pre-defined scenarios */
export const clearanceScenarios: ClearanceScenario[] = [
  {
    id: "healthy",
    label: "Healthy aging",
    description:
      "APOE e3/e3, no comorbidities. Normal age-related clearance decline.",
    parameters: {},
  },
  {
    id: "apoe4_het",
    label: "APOE4 heterozygous",
    description:
      "e3/e4 genotype. 1.5x accelerated decline, Phase 1 ~10 years earlier.",
    parameters: {
      apoe_genotype: "e3/e4",
    },
  },
  {
    id: "apoe4_hom",
    label: "APOE4 homozygous",
    description:
      "e4/e4 genotype. 2.5x accelerated decline, Phase 1 ~15-20 years earlier.",
    parameters: {
      apoe_genotype: "e4/e4",
    },
  },
  {
    id: "multimorbid",
    label: "Multi-morbid",
    description:
      "HTN + diabetes + sleep disruption. Compound glymphatic impairment.",
    parameters: {
      perturbations: {
        hypertension: true,
        diabetes: true,
        sleepDisruption: true,
        chronicHepcidin: false,
      },
    },
  },
  {
    id: "post_stroke",
    label: "Post-stroke",
    description:
      "Chronic hepcidin elevation + BBB leak. Acute-on-chronic clearance failure.",
    parameters: {
      perturbations: {
        hypertension: true,
        diabetes: false,
        sleepDisruption: false,
        chronicHepcidin: true,
      },
      J_BBB_leak: 0.3,
    },
  },
  {
    id: "female_postmeno",
    label: "Female post-menopause",
    description:
      "Accelerated iron accumulation after age 51. Catch-up trajectory.",
    parameters: {
      sex: "female",
    },
  },
];

/** Cell-type Fpn budget (from §4.5) */
export const cellTypeBudget: CellTypeBudget[] = [
  {
    cellType: "Excitatory neurons",
    fractionOfCells: 0.16,
    relativeFpnFlux: 1.0,
    weightedContribution: 0.16,
  },
  {
    cellType: "Inhibitory neurons",
    fractionOfCells: 0.04,
    relativeFpnFlux: 0.75,
    weightedContribution: 0.03,
  },
  {
    cellType: "Astrocytes",
    fractionOfCells: 0.2,
    relativeFpnFlux: 0.4,
    weightedContribution: 0.08,
  },
  {
    cellType: "Oligodendrocytes",
    fractionOfCells: 0.45,
    relativeFpnFlux: 0.075,
    weightedContribution: 0.034,
  },
  {
    cellType: "Microglia",
    fractionOfCells: 0.1,
    relativeFpnFlux: 3.5,
    weightedContribution: 0.35,
  },
  {
    cellType: "Endothelial/pericyte",
    fractionOfCells: 0.05,
    relativeFpnFlux: 0.75,
    weightedContribution: 0.038,
  },
];

/** Parameter metadata for slider UI */
export const parameterMeta: ParameterMeta[] = [
  // Fpn kinetics group
  {
    key: "N_fpn",
    label: "Fpn copies/cell",
    min: 30,
    max: 300,
    step: 10,
    unit: "",
    confidence: "low",
    group: "fpn",
  },
  {
    key: "k_cat",
    label: "Fpn turnover rate",
    min: 1,
    max: 10,
    step: 0.5,
    unit: "s\u207B\u00B9",
    confidence: "moderate",
    group: "fpn",
  },
  {
    key: "f_ferroxidase",
    label: "Ferroxidase efficiency",
    min: 0.1,
    max: 1.0,
    step: 0.05,
    unit: "",
    confidence: "low",
    group: "fpn",
  },
  {
    key: "fpn_decline_rate",
    label: "Fpn annual decline",
    min: 0.002,
    max: 0.025,
    step: 0.001,
    unit: "/year",
    confidence: "low",
    group: "fpn",
  },
  // Glymphatic group
  {
    key: "k_gly",
    label: "Glymphatic rate",
    min: 2,
    max: 15,
    step: 0.5,
    unit: "/year",
    confidence: "moderate",
    group: "glymphatic",
  },
  {
    key: "gly_decline_rate",
    label: "Glymphatic annual decline",
    min: 0.002,
    max: 0.03,
    step: 0.001,
    unit: "/year",
    confidence: "low",
    group: "glymphatic",
  },
  {
    key: "aqp4_polarity",
    label: "AQP4 polarity",
    min: 0.2,
    max: 1.0,
    step: 0.05,
    unit: "",
    confidence: "moderate",
    group: "glymphatic",
  },
  // Advanced group
  {
    key: "rho",
    label: "ISF recapture (rho)",
    min: 0.5,
    max: 0.95,
    step: 0.01,
    unit: "",
    confidence: "low",
    group: "advanced",
  },
  {
    key: "phase1_threshold",
    label: "Phase 1 threshold",
    min: 1.05,
    max: 1.6,
    step: 0.05,
    unit: "x baseline",
    confidence: "moderate",
    group: "advanced",
  },
  {
    key: "phase2_threshold",
    label: "Phase 2 threshold",
    min: 1.2,
    max: 2.0,
    step: 0.05,
    unit: "x baseline",
    confidence: "moderate",
    group: "advanced",
  },
  {
    key: "J_uptake",
    label: "Iron uptake rate",
    min: 0.5,
    max: 3.0,
    step: 0.1,
    unit: "\u00B5M/year",
    confidence: "moderate",
    group: "advanced",
  },
];
