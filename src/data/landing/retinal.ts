// Blood-Retinal Barrier — data from §3.3.13, Appendix 6.7

export interface ArchitectureRow {
  feature: string;
  innerBrb: string;
  outerBrb: string;
}

export interface FelineLayerRow {
  layer: string;
  layerFull: string;
  retina: string;
}

export interface ResearchFinding {
  id: string;
  paper: string;
  journal?: string;
  year: number;
  finding: string;
  detail?: string;
  group: "pericyte" | "iron" | "senescence" | "export" | "barrier" | "imaging";
}

export interface Prediction {
  id: number;
  prediction: string;
  source: string;
}

export const retinalHero = {
  kicker: "Blood-Retinal Barrier",
  title: "A window into the brain",
  subtitle:
    "The retina shares embryological origin, cellular architecture, and barrier design with the brain. Retinal iron doubled in AD (85.9 vs 42.9 ng/g). Every FELINE layer has a retinal readout.",
};

export const architectureRows: ArchitectureRow[] = [
  {
    feature: "Endothelium",
    innerBrb: "Claudin-5, occludin, ZO-1/2 (identical to BBB)",
    outerBrb: "RPE tight junctions (claudin-1, ZO-1) facing choroid",
  },
  {
    feature: "Glial support",
    innerBrb: "M\u00FCller glia (retinal astrocyte equivalent)",
    outerBrb: "RPE cells (no CNS equivalent)",
  },
  {
    feature: "Iron export",
    innerBrb: "M\u00FCller glia ferroportin",
    outerBrb: "RPE basolateral Fpn \u2192 choroidal blood (Cp + Heph double redundancy)",
  },
  {
    feature: "Pericyte coverage",
    innerBrb: "Similar to BBB (declining with age)",
    outerBrb: "Choroidal pericytes (separate system)",
  },
  {
    feature: "Macrophage clearance",
    innerBrb: "Retinal microglia (same limitations as brain)",
    outerBrb: "Subretinal macrophages (limited, disease-associated)",
  },
];

export const rpeVulnerability = {
  title: "RPE: The most vulnerable cell in FELINE",
  roles: [
    {
      layer: "E",
      role: "Iron gatekeeper",
      detail: "Basolateral ferroportin + Cp/Heph exports iron to choroidal blood",
    },
    {
      layer: "L",
      role: "Phagocytic clearance",
      detail: "Daily phagocytosis of shed photoreceptor outer segments (the most demanding phagocytic task of any cell in the body)",
    },
    {
      layer: "N",
      role: "Barrier integrity",
      detail: "Tight junctions between RPE cells form the outer BRB",
    },
    {
      layer: "Support",
      role: "Metabolic support",
      detail: "Supplies retinoids, glucose, and nutrients to photoreceptors",
    },
  ],
  cascade:
    "Lysosomal overload from photoreceptor digestion (L-layer stress) \u2192 lipofuscin accumulation \u2192 iron release from degraded heme \u2192 ferroptotic damage \u2192 tight junction loss (N-layer breach) \u2192 barrier failure. A pure L\u2192N cascade.",
};

export const ironHandlingRows = [
  {
    feature: "Import",
    detail: "Tf-TfR1/TfR2 at RPE basolateral membrane; DMT1 in photoreceptors",
  },
  {
    feature: "Export ferroxidases",
    detail: "Cp + Heph co-expressed in RPE (only cell type outside placenta to do this). Double redundancy.",
  },
  {
    feature: "Hahn 2004 double KO",
    detail: "Neither Cp\u207B/\u207B nor Heph alone caused retinal iron accumulation. Double KO: severe retinal iron overload, RPE hypertrophy, photoreceptor degeneration, subretinal neovascularization. Phenocopies AMD.",
  },
  {
    feature: "APP-Zn\u00B2\u207A loop at BRB",
    detail: "APP, A\u03B2, and ferroportin are all present in RPE. Extracellular Zn\u00B2\u207A from A\u03B2 aggregates inhibits APP-Fpn stabilization \u2192 iron retention \u2192 more oxidative damage \u2192 more A\u03B2.",
  },
  {
    feature: "AD retinal iron",
    detail: "Iron doubled (85.9 vs 42.9 ng/g, p < 0.01; Mashkani 2024). Retina mirrored hippocampus within each species. Metal alterations identified prior to amyloid plaque aggregation.",
  },
];

export const felineLayerRows: FelineLayerRow[] = [
  {
    layer: "Fe",
    layerFull: "Iron",
    retina: "M\u00FCller glia + RPE iron handling; dual barrier traps iron from two directions; AD retina: 2\u00D7 iron (Mashkani 2024)",
  },
  {
    layer: "L",
    layerFull: "Lysosome",
    retina: "Lysosomal overload from photoreceptor phagocytosis; RPE processes ~10% of outer segments daily; lipofuscin as iron source",
  },
  {
    layer: "I",
    layerFull: "Insulation",
    retina: "No equivalent myelinated component (retinal neurons are unmyelinated until optic nerve)",
  },
  {
    layer: "N",
    layerFull: "Barrier",
    retina: "Dual: inner BRB \u2248 BBB; outer BRB = RPE (unique); 37% pericyte loss in AD (Shi 2020)",
  },
  {
    layer: "E",
    layerFull: "Export",
    retina: "RPE basolateral Fpn \u2192 choroidal blood; M\u00FCller glia Fpn; moderate clearance speed",
  },
];

