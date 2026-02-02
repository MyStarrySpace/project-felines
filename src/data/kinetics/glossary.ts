/** Glossary of technical terms and interpretation ranges for chart values */

export interface GlossaryEntry {
  term: string;
  short: string;
  definition: string;
}

export interface InterpretationRange {
  min: number;
  max: number;
  label: string;
  severity: "normal" | "mild" | "elevated" | "high" | "severe";
}

export interface VariableInterpretation {
  /** Display name for tooltips */
  displayName: string;
  /** Unit label */
  unit: string;
  /** What baseline (1.0) means in plain language */
  baselineNote: string;
  /** Ranges for interpreting values */
  ranges: InterpretationRange[];
}

/** Term definitions for inline tooltips */
export const glossary: Record<string, GlossaryEntry> = {
  SUVR: {
    term: "SUVR",
    short: "Standardized Uptake Value Ratio",
    definition:
      "A PET scan measurement that compares protein buildup in the brain to a reference region. 0.8-1.0 is normal. Above 1.2 means proteins are clumping into plaques.",
  },
  GPX4: {
    term: "GPX4",
    short: "Glutathione Peroxidase 4",
    definition:
      "An enzyme that protects cells from iron-driven damage (ferroptosis). Think of it as the cell's fire extinguisher. When GPX4 drops below 30%, cells become vulnerable to destruction.",
  },
  QSM: {
    term: "QSM",
    short: "Quantitative Susceptibility Mapping",
    definition:
      "An MRI technique that measures iron concentration in the brain. Higher values mean more iron accumulation. Standard blood tests miss brain-specific iron changes.",
  },
  ferroptosis: {
    term: "Ferroptosis",
    short: "Iron-driven cell death",
    definition:
      "A type of cell death triggered by iron reacting with fats in cell membranes. The cell's membrane breaks down, releasing more iron and creating a chain reaction.",
  },
  nucleation: {
    term: "Nucleation threshold",
    short: "The tipping point for plaque formation",
    definition:
      "The amyloid level (1.2 SUVR) where proteins start clumping into plaques that grow on their own. Below this level, the brain can still clear amyloid. Above it, accumulation accelerates.",
  },
  AQP4: {
    term: "AQP4",
    short: "Aquaporin-4",
    definition:
      "Water channels on brain cells that drive the glymphatic (brain waste clearance) system. When AQP4 channels mislocalize after injury, the brain's ability to flush out waste drops.",
  },
  pericytes: {
    term: "Pericytes",
    short: "Blood vessel support cells",
    definition:
      "Cells that wrap around brain blood vessels, maintaining the blood-brain barrier. They die early in injury cascades, releasing stored iron into surrounding tissue.",
  },
  glymphatic: {
    term: "Glymphatic system",
    short: "Brain waste clearance",
    definition:
      "The brain's drainage system, most active during sleep. Fluid flows along blood vessels to flush waste proteins (including amyloid and tau). Depends on AQP4 channels and healthy blood vessels.",
  },
  APOE: {
    term: "APOE",
    short: "Apolipoprotein E",
    definition:
      "A gene that affects how well the brain clears amyloid. The e4 variant reduces clearance by ~35%, which is why it's the strongest genetic risk factor for Alzheimer's.",
  },
  ferritin: {
    term: "Ferritin",
    short: "Iron storage protein",
    definition:
      "A protein cage that safely stores iron. Each ferritin molecule can hold up to 4,500 iron atoms. When ferritin capacity is overwhelmed, free iron accumulates and causes damage.",
  },
};

