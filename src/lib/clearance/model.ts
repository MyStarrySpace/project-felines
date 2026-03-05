/**
 * FELINE Clearance Model v2 — 3-state ODE, CSF algebraic
 *
 * State: [Fe_LIP, Fe_ferritin, Fe_ISF]
 * Core pathway: uptake → LIP ⇌ ferritin, LIP → Fpn → ISF → glymphatic → out
 * CSF computed algebraically (equilibrates in hours, model timescale = years).
 * Acceleration from age-dependent decline in Fpn and glymphatic clearance.
 * Optional extensions toggled independently.
 */

import type {
  ClearanceState,
  ClearanceParameters,
  ClearanceTimePoint,
  ClearanceResult,
} from "./types";
import { buildClearanceParameters, BASELINES, CSF_BASELINE_UM } from "./parameters";
import type { CoreParameters, OptionalExtensions } from "./types";

// ── State ↔ Array ───────────────────────────────────────────────────

const STATE_KEYS: (keyof ClearanceState)[] = [
  "Fe_LIP", "Fe_ferritin", "Fe_ISF",
];

function stateToArray(s: ClearanceState): number[] {
  return STATE_KEYS.map((k) => s[k]);
}

function arrayToState(a: number[]): ClearanceState {
  return {
    Fe_LIP: a[0],
    Fe_ferritin: a[1],
    Fe_ISF: a[2],
  };
}

// ── Age-dependent modifiers ─────────────────────────────────────────

/** Fpn export modifier: linear decline after age 40 */
function fpnAgeMod(age: number, p: ClearanceParameters): number {
  const rate = p.fpn_decline_rate * p.apoe_decline_accel;
  return Math.max(0.2, 1.0 - rate * Math.max(0, age - 40));
}

/** Glymphatic modifier: linear decline after age 30 */
function glyAgeMod(age: number, p: ClearanceParameters): number {
  const rate = p.gly_decline_rate * p.apoe_decline_accel;
  return Math.max(0.2, 1.0 - rate * Math.max(0, age - 30));
}

/** Sex modifier for iron uptake — smooth sigmoid menopause transition */
function sexMod(age: number, p: ClearanceParameters): number {
  if (p.sex === "male") return 1.0;
  // Sigmoid transition centered at age 51, ~5-year perimenopause window
  const preMeno = 0.75;  // menstrual iron loss offsets uptake
  const postMeno = 1.1;  // accelerated accumulation
  const sigmoid = 1 / (1 + Math.exp(-0.8 * (age - 51)));
  return preMeno + (postMeno - preMeno) * sigmoid;
}

// ── Sex-specific steady-state ────────────────────────────────────────

/** Compute initial steady-state for given parameters (accounts for sex) */
function computeSteadyState(p: ClearanceParameters): ClearanceState {
  const sMod = sexMod(p.startAge, p);
  const J = p.J_uptake * sMod;

  // LIP: J_uptake * sexMod = k_fpn_eff * Fe_LIP (no age decline at startAge)
  const Fe_LIP = J / p.k_fpn_eff;

  // Ferritin: solve k_storage * LIP * capFrac = k_fp * Fe_ferritin
  const Fe_ferritin = p.k_storage * Fe_LIP * p.ferritin_capacity /
    (p.k_ferritinophagy_basal * p.ferritin_capacity + p.k_storage * Fe_LIP);

  // ISF: (1-rho) * k_fpn_eff * Fe_LIP = k_gly * Fe_ISF
  const Fe_ISF = (1 - p.rho) * p.k_fpn_eff * Fe_LIP / p.k_gly;

  return { Fe_LIP, Fe_ferritin, Fe_ISF };
}

// ── Extension modifiers ─────────────────────────────────────────────

function diseaseGlyMultiplier(ext: OptionalExtensions): number {
  let m = 1.0;
  if (ext.hypertension.enabled) m *= (1.0 - ext.hypertension.gly_reduction);
  if (ext.diabetes.enabled) m *= (1.0 - ext.diabetes.gly_reduction);
  if (ext.sleepDisruption.enabled) m *= (1.0 - ext.sleepDisruption.gly_reduction);
  return m;
}

