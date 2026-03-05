/**
 * Data for FELINE Introduction section.
 *
 * Uses T. gondii (cat parasite → AD without plaques) to motivate the acronym,
 * then walks through each defense layer.
 */

import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";

// ---------------------------------------------------------------------------
// Beat 1: T. gondii puzzle
// ---------------------------------------------------------------------------

export const toxoPuzzle = {
  stat: "2.9\u00D7",
  statLabel: "dementia risk with T. gondii infection",
  headline: "A cat parasite causes dementia without plaques.",
  body: (
    <>
      <em>T. gondii</em> infection nearly triples dementia risk in a
      Taiwan cohort of 800.
      <Cite id="yang-2021-parasitesvectors" />
      {" "}But in AD mice, the same parasite reduces amyloid plaque
      density.
      <Cite id="yanes-2024-jinfectdis" />
    </>
  ),
  paradox:
    "Fewer plaques should mean less disease. T. gondii does the opposite.",
  resolution: (
    <>
      T. gondii activates ferroptosis in the hippocampus
      <Cite id="wang-2023-plosntd" />
      {" "}and disrupts blood-brain barrier integrity.
      <Cite id="olivera-2021-elife" />
      {" "}The plaques were never the problem.
    </>
  ),
};

// ---------------------------------------------------------------------------
// Beat 2: Cat connection + FELINE reveal
// ---------------------------------------------------------------------------

export const catReveal = {
  hookLine: "Speaking of cats, the other name we give to them is also a useful acronym to understand ferroptosis vulnerability.",
  revealLine: "",
};

export const felineLetters = [
  { letter: "F", subscript: "e" },
  { letter: "L", subscript: "" },
  { letter: "I", subscript: "" },
  { letter: "N", subscript: "" },
  { letter: "E", subscript: "" },
] as const;

// ---------------------------------------------------------------------------
// Beat 3: Five defense layers
// ---------------------------------------------------------------------------

export interface FelineLayer {
  id: string;
  letter: string;
  subscript: string;
  name: string;
  protects: ReactNode;
  failureMode: ReactNode;
}

export const felineLayers: FelineLayer[] = [
  {
    id: "Fe",
    letter: "F",
    subscript: "e",
    name: "Iron homeostasis",
    protects:
      "Ferritin (FTH1/FTL) sequesters up to 4,500 iron atoms per cage. Transferrin shuttles Fe\u00B3\u207A between cells via TfR1. Ferroportin (SLC40A1) is the only known iron exporter. Hepcidin regulates ferroportin from the liver; astrocytes produce a local version at the BBB.",
    failureMode:
      "Free Fe\u00B2\u207A escapes containment and reacts with H\u2082O\u2082 via Fenton chemistry, generating hydroxyl radicals that attack membrane lipids.",
  },
  {
    id: "L",
    letter: "L",
    subscript: "",
    name: "Lysosome / antioxidant",
    protects:
      "GPX4 neutralizes lipid peroxides using glutathione (GSH) as substrate. The cystine/glutamate antiporter (system x\u1D9C\u207B) supplies cysteine for GSH synthesis. NAD\u207A/SIRT3 maintains mitochondrial antioxidant capacity. Lysosomes recycle ferritin and damaged organelles via ferritinophagy.",
    failureMode:
      "GPX4 depletion or GSH exhaustion leaves lipid peroxides unchecked. Lysosomal membrane permeabilization releases stored iron directly into the cytoplasm.",
  },
  {
    id: "I",
    letter: "I",
    subscript: "",
    name: "Insulation / buffering",
    protects: (
      <>
        Myelin sheaths wrap axons in iron-rich lipid bilayers. Ferritin, tau,
        and \u03B1-synuclein each bind or buffer iron in different compartments.
        Oligodendrocytes are the brain&apos;s most iron-dense cells and provide
        both electrical insulation and iron insulation via FTH1 export to
        neighboring neurons.
      </>
    ),
    failureMode:
      "Demyelination exposes sequestered iron. Tau hyperphosphorylation and \u03B1-synuclein aggregation release the iron these proteins were managing, seeding new Fenton reactions.",
  },
  {
    id: "N",
    letter: "N",
    subscript: "",
    name: "Neurovascular",
    protects:
      "Pericytes wrap capillaries and control BBB permeability. Astrocyte endfeet express hepcidin and AQP4, gating iron entry and waste clearance. Endothelial tight junctions form the physical barrier.",
    failureMode:
      "Pericyte loss opens the BBB. Plasma transferrin-bound iron floods the parenchyma. Astrocyte endfoot retraction impairs both iron gating and glymphatic drainage.",
  },
  {
    id: "E",
    letter: "E",
    subscript: "",
    name: "Export",
    protects:
      "Ferroportin/ceruloplasmin oxidize and export iron from cells. The glymphatic system (AQP4-dependent) clears interstitial waste during sleep. Systemically, liver hepcidin regulates gut absorption and spleen recycling.",
    failureMode:
      "Ceruloplasmin decline stalls ferroportin. AQP4 depolarization reduces glymphatic clearance. Iron accumulates at normal dietary intake because export, not intake, is the bottleneck.",
  },
];