/** Interpretation ranges for chart variables */
export const interpretations: Record<string, VariableInterpretation> = {
  Fe_free: {
    displayName: "Free iron",
    unit: "x normal",
    baselineNote: "1.0 = normal free iron level",
    ranges: [
      { min: 0, max: 0.5, label: "Low", severity: "normal" },
      { min: 0.5, max: 1.5, label: "Normal", severity: "normal" },
      { min: 1.5, max: 3.0, label: "Elevated", severity: "elevated" },
      { min: 3.0, max: 5.0, label: "High", severity: "high" },
      { min: 5.0, max: Infinity, label: "Severe", severity: "severe" },
    ],
  },
  Fe_stored: {
    displayName: "Stored iron (ferritin)",
    unit: "units",
    baselineNote: "1.0 = normal stores; capacity ~10 units",
    ranges: [
      { min: 0, max: 2, label: "Normal", severity: "normal" },
      { min: 2, max: 5, label: "Elevated", severity: "mild" },
      { min: 5, max: 8, label: "High", severity: "elevated" },
      { min: 8, max: Infinity, label: "Near capacity", severity: "severe" },
    ],
  },
  Fe_brain: {
    displayName: "Total brain iron",
    unit: "x normal",
    baselineNote: "1.1 = normal (MRI-visible via QSM)",
    ranges: [
      { min: 0, max: 1.5, label: "Normal", severity: "normal" },
      { min: 1.5, max: 3.0, label: "Elevated", severity: "elevated" },
      { min: 3.0, max: 5.0, label: "High", severity: "high" },
      { min: 5.0, max: Infinity, label: "Severe", severity: "severe" },
    ],
  },
  Abeta: {
    displayName: "Amyloid",
    unit: "SUVR",
    baselineNote: "0.8-1.0 = normal; measured by PET scan",
    ranges: [
      { min: 0, max: 1.0, label: "Normal", severity: "normal" },
      { min: 1.0, max: 1.2, label: "Borderline", severity: "mild" },
      { min: 1.2, max: 2.0, label: "Plaque formation", severity: "elevated" },
      { min: 2.0, max: 3.0, label: "Heavy burden", severity: "high" },
      { min: 3.0, max: Infinity, label: "Severe", severity: "severe" },
    ],
  },
  Tau: {
    displayName: "Tau",
    unit: "SUVR",
    baselineNote: "~1.0 = normal; measured by PET scan",
    ranges: [
      { min: 0, max: 1.2, label: "Normal", severity: "normal" },
      { min: 1.2, max: 1.4, label: "Borderline", severity: "mild" },
      { min: 1.4, max: 2.0, label: "Elevated", severity: "elevated" },
      { min: 2.0, max: Infinity, label: "AD-level", severity: "severe" },
    ],
  },
  GPX4: {
    displayName: "GPX4",
    unit: "% capacity",
    baselineNote: "1.0 = fully active enzyme",
    ranges: [
      { min: 0.7, max: Infinity, label: "Healthy", severity: "normal" },
      { min: 0.5, max: 0.7, label: "Reduced", severity: "mild" },
      { min: 0.3, max: 0.5, label: "Compromised", severity: "elevated" },
      { min: 0, max: 0.3, label: "Critical", severity: "severe" },
    ],
  },
  Export_fx: {
    displayName: "Export function",
    unit: "% capacity",
    baselineNote: "1.0 = fully intact clearance",
    ranges: [
      { min: 0.7, max: Infinity, label: "Functional", severity: "normal" },
      { min: 0.5, max: 0.7, label: "Reduced", severity: "mild" },
      { min: 0.3, max: 0.5, label: "Impaired", severity: "elevated" },
      { min: 0, max: 0.3, label: "Failing", severity: "severe" },
    ],
  },
  Lysosome_fx: {
    displayName: "Lysosome function",
    unit: "% capacity",
    baselineNote: "1.0 = fully intact",
    ranges: [
      { min: 0.7, max: Infinity, label: "Functional", severity: "normal" },
      { min: 0.5, max: 0.7, label: "Reduced", severity: "mild" },
      { min: 0.3, max: 0.5, label: "Impaired", severity: "elevated" },
      { min: 0, max: 0.3, label: "Failing", severity: "severe" },
    ],
  },
  Insulation_fx: {
    displayName: "Insulation",
    unit: "% capacity",
    baselineNote: "1.0 = fully intact myelin + ferritin",
    ranges: [
      { min: 0.7, max: Infinity, label: "Intact", severity: "normal" },
      { min: 0.5, max: 0.7, label: "Thinning", severity: "mild" },
      { min: 0.3, max: 0.5, label: "Degraded", severity: "elevated" },
      { min: 0, max: 0.3, label: "Failed", severity: "severe" },
    ],
  },
  Neurovascular_fx: {
    displayName: "Neurovascular",
    unit: "% capacity",
    baselineNote: "1.0 = fully intact blood-brain barrier",
    ranges: [
      { min: 0.7, max: Infinity, label: "Intact", severity: "normal" },
      { min: 0.5, max: 0.7, label: "Leaking", severity: "mild" },
      { min: 0.3, max: 0.5, label: "Compromised", severity: "elevated" },
      { min: 0, max: 0.3, label: "Broken down", severity: "severe" },
    ],
  },
};

/** Get interpretation label + severity for a given variable value */
export function interpret(
  variable: string,
  value: number
): { label: string; severity: InterpretationRange["severity"] } | null {
  const interp = interpretations[variable];
  if (!interp) return null;
  for (const range of interp.ranges) {
    if (value >= range.min && value < range.max) {
      return { label: range.label, severity: range.severity };
    }
  }
  return null;
}

/** Severity to color mapping */
export const severityColors: Record<InterpretationRange["severity"], string> = {
  normal: "#059669",
  mild: "#D97706",
  elevated: "#EA580C",
  high: "#DC2626",
  severe: "#991B1B",
};
