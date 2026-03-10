/**
 * Bibliography Verification Script
 *
 * Checks each source against PubMed (NCBI E-utilities) and CrossRef APIs
 * to validate title, authors, journal, and year.
 *
 * Run: npx tsx scripts/verify-bibliography.ts
 * Options:
 *   --fix    Attempt to auto-fix trivial mismatches (trailing periods, etc.)
 *   --json   Output results as JSON to stdout
 */

import * as fs from "fs";
import * as path from "path";
import { sources } from "../src/data/bibliography";
import type { Source } from "../src/data/bibliography/types";

// ── Helpers ──────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Aggressively normalize a string for fuzzy comparison.
 * Strips trailing periods, normalizes unicode, dashes, quotes, ampersands,
 * HTML entities, and parenthetical qualifiers common in journal names.
 */
function normalize(s: string): string {
  return (
    s
      .toLowerCase()
      // Strip trailing period(s)
      .replace(/\.+$/, "")
      // HTML entities
      .replace(/&amp;/g, "&")
      .replace(/&#x27;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      // Normalize all quote styles to ASCII
      .replace(/[\u2018\u2019\u02BC\u0060\u00B4]/g, "'") // curly single quotes → '
      .replace(/[\u201C\u201D]/g, '"') // curly double quotes → "
      // Normalize dashes: en-dash, em-dash, unicode hyphen, minus → ASCII hyphen
      .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\u00AD]/g, "-")
      // Greek letters to ASCII names (common in biomedical titles)
      .replace(/\u03B1/g, "alpha")
      .replace(/\u03B2/g, "beta")
      .replace(/\u03B3/g, "gamma")
      .replace(/\u03B4/g, "delta")
      .replace(/\u03B5/g, "epsilon")
      .replace(/\u03BA/g, "kappa")
      .replace(/\u03BC/g, "mu")
      .replace(/\u03C3/g, "sigma")
      .replace(/\u03C4/g, "tau")
      // Subscripts/superscripts to plain digits
      .replace(/[\u2070\u00B0]/g, "0")
      .replace(/[\u00B9\u00B9]/g, "1")
      .replace(/[\u00B2]/g, "2")
      .replace(/[\u00B3]/g, "3")
      // Remove parenthetical content around text (e.g. MAPT(Rx) → MAPTRx)
      .replace(/\(([^)]{1,4})\)/g, "$1")
      // Collapse whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
}

/**
 * Extra normalization for journal names specifically.
 * Handles PubMed's idiosyncratic formatting like
 * "Lancet (London, England)" or "Nature reviews. Disease primers"
 */
function normalizeJournal(s: string): string {
  let j = normalize(s);
  // Strip parenthetical qualifiers: "(London, England)", "(New York, N. Y.)", etc.
  j = j.replace(/\s*\([^)]*\)\s*/g, " ");
  // "nature reviews. disease primers" → "nature reviews disease primers"
  j = j.replace(/\.\s+/g, " ");
  // Normalize "&" and "and"
  j = j.replace(/\s*&\s*/g, " and ");
  // Strip "the " prefix
  j = j.replace(/^the\s+/, "");
  // Strip ": the journal of ..." suffixes
  j = j.replace(/\s*:\s*the journal of.*$/, "");
  // Remove commas (handles "neurosurgery, and" vs "neurosurgery and", "Royal Society, Interface" vs "Royal Society Interface")
  j = j.replace(/,/g, "");
  // Collapse extra spaces
  j = j.replace(/\s+/g, " ").trim();
  return j;
}

/**
 * Compare two titles with aggressive normalization.
 * Returns true if they're substantially the same.
 */
