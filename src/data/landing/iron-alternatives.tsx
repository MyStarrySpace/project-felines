import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";

export interface IronAlternative {
  name: string;
  size: string;
  sizeMultiple: string;
  mechanism: string;
  description: ReactNode;
  trialStatus: ReactNode;
  structureImage: string;
  structureId: string;
  structureSource: "PDB" | "PubChem";
}

export const alternativesHeadline = "Other ways to redistribute iron";

export const alternativesBody =
  "The body already redistributes iron with specialized proteins \u2014 " +
  "binding reversibly, shuttling across barriers, oxidizing for export, storing safely. " +
  "Almost none have been trialed for neurodegeneration.";

export const alternatives: IronAlternative[] = [
  {
    name: "Lactoferrin",
    size: "80 kDa",
    sizeMultiple: "575\u00D7",
    mechanism: "Reversible iron shuttle",
    structureImage: "/images/proteins/1LFG-lactoferrin.png",
    structureId: "1LFG",
    structureSource: "PDB",
    description: (
      <>
        Binds two Fe&#xB3;&#x207A; ions at neutral pH, releasing them in
        lysosomes. Crosses the BBB: &ldquo;a specific unidirectional transport
        ... via a receptor-mediated process.&rdquo;
        <Cite id="fillebeen-1999-jbc" />
      </>
    ),
    trialStatus: (
      <>
        One pilot in AD patients showed &ldquo;enhanced cognitive function
        assessed by the MMSE and ADAS-COG 11.&rdquo;
        <Cite id="mohamed-2019-biomed-pharmacother" /> Cost per month: ~$15.
        No Phase 2 funded.
      </>
    ),
  },
  {
    name: "Ceruloplasmin",
    size: "132 kDa",
    sizeMultiple: "950\u00D7",
    mechanism: "Ferroxidase",
    structureImage: "/images/proteins/2J5W-ceruloplasmin.png",
    structureId: "2J5W",
    structureSource: "PDB",
    description: (
      <>
        Converts Fe&#xB2;&#x207A; to Fe&#xB3;&#x207A; so ferroportin can
        export iron safely.
        <Cite id="patel-2002-jneurosci" /> Without it, iron accumulates in
        brain, liver, and retina.
      </>
    ),
    trialStatus: (
      <>
        FDA Orphan Drug Designation (2025) for aceruloplasminemia.
        <Cite id="kedrion-2025-fda-orphan" /> In mice, treated animals showed
        {" "}&ldquo;amelioration of motor incoordination ... associated with
        diminished loss of Purkinje neurons and reduced brain iron
        deposition.&rdquo;
        <Cite id="zanardi-2018-embo" /> No one has proposed it for
        Alzheimer&#x2019;s or Parkinson&#x2019;s.
      </>
    ),
  },
  {
    name: "Transferrin",
    size: "80 kDa",
    sizeMultiple: "575\u00D7",
    mechanism: "Iron transport",
    structureImage: "/images/proteins/3QYT-transferrin.png",
    structureId: "3QYT",
    structureSource: "PDB",
    description: (
      <>
        The body&#x2019;s iron courier. Binds two Fe&#xB3;&#x207A; ions and
        delivers them to cells via receptor-mediated endocytosis.
        <Cite id="luck-2012-currtopics" /> When transferrin is saturated,
        unbound iron catalyzes Fenton chemistry.
      </>
    ),
    trialStatus: (
      <>
        PST-611 is &ldquo;a first-in-class non-viral vectorized therapy ...
        expressing human transferrin, a highly potent iron regulator&rdquo;
        (Phase 1, dry AMD).
        <Cite id="pulsesight-2025-pst611" /> No trial for neurodegeneration.
      </>
    ),
  },
  {
    name: "Ferritin nanocages",
    size: "480 kDa",
    sizeMultiple: "3,450\u00D7",
    mechanism: "Iron sequestration",
    structureImage: "/images/proteins/2FHA-ferritin.png",
    structureId: "2FHA",
    structureSource: "PDB",
    description: (
      <>
        A 24-subunit protein shell storing up to 4,500 iron atoms. Crosses the
        BBB: &ldquo;upon binding to TfR1, HFn is internalized via
        clathrin-coated pit formation.&rdquo;
        <Cite id="wen-2026-ijn-ferritin" />
      </>
    ),
    trialStatus: (
      <>
        In preclinical development as drug delivery vehicles for
        neurodegeneration. No clinical trial for direct iron management.
      </>
    ),
  },
  {
    name: "Hepcidin",
    size: "2.8 kDa",
    sizeMultiple: "20\u00D7",
    mechanism: "Iron flow regulator",
    structureImage: "/images/proteins/2KEF-hepicidin.png",
    structureId: "2KEF",
    structureSource: "PDB",
    description: (
      <>
        Master switch for systemic iron. Degrades ferroportin, controlling how
        much iron enters circulation.
        <Cite id="nemeth-2004-science" /> Astrocyte-derived hepcidin guards the
        blood-brain barrier.
        <Cite id="you-2022-celldeath" />
      </>
    ),
    trialStatus: (
      <>
        Rusfertide is &ldquo;a first-in-class investigational subcutaneous
        treatment that mimics the action of hepcidin.&rdquo;
        <Cite id="takeda-2026-rusfertide-nda" /> NDA submitted for
        polycythemia vera. Never tested for
        neurodegeneration.
      </>
    ),
  },
  {
    name: "ATH434",
    size: "290 Da",
    sizeMultiple: "2.1\u00D7",
    mechanism: "Iron redistribution",
    structureImage: "/images/structures/46236251-ath434.png",
    structureId: "CID 46236251",
    structureSource: "PubChem",
    description: (
      <>
        Moderate-affinity Fe&#xB2;&#x207A; chaperone that &ldquo;supports the
        redistribution of excess iron, supplementing the function of the
        cytoplasmic and nuclear PCBP1/2 iron chaperones.&rdquo;
        <Cite id="bailey-2025-jbc" citationIds={["bailey-2025-jbc-c2"]} />
      </>
    ),
    trialStatus: (
      <>
        Phase 2 in MSA: &ldquo;The 50 mg dose declined by a mean of 4.3 points
        over 52 weeks, equivalent to a 48% slowing of clinical progression
        (p=0.03).&rdquo;
        <Cite
          id="ath434-2025-msa"
          citationIds={["ath434-2025-msa-c2"]}
        />{" "}
        MSA progresses faster than Alzheimer&rsquo;s, making it a practical
        proving ground for redistribution.
      </>
    ),
  },
];

export const alternativesInsight =
  "Five are natural proteins the body already produces. " +
  "Total investment in them for neurodegeneration: one underpowered pilot. " +
  "ATH434 mimics what they do and is in active Phase 2 trials, " +
  "starting with MSA because it progresses faster than Alzheimer\u2019s. " +
  "Phase 3 success would open repurposing across neurodegenerative diseases.";
