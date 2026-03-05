/**
 * Rewrite gwas-genes.tsx ironConnection fields to use dual citations:
 * 1. NCBI Gene citation for the function description
 * 2. GWAS paper citation for risk locus identification
 *
 * Transforms:
 *   ironConnection: (<>Old text.<Cite id="gwas" /></>)
 * Into:
 *   ironConnection: (<>{function field}.<Cite id="ncbi-gene-X" />{" "}AD risk locus.<Cite id="gwas" /></>)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const gwasPath = path.resolve(
  __dirname,
  "../src/data/landing/gwas-genes.tsx"
);

const citationMap = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "gene-citation-map.json"), "utf-8")
);

// Genes to skip (have specific citations already)
const SKIP_GENES = new Set(["BIN1", "TREM2", "PICALM", "SPI1", "APOE"]);

// GWAS cite IDs
const GWAS_CITES = new Set([
  "bellenguez-2022-natgenet",
  "leonard-2025-medrxiv",
]);

// Disease labels
const DISEASE_LABELS = {
  AD: "AD risk locus",
  PD: "PD risk locus",
  multi: "AD and PD risk locus",
};

let content = fs.readFileSync(gwasPath, "utf-8");
const lines = content.split("\n");

// Parse gene blocks by finding id: "..." lines
const geneBlocks = [];
let currentGene = null;
let blockStart = -1;

for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/^\s*id:\s*"([^"]+)"/);
  if (idMatch) {
    if (currentGene && blockStart >= 0) {
      geneBlocks.push({
        id: currentGene,
        startLine: blockStart,
        endLine: i - 1,
      });
    }
    currentGene = idMatch[1];
    blockStart = i;
  }
}
// Push last gene
if (currentGene && blockStart >= 0) {
  geneBlocks.push({
    id: currentGene,
    startLine: blockStart,
    endLine: lines.length - 1,
  });
}

console.log(`Found ${geneBlocks.length} gene blocks`);

// Process bottom-to-top to avoid line offset issues
let modified = 0;
let skipped = 0;
let noMapping = 0;

for (let gi = geneBlocks.length - 1; gi >= 0; gi--) {
  const gene = geneBlocks[gi];

  if (SKIP_GENES.has(gene.id)) {
    skipped++;
    continue;
  }

  const mapping = citationMap[gene.id];
  if (!mapping) {
    console.warn(`No citation mapping for ${gene.id}`);
    noMapping++;
    continue;
  }

  // Extract the block lines
  const blockLines = lines.slice(gene.startLine, gene.endLine + 1);
  const blockText = blockLines.join("\n");

  // Check if this gene only has GWAS citations
  const citeIds = [...blockText.matchAll(/Cite id="([^"]+)"/g)].map(
    (m) => m[1]
  );
  if (!citeIds.every((c) => GWAS_CITES.has(c))) {
    skipped++;
    continue;
  }

  // Find the function field
  const funcMatch = blockText.match(
    /function:\s*\n?\s*"((?:[^"\\]|\\.)*)"/
  );
  if (!funcMatch) {
    console.warn(`No function field for ${gene.id}`);
    noMapping++;
    continue;
  }

  // Unescape the function text
  let funcText = funcMatch[1]
    .replace(/\\n/g, " ")
    .replace(/\\\\/g, "\\")
    .replace(/\\"/g, '"')
    .replace(/\s+/g, " ")
    .trim();

  // Make sure it ends with a period
  if (!funcText.endsWith(".")) {
    funcText += ".";
  }

  // Determine the GWAS cite ID
  const gwasCiteId =
    citeIds.find((c) => GWAS_CITES.has(c)) || "bellenguez-2022-natgenet";

  // Disease label
  const diseaseLabel = DISEASE_LABELS[mapping.disease] || "risk locus";

  // Build new ironConnection
  // Escape the function text for JSX (handle special chars)
  const jsxFuncText = funcText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const newIronConnection = `ironConnection: (
      <>
        ${jsxFuncText}
        <Cite id="ncbi-gene-refseq" citationIds={["${mapping.citationId}"]} />
        {" "}${diseaseLabel}.
        <Cite id="${gwasCiteId}" />
      </>
    ),`;

  // Find the ironConnection block in the original lines
  // Look for ironConnection: ( ... ),
  const ironStart = blockLines.findIndex((l) =>
    l.match(/^\s*ironConnection:\s*\(/)
  );
  if (ironStart < 0) {
    console.warn(`No ironConnection for ${gene.id}`);
    noMapping++;
    continue;
  }

  // Find the closing ), — it's the line with just ), or </>),
  let ironEnd = -1;
  let parenDepth = 0;
  for (let j = ironStart; j < blockLines.length; j++) {
    const line = blockLines[j];
    for (const ch of line) {
      if (ch === "(") parenDepth++;
      if (ch === ")") parenDepth--;
    }
    if (parenDepth <= 0) {
      ironEnd = j;
      break;
    }
  }

  if (ironEnd < 0) {
    console.warn(`Could not find ironConnection end for ${gene.id}`);
    noMapping++;
    continue;
  }

  // Replace lines in the main array
  const absoluteIronStart = gene.startLine + ironStart;
  const absoluteIronEnd = gene.startLine + ironEnd;

  // Get indentation from the original ironConnection line
  const indent = blockLines[ironStart].match(/^(\s*)/)?.[1] || "    ";

  const newLines = newIronConnection.split("\n").map((l, i) => {
    if (i === 0) return indent + l.trim();
    return indent + "  " + l.trim();
  });

  lines.splice(
    absoluteIronStart,
    absoluteIronEnd - absoluteIronStart + 1,
    ...newLines
  );

  modified++;
}

// Write result
fs.writeFileSync(gwasPath, lines.join("\n"));

console.log(`\nResults:`);
console.log(`  Modified: ${modified}`);
console.log(`  Skipped (specific cites): ${skipped}`);
console.log(`  No mapping/data: ${noMapping}`);
