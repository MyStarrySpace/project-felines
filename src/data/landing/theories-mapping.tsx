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

export type Strength = "strong" | "moderate" | "weak";

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
    note: "Four layers at strong evidence. The single most effective FELINES intervention. No drug matches this breadth.",
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
      { layer: "I", strength: "strong", rationale: "Each prevented infection is one fewer I-layer assault. Shingles vaccine reduces dementia 17\u201328% (Eyting 2023). Flu vaccine reduces AD risk ~40% (Bukhbinder 2022)." },
      { layer: "N", strength: "strong", rationale: "Prevents tau-dependent neurovascular damage from peripheral infection. Each prevented pneumonia avoids tau-mediated BBB damage with incomplete repair (Eimer 2025)." },
      { layer: "E", strength: "weak", rationale: "Prevents infection-induced reactive astrogliosis that could impair AQP4 polarization. No direct vaccination\u2013glymphatic link studied." },
      { layer: "S", strength: "moderate", rationale: "Prevents infection-driven demyelination and complement-mediated myelin attack from chronic inflammation." },
    ],
    note: "Primarily an I-layer and N-layer intervention. Over decades, cumulative protection from prevented infections preserves reserves.",
  },
  {
    name: "Dental care",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Chronic periodontal inflammation \u2192 sustained hepcidin \u2192 iron sequestration in monocytes via ferroportin degradation." },
      { layer: "L", strength: "moderate", rationale: "P. gingivalis gingipains directly impair lysosomal function. Cathepsin B is a gingipain target (Dominy et al. 2019)." },
      { layer: "I", strength: "strong", rationale: "Periodontal disease is a chronic I-layer assault: sustained bacteremia, chronic IL-1\u03B2/TNF-\u03B1/IL-6, NLRP3 activation, LPS\u2013TLR4 signaling." },
      { layer: "N", strength: "moderate", rationale: "Periodontal bacteria and LPS damage endothelium. Periodontal disease is associated with increased stroke risk and cerebrovascular atherosclerosis." },
      { layer: "E", strength: "weak", rationale: "Chronic inflammation may impair glymphatic function through reactive astrogliosis. No direct periodontal\u2013glymphatic link studied." },
      { layer: "S", strength: "weak", rationale: "Chronic systemic inflammation increases oxidative stress. No direct periodontal\u2013myelin link established." },
    ],
    note: "The most underappreciated FELINES intervention. Decades of dental health unconsciously protect four layers.",
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
    name: "Blarcamesine",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Sigma-1 receptor modulation supports intracellular calcium and iron handling pathways." },
      { layer: "L", strength: "strong", rationale: "Restores autophagy flux through sigma-1/IRE1 pathway. Enhances lysosomal biogenesis." },
      { layer: "I", strength: "moderate", rationale: "Sigma-1 agonism reduces neuroinflammatory signaling and microglial reactivity." },
      { layer: "N", strength: "strong", rationale: "Protects pericytes and BBB integrity. Restores endothelial function." },
      { layer: "S", strength: "strong", rationale: "Directly supports oligodendrocyte survival and myelination through sigma-1 receptor activation." },
    ],
    status: "Phase 2b/3",
    note: (
      <>
        Sigma-1 receptor agonist. Restores autophagy, protects pericytes/BBB,
        supports oligodendrocytes. &ldquo;Improvement compared to placebo in
        all clinical endpoints at 48 weeks.&rdquo;
        <Cite id="sabbagh-2025-alzdement" citationIds={["sabbagh-2025-alzdement-c1"]} />
        {" "}Oral, no ARIA.
      </>
    ),
  },
  {
    name: "Low-dose lithium",
    effects: [
      { layer: "L", strength: "strong", rationale: "GSK-3\u03B2 inhibition regulates autophagy, oxidative stress, and lysosomal function." },
      { layer: "I", strength: "moderate", rationale: "GSK-3\u03B2 inhibition reduces neuroinflammatory signaling and microglial activation." },
      { layer: "N", strength: "moderate", rationale: "Neuroprotective effects on cerebrovascular integrity at microdose levels." },
      { layer: "S", strength: "moderate", rationale: "Reduces tau phosphorylation, preserving tau\u2019s iron-buffering function." },
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
    name: "NAD+ restoration (NR/NMN)",
    effects: [
      { layer: "L", strength: "strong", rationale: "Restores SIRT3 and mitochondrial antioxidant machinery. Critical bottleneck in the ferroptosis defense chain." },
    ],
    status: "Phase 1/2 / supplement",
    note: "Single layer but critical bottleneck. SIRT3 decline with age directly impairs the L-layer\u2019s ability to neutralize iron-driven damage.",
  },
  {
    name: "40 Hz gamma stimulation",
    effects: [
      { layer: "I", strength: "strong", rationale: "Entrains microglial clearance to gamma frequency. Shifts microglia toward phagocytic/surveillance state." },
      { layer: "N", strength: "moderate", rationale: "Improves cerebrovascular function and neurovascular coupling." },
      { layer: "E", strength: "strong", rationale: "Enhances waste clearance through a sleep-independent mechanism. Promotes perivascular drainage." },
    ],
    status: "Phase 2",
    note: (
      <>
        Entrains microglial clearance. Pilot: &ldquo;lesser ventricular
        dilation and hippocampal atrophy, increased functional connectivity
        in the default mode network.&rdquo;
        <Cite id="chan-2022-plosone" citationIds={["chan-2022-plosone-c1"]} />
        {" "}Non-invasive.
      </>
    ),
  },
  {
    name: "Melatonin",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Direct iron chelation properties. Binds free iron and reduces Fenton chemistry." },
      { layer: "L", strength: "moderate", rationale: "Potent antioxidant that supports GPX4 and GSH pathways." },
      { layer: "I", strength: "strong", rationale: "Efficient anti-inflammatory. Reduces microglial activation and cytokine production." },
      { layer: "N", strength: "moderate", rationale: "Angiotensin II antagonist. Supports cerebrovascular tone and BBB integrity." },
      { layer: "E", strength: "strong", rationale: "Restores AQP4 polarization for glymphatic clearance. Clock gene regulation supports circadian-dependent export." },
      { layer: "S", strength: "moderate", rationale: "Clock gene regulation supports OPC proliferation and myelin maintenance." },
    ],
    status: "Supplement",
    note: (
      <>
        &ldquo;An efficient anti-inflammatory, iron chelator, antioxidant,
        angiotensin II antagonist, and clock gene regulator.&rdquo;
        <Cite id="yehia-2024-molneurodegen" citationIds={["yehia-2024-molneurodegen-c1"]} />
        {" "}Restores AQP4 polarization for glymphatic clearance.
      </>
    ),
  },
  {
    name: "Sulforaphane",
    effects: [
      { layer: "Fe", strength: "moderate", rationale: "Nrf2 regulates intracellular free iron content and ferritin expression." },
      { layer: "L", strength: "strong", rationale: "Nrf2 directly regulates GPX4 protein content and GSH synthesis enzymes." },
      { layer: "I", strength: "strong", rationale: "Nrf2 activation is potently anti-inflammatory. Suppresses NF-\u03BAB signaling and microglial reactivity." },
      { layer: "N", strength: "moderate", rationale: "Nrf2 protects endothelial cells from oxidative damage and supports BBB integrity." },
      { layer: "S", strength: "moderate", rationale: "Nrf2 supports oligodendrocyte survival under oxidative stress." },
    ],
    status: "Phase 2 / supplement",
    note: (
      <>
        Nrf2 activator: &ldquo;can directly or indirectly regulate GPX4
        protein content{"\u2026"}intracellular free iron content{"\u2026"}
        thereby regulating ferroptosis process.&rdquo;
        <Cite id="song-2020-frontneurosci" citationIds={["song-2020-frontneurosci-c1"]} />
        {" "}From broccoli sprouts.
      </>
    ),
  },
];

export const sectionClosing =
  "Single-target drugs fail a multi-layer disease. The framework predicts that interventions touching more layers, at lower intensity, will outperform those hitting one layer hard.";
