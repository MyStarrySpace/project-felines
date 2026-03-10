/**
 * Text Fragment Verification & Generation Script
 *
 * For each citation, fetches the source page (PubMed abstract or PMC full text)
 * and finds a matching text snippet that can be used as a #:~:text= fragment.
 *
 * Generates fragmentText values and optionally writes them into bibliography files.
 *
 * Usage:
 *   npx tsx scripts/verify-fragments.ts              # report only
 *   npx tsx scripts/verify-fragments.ts --update      # write fragmentText into source files
 *   npx tsx scripts/verify-fragments.ts --source ID   # check a single source
 *   npx tsx scripts/verify-fragments.ts --no-cache    # skip cache
 */

import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import { sources } from "../src/data/bibliography";

// ── Config ──────────────────────────────────────────────────────────

const CACHE_PATH = path.resolve(__dirname, ".fragment-cache.json");
const DELAY_MS = 400;

// ── Types ───────────────────────────────────────────────────────────

interface CacheEntry {
  fragment: string | null;
  method: string;
  quoteHash: string;
}
type Cache = Record<string, CacheEntry>;

interface FragmentResult {
  sourceId: string;
  citationId: string;
  fragment: string | null;
  method: string;
  quote: string;
}

// ── Helpers ─────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function quoteHash(quote: string): string {
  return crypto.createHash("sha256").update(quote).digest("hex").slice(0, 12);
}

function loadCache(): Cache {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveCache(cache: Cache): void {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function normalizeText(text: string): string {
  return text
    .replace(/[\n\r\t]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── Fetchers ────────────────────────────────────────────────────────

async function fetchWithRetry(
  url: string,
  options?: RequestInit,
  retries = 3
): Promise<Response | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.status === 429) {
        const wait = Math.min(2000 * (attempt + 1), 10000);
        await sleep(wait);
        continue;
      }
      return res;
    } catch {
      if (attempt < retries - 1) await sleep(1000);
    }
  }
  return null;
}

async function fetchPubmedAbstract(pmid: string): Promise<string | null> {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${pmid}&rettype=abstract&retmode=text`;
  const res = await fetchWithRetry(url);
  if (!res || !res.ok) return null;
  return await res.text();
}

/** Convert PMID to PMCID via ID converter API */
async function pmidToPmcid(pmid: string): Promise<string | null> {
  const url = `https://www.ncbi.nlm.nih.gov/pmc/utils/idconv/v1.0/?ids=${pmid}&format=json`;
  const res = await fetchWithRetry(url);
  if (!res || !res.ok) return null;
  const data = await res.json();
  const record = data.records?.[0];
  if (!record || record.status === "error") return null;
  return record.pmcid || null;
}

/** Fetch full text from Europe PMC */
async function fetchEuropePmcFullText(pmcid: string): Promise<string | null> {
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/${pmcid}/fullTextXML`;
  const res = await fetchWithRetry(url);
  if (!res || !res.ok) return null;
  const xml = await res.text();
  return stripHtml(xml);
}

async function fetchPageText(url: string): Promise<string | null> {
  const res = await fetchWithRetry(url, {
    headers: { "User-Agent": "Mozilla/5.0 FELINES-FragmentVerifier/1.0" },
    redirect: "follow",
  });
  if (!res || !res.ok) return null;
  const html = await res.text();
  return stripHtml(html);
}

/** Fetch NCBI Gene summary by gene symbol via E-utilities */
async function fetchGeneRefseqSummary(geneSymbol: string): Promise<string | null> {
  // Step 1: Search for the gene ID
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gene&term=${encodeURIComponent(geneSymbol)}[sym]+AND+Homo+sapiens[orgn]&retmode=json`;
  const searchRes = await fetchWithRetry(searchUrl);
  if (!searchRes || !searchRes.ok) return null;
  const searchData = await searchRes.json();
  const geneId = searchData.esearchresult?.idlist?.[0];
  if (!geneId) return null;

  // Step 2: Fetch the gene summary
  const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${geneId}&retmode=json`;
  const summaryRes = await fetchWithRetry(summaryUrl);
  if (!summaryRes || !summaryRes.ok) return null;
  const summaryData = await summaryRes.json();
  const doc = summaryData.result?.[geneId];
  if (!doc) return null;

  // Combine summary and description fields
  const parts: string[] = [];
  if (doc.summary) parts.push(doc.summary);
  if (doc.description) parts.push(doc.description);

  // Also try fetching the full RefSeq gene page for the complete description
  await sleep(DELAY_MS);
  const pageUrl = `https://www.ncbi.nlm.nih.gov/gene/${geneId}`;
  const pageText = await fetchPageText(pageUrl);
  if (pageText && pageText.length > 100) parts.push(pageText);

  return parts.join("\n\n") || null;
}

