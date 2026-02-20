# FELINE Framework Project

## Overview

This is the presentation site for the **FELINE (Fe-Lysosome-Insulation-Neurovascular-Export) Framework**, a novel biological framework modeling latent neurodegeneration as multi-layer defense failure (as distinct from acute neurodegeneration caused by infection or autoimmune attack):

**Defense layers:** Fe (iron homeostasis) · Lysosome (GPX4, NAD+/SIRT3, GSH) · Insulation (myelin sheaths, lysosomes, ferritin, tau, alpha-synuclein; oligodendrocytes provide both electrical insulation and iron insulation via FTH1 export) · Neurovascular (pericytes, BBB, astrocyte endfeet, Schwann cell vasculature) · Export (brain-level: ferroportin/Cp, glymphatic, AQP4; systemic: liver hepcidin/bile, spleen recycling, gut absorption/microbiome)

When multiple defense layers fail simultaneously, iron-driven ferroptosis cascades through oligodendrocytes, producing the white matter damage seen across neurodegenerative diseases.

The framework is motivated by connecting long COVID to neurodegenerative biomarkers, supported by mechanistic rationale, data, and rough kinetic calculations. Parallels are also drawn to EBV and MS. A companion paper will eventually be published on Zenodo.

## Reference Documents

Framework source documents live in `framework-docs/` (gitignored). These contain:
- `PLIG_framework_summary.md` — Core framework description
- `PLIG_kinetics_model_v1.md` — Kinetic calculations and modeling
- `PLIG_cross_disease_generalization.md` — Cross-disease generalization (long COVID, EBV/MS)

Always consult these documents when building content for the site to ensure scientific accuracy and consistency with the framework.

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide Icons** for iconography

## Project Architecture

### Components (`src/components/`)
- **Always use reusable components** when building UI. Check for existing components before creating new ones.
- Organize components by feature or domain (e.g., `src/components/pathway/`, `src/components/layout/`).
- Shared/generic components go in `src/components/ui/`.

### Data (`src/data/`)
- **Keep data separate from components.** All static data, content, and configuration should live in `src/data/`.
- Use separate files for distinct data domains (e.g., `src/data/pathway-steps.ts`, `src/data/biomarkers.ts`).
- Export typed data structures — define interfaces/types alongside or in a shared `types.ts`.
- Components should import data rather than hardcoding content inline.

### Modularity Principles
- Prefer small, focused files over large monolithic ones.
- Separate concerns: data, presentation, and logic should live in different files when practical.
- When a component grows beyond ~150 lines, consider splitting it into subcomponents.

## Design System

Webflow-style scroll choreography. Dark theme, typography-driven, cinematic pacing.

### Typography
- **Headlines**: Instrument Serif. Max 3 font sizes per section.
- **Body**: Geist Sans. Max 782px reading width.

### Color
- **Background**: `#1A0F0A` (navy-900)
- **Text**: white for headlines, gray-300 for body, gray-400/500 for secondary
- **Accent**: gold `#FBBF24` (teal-400) used sparingly: key statistics, active nav only
- **No gradient text, no glow effects**

### Layout
- Left-aligned, 782px reading column (`reading-width` class), centered with generous vertical padding
- **Primary pattern**: `StickyScrollStage` — tall scroll containers with sticky viewport and progress MotionValue
- `ScrollSection` wraps each landing section (registers with scroll context). Use `fullWidth` for sticky stages.
- Flowing content uses `ScrollAnimate` with `enterFrom` variants

### Scroll Choreography Components
- **`StickyScrollStage`**: Core building block. Children receive `progress` (0→1) MotionValue. Height in vh units.
- **`ScrollBeat`**: Animate content within a stage. Maps sub-range of progress to enter/hold/exit. Supports `enterFrom`: `"left"`, `"right"`, `"bottom"`, `"fade"`, `"scale"`.
- **`TypeReveal`**: Clip-path text reveal (left→right) driven by progress.
- **`CountUp`**: Scroll-driven number animation. MotionValue-only (no React re-renders).
- **`ScrollAnimate`**: For flowing (non-sticky) content. Supports `enterFrom`: `"bottom"` (default), `"left"`, `"right"`, `"scale"`.
- **`ScrollHighlightText`**: Word-by-word highlight on scroll.

### Allowed Transforms
- `translateX` (horizontal slides: left/right entrance/exit)
- `translateY` (vertical entrance from bottom)
- `opacity` (fade in/out, dimming)
- `scale` (0.92→1 entrance for emphasis)
- `clipPath` (TypeReveal text reveals)
- `scaleX` (horizontal rule draws)

