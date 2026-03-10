/**
 * Data for the Swiss-Cheese Multi-Layer Interventions section.
 *
 * Neurodegeneration is a multi-layer failure. Single-layer interventions fail
 * because they leave other holes open. This section maps lifestyle and
 * treatment interventions to FELINES defense layers with evidence strength.
 */

import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";

export const sectionHeadline = "No single layer is enough.";
export const sectionSubhead =
  "Neurodegeneration is a swiss-cheese failure: every defense has holes. Disease begins when the holes line up. The interventions that work protect multiple layers at once.";

export type Strength = "strong" | "moderate";

export interface LayerEffect {
  layer: string;
  strength: Strength;
  rationale: string;
}

export interface LifestyleIntervention {
  name: string;
  effects: LayerEffect[];
  note: string;
}

export const lifestyleInterventions: LifestyleIntervention[] = [
  {
    name: "Exercise",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Increases brain iron utilization for mitochondrial biogenesis; AMPK promotes ferritin synthesis for proper storage." },
      { layer: "L", strength: "strong", rationale: "AMPK activation directly promotes autophagy via ULK1 phosphorylation and TFEB activation. Exercise is the most potent natural AMPK activator." },
      { layer: "I", strength: "strong", rationale: "Chronic exercise reduces baseline CRP, TNF-\u03B1, IL-1\u03B2; shifts microglia toward surveillance phenotype. Irisin crosses BBB with direct neuroprotective effects." },
      { layer: "N", strength: "strong", rationale: "Increases cerebral blood flow, promotes angiogenesis, enhances endothelial NO, improves BBB integrity, supports pericyte survival via PDGF-BB. GPLD1 liver\u2013brain axis specifically protects BBB." },
      { layer: "E", strength: "strong", rationale: "Enhances glymphatic function through increased arterial pulsatility. GPLD1 from liver protects BBB and maintains transport (Science 2020)." },
      { layer: "S", strength: "moderate", rationale: "Promotes OPC proliferation and differentiation; enhances myelination in motor learning; BDNF supports oligodendrocyte survival." },
    ],
    note: "Four layers at strong evidence. The single broadest lifestyle intervention in this mapping.",
  },
  {
    name: "Sleep",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Ferritin synthesis and hepcidin expression follow circadian rhythms. Sleep deprivation may chronically dysregulate iron cycling." },
      { layer: "L", strength: "moderate", rationale: "Autophagy is circadian-regulated: TFEB nuclear translocation and autophagosome formation peak during rest phase." },
      { layer: "I", strength: "strong", rationale: "Sleep deprivation increases IL-6, TNF-\u03B1, CRP within 24 hours. Chronic short sleep sustains microglial activation and impairs Treg function." },
      { layer: "N", strength: "moderate", rationale: "Sleep deprivation increases BBB permeability (He et al. 2014). Chronic restriction damages pericytes." },
      { layer: "E", strength: "strong", rationale: "Glymphatic clearance increases 60% during sleep (Xie et al. 2013). AQP4 polarization is sleep-state-dependent. Interstitial space expands ~60%, enabling convective flow." },
      { layer: "S", strength: "moderate", rationale: "Sleep is required for OPC proliferation (Bellesi 2013). Myelin gene expression follows circadian pattern." },
    ],
    note: "The E-layer effect is uniquely sleep-dependent. No pharmaceutical replicates glymphatic clearance during sleep.",
  },
  {
    name: "Vaccination",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Prevents infection-driven hepcidin surge \u2192 prevents acute iron sequestration in monocytes via ferroportin degradation." },
      { layer: "L", strength: "moderate", rationale: "Prevents viral hijacking of lysosomes: HSV-1 and VZV both exploit lysosomal trafficking (VZV gM degrades SNAP29)." },
      { layer: "I", strength: "strong", rationale: "Each prevented infection is one fewer I-layer assault. Shingles vaccine reduced dementia probability by ~20% over 7 years (Eyting et al. 2025, Nature)." },
      { layer: "N", strength: "moderate", rationale: "Prevents infection-driven neurovascular stress. Systemic infections increase BBB permeability and neuroinflammation." },
      { layer: "S", strength: "moderate", rationale: "Prevents infection-driven demyelination and complement-mediated myelin attack from chronic inflammation." },
    ],
    note: "Primarily an I-layer and N-layer intervention. Over decades, cumulative protection from prevented infections preserves reserves.",
  },
  {
    name: "Dental care",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Chronic periodontal inflammation \u2192 sustained hepcidin \u2192 iron sequestration in monocytes via ferroportin degradation." },
      { layer: "L", strength: "moderate", rationale: "P. gingivalis gingipains impair lysosomal function. Chronic periodontal infection damages proteolytic pathways." },
      { layer: "I", strength: "strong", rationale: "Periodontal disease is a chronic I-layer assault: sustained bacteremia, chronic IL-1\u03B2/TNF-\u03B1/IL-6, NLRP3 activation, LPS\u2013TLR4 signaling." },
      { layer: "N", strength: "moderate", rationale: "Periodontal bacteria and LPS damage endothelium. Chronic periodontal disease is associated with increased cerebrovascular risk." },
    ],
    note: "An underappreciated intervention. Decades of dental health may protect multiple layers, primarily through reducing chronic inflammatory burden.",
  },
];

