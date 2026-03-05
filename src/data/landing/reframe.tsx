/**
 * Data for Slide 2: Reframings
 *
 * Pays off the teaser: if the proteins share a mechanism, what is it?
 * Mop analogy + cross-proteinopathy convergence + OL vulnerability + tau reframe + summary sentence.
 *
 * Steps 0-1 reuse mop-analogy.ts exports directly.
 * Steps 2-4 are new content defined here.
 */

import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";

// ---------------------------------------------------------------------------
// Step 2: Oligodendrocytes — most iron-rich cells die first
// ---------------------------------------------------------------------------

export const olContent = {
  kicker: "The first cells to die",
  headline:
    "Oligodendrocytes hold 5\u00D7 more iron than neurons. They die first.",
  stats: [
    {
      label: (
        <>
          OL iron concentration
          <Cite id="reinert-2019" />
        </>
      ),
      value: "3.05 mM",
      context: "highest of any brain cell type",
    },
    {
      label: "Neuron iron concentration",
      value: "0.57 mM",
      context: "for comparison",
    },
    {
      label: (
        <>
          vs. neurons
          <Cite id="reinert-2019" citationIds={["reinert-2019-c2"]} />
        </>
      ),
      value: "5.4\u00D7",
      context: "OL vs. neuron iron load",
    },
  ],
  failureSteps: [
    {
      title: "Myelin insulation fails",
      detail:
        "Lipid peroxidation destroys myelin sheaths. Axons lose their protective wrapping.",
    },
    {
      title: "FTH1 iron export stops",
      detail: (
        <>
          OLs normally export ferritin heavy chain (FTH1) to neighboring
          cells.
          <Cite id="mukherjee-2020" /> Dead OLs release free iron instead.
        </>
      ),
    },
    {
      title: "Iron cascades to neighbors",
      detail:
        "Free iron from dead OLs triggers ferroptosis in adjacent cells. One death becomes many.",
    },
  ],
  insight:
    "White matter damage is upstream, not downstream. OLs provide both electrical insulation (myelin) and iron insulation (FTH1 export). Lose the OLs, lose both.",
  source: (
    <>
      <Cite id="todorich-2009" />
      <Cite id="connor-menzies-1996" />
    </>
  ),
} satisfies {
  kicker: string;
  headline: string;
  stats: { label: ReactNode; value: string; context: string }[];
  failureSteps: { title: string; detail: ReactNode }[];
  insight: string;
  source: ReactNode;
};

// ---------------------------------------------------------------------------
// Step 3: Tau — not a toxin, an iron manager that failed
// ---------------------------------------------------------------------------

export const tauContent = {
  kicker: "The second reframing",
  headline: "Tau is not a toxin. It is an iron manager that failed.",
  narrative: [
    (
      <>
        Tau facilitates APP trafficking to the cell surface, where APP
        stabilizes ferroportin for iron export.
        <Cite id="lei-2012-natmed" citationIds={["lei-2012-natmed-c2", "lei-2012-natmed-c3"]} />
      </>
    ),
    "When iron rises, tau acts as an emergency buffer, binding iron directly.",
    (
      <>
        But rising iron activates GSK3&#x3B2; and CDK5, which
        hyperphosphorylate tau.
        <Cite id="guo-2013-iron-tau" citationIds={["guo-2013-iron-tau-c2"]} />
      </>
    ),
  ],
  feedbackLoop: {
    title: "The positive feedback trap",
    steps: [
      "Rising iron",
      "GSK3\u03B2/CDK5 activation",
      "Tau hyperphosphorylation",
      "Tau aggregates, can\u2019t buffer or export",
      "More free iron",
    ],
  },
  insight:
    "This explains why Braak staging (tau spread) correlates with cognitive decline better than amyloid burden. Tau tracks iron management failure.",
  source: (
    <>
      <Cite id="yamamoto-2002" />
      <Cite id="wang-2022-ferroptosis-tau" />
    </>
  ),
} satisfies {
  kicker: string;
  headline: string;
  narrative: ReactNode[];
  feedbackLoop: { title: string; steps: string[] };
  insight: string;
  source: ReactNode;
};

// ---------------------------------------------------------------------------
// Step 4: One-sentence summary
// ---------------------------------------------------------------------------

export const summaryLine = {
  text: "Iron kills the cells that protect neurons. Everything else is downstream.",
};
