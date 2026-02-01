export interface PnsComparisonRow {
  layer: string;
  cns: string;
  pns: string;
}

export const pnsHeadline = {
  kicker: "Peripheral Extension",
  heading: "FELINE maps onto peripheral nerves.",
  body: "Every defense layer has a peripheral counterpart. Schwann cells replace oligodendrocytes. The blood-nerve barrier replaces the BBB. Ferroptosis drives peripheral neuropathy through the same cascade.",
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
  title: "The N layer divides two diseases",
  body: "The neurovascular unit, including pericytes, astrocyte endfeet, and the BBB, is the compartment boundary between CNS and PNS disease. Peripheral nerves can regenerate because repair signals cross the blood-nerve barrier. The BBB blocks those same signals in the CNS.",
};
