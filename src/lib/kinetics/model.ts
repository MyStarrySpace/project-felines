import type {
  ModelState,
  ModelParameters,
  TimePoint,
  SimulationResult,
} from "./types";
import { buildParameters } from "./parameters";

/** Convert state object to array for RK4 */
const STATE_KEYS: (keyof ModelState)[] = [
  "Fe_free",
  "Fe_stored",
  "Fe_brain",
  "Abeta",
  "Tau",
  "GPX4",
  "Export_fx",
  "Lysosome_fx",
  "Insulation_fx",
  "Neurovascular_fx",
];

function stateToArray(s: ModelState): number[] {
  return STATE_KEYS.map((k) => s[k]);
}

function arrayToState(a: number[]): ModelState {
  const s: Record<string, number> = {};
  STATE_KEYS.forEach((k, i) => {
    s[k] = a[i];
  });
  return s as unknown as ModelState;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

/**
 * Acute iron release function.
 * Models the burst of iron from dying pericytes, oligodendrocytes, and
 * microglia in the first days-weeks after insult. Uses a broader pulse
 * than a literal cell-death curve because iron release continues as
 * microglia phagocytose debris and become overloaded (days to weeks).
 *
 * Returns release rate in iron-units per year.
 */
function ironReleasePulse(t: number, p: ModelParameters): number {
  // No iron pulse in spontaneous mode
  if (p.cascade_mode === "spontaneous") return 0;

  // Iron release peaks at ~1 week, with a long tail over months
  // as microglial overload causes secondary release.
  const peakYears = 0.02; // ~1 week
  const widthYears = 0.04; // ~2 weeks for main pulse
  const tailWidthYears = 0.3; // months for microglial secondary release
  const amplitude = p.damage_severity * p.repeated_insults;

  // Main pulse (pericyte/OL death)
  const mainPulse =
    amplitude * Math.exp(-0.5 * ((t - peakYears) / widthYears) ** 2);

  // Secondary tail (microglial overload, slower)
  const tailPeak = 0.08; // ~1 month
  const tailAmplitude = amplitude * 0.3;
  const tail =
    tailAmplitude *
    Math.exp(-0.5 * ((t - tailPeak) / tailWidthYears) ** 2);

  return mainPulse + tail;
}

/**
 * Compute derivatives for the FELINE kinetics system.
 * All rates are per-year.
 */
function derivatives(
  t: number,
  state: number[],
  p: ModelParameters
): number[] {
  const s = arrayToState(state);
  const d: number[] = new Array(STATE_KEYS.length).fill(0);

  const apoeClear = p.apoe_clearance_modifier;
  const apoeRecov = p.apoe_recovery_modifier;
  const isSpontaneous = p.cascade_mode === "spontaneous";
  const cumDamage = isSpontaneous
    ? 0
    : Math.min(0.9, p.damage_severity * (1 + 0.5 * (p.repeated_insults - 1)));

  // === IRON DYNAMICS ===

  const ironRelease = p.k_release * ironReleasePulse(t, p);

  // Ferritin capacity decreases as stores fill (capacity ~10 units)
  const ferritinCapFraction = Math.max(0, (10 - s.Fe_stored) / 10);
  const ironSequester = p.k_sequester * s.Fe_free * ferritinCapFraction;

  // Export depends on composite layer function
  const ironExport = p.k_export_base * s.Export_fx * s.Fe_free;

  // Ferroptosis consumes iron AND generates damage
  const ferroptosisRate =
    p.k_ferroptosis * s.Fe_free * Math.max(0, 1 - s.GPX4);

  // Secondary iron from neuronal death (late stage, when Abeta & Tau high)
  const secondaryIron =
    p.k_aggregation_death * Math.max(0, s.Abeta - 1.0) * s.Tau;

  // d[Fe_free]/dt: released + secondary - sequestered - exported - consumed by ferroptosis
  d[0] =
    ironRelease +
    secondaryIron -
    ironSequester -
    ironExport -
    ferroptosisRate * 0.1; // ferroptosis consumes some free iron

  // d[Fe_stored]/dt: sequestered iron with slow baseline turnover
  // Stored iron has a long half-life but slowly turns over
  d[1] = ironSequester - 0.01 * s.Fe_stored;

  // d[Fe_brain]/dt: total brain iron = free + stored (derivative = sum)
  d[2] = d[0] + d[1];

  // === AMYLOID ACCUMULATION ===

  // Composite clearance from all FELINE layers
  const kClearance =
    (p.k_clearance_lysosomal * s.Lysosome_fx +
      p.k_clearance_glymphatic * s.Export_fx * s.Neurovascular_fx +
      p.k_clearance_insulation * s.Insulation_fx) *
    apoeClear;

  // Iron-driven Aβ production: zero in spontaneous mode (amyloid driven by clearance decline)
  const ironAbeta = isSpontaneous
    ? 0
    : p.k_iron_abeta * Math.max(0, s.Fe_brain - 1.1);

  // Autocatalytic seeding above threshold (prion-like)
  let seedingTerm = 0;
  if (s.Abeta > p.seed_threshold) {
    const excess = s.Abeta - p.seed_threshold;
    seedingTerm = p.k_seed * excess ** p.seed_exponent;
  }

  // Logistic carrying capacity (K=4.0 SUVR, regional saturation)
  const K = 4.0;
  const logisticBrake = Math.max(0, 1 - s.Abeta / K);

  d[3] =
    (p.k_production + ironAbeta + seedingTerm - kClearance * s.Abeta) *
    logisticBrake;

  // === TAU AGGREGATION ===

  // Tau seeding driven by amyloid once above threshold
  let tauSeed = 0;
  if (s.Abeta > p.seed_threshold) {
    tauSeed = p.k_tau_seed * (s.Abeta - p.seed_threshold);
  }

  // In spontaneous mode, tau is purely amyloid-dependent (no ferroptosis/iron drive)
  const ferroptTauDrive = isSpontaneous ? 0 : ferroptosisRate * 0.05;
  const ironTauDrive = isSpontaneous
    ? 0
    : 0.002 * Math.max(0, s.Fe_brain - 1.1);

  d[4] =
    p.k_tau_production +
    tauSeed +
    ferroptTauDrive +
    ironTauDrive -
    p.k_tau_clearance * s.Tau * s.Lysosome_fx;

  // === GPX4 RECOVERY ===

  // GPX4 is depleted by ferroptosis pressure, recovers naturally
  const gpx4Pressure = 2.0 * s.Fe_free; // high iron depletes GPX4
  d[5] = p.k_gpx4_recovery * (1 - s.GPX4) - gpx4Pressure * s.GPX4;

  // === FELINE LAYER DYNAMICS ===

  if (isSpontaneous) {
    // Spontaneous mode: layers track a slowly declining age-dependent target
    const floor = p.k_age_floor;
    const exportTarget = Math.max(floor, 1.0 - p.k_age_export * t);
    const lysoTarget = Math.max(floor, 1.0 - p.k_age_lysosome * t);
    const insulTarget = Math.max(floor, 1.0 - p.k_age_insulation * t);
    const nvsTarget = Math.max(floor, 1.0 - p.k_age_neurovascular * t);

    d[6] = p.k_export_recovery * apoeRecov * (exportTarget - s.Export_fx);
    d[7] = p.k_lysosome_recovery * apoeRecov * (lysoTarget - s.Lysosome_fx);
    d[8] = p.k_insulation_recovery * apoeRecov * (insulTarget - s.Insulation_fx);
    d[9] = p.k_neurovascular_recovery * apoeRecov * (nvsTarget - s.Neurovascular_fx);
  } else {
    // Post-injury mode: layers recover toward damage-limited targets
    const exportTarget = 1 - cumDamage * 0.55;
    d[6] = p.k_export_recovery * apoeRecov * (exportTarget - s.Export_fx);

    const lysoTarget = 1 - cumDamage * 0.45;
    d[7] = p.k_lysosome_recovery * apoeRecov * (lysoTarget - s.Lysosome_fx);

    const insulTarget = 1 - cumDamage * 0.35;
    d[8] = p.k_insulation_recovery * apoeRecov * (insulTarget - s.Insulation_fx);

    const nvsTarget = 1 - cumDamage * 0.45;
    d[9] = p.k_neurovascular_recovery * apoeRecov * (nvsTarget - s.Neurovascular_fx);
  }

  return d;
}

/** Fourth-order Runge-Kutta step */
function rk4Step(
  t: number,
  y: number[],
  dt: number,
  p: ModelParameters
): number[] {
  const k1 = derivatives(t, y, p);
  const k2 = derivatives(
    t + dt / 2,
    y.map((v, i) => v + (dt / 2) * k1[i]),
    p
  );
  const k3 = derivatives(
    t + dt / 2,
    y.map((v, i) => v + (dt / 2) * k2[i]),
    p
  );
  const k4 = derivatives(
    t + dt,
    y.map((v, i) => v + dt * k3[i]),
    p
  );

  return y.map(
    (v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
  );
}

/**
 * Initial state — depends on cascade mode.
 *
 * Post-injury: layers set to post-damage values immediately.
 * Spontaneous: all layers start at 1.0, iron at baseline.
 */
function initialState(p: ModelParameters): ModelState {
  if (p.cascade_mode === "spontaneous") {
    return {
      Fe_free: 0.1,
      Fe_stored: 1.0,
      Fe_brain: 1.1,
      Abeta: 0.8,
      Tau: 1.0,
      GPX4: 0.95,
      Export_fx: 1.0,
      Lysosome_fx: 1.0,
      Insulation_fx: 1.0,
      Neurovascular_fx: 1.0,
    };
  }

  // Post-injury mode
  const sev = p.damage_severity;
  const insults = p.repeated_insults;
  const cumDamage = Math.min(0.9, sev * (1 + 0.5 * (insults - 1)));

  return {
    Fe_free: 0.1 + cumDamage * 4.0,
    Fe_stored: 1.0,
    Fe_brain: 1.1 + cumDamage * 4.0,
    Abeta: 0.8,
    Tau: 1.0,
    GPX4: Math.max(0.2, 0.95 - cumDamage * 0.6),
    Export_fx: Math.max(0.1, 1.0 - cumDamage * 0.7),
    Lysosome_fx: Math.max(0.2, 1.0 - cumDamage * 0.5),
    Insulation_fx: Math.max(0.2, 1.0 - cumDamage * 0.45),
    Neurovascular_fx: Math.max(0.1, 1.0 - cumDamage * 0.6),
  };
}

/** Enforce physical bounds on state */
function clampState(y: number[]): number[] {
  const clamped = [...y];
  clamped[0] = Math.max(0, clamped[0]); // Fe_free >= 0
  clamped[1] = Math.max(0, clamped[1]); // Fe_stored >= 0
  clamped[2] = Math.max(0, clamped[2]); // Fe_brain >= 0
  clamped[3] = Math.max(0.4, clamped[3]); // Abeta >= 0.4
  clamped[4] = Math.max(0.8, clamped[4]); // Tau >= 0.8 SUVR
  clamped[5] = clamp(clamped[5], 0, 1); // GPX4 0-1
  clamped[6] = clamp(clamped[6], 0.05, 1); // Export_fx
  clamped[7] = clamp(clamped[7], 0.1, 1); // Lysosome_fx
  clamped[8] = clamp(clamped[8], 0.1, 1); // Insulation_fx
  clamped[9] = clamp(clamped[9], 0.05, 1); // Neurovascular_fx
  return clamped;
}

/**
 * Run the FELINE kinetics simulation.
 *
 * @param overrides — partial parameter overrides
 * @param tMax — simulation end time in years (default 50)
 * @param dt — integration step in years (default 0.005)
 * @param sampleInterval — output sampling interval in years (default 0.1)
 */
export function simulate(
  overrides: Partial<ModelParameters> = {},
  tMax = 50,
  dt = 0.005,
  sampleInterval = 0.1
): SimulationResult {
  const p = buildParameters(overrides);
  let y = stateToArray(initialState(p));
  const timePoints: TimePoint[] = [];

  let nextSample = 0;

  for (let t = 0; t <= tMax; t += dt) {
    if (t >= nextSample - dt / 2) {
      const s = arrayToState(y);
      timePoints.push({ t: Math.round(t * 10) / 10, ...s });
      nextSample += sampleInterval;
    }

    y = rk4Step(t, y, dt, p);
    y = clampState(y);
  }

  return {
    timePoints,
    parameters: p,
    label:
      p.cascade_mode === "spontaneous"
        ? `Spontaneous AD, ${p.apoe_genotype}`
        : `${p.damage_severity * 100}% damage, ${p.apoe_genotype}, ${p.repeated_insults} insult(s)`,
  };
}
