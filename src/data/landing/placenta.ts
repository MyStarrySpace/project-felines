// Placental Parallel — structured data from placenta_NVU_barrier_parallels_v1.md

export interface CellHomologyRow {
  nvuComponent: string;
  placentalHomolog: string;
  sharedFunction: string;
}

export interface ResearchFinding {
  paper: string;
  journal?: string;
  finding: string;
  detail?: string;
  tag: "iron" | "cell death" | "barrier" | "vascular" | "systemic" | "immune" | "biomarker";
}

export interface TimescaleRow {
  feature: string;
  adBrain: string;
  pePlacenta: string;
}

export interface EpiStudy {
  authors: string;
  year: number;
  cohort: string;
  finding: string;
}

export interface PlacPrediction {
  id: number;
  prediction: string;
  status: "confirmed" | "open" | "predicted";
  evidence: string;
}

export interface KeySection {
  heading: string;
  body: string;
}

export const placentaHero = {
  kicker: "Placental Parallel",
  title: "The same cascade. A different organ.",
  subtitle:
    "The placenta and the brain share the same barrier architecture, the same iron transport machinery, and the same failure mode. Preeclampsia runs the full FELINE cascade in weeks, not decades.",
};

export const cellHomology: CellHomologyRow[] = [
  {
    nvuComponent: "Endothelium",
    placentalHomolog: "Fetal capillary endothelium",
    sharedFunction:
      "Tight-junction barrier; first contact with blood",
  },
  {
    nvuComponent: "Astrocyte endfeet",
    placentalHomolog: "Syncytiotrophoblast",
    sharedFunction:
      "Barrier regulation; ferroportin/hepcidin iron transport; AQP channels; nutrient exchange",
  },
  {
    nvuComponent: "Microglia",
    placentalHomolog: "Hofbauer cells",
    sharedFunction:
      "Both yolk sac EMP-derived; phagocytic surveillance; correlated inflammatory responses",
  },
  {
    nvuComponent: "Pericytes",
    placentalHomolog: "Villous stromal pericytes",
    sharedFunction: "Vascular stabilization; contractile regulation",
  },
  {
    nvuComponent: "Basement membrane",
    placentalHomolog: "Trophoblast basement membrane",
    sharedFunction: "ECM scaffold (laminin, collagen IV)",
  },
];