function titlesMatch(ours: string, theirs: string): boolean {
  const a = normalize(ours);
  const b = normalize(theirs);
  // Exact match after normalization
  if (a === b) return true;
  // Substring containment (handles minor differences)
  if (a.includes(b) || b.includes(a)) return true;
  // Check similarity ignoring all punctuation and whitespace
  const stripPunct = (s: string) => s.replace(/[^a-z0-9]/g, "");
  if (stripPunct(a) === stripPunct(b)) return true;
  // Word-level Jaccard similarity — handles minor insertions/deletions
  // (e.g. "in amyotrophic lateral sclerosis" vs "in patients with early amyotrophic lateral sclerosis")
  const wordsA = new Set(a.split(/\s+/).filter((w) => w.length > 2));
  const wordsB = new Set(b.split(/\s+/).filter((w) => w.length > 2));
  const intersection = [...wordsA].filter((w) => wordsB.has(w)).length;
  const union = new Set([...wordsA, ...wordsB]).size;
  if (union > 0 && intersection / union >= 0.85) return true;
  return false;
}

function firstAuthorLastName(authors: string): string {
  // "Armulik A, Genové G, ..." → "armulik"
  const first = authors.split(",")[0].trim();
  const cleaned = first.replace(/\.$/, "").trim();
  const parts = cleaned.split(/\s+/);
  // Filter out initials: tokens that are all uppercase and ≤3 chars
  const nonInitials = parts.filter((p) => {
    const stripped = p.replace(/[.\-]/g, "");
    if (stripped.length <= 3 && stripped === stripped.toUpperCase()) return false;
    return true;
  });
  if (nonInitials.length === 0) return parts[0]?.toLowerCase() ?? "";
  return nonInitials[0].toLowerCase();
}

// ── API Fetchers ────────────────────────────────────────────────────

interface ApiResult {
  title?: string;
  authors?: string;
  firstAuthorFamily?: string;
  journal?: string;
  year?: number;
  error?: string;
}

/**
 * Fetch with retry on 429 rate limit errors.
 */
async function fetchWithRetry(
  url: string,
  options?: RequestInit,
  maxRetries = 3
): Promise<Response> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const res = await fetch(url, options);
    if (res.status === 429 && attempt < maxRetries) {
      const retryAfter = res.headers.get("Retry-After");
      const waitMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : 2000 * (attempt + 1);
      process.stdout.write("R");
      await sleep(waitMs);
      continue;
    }
    return res;
  }
  // Unreachable, but TypeScript needs it
  throw new Error("Max retries exceeded");
}

async function fetchPubMed(pmid: string): Promise<ApiResult> {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`;
  try {
    const res = await fetchWithRetry(url);
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const data = await res.json();
    const doc = data?.result?.[pmid];
    if (!doc) return { error: "No result for PMID" };
    const firstAuthor = doc.authors?.[0]?.name;
    const firstFamily = firstAuthor?.split(" ")[0]?.toLowerCase();
    return {
      title: doc.title,
      authors: doc.authors?.map((a: { name: string }) => a.name).join(", "),
      firstAuthorFamily: firstFamily,
      journal: doc.fulljournalname || doc.source,
      year: parseInt(doc.pubdate?.split(" ")[0], 10) || undefined,
    };
  } catch (e) {
    return { error: String(e) };
  }
}

async function fetchCrossRef(doi: string): Promise<ApiResult> {
  const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}`;
  try {
    const res = await fetchWithRetry(url, {
      headers: {
        "User-Agent":
          "FELINES-Framework/1.0 (bibliography-verification; mailto:noreply@example.com)",
      },
    });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const data = await res.json();
    const msg = data?.message;
    if (!msg) return { error: "No message in CrossRef response" };
    const authors = msg.author
      ?.map((a: { family?: string; given?: string }) =>
        [a.given, a.family].filter(Boolean).join(" ")
      )
      .join(", ");
    const firstFamily = msg.author?.[0]?.family?.toLowerCase();
    const year =
      msg.published?.["date-parts"]?.[0]?.[0] ??
      msg["published-print"]?.["date-parts"]?.[0]?.[0] ??
      msg["published-online"]?.["date-parts"]?.[0]?.[0];
    return {
      title: Array.isArray(msg.title) ? msg.title[0] : msg.title,
      authors,
      firstAuthorFamily: firstFamily,
      journal: Array.isArray(msg["container-title"])
        ? msg["container-title"][0]
        : msg["container-title"],
      year: year ? Number(year) : undefined,
    };
  } catch (e) {
    return { error: String(e) };
  }
}

