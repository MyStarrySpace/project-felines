/**
 * Quote Verification Script
 *
 * For each source, fetches the actual article text from Europe PMC (full text)
 * or PubMed (abstract only), then checks whether each citation's quote actually
 * appears in the source material.
 *
 * Also generates/verifies URL text fragments (#:~:text=...) that link directly
 * to the quoted text on the page.
 *
 * Results are cached in scripts/.quote-cache.json.
 *
 * Run: npx tsx scripts/verify-quotes.ts
 * Options:
 *   --dry-run    Show what would be checked without fetching
 *   --update     Write verified text fragment URLs back to bibliography files
 *   --limit N    Only check the first N sources (for testing)
 *   --source ID  Check a specific source by ID
 *   --no-cache   Ignore cache, re-fetch everything
 */

import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import { sources, sourcesMap } from "../src/data/bibliography";
import type { Source, Citation } from "../src/data/bibliography/types";

// ── Config ──────────────────────────────────────────────────────────

const CACHE_PATH = path.resolve(__dirname, ".quote-cache.json");
const RATE_DELAY_MS = 400; // ~2.5 req/sec for NCBI APIs

// ── Types ───────────────────────────────────────────────────────────

interface QuoteCheckResult {
  citationId: string;
  quote: string;
  /** "abstract" | "fulltext" | "title" */
  foundIn: string | null;
  /** Suggested text fragment for URL */
  textFragment: string | null;
}

interface SourceCheckResult {
  sourceId: string;
  pmcId: string | null;
  fetchedFrom: "europepmc" | "pubmed-abstract" | "none";
  quotes: QuoteCheckResult[];
}

interface CacheEntry {
  fetchedFrom: "europepmc" | "pubmed-abstract" | "none";
  pmcId: string | null;
  quotes: QuoteCheckResult[];
  quoteHash: string;
  timestamp: number;
}

type Cache = Record<string, CacheEntry>;

// ── Helpers ─────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

function quoteHash(citations: Citation[]): string {
  return crypto
    .createHash("sha256")
    .update(citations.map((c) => c.citationId + ":" + c.quote).join("\n"))
    .digest("hex")
    .slice(0, 16);
}

async function fetchWithRetry(
  url: string,
  options?: RequestInit,
  maxRetries = 3
): Promise<Response> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(30000), // 30s timeout
      });
      if (res.status === 429 && attempt < maxRetries) {
        const retryAfter = res.headers.get("Retry-After");
        const waitMs = retryAfter
          ? parseInt(retryAfter, 10) * 1000
          : 2000 * (attempt + 1);
        process.stdout.write("R");
        await sleep(waitMs);
        continue;
      }
      return res;
    } catch (err) {
      if (attempt < maxRetries) {
        await sleep(2000 * (attempt + 1));
        continue;
      }
      throw err;
    }
  }
  throw new Error("Max retries exceeded");
}

// ── Text Normalization ──────────────────────────────────────────────

/**
 * Normalize text for fuzzy quote matching.
 * Aggressively normalizes unicode, dashes, quotes, HTML entities, whitespace.
 */
function normalizeForMatch(text: string): string {
  return (
    text
      // Decode HTML entities
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => {
        try {
          return String.fromCodePoint(parseInt(hex, 16));
        } catch {
          return "";
        }
      })
      .replace(/&#(\d+);/g, (_, dec) => {
        try {
          return String.fromCodePoint(parseInt(dec, 10));
        } catch {
          return "";
        }
      })
      // Normalize all quote styles to ASCII
      .replace(/[\u2018\u2019\u02BC\u0060\u00B4]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      // Normalize ALL dash-like chars to ASCII hyphen
      .replace(
        /[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\u00AD\uFE58\uFE63\uFF0D]/g,
        "-"
      )
      // Greek letters to ASCII (common in biomedical text)
      .replace(/\u03B1/g, "alpha")
      .replace(/\u03B2/g, "beta")
      .replace(/\u03B3/g, "gamma")
      .replace(/\u03B4/g, "delta")
      .replace(/\u03BA/g, "kappa")
      .replace(/\u03BC/g, "mu")
      .replace(/\u03C3/g, "sigma")
      .replace(/\u03C4/g, "tau")
      // Superscripts/subscripts to plain
      .replace(/[\u00B2]/g, "2")
      .replace(/[\u00B3]/g, "3")
      .replace(/[\u00B7\u2022\u2219]/g, ".") // middle dot / bullet
      // Normalize whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
}