export const researchFindings: ResearchFinding[] = [
  // Iron transport dysregulation
  {
    paper: "Yang et al. 2026",
    finding:
      "PE placentas show \u2191TfR1, \u2191DMT1, \u2193ferroportin. Iron enters trophoblasts but can\u2019t exit. Both DFO and MitoQ rescued the phenotype in PE-derived organoids.",
    detail: "MitoQ implicates mitochondrial ROS as an upstream driver of iron dysregulation, not just a consequence.",
    tag: "iron",
  },
  {
    paper: "Park et al. 2025",
    journal: "Circulation Research",
    finding:
      "Ferroptotic trophoblasts export iron and lipid peroxides via prominin-2-mediated small extracellular vesicles (sEVs). Hinokitiol, an iron ionophore, rescued the phenotype.",
    tag: "iron",
  },
  // Cell death mechanisms
  {
    paper: "Lianski, Beharier et al. 2025",
    journal: "Hypertension",
    finding:
      "Ferroptosis directly drives sFlt-1 release from PE placental explants. Ferrostatin-1 and DFO both reduced sFlt-1 levels. A screen of 6,520 drugs identified dipyridamole and promethazine as potent ferroptosis inhibitors.",
    detail: "Bridges the ferroptosis and sFlt-1/angiogenic imbalance theories of preeclampsia into a single mechanism.",
    tag: "cell death",
  },
  {
    paper: "Liao et al. 2022",
    finding:
      "DJ-1 is upregulated in PE trophoblasts as a compensatory defense. It activates the Nrf2/GPX4 antioxidant pathway, but this defense is eventually overwhelmed.",
    tag: "cell death",
  },
  {
    paper: "Nishioka et al. 2026",
    finding:
      "A\u03B2 fibrils inhibit syncytialization without triggering cell death. Instead, they activate autophagy (LC3-II \u2191260%) and suppress syncytin-1 by 65%.",
    detail: "Low nanomolar A\u03B2 enhances trophoblast invasion; high concentrations inhibit it. Dose-dependent duality, not simple toxicity.",
    tag: "barrier",
  },
  // Barrier / fusion
  {
    paper: "Nishioka et al. 2026",
    finding:
      "A\u03B2 aggregates found in preeclamptic but not healthy placentas. Hypoxia drives NF-\u03BAB \u2192 BACE1 \u2192 A\u03B2 production, mirroring the Alzheimer\u2019s cascade in a different organ.",
    tag: "barrier",
  },
  // Vascular damage
  {
    paper: "Park et al. 2025",
    journal: "Circulation Research",
    finding:
      "Ferroptotic sEVs enter maternal circulation, causing endothelial activation and impaired angiogenesis. This is the mechanism linking placental ferroptosis to systemic maternal vascular damage.",
    tag: "vascular",
  },
  {
    paper: "Beckett et al. 2023",
    finding:
      "White matter lesions found in 34\u201362% of post-preeclampsia women. Hemorrhagic strokes more common than ischemic. A \u201csecond hit\u201d model of vascular vulnerability.",
    detail: "Cognitive deficits detectable at 15-year follow-up. BBB disruption identified as the shared pathway.",
    tag: "vascular",
  },
  // Systemic effects
  {
    paper: "Park et al. 2025",
    journal: "Circulation Research",
    finding:
      "Prominin-2 mediates sEV export of ferroptotic cargo (iron + oxidized lipids) from trophoblasts into maternal blood. A previously unknown systemic signaling pathway.",
    tag: "systemic",
  },
  {
    paper: "Basit et al. 2018",
    finding:
      "Danish cohort of 1.18M women: preeclampsia \u2192 HR 3.46 for vascular dementia, but only 1.45 for Alzheimer\u2019s. The long-term damage is primarily vascular.",
    tag: "systemic",
  },
  // Immune / inflammatory
  {
    paper: "Tanaka et al. 2024",
    journal: "Reproductive Biology",
    finding:
      "Macrophage sFlt-1 release depends on gasdermin D (pyroptosis pore) but not on NLRP3 inflammasome activation. Lysosomal cathepsin B also involved.",
    detail: "Suggests a non-canonical pyroptosis pathway contributes to the angiogenic imbalance in PE.",
    tag: "immune",
  },
  {
    paper: "Chen et al. 2025",
    finding:
      "EOPE and LOPE are distinct subtypes: early-onset is HIF-1/hypoxia-driven, late-onset is inflammatory. Hofbauer cells show subtype-specific lipid-transport defects.",
    tag: "immune",
  },
  {
    paper: "Wei et al. 2025",
    finding:
      "Hofbauer cells \u201calmost absent\u201d in early-onset PE villi. The placental macrophage population collapses in severe disease.",
    tag: "immune",
  },
  // Biomarkers / senescence
  {
    paper: "Barak et al. 2025",
    journal: "Placenta",
    finding:
      "28 senescence-associated secretory phenotype (SASP) transcripts enriched in PE placentas. FSTL3 and VEGFA upregulated; hypoxia and apoptosis drive the signature in vitro.",
    detail: "SASP signatures detectable in placental tissue, suggesting premature trophoblast senescence as a distinct PE feature.",
    tag: "biomarker",
  },
  {
    paper: "Campbell et al. 2023",
    finding:
      "After adjusting for cell composition changes, 1,154 differentially expressed genes in PE placentas dropped to zero. Bulk transcriptomic signals are mostly cell-type shifts, not per-cell changes.",
    tag: "biomarker",
  },
  {
    paper: "Schliep et al. 2023",
    finding:
      "Utah cohort, 80-year follow-up: hypertensive disorders of pregnancy \u2192 HR 1.64 for vascular dementia. No significant Alzheimer\u2019s association (HR 1.04).",
    tag: "systemic",
  },
];

export const compressedTimescale: TimescaleRow[] = [
  {
    feature: "Timescale",
    adBrain: "20\u201340 years",
    pePlacenta: "Weeks to months",
  },
  {
    feature: "Hypoxic trigger",
    adBrain: "Chronic cerebral hypoperfusion",
    pePlacenta: "Defective spiral artery remodeling",
  },
  {
    feature: "A\u03B2 overproduction",
    adBrain: "NF-\u03BAB \u2192 BACE1",
    pePlacenta: "Same (Nishioka 2026)",
  },
  {
    feature: "Barrier failure",
    adBrain: "Endfoot detachment, clasmatodendrosis",
    pePlacenta: "Syncytialization failure",
  },
  {
    feature: "Iron dysregulation",
    adBrain: "Maldistribution (not excess)",
    pePlacenta: "FeNO elevation, hepcidin changes",
  },
  {
    feature: "Tissue macrophage response",
    adBrain: "Microglia \u2192 LDAM",
    pePlacenta: "Hofbauer cells \u2192 lipid-transport defects",
  },
  {
    feature: "Outcome",
    adBrain: "Neurodegeneration",
    pePlacenta: "Placental insufficiency \u2192 delivery",
  },
];