function diseaseFpnMultiplier(ext: OptionalExtensions): number {
  let m = 1.0;
  if (ext.chronicHepcidin.enabled) m *= (1.0 - ext.chronicHepcidin.fpn_reduction);
  return m;
}

// ── Phase detection ─────────────────────────────────────────────────

function getPhase(
  Fe_LIP: number,
  baseline: number,
  p: ClearanceParameters,
): 0 | 1 | 2 {
  const ratio = Fe_LIP / baseline;
  if (ratio >= p.phase2_threshold) return 2;
  if (ratio >= p.phase1_threshold) return 1;
  return 0;
}

// ── CSF algebraic computation ───────────────────────────────────────
// CSF equilibrates in hours (turnover 3.5x/day). On our yearly timescale,
// CSF concentration is always at quasi-steady-state:
//   Fe_CSF = (J_glymphatic + J_CP) / k_CSF

function computeCSF(
  Fe_ISF: number,
  age: number,
  p: ClearanceParameters,
): number {
  const glyMod = glyAgeMod(age, p) * diseaseGlyMultiplier(p.extensions);
  const J_gly = p.k_gly * Fe_ISF * glyMod;
  return (J_gly + p.J_CP_secretion) / p.k_CSF_absorption;
}

// ── ODE derivatives (3-state) ───────────────────────────────────────

function derivatives(
  age: number,
  state: number[],
  p: ClearanceParameters,
  lipBaseline: number,
): number[] {
  const s = arrayToState(state);
  const ext = p.extensions;

  // Modifiers
  const fpnMod = fpnAgeMod(age, p) * diseaseFpnMultiplier(ext);
  const glyMod = glyAgeMod(age, p) * diseaseGlyMultiplier(ext);
  const sMod = sexMod(age, p);

  // ── LIP ───────────────────────────────────────────────────────
  const J_uptake = p.J_uptake * sMod;

  // Ferritin storage (saturable)
  const capFrac = Math.max(0, (p.ferritin_capacity - s.Fe_ferritin) / p.ferritin_capacity);
  const J_storage = p.k_storage * s.Fe_LIP * capFrac;

  // Ferritinophagy: basal (always active) + optional extra
  const k_fp = p.k_ferritinophagy_basal
    + (ext.ferritinophagy.enabled ? ext.ferritinophagy.k_ferritinophagy_extra : 0);
  const J_ferritinophagy = k_fp * s.Fe_ferritin;

  // Fpn export
  const J_fpn = p.k_fpn_eff * s.Fe_LIP * fpnMod;

  // Ferroptosis consumption (optional)
  const phase = getPhase(s.Fe_LIP, lipBaseline, p);
  const J_ferroptosis = (ext.ferroptosisConsumption.enabled && phase === 2)
    ? ext.ferroptosisConsumption.k_ferroptosis * (s.Fe_LIP - lipBaseline * p.phase2_threshold)
    : 0;

  const dLIP = J_uptake + J_ferritinophagy - J_storage - J_fpn - J_ferroptosis;

  // ── Ferritin ──────────────────────────────────────────────────
  const dFerritin = J_storage - J_ferritinophagy;

  // ── ISF ───────────────────────────────────────────────────────
  const J_fpn_to_ISF = (1 - p.rho) * J_fpn;
  const J_glymphatic = p.k_gly * s.Fe_ISF * glyMod;
  const J_BBB = ext.bbbLeak.enabled ? ext.bbbLeak.J_BBB_leak : 0;

  const dISF = J_fpn_to_ISF + J_BBB - J_glymphatic;

  return [dLIP, dFerritin, dISF];
}

// ── RK4 solver ──────────────────────────────────────────────────────

