# FELINE → FELINES Rename

## Overview
Add Immune (I) layer, rename old Insulation (I) to Sheathing (S).

Old: Fe · L · I(nsulation) · N · E = FELINE (5 layers)
New: Fe · L · I(mmune) · N · E · S(heathing) = FELINES (6 layers)

## Tasks

### Phase 1: Core data model
- [x] `src/data/landing/entry-points.ts` — defenseLayers: add "S", update diseaseEntryPoints
- [x] `src/data/landing/feline-intro.tsx` — felineLetters, felineLayers, felineLayerSegments
- [x] `src/data/landing/gwas-genes.tsx` — layerLabels, closingSummary, FelineLayerId type

### Phase 2: Gene reassignment (61 primary, 52 secondary)
- [x] All `primaryLayer: "I"` → `"S"` (old insulation genes = new sheathing)
- [x] All `secondaryLayers` containing `"I"` → `"S"`
- [x] Review: 14 genes moved to I primary (HLA, Siglecs, SPI1, IL34, etc.), 16 genes gained I secondary (TREM2, NF-κB pathway, complement)

### Phase 3: Theories mapping
- [x] `src/data/landing/theories-mapping.tsx` — layer arrays in interventions/treatments

### Phase 4: Component text updates
- [x] `src/components/landing/feline-intro-section.tsx` — "FELINE" → "FELINES"
- [x] `src/components/landing/survivorship-bias-section.tsx` (closing summary)
- [x] Header, footer, layout, explore header, back link, section indicator
- [ ] Explore page body text (~30 references in explore pages)
- [ ] Bibliography projectRef strings (~15 references)
- [ ] Kinetics model comments (~10 references)

### Phase 5: Documentation
- [x] `.claude/CLAUDE.md` — framework description updated
- [ ] `docs/FELINE_supporting_evidence.md` — massive doc, separate task