// ---------------------------------------------------------------------------
// Beat 3b: Category-focused layer segments (for echo text + hover highlights)
// ---------------------------------------------------------------------------

export interface LayerSegment {
  /** Functional category label shown as prefix */
  label: string;
  /** Description of this defense category */
  text: ReactNode;
  /** GWAS gene IDs that highlight in echo text when this segment is hovered */
  genes: string[];
}

export interface EchoLayerData {
  segments: LayerSegment[];
}

export const felineLayerSegments: Record<string, EchoLayerData> = {
  Fe: {
    segments: [
      {
        label: "Iron sequestration",
        text: (
          <>
            Each ferritin shell stores up to 4,500 Fe(III) atoms as an
            inorganic complex inside a hollow protein cage.
            <Cite id="harrison-arosio-1996-bba" />
          </>
        ),
        genes: ["WDR12", "MYO15A", "SNCA", "CAMK2D"],
      },
      {
        label: "Iron export",
        text: (
          <>
            Ferroportin exports cellular iron; hepcidin degrades it to
            limit release.
            <Cite id="nemeth-2004-science" />
            {" "}APP stabilizes it at the cell surface.
            <Cite id="tsatsanis-2020-molpsych" />
          </>
        ),
        genes: ["APP", "SLC2A4RG", "SLC6A3", "RIT2"],
      },
      {
        label: "Mitochondrial iron use",
        text: (
          <>
            Intracellular iron is compartmentalized into heme, iron-sulfur
            clusters, and ferritin storage.
            <Cite id="luck-2012-currtopics" />
          </>
        ),
        genes: ["TSPOAP1", "COX7C", "SDHC", "CRLS1"],
      },
      {
        label: "Systemic regulation",
        text: (
          <>
            Liver hepcidin degrades ferroportin to limit iron release.
            <Cite id="nemeth-2004-science" />
            {" "}Astrocytes produce a local version at the BBB.
            <Cite id="you-2022-celldeath" />
          </>
        ),
        genes: ["GCH1", "LMBRD1"],
      },
    ],
  },
  L: {
    segments: [
      {
        label: "Lipid peroxide neutralization",
        text: (
          <>
            GPX4 neutralizes lipid peroxides using glutathione as substrate. The
            cystine/glutamate antiporter supplies cysteine for GSH synthesis.
            <Cite id="stockwell-2022-cell" />
          </>
        ),
        genes: [],
      },
      {
        label: "Microglial phagocytosis",
        text: (
          <>
            TREM2 microglia clear myelin debris; its loss causes defective
            clearance and axonal pathology.
            <Cite id="cantoni-2015-actaneuropathol" />
          </>
        ),
        genes: ["TREM2", "SPI1", "CD33", "PLCG2", "GPNMB"],
      },
      {
        label: "Endosomal trafficking",
        text: (
          <>
            PICALM plays a critical role in iron homeostasis.
            <Cite id="scotland-2012-plosone" />
          </>
        ),
        genes: ["PICALM", "BIN1", "SORL1", "SORT1", "LRRK2", "VPS35", "RAB29", "SH3GL2"],
      },
      {
        label: "Lysosomal integrity",
        text: (
          <>
            Homozygous GRN mutation causes neuronal ceroid lipofuscinosis,
            a lysosomal storage disease.
            <Cite id="paushter-2018-actaneuropathol" />
            {" "}Permeabilization releases stored iron directly into the
            cytoplasm.
          </>
        ),
        genes: ["CTSB", "GRN", "TMEM106B", "GBA1", "TMEM175", "VPS13C", "SCARB2"],
      },
    ],
  },
  I: {
    segments: [
      {
        label: "Myelin sheath integrity",
        text: (
          <>
            Oligodendrocytes have the highest iron concentration of any
            brain cell: 3.05 mM, fivefold higher than neurons.
            <Cite id="reinert-2019" />
          </>
        ),
        genes: ["ANK3", "CELF1", "KAT8", "MOBP", "OMG", "GALC"],
      },
      {
        label: "Iron buffering proteins",
        text: (
          <>
            Tau,
            <Cite id="lei-2012-natmed" /> {"\u03B1"}-synuclein,
            <Cite id="peng-2010-jinorgbiochem" /> and ferritin each bind or
            buffer iron in different compartments. Hyperphosphorylation or
            aggregation releases the iron they were managing.
          </>
        ),
        genes: ["MAPT", "CD2AP", "SNCA"],
      },
      {
        label: "Fatty acid peroxidation buffering",
        text: (
          <>
            Glial ABCA1 is required for cholesterol efflux to apoE in the
            brain.
            <Cite id="hirsch-reinshagen-2004-jbc" />
            {" "}When lipid metabolism fails, toxic species accumulate and
            trigger oligodendrocyte lipoapoptosis.
          </>
        ),
        genes: ["ABCA1", "DGKQ", "ECHDC3", "ELOVL7", "SREBF1", "MVK"],
      },
      {
        label: "Reactive astrocyte damage",
        text: (
          <>
            Neurotoxic A1 astrocytes secrete a soluble toxin that kills
            oligodendrocytes, compounding insulation loss from within.
            <Cite id="liddelow-2017-nature" />
          </>
        ),
        genes: ["NME8", "PRDM7"],
      },
    ],
  },
  N: {
    segments: [
      {
        label: "Pericyte coverage",
        text: (
          <>
            Pericytes are necessary for blood-brain barrier formation.
            <Cite id="armulik-2010-nature" />
            {" "}Their loss is one of the earliest measurable changes in
            neurodegeneration.
            <Cite id="nation-2019-natmed" />
          </>
        ),
        genes: ["CASS4", "NCK2", "F11R"],
      },
      {
        label: "Tight junction adhesion",
        text:
          "Integrin-mediated adhesion and cytoskeletal scaffolding maintain the physical seal between endothelial cells.",
        genes: ["FERMT2", "CLNK/HS3ST1", "HS3ST5"],
      },
      {
        label: "Vascular signaling",
        text:
          "Angiotensin regulation and receptor tyrosine kinase signaling control cerebral blood flow and BBB tone.",
        genes: ["ACE", "EPHA1", "PTK2B", "SEC61G/EGFR", "STK39", "HLA-DRB1"],
      },
      {
        label: "Extracellular matrix remodeling",
        text:
          "Metalloproteinases and heparan sulfate enzymes maintain the basement membrane around cerebral microvessels.",
        genes: ["ADAMTS1", "RASGEF1C", "FOXF1"],
      },
    ],
  },
  E: {
    segments: [
      {
        label: "Cellular iron export",
        text: (
          <>
            Ferroportin/ceruloplasmin oxidize and export iron from cells.
            <Cite id="patel-2002-jneurosci" />
            {" "}Without ceruloplasmin, ferroportin stalls and iron accumulates.
          </>
        ),
        genes: ["RIT2"],
      },
      {
        label: "Lipid-mediated transport",
        text: (
          <>
            ApoE is a potent inhibitor of ferroptosis. APOE4 carriers have
            lower apoE abundance, increasing vulnerability.
            <Cite id="belaidi-2024-molpsychiatry" />
          </>
        ),
        genes: ["APOE", "TSPAN14", "ABCG1"],
      },
      {
        label: "Protein chaperoning",
        text: (
          <>
            Clusterin keeps misfolded proteins soluble and mediates their
            disposal.
            <Cite id="wyatt-2011-cmls" />
            {" "}Neprilysin degrades small peptides including A{"\u03B2"}.
          </>
        ),
        genes: ["CLU", "MME", "BAG3"],
      },
      {
        label: "Receptor shedding",
        text: (
          <>
            ADAM10 is the constitutive alpha-secretase of APP.
            <Cite id="kuhn-2010-emboj" />
          </>
        ),
        genes: ["ADAM10", "ADAM17"],
      },
      {
        label: "Peripheral clearance",
        text:
          "Complement-mediated clearance of immune complexes routes waste to liver and spleen for recycling.",
        genes: ["CR1", "IGH", "DOC2A", "MFGE8"],
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Echo text gene lists — derived from segments (full AD + PD GWAS hits)
// ---------------------------------------------------------------------------

/** Collect all gene IDs for a layer from its segments. */
export function echoGenesForLayer(layerId: string): string[] {
  const data = felineLayerSegments[layerId];
  if (!data) return [];
  const seen = new Set<string>();
  const result: string[] = [];
  for (const seg of data.segments) {
    for (const g of seg.genes) {
      if (!seen.has(g)) {
        seen.add(g);
        result.push(g);
      }
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// Beat 4: Swiss cheese summary
// ---------------------------------------------------------------------------

export const swissCheese = {
  line1:
    "When multiple layers fail simultaneously, iron-driven ferroptosis cascades through oligodendrocytes.",
  line2:
    "No single layer failure causes disease. Neurodegeneration begins when the holes line up.",
};