function rk4Step(
  age: number,
  y: number[],
  dt: number,
  p: ClearanceParameters,
  lipBaseline: number,
): number[] {
  const k1 = derivatives(age, y, p, lipBaseline);
  const k2 = derivatives(
    age + dt / 2,
    y.map((v, i) => v + (dt / 2) * k1[i]),
    p, lipBaseline,
  );
  const k3 = derivatives(
    age + dt / 2,
    y.map((v, i) => v + (dt / 2) * k2[i]),
    p, lipBaseline,
  );
  const k4 = derivatives(
    age + dt,
    y.map((v, i) => v + dt * k3[i]),
    p, lipBaseline,
  );
  return y.map(
    (v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]),
  );
}

function clampState(y: number[]): number[] {
  return [
    Math.max(0.01, y[0]),  // Fe_LIP > 0
    Math.max(0, y[1]),      // Fe_ferritin >= 0
    Math.max(0, y[2]),      // Fe_ISF >= 0
  ];
}

// ── Main simulation ─────────────────────────────────────────────────

export function simulateClearance(
  coreOverrides: Partial<CoreParameters> = {},
  extensionOverrides: Partial<OptionalExtensions> = {},
  ageMax = 100,
  dt = 0.05,
  sampleInterval = 0.5,
): ClearanceResult {
  const p = buildClearanceParameters(coreOverrides, extensionOverrides);
  const init = computeSteadyState(p);
  const lipBaseline = init.Fe_LIP;
  let y = stateToArray(init);

  const timePoints: ClearanceTimePoint[] = [];
  let nextSample = p.startAge;
  let phase1Age: number | null = null;
  let phase2Age: number | null = null;

  const initGly = glyAgeMod(30, p) * diseaseGlyMultiplier(p.extensions);

  for (let age = p.startAge; age <= ageMax; age += dt) {
    if (age >= nextSample - dt / 2) {
      const s = arrayToState(y);
      const phase = getPhase(s.Fe_LIP, lipBaseline, p);

      if (phase >= 1 && phase1Age === null) phase1Age = age;
      if (phase === 2 && phase2Age === null) phase2Age = age;

      // CSF computed algebraically
      const Fe_CSF = computeCSF(s.Fe_ISF, age, p);

      timePoints.push({
        age: Math.round(age * 10) / 10,
        Fe_LIP: s.Fe_LIP,
        Fe_ferritin: s.Fe_ferritin,
        Fe_ISF: s.Fe_ISF,
        Fe_CSF,
        fpn_fraction: fpnAgeMod(age, p) * diseaseFpnMultiplier(p.extensions),
        gly_fraction: glyAgeMod(age, p) * diseaseGlyMultiplier(p.extensions),
        phase,
      });

      nextSample += sampleInterval;
    }

    y = rk4Step(age, y, dt, p, lipBaseline);
    y = clampState(y);
  }

  const at70 = timePoints.find((tp) => tp.age >= 70);
  const clearanceAt70 = at70 && initGly > 0 ? at70.gly_fraction / initGly : 1.0;

  return {
    timePoints,
    parameters: p,
    baselines: init,
    label: buildLabel(p),
    phase1Age,
    phase2Age,
    clearanceAt70,
    isfAt70: at70?.Fe_ISF ?? init.Fe_ISF,
  };
}

function buildLabel(p: ClearanceParameters): string {
  const parts: string[] = [];
  if (p.apoe_genotype !== "e3/e3") parts.push(`APOE ${p.apoe_genotype}`);
  if (p.sex === "female") parts.push("Female");

  const ext = p.extensions;
  const perturbs: string[] = [];
  if (ext.hypertension.enabled) perturbs.push("HTN");
  if (ext.diabetes.enabled) perturbs.push("DM");
  if (ext.sleepDisruption.enabled) perturbs.push("Sleep");
  if (ext.chronicHepcidin.enabled) perturbs.push("Hepcidin");
  if (ext.bbbLeak.enabled) perturbs.push("BBB leak");
  if (perturbs.length > 0) parts.push(perturbs.join("+"));

  return parts.length > 0 ? parts.join(", ") : "Healthy aging";
}
