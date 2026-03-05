/**
 * One-time script to classify 217 GWAS genes into subcategories
 * by keyword-matching on function text + explicit overrides.
 *
 * Outputs a JSON mapping of gene ID → subcategory, then patches
 * gwas-genes.tsx to add subcategory field to each gene entry.
 *
 * Usage: node scripts/assign-gwas-subcategories.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "../src/data/landing/gwas-genes.tsx");
const src = readFileSync(filePath, "utf-8");

// Extract each gene block
const blocks = [];
const blockPattern = /\{\s*\n\s*id:\s*"([^"]+)"/g;
let match;
while ((match = blockPattern.exec(src)) !== null) {
  const start = match.index;
  const id = match[1];
  const layerMatch = src.slice(start, start + 800).match(/primaryLayer:\s*"([^"]+)"/);
  const layer = layerMatch ? layerMatch[1] : "?";
  const funcMatch = src.slice(start, start + 1200).match(/function:\s*\n\s*"([^"]*(?:"[^"]*"[^"]*)*?)"/);
  const funcText = funcMatch ? funcMatch[1] : "";
  blocks.push({ id, layer, func: funcText });
}

console.log(`Found ${blocks.length} gene entries`);

// ---- Explicit overrides for genes that keyword-matching gets wrong ----
const overrides = {
  // Fe layer fixes: many "Signaling & regulation" should be more specific
  "SNCA": "Iron binding & sequestration",
  "SNCA-AS1": "Iron binding & sequestration",
  "APP": "Iron binding & sequestration",
  "SLC24A4/RIN3": "Iron transport",
  "SLC6A3": "Iron transport",
  "SLC38A2": "Iron transport",
  "TRPM2": "Iron transport",
  "ATP2A1": "Iron transport",
  "TSPOAP1": "Iron transport",
  "CAMK2D": "Signaling & regulation",
  "MCCC1": "Mitochondrial",
  "CRLS1": "Mitochondrial",
  "SUCNR1": "Mitochondrial",
  "LMBRD1": "Cofactor synthesis",
  "STBD1": "Signaling & regulation",
  "RIT2": "Signaling & regulation",
  "AS3MT": "Signaling & regulation",
  "MYO15A": "Signaling & regulation",
  "SLC2A4RG": "Signaling & regulation",
  "COX7C": "Mitochondrial",
  "SDHC": "Mitochondrial",
  "PINK1": "Mitochondrial",
  "ACMSD": "Cofactor synthesis",
  "GCH1": "Cofactor synthesis",
  "ANKH": "Iron transport",

  // I layer fixes: many wrongly classified as "Ion channels"
  "ABCA7": "Lipid transport",
  "ABCA1": "Lipid transport",
  "KANSL1": "Chromatin & transcription",
  "MAPT": "Cytoskeletal & structural",
  "ZCWPW1/NYAP1": "Chromatin & transcription",
  "ECHDC3": "Lipid metabolism",
  "CELF1": "RNA processing",
  "MAF": "Chromatin & transcription",
  "PRDM7": "Chromatin & transcription",
  "KLF16": "Chromatin & transcription",
  "ZNF608": "Chromatin & transcription",
  "ZNF311": "Chromatin & transcription",
  "MBOAT1": "Lipid metabolism",
  "POM121L2": "Cytoskeletal & structural",
  "DYNC1I1": "Cytoskeletal & structural",
  "NYAP1": "Growth & signaling",
  "ISYNA1": "Lipid metabolism",
  "TPX2": "Cytoskeletal & structural",
  "DYRK1A": "Chromatin & transcription",
  "DSCAM": "Growth & signaling",
  "ADARB1": "RNA processing",
  "ELOVL7": "Lipid metabolism",
  "REEP2": "Cytoskeletal & structural",
  "LCORL": "Chromatin & transcription",
  "MED12L": "Chromatin & transcription",
  "DLK1": "Growth & signaling",
  "CRAMP1": "Chromatin & transcription",
  "TOX3": "Chromatin & transcription",
  "CHD9": "Chromatin & transcription",
  "PHF23": "Chromatin & transcription",
  "NCOR1": "Chromatin & transcription",
  "SREBF1": "Lipid metabolism",
  "OMG": "Myelin & structural",
  "PPP1R9B": "Growth & signaling",
  "IGSF9B": "Growth & signaling",
  "ANO4": "Ion channels & transport",
  "KCND3": "Ion channels & transport",
  "KCNS3": "Ion channels & transport",
  "KCNIP3": "Ion channels & transport",
  "KCNH3": "Ion channels & transport",
  "GRM7": "Ion channels & transport",
  "ANK3": "Ion channels & transport",
  "MOBP": "Myelin & structural",
  "DLG2": "Myelin & structural",
  "SRD5A2": "Lipid metabolism",
  "CD2AP": "Cytoskeletal & structural",
  "NME8": "Cytoskeletal & structural",
  "ADCY5": "Growth & signaling",
  "FAM151B": "Cytoskeletal & structural",
  "TUBG1": "Cytoskeletal & structural",
  "MAPRE2": "Cytoskeletal & structural",
  "PPFIA3": "Growth & signaling",
  "PLCH1": "Growth & signaling",
  "SPTSSB": "Lipid metabolism",
  "MVK": "Lipid metabolism",
  "GALC": "Myelin & structural",
  "MBNL2": "RNA processing",

  // L layer fixes
  "DGKQ": "Lipid signaling",
  "CLCN3": "Endosomal trafficking",
  "RALGAPA1": "Lysosomal regulation",
  "STX4": "Endosomal trafficking",
  "CLN8": "Autophagy & degradation",
  "MFSD10": "Autophagy & degradation",
  "PRKN": "Autophagy & degradation",
  "KLHL29": "Proteolysis",
  "BIRC6": "Proteolysis",
  "RBCK1": "Proteolysis",
  "OTULIN": "Proteolysis",
  "SHARPIN": "Proteolysis",
  "VPS13C": "Endosomal trafficking",

  // N layer fixes
  "HLA-DRB1": "Receptor kinases",
  "CLNK/HS3ST1": "Endothelial & vascular",
  "F11R": "BBB & tight junctions",
  "FYN": "Receptor kinases",
  "PRAG1": "Receptor kinases",
  "CASS4": "Receptor kinases",

  // E layer fixes
  "CLU": "Molecular chaperones",
  "BAG3": "Molecular chaperones",
  "CR1": "Complement",
  "IGH": "Complement",
  "APOE": "Lipid export",
  "ABCG1": "Lipid export",
  "ADAM10": "Lipid export",
  "ADAM17": "Lipid export",
  "MFGE8": "Lipid export",
  "TSPAN14": "Lipid export",
  "DOC2A": "Lipid export",
  "MME": "Lipid export",
};

// ---- Keyword-based fallback classification per layer ----

function classifyFe(id, func) {
  const f = func.toLowerCase();
  if (/mitochond|pink|park7|chchd2|fbxo7|cox7|sdhc|succin|cardiolipin|crls/.test(f))
    return "Mitochondrial";
  if (/iron|ferr|transferrin|heme|ceruloplasmin|amyloid precursor|alpha-synuclein/.test(f))
    return "Iron binding & sequestration";
  if (/slc\d|transport|channel|pump|atpase|trpm/.test(f))
    return "Iron transport";
  if (/coenzyme|nad|cofactor|tetrahydrobiopterin|quinolin/.test(f))
    return "Cofactor synthesis";
  return "Signaling & regulation";
}

function classifyL(id, func) {
  const f = func.toLowerCase();
  if (/endosom|clathrin|vesicl|trafficking|sorting|recycling|endocyt|adaptor|rab\d|snx|vps|syntaxin/.test(f) ||
      /BIN1|PICALM|SORL1|RIN3|SNX1|VPS35|VAMP4|STX7|SYBU|RAB21|TBC1D5|CLCN3|IRS2|RIMS1|ABI3|BLNK|SCIMP|WDR81|STX4/i.test(id))
    return "Endosomal trafficking";
  if (/autophag|lysosom|cathep|gba|glucocerebrosid|galactosylceramidase|ceroid|lipofuscin/.test(f) ||
      /GBA|GBA1|CTSB|CTSD|CTSH|GALC|TMEM106B|IDUA|CLN8|MFSD10|PRKN/i.test(id))
    return "Autophagy & degradation";
  if (/immun|hla|mhc|histocompat|interleukin|cytokine|toll|nfkb|inflamm|interferon|innate|microgl|trem|myeloid|cd33|ms4a|siglec/.test(f) ||
      /HLA|TREM2|CD33|MS4A|SIGLEC|IRAK|RIPK|NFKB|IL34|TLR|SPI1|INPP5D|PLCG2|TNIP1|LILRB2|SIGLEC11/i.test(id))
    return "Innate immunity";
  if (/lipid|phospholipase|phosphoinositide|inositol|sphingo|ceramid|phosphatidyl|diacylglycerol/.test(f) ||
      /PLCG2|DGKQ|PIK3|BST1|HIP1R|SYT17|ITPKB|INPP5F/i.test(id))
    return "Lipid signaling";
  if (/proteas|ubiquit|proteosom|deubiquit|peptidase|metalloprot|sppl|signal\s*peptid|cullin|kelch/.test(f) ||
      /USP|RNF|SPPL|NPEPPS|CYLD|ZYG11B|UBAP1|DDRGK1|BTBD11|KLHL|BIRC6|RBCK1|OTULIN|SHARPIN/i.test(id))
    return "Proteolysis";
  return "Lysosomal regulation";
}

function classifyI(id, func) {
  const f = func.toLowerCase();
  if (/myelin|oligodendro|proteolipid|oligodendrocyte myelin|mog|mbp|mag|galactosylceramid/.test(f) ||
      /MOBP|MAG|PLP1|CNP|MOG|CLDN11|OMG|DLG2|GALC/i.test(id))
    return "Myelin & structural";
  if (/channel|potassium|kcn|calcium.*channel|glutamate.*receptor|anoctamin/.test(f) ||
      /KCND3|KCNS3|KCNIP3|KCNH3|GRM7|ANK3|ANO4/i.test(id))
    return "Ion channels & transport";
  if (/chromat|histone|epigen|methyl|acetyl|transcri|zinc.finger|dna.bind|nuclear|corepressor|mediator|zinc finger/.test(f) ||
      /KAT8|KANSL|MAPT|DYRK1A|LCORL|MED12L|TOX3|CHD9|PHF23|NCOR1|CRAMP1|PRDM7|KLF16|ZNF|MAF|ZCWPW1/i.test(id))
    return "Chromatin & transcription";
  if (/growth|neurotrop|factor|fgf|signal|phosphatase|adaptop|cell.*adhes|immunoglobulin.*superfamily/.test(f) ||
      /FGF20|EPHA|DSCAM|ADCY5|IGSF9B|DLK1|PPP1R9B|PLCH1|PPFIA3|NYAP1/i.test(id))
    return "Growth & signaling";
  if (/lipid|cholesterol|phospholipid|abc.*transport|abca|lipoprotein|sterol|fatty|elovl|ceramid|sphingo|srd5a|mevalonate/.test(f) ||
      /ABCA|SPTSSB|MVK|SREBF1|ELOVL7|MBOAT1|ECHDC3|SRD5A2|ISYNA1/i.test(id))
    return "Lipid metabolism";
  if (/rna|splicing|mrna|polyadenyl|editing/.test(f) ||
      /CELF1|ADARB1|MBNL2/i.test(id))
    return "RNA processing";
  if (/cytoskelet|tubulin|dynein|actin|microtub|centrosom|nuclear pore/.test(f) ||
      /MAPT|CD2AP|NME8|DYNC1I1|REEP2|POM121L2|TUBG1|MAPRE2|FAM151B|TPX2/i.test(id))
    return "Cytoskeletal & structural";
  return "Cytoskeletal & structural";
}

function classifyN(id, func) {
  const f = func.toLowerCase();
  if (/tight.junction|claudin|occludin|barrier|junctional adhesion/.test(f) ||
      /CLDN|TJP|JAM|F11R/i.test(id))
    return "BBB & tight junctions";
  if (/receptor.*kinase|tyrosine.*kinase|eph.*receptor|fyn.*kinase/.test(f) ||
      /PTK2B|EPHA|FLT|TIE|FYN|PRAG1|CASS4|HLA-DRB1/i.test(id))
    return "Receptor kinases";
  return "Endothelial & vascular";
}

function classifyE(id, func) {
  const f = func.toLowerCase();
  if (/chaperon|heat.shock|hsp|stress|protein.fold|unfolded|bag.*domain/.test(f) ||
      /CLU|BAG3|DNAJ/i.test(id))
    return "Molecular chaperones";
  if (/complement|c1q|c3|c4|cr1|immunoglobulin.*heavy/.test(f) ||
      /CR1|IGH|CFH|C1Q/i.test(id))
    return "Complement";
  return "Lipid export";
}

function classify(id, layer, func) {
  // Check explicit overrides first
  if (overrides[id]) return overrides[id];
  switch (layer) {
    case "Fe": return classifyFe(id, func);
    case "L": return classifyL(id, func);
    case "I": return classifyI(id, func);
    case "N": return classifyN(id, func);
    case "E": return classifyE(id, func);
    default: return "Other";
  }
}

// Classify all genes
const mapping = {};
const layerCounts = {};
const subcatCounts = {};

for (const { id, layer, func } of blocks) {
  const subcat = classify(id, layer, func);
  mapping[id] = subcat;
  layerCounts[layer] = (layerCounts[layer] || 0) + 1;
  const key = `${layer}: ${subcat}`;
  subcatCounts[key] = (subcatCounts[key] || 0) + 1;
}

console.log("\nLayer counts:", layerCounts);
console.log("\nSubcategory distribution:");
for (const [key, count] of Object.entries(subcatCounts).sort()) {
  console.log(`  ${key}: ${count}`);
}

// Write mapping JSON for review
writeFileSync(
  resolve(__dirname, "gwas-subcategory-map.json"),
  JSON.stringify(mapping, null, 2),
);
console.log("\nWrote gwas-subcategory-map.json");

// Patch the file: add subcategory after primaryLayer line
let patched = src;
let patchCount = 0;

for (const { id, layer } of blocks) {
  const subcat = mapping[id];
  if (!subcat) continue;
  const idEscaped = id.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&");
  const geneBlockRegex = new RegExp(
    `(id:\\s*"${idEscaped}",[^]*?primaryLayer:\\s*"${layer}",)`,
  );
  const geneMatch = patched.match(geneBlockRegex);
  if (geneMatch) {
    const original = geneMatch[1];
    const replacement = `${original}\n    subcategory: "${subcat}",`;
    patched = patched.replace(original, replacement);
    patchCount++;
  }
}

console.log(`\nPatched ${patchCount} gene entries`);

// Also add subcategory to the interface
patched = patched.replace(
  "primaryLayer: FelineLayerId;",
  "primaryLayer: FelineLayerId;\n  subcategory: string;",
);

writeFileSync(filePath, patched);
console.log("Updated gwas-genes.tsx");
