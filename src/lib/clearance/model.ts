/**
 * FELINE Clearance Model — 5-variable serial ODE system with feedback loops
 *
 * State variables: LIP, Ferritin, ISF, CSF, cumulative Damage
 * Primary pathway: Cell --Fpn+ferroxidase--> ISF --glymphatic--> CSF --> periphery
 *
 * Iron-coupled feedback loops:
 *  1. Cu depletion: cumulative oxidative damage → ferroxidase loss → Fpn stall
 *  2. Hepcidin: LIP elevation → microglial activation → IL-6 → hepcidin → Fpn loss
 *  3. Rho decline: cumulative damage → reduced recapture → more ISF NTBI → more damage
 *  4. Protein-iron: once damage exceeds threshold, Aβ/tau interactions mildly amplify iron uptake
 *
 * Design: effective rate constants calibrated so healthy e3/e3 brain at age 30
 * is near steady state. Feedback loops produce nonlinear acceleration in later phases.
 */

import type {
  ClearanceState,
  ClearanceParameters,
  ClearanceTimePoint,
  ClearanceResult,
} from "./types";
import { buildClearanceParameters } from "./parameters";

// ── State ↔ Array conversion ────────────────────────────────────────

const STATE_KEYS: (keyof ClearanceState)[] = [
  "Fe_LIP",
  "Fe_ferritin",
  "Fe_ISF",
  "Fe_CSF",
  "damage",
];

function stateToArray(s: ClearanceState): number[] {
  return STATE_KEYS.map((k) => s[k]);
}

function arrayToState(a: number[]): ClearanceState {
  const s: Record<string, number> = {};
  STATE_KEYS.forEach((k, i) => {
    s[k] = a[i];
  });
  return s as unknown as ClearanceState;
}

// ── Age-dependent modifiers ─────────────────────────────────────────

/** Fpn export modifier: age-dependent decline after 40 */
function fpnAgeModifier(age: number, p: ClearanceParameters): number {
  const decline = p.fpn_decline_rate * p.apoe_decline_accel;
  return Math.max(0.2, 1.0 - decline * Math.max(0, age - 40));
}

/** Glymphatic modifier: age-dependent decline after 30 */
function glyModifier(age: number, p: ClearanceParameters): number {
  const decline = p.gly_decline_rate * p.apoe_decline_accel;
  return Math.max(0.2, 1.0 - decline * Math.max(0, age - 30));
}

/** Sex modifier for iron uptake rate */
function sexModifier(age: number, p: ClearanceParameters): number {
  if (p.sex === "male") return 1.0;
  if (age < 51) return 0.75;
  return 1.1;
}

/** Disease perturbation multiplier on glymphatic clearance */
function diseaseGlyMultiplier(p: ClearanceParameters): number {
  let mult = 1.0;
  if (p.perturbations.hypertension) mult *= 1.0 - p.htn_gly_factor;
  if (p.perturbations.diabetes) mult *= 1.0 - p.dm_gly_factor;
  if (p.perturbations.sleepDisruption) mult *= 1.0 - p.sleep_gly_factor;
  return mult;
}

/** Static disease perturbation multiplier on Fpn (chronic hepcidin toggle + inflammaging) */
function diseaseStaticFpnMultiplier(p: ClearanceParameters): number {
  let mult = 1.0;
  if (p.perturbations.chronicHepcidin) mult *= 1.0 - p.hepcidin_fpn_factor;
  if (p.perturbations.hypertension) mult *= 0.95;
  if (p.perturbations.diabetes) mult *= 0.90;
  if (p.perturbations.sleepDisruption) mult *= 0.95;
  return mult;
}

// ── Ferroptosis phase detection ─────────────────────────────────────

function getPhase(
  Fe_LIP: number,
  baseline: number,
  p: ClearanceParameters
): 0 | 1 | 2 {
  const ratio = Fe_LIP / baseline;
  if (ratio >= p.phase2_threshold) return 2;
  if (ratio >= p.phase1_threshold) return 1;
  return 0;
}

// ── ODE derivatives ─────────────────────────────────────────────────