// ── Matching ────────────────────────────────────────────────────────

/**
 * Given a page's text content and a quote, try to find a matching snippet
 * suitable for a #:~:text= fragment (5-8 words, confirmed on page).
 */
function findMatchingSnippet(pageText: string, quote: string): string | null {
  const normalPage = normalizeText(pageText);

  // Clean quote of smart quotes and special chars for matching
  const cleanQuote = quote
    .replace(/[\u201C\u201D\u201E\u201F""]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B'']/g, "'")
    .replace(/[\u2013\u2014\u2212]/g, "-");

  const quoteWords = cleanQuote
    .split(/\s+/)
    .filter((w) => w.length > 0);

  if (quoteWords.length === 0) return null;

  // Try progressively shorter n-grams from the quote
  for (let windowSize = Math.min(quoteWords.length, 12); windowSize >= 4; windowSize--) {
    for (let start = 0; start <= quoteWords.length - windowSize; start++) {
      const candidate = quoteWords.slice(start, start + windowSize).join(" ");
      const normalCandidate = candidate.toLowerCase();

      if (normalPage.includes(normalCandidate)) {
        const idx = normalPage.indexOf(normalCandidate);
        // Get the actual text from the page (preserving original case)
        const actualText = pageText
          .replace(/[\n\r\t]+/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(idx, idx + candidate.length);

        // Clean for use as a text fragment (strip chars that break browser matching)
        const cleaned = actualText
          .replace(/[^a-zA-Z0-9\s\-,.]/g, "")
          .replace(/\s+/g, " ")
          .trim();

        if (cleaned.length >= 15) {
          // Trim to 6-8 words for a good fragment
          const fragmentWords = cleaned.split(" ");
          return fragmentWords.slice(0, Math.min(fragmentWords.length, 8)).join(" ");
        }
      }
    }
  }

  return null;
}

// ── Main ────────────────────────────────────────────────────────────

const UPDATE_MODE = process.argv.includes("--update");
const NO_CACHE = process.argv.includes("--no-cache");
const sourceFilter = process.argv.includes("--source")
  ? process.argv[process.argv.indexOf("--source") + 1]
  : null;