export interface MultiLayerTreatment {
  name: string;
  effects: LayerEffect[];
  status: string;
  note: ReactNode;
}

export const multiLayerTreatments: MultiLayerTreatment[] = [
  {
    name: "40 Hz gamma stimulation",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Preclinical models show reduced iron deposits in 40Hz-treated groups. Mechanism upstream of iron clearance not yet characterized." },
      { layer: "L", strength: "moderate", rationale: "Enhanced microglial phagocytic clearance of debris in preclinical models, a lysosomal function." },
      { layer: "I", strength: "strong", rationale: "Reduced complement expression and neuroinflammation in preclinical models. Reduced microgliosis and astrogliosis." },
      { layer: "N", strength: "moderate", rationale: "Improved arterial pulsatility may enhance cerebrovascular function and perivascular drainage." },
      { layer: "E", strength: "moderate", rationale: "Preclinical evidence suggests glymphatic enhancement via adenosine/A2AR and vasomotion pathways." },
      { layer: "S", strength: "moderate", rationale: "Preclinical models show GPX4 upregulation, reduced lipid peroxidation, and increased oligodendrogenesis." },
    ],
    status: "Phase 3 (HOPE, n=670; topline mid-2026)",
    note: (
      <>
        Hits all six layers. Phase 2 showed lesser ventricular dilation
        and hippocampal atrophy, increased functional connectivity.
        <Cite id="chan-2022-plosone" citationIds={["chan-2022-plosone-c1"]} />
        {" "}FDA Breakthrough Device. Non-invasive, at-home. &gt;80% adherence, zero ARIA.
      </>
    ),
  },
  {
    name: "NAD+ restoration (NR/NMN)",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "SIRT3 deacetylates and activates antioxidant enzymes; NAD+ \u2192 NADPH \u2192 GSH (GPX4 substrate); maintains mitochondrial iron-sulfur cluster assembly." },
      { layer: "L", strength: "strong", rationale: "SIRT1 activates TFEB \u2192 autophagy induction. Restoring NAD+ redirects pool toward SIRT1-mediated autophagy rather than emergency DNA repair (PARP competition)." },
      { layer: "I", strength: "moderate", rationale: "SIRT1 deacetylates NF-\u03BAB p65, reducing pro-inflammatory gene transcription. NAD+ depletion is itself pro-inflammatory. CD38 (NAD+ consumer) increases with aging on immune cells." },
      { layer: "N", strength: "moderate", rationale: "NAD+ rescues aging-induced BBB damage via the CX43-PARP1 axis. NMN maintains tight junction proteins (claudin-1, occludin, ZO-1) and reduces MMP9/MMP2 activity." },
      { layer: "S", strength: "strong", rationale: "NAD+ \u2192 SIRT3 \u2192 GPX4 deacetylation (keeps GPX4 active). NAD+ \u2192 NADPH \u2192 GSH (GPX4 substrate). Core ferroptosis defense pathway. Mitochondrial NAD+ required for oligodendrocyte energy metabolism during myelination." },
    ],
    status: "Phase 1/2 / supplement",
    note: "Hits five layers. Strongest effects on L-layer (autophagy via SIRT1/TFEB) and S-layer (ferroptosis defense via SIRT3/GPX4). NAD+ also protects the BBB and dampens neuroinflammation.",
  },
  {
    name: "Sulforaphane",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "NRF2 upregulates ferritin (iron storage, reduces labile pool) and ferroportin (iron export). HO-1 upregulation is double-edged: releases iron from heme short-term before ferritin captures it." },
      { layer: "L", strength: "moderate", rationale: "NRF2 activates p62/SQSTM1 which promotes selective autophagy. NRF2 and autophagy are reciprocally regulated. Positive feedback loop established but functional significance for lysosomal integrity is moderate." },
      { layer: "I", strength: "strong", rationale: "NRF2 suppresses NF-\u03BAB, reduces IL-1\u03B2/TNF-\u03B1/IL-6, inhibits NLRP3 inflammasome, shifts microglia toward anti-inflammatory phenotype." },
      { layer: "N", strength: "moderate", rationale: "NRF2 protects endothelial cells from oxidative damage and maintains tight junction proteins. Evidence from stroke and vascular injury models." },
      { layer: "S", strength: "strong", rationale: "NRF2 directly upregulates GPX4 transcription, glutathione synthesis enzymes (GCL, GSS), and thioredoxin system." },
    ],
    status: "Phase 2 / supplement",
    note: (
      <>
        NRF2 activator. Strongest effects on I-layer (anti-inflammatory via
        NRF2/NF-\u03BAB axis) and S-layer (ferroptosis defense via NRF2{" "}
        {"\u2192"} GPX4/GSH).
        <Cite id="song-2020-frontneurosci" citationIds={["song-2020-frontneurosci-c1"]} />
        {" "}From broccoli sprouts.
      </>
    ),
  },
  {
    name: "Blarcamesine",
    effects: [
      { layer: "L", strength: "strong", rationale: "SIGMAR1 activates TFEB nuclear translocation for lysosome biogenesis and LC3 translation for autophagosome formation." },
      { layer: "I", strength: "moderate", rationale: "SIGMAR1 activation inhibits NLRP3 inflammasome. Anti-inflammatory effects demonstrated but not primary mechanism." },
      { layer: "E", strength: "moderate", rationale: "SIGMAR1 regulates calcium signaling in astrocytes, which may affect AQP4 function. Muscarinic activation affects gliotransmitter release. Plausible but not directly tested for glymphatic." },
    ],
    status: "Phase 2b/3 (EMA rejected; re-examination pending)",
    note: (
      <>
        Sigma-1 receptor agonist. Phase 2b/3 showed 36.3% slowing on ADAS-Cog13
        at 48 weeks, but the co-primary endpoint (daily functioning)
        did not reach significance.
        <Cite id="sabbagh-2025-alzdement" citationIds={["sabbagh-2025-alzdement-c1"]} />
        {" "}EMA recommended refusal (Dec 2025); re-examination pending. No ARIA.
        Note: fluvoxamine has ~24\u00d7 higher SIGMAR1 affinity and is generic.
      </>
    ),
  },
  {
    name: "Low-dose lithium",
    effects: [
      { layer: "L", strength: "strong", rationale: "GSK-3\u03B2 inhibition \u2192 TFEB activation \u2192 autophagy induction. Also induces autophagy through mTOR-independent pathway (IMPase inhibition). Well-replicated (Forlenza 2012, Morris & Berk 2016)." },
      { layer: "I", strength: "moderate", rationale: "Anti-inflammatory: reduces COX-2, prostaglandins, TNF-\u03B1; modulates microglial activation; suppresses NF-\u03BAB. Less characterized at low orotate doses." },
      { layer: "N", strength: "moderate", rationale: "Increases VEGF and BDNF, supporting neurovascular health. Promotes angiogenesis. Some evidence of BBB protection, though effects may require higher doses." },
      { layer: "S", strength: "moderate", rationale: "GSK-3\u03B2 inhibition promotes oligodendrocyte differentiation and myelin gene expression. Lithium enhances remyelination in cuprizone model. BDNF supports oligodendrocyte survival." },
    ],
    status: "Phase 2 / OTC",
    note: (
      <>
        GSK-3{"\u03B2"} inhibition: &ldquo;can reduce amyloid deposition
        and tau phosphorylation, regulate autophagy, inflammation, oxidative
        stress.&rdquo;
        <Cite id="shen-2024-frontpharmacol" citationIds={["shen-2024-frontpharmacol-c1"]} />
        {" "}Safe at microdose (5{"\u2013"}20 mg lithium orotate).
      </>
    ),
  },
  {
    name: "Melatonin",
    effects: [
      { layer: "I", strength: "moderate", rationale: "Anti-inflammatory: reduces NF-\u03BAB activation, decreases pro-inflammatory cytokines, modulates microglial activation. Multiple studies but effects are modest at physiological doses." },
      { layer: "E", strength: "moderate", rationale: "Circadian regulation of glymphatic clearance: glymphatic flow peaks during sleep, melatonin improves sleep quality and timing. Indirect via sleep improvement, not direct AQP4 activation." },
      { layer: "S", strength: "moderate", rationale: "Direct antioxidant scavenging of lipid peroxyl radicals. Protects membrane lipids. Some evidence of GSH maintenance supporting GPX4 pathway." },
    ],
    status: "Supplement",
    note: (
      <>
        Circadian regulator and antioxidant. Supports sleep-dependent
        glymphatic clearance (E-layer) and has modest anti-inflammatory
        effects (I-layer).
        <Cite id="yehia-2024-molneurodegen" citationIds={["yehia-2024-molneurodegen-c1"]} />
        {" "}Widely available, well-tolerated, but effects are broad rather
        than targeted.
      </>
    ),
  },
];

export const sectionClosing =
  "Single-target drugs have struggled with a multi-layer disease. If this model is right, interventions touching more layers at lower intensity may outperform those hitting one layer hard.";
