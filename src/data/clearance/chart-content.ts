/** Alert and insight text for each chart section on the clearance page */

export const compartmentChartContent = {
  title: "4-compartment iron levels",
  description:
    "Iron flows through a serial pathway: intracellular LIP exits via ferroportin to ISF, then glymphatic flow carries it to CSF, then drainage removes it from the brain. Each step declines with age.",
  above: {
    title: "Serial, not parallel",
    text: "Earlier models treated ferroportin and glymphatic clearance as competing routes. In reality they are sequential steps. Failure at either bottleneck traps iron upstream.",
    variant: "info" as const,
  },
  below: {
    title: "Net accumulation: ~0.5 mg/year",
    text: "Healthy brains accumulate ~20 mg of iron between age 30 and 70. Most Fpn-exported iron (rho ~85%) is recaptured by neighboring cells before reaching CSF. The system redistributes iron, not exports it.",
    badge: "Mass balance",
  },
};

export const ferroptosisChartContent = {
  title: "Ferroptosis phases",
  description:
    "When labile iron exceeds 1.2x baseline, cells enter Phase 1 (sublethal stress). Above 1.5x, Phase 2 triggers frank ferroptosis and neuron death. Iron-coupled feedback loops accelerate progression between phases.",
  above: {
    title: "Two thresholds, not one",
    text: "Phase 1 is clinically silent but measurable (MRI volume loss, elevated CSF ferritin). Phase 2 is irreversible. The window between Phase 1 and Phase 2 is the last opportunity for intervention.",
    variant: "warning" as const,
  },
  below: {
    title: "The acceleration trap",
    text: "Phase 2 neuron death reduces rho (ISF recapture fraction), causing more iron to remain in ISF, accelerating damage to surviving neurons. This positive feedback explains nonlinear cognitive decline.",
    badge: "Positive feedback",
  },
};

export const feedbackChartContent = {
  title: "Iron-coupled feedback loops",
  description:
    "Iron excess drives four self-reinforcing loops: Cu depletion degrades ferroxidase, LIP elevation triggers hepcidin, damage reduces ISF recapture, and protein aggregation mildly amplifies uptake. All are iron-coupled, not independent factors.",
  above: {
    title: "Not extra factors. Iron consequences.",
    text: "Cu depletion, hepcidin elevation, and protein aggregation are commonly treated as independent disease mechanisms. In the FELINE model, each is a downstream consequence of iron overload feeding back to worsen the iron problem.",
    variant: "info" as const,
  },
  below: {
    title: "The Cu-ferroxidase trap",
    text: "Ferroportin needs ferroxidase (ceruloplasmin/hephaestin) to convert Fe\u00B2\u207A to Fe\u00B3\u207A for export. Oxidative damage depletes Cu, reducing ferroxidase activity, stalling Fpn even when the transporter is present.",
    badge: "Feedback loop",
  },
};

export const cellTypeChartContent = {
  title: "Cell-type Fpn export budget",
  description:
    "Microglia make up only 10% of brain cells but contribute 25-50% of total Fpn-mediated iron export. This explains why microglial iron retention (via hepcidin) has outsized effects on regional iron burden.",
  below: {
    title: "The microglial bottleneck",
    text: "Hepcidin-induced Fpn internalization hits microglia hardest because they handle the most iron per cell. Chronic neuroinflammation suppresses the cell type most responsible for iron export.",
    badge: "Cell biology",
  },
};