function derivatives(
  age: number,
  state: number[],
  p: ClearanceParameters,
  lipBaseline: number
): number[] {
  const s = arrayToState(state);
  const d = new Array(STATE_KEYS.length).fill(0);

  const lipRatio = s.Fe_LIP / lipBaseline;
  const lipExcess = Math.max(0, lipRatio - 1.0);
  const D = s.damage;

  // ── Feedback loop 1: Dynamic ferroxidase (Cu depletion) ─────────
  // Cumulative oxidative damage depletes Cu → ferroxidase activity drops
  const ferroxidase_eff = p.f_ferroxidase * Math.max(0.3, 1.0 - D);

  // ── Feedback loop 2: Dynamic hepcidin response ──────────────────
  // Elevated LIP → microglial activation → IL-6 → hepcidin → Fpn loss
  const hepcidin_dynamic = Math.min(0.6, p.k_hepcidin_response * lipExcess);

  // ── Combined Fpn modifier ───────────────────────────────────────
  const fpnMod =
    fpnAgeModifier(age, p) *
    diseaseStaticFpnMultiplier(p) *
    ferroxidase_eff *
    (1.0 - hepcidin_dynamic);

  const glyMod =
    glyModifier(age, p) * diseaseGlyMultiplier(p) * p.aqp4_polarity;
  const sexMod = sexModifier(age, p);

  // ── Feedback loop 4: Protein-iron amplifier ─────────────────────
  // Once damage exceeds threshold, Aβ-iron concentration and tau transport
  // disruption mildly increase effective iron burden
  const proteinAmp =
    D > p.protein_damage_threshold
      ? 1.0 + p.k_protein_amplifier * (D - p.protein_damage_threshold)
      : 1.0;

  // ── Compartment 1: LIP ──────────────────────────────────────────

  const J_uptake = p.J_uptake * sexMod * proteinAmp;
  const J_ferritinophagy = p.k_ferritinophagy * s.Fe_ferritin;
  const capFraction = Math.max(
    0,
    (p.ferritin_capacity - s.Fe_ferritin) / p.ferritin_capacity
  );
  const J_storage = p.k_storage * s.Fe_LIP * capFraction;

  const k_fpn_eff = (p.N_fpn / 150) * (p.k_cat / 5.0);
  const J_fpn_export = p.k_fpn_base * k_fpn_eff * s.Fe_LIP * fpnMod;

  const phase = getPhase(s.Fe_LIP, lipBaseline, p);
  const J_ferroptosis =
    phase === 2
      ? p.k_ferroptosis * (s.Fe_LIP - lipBaseline * p.phase2_threshold)
      : 0;

  d[0] =
    J_uptake + J_ferritinophagy - J_storage - J_fpn_export - J_ferroptosis;

  // ── Compartment 2: Ferritin ─────────────────────────────────────

  const J_EV = p.k_EV_secretion * s.Fe_ferritin;
  d[1] = J_storage - J_ferritinophagy - J_EV;

  // ── Compartment 3: ISF ──────────────────────────────────────────

  // ── Feedback loop 3: Rho declines with cumulative damage ────────
  // Damage → neurite retraction (Phase 1) + neuron death (Phase 2)
  // → reduced recapture surface → more NTBI persists in ISF
  const rho = p.rho * Math.max(0.4, 1.0 - p.k_rho_damage * D);

  const J_fpn_to_ISF = (1 - rho) * J_fpn_export;
  const J_glymphatic = p.k_gly * s.Fe_ISF * glyMod;

  d[2] = J_fpn_to_ISF + p.J_cell_death + p.J_BBB_leak - J_glymphatic;

  // ── Compartment 4: CSF ──────────────────────────────────────────

  const J_CSF_absorption = p.k_CSF_absorption * s.Fe_CSF;
  d[3] = J_glymphatic + p.J_CP_secretion - J_CSF_absorption;

  // ── Cumulative damage ───────────────────────────────────────────
  // Driven by LIP excess above baseline. Irreversible (no recovery term).
  // Represents: Cu depletion, oxidized Cp, damaged transporters, protein aggregation
  d[4] = p.k_oxidative_damage * lipExcess;

  return d;
}

// ── RK4 solver ──────────────────────────────────────────────────────