export const researchFindings: ResearchFinding[] = [
  {
    id: "shi-2020",
    paper: "Shi et al.",
    journal: "Acta Neuropathologica",
    year: 2020,
    finding: "37% retinal pericyte loss in AD; 38% PDGFR-\u03B2 loss in MCI. A\u03B2\u2084\u2082 deposited inside retinal pericytes (5.6-fold increase). Tight junction proteins reduced.",
    detail: "Pericyte loss detected in retina earlier than in brain, making retinal OCTA a potential early biomarker for AD.",
    group: "pericyte",
  },
  {
    id: "mashkani-2024",
    paper: "Mashkani et al.",
    journal: "Metallomics",
    year: 2024,
    finding: "LA-ICP-MS quantification: retinal iron doubled in AD (85.86 \u00B1 12.86 vs 42.9 \u00B1 1.3 ng/g, p < 0.01). Retina mirrored hippocampus within each species.",
    detail: "Metal alterations identified prior to amyloid plaque aggregation, supporting iron-first temporal ordering.",
    group: "iron",
  },
  {
    id: "kim-cheon-2024",
    paper: "Kim & Cheon",
    journal: "Ageing Research Reviews",
    year: 2024,
    finding: "Compared BBB and BRB endothelial senescence in AD and AMD. Proposed vascular endothelial cell senescence as shared pathogenic mechanism.",
    detail: "Senescent endothelial cells lose tight junction integrity; SASP drives local inflammation and iron sequestration. FELINE adds: senescent pericytes release iron, amplifying the cascade.",
    group: "senescence",
  },
  {
    id: "hahn-2004",
    paper: "Hahn et al.",
    journal: "PNAS",
    year: 2004,
    finding: "Cp/Heph double-knockout mice developed retinal iron overload \u2192 RPE hypertrophy \u2192 photoreceptor degeneration \u2192 subretinal neovascularization. Phenocopies AMD.",
    detail: "The clearest existing demonstration of E-layer failure leading to iron accumulation and neurodegeneration in any FELINE compartment. Neither single knockout caused pathology.",
    group: "export",
  },
  {
    id: "park-2014",
    paper: "Park et al.",
    journal: "Neurobiology of Aging",
    year: 2014,
    finding: "Intracellular A\u03B2\u2084\u2082 accumulation in 5XFAD mouse RPE destroyed ZO-1 and occludin tight junctions without causing cell death.",
    detail: "A\u03B2 breaks the outer BRB from inside, not outside. A pure L\u2192N cascade: failed degradation of A\u03B2 \u2192 tight junction dissolution \u2192 barrier breakdown.",
    group: "barrier",
  },
  {
    id: "hao-2024",
    paper: "Hao et al.",
    journal: "npj Digital Medicine",
    year: 2024,
    finding: "Eye-AD model achieved AUC 0.9355 for early-onset AD detection from OCTA retinal imaging alone.",
    detail: "Demonstrates that AI-augmented retinal imaging can detect AD-associated vascular changes with clinical-grade accuracy. Basis for proposed FELINE-EYE study.",
    group: "imaging",
  },
  {
    id: "ravichandran-2025",
    paper: "Ravichandran et al.",
    year: 2025,
    finding: "Retinal gliosis area correlated with plasma p-tau217 (\u03B2 = 0.48, p = 0.007) in cognitively unimpaired individuals.",
    detail: "Retinal M\u00FCller glia activation (gliosis) tracks with brain tau pathology even before symptoms appear.",
    group: "imaging",
  },
  {
    id: "fernandez-albarral-2022",
    paper: "Fern\u00E1ndez-Albarral et al.",
    journal: "Antioxidants",
    year: 2022,
    finding: "HO-1 deletion in microglia reduced retinal inflammation in tauopathy mice. GFAP and complement C3 both elevated; HO-1 iron release drove the inflammatory cascade.",
    detail: "Demonstrates the iron \u2192 inflammation \u2192 complement pathway in retinal tissue: HO-1 releases iron from heme, which drives complement activation.",
    group: "iron",
  },
];

export const predictions: Prediction[] = [
  {
    id: 1,
    prediction: "N-vascular score (OCTA) declines before Fe-score rises (pericyte loss precedes iron accumulation)",
    source: "\u00A76.7.5",
  },
  {
    id: 2,
    prediction: "Fe-score rises before A\u03B2-score rises (iron-first, not amyloid-first, in same tissue)",
    source: "\u00A76.7.5",
  },
  {
    id: 3,
    prediction: "Gliosis score rises after both N-vascular and Fe-score changes (reactive, not causal)",
    source: "\u00A76.7.5",
  },
  {
    id: 4,
    prediction: "RNFL thinning is the last retinal change (axonal degeneration is downstream)",
    source: "\u00A76.7.5",
  },
  {
    id: 5,
    prediction: "APOE \u03B54 carriers show earlier Fe-score rise (CypA-MMP9 pericyte damage)",
    source: "\u00A76.7.5",
  },
  {
    id: 6,
    prediction: "Women show delayed Fe-score rise (menstrual iron depletion = Akinci effect)",
    source: "\u00A76.7.5",
  },
  {
    id: 7,
    prediction: "Retinal iron mapping on Cp/Heph KO vs AD vs AMD should show three distinct patterns, each reflecting which FELINE layer failed first",
    source: "\u00A73.3.13.4",
  },
];