### Variable Pacing
- **Slow**: Openers and closers (TypeReveal, large serif statements). Give readers time to absorb.
- **Medium**: Data and evidence beats (stats, cards, diagrams).
- **Fast**: Contrasts and punchy reveals (deferiprone stat, trial results).
- Each `StickyScrollStage` defines its own timeline. Progress ranges should not overlap for sequential content, but can overlap slightly for staggered entrances within a beat.

### Cards
- One style only: `border border-white/5`, no background, no backdrop-filter
- Explore pages may use `glass-card` class (minimal border, no backdrop-blur)

### What NOT to add
- Ambient orbs, parallax backgrounds, dot patterns
- Glass/frosted cards with backdrop-filter
- Gradient text (`text-gradient-teal` removed)
- Marquee/ticker animations
- Kicker badges (uppercase colored labels above headings)
- Blur transitions
- `StepFragment` or snap-to-slide navigation
- `useSpring` on scroll-driven animations (causes lag)
- React state updates on scroll (use MotionValues only)

## Citation Standards

### Bibliography Location

**ALWAYS add sources to the modular bibliography folder**: `src/data/bibliography/`


### Adding New Sources

When adding a new source:

1. **ALWAYS use WebFetch or WebSearch** to verify citation details before adding
2. Choose the appropriate module file based on topic
3. Follow the `Source` interface structure from `types.ts`
4. Include at least one `Citation` with an exact quote
5. Verify quotes by fetching the actual source URL
6. Run `npm run verify-bib` to check sources against PubMed/CrossRef APIs

### Required Source Fields

Every source MUST have:
- **Exact title** as it appears on the publication (verified via PubMed or DOI lookup)
- **Authors** in abbreviated format: `"Armulik A, Genové G, Mäe M, et al."`
- **Journal** full name (not abbreviated)
- **Year** of publication
- **DOI** (without `https://doi.org/` prefix) when available
- **PMID** when the source is indexed in PubMed
- **URL** direct link to the source with a **text fragment** pointing to the cited quote. Rules:
  - Prefer **PMC** (PubMed Central) URLs over PubMed when the paper is in PMC, because PMC has the full text where text fragments can highlight the quote
  - Append `#:~:text=` with a URL-encoded distinctive phrase (4-8 words) from the first citation's `quote` field
  - Example: `"https://pmc.ncbi.nlm.nih.gov/articles/PMC2745754/#:~:text=prion%20gene%20family%20is%20phylogenetically%20derived"`
  - Choose a phrase specific enough to be unique on the page (avoid common words like "the" or "we found")
  - URL-encode special characters: spaces→`%20`, commas→`%2C`, colons→`%3A`
  - If no PMC version exists, use PubMed URL with text fragment (works on abstracts)

### Required Citation Fields

Every citation MUST have:
- **`quote`**: Exact text from the paper (Ctrl+F verifiable in the original)
- **`projectRef`**: What text, section, or content in this project uses or references this quote. Format: `"[Section]: [specific content description]"`. Examples:
  - `"Framework summary: Why every major trial has failed (FAIRPARK-II)"`
  - `"Kinetics model Step 2: AQP4 depolarization onset timeline"`
  - `"Cross-disease: ALS/FTD ferroptosis pillar evidence"`

The `projectRef` field ensures traceability between our site content and its supporting evidence.

**Citation Verification Protocol:**

- Use `WebFetch` on the source URL (PubMed, PMC, DOI link) to extract exact title, authors, journal, year, DOI
- Copy quotes EXACTLY as they appear in the source
- If a URL redirects, follow the redirect to get the actual content
- Mark any unverified citations with `// UNVERIFIED` comment until confirmed
- Run `npm run verify-bib` after adding sources to check against PubMed/CrossRef APIs

### Citation Quality Rules

- The `quote` field must contain **exact quotes** that can be found in the original source via Ctrl+F
- Do NOT paraphrase or summarize in the quote field—use the exact text from the source
- If the exact wording cannot be verified, mark the citation with a comment or use the `context` field for editorial notes
- Each timeline event should reference specific `citationIds` that correspond to verifiable quotes in the bibliography
- **COPY QUOTES EXACTLY AS THEY APPEAR** from the source—do not correct grammar, change capitalization, or modify punctuation
- When using web search to gather citations, always verify quotes by fetching the actual source URL when possible


## Writing Style & Copywriting Guidelines