function rk4Step(
  age: number,
  y: number[],
  dt: number,
  p: ClearanceParameters,
  lipBaseline: number
): number[] {
  const k1 = derivatives(age, y, p, lipBaseline);
  const k2 = derivatives(
    age + dt / 2,
    y.map((v, i) => v + (dt / 2) * k1[i]),
    p,
    lipBaseline
  );
  const k3 = derivatives(
    age + dt / 2,
    y.map((v, i) => v + (dt / 2) * k2[i]),
    p,
    lipBaseline
  );
  const k4 = derivatives(
    age + dt,
    y.map((v, i) => v + dt * k3[i]),
    p,
    lipBaseline
  );

  return y.map(
    (v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
  );
}

/** Enforce physical bounds */
function clampState(y: number[]): number[] {
  const c = [...y];
  c[0] = Math.max(0.01, c[0]); // Fe_LIP > 0
  c[1] = Math.max(0, c[1]); // Fe_ferritin >= 0
  c[2] = Math.max(0, c[2]); // Fe_ISF >= 0
  c[3] = Math.max(0, c[3]); // Fe_CSF >= 0
  c[4] = Math.max(0, Math.min(1.0, c[4])); // damage 0-1
  return c;
}

/** Initial state */
function initialState(): ClearanceState {
  return {
    Fe_LIP: 2.5, // µM baseline
    Fe_ferritin: 25.0, // µM
    Fe_ISF: 0.005, // µM — near steady-state
    Fe_CSF: 61.0, // µg/L
    damage: 0.0, // no cumulative damage at start
  };
}

// ── Main simulation ─────────────────────────────────────────────────

export function simulateClearance(
  overrides: Partial<ClearanceParameters> = {},
  ageMax = 100,
  dt = 0.05,
  sampleInterval = 0.5
): ClearanceResult {
  const p = buildClearanceParameters(overrides);
  const init = initialState();
  const lipBaseline = init.Fe_LIP;
  let y = stateToArray(init);

  const timePoints: ClearanceTimePoint[] = [];
  let nextSample = p.startAge;
  let phase1Age: number | null = null;
  let phase2Age: number | null = null;

  const initGly =
    glyModifier(30, p) * diseaseGlyMultiplier(p) * p.aqp4_polarity;

  for (let age = p.startAge; age <= ageMax; age += dt) {
    if (age >= nextSample - dt / 2) {
      const s = arrayToState(y);
      const phase = getPhase(s.Fe_LIP, lipBaseline, p);

      if (phase >= 1 && phase1Age === null) phase1Age = age;
      if (phase === 2 && phase2Age === null) phase2Age = age;

      const D = s.damage;
      const rho = p.rho * Math.max(0.4, 1.0 - p.k_rho_damage * D);
      const ferroxidase_eff = p.f_ferroxidase * Math.max(0.3, 1.0 - D);

      timePoints.push({
        age: Math.round(age * 10) / 10,
        Fe_LIP: s.Fe_LIP,
        Fe_ferritin: s.Fe_ferritin,
        Fe_ISF: s.Fe_ISF,
        Fe_CSF: s.Fe_CSF,
        fpn_fraction: fpnAgeModifier(age, p) * diseaseStaticFpnMultiplier(p),
        gly_fraction:
          glyModifier(age, p) * diseaseGlyMultiplier(p) * p.aqp4_polarity,
        rho,
        damage: D,
        ferroxidase_eff,
        phase,
      });

      nextSample += sampleInterval;
    }

    y = rk4Step(age, y, dt, p, lipBaseline);
    y = clampState(y);
  }

  const at70 = timePoints.find((tp) => tp.age >= 70);
  const clearanceAt70 =
    at70 && initGly > 0 ? at70.gly_fraction / initGly : 1.0;

  return {
    timePoints,
    parameters: p,
    label: buildLabel(p),
    phase1Age,
    phase2Age,
    clearanceAt70,
    isfAt70: at70?.Fe_ISF ?? 0.005,
  };
}

function buildLabel(p: ClearanceParameters): string {
  const parts: string[] = [];

  if (p.apoe_genotype !== "e3/e3") parts.push(`APOE ${p.apoe_genotype}`);
  if (p.sex === "female") parts.push("Female");

  const perturbs: string[] = [];
  if (p.perturbations.hypertension) perturbs.push("HTN");
  if (p.perturbations.diabetes) perturbs.push("DM");
  if (p.perturbations.sleepDisruption) perturbs.push("Sleep");
  if (p.perturbations.chronicHepcidin) perturbs.push("Hepcidin");
  if (perturbs.length > 0) parts.push(perturbs.join("+"));

  return parts.length > 0 ? parts.join(", ") : "Healthy aging";
}