async function main() {
  console.log("Text Fragment Verification");
  console.log("==========================\n");

  if (UPDATE_MODE) {
    console.log("(Update mode: will write fragmentText into bibliography files)\n");
  }

  const cache = NO_CACHE ? {} : loadCache();
  const results: FragmentResult[] = [];
  let apiCalls = 0;
  let cacheHits = 0;

  const filteredSources = sourceFilter
    ? sources.filter((s) => s.id === sourceFilter)
    : sources;

  for (const source of filteredSources) {
    if (source.citations.length === 0) continue;

    // Check if all citations are cached
    const allCached = source.citations.every((c) => {
      const cached = cache[c.citationId];
      return cached && cached.quoteHash === quoteHash(c.quote);
    });

    if (allCached && !NO_CACHE) {
      for (const citation of source.citations) {
        const cached = cache[citation.citationId];
        cacheHits++;
        results.push({
          sourceId: source.id,
          citationId: citation.citationId,
          fragment: cached.fragment,
          method: cached.method,
          quote: citation.quote,
        });
      }
      continue;
    }

    // Special handling for ncbi-gene-refseq: fetch each gene individually
    if (source.id === "ncbi-gene-refseq") {
      for (const citation of source.citations) {
        // Check individual citation cache
        const cached = cache[citation.citationId];
        if (cached && cached.quoteHash === quoteHash(citation.quote) && !NO_CACHE) {
          cacheHits++;
          results.push({
            sourceId: source.id,
            citationId: citation.citationId,
            fragment: cached.fragment,
            method: cached.method,
            quote: citation.quote,
          });
          continue;
        }

        // Extract gene symbol(s) from citationId (format: ncbi-gene-SYMBOL or ncbi-gene-SYM1-SYM2)
        const rawSymbol = citation.citationId.replace("ncbi-gene-", "").toUpperCase();
        // Known multi-gene GWAS loci use hyphens between gene names
        // Try the raw symbol first, then split parts if it fails
        const symbolCandidates = [rawSymbol];
        if (rawSymbol.includes("-")) {
          // Add individual gene symbols (e.g., "CLNK-HS3ST1" → ["CLNK", "HS3ST1"])
          symbolCandidates.push(...rawSymbol.split("-"));
        }

        let fragment: string | null = null;
        let matchMethod = "miss";

        for (const geneSymbol of symbolCandidates) {
          await sleep(DELAY_MS);
          apiCalls++;
          const geneSummary = await fetchGeneRefseqSummary(geneSymbol);
          if (geneSummary) {
            fragment = findMatchingSnippet(geneSummary, citation.quote);
            if (fragment) {
              matchMethod = "ncbi-gene";
              break;
            }
          }
        }

        results.push({
          sourceId: source.id,
          citationId: citation.citationId,
          fragment,
          method: matchMethod,
          quote: citation.quote,
        });
        cache[citation.citationId] = {
          fragment,
          method: matchMethod,
          quoteHash: quoteHash(citation.quote),
        };

        process.stdout.write(fragment ? "g" : "X");
      }
      continue;
    }

    // Collect multiple text sources to try for each citation
    const textSources: { text: string; method: string }[] = [];

    // Strategy 1: PubMed abstract (cheapest, most reliable for abstracts)
    if (source.pmid) {
      await sleep(DELAY_MS);
      apiCalls++;
      const abstractText = await fetchPubmedAbstract(source.pmid);
      if (abstractText && abstractText.length > 100) {
        textSources.push({ text: abstractText, method: "pubmed-abstract" });
      }
    }

    // Strategy 2: PMC full text via Europe PMC (for body text quotes)
    if (source.pmid) {
      await sleep(DELAY_MS);
      apiCalls++;
      const pmcid = await pmidToPmcid(source.pmid);
      if (pmcid) {
        await sleep(DELAY_MS);
        apiCalls++;
        const fullText = await fetchEuropePmcFullText(pmcid);
        if (fullText && fullText.length > 200) {
          textSources.push({ text: fullText, method: "europe-pmc" });
        }
      }
    }

    // Strategy 3: Fetch the source URL directly
    if (source.url) {
      await sleep(DELAY_MS);
      apiCalls++;
      const pageText = await fetchPageText(source.url);
      if (pageText && pageText.length > 100) {
        textSources.push({ text: pageText, method: "url-page" });
      }
    }

    if (textSources.length === 0) {
      for (const citation of source.citations) {
        results.push({
          sourceId: source.id,
          citationId: citation.citationId,
          fragment: null,
          method: "skip",
          quote: citation.quote,
        });
        cache[citation.citationId] = {
          fragment: null,
          method: "skip",
          quoteHash: quoteHash(citation.quote),
        };
      }
      process.stdout.write("-");
      continue;
    }

    // Try each text source per citation until we find a match
    for (const citation of source.citations) {
      let fragment: string | null = null;
      let matchMethod = "miss";

      for (const ts of textSources) {
        fragment = findMatchingSnippet(ts.text, citation.quote);
        if (fragment) {
          matchMethod = ts.method;
          break;
        }
      }

      results.push({
        sourceId: source.id,
        citationId: citation.citationId,
        fragment,
        method: matchMethod,
        quote: citation.quote,
      });
      cache[citation.citationId] = {
        fragment,
        method: matchMethod,
        quoteHash: quoteHash(citation.quote),
      };

      process.stdout.write(fragment ? "." : "X");
    }
  }

  saveCache(cache);

  console.log("\n\n--- SUMMARY ---");
  const found = results.filter((r) => r.fragment);
  const missed = results.filter((r) => !r.fragment && r.method !== "skip");
  const skipped = results.filter((r) => r.method === "skip");
  console.log(`Found:   ${found.length} (verified text fragments)`);
  console.log(`Missed:  ${missed.length} (quote not found on page)`);
  console.log(`Skipped: ${skipped.length} (could not fetch page)`);
  console.log(`API calls: ${apiCalls}`);
  console.log(`Cache hits: ${cacheHits}`);

  if (missed.length > 0) {
    console.log("\n--- QUOTES NOT FOUND ON PAGE (may be fabricated or paywalled) ---\n");
    for (const r of missed) {
      console.log(`  ${r.sourceId} / ${r.citationId} [${r.method}]`);
      console.log(`    Quote: "${r.quote.slice(0, 100)}${r.quote.length > 100 ? "..." : ""}"`);
    }
  }

  // Update mode: write fragmentText into bibliography files
  if (UPDATE_MODE && found.length > 0) {
    console.log("\n--- WRITING fragmentText INTO BIBLIOGRAPHY FILES ---\n");

    const bibDir = path.resolve(__dirname, "../src/data/bibliography");
    const tsFiles = fs.readdirSync(bibDir).filter((f) => f.endsWith(".ts") && f !== "types.ts" && f !== "index.ts");

    let totalUpdated = 0;

    for (const tsFile of tsFiles) {
      const filePath = path.join(bibDir, tsFile);
      let content = fs.readFileSync(filePath, "utf-8");
      // Detect line ending style (CRLF vs LF)
      const eol = content.includes("\r\n") ? "\r\n" : "\n";
      let fileUpdated = 0;

      for (const r of found) {
        // Find the citation in the file and add/update fragmentText
        const citationIdPattern = `citationId: "${r.citationId}"`;
        const idx = content.indexOf(citationIdPattern);
        if (idx === -1) continue;

        // Check if fragmentText already exists for this citation
        const afterCitId = content.slice(idx, idx + 3000);
        const nextCitBoundary = afterCitId.search(/\r?\n\s*\},?\s*\r?\n/);
        // Include the line ending in the block so the last field's ,\r?\n is captured
        const citBlockEnd = nextCitBoundary > 0 ? nextCitBoundary + 2 : 3000;
        const citBlock = afterCitId.slice(0, citBlockEnd);

        const escapedFragment = r.fragment!.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

        if (citBlock.includes("fragmentText:")) {
          // Update existing fragmentText
          const fragPattern = /fragmentText:\s*"[^"]*"/;
          const blockStart = idx;
          const blockEnd = idx + (nextCitBoundary > 0 ? nextCitBoundary : 500);
          const block = content.slice(blockStart, blockEnd);
          const newBlock = block.replace(fragPattern, `fragmentText: "${escapedFragment}"`);
          content = content.slice(0, blockStart) + newBlock + content.slice(blockEnd);
          fileUpdated++;
        } else {
          // Add fragmentText after projectRef or after the last field before closing
          const projectRefIdx = citBlock.indexOf("projectRef:");
          const locationIdx = citBlock.indexOf("location:");
          const contextIdx = citBlock.indexOf("context:");

          // Find the best insertion point (after the last present optional field)
          let insertAfterField = "quote:";
          if (projectRefIdx >= 0) insertAfterField = "projectRef:";
          else if (locationIdx >= 0) insertAfterField = "location:";
          else if (contextIdx >= 0) insertAfterField = "context:";

          // Find the end of that field's value (the next line with a field or closing brace)
          const fieldIdx = citBlock.indexOf(insertAfterField);
          if (fieldIdx >= 0) {
            const afterField = citBlock.slice(fieldIdx);
            // Find end of field value — handle both CRLF and LF line endings
            const lineEnd = afterField.search(/,\r?\n/);
            if (lineEnd >= 0) {
              // Calculate insertion point after the comma + line ending
              const matchedEol = afterField.slice(lineEnd + 1, lineEnd + 3).startsWith("\r\n") ? "\r\n" : "\n";
              const absoluteInsert = idx + fieldIdx + lineEnd + 1 + matchedEol.length;
              // Detect indentation
              const lineStart = content.lastIndexOf("\n", absoluteInsert - 2) + 1;
              const indent = content.slice(lineStart, absoluteInsert - matchedEol.length).match(/^\s*/)?.[0] || "        ";
              const newLine = `${indent}fragmentText: "${escapedFragment}",${eol}`;
              content = content.slice(0, absoluteInsert) + newLine + content.slice(absoluteInsert);
              fileUpdated++;
            }
          }
        }
      }

      if (fileUpdated > 0) {
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`  ${tsFile}: updated ${fileUpdated} citations`);
        totalUpdated += fileUpdated;
      }
    }

    console.log(`\nTotal: ${totalUpdated} fragmentText values written.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
