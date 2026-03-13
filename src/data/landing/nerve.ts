// Blood-Nerve Barrier — data from §3.3.13, §9.3, §3.3.10-12

export interface ArchitectureRow {
  feature: string;
  detail: string;
}

export interface CnsVsPnsRow {
  feature: string;
  cns: string;
  pns: string;
}

export interface FelineLayerRow {
  layer: string;
  layerFull: string;
  cns: string;
  pns: string;
  keyDifference: string;
}

export interface ResearchFinding {
  id: string;
  paper: string;
  journal?: string;
  year: number;
  finding: string;
  detail?: string;
  group: "macrophage" | "schwann" | "diabetic" | "senolytic" | "ferroptosis" | "evolution";
}

export interface EvolutionaryRow {
  feature: string;
  schwannCells: string;
  oligodendrocytes: string;
}

export interface TherapeuticRow {
  intervention: string;
  cnsPrediction: string;
  pnsPrediction: string;
  evidence: string;
}

export const nerveHero = {
  kicker: "Blood-Nerve Barrier",
  title: "The barrier that heals",
  subtitle:
    "The BNB is the most permeable neural barrier but the fastest to clear. Macrophage compensation is why peripheral nerves escape iron trapping. Clearance in minutes-hours vs days-weeks in the brain.",
};

export const architectureRows: ArchitectureRow[] = [
  {
    feature: "Tight junctions",
    detail: "Claudin-5, occludin, ZO-1/2. 2 orders of magnitude more permeable to protein than perineurium. Tight junctions are NOT the weak point.",
  },
  {
    feature: "True permeability source",
    detail: "HIGH transcytosis rate (Bauer 2023). Permeability comes from vesicular transport across endothelial cells, not leaky junctions.",
  },
  {
    feature: "Perineurium",
    detail: "Multilayered epithelial sheath with claudin-1. An additional barrier layer with no brain or retinal equivalent.",
  },
  {
    feature: "Schwann cells",
    detail: "1:1 myelination ratio (vs 1:50 for oligodendrocytes). Can dedifferentiate to repair phenotype via c-Jun activation. Actively phagocytose myelin debris.",
  },
  {
    feature: "Endoneurial macrophages",
    detail: "Resident macrophages that rapidly engulf leaked material within minutes (Bauer 2023). No equivalent clearance system exists in brain or retina.",
  },
  {
    feature: "Pericyte coverage",
    detail: "\u223C75.6% (incomplete compared to BBB\u2019s \u223C99%). The \u201Cgap\u201D is compensated by macrophage surveillance.",
  },
];

export const ironFateComparison: CnsVsPnsRow[] = [
  {
    feature: "Iron after senescent cell death",
    cns: "Trapped in parenchyma",
    pns: "Cleared by macrophages",
  },
  {
    feature: "Chemical fate",
    cns: "Catalyzes Fenton reaction",
    pns: "Recycled for regeneration",
  },
  {
    feature: "Lipid effect",
    cns: "Causes lipid peroxidation",
    pns: "Supports mitochondrial function",
  },
  {
    feature: "Protein effect",
    cns: "Promotes A\u03B2 aggregation",
    pns: "Activates myelin gene transcription",
  },
  {
    feature: "Cascade outcome",
    cns: "Triggers ferroptosis cascade",
    pns: "Iron is beneficial during repair",
  },
];

export const barrierComparison: CnsVsPnsRow[] = [
  {
    feature: "Tight junction integrity",
    cns: "Very tight (BBB)",
    pns: "More permeable (BNB)",
  },
  {
    feature: "Macrophage access",
    cns: "Blocked by BBB",
    pns: "Ready access within hours",
  },
  {
    feature: "Debris clearance speed",
    cns: "Days to weeks",
    pns: "Hours to days",
  },
  {
    feature: "Iron clearance",
    cns: "Requires export machinery (Fpn+Cp)",
    pns: "Phagocytic clearance possible",
  },
];

export const felineLayerRows: FelineLayerRow[] = [
  {
    layer: "Fe",
    layerFull: "Iron",
    cns: "AQP4 polarity; Fpn+Cp export from brain; hepcidin regulation",
    pns: "AQP1 at SLIs/nodes; Fpn+Cp deliver to axon; same regulatory system",
    keyDifference: "Different AQP; opposite iron goals; same pathway",
  },
  {
    layer: "L",
    layerFull: "Lysosome",
    cns: "GPX4, system xc\u207B; lysosomal function; PUFA vulnerability",
    pns: "GPX4, system xc\u207B; CMT2B = RAB7 mutations; same PUFA vulnerability",
    keyDifference: "Same mechanism; same substrates",
  },
  {
    layer: "I",
    layerFull: "Immune / inflammatory",
    cns: "Microglia; complement pruning; limited immune cell entry past BBB",
    pns: "Endoneurial macrophages; complement-mediated debris clearance; BNB permits immune cell entry",
    keyDifference: "PNS immune access enables repair; CNS immune isolation traps damage",
  },
  {
    layer: "N",
    layerFull: "Barrier",
    cns: "BBB (tight); blocks immune access; traps iron/debris",
    pns: "BNB (permeable); allows macrophage entry; permits clearance",
    keyDifference: "CRITICAL: determines repair vs damage",
  },
  {
    layer: "E",
    layerFull: "Export",
    cns: "Glymphatic (sleep-dependent); astrocyte-limited; hours to days",
    pns: "Macrophage phagocytosis; SC active phagocytosis; minutes to hours",
    keyDifference: "PNS superior: hours vs days",
  },
  {
    layer: "S",
    layerFull: "Sheathing",
    cns: "OL myelin (1:50 axons); limited OPC response",
    pns: "SC myelin (1:1 axon); SC dedifferentiation enables repair",
    keyDifference: "Different ratio; PNS regenerates",
  },
];

