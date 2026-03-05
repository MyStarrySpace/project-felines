/**
 * Fetch gene function descriptions from NCBI Gene (RefSeq summary) via MyGene.info API.
 *
 * For each gene in gwas-genes.tsx, fetches the summary field and saves to JSON.
 * Uses MyGene.info batch query endpoint for efficiency.
 *
 * Output: scripts/gene-functions.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract gene IDs from gwas-genes.tsx
const gwasFile = fs.readFileSync(
  path.resolve(__dirname, "../src/data/landing/gwas-genes.tsx"),
  "utf-8"
);

const geneIds = [];
const idPattern = /id:\s*"([^"]+)"/g;
let match;
while ((match = idPattern.exec(gwasFile)) !== null) {
  geneIds.push(match[1]);
}

console.log(`Found ${geneIds.length} gene IDs`);

// Genes with specific citations that we'll skip in the rewrite (but still fetch for reference)
const SKIP_GENES = new Set(["BIN1", "TREM2", "PICALM", "SPI1", "APOE"]);

// Expand multi-gene IDs (e.g., "CLNK/HS3ST1" → ["CLNK", "HS3ST1"])
function expandGeneId(id) {
  return id.split("/");
}

// Get unique gene symbols for API lookup
const allSymbols = new Set();
for (const id of geneIds) {
  for (const sym of expandGeneId(id)) {
    allSymbols.add(sym);
  }
}

console.log(`${allSymbols.size} unique gene symbols to look up`);

// Batch fetch from MyGene.info (POST endpoint, up to 1000 genes at once)
async function batchFetchGenes(symbols) {
  const symbolList = [...symbols];
  const results = new Map();

  // MyGene.info supports POST with comma-separated gene list
  const batchSize = 100;
  for (let i = 0; i < symbolList.length; i += batchSize) {
    const batch = symbolList.slice(i, i + batchSize);
    console.log(
      `Fetching batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(symbolList.length / batchSize)} (${batch.length} genes)...`
    );

    const response = await fetch("https://mygene.info/v3/query", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        q: batch.join(","),
        scopes: "symbol",
        species: "human",
        fields: "symbol,name,summary,uniprot.Swiss-Prot,entrezgene",
        size: String(batch.length),
      }),
    });

    const data = await response.json();

    // data is an array of results, one per query
    for (const hit of data) {
      if (hit.notfound) {
        console.warn(`  NOT FOUND: ${hit.query}`);
        continue;
      }
      results.set(hit.query?.toUpperCase() || hit.symbol?.toUpperCase(), {
        symbol: hit.symbol,
        name: hit.name,
        summary: hit.summary || null,
        uniprotId: hit.uniprot?.["Swiss-Prot"] || null,
        entrezgene: hit.entrezgene || null,
      });
    }

    // Rate limit
    if (i + batchSize < symbolList.length) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  return results;
}

// Fetch UniProt function descriptions for genes that have UniProt IDs
async function fetchUniprotFunction(uniprotId) {
  try {
    // Handle arrays (some genes map to multiple UniProt IDs)
    const id = Array.isArray(uniprotId) ? uniprotId[0] : uniprotId;
    const response = await fetch(
      `https://rest.uniprot.org/uniprotkb/${id}?fields=cc_function&format=json`
    );
    if (!response.ok) return null;
    const data = await response.json();
    for (const c of data.comments || []) {
      if (c.commentType === "FUNCTION") {
        for (const t of c.texts || []) {
          if (t.value) {
            // Strip inline PubMed references like (PubMed:12345)
            return t.value.replace(/\s*\(PubMed:\d+(?:,\s*PubMed:\d+)*\)/g, "")
                         .replace(/\s*\(By similarity\)/g, "");
          }
        }
      }
    }
  } catch {
    return null;
  }
  return null;
}

async function main() {
  // Step 1: Batch fetch from MyGene.info
  const geneData = await batchFetchGenes(allSymbols);

  console.log(`\nGot data for ${geneData.size}/${allSymbols.size} genes`);

  // Step 2: Fetch UniProt function descriptions
  console.log("\nFetching UniProt function descriptions...");
  let fetched = 0;
  const total = geneData.size;

  for (const [symbol, data] of geneData) {
    if (data.uniprotId) {
      fetched++;
      if (fetched % 20 === 0) {
        console.log(`  ${fetched}/${total}...`);
      }
      const func = await fetchUniprotFunction(data.uniprotId);
      data.uniprotFunction = func;
      // Rate limit for UniProt
      await new Promise((r) => setTimeout(r, 100));
    }
  }

  // Step 3: Build output keyed by gwas-genes.tsx gene ID
  const output = {};
  let missing = [];

  for (const id of geneIds) {
    const symbols = expandGeneId(id);
    const entry = {
      geneId: id,
      skip: SKIP_GENES.has(id),
      symbols: [],
    };

    for (const sym of symbols) {
      const data = geneData.get(sym.toUpperCase()) || geneData.get(sym);
      if (data) {
        entry.symbols.push({
          symbol: data.symbol || sym,
          name: data.name || null,
          summary: data.summary || null,
          uniprotId: data.uniprotId || null,
          uniprotFunction: data.uniprotFunction || null,
          entrezgene: data.entrezgene || null,
        });
      } else {
        entry.symbols.push({
          symbol: sym,
          name: null,
          summary: null,
          uniprotId: null,
          uniprotFunction: null,
          entrezgene: null,
        });
        missing.push(sym);
      }
    }

    output[id] = entry;
  }

  // Step 4: Save
  const outPath = path.resolve(__dirname, "gene-functions.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`\nSaved to ${outPath}`);

  // Stats
  const withSummary = Object.values(output).filter((e) =>
    e.symbols.some((s) => s.summary)
  ).length;
  const withUniprot = Object.values(output).filter((e) =>
    e.symbols.some((s) => s.uniprotFunction)
  ).length;

  console.log(`\nStats:`);
  console.log(`  Total genes: ${geneIds.length}`);
  console.log(`  With NCBI summary: ${withSummary}`);
  console.log(`  With UniProt function: ${withUniprot}`);
  console.log(`  Missing from API: ${missing.length}`);
  if (missing.length > 0) {
    console.log(`  Missing genes: ${missing.join(", ")}`);
  }
}

main().catch(console.error);