export const epidemiologicalStudies: EpiStudy[] = [
  {
    authors: "Basit et al.",
    year: 2018,
    cohort: "Danish nationwide cohort, 1,178,005 women",
    finding:
      "Preeclampsia \u2192 HR 3.46 (95% CI 1.97\u20136.10) for vascular dementia. Only HR 1.45 for Alzheimer\u2019s.",
  },
  {
    authors: "Schliep et al.",
    year: 2023,
    cohort: "Utah cohort, 80-year follow-up, 59,668 women",
    finding:
      "Hypertensive disorders of pregnancy \u2192 HR 1.64 for vascular dementia. No significant AD association (HR 1.04).",
  },
  {
    authors: "Beckett et al.",
    year: 2023,
    cohort: "Review",
    finding:
      "BBB disruption highlighted as key shared pathway between preeclampsia and later cardiovascular/cerebrovascular disease.",
  },
];

export const predictions: PlacPrediction[] = [
  {
    id: 1,
    prediction:
      "Preeclamptic Hofbauer cells show LDAM-like lipid-transport defects",
    status: "confirmed",
    evidence:
      "Chen 2025: subtype-specific lipid-transport defects and mitochondrial dysfunction in PE HBCs",
  },
  {
    id: 2,
    prediction:
      "Iron maldistribution in PE placenta: iron enters but can\u2019t exit via FPN",
    status: "confirmed",
    evidence:
      "Yang 2026: \u2191TfR1, \u2191DMT1, \u2193FPN \u2192 iron overload \u2192 ferroptosis",
  },
  {
    id: 3,
    prediction:
      "PE Hofbauer cell phenotype predicts neonatal microglial priming",
    status: "open",
    evidence: "Edlow correlation supports; longitudinal validation needed",
  },
  {
    id: 4,
    prediction:
      "Women with PE show elevated plasma GFAP decades before dementia",
    status: "open",
    evidence:
      "Testable via PE registry \u00d7 AD biomarker cross-reference",
  },
  {
    id: 5,
    prediction:
      "NVU-protective interventions (A2A antagonism) protect placental barrier",
    status: "predicted",
    evidence:
      "A2A receptors present on STB, upregulated in PE (von Versen-H\u00f6ynck 2009); functional intervention not tested",
  },
  {
    id: 6,
    prediction: "Anti-BACE1 therapies would fail in PE",
    status: "predicted",
    evidence:
      "A\u03B2 is symptom of hypoxia, not cause; iron/ferroptosis is the driver",
  },
  {
    id: 7,
    prediction:
      "Caffeine \u2194 PE relationship is complex/nonlinear",
    status: "confirmed",
    evidence:
      "Conflicting epidemiological results consistent with dose-dependent effects",
  },
  {
    id: 8,
    prediction: "Hofbauer cells depleted in severe early-onset PE",
    status: "confirmed",
    evidence:
      'Wei 2025: HBCs "almost absent" in EOPE villi',
  },
  {
    id: 9,
    prediction:
      "Ferroptotic sEVs from PE placenta damage maternal endothelium",
    status: "confirmed",
    evidence:
      "Park 2025: prominin-2-mediated sEV export of iron + lipid peroxides \u2192 endothelial dysfunction",
  },
  {
    id: 10,
    prediction:
      "Iron redistribution (not chelation) rescues PE phenotype",
    status: "confirmed",
    evidence:
      "Park 2025: hinokitiol rescued; Yang 2026: DFO rescued; MitoQ rescued",
  },
  {
    id: 11,
    prediction:
      "PE bulk transcriptomic changes are primarily cell composition shifts",
    status: "confirmed",
    evidence:
      "Campbell 2023: adjusting for composition \u2192 1,154 DEGs \u2192 0",
  },
  {
    id: 12,
    prediction:
      "EOPE and LOPE represent distinct barrier failure subtypes",
    status: "confirmed",
    evidence:
      "Chen 2025: EOPE = hypoxia/HIF-1 driven; LOPE = inflammatory",
  },
];

export interface IntroBullet {
  label: string;
  detail: string;
}

export interface SharedFailureMode {
  id: string;
  title: string;
  evidence: { paper: string; year: number; finding: string }[];
}

export const introBullets: IntroBullet[] = [
  {
    label: "Barrier architecture",
    detail: "tight-junction endothelium, regulatory glia, basement membrane",
  },
  {
    label: "Iron transport machinery",
    detail: "ferroportin, transferrin receptors, hepcidin signaling",
  },
  {
    label: "Failure mode",
    detail: "iron trapping \u2192 ferroptosis \u2192 barrier collapse",
  },
  {
    label: "Developmental program origin",
    detail: "both barrier systems derive from shared embryonic programs",
  },
];