export const researchFindings: ResearchFinding[] = [
  {
    id: "bauer-2023",
    paper: "Bauer et al.",
    journal: "Developmental Cell",
    year: 2023,
    finding: "BNB permeability is higher than BBB NOT because of weaker tight junctions, but because of higher transcytosis rates. Resident macrophages rapidly engulf leaked material. Pericytes, tactocytes, and Schwann cells did NOT accumulate leaked tracers; only macrophages did.",
    detail: "After nerve injury, Schwann cells \u201Copen\u201D the BNB by increasing transcytosis, permitting immune cell access. A controlled permeability modulation the BBB cannot perform.",
    group: "macrophage",
  },
  {
    id: "mietto-2021",
    paper: "Mietto et al.",
    journal: "Journal of Neuroscience",
    year: 2021,
    finding: "Schwann cells express ferroportin + ceruloplasmin (Fpn+Cp). Same iron export machinery as astrocytes at the BBB.",
    detail: "Confirms FELINES E-layer conservation: the same molecular export system operates in PNS and CNS, but the cellular context differs.",
    group: "schwann",
  },
  {
    id: "shimizu-2021",
    paper: "Shimizu et al.",
    journal: "International Journal of Molecular Sciences",
    year: 2021,
    finding: "Diabetic peripheral neuropathy involves BNB breakdown through pericyte damage and basement membrane thickening, restricting macrophage access to the endoneurium.",
    detail: "Diabetes specifically disrupts the BNB\u2019s compensatory clearance mechanism. FELINES predicts this should lead to endoneurial iron accumulation.",
    group: "diabetic",
  },
  {
    id: "kanda-2020",
    paper: "Kanda",
    journal: "Brain and Nerve",
    year: 2020,
    finding: "AGE accumulation damages BNB pericytes \u2192 autocrine VEGF/TGF-\u03B2 secretion \u2192 basement membrane thickening \u2192 macrophage access becomes restricted.",
    detail: "The diabetic exception that proves the rule: when macrophage compensation is disabled, the PNS becomes vulnerable to the same iron trapping that afflicts the CNS.",
    group: "diabetic",
  },
  {
    id: "fuentes-flores-2023",
    paper: "Fuentes-Flores et al.",
    year: 2023,
    finding: "Senolytics work in PNS: senescent Schwann cells cleared, iron released (30\u00D7 normal), macrophages recruited within hours, iron cleared or recycled, remyelination supported.",
    detail: "In CNS, the same iron release would be trapped behind the BBB \u2192 Fenton chemistry \u2192 secondary ferroptosis. The N-layer difference determines outcome.",
    group: "senolytic",
  },
  {
    id: "wang-2025",
    paper: "Wang et al.",
    year: 2025,
    finding: "Ferroptosis inhibitor validated in trigeminal neuralgia model. Confirms that ferroptosis contributes to peripheral nerve pathology.",
    detail: "Ferroptosis inhibitors may have broad applicability to both CNS and PNS neurodegeneration.",
    group: "ferroptosis",
  },
  {
    id: "wang-2025-rejuv",
    paper: "Wang et al.",
    year: 2025,
    finding: "Schwann cell rejuvenation via partial reprogramming restored myelinating capacity in aged peripheral nerves.",
    detail: "Validates FELINES\u2019 prediction that repair phenotype reactivation is achievable in PNS, where the barrier permits therapeutic access.",
    group: "ferroptosis",
  },
];

export const evolutionaryRows: EvolutionaryRow[] = [
  {
    feature: "Embryonic origin",
    schwannCells: "Neural crest (migratory)",
    oligodendrocytes: "Neural tube (stationary)",
  },
  {
    feature: "Developmental program",
    schwannCells: "Migration, differentiation, RE-differentiation",
    oligodendrocytes: "One-way maturation",
  },
  {
    feature: "Injury response",
    schwannCells: "Dedifferentiate to repair phenotype",
    oligodendrocytes: "Limited plasticity",
  },
  {
    feature: "c-Jun expression",
    schwannCells: "High after injury (activates repair)",
    oligodendrocytes: "Not expressed",
  },
  {
    feature: "Proliferation after injury",
    schwannCells: "Yes (requires repair program)",
    oligodendrocytes: "Very limited",
  },
];

export const therapeuticPredictions: TherapeuticRow[] = [
  {
    intervention: "Senolytics alone",
    cnsPrediction: "May FAIL (iron release trapped)",
    pnsPrediction: "Should WORK",
    evidence: "Fuentes-Flores 2023 validated in PNS",
  },
  {
    intervention: "Senolytics + iron chelator",
    cnsPrediction: "May work if chelator reaches CNS",
    pnsPrediction: "Not needed",
    evidence: "FAIRPARK-II shows chelation problem",
  },
  {
    intervention: "Ferroptosis inhibitors",
    cnsPrediction: "Should help all layers",
    pnsPrediction: "Should help",
    evidence: "Wang 2025 validated in PNS",
  },
  {
    intervention: "Partial reprogramming",
    cnsPrediction: "Should work (theoretical)",
    pnsPrediction: "Works",
    evidence: "Wang 2025 (Schwann cell rejuvenation) validated",
  },
];
