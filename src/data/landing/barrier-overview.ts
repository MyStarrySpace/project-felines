// Three-Barrier Comparison — data from §3.3.13

export interface BarrierCard {
  id: string;
  name: string;
  abbreviation: string;
  organ: string;
  cellTypes: string;
  pericyteCoverage: string;
  ironClearance: string;
  href: string;
}

export interface ArchitectureRow {
  feature: string;
  bbb: string;
  brb: string;
  bnb: string;
}

export interface FelineLayerRow {
  layer: string;
  layerFull: string;
  bbb: string;
  brb: string;
  bnb: string;
}

export interface GradientRow {
  property: string;
  bbb: string;
  brb: string;
  bnb: string;
}

export interface FerroxidaseRow {
  barrier: string;
  exportCells: string;
  ferroxidases: string;
  redundancy: string;
  knockoutPhenotype: string;
}

export const barrierCards: BarrierCard[] = [
  {
    id: "bbb",
    name: "Blood-Brain Barrier",
    abbreviation: "BBB",
    organ: "Brain",
    cellTypes: "Astrocyte endfeet, pericytes, tight-junction endothelium",
    pericyteCoverage: "\u223C99%",
    ironClearance: "Hours to days (glymphatic, sleep-dependent)",
    href: "/explore/biology/neurovascular",
  },
  {
    id: "brb",
    name: "Blood-Retinal Barrier",
    abbreviation: "BRB",
    organ: "Retina",
    cellTypes: "M\u00FCller glia, RPE, pericytes, tight-junction endothelium",
    pericyteCoverage: "37% loss in AD (Shi 2020)",
    ironClearance: "Moderate (RPE basolateral export)",
    href: "/explore/barrier/retinal",
  },
  {
    id: "bnb",
    name: "Blood-Nerve Barrier",
    abbreviation: "BNB",
    organ: "Peripheral nerve",
    cellTypes: "Schwann cells, endoneurial macrophages, perineurium",
    pericyteCoverage: "\u223C75.6% (Bauer 2023)",
    ironClearance: "Minutes to hours (macrophage clearance)",
    href: "/explore/barrier/nerve",
  },
  {
    id: "bpb",
    name: "Blood-Placental Barrier",
    abbreviation: "BPB",
    organ: "Placenta",
    cellTypes: "Syncytiotrophoblast, Hofbauer cells, pericytes",
    pericyteCoverage: "Villous stromal pericytes",
    ironClearance: "Active maternal-fetal transfer",
    href: "/explore/barrier/placenta",
  },
];

export const architectureComparison: ArchitectureRow[] = [
  {
    feature: "Endothelial tight junctions",
    bbb: "Claudin-5, occludin, ZO-1/2 (tightest)",
    brb: "Inner BRB: identical to BBB; Outer BRB: RPE with claudin-1, ZO-1",
    bnb: "Claudin-5, occludin, ZO-1/2 (leakier \u2014 2 orders of magnitude more permeable)",
  },
  {
    feature: "Pericyte coverage",
    bbb: "\u223C99% of endothelial surface",
    brb: "37% loss in AD retina (Shi 2020)",
    bnb: "\u223C75.6% (incomplete; Bauer 2023)",
  },
  {
    feature: "Glial component",
    bbb: "Astrocyte endfeet (AQP4-polarized)",
    brb: "M\u00FCller glia + RPE (unique outer barrier)",
    bnb: "Schwann cells (no endfeet; partial substitute)",
  },
  {
    feature: "Additional barrier",
    bbb: "None",
    brb: "Outer BRB = RPE monolayer (no brain equivalent)",
    bnb: "Perineurium (multilayered, claudin-1)",
  },
  {
    feature: "Transcytosis rate",
    bbb: "Very low",
    brb: "Low (inner BRB)",
    bnb: "HIGH \u2014 primary route of leakage (Bauer 2023)",
  },
  {
    feature: "Macrophage clearance",
    bbb: "Microglia only (limited perivascular access)",
    brb: "Retinal microglia (same limitations as brain)",
    bnb: "Endoneurial macrophages actively \u201Cvacuum\u201D leaked material",
  },
];