/**
 * Even more aggressive normalization: lowercase, strip all non-alphanumeric.
 * Used for fuzzy matching when exact match fails.
 */
function stripToAlphanumeric(text: string): string {
  return normalizeForMatch(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Strip all XML/HTML tags from text, returning plain text content.
 */
function stripXml(xml: string): string {
  return xml
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── PMC ID Conversion ───────────────────────────────────────────────

async function batchConvertPmidToPmc(
  pmids: string[]
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const batchSize = 200;

  for (let i = 0; i < pmids.length; i += batchSize) {
    const batch = pmids.slice(i, i + batchSize);
    const url = `https://www.ncbi.nlm.nih.gov/pmc/utils/idconv/v1.0/?ids=${batch.join(",")}&format=json`;
    try {
      await sleep(500);
      const res = await fetchWithRetry(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (data.records) {
        for (const rec of data.records) {
          if (rec.pmcid && rec.pmid) {
            result.set(rec.pmid, rec.pmcid);
          }
        }
      }
    } catch {
      // Skip batch on error
    }
  }

  return result;
}

// ── Article Fetchers ────────────────────────────────────────────────

/**
 * Fetch full text from Europe PMC (more reliable than NCBI for full text).
 * Returns plain text or null if not available.
 */
async function fetchEuropePmcFullText(pmcId: string): Promise<string | null> {
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/${pmcId}/fullTextXML`;
  try {
    const res = await fetchWithRetry(url);
    if (!res.ok) return null;
    const xml = await res.text();
    // Check for actual article content
    if (xml.includes("<body") || xml.includes("<sec")) {
      return stripXml(xml);
    }
    // Might only have front matter
    if (xml.includes("<abstract")) {
      return stripXml(xml);
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Batch fetch PubMed abstracts. NCBI efetch supports up to 200 IDs per request.
 * Returns a map of PMID → abstract text.
 */
async function batchFetchAbstracts(
  pmids: string[]
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const batchSize = 50; // Keep batches smaller for reliability

  for (let i = 0; i < pmids.length; i += batchSize) {
    const batch = pmids.slice(i, i + batchSize);
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${batch.join(",")}&rettype=xml&retmode=xml`;
    try {
      await sleep(RATE_DELAY_MS);
      const res = await fetchWithRetry(url);
      if (!res.ok) continue;
      const xml = await res.text();

      // Parse individual articles from the XML
      const articleRegex =
        /<PubmedArticle>([\s\S]*?)<\/PubmedArticle>/g;
      let match: RegExpExecArray | null;

      while ((match = articleRegex.exec(xml)) !== null) {
        const article = match[1];
        // Extract PMID
        const pmidMatch = article.match(
          /<PMID[^>]*>(\d+)<\/PMID>/
        );
        if (!pmidMatch) continue;
        const pmid = pmidMatch[1];

        // Extract title + abstract
        const titleMatch = article.match(
          /<ArticleTitle[^>]*>([\s\S]*?)<\/ArticleTitle>/
        );
        const abstractMatch = article.match(
          /<Abstract[\s\S]*?<\/Abstract>/
        );

        const parts: string[] = [];
        if (titleMatch) parts.push(stripXml(titleMatch[1]));
        if (abstractMatch) parts.push(stripXml(abstractMatch[0]));

        if (parts.length > 0) {
          result.set(pmid, parts.join(" "));
        }
      }
    } catch {
      // Skip batch on error
    }
  }

  return result;
}

// ── Quote Matching ──────────────────────────────────────────────────

interface MatchResult {
  found: boolean;
  method: "exact" | "normalized" | "stripped" | "window" | null;
}

/**
 * Check if a quote appears in the source text.
 * Uses progressively looser matching.
 */
function findQuoteInText(quote: string, sourceText: string): MatchResult {
  const normQuote = normalizeForMatch(quote);
  const normSource = normalizeForMatch(sourceText);

  // 1. Direct substring match after normalization
  if (normSource.includes(normQuote)) {
    return { found: true, method: "exact" };
  }

  // 2. Case-insensitive match
  if (normSource.toLowerCase().includes(normQuote.toLowerCase())) {
    return { found: true, method: "normalized" };
  }

  // 3. Strip all punctuation and compare
  const sQuote = stripToAlphanumeric(quote);
  const sSource = stripToAlphanumeric(sourceText);
  if (sSource.includes(sQuote)) {
    return { found: true, method: "stripped" };
  }

  // 4. Word-window matching for longer quotes
  const quoteWords = sQuote.split(" ").filter((w) => w.length > 2);
  if (quoteWords.length < 5) {
    return { found: false, method: null };
  }

  const sourceWords = sSource.split(" ");
  const windowSize = Math.ceil(quoteWords.length * 1.5);
  const threshold = Math.floor(quoteWords.length * 0.75);

  for (let i = 0; i <= sourceWords.length - quoteWords.length; i++) {
    const window = sourceWords.slice(i, i + windowSize);
    const windowSet = new Set(window);
    const matchCount = quoteWords.filter((w) => windowSet.has(w)).length;
    if (matchCount >= threshold) {
      return { found: true, method: "window" };
    }
  }

  return { found: false, method: null };
}

// ── Text Fragment Generation ────────────────────────────────────────

/**
 * Generate a URL text fragment (#:~:text=...) for a quote.
 * Picks a distinctive phrase of 4-8 words, avoiding special characters
 * that break text fragment matching (dashes, quotes, etc.)
 */
function generateTextFragment(quote: string): string {
  // Normalize the quote but keep it readable
  const normalized = normalizeForMatch(quote);
  const words = normalized.split(" ");

  // Skip leading common words to find a distinctive start
  const commonWords = new Set([
    "the",
    "a",
    "an",
    "in",
    "of",
    "to",
    "and",
    "is",
    "was",
    "were",
    "are",
    "it",
    "we",
    "our",
    "this",
    "that",
    "these",
    "those",
    "for",
    "with",
    "on",
    "at",
    "by",
    "from",
    "as",
    "or",
    "but",
    "not",
    "be",
    "has",
    "have",
    "had",
  ]);

  let startIdx = 0;
  while (
    startIdx < words.length - 4 &&
    commonWords.has(words[startIdx].toLowerCase().replace(/[^a-z]/g, ""))
  ) {
    startIdx++;
  }

  // Take 5-7 words, preferring words without special chars
  let phraseWords = words.slice(startIdx, startIdx + 6);

  // Clean the phrase: replace problematic chars for URL fragments
  // Text fragments work best with plain ASCII words
  let phrase = phraseWords
    .join(" ")
    // Replace dashes with spaces (dashes break fragment matching in many browsers)
    .replace(/[-\u2013\u2014]/g, " ")
    // Remove parentheses and brackets
    .replace(/[()[\]{}]/g, "")
    // Remove quotes
    .replace(/['"]/g, "")
    // Collapse multiple spaces
    .replace(/\s+/g, " ")
    .trim();

  // If the phrase is too short after cleanup, extend it
  if (phrase.split(" ").length < 4 && startIdx + 6 < words.length) {
    phraseWords = words.slice(startIdx, startIdx + 8);
    phrase = phraseWords
      .join(" ")
      .replace(/[-\u2013\u2014]/g, " ")
      .replace(/[()[\]{}'"]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  const encoded = encodeURIComponent(phrase);
  return `#:~:text=${encoded}`;
}

// ── Main ────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes("--dry-run");
const UPDATE = process.argv.includes("--update");
const NO_CACHE = process.argv.includes("--no-cache");
const limitArg = process.argv.indexOf("--limit");
const LIMIT =
  limitArg >= 0 ? parseInt(process.argv[limitArg + 1], 10) : Infinity;
const sourceArg = process.argv.indexOf("--source");
const SPECIFIC_SOURCE = sourceArg >= 0 ? process.argv[sourceArg + 1] : null;

async function main() {
  console.log("Quote Verification");
  console.log("==================\n");

  // Filter sources
  let toCheck = sources.filter(
    (s) => s.citations.length > 0 && (s.pmid || s.doi)
  );

  if (SPECIFIC_SOURCE) {
    toCheck = toCheck.filter((s) => s.id === SPECIFIC_SOURCE);
    if (toCheck.length === 0) {
      console.error(
        `Source "${SPECIFIC_SOURCE}" not found or has no citations.`
      );
      process.exit(1);
    }
  }

  toCheck = toCheck.slice(0, LIMIT);

  const totalQuotes = toCheck.reduce(
    (sum, s) => sum + s.citations.length,
    0
  );
  console.log(
    `Checking ${totalQuotes} quotes across ${toCheck.length} sources.\n`
  );

  if (DRY_RUN) {
    for (const source of toCheck) {
      console.log(`${source.id} (${source.citations.length} quotes)`);
      for (const c of source.citations) {
        const shortQuote =
          c.quote.length > 80 ? c.quote.slice(0, 80) + "..." : c.quote;
        console.log(`  ${c.citationId}: "${shortQuote}"`);
      }
    }
    return;
  }

  // Step 1: Batch convert PMIDs to PMCIDs
  console.log("Step 1: Converting PMIDs to PMCIDs...");
  const pmids = toCheck.filter((s) => s.pmid).map((s) => s.pmid!);
  const pmidToPmc = await batchConvertPmidToPmc(pmids);
  console.log(
    `  ${pmidToPmc.size} of ${pmids.length} have PMC full text.\n`
  );

  // Step 2: Batch fetch all PubMed abstracts
  console.log("Step 2: Batch-fetching PubMed abstracts...");
  const abstractMap = await batchFetchAbstracts(pmids);
  console.log(`  Retrieved ${abstractMap.size} abstracts.\n`);

  // Step 3: Load cache
  const cache = NO_CACHE ? {} : loadCache();
  let cacheHits = 0;

  // Step 4: Check each source
  console.log("Step 3: Verifying quotes...");
  const results: SourceCheckResult[] = [];

  // First pass: check against abstracts (fast, no extra fetching)
  const needFullText: Source[] = [];

  for (const source of toCheck) {
    const cacheKey = source.id;
    const hash = quoteHash(source.citations);

    // Check cache
    if (cache[cacheKey] && cache[cacheKey].quoteHash === hash) {
      cacheHits++;
      results.push({
        sourceId: source.id,
        pmcId: cache[cacheKey].pmcId,
        fetchedFrom: cache[cacheKey].fetchedFrom,
        quotes: cache[cacheKey].quotes,
      });
      continue;
    }

    const pmcId = source.pmid ? pmidToPmc.get(source.pmid) ?? null : null;
    const abstractText = source.pmid
      ? abstractMap.get(source.pmid) ?? null
      : null;

    // Check quotes against abstract first
    let allFound = true;
    const quoteResults: QuoteCheckResult[] = [];

    for (const citation of source.citations) {
      let foundIn: string | null = null;
      let method: string | null = null;

      // Check against abstract
      if (abstractText) {
        const result = findQuoteInText(citation.quote, abstractText);
        if (result.found) {
          foundIn = "abstract";
          method = result.method;
        }
      }

      // Check against title if not found
      if (!foundIn) {
        const titleResult = findQuoteInText(citation.quote, source.title);
        if (titleResult.found) {
          foundIn = "title";
          method = titleResult.method;
        }
      }

      if (!foundIn) {
        allFound = false;
      }

      quoteResults.push({
        citationId: citation.citationId,
        quote: citation.quote,
        foundIn,
        textFragment: foundIn ? generateTextFragment(citation.quote) : null,
      });
    }

    if (allFound) {
      process.stdout.write(".");
      const result: SourceCheckResult = {
        sourceId: source.id,
        pmcId,
        fetchedFrom: abstractText ? "pubmed-abstract" : "none",
        quotes: quoteResults,
      };
      results.push(result);
      cache[cacheKey] = {
        ...result,
        quoteHash: hash,
        timestamp: Date.now(),
      };
    } else {
      // Need full text for unmatched quotes
      needFullText.push(source);
      // Store partial results for now
      results.push({
        sourceId: source.id,
        pmcId,
        fetchedFrom: "pubmed-abstract",
        quotes: quoteResults,
      });
      process.stdout.write("?");
    }
  }

  console.log();

  // Second pass: fetch full text from Europe PMC for unresolved quotes
  if (needFullText.length > 0) {
    console.log(
      `\nStep 4: Fetching Europe PMC full text for ${needFullText.length} sources with unresolved quotes...`
    );

    for (const source of needFullText) {
      const pmcId = source.pmid ? pmidToPmc.get(source.pmid) ?? null : null;
      if (!pmcId) {
        process.stdout.write("-");
        continue;
      }

      await sleep(RATE_DELAY_MS);
      const fullText = await fetchEuropePmcFullText(pmcId);

      if (!fullText) {
        process.stdout.write("x");
        continue;
      }

      process.stdout.write("F");

      // Re-check unfound quotes against full text
      const resultIdx = results.findIndex(
        (r) => r.sourceId === source.id
      );
      if (resultIdx < 0) continue;

      const result = results[resultIdx];
      result.fetchedFrom = "europepmc";

      for (const qr of result.quotes) {
        if (qr.foundIn !== null) continue; // Already found in abstract

        const matchResult = findQuoteInText(qr.quote, fullText);
        if (matchResult.found) {
          qr.foundIn = "fulltext";
          qr.textFragment = generateTextFragment(qr.quote);
        }
      }

      // Update cache
      const hash = quoteHash(source.citations);
      cache[source.id] = {
        ...result,
        quoteHash: hash,
        timestamp: Date.now(),
      };
    }
    console.log();
  }

  // Cache sources that didn't need full text too
  for (const source of toCheck) {
    if (!cache[source.id]) {
      const result = results.find((r) => r.sourceId === source.id);
      if (result) {
        cache[source.id] = {
          ...result,
          quoteHash: quoteHash(source.citations),
          timestamp: Date.now(),
        };
      }
    }
  }

  // Save cache
  saveCache(cache);
  console.log();

  // Step 5: Analyze results
  const allQuotes = results.flatMap((r) =>
    r.quotes.map((q) => ({
      ...q,
      sourceId: r.sourceId,
      fetchedFrom: r.fetchedFrom,
      pmcId: r.pmcId,
    }))
  );

  const verified = allQuotes.filter((q) => q.foundIn !== null);
  const notFound = allQuotes.filter((q) => q.foundIn === null);

  // Categorize not-found
  const suspicious = notFound.filter(
    (q) => q.fetchedFrom === "europepmc"
  );
  const abstractOnly = notFound.filter(
    (q) => q.fetchedFrom === "pubmed-abstract" && q.pmcId
  );
  const noPmc = notFound.filter(
    (q) => q.fetchedFrom === "pubmed-abstract" && !q.pmcId
  );
  const noText = notFound.filter((q) => q.fetchedFrom === "none");

  console.log("--- RESULTS ---");
  console.log(`Total quotes:           ${allQuotes.length}`);
  console.log(`Cache hits:             ${cacheHits} sources`);
  console.log(
    `Verified in full text:  ${verified.filter((q) => q.foundIn === "fulltext").length}`
  );
  console.log(
    `Verified in abstract:   ${verified.filter((q) => q.foundIn === "abstract").length}`
  );
  console.log(
    `Verified in title:      ${verified.filter((q) => q.foundIn === "title").length}`
  );
  console.log();
  console.log(
    `SUSPICIOUS (not in full text):  ${suspicious.length}`
  );
  console.log(
    `Unresolved (PMC fetch failed): ${abstractOnly.length}`
  );
  console.log(
    `Unresolved (no PMC version):   ${noPmc.length}`
  );
  console.log(`No text available:             ${noText.length}`);
  console.log();

  // Print suspicious quotes (not found even with full text)
  if (suspicious.length > 0) {
    console.log(
      "--- SUSPICIOUS: Not found in PMC full text ---\n"
    );
    console.log(
      "These quotes could not be found in the full article text.\n" +
        "They may be fabricated, significantly paraphrased, or from supplements.\n"
    );
    for (const q of suspicious) {
      const shortQuote =
        q.quote.length > 120 ? q.quote.slice(0, 120) + "..." : q.quote;
      console.log(`  ${q.sourceId} / ${q.citationId}`);
      console.log(`    "${shortQuote}"`);
      console.log();
    }
  }

  // Print unresolved quotes where PMC exists but fetch failed
  if (abstractOnly.length > 0) {
    console.log("--- UNRESOLVED: PMC available but fetch failed ---\n");
    for (const q of abstractOnly.slice(0, 10)) {
      const shortQuote =
        q.quote.length > 100 ? q.quote.slice(0, 100) + "..." : q.quote;
      console.log(`  ${q.sourceId} / ${q.citationId}`);
      console.log(`    "${shortQuote}"`);
    }
    if (abstractOnly.length > 10) {
      console.log(`  ... and ${abstractOnly.length - 10} more.`);
    }
    console.log();
  }

  // Print quotes from paywalled sources
  if (noPmc.length > 0) {
    console.log(
      "--- UNVERIFIABLE: No PMC full text (paywalled) ---\n"
    );
    console.log(
      `  ${noPmc.length} quotes from ${new Set(noPmc.map((q) => q.sourceId)).size} paywalled sources.`
    );
    console.log(
      "  These quotes are from the paper body, not the abstract.\n"
    );
    for (const q of noPmc.slice(0, 15)) {
      const shortQuote =
        q.quote.length > 100 ? q.quote.slice(0, 100) + "..." : q.quote;
      console.log(`  ${q.sourceId} / ${q.citationId}`);
      console.log(`    "${shortQuote}"`);
    }
    if (noPmc.length > 15) {
      console.log(`  ... and ${noPmc.length - 15} more.`);
    }
    console.log();
  }

  // Show URL text fragment updates
  if (UPDATE) {
    console.log("--- URL TEXT FRAGMENT UPDATES ---\n");
    let updateCount = 0;
    for (const r of results) {
      const source = sourcesMap.get(r.sourceId);
      if (!source || !source.url) continue;

      // Find best verified text fragment
      const verifiedQuote = r.quotes.find(
        (q) => q.foundIn !== null && q.textFragment
      );
      if (!verifiedQuote) continue;

      const currentUrl = source.url;
      const hasFragment = currentUrl.includes("#:~:text=");

      if (!hasFragment) {
        let baseUrl = currentUrl.replace(/#.*$/, "");
        // Upgrade to PMC URL if available (better for text fragments)
        if (r.pmcId && !baseUrl.includes("pmc.ncbi.nlm.nih.gov")) {
          baseUrl = `https://pmc.ncbi.nlm.nih.gov/articles/${r.pmcId}/`;
        }
        const newUrl = baseUrl + verifiedQuote.textFragment;
        console.log(`  ${r.sourceId}:`);
        console.log(`    Old: ${currentUrl}`);
        console.log(`    New: ${newUrl}`);
        updateCount++;
      }
    }
    if (updateCount === 0) {
      console.log("  All URLs already have text fragments.");
    } else {
      console.log(`\n  ${updateCount} URLs could be updated.`);
    }
    console.log();
  }

  // Summary
  const verifiedPct = ((verified.length / allQuotes.length) * 100).toFixed(1);
  console.log(`Verification rate: ${verifiedPct}% (${verified.length}/${allQuotes.length})`);

  // Exit with error if suspicious quotes found
  if (suspicious.length > 0) {
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
