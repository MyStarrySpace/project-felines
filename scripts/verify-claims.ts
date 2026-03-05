/**
 * Claim Verification Script
 *
 * For each <Cite> in the codebase, extracts the surrounding text claim,
 * looks up the source's quotes, and asks Claude Haiku whether the claim
 * is supported by the quoted evidence.
 *
 * Also processes claims from the claims manifest (scripts/claims-manifest.ts)
 * which covers factual claims in data files that don't use <Cite> tags.
 *
 * Results are cached in scripts/.claim-cache.json so verified pairs
 * are not re-checked on subsequent runs.
 *
 * Requires ANTHROPIC_API_KEY environment variable.
 *
 * Run: npx tsx scripts/verify-claims.ts
 */

import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import { sources, sourcesMap } from "../src/data/bibliography";
import type { Source } from "../src/data/bibliography/types";
import { manifestClaims } from "./claims-manifest";

// ── Config ─────────────────────────────────────────────────────────

const SRC_DIR = path.resolve(__dirname, "../src");
const CACHE_PATH = path.resolve(__dirname, ".claim-cache.json");
const MODEL = "claude-haiku-4-5-20251001";
const MAX_CONTEXT_CHARS = 600; // chars before <Cite> to extract
const API_DELAY_MS = 500; // rate-limit delay between API calls

// ── Types ──────────────────────────────────────────────────────────

interface ClaimEntry {
  file: string;
  line: number;
  sourceId: string;
  citationIds: string[];
  claimText: string;
  quotes: string[];
}

interface CacheEntry {
  supported: boolean;
  reason: string;
}

type Cache = Record<string, CacheEntry>;

// ── Helpers ────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function hash(claim: string, quotes: string[]): string {
  const input = claim + "\n---\n" + quotes.join("\n---\n");
  return crypto.createHash("sha256").update(input).digest("hex").slice(0, 16);
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

/** Recursively find all .tsx files under a directory */
function findTsxFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      results.push(...findTsxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      results.push(fullPath);
    }
  }
  return results;
}

/** Convert HTML hex entities (&#xHHHH;) to their Unicode characters */
function decodeHexEntities(text: string): string {
  return text.replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => {
    try { return String.fromCodePoint(parseInt(hex, 16)); }
    catch { return ""; }
  });
}

/** Convert HTML decimal entities (&#DDD;) to their Unicode characters */
function decodeDecEntities(text: string): string {
  return text.replace(/&#(\d+);/g, (_, dec) => {
    try { return String.fromCodePoint(parseInt(dec, 10)); }
    catch { return ""; }
  });
}

/** Common named HTML entities → readable text */
const NAMED_ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'",
  nbsp: " ", thinsp: " ", ensp: " ", emsp: " ",
  ndash: "–", mdash: "—", minus: "−",
  ldquo: "\u201C", rdquo: "\u201D", lsquo: "\u2018", rsquo: "\u2019",
  hellip: "…", prime: "′",
  alpha: "α", beta: "β", gamma: "γ", delta: "δ",
  mu: "μ", sigma: "σ", tau: "τ",
  sup2: "²", sup3: "³",
};

function decodeNamedEntities(text: string): string {
  return text.replace(/&(\w+);/g, (full, name) => NAMED_ENTITIES[name] ?? full);
}

/** Strip JSX/HTML tags, comments, attributes, and collapse whitespace */
function stripJsx(text: string): string {
  // Decode entities FIRST so &rdquo; semicolons don't confuse JS-removal regexes
  let s = text;
  s = decodeHexEntities(s);
  s = decodeDecEntities(s);
  s = decodeNamedEntities(s);
  s = s
    .replace(/\/\*[\s\S]*?\*\//g, " ") // remove block comments
    .replace(/\/\/[^\n]*/g, " ") // remove line comments
    .replace(/<[^>]+>/g, " ") // remove tags (incl. SVG, img, etc.)
    .replace(/\{[^}]*\}/g, " ") // remove JSX expressions like {" "}
    .replace(/\b(?:className|style|alt|src|d|href|onClick|role|tabIndex)\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]*\})/g, " ") // remove stray attributes
    .replace(/\b(?:const|let|var|function|return|export|import|type|interface)\b[^;{]*[;{]/g, " "); // remove JS declarations
  return s.replace(/\s+/g, " ").trim();
}

/**
 * Extract the text content before a <Cite> tag.
 * Walks backwards from the Cite position to find meaningful claim text.
 * Stops at the previous <Cite>, component boundary, or MAX_CONTEXT_CHARS.
 */
function extractClaimBefore(content: string, citeIndex: number): string {
  // Find the start boundary: previous <Cite>, or start of JSX block
  const before = content.slice(Math.max(0, citeIndex - MAX_CONTEXT_CHARS * 3), citeIndex);

  // Split on previous Cite tags, JSX fragment boundaries, AND component boundaries
  // Component tags like <ProteinEntry, <IronBeatText, callback patterns like toggle("ab")}
  const parts = before.split(/<Cite[^>]*\/?>|<\/?>|<[A-Z]\w+[\s>]|\)\s*\}/);
  const lastPart = parts[parts.length - 1] || "";

  const stripped = stripJsx(lastPart);

  // Quote-aware extraction: if the text ends with a quoted passage
  // (using Unicode curly quotes from entity decoding), prefer the quoted portion
  const quoteMatch = stripped.match(/\u201C([^]*)\u201D\s*$/);
  if (quoteMatch) {
    // Include a bit of context before the quote if it's short
    const quoteStart = stripped.lastIndexOf("\u201C");
    const contextBefore = stripped.slice(0, quoteStart).trim();
    // Take the last sentence of context + the quote
    const lastSentence = contextBefore.split(/(?<=[.!?])\s+/).pop() || "";
    const withContext = (lastSentence + " " + stripped.slice(quoteStart)).trim();
    if (withContext.length >= 20) return withContext;
  }

  // Take the last ~2-3 sentences
  const sentences = stripped.split(/(?<=[.!?])\s+/);
  let result = "";
  for (let i = sentences.length - 1; i >= 0; i--) {
    const candidate = sentences.slice(i).join(" ");
    if (candidate.length > MAX_CONTEXT_CHARS) break;
    result = candidate;
  }

  return result || stripped.slice(-MAX_CONTEXT_CHARS);
}