export const felineLayerMap: FelineLayerRow[] = [
  {
    layer: "Fe",
    layerFull: "Iron",
    bbb: "Astrocyte-mediated redistribution; iron trapped behind BBB",
    brb: "M\u00FCller glia + RPE iron handling; dual barrier traps iron from two directions; AD retina: 2\u00D7 iron",
    bnb: "Schwann cell Fpn+Cp; macrophage clearance prevents trapping",
  },
  {
    layer: "L",
    layerFull: "Lysosome",
    bbb: "Microglial lysosomes as decision hubs; post-mitotic neurons can\u2019t dilute",
    brb: "Lysosomal overload from photoreceptor phagocytosis (RPE processes ~10% of outer segments daily); lipofuscin as iron source",
    bnb: "Schwann cell autophagy; CMT2B (RAB7 mutations) as pure L-layer disease",
  },
  {
    layer: "I",
    layerFull: "Immune / inflammatory",
    bbb: "Microglial surveillance; complement-mediated pruning; limited immune cell entry past tight barrier",
    brb: "Retinal microglia + perivascular macrophages; complement activation in AMD; limited immune infiltration",
    bnb: "Endoneurial macrophages; complement-mediated debris clearance; permeable barrier allows immune cell entry",
  },
  {
    layer: "N",
    layerFull: "Barrier",
    bbb: "Tightest: ~99% pericyte coverage; no compensatory clearance",
    brb: "Dual: inner BRB \u2248 BBB; outer BRB = RPE (unique); 37% pericyte loss in AD",
    bnb: "Leakiest: ~75.6% pericyte coverage; macrophage compensation; perineurium adds second barrier",
  },
  {
    layer: "E",
    layerFull: "Export",
    bbb: "Glymphatic (sleep-dependent); astrocyte AQP4; slowest clearance (hours to days)",
    brb: "RPE basolateral Fpn\u2192choroidal blood; M\u00FCller glia Fpn; moderate clearance",
    bnb: "Schwann cell phagocytosis; macrophage clearance; FASTEST (minutes to hours)",
  },
  {
    layer: "S",
    layerFull: "Sheathing",
    bbb: "OL myelin (1:50 ratio); limited OPC regeneration",
    brb: "No myelinated component (retinal neurons unmyelinated until optic nerve)",
    bnb: "SC myelin (1:1 ratio); SC repair phenotype enables remyelination",
  },
];

export const protectionGradient: GradientRow[] = [
  {
    property: "Barrier stringency",
    bbb: "Highest",
    brb: "Intermediate (dual barrier)",
    bnb: "Lowest",
  },
  {
    property: "Iron clearance capacity",
    bbb: "Lowest (no macrophage backup)",
    brb: "Low\u2013moderate (RPE export route)",
    bnb: "Highest (macrophage clearance)",
  },
  {
    property: "Regeneration potential",
    bbb: "Nil (glial scar, no immune access)",
    brb: "Limited (M\u00FCller glia reactivation; no RPE regeneration)",
    bnb: "High (SC repair phenotype, macrophage debris clearance)",
  },
  {
    property: "Typical disease course",
    bbb: "Chronic progressive (AD, PD)",
    brb: "Chronic progressive but detectable early (retinal A\u03B2, OCTA changes)",
    bnb: "Acute-remitting OR chronic (GBS recovers; diabetic neuropathy progresses)",
  },
  {
    property: "FELINES cascade speed",
    bbb: "Slowest (decades; iron accumulates behind sealed barrier)",
    brb: "Moderate (years; RPE multi-tasking accelerates failure)",
    bnb: "Fastest initiation BUT fastest clearance \u2014 rarely reaches cascade unless clearance disabled",
  },
  {
    property: "Therapeutic accessibility",
    bbb: "Poorest (BBB blocks drugs)",
    brb: "Moderate (topical, intravitreal)",
    bnb: "Best (no barrier to drug access)",
  },
];

export const ferroxidaseGradient: FerroxidaseRow[] = [
  {
    barrier: "BPB (Placenta)",
    exportCells: "Syncytiotrophoblast",
    ferroxidases: "Cp + Heph + Zyklopen",
    redundancy: "TRIPLE",
    knockoutPhenotype: "Must lose \u22652 to see phenotype; maximal species-survival priority",
  },
  {
    barrier: "BRB (Retina)",
    exportCells: "RPE + M\u00FCller glia",
    ferroxidases: "Cp + Heph",
    redundancy: "DOUBLE",
    knockoutPhenotype: "Single KO: no effect. Double KO: severe retinal iron overload, RPE hypertrophy, photoreceptor death (Hahn 2004)",
  },
  {
    barrier: "BNB (Nerve)",
    exportCells: "Schwann cells",
    ferroxidases: "Cp (+ macrophage backup)",
    redundancy: "SINGLE + compensatory",
    knockoutPhenotype: "Macrophages clear iron even if Schwann cell Fpn fails; iron trapping rarely chronic",
  },
  {
    barrier: "BBB (Brain)",
    exportCells: "Astrocyte endfeet",
    ferroxidases: "Cp alone (\u00B1 APP Fpn-stabilization)",
    redundancy: "SINGLE",
    knockoutPhenotype: "Cp loss = progressive brain iron accumulation + neurodegeneration (aceruloplasminemia). No backup.",
  },
];
