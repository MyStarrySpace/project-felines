/**
 * Regenerate the full gwas-genes.tsx with all 217 genes.
 *
 * Uses:
 * - gene-functions.json for gene data (NCBI summaries, UniProt, names)
 * - gene-citation-map.json for disease assignments and citation IDs
 * - feline-intro.tsx layer segments for primary layer assignments
 * - gwas-genetics.ts bibliography for GWAS citations
 *
 * Outputs: src/data/landing/gwas-genes.tsx (complete rewrite)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load data sources
const geneData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "gene-functions.json"), "utf-8")
);

const citationMap = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "gene-citation-map.json"), "utf-8")
);

// Parse layer assignments from feline-intro.tsx
const felineContent = fs.readFileSync(
  path.resolve(__dirname, "../src/data/landing/feline-intro.tsx"),
  "utf-8"
);

// Extract gene→layer mapping from felineLayerSegments
const layerGeneMap = new Map(); // gene symbol → primary layer

// Parse by splitting on layer keys
const segmentsStart = felineContent.indexOf("felineLayerSegments");
if (segmentsStart >= 0) {
  const segContent = felineContent.slice(segmentsStart);
  const layerKeys = ["Fe", "L", "I", "N", "E"];

  for (const layer of layerKeys) {
    const layerIdx = segContent.indexOf(`  ${layer}:`);
    if (layerIdx < 0) continue;

    // Find end of this layer section (next layer start or end of object)
    let endIdx = segContent.length;
    for (const other of layerKeys) {
      if (other === layer) continue;
      const otherIdx = segContent.indexOf(`  ${other}:`, layerIdx + 5);
      if (otherIdx > 0 && otherIdx < endIdx) endIdx = otherIdx;
    }

    const layerSection = segContent.slice(layerIdx, endIdx);

    // Find all gene symbols in genes arrays
    const genesPattern = /genes:\s*\[([^\]]*)\]/g;
    let genesMatch;
    while ((genesMatch = genesPattern.exec(layerSection)) !== null) {
      const geneList = genesMatch[1];
      const genes =
        geneList.match(/"([^"]+)"/g)?.map((g) => g.replace(/"/g, "")) || [];
      for (const gene of genes) {
        if (!layerGeneMap.has(gene)) {
          layerGeneMap.set(gene, layer);
        }
      }
    }
  }
}

// Add manual layer overrides for important genes not in echo text
const MANUAL_LAYERS = {
  // AD genes
  INPP5D: "L", HLA_DQA1: "L", "CLNK/HS3ST1": "N", "ZCWPW1/NYAP1": "I",
  SLC24A4: "Fe", APH1B: "L", IL34: "L", "SCIMP/RABEP1": "L",
  ABCA7: "I", "SLC24A4/RIN3": "Fe", SPPL2A: "L", TNIP1: "L",
  SHARPIN: "L", OTULIN: "L", BLNK: "L", PRKD3: "L",
  ICA1: "L", TPCN1: "L", SNX1: "L", CTSH: "L",
  MAF: "I", WDR81: "L", KLF16: "I", SIGLEC11: "L",
  LILRB2: "L", RBCK1: "L", RHOH: "L", ANKH: "Fe",
  IDUA: "L", CD33: "L", MS4A: "L", "HLA-DQA1": "L",
  SORT1: "L", TMEM106B: "L",

  // PD genes - kinases and signaling
  ZYG11B: "L", KCND3: "I", SDHC: "Fe", VAMP4: "L",
  ITPKB: "L", SIPA1L2: "L", AKT3: "L", KCNS3: "I",
  KLHL29: "L", SRD5A2: "I", BIRC6: "L", XPO1: "L",
  AAK1: "L", KCNIP3: "I", TBC1D8: "L", ACMSD: "Fe",
  ACVR2A: "N", ACVR1: "N", TANK: "L", GRM7: "I",
  TBC1D5: "L", RBMS3: "I", PXK: "L", ADCY5: "I",
  MED12L: "I", SUCNR1: "Fe", PLCH1: "I", SPTSSB: "I",
  PIK3CA: "L", MCCC1: "Fe", TMEM175: "L", MFSD10: "L",
  BST1: "L", LCORL: "I", STBD1: "Fe", CAMK2D: "Fe",
  CLCN3: "L", SV2C: "L", FAM151B: "I", ZNF608: "I",
  REEP2: "I", RANBP9: "L", MBOAT1: "I", POM121L2: "I",
  ZNF311: "I", "HLA-DRB1": "N", RIMS1: "L", FYN: "N",
  STX7: "L", KLHL7: "L", DYNC1I1: "I", NYAP1: "I",
  PTPRN2: "L", CLN8: "L", PRAG1: "N", FGF20: "I",
  BIN3: "L", SYBU: "L", CYRIB: "L", UBAP1: "L",
  ITGA8: "N", PSD: "L", AS3MT: "Fe", DLG2: "I",
  ZW10: "L", IGSF9B: "I", WNK1: "N", SLC38A2: "Fe",
  KCNH3: "I", RAB21: "L", ANO4: "I", BTBD11: "L",
  HIP1R: "L", CAB39L: "L", MBNL2: "I", IRS2: "L",
  RALGAPA1: "L", DLK1: "I", HERC1: "L", CRAMP1: "I",
  SYT17: "L", ATP2A1: "Fe", STX4: "L", CYLD: "L",
  TOX3: "I", CHD9: "I", GP1BA: "N", PHF23: "I",
  NCOR1: "I", TUBG1: "I", KANSL1: "I", NPEPPS: "L",
  PPP1R9B: "I", STRADA: "L", SLC16A6: "Fe", RPTOR: "L",
  ASPSCR1: "L", MAPRE2: "I", SPPL2B: "L", ISYNA1: "I",
  PDCD5: "L", PPFIA3: "I", DDRGK1: "L", TPX2: "I",
  PTPN1: "L", DYRK1A: "I", DSCAM: "I", TRPM2: "Fe",
  ADARB1: "I", "SNCA-AS1": "Fe",
  // Monogenic PD
  PINK1: "Fe", PRKN: "L", INPP5F: "L", USP8: "L",
  GAK: "L", GBA1: "L", F11R: "N",
};

// Apply manual overrides
for (const [gene, layer] of Object.entries(MANUAL_LAYERS)) {
  if (!layerGeneMap.has(gene)) {
    layerGeneMap.set(gene, layer);
  }
}

console.log(`Layer assignments from echo text: ${layerGeneMap.size} genes`);

// Genes with specific citations (preserve original ironConnection)
const SPECIFIC_CITE_GENES = {
  APOE: {
    ironConnection: `(
      <>
        Potently inhibits ferroptosis (EC50 ~10 nM).
        <Cite id="belaidi-2024-molpsychiatry" /> CSF ferritin is strongly
        associated with APOE levels and elevated by the APOE4 allele.
        <Cite id="belaidi-2024-molpsychiatry" citationIds={["belaidi-2024-molpsychiatry-c2"]} />
      </>
    )`,
    layers: { primary: "E", secondary: ["Fe", "I"] },
  },
  BIN1: {
    ironConnection: `(
      <>
        &ldquo;The large majority of BIN1 is expressed in mature
        oligodendrocytes.&rdquo;
        <Cite id="derossi-2016-molneurodegen" /> Oligodendrocytes are the most
        iron-rich cells in the brain. BIN1 regulates endosomal processing where
        transferrin-bound iron is liberated.
      </>
    )`,
    layers: { primary: "L", secondary: ["E", "I"] },
  },
  TREM2: {
    ironConnection: `(
      <>
        TREM2 knockout mice show &ldquo;defective clearance of myelin debris
        and more axonal pathology.&rdquo;
        <Cite id="cantoni-2015-actaneuropathol" /> Myelin debris is iron-loaded.
        TREM2 variants affect ferritinophagy regulation, providing a direct
        Fe-layer connection.
      </>
    )`,
    layers: { primary: "L", secondary: ["E", "Fe"] },
  },
  PICALM: {
    ironConnection: `(
      <>
        &ldquo;PICALM plays a critical role in iron homeostasis.&rdquo;
        <Cite id="scotland-2012-plosone" /> Controls transferrin receptor
        endocytosis &mdash; literally the iron import mechanism.
      </>
    )`,
    layers: { primary: "L", secondary: ["Fe"] },
  },
  SPI1: {
    ironConnection: `(
      <>
        &ldquo;Lower SPI1 expression reduces AD risk by regulating myeloid
        gene expression.&rdquo;
        <Cite id="huang-2017-natneurosci" /> PU.1 controls ferritin
        transcription and the entire microglial iron management program.
      </>
    )`,
    layers: { primary: "L", secondary: [] },
  },
};

// Subcategory inference per layer
function inferSubcategory(layer, funcText, geneName) {
  const lower = (funcText || "").toLowerCase() + " " + (geneName || "").toLowerCase();

  if (layer === "Fe") {
    if (/\b(mitochond|electron\s*transport|respiratory|complex\s*[iv]|nadh|succin|sdhc)/i.test(lower))
      return "Mitochondrial";
    if (/\b(cofactor|nad\+|sirt|gsh|glutathion|acmsd)/i.test(lower))
      return "Cofactor synthesis";
    if (/\b(signal|receptor|kinase|calcium|calmodulin|camk|channel|trpm)/i.test(lower))
      return "Signaling & regulation";
    return "Iron transport & metabolism";
  }
  if (layer === "L") {
    if (/\b(endosom|endocyt|clathrin|vesicle\s*traffick|sorting|sorl|picalm|rab\d|vamp|stx\d|snx|synapt)/i.test(lower))
      return "Endosomal trafficking";
    if (/\b(autophagy|lysosom|cathepsin|degradat|proteasom|ubiquit|ferritinopha|granulin|cln8|tmem175|gba)/i.test(lower))
      return "Autophagy & degradation";
    if (/\b(innate|immun|trem2|cd33|ms4a|spi1|siglec|lilrb|toll|nf.?kb|complement|inflamm|cytokine|interferon|tnf|interleukin|il34)/i.test(lower))
      return "Innate immunity";
    if (/\b(lipid\s*signal|phospholipase|phosphatid|inositol|plcg|pip[23]|dag\b|pkc|prkd|dgk)/i.test(lower))
      return "Lipid signaling";
    if (/\b(protease|proteoly|ctsb|ctsh|adam\d|sppl|secretase|metalloprotein|peptidase)/i.test(lower))
      return "Proteolysis";
    if (/\b(kinase|phosphat|signal|receptor|akt|pik3|mapk|erk|jak|stat|rptor|mtor)/i.test(lower))
      return "Signaling & regulation";
    return "Lysosomal regulation";
  }
  if (layer === "I") {
    if (/\b(myelin|oligodendrocyt|mog\b|mobp|omg\b|galc|plp\b)/i.test(lower))
      return "Myelin & structural";
    if (/\b(ion\s*channel|potassium|sodium|calcium\s*channel|kcn|scn|voltage|gated)/i.test(lower))
      return "Ion channels";
    if (/\b(chromatin|transcript|histone|epigenet|dna\s*(repair|bind)|zinc\s*finger|znf|phf|chd\d|ncor)/i.test(lower))
      return "Chromatin & transcription";
    if (/\b(growth|fgf|egf|tgf|bdnf|ngf|wnt|notch|hedgehog|morphogen|develop)/i.test(lower))
      return "Growth & signaling";
    if (/\b(lipid\s*(trans|efflux|export)|abca|abcg|apolipoprotein|cholester|sterol|srebf)/i.test(lower))
      return "Lipid transport";
    if (/\b(cytoskelet|actin|tubulin|dynein|kinesin|motor\s*protein|microtubul)/i.test(lower))
      return "Cytoskeletal";
    return "Structural & other";
  }
  if (layer === "N") {
    if (/\b(bbb|blood.brain|tight\s*junction|claudin|occludin|zonula)/i.test(lower))
      return "BBB & tight junctions";
    if (/\b(receptor\s*kinase|tyrosine\s*kinase|fyn|src\b|eph|ptk|receptor\s*(signal|tyros))/i.test(lower))
      return "Receptor kinases";
    return "Endothelial & vascular";
  }
  if (layer === "E") {
    if (/\b(complement|c1q|c3|c4|cr1)/i.test(lower))
      return "Complement";
    if (/\b(chaperone|clusterin|clu\b|hsp\d|bag3|heat\s*shock)/i.test(lower))
      return "Molecular chaperones";
    return "Lipid export";
  }
  return "Other";
}

// Function keyword → layer mapping for auto-assignment
function inferLayer(funcText, geneName) {
  const lower = (funcText || "").toLowerCase() + " " + (geneName || "").toLowerCase();

  // Check echo text assignment first
  if (layerGeneMap.has(geneName)) {
    return layerGeneMap.get(geneName);
  }

  // Keyword-based inference
  if (/\b(ferroportin|ferritin|transferrin|iron\s*(homeo|trans|sequest|export|import|bind)|hepcidin|fenton|heme\b|iron.sulfur|ferrireduct|ferroxid)/i.test(lower))
    return "Fe";
  if (/\b(lysosom|gpx4|glutathion|antioxid|phagocyt|microgli|trem2|endosom|vesicle|autophagy|ubiquit|proteasom|cathepsin|granulin|endocyt)/i.test(lower))
    return "L";
  if (/\b(myelin|oligodendrocyt|axon|tau\b|synuclein|insulation|lipid\s*(metab|transport|efflux)|cholesterol|fatty\s*acid|sphingo|ceramid|galactos)/i.test(lower))
    return "I";
  if (/\b(pericyte|bbb|blood.brain|endotheli|tight\s*junction|vascular|angiotensin|integrin|basement\s*membrane|heparan\s*sulfate)/i.test(lower))
    return "N";
  if (/\b(export|clearance|ferroportin|ceruloplasmin|glymphatic|complement|chaperone|apolipoprotein|apoe|clusterin|secretase|metalloprotein)/i.test(lower))
    return "E";

  // Broader categorization
  if (/\b(kinase|phosphat|signal|receptor|channel|calcium|potassium|sodium|gtp)/i.test(lower))
    return "L";
  if (/\b(chromatin|transcript|histone|epigenet|dna\s*repair)/i.test(lower))
    return "I";
  if (/\b(mitochond|electron\s*transport|respiratory|complex\s*[iv]|nadh|succin)/i.test(lower))
    return "Fe";

  return "L"; // Default fallback
}

// Infer secondary layers
function inferSecondaryLayers(primary, funcText, geneName) {
  const lower = (funcText || "").toLowerCase();
  const layers = new Set();

  // Add layers based on keywords (excluding primary)
  if (primary !== "Fe" && /\b(iron|ferri|fenton|heme|transferrin)/i.test(lower))
    layers.add("Fe");
  if (primary !== "L" && /\b(lysosom|endosom|phagocyt|autophagy|vesicle)/i.test(lower))
    layers.add("L");
  if (primary !== "I" && /\b(myelin|oligodendrocyt|lipid|membrane|axon)/i.test(lower))
    layers.add("I");
  if (primary !== "N" && /\b(vascular|bbb|pericyte|endotheli|barrier)/i.test(lower))
    layers.add("N");
  if (primary !== "E" && /\b(export|clearance|efflux|secretion)/i.test(lower))
    layers.add("E");

  return [...layers];
}

// Generate concise function description from NCBI summary
function condenseSummary(summary, geneName) {
  if (!summary) return `${geneName} gene product.`;

  // Remove "[provided by RefSeq...]" suffix
  let text = summary.replace(/\s*\[provided by RefSeq[^\]]*\]/g, "").trim();

  // Take first 2 sentences or first 200 chars
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  let condensed = sentences.slice(0, 2).join(" ").trim();

  if (condensed.length > 250) {
    condensed = sentences[0].trim();
  }

  if (!condensed.endsWith(".")) condensed += ".";

  return condensed;
}

// ─── Build the full gene list ────────────────────────────────────────

// Define the AD genes from bellenguez-2022 (75 loci)
// These are the canonical GWAS hits - we know their gene IDs and can enumerate them
const AD_GENES = [
  "CR1", "BIN1", "INPP5D", "CLNK/HS3ST1", "HLA-DQA1", "TREM2", "CD2AP",
  "NME8", "ZCWPW1/NYAP1", "EPHA1", "PTK2B", "CLU", "ECHDC3", "CELF1",
  "SPI1", "MS4A", "PICALM", "SORL1", "FERMT2", "SLC24A4/RIN3", "SPPL2A",
  "ADAM10", "APH1B", "KAT8", "IL34", "PLCG2", "SCIMP/RABEP1", "MAPT",
  "ABI3", "TSPOAP1", "ACE", "ABCA7", "CASS4", "ADAMTS1", "SORT1",
  "ADAM17", "TSPAN14", "ABCA1", "NCK2", "TMEM106B", "SEC61G/EGFR",
  "BLNK", "TNIP1", "ANK3", "SHARPIN", "HS3ST5", "OTULIN", "WDR12",
  "RASGEF1C", "PRKD3", "CTSB", "ICA1", "DGKQ", "APOE", "CD33",
  "DOC2A", "MME", "IDUA", "RHOH", "ANKH", "COX7C", "TPCN1", "IGH",
  "SNX1", "CTSH", "MAF", "FOXF1", "PRDM7", "WDR81", "MYO15A",
  "GRN", "KLF16", "SIGLEC11", "LILRB2", "RBCK1", "SLC2A4RG", "APP",
];

// PD genes from leonard-2025 + monogenic
const PD_GENES = [
  "ZYG11B", "KCND3", "GBA1", "F11R", "SDHC", "VAMP4", "RAB29",
  "ITPKB", "SIPA1L2", "AKT3", "KCNS3", "KLHL29", "SRD5A2", "BIRC6",
  "XPO1", "AAK1", "KCNIP3", "TBC1D8", "ACMSD", "ACVR2A", "ACVR1",
  "TANK", "STK39", "GRM7", "TBC1D5", "RBMS3", "MOBP", "PXK",
  "ADCY5", "MED12L", "SUCNR1", "PLCH1", "SPTSSB", "PIK3CA", "MCCC1",
  "TMEM175", "MFSD10", "BST1", "LCORL", "STBD1", "SNCA", "CAMK2D",
  "CLCN3", "SLC6A3", "ELOVL7", "SV2C", "FAM151B", "ZNF608", "REEP2",
  "RANBP9", "MBOAT1", "POM121L2", "ZNF311", "HLA-DRB1", "LMBRD1",
  "RIMS1", "FYN", "STX7", "KLHL7", "DYNC1I1", "NYAP1", "PTPRN2",
  "CLN8", "PRAG1", "FGF20", "BIN3", "SYBU", "CYRIB", "SH3GL2",
  "UBAP1", "ITGA8", "PSD", "AS3MT", "BAG3", "DLG2", "ZW10",
  "IGSF9B", "WNK1", "LRRK2", "SLC38A2", "KCNH3", "RAB21", "ANO4",
  "BTBD11", "MVK", "HIP1R", "CAB39L", "MBNL2", "IRS2", "RALGAPA1",
  "GCH1", "GALC", "DLK1", "VPS13C", "HERC1", "MFGE8", "CRAMP1",
  "SYT17", "ATP2A1", "STX4", "CYLD", "TOX3", "CHD9", "GP1BA",
  "PHF23", "NCOR1", "SREBF1", "OMG", "TUBG1", "KANSL1", "NPEPPS",
  "PPP1R9B", "STRADA", "SLC16A6", "RPTOR", "ASPSCR1", "MAPRE2",
  "RIT2", "SPPL2B", "ISYNA1", "PDCD5", "PPFIA3", "DDRGK1", "CRLS1",
  "TPX2", "PTPN1", "DYRK1A", "DSCAM", "ABCG1", "TRPM2", "ADARB1",
  "SNCA-AS1",
  // Monogenic PD genes
  "PINK1", "PRKN", "VPS35", "GAK", "INPP5F", "GPNMB", "USP8", "SCARB2",
];

// Multi-disease genes (AD + PD)
const MULTI_GENES = ["CTSB", "GRN", "SPPL2A"];

// Remove multi genes from AD and PD lists
const adSet = new Set(AD_GENES.filter(g => !MULTI_GENES.includes(g)));
const pdSet = new Set(PD_GENES);

// Build disease map
const diseaseAssignment = {};
for (const g of adSet) diseaseAssignment[g] = "AD";
for (const g of pdSet) diseaseAssignment[g] = "PD";
for (const g of MULTI_GENES) diseaseAssignment[g] = "multi";

// All gene IDs in order
const allGeneIds = [...AD_GENES.filter(g => !MULTI_GENES.includes(g)), ...MULTI_GENES, ...PD_GENES];

// Fetch chromosomes from gene-functions.json
const chromosomes = {};
for (const [gid, entry] of Object.entries(geneData)) {
  for (const sym of entry.symbols) {
    if (sym.entrezgene) {
      // We'll need to fetch chromosomes separately
    }
  }
}

// For now, use placeholder chromosomes and fetch them separately
// Actually, MyGene.info response should include chromosome info
// Let's fetch it

async function fetchChromosomes(genes) {
  const symbolSet = new Set();
  for (const gid of genes) {
    for (const s of gid.split("/")) {
      symbolSet.add(s);
    }
  }

  const symbols = [...symbolSet];
  const chromMap = new Map();

  const batchSize = 100;
  for (let i = 0; i < symbols.length; i += batchSize) {
    const batch = symbols.slice(i, i + batchSize);
    console.log(`Fetching chromosomes batch ${Math.floor(i / batchSize) + 1}...`);

    const response = await fetch("https://mygene.info/v3/query", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        q: batch.join(","),
        scopes: "symbol",
        species: "human",
        fields: "symbol,genomic_pos",
        size: String(batch.length),
      }),
    });

    const data = await response.json();
    for (const hit of data) {
      if (hit.notfound) continue;
      const sym = hit.query?.toUpperCase() || hit.symbol?.toUpperCase();
      const pos = hit.genomic_pos;
      if (pos) {
        const chr = Array.isArray(pos) ? pos[0].chr : pos.chr;
        chromMap.set(sym, chr);
      }
    }

    if (i + batchSize < symbols.length) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  return chromMap;
}

async function main() {
  // Fetch chromosome data
  console.log("Fetching chromosome data...");
  const chromMap = await fetchChromosomes(allGeneIds);
  console.log(`Got chromosome data for ${chromMap.size} genes`);

  // Build the output
  const lines = [];

  lines.push(`import type { ReactNode } from "react";`);
  lines.push(`import { Cite } from "@/components/citation/cite";`);
  lines.push(`import { defenseLayers } from "./entry-points";`);
  lines.push(`import type { DiseaseTarget } from "./types";`);
  lines.push(``);
  lines.push(`export type FelineLayerId = (typeof defenseLayers)[number];`);
  lines.push(``);
  lines.push(`export interface GwasGene {`);
  lines.push(`  id: string;`);
  lines.push(`  fullName: string;`);
  lines.push(`  chromosome: string;`);
  lines.push(`  disease: DiseaseTarget;`);
  lines.push(`  primaryLayer: FelineLayerId;`);
  lines.push(`  subcategory: string;`);
  lines.push(`  secondaryLayers?: FelineLayerId[];`);
  lines.push(`  function: string;`);
  lines.push(`  ironConnection: ReactNode;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`// ---------------------------------------------------------------------------`);
  lines.push(`// AD: ${adSet.size} Bellenguez et al. (2022) risk loci + APP, mapped to FELINE layers.`);
  lines.push(`// PD: ${pdSet.size} GP2 Consortium (Leonard et al. 2025) risk loci + monogenic genes.`);
  lines.push(`// ${MULTI_GENES.length} genes shared (${MULTI_GENES.join(", ")}) are marked disease: "multi".`);
  lines.push(`// Total: ${allGeneIds.length} gene entries across AD + PD.`);
  lines.push(`// ---------------------------------------------------------------------------`);
  lines.push(``);
  lines.push(`export const gwasGenes: GwasGene[] = [`);

  let locus = 0;
  for (const gid of allGeneIds) {
    locus++;
    const entry = geneData[gid];
    const disease = diseaseAssignment[gid] || "AD";
    const mapping = citationMap[gid];

    // Get gene name
    let fullName = "";
    if (entry?.symbols?.[0]?.name) {
      fullName = entry.symbols[0].name;
      // Capitalize first letter of each word
      fullName = fullName
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    } else {
      fullName = gid;
    }

    // Handle multi-gene IDs
    if (gid.includes("/")) {
      const parts = gid.split("/");
      const names = parts.map((p) => {
        const e = geneData[gid];
        const sym = e?.symbols?.find((s) => s.symbol?.toUpperCase() === p.toUpperCase());
        return sym?.name
          ? sym.name.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
          : p;
      });
      fullName = names.join(" / ");
    }

    // Get chromosome
    const firstSymbol = gid.split("/")[0];
    const chr = chromMap.get(firstSymbol.toUpperCase()) || chromMap.get(firstSymbol) || "?";
    const chromosome = chr === "?" ? "?" : `${chr}`;

    // Get primary layer
    const funcText =
      entry?.symbols?.[0]?.summary?.replace(/\s*\[provided by RefSeq[^\]]*\]/g, "") ||
      entry?.symbols?.[0]?.uniprotFunction ||
      "";
    const primaryLayer = inferLayer(funcText, gid);
    const secondaryLayers = inferSecondaryLayers(primaryLayer, funcText, gid);

    // Generate function description
    let funcDesc = condenseSummary(
      entry?.symbols?.[0]?.summary,
      gid
    );

    // Determine GWAS cite ID
    const gwasCiteId =
      disease === "PD"
        ? "leonard-2025-medrxiv"
        : disease === "multi"
        ? "bellenguez-2022-natgenet"
        : "bellenguez-2022-natgenet";

    // Disease label for ironConnection
    const diseaseLabel =
      disease === "multi"
        ? "AD and PD risk locus"
        : disease === "PD"
        ? "PD risk locus"
        : "AD risk locus";

    // Build ironConnection
    let ironConnectionJsx;

    if (SPECIFIC_CITE_GENES[gid]) {
      ironConnectionJsx = SPECIFIC_CITE_GENES[gid].ironConnection;
      // Also use the specific layer assignments
      const specLayers = SPECIFIC_CITE_GENES[gid].layers;
      // Override layer inference for specific genes
    } else if (mapping) {
      // Dual citation: NCBI Gene + GWAS paper
      const escapedFunc = funcDesc
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      ironConnectionJsx = `(
      <>
        ${escapedFunc}
        <Cite id="ncbi-gene-refseq" citationIds={["${mapping.citationId}"]} />
        {" "}${diseaseLabel}.
        <Cite id="${gwasCiteId}" />
      </>
    )`;
    } else {
      // No citation mapping (5 genes with no data)
      ironConnectionJsx = `(
      <>
        ${funcDesc || gid + " gene product."}
        <Cite id="${gwasCiteId}" />
      </>
    )`;
    }

    // Get specific layer overrides
    let pLayer = primaryLayer;
    let sLayers = secondaryLayers;
    if (SPECIFIC_CITE_GENES[gid]) {
      pLayer = SPECIFIC_CITE_GENES[gid].layers.primary;
      sLayers = SPECIFIC_CITE_GENES[gid].layers.secondary;
    }

    // Escape function text for string
    const funcStrEscaped = funcDesc
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"');

    lines.push(`  // --- Locus ${locus} ---`);
    lines.push(`  {`);
    lines.push(`    id: "${gid}",`);
    lines.push(`    fullName: "${fullName.replace(/"/g, '\\"')}",`);
    lines.push(`    chromosome: "${chromosome}",`);
    lines.push(`    disease: "${disease}",`);
    lines.push(`    primaryLayer: "${pLayer}",`);
    const subcategory = inferSubcategory(pLayer, funcText, gid);
    lines.push(`    subcategory: "${subcategory}",`);
    if (sLayers.length > 0) {
      lines.push(
        `    secondaryLayers: [${sLayers.map((l) => `"${l}"`).join(", ")}],`
      );
    }
    lines.push(`    function:`);
    lines.push(`      "${funcStrEscaped}",`);
    lines.push(`    ironConnection: ${ironConnectionJsx},`);
    lines.push(`  },`);
  }

  lines.push(`];`);
  lines.push(``);

  // Stats
  lines.push(`export const gwasStats = {`);
  lines.push(`  riskLoci: { value: "${allGeneIds.length}", label: "risk loci", description: "identified by GWAS" },`);
  lines.push(`  felineMapping: {`);
  lines.push(`    value: "~90%",`);
  lines.push(`    label: "map to FELINE",`);
  lines.push(`    description: "defense layer genes",`);
  lines.push(`  },`);
  lines.push(`};`);
  lines.push(``);

  lines.push(`export const survivorshipBias = {`);
  lines.push(`  headline: "Survivorship bias",`);
  lines.push(`  body: "GWAS studies elderly cohorts. Severe iron gene mutations (HFE, TFR2, HAMP, SLC40A1) cause organ failure decades earlier. These individuals never reach enrollment age. The genetics we see in AD encodes the defense against iron, not iron itself.",`);
  lines.push(`};`);
  lines.push(``);

  lines.push(`export const layerLabels: Record<FelineLayerId, string> = {`);
  lines.push(`  Fe: "Iron homeostasis",`);
  lines.push(`  L: "Lysosome / antioxidant",`);
  lines.push(`  I: "Insulation / buffering",`);
  lines.push(`  N: "Neurovascular",`);
  lines.push(`  E: "Export",`);
  lines.push(`};`);
  lines.push(``);

  lines.push(`/** Group genes by their primary FELINE layer */`);
  lines.push(`export function genesByLayer(): Record<FelineLayerId, GwasGene[]> {`);
  lines.push(`  const result = Object.fromEntries(`);
  lines.push(`    defenseLayers.map((l) => [l, [] as GwasGene[]])`);
  lines.push(`  ) as Record<FelineLayerId, GwasGene[]>;`);
  lines.push(`  for (const gene of gwasGenes) {`);
  lines.push(`    result[gene.primaryLayer].push(gene);`);
  lines.push(`  }`);
  lines.push(`  return result;`);
  lines.push(`}`);
  lines.push(``);

  lines.push(`/** Return unique subcategories for a layer, in order of first appearance */`);
  lines.push(`export function subcategoriesForLayer(layer: FelineLayerId): string[] {`);
  lines.push(`  const seen = new Set<string>();`);
  lines.push(`  const result: string[] = [];`);
  lines.push(`  for (const gene of gwasGenes) {`);
  lines.push(`    if (gene.primaryLayer === layer && !seen.has(gene.subcategory)) {`);
  lines.push(`      seen.add(gene.subcategory);`);
  lines.push(`      result.push(gene.subcategory);`);
  lines.push(`    }`);
  lines.push(`  }`);
  lines.push(`  return result;`);
  lines.push(`}`);
  lines.push(``);

  lines.push(`/** Group genes within a layer by subcategory */`);
  lines.push(`export function genesBySubcategory(layer: FelineLayerId): Record<string, GwasGene[]> {`);
  lines.push(`  const result: Record<string, GwasGene[]> = {};`);
  lines.push(`  for (const gene of gwasGenes) {`);
  lines.push(`    if (gene.primaryLayer !== layer) continue;`);
  lines.push(`    if (!result[gene.subcategory]) result[gene.subcategory] = [];`);
  lines.push(`    result[gene.subcategory].push(gene);`);
  lines.push(`  }`);
  lines.push(`  return result;`);
  lines.push(`}`);
  lines.push(``);

  const outPath = path.resolve(
    __dirname,
    "../src/data/landing/gwas-genes.tsx"
  );
  fs.writeFileSync(outPath, lines.join("\n"));
  console.log(`\nWrote ${outPath}`);
  console.log(`  ${allGeneIds.length} gene entries`);
  console.log(`  AD: ${adSet.size}, PD: ${pdSet.size}, Multi: ${MULTI_GENES.length}`);

  // Layer distribution
  const layerCounts = {};
  for (const gid of allGeneIds) {
    const entry = geneData[gid];
    const funcText =
      entry?.symbols?.[0]?.summary?.replace(/\s*\[provided by RefSeq[^\]]*\]/g, "") ||
      "";
    let layer = inferLayer(funcText, gid);
    if (SPECIFIC_CITE_GENES[gid]) {
      layer = SPECIFIC_CITE_GENES[gid].layers.primary;
    }
    layerCounts[layer] = (layerCounts[layer] || 0) + 1;
  }
  console.log(`  Layer distribution:`, layerCounts);
}

main().catch(console.error);