// ── Extraction ─────────────────────────────────────────────────────

/**
 * Parse a file for <Cite> tags and extract claim + source info.
 */
function extractClaims(filePath: string): ClaimEntry[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const relPath = path.relative(path.resolve(__dirname, ".."), filePath).replace(/\\/g, "/");
  const entries: ClaimEntry[] = [];

  // Match <Cite id="..." /> and <Cite id="..." citationIds={[...]} />
  const citeRegex = /<Cite\s+id="([^"]+)"(?:\s+citationIds=\{(\[[^\]]*\])\})?\s*\/?>/g;
  let match: RegExpExecArray | null;

  while ((match = citeRegex.exec(content)) !== null) {
    const sourceId = match[1];
    const citationIdsRaw = match[2];

    // Parse citationIds if present
    let citationIds: string[] = [];
    if (citationIdsRaw) {
      try {
        citationIds = JSON.parse(citationIdsRaw.replace(/'/g, '"'));
      } catch {
        // ignore parse errors
      }
    }

    // Look up source
    const source = sourcesMap.get(sourceId);
    if (!source || source.citations.length === 0) continue;

    // Get relevant quotes
    const quotes: string[] = [];
    if (citationIds.length > 0) {
      for (const cid of citationIds) {
        const citation = source.citations.find((c) => c.citationId === cid);
        if (citation) quotes.push(citation.quote);
      }
    }
    // Include ALL citation quotes when no specific citationIds are given
    if (quotes.length === 0) {
      for (const c of source.citations) {
        quotes.push(c.quote);
      }
    }

    // Extract claim text
    const claimText = extractClaimBefore(content, match.index);
    if (!claimText || claimText.length < 15) continue;
    // Skip entries that look like code artifacts rather than prose
    if (/^[A-Z][a-z]+\(|^\w+\s*=|^[{(]/.test(claimText)) continue;
    if (/\bfunction\b|]\s*;\s*}|^\w+\s*\(/.test(claimText)) continue;

    // Find line number
    const lineNumber = content.slice(0, match.index).split("\n").length;

    entries.push({
      file: relPath,
      line: lineNumber,
      sourceId,
      citationIds,
      claimText,
      quotes,
    });
  }

  return entries;
}

// ── AI Verification ────────────────────────────────────────────────

async function verifyClaim(
  claim: string,
  quotes: string[],
  sourceId: string
): Promise<{ supported: boolean; reason: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY environment variable is required");
  }

  const quotesFormatted = quotes.map((q, i) => `Quote ${i + 1}: "${q}"`).join("\n\n");

  const prompt = `You are a fact-checker. Determine whether the CLAIM is supported by the SOURCE QUOTES.

CLAIM (from website copy):
"${claim}"

SOURCE QUOTES (from ${sourceId}):
${quotesFormatted}

Rules:
- The claim does NOT need to match word-for-word. It can paraphrase, simplify, or contextualize the quote.
- The claim IS supported if the source quote provides reasonable evidence for the factual assertions in the claim.
- The claim is NOT supported if it makes specific factual assertions (numbers, outcomes, mechanisms) that the quotes don't cover.
- Generic framing language (e.g., "No one has proposed it for Alzheimer's") is editorial and should be marked SUPPORTED unless the quotes directly contradict it.
- If the claim is about a trial result, the numbers and direction must match.

Respond with EXACTLY one line:
SUPPORTED: <brief reason>
or
UNSUPPORTED: <what specific part of the claim is not backed by the quotes>`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 200,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  const text: string = data.content?.[0]?.text ?? "";

  if (text.startsWith("SUPPORTED")) {
    return { supported: true, reason: text.replace("SUPPORTED: ", "") };
  } else {
    return { supported: false, reason: text.replace("UNSUPPORTED: ", "") };
  }
}

// ── Main ───────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes("--dry-run");

async function main() {
  console.log("Claim Verification");
  console.log("==================\n");

  if (DRY_RUN) {
    console.log("(Dry run: showing extracted claims without AI verification)\n");
  } else if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Error: ANTHROPIC_API_KEY environment variable is required.");
    console.error("Set it with: export ANTHROPIC_API_KEY=sk-ant-...");
    console.error("Or use --dry-run to preview extracted claims.");
    process.exit(1);
  }

  // Find all .tsx files
  const files = findTsxFiles(SRC_DIR);
  console.log(`Scanning ${files.length} .tsx files...\n`);

  // Extract claims from <Cite> tags
  const allClaims: ClaimEntry[] = [];
  for (const file of files) {
    allClaims.push(...extractClaims(file));
  }
  console.log(`Found ${allClaims.length} claims from <Cite> tags.`);

  // Extract claims from manifest (data-file claims)
  let manifestCount = 0;
  for (const mc of manifestClaims) {
    const source = sourcesMap.get(mc.sourceId);
    if (!source || source.citations.length === 0) {
      console.warn(`  Warning: manifest source "${mc.sourceId}" not found or has no citations. Skipping.`);
      continue;
    }

    const quotes: string[] = [];
    if (mc.citationIds && mc.citationIds.length > 0) {
      for (const cid of mc.citationIds) {
        const citation = source.citations.find((c) => c.citationId === cid);
        if (citation) quotes.push(citation.quote);
      }
    }
    if (quotes.length === 0 && source.citations[0]) {
      quotes.push(source.citations[0].quote);
    }

    allClaims.push({
      file: mc.file,
      line: 0, // manifest claims don't have line numbers
      sourceId: mc.sourceId,
      citationIds: mc.citationIds ?? [],
      claimText: mc.claim,
      quotes,
    });
    manifestCount++;
  }
  console.log(`Found ${manifestCount} claims from manifest.`);
  console.log(`Total: ${allClaims.length} claims to verify.\n`);

  if (allClaims.length === 0) {
    console.log("Nothing to verify.");
    return;
  }

  // Dry run: just print extracted claims
  if (DRY_RUN) {
    for (const entry of allClaims) {
      const loc = entry.line > 0 ? `${entry.file}:${entry.line}` : `${entry.file} (manifest)`;
      console.log(`${loc} [${entry.sourceId}]`);
      console.log(`  Claim: "${entry.claimText.slice(0, 150)}${entry.claimText.length > 150 ? "..." : ""}"`);
      console.log(`  Quotes: ${entry.quotes.length} quote(s)`);
      for (const q of entry.quotes) {
        console.log(`    - "${q.slice(0, 100)}${q.length > 100 ? "..." : ""}"`);
      }
      console.log();
    }
    return;
  }

  // Load cache
  const cache = loadCache();
  let cacheHits = 0;
  let apiCalls = 0;
  const unsupported: { entry: ClaimEntry; reason: string }[] = [];
  const supported: { entry: ClaimEntry; reason: string }[] = [];

  for (const entry of allClaims) {
    const key = hash(entry.claimText, entry.quotes);

    // Check cache
    if (cache[key]) {
      cacheHits++;
      if (!cache[key].supported) {
        unsupported.push({ entry, reason: cache[key].reason });
      } else {
        supported.push({ entry, reason: cache[key].reason });
      }
      continue;
    }

    // Verify with AI
    try {
      await sleep(API_DELAY_MS);
      const result = await verifyClaim(entry.claimText, entry.quotes, entry.sourceId);
      apiCalls++;

      cache[key] = result;

      if (result.supported) {
        supported.push({ entry, reason: result.reason });
        process.stdout.write(".");
      } else {
        unsupported.push({ entry, reason: result.reason });
        process.stdout.write("X");
      }
    } catch (err) {
      console.error(`\nAPI error for ${entry.file}:${entry.line}: ${err}`);
    }
  }

  // Save cache
  saveCache(cache);

  console.log("\n");

  // Summary
  console.log("--- RESULTS ---");
  console.log(`Total claims:  ${allClaims.length} (${allClaims.length - manifestCount} from <Cite>, ${manifestCount} from manifest)`);
  console.log(`Supported:     ${supported.length}`);
  console.log(`Unsupported:   ${unsupported.length}`);
  console.log(`Cache hits:    ${cacheHits}`);
  console.log(`API calls:     ${apiCalls}`);
  console.log();

  // Print unsupported claims
  if (unsupported.length > 0) {
    console.log("--- UNSUPPORTED CLAIMS ---\n");
    for (const { entry, reason } of unsupported) {
      const loc = entry.line > 0 ? `${entry.file}:${entry.line}` : `${entry.file} (manifest)`;
      console.log(`${loc} [${entry.sourceId}]`);
      console.log(`  Claim: "${entry.claimText.slice(0, 120)}${entry.claimText.length > 120 ? "..." : ""}"`);
      console.log(`  Reason: ${reason}`);
      console.log();
    }
  }

  if (unsupported.length > 0) {
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
