export interface PnsComparisonRow {
  layer: string;
  cns: string;
  pns: string;
}

export const pnsHeadline = {
  kicker: "Beyond the brain",
  heading: "The same biology runs through every nerve.",
  body: "Every defense system in the brain has a peripheral counterpart. Schwann cells replace oligodendrocytes. The blood-nerve barrier replaces the BBB. Ferroptosis drives peripheral neuropathy through the same iron-driven cascade.",
  stat: 3,
  statLabel: "peripheral diseases with confirmed ferroptosis",
};

export const pnsComparison: PnsComparisonRow[] = [
  {
    layer: "Fe",
    cns: "Oligodendrocyte iron loading",
    pns: "Schwann cell iron loading",
  },
  {
    layer: "L",
    cns: "GPX4/GSH protect oligodendrocytes",
    pns: "GPX4/GSH protect Schwann cells",
  },
  {
    layer: "I",
    cns: "Myelin, ferritin, tau, alpha-synuclein, lysosomes",
    pns: "Myelin, ferritin, lysosomes",
  },
  {
    layer: "N",
    cns: "BBB, pericytes, astrocyte endfeet",
    pns: "Blood-nerve barrier, more permeable",
  },
  {
    layer: "E",
    cns: "Ferroportin/Cp, glymphatic, AQP4",
    pns: "Ferroportin/Cp, endoneurial fluid",
  },
];

export const pnsInsight = {
  title: "One barrier separates two outcomes",
  body: "Peripheral nerves regenerate. The brain cannot. The difference is the blood-brain barrier. Repair signals cross the blood-nerve barrier freely. The BBB blocks those same signals. Same iron biology, different outcomes.",
};
