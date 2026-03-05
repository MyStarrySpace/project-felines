/** Alert and insight text for each chart section on the clearance page */

export const compartmentChartContent = {
  title: "Iron accumulation by compartment",
  description:
    "All values normalized to young-adult baseline (1.0\u00D7). Above 1.2\u00D7 LIP baseline, cells enter sublethal stress. ISF rises faster than LIP because glymphatic clearance declines earlier (age 30) than ferroportin (age 40).",
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
    "When labile iron exceeds 1.2\u00D7 baseline, cells enter Phase 1 (sublethal stress). Above 1.5\u00D7, Phase 2 triggers frank ferroptosis. The window between phases is the last opportunity for intervention.",
  above: {
    title: "Two thresholds, not one",
    text: "Phase 1 is clinically silent but measurable (MRI volume loss, elevated CSF ferritin). Phase 2 is irreversible. The window between Phase 1 and Phase 2 is the last opportunity for intervention.",
    variant: "warning" as const,
  },
  below: {
    title: "Thresholds are illustrative",
    text: "No direct LIP threshold for ferroptosis has been measured in human brain. A 2025 study (PMC12236665) found LIP may not increase during ferroptosis; redistribution may matter more than total level.",
    badge: "Caveat",
  },
};

export const clearanceDeclineContent = {
  title: "Clearance pathway decline",
  description:
    "Both export steps decline with age. Ferroportin activity drops ~1%/year after age 40 (Raha 2022). Glymphatic flow drops ~1.2%/year after age 30 (Patterson 2015). Disease perturbations compound these declines.",
  above: {
    title: "Two bottlenecks in series",
    text: "Ferroportin moves iron from cell to ISF. Glymphatic flow moves it from ISF to CSF. Both must work for iron to leave the brain. A 50% drop in either pathway halves total clearance.",
    variant: "info" as const,
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
    "Microglia make up only 10% of brain cells but contribute 25\u201350% of total Fpn-mediated iron export. This explains why microglial iron retention (via hepcidin) has outsized effects on regional iron burden.",
  below: {
    title: "The microglial bottleneck",
    text: "Hepcidin-induced Fpn internalization hits microglia hardest because they handle the most iron per cell. Chronic neuroinflammation suppresses the cell type most responsible for iron export.",
    badge: "Cell biology",
  },
};
