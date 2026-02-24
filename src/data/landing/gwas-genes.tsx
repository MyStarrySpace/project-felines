import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";
import { defenseLayers } from "./entry-points";

type FelineLayerId = (typeof defenseLayers)[number];

export interface GwasGene {
  id: string;
  fullName: string;
  chromosome: string;
  primaryLayer: FelineLayerId;
  secondaryLayers?: FelineLayerId[];
  function: string;
  ironConnection: ReactNode;
}

export const gwasGenes: GwasGene[] = [
  {
    id: "APOE",
    fullName: "Apolipoprotein E",
    chromosome: "19q13.32",
    primaryLayer: "E",
    secondaryLayers: ["Fe", "N"],
    function:
      "Lipid transport chaperone. Regulates CSF ferritin and inhibits ferroptosis by blocking ferritinophagy.",
    ironConnection: (
      <>
        Potently inhibits ferroptosis (EC50 ~10 nM).
        <Cite id="belaidi-2024-molpsychiatry" /> APOE4 risk comes from lower
        protein abundance, not weaker function. CSF ferritin tracks APOE
        levels.
        <Cite id="ayton-2015-natcomms" citationIds={["ayton-2015-natcomms-c2"]} />
      </>
    ),
  },
  {
    id: "BIN1",
    fullName: "Bridging Integrator 1",
    chromosome: "2q14.3",
    primaryLayer: "I",
    secondaryLayers: ["L"],
    function:
      "Membrane dynamics and endocytosis. Predominantly expressed in mature oligodendrocytes.",
    ironConnection: (
      <>
        &ldquo;The large majority of BIN1 is expressed in mature
        oligodendrocytes.&rdquo;
        <Cite id="derossi-2016-molneurodegen" /> Oligodendrocytes are the most
        iron-rich cells in the brain. BIN1 localizes to white matter tracts.
      </>
    ),
  },
  {
    id: "CLU",
    fullName: "Clusterin",
    chromosome: "8p21.1",
    primaryLayer: "N",
    secondaryLayers: ["E", "L"],
    function:
      "Extracellular chaperone. Maintains BBB integrity and clears misfolded proteins from perivascular space.",
    ironConnection: (
      <>
        BBB chaperone upregulated by iron-induced oxidative stress. Clusterin
        knockout increases BBB permeability, allowing uncontrolled iron entry
        into parenchyma.
      </>
    ),
  },
  {
    id: "PICALM",
    fullName: "Phosphatidylinositol Binding Clathrin Assembly Protein",
    chromosome: "11q14.2",
    primaryLayer: "Fe",
    secondaryLayers: ["N"],
    function:
      "Clathrin-mediated endocytosis. Controls transferrin receptor internalization.",
    ironConnection: (
      <>
        &ldquo;PICALM plays a critical role in iron homeostasis.&rdquo;
        <Cite id="scotland-2012-plosone" /> Controls transferrin receptor
        endocytosis &mdash; literally the iron import mechanism.
      </>
    ),
  },
  {
    id: "CR1",
    fullName: "Complement Receptor 1",
    chromosome: "1q32.2",
    primaryLayer: "E",
    secondaryLayers: ["N"],
    function:
      "Erythrocyte complement receptor. Mediates peripheral clearance of immune complexes and amyloid via liver.",
    ironConnection: (
      <>
        Erythrocyte-mediated clearance to liver and spleen: the same organs
        that handle systemic iron recycling. CR1 variants reduce peripheral
        waste export capacity.
      </>
    ),
  },
  {
    id: "TREM2",
    fullName: "Triggering Receptor Expressed on Myeloid Cells 2",
    chromosome: "6p21.1",
    primaryLayer: "L",
    secondaryLayers: ["I"],
    function:
      "Microglial activation receptor. Drives phagocytosis of myelin debris and lipid-rich damage products.",
    ironConnection: (
      <>
        TREM2 knockout mice show &ldquo;defective clearance of myelin debris
        and more axonal pathology.&rdquo;
        <Cite id="cantoni-2015-actaneuropathol" /> Myelin debris is iron-loaded.
        Failed clearance means iron stays in the parenchyma.
      </>
    ),
  },
  {
    id: "SORL1",
    fullName: "Sortilin Related Receptor 1",
    chromosome: "11q24.1",
    primaryLayer: "L",
    secondaryLayers: ["Fe"],
    function:
      "Endosomal sorting receptor. Routes cargo between endosomes, lysosomes, and cell surface.",
    ironConnection: (
      <>
        SORL1 mutations affect the iron homeostasis transcriptome. Endosomal
        sorting controls where transferrin-bound iron is delivered inside the
        cell.
      </>
    ),
  },
  {
    id: "ABCA7",
    fullName: "ATP Binding Cassette Subfamily A Member 7",
    chromosome: "19p13.3",
    primaryLayer: "I",
    secondaryLayers: ["L"],
    function:
      "Phospholipid efflux transporter. Regulates membrane PUFA composition.",
    ironConnection: (
      <>
        Phospholipid efflux controls membrane PUFA content. PUFAs are the
        substrate for ferroptosis. ABCA7 loss-of-function increases ferroptosis
        vulnerability by enriching membranes with oxidizable lipids.
      </>
    ),
  },
  {
    id: "CD33",
    fullName: "Siglec-3",
    chromosome: "19q13.41",
    primaryLayer: "L",
    function:
      "Inhibitory receptor on microglia. Suppresses phagocytic clearance of debris.",
    ironConnection: (
      <>
        Inhibits microglial clearance of iron-laden debris. CD33 gain-of-function
        means more iron-loaded myelin accumulates in the parenchyma.
      </>
    ),
  },
  {
    id: "MS4A",
    fullName: "Membrane Spanning 4-Domains A Cluster",
    chromosome: "11q12.2",
    primaryLayer: "L",
    function:
      "Modulates TREM2 signaling. Part of the microglial activation cascade.",
    ironConnection: (
      <>
        Modulates TREM2 soluble levels. Controls whether microglia effectively
        clear iron-loaded myelin debris or leave it to propagate ferroptosis.
      </>
    ),
  },
  {
    id: "SPI1",
    fullName: "Spi-1 Proto-Oncogene (PU.1)",
    chromosome: "11p11.2",
    primaryLayer: "L",
    function:
      "Master transcription factor for microglial gene program. Regulates ferritin and phagocytic genes.",
    ironConnection: (
      <>
        &ldquo;Lower SPI1 expression reduces AD risk by regulating myeloid
        gene expression.&rdquo;
        <Cite id="huang-2017-natneurosci" /> PU.1 controls ferritin
        transcription and the entire microglial iron management program.
      </>
    ),
  },
  {
    id: "PLCG2",
    fullName: "Phospholipase C Gamma 2",
    chromosome: "16q23.3",
    primaryLayer: "L",
    function:
      "Cleaves membrane phospholipids. Modulates TREM2-dependent phagocytosis.",
    ironConnection: (
      <>
        Cleaves membrane phospholipids into signaling molecules that drive
        TREM2-dependent phagocytosis of iron-loaded myelin debris.
      </>
    ),
  },
  {
    id: "ABI3",
    fullName: "ABI Family Member 3",
    chromosome: "17q21.31",
    primaryLayer: "L",
    function:
      "Actin cytoskeleton regulator. Required for phagocytic cup formation.",
    ironConnection: (
      <>
        Actin dynamics for phagocytic cup formation. Without ABI3, microglia
        cannot engulf iron-loaded debris. Loss-of-function leaves iron in the
        extracellular space.
      </>
    ),
  },
  {
    id: "FERMT2",
    fullName: "Fermitin Family Member 2 (Kindlin-2)",
    chromosome: "14q22.1",
    primaryLayer: "N",
    secondaryLayers: ["I"],
    function:
      "Integrin activation. Required for pericyte adhesion to basement membrane and OPC myelination.",
    ironConnection: (
      <>
        Integrin-mediated pericyte adhesion maintains BBB integrity. FERMT2
        also supports OPC myelination. Loss weakens two FELINE layers
        simultaneously: neurovascular barrier and insulation.
      </>
    ),
  },
];

export const gwasStats = {
  riskLoci: { value: "75+", label: "risk loci", description: "identified by GWAS" },
  ironGenes: { value: "0", label: "iron genes", description: "among GWAS hits" },
  felineMapping: {
    value: "~70%",
    label: "map to FELINE",
    description: "defense layer genes",
  },
};

export const survivorshipBias = {
  headline: "Survivorship bias",
  body: "GWAS studies elderly cohorts. Severe iron gene mutations (HFE, TFR2, HAMP, SLC40A1) cause organ failure decades earlier. These individuals never reach enrollment age. The genetics we see in AD encodes the defense against iron, not iron itself.",
};

export const layerLabels: Record<FelineLayerId, string> = {
  Fe: "Iron homeostasis",
  L: "Lysosome / antioxidant",
  I: "Insulation / buffering",
  N: "Neurovascular",
  E: "Export",
};

/** Group genes by their primary FELINE layer */
export function genesByLayer(): Record<FelineLayerId, GwasGene[]> {
  const result = Object.fromEntries(
    defenseLayers.map((l) => [l, [] as GwasGene[]])
  ) as Record<FelineLayerId, GwasGene[]>;
  for (const gene of gwasGenes) {
    result[gene.primaryLayer].push(gene);
  }
  return result;
}