// ── Comparison ──────────────────────────────────────────────────────

type Severity = "error" | "warning";

interface ComparisonResult {
  field: string;
  ours: string;
  api: string;
  match: boolean;
  severity: Severity;
}

function compare(source: Source, api: ApiResult): ComparisonResult[] {
  const results: ComparisonResult[] = [];

  if (api.title) {
    results.push({
      field: "title",
      ours: source.title,
      api: api.title,
      match: titlesMatch(source.title, api.title),
      severity: "error",
    });
  }

  if (api.firstAuthorFamily) {
    const ourFirst = firstAuthorLastName(source.authors);
    // Normalize diacritics for comparison (e.g., Genové → genove)
    const normOur = ourFirst.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normApi = api.firstAuthorFamily
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const matched = normOur === normApi;
    // Downgrade to warning when API returns consortium/group name
    // (contains hyphens like "ukmnd-licals", or our author field is generic like "NCBI")
    const looksLikeConsortium =
      api.firstAuthorFamily.includes("-") ||
      /^[a-z]{2,}$/.test(api.firstAuthorFamily) === false && api.firstAuthorFamily.length > 10;
    results.push({
      field: "first_author",
      ours: ourFirst,
      api: api.firstAuthorFamily,
      match: matched,
      severity: matched ? "error" : looksLikeConsortium ? "warning" : "error",
    });
  }

  if (api.year != null) {
    const yearDiff = Math.abs(source.year - api.year);
    results.push({
      field: "year",
      ours: String(source.year),
      api: String(api.year),
      // Allow ±1 year for online-first vs print publication dates
      match: yearDiff === 0,
      severity: yearDiff === 1 ? "warning" : "error",
    });
  }

  if (api.journal) {
    const ours = normalizeJournal(source.journal);
    const theirs = normalizeJournal(api.journal);
    results.push({
      field: "journal",
      ours: source.journal,
      api: api.journal,
      match: ours === theirs || ours.includes(theirs) || theirs.includes(ours),
      severity: "error",
    });
  }

  return results;
}

// ── Batch Processing with Concurrency ───────────────────────────────

interface VerifyResult {
  source: Source;
  api: ApiResult;
  comparisons: ComparisonResult[];
  via: "pmid" | "doi";
}