export const sharedFailureModes: SharedFailureMode[] = [
  {
    id: "abeta",
    title: "A\u03B2 production as a stress response",
    evidence: [
      {
        paper: "Nishioka et al.",
        year: 2026,
        finding:
          "A\u03B2 aggregates found in preeclamptic but not healthy placentas. Hypoxia drives NF-\u03BAB \u2192 BACE1 \u2192 A\u03B2 production. Low nanomolar A\u03B2 enhances trophoblast invasion; high concentrations inhibit it.",
      },
    ],
  },
  {
    id: "iron",
    title: "Iron dysregulation at ferroportin-expressing barrier surfaces",
    evidence: [
      {
        paper: "Yang et al.",
        year: 2026,
        finding:
          "PE placentas show \u2191TfR1, \u2191DMT1, \u2193ferroportin. Iron enters trophoblasts but can\u2019t exit. Both DFO and MitoQ rescued the phenotype in PE-derived organoids.",
      },
    ],
  },
  {
    id: "macrophage",
    title: "Yolk sac-derived tissue macrophage dysfunction",
    evidence: [
      {
        paper: "Chen et al.",
        year: 2025,
        finding:
          "EOPE and LOPE are distinct subtypes: early-onset is HIF-1/hypoxia-driven, late-onset is inflammatory. Hofbauer cells show subtype-specific lipid-transport defects.",
      },
      {
        paper: "Wei et al.",
        year: 2025,
        finding:
          'Hofbauer cells "almost absent" in early-onset PE villi. The placental macrophage population collapses in severe disease.',
      },
    ],
  },
];

export const keySections: KeySection[] = [
  {
    heading: "Core thesis",
    body: "The neurovascular unit (NVU) and the placental villous unit share cellular homology. They arise from the same developmental programs, use the same molecular machinery, and fail through the same cascades. Both converge on A\u03B2 production as a conserved hypoxic stress response, iron dysregulation at ferroportin-expressing barrier surfaces, and yolk sac-derived tissue macrophage dysfunction.",
  },
  {
    heading: "A\u03B2 in preeclampsia",
    body: "Nishioka et al. (2026) found amyloid-\u03B2 aggregates in preeclamptic but not healthy placentas. Hypoxia drives BACE1 upregulation and A\u03B2 production in placental cells. A\u03B2 aggregates impair syncytialization, creating a feed-forward loop: impaired barrier \u2192 worse hypoxia \u2192 more BACE1 \u2192 more A\u03B2. The same NF-\u03BAB \u2192 BACE1 \u2192 A\u03B2 cascade documented in Alzheimer\u2019s, operating in a different organ.",
  },
  {
    heading: "Ferroptosis as the mechanism",
    body: "Yang et al. (2026) showed PE placentas have elevated iron with dysregulated transporters: \u2191TfR1, \u2191DMT1, \u2193ferroportin. The exact same pattern as in the AD brain. Iron overload drives ferroptosis (4-HNE\u2191, GPX4\u2193) and apoptosis in trophoblasts. Both deferoxamine and MitoQ rescued the phenotype in PE-derived organoids.",
  },
  {
    heading: "The sEV bridge to dementia",
    body: "Park et al. (2025) discovered that ferroptotic trophoblasts export iron and lipid peroxides via small extracellular vesicles (sEVs) mediated by prominin-2. These sEVs enter maternal circulation, causing endothelial activation and impaired angiogenesis. This is how placental ferroptosis creates systemic maternal vascular damage and, decades later, vascular dementia.",
  },
  {
    heading: "Caffeine as cross-domain barrier protectant",
    body: "Zhang et al. (2026, JAMA) found caffeinated coffee reduces dementia risk (HR 0.82) while decaf shows no effect, isolating caffeine\u2019s A2A antagonism as the protective mechanism. The same A2A receptors are expressed on syncytiotrophoblast and upregulated 50% by hypoxia in PE placentas (von Versen-H\u00f6ynck 2009). Caffeine may protect both barriers through the same mechanism.",
  },
  {
    heading: "The conservation principle",
    body: "If the NVU and placental villous unit share cellular homology, developmental origin, molecular machinery, and failure cascades, this suggests a conserved barrier biology program deployed wherever the body needs a selective blood-tissue interface. The same pattern appears in the blood-retinal barrier (M\u00fcller glia, retinal microglia) and blood-nerve barrier (Schwann cells, endoneurial macrophages). FELINE may describe a general barrier failure cascade, not a brain-specific disease.",
  },
];
