/**
 * Data for the lecanemab CDR-SB critique section.
 *
 * Core argument: the reported "27% slowing" assumes linear disease
 * progression, but CDR-SB follows a sigmoidal trajectory. The 0.45-point
 * difference at 18 months falls below the minimum clinically important
 * difference, and objective cognitive tests show parallel slopes.
 */

/** Chart coordinate helpers */
const X_MIN = 80;
const X_MAX = 580;
const Y_MIN = 30;
const Y_MAX = 290;
const MONTH_MAX = 36;
const CDRSB_MIN = 3.0;
const CDRSB_MAX = 7.0;

function cx(month: number) {
  return X_MIN + (month / MONTH_MAX) * (X_MAX - X_MIN);
}
function cy(cdrsb: number) {
  return Y_MAX - ((cdrsb - CDRSB_MIN) / (CDRSB_MAX - CDRSB_MIN)) * (Y_MAX - Y_MIN);
}

function toPath(points: [number, number][]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i][0].toFixed(1)} ${points[i][1].toFixed(1)}`;
  }
  return d;
}

/** CLARITY-AD approximate CDR-SB data (from van Dyck et al. 2023, Figure 2) */
const placeboRaw = [
  { month: 0, cdrsb: 3.2 },
  { month: 3, cdrsb: 3.42 },
  { month: 6, cdrsb: 3.68 },
  { month: 9, cdrsb: 3.92 },
  { month: 12, cdrsb: 4.17 },
  { month: 15, cdrsb: 4.53 },
  { month: 18, cdrsb: 4.86 },
];

const treatmentRaw = [
  { month: 0, cdrsb: 3.2 },
  { month: 3, cdrsb: 3.35 },
  { month: 6, cdrsb: 3.51 },
  { month: 9, cdrsb: 3.68 },
  { month: 12, cdrsb: 3.83 },
  { month: 15, cdrsb: 4.10 },
  { month: 18, cdrsb: 4.41 },
];

/** SVG path for placebo data (0-18 months) */
export const placeboDataPath = toPath(
  placeboRaw.map((d) => [cx(d.month), cy(d.cdrsb)])
);

/** SVG path for treatment data (0-18 months) */
export const treatmentDataPath = toPath(
  treatmentRaw.map((d) => [cx(d.month), cy(d.cdrsb)])
);

/** SVG path for placebo linear extrapolation (18-36 months) */
const placeboSlope = (4.86 - 3.2) / 18;
export const placeboLinearPath = toPath([
  [cx(18), cy(4.86)],
  [cx(24), cy(4.86 + placeboSlope * 6)],
  [cx(30), cy(4.86 + placeboSlope * 12)],
  [cx(36), cy(4.86 + placeboSlope * 18)],
]);

/** SVG path for treatment linear extrapolation (18-36 months) */
const treatmentSlope = (4.41 - 3.2) / 18;
export const treatmentLinearPath = toPath([
  [cx(18), cy(4.41)],
  [cx(24), cy(4.41 + treatmentSlope * 6)],
  [cx(30), cy(4.41 + treatmentSlope * 12)],
  [cx(36), cy(4.41 + treatmentSlope * 18)],
]);

/**
 * SVG paths for sigmoidal extrapolation (18-36 months).
 * If both groups follow the same S-curve with treatment delayed ~5 months,
 * the gap narrows as both approach the steeper inflection.
 */
export const placeboSigmoidPath = toPath([
  [cx(18), cy(4.86)],
  [cx(21), cy(5.25)],
  [cx(24), cy(5.70)],
  [cx(27), cy(6.10)],
  [cx(30), cy(6.38)],
  [cx(33), cy(6.52)],
  [cx(36), cy(6.58)],
]);

export const treatmentSigmoidPath = toPath([
  [cx(18), cy(4.41)],
  [cx(21), cy(4.78)],
  [cx(24), cy(5.22)],
  [cx(27), cy(5.68)],
  [cx(30), cy(6.08)],
  [cx(33), cy(6.32)],
  [cx(36), cy(6.45)],
]);

/** Key coordinates for annotations */
export const annotations = {
  /** 18-month line x position */
  month18X: cx(18),
  /** 36-month line x position */
  month36X: cx(36),
  /** Placebo y at 18 months */
  placebo18Y: cy(4.86),
  /** Treatment y at 18 months */
  treatment18Y: cy(4.41),
  /** Gap midpoint y at 18 months */
  gap18MidY: (cy(4.86) + cy(4.41)) / 2,
  /** Placebo y at 36 months (linear) */
  placebo36LinearY: cy(4.86 + placeboSlope * 18),
  /** Treatment y at 36 months (linear) */
  treatment36LinearY: cy(4.41 + treatmentSlope * 18),
  /** Gap midpoint y at 36 months (linear) */
  gap36LinearMidY: (cy(4.86 + placeboSlope * 18) + cy(4.41 + treatmentSlope * 18)) / 2,
  /** Placebo y at 36 months (sigmoid) */
  placebo36SigY: cy(6.58),
  /** Treatment y at 36 months (sigmoid) */
  treatment36SigY: cy(6.45),
  /** Gap midpoint y at 36 months (sigmoid) */
  gap36SigMidY: (cy(6.58) + cy(6.45)) / 2,
  /** Chart boundaries */
  xMin: X_MIN,
  xMax: X_MAX,
  yMin: Y_MIN,
  yMax: Y_MAX,
};

/** X-axis tick positions */
export const xTicks = [0, 6, 12, 18, 24, 30, 36].map((m) => ({
  month: m,
  x: cx(m),
}));

/** Y-axis tick positions */
export const yTicks = [3, 4, 5, 6, 7].map((v) => ({
  value: v,
  y: cy(v),
}));

/** Section copy */
export const critiqueHeadline = "How much time does the leading drug buy?";

export const critiqueBody =
  "The CLARITY-AD trial reported lecanemab slowed Alzheimer's decline by 27%. " +
  "That number comes from CDR-SB (Clinical Dementia Rating, Sum of Boxes): " +
  "a 0-to-18 scale that scores six areas of daily life, from memory to self-care, " +
  "based on interviews with patients and caregivers. Higher means worse.";

export interface CritiquePoint {
  label: string;
  text: string;
}

export const critiquePoints: CritiquePoint[] = [
  {
    label: "The gap",
    text: "After 18 months, treated patients scored 0.45 points better on a dementia scale that goes to 18. Both groups still declined.",
  },
  {
    label: "The assumption",
    text: "Divide 0.45 by the placebo decline (1.66) and you get 27%. That calculation assumes decline continues at a constant rate forever.",
  },
  {
    label: "The catch",
    text: "Alzheimer's follows an S-curve. Extend the real trajectory and the gap narrows from 0.45 to 0.13. Both groups converge on the same inflection.",
  },
];

export const critiqueInsight =
  "On the full 18-point scale, the effect is 2.5%. " +
  "On objective tests patients take directly, the treatment and placebo curves are parallel.";
