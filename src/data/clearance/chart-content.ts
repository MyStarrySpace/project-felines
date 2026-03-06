/** Alert and insight text for each chart section on the clearance page */

export const compartmentChartContent = {
  title: "Iron accumulation by compartment",
  description:
    "All values normalized to young-adult baseline (1.0\u00D7). LIP baseline 0.8 \u00B5M (Kakhlon & Cabantchik 2002). ISF baseline ~1.0 \u00B5M (Singh 2014). Iron uptake ~0.5 mg/year (Hallgren & Sourander 1958). ISF rises faster than LIP because glymphatic clearance declines earlier (age 30) than ferroportin (age 40).",
  above: {
    title: "Serial, not parallel",
    text: "Iron exits via two sequential steps: ferroportin (cell to ISF), then glymphatic flow (ISF to CSF). Failure at either bottleneck traps iron upstream.",
    variant: "info" as const,
  },
  below: {
    title: "Net accumulation: ~0.5 mg/year",
    text: "Healthy brains accumulate ~20 mg of iron between age 30 and 70. Most Fpn-exported iron (~85%) is recaptured by neighboring cells before reaching CSF.",
    badge: "Mass balance",
  },
};

export const ferroptosisChartContent = {
  title: "Ferroptosis phases",
  description:
    "When labile iron exceeds 1.2\u00D7 baseline, cells enter Phase 1 (sublethal stress). Above 1.5\u00D7, Phase 2 triggers frank ferroptosis. Both thresholds are illustrative: no direct LIP threshold has been measured in human brain.",
  above: {
    title: "Thresholds are assumed",
    text: "Phase 1 (1.2\u00D7) and Phase 2 (1.5\u00D7) are illustrative estimates. A 2025 study (PMC12236665) found LIP may not increase during ferroptosis; redistribution may matter more than total level.",
    variant: "warning" as const,
  },
  below: {
    title: "The intervention window",
    text: "Phase 1 is clinically silent but potentially measurable (MRI iron mapping, elevated CSF ferritin). Phase 2 is irreversible. The gap between them is the last opportunity for intervention.",
    badge: "Clinical",
  },
};

export const clearanceDeclineContent = {
  title: "Clearance pathway decline",
  description:
    "Both export steps decline with age. Ferroportin: direction confirmed by Raha 2022 and Lupo 2022, but no annualized rate published. Glymphatic: derived from Patterson 2015 A\u03B2 fractional turnover (~60% decline age 30\u201380), not iron-specific. Both rates (1%/yr Fpn, 1.2%/yr gly) are assumed linear approximations and may overestimate late-life decline.",
  above: {
    title: "Rates are assumed",
    text: "Only the direction of decline is established. Fpn protein decreases in aged brain (Raha 2022, Lupo 2022). A\u03B2 clearance slows with age (Patterson 2015). The annualized rates and linear shape are modeling choices, not measurements.",
    variant: "warning" as const,
  },
  below: {
    title: "Disease effects stack",
    text: "Hypertension reduces glymphatic flow by ~32% (Mortensen 2019). Diabetes by ~84% (Jiang 2017). Sleep disruption by ~36% (Xie 2013). These compound with age-related decline.",
    badge: "Comorbidities",
  },
};

export const cellTypeChartContent = {
  title: "Cell-type Fpn export budget",
  description:
    "Microglia make up only 10% of brain cells but contribute 25\u201350% of total Fpn-mediated iron export. Based on Bao 2021 back-calculation and cell-type expression ratios. Confidence: low-moderate (qualitative expression data, one direct measurement).",
  below: {
    title: "The microglial bottleneck",
    text: "Hepcidin-induced Fpn internalization hits microglia hardest because they handle the most iron per cell. Chronic neuroinflammation suppresses the cell type most responsible for iron export.",
    badge: "Cell biology",
  },
};