Good copy is clear, concise, and serves the reader. Follow these principles based on [Federal Plain Language Guidelines](https://plainlanguage.gov/guidelines/) and [scientific communication best practices](https://ecampusontario.pressbooks.pub/scientificcommunication/chapter/style-tips/).

### Core Principles

1. **Write for scanners** - 73% of readers skim content. Use:

   - Short paragraphs (2-3 sentences max)
   - Bullet points for lists
   - Bold for key terms
   - Clear subheadings
2. **One idea per sentence** - Scientific writing averages 12-17 words per sentence. If a sentence has multiple clauses, split it.
3. **Lead with the point** - State conclusions first, then supporting details. Don't make readers hunt for the takeaway.
4. **Use active voice** - "Mice developed plaques" not "Plaques were developed by mice." Active voice is shorter and clearer.
5. **Prefer concrete over abstract** - "400 drugs failed" not "A significant number of therapeutic candidates proved ineffective."

### What to Avoid

- **Jargon without context** - Define technical terms on first use or avoid them
- **Hedging language** - "It could potentially perhaps suggest" → "Evidence suggests"
- **Redundant modifiers** - "completely eliminate," "very unique," "basically essential"
- **Passive constructions** - Especially "It is..." and "There are..."
- **Run-on explanations** - If you need a semicolon and two commas, make it two sentences
- **Em dashes (—)** - Use alternatives:
  - Comma + space: "for ALS, but no Western trials"
  - Colon: "stuck in trials: too cheap to fund"
  - Parentheses: "blocked by stigma (not science)"
  - Period and new sentence for longer asides
- **Redundant negations** - Don't waste words telling the reader what something *isn't* before saying what it *is*. If you can remove the "It's not X" part and keep only "It's Y," remove the negation. It adds nothing.
  - Bad: "These proteins are not recent accidents. They evolved iron-handling functions across independent lineages."
  - Good: "These proteins evolved iron-handling functions across independent lineages."
  - Bad: "Tau is not a toxin. It is an iron manager that failed."
  - Good: "Tau is an iron manager that failed."
  - **Exception**: Negations that directly challenge a widely held assumption earn their place. "Lewy bodies are not protein fibrils" works because readers expect them to be fibrils. The test: would a reader be surprised by the negation? If yes, keep it. If no, cut it.

### Card/Callout Copy Pattern

For insight cards and callouts, follow this structure:

```
[Title]: 3-6 words, concrete noun + descriptor
[Body]: 2-3 sentences max. Problem → Evidence → Implication.
[Takeaway]: Single sentence starting with action word or "So..."
```

**Bad example:**

> "The pharmaceutical industry has invested approximately $42.5 billion in patented Alzheimer's drug development over the past two decades, whereas generic drug repurposing studies have received only approximately $500 million in funding. This represents an 85:1 ratio of investment that favors patented compounds over potentially effective generic alternatives."

**Good example:**

> "$42.5B went to patented drugs. $500M went to generics. That's 85:1. Generic drugs can't recoup trial costs, so they don't get tested. The market selects for patents, not science."

### Explanatory Content Guidelines

When explaining scientific concepts:

- **Start with why it matters** to the reader
- **Use analogies** sparingly and only if they clarify
- **Show, don't tell** - Use data and examples over adjectives
- **Avoid "word salad"** - Dense, jargon-heavy sentences that sound smart but communicate poorly

### Tone

- **Authoritative but accessible** - Expert knowledge, plain language
- **Direct but not aggressive** - State facts without editorializing
- **Curious but not uncertain** - Present open questions as interesting, not as weakness

### Information Hierarchy (Progressive Disclosure)

Design content for three levels of reader engagement. Each level should be complete on its own.

#### Level 1: Scanners (5 seconds)

For readers who want the gist at a glance.

- **Large statistics** with units: "99%" "400 drugs" "$42.5B"
- **Section headings** that convey the point, not just the topic
- **Visual hierarchy** through size, color, and weight
- **One takeaway per section** visible without scrolling

#### Level 2: Readers (30 seconds)

For readers who want to understand the story.

- **2-3 sentence explanations** below each statistic
- **Card bodies** that give context: problem → evidence → implication
- **Interpretive labels** on charts and diagrams
- **Clear cause-and-effect** language

#### Level 3: Explorers (2+ minutes)

For readers who want the full picture. Access via interaction.

- **Expandable sections** for methodology, caveats, full data
- **Tooltips** on technical terms and data points
- **Click-through details** on cards, table rows, chart elements
- **Source citations** and links to primary research

## Planning

### Plan Storage

All implementation plans should be written to `.claude/plans/` folder with descriptive filenames:

- Format: `[topic]-[date].md` (e.g., `vaccine-updates-2026-01-22.md`)
- Include: Overview, tasks with checkboxes, decision log, references
- Update plan status as work progresses

### When to Create Plans

- Multi-file changes affecting data or components
- New feature additions
- Major refactoring efforts
- Research-intensive updates requiring source verification

## Research Requirements

- **ALWAYS use web search** to verify factual claims before adding or modifying data content (drug information, trial results, researcher claims, statistics, etc.)
- Only skip web search when making purely functional code changes (fixing bugs, refactoring, UI adjustments)
- Never assume factual information is correct, verify with current sources
- When adding drugs, treatments, or clinical trial information, search for the latest status and results