async function processBatch(
  batch: Source[],
  fetcher: (id: string) => Promise<ApiResult>,
  getId: (s: Source) => string,
  via: "pmid" | "doi",
  delayMs: number,
): Promise<{ results: VerifyResult[]; errors: { source: Source; error: string }[] }> {
  const results: VerifyResult[] = [];
  const errors: { source: Source; error: string }[] = [];

  for (const source of batch) {
    await sleep(delayMs);
    const api = await fetcher(getId(source));
    if (api.error) {
      errors.push({ source, error: api.error });
      process.stdout.write("E");
      continue;
    }
    const comparisons = compare(source, api);
    results.push({ source, api, comparisons, via });
    const hasError = comparisons.some((c) => !c.match && c.severity === "error");
    const hasWarning = comparisons.some((c) => !c.match && c.severity === "warning");
    if (hasError) {
      process.stdout.write("X");
    } else if (hasWarning) {
      process.stdout.write("~");
    } else {
      process.stdout.write(".");
    }
  }

  return { results, errors };
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log("Bibliography Verification");
  console.log("========================\n");

  // Step 1: Duplicate check
  const ids = sources.map((s) => s.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length > 0) {
    console.error(`DUPLICATE IDs: ${dupes.join(", ")}`);
    process.exit(1);
  }

  // Step 2: Categorize
  const withPmid = sources.filter((s) => s.pmid);
  const doiOnly = sources.filter((s) => !s.pmid && s.doi);
  const unverifiable = sources.filter((s) => !s.pmid && !s.doi);

  console.log(`Total sources: ${sources.length}`);
  console.log(
    `  With PMID: ${withPmid.length} | DOI only: ${doiOnly.length} | Unverifiable: ${unverifiable.length}`
  );
  console.log();

  // Step 3: Verify PMID sources (rate limit: 3/sec without API key)
  console.log(`Verifying ${withPmid.length} PMID sources against PubMed...`);
  const pmidResults = await processBatch(
    withPmid,
    fetchPubMed,
    (s) => s.pmid!,
    "pmid",
    400, // ~2.5/sec to stay under 3/sec limit
  );
  console.log();

  // Step 4: Verify DOI-only sources via CrossRef
  if (doiOnly.length > 0) {
    console.log(`Verifying ${doiOnly.length} DOI-only sources against CrossRef...`);
    const doiResults = await processBatch(
      doiOnly,
      fetchCrossRef,
      (s) => s.doi!,
      "doi",
      1100, // CrossRef polite rate: ~1/sec
    );
    pmidResults.results.push(...doiResults.results);
    pmidResults.errors.push(...doiResults.errors);
    console.log();
  }

  // Step 5: Analyze results
  const allResults = pmidResults.results;
  const allErrors = pmidResults.errors;

  const verified = allResults.filter(
    (r) => r.comparisons.every((c) => c.match)
  );
  const withWarnings = allResults.filter(
    (r) =>
      r.comparisons.some((c) => !c.match && c.severity === "warning") &&
      r.comparisons.every((c) => c.match || c.severity === "warning")
  );
  const withErrors = allResults.filter(
    (r) => r.comparisons.some((c) => !c.match && c.severity === "error")
  );

  // Step 6: Print summary
  console.log("\n--- RESULTS ---");
  console.log(`Verified:      ${verified.length}`);
  console.log(`Warnings:      ${withWarnings.length} (year ±1, likely online-first vs print)`);
  console.log(`Errors:        ${withErrors.length}`);
  console.log(`API errors:    ${allErrors.length}`);
  console.log(`Unverifiable:  ${unverifiable.length}`);
  console.log();

  // Print warnings (year off by 1)
  if (withWarnings.length > 0) {
    console.log("--- WARNINGS (year ±1) ---\n");
    for (const r of withWarnings) {
      const id = r.via === "pmid" ? `PMID: ${r.source.pmid}` : `DOI: ${r.source.doi}`;
      console.log(`  ${r.source.id} (${id})`);
      for (const c of r.comparisons.filter((x) => !x.match)) {
        console.log(`    ${c.field}: ours=${c.ours} api=${c.api}`);
      }
    }
    console.log();
  }

  // Print errors (real mismatches)
  if (withErrors.length > 0) {
    console.log("--- ERRORS (real mismatches) ---\n");
    for (const r of withErrors) {
      const id = r.via === "pmid" ? `PMID: ${r.source.pmid}` : `DOI: ${r.source.doi}`;
      console.log(`MISMATCH: ${r.source.id} (${id})`);
      for (const c of r.comparisons.filter((x) => !x.match)) {
        console.log(`  ${c.field}:`);
        console.log(`    Ours: ${c.ours}`);
        console.log(`    API:  ${c.api}`);
      }
      console.log();
    }
  }

  // Print API errors
  if (allErrors.length > 0) {
    console.log("--- API ERRORS ---\n");
    for (const { source, error } of allErrors) {
      console.log(`  ${source.id}: ${error}`);
    }
    console.log();
  }

  // Print unverifiable
  if (unverifiable.length > 0) {
    console.log("--- UNVERIFIABLE (no PMID or DOI) ---\n");
    for (const s of unverifiable) {
      console.log(`  ${s.id}: ${s.title}`);
    }
    console.log();
  }

  // Exit with error only for real mismatches
  if (withErrors.length > 0) {
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
