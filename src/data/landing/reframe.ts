/**
 * Data for Slide 2: Reframings
 *
 * Pays off the teaser: if plaques aren't the disease, what is?
 * Mop analogy + dual-domain A-beta + OL vulnerability + tau reframe + summary sentence.
 *
 * Steps 0-1 reuse mop-analogy.ts exports directly.
 * Steps 2-4 are new content defined here.
 */

// ---------------------------------------------------------------------------
// Step 2: Oligodendrocytes — most iron-rich cells die first
// ---------------------------------------------------------------------------

export const olContent = {
  kicker: "The first cells to die",
  headline: "Oligodendrocytes hold 5\u00D7 more iron than neurons. They die first.",
  stats: [
    {
      label: "OL iron concentration",
      value: "3.05 mM",
      context: "highest of any brain cell type",
    },
    {
      label: "Neuron iron concentration",
      value: "0.57 mM",
      context: "for comparison",
    },
    {
      label: "Ratio",
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
      detail:
        "OLs normally export safe ferritin (FTH1) to neighboring cells. Dead OLs release free iron instead.",
    },
    {
      title: "Iron cascades to neighbors",
      detail:
        "Free iron from dead OLs triggers ferroptosis in adjacent cells. One death becomes many.",
    },
  ],
  insight:
    "White matter damage is upstream, not downstream. OLs provide both electrical insulation (myelin) and iron insulation (FTH1 export). Lose the OLs, lose both.",
  source: "Todorich et al. 2009, Glia; Connor & Menzies 1996, J Neurosci Res",
};

// ---------------------------------------------------------------------------
// Step 3: Tau — not a toxin, an iron manager that failed
// ---------------------------------------------------------------------------

export const tauContent = {
  kicker: "The second reframing",
  headline: "Tau is not a toxin. It is an iron manager that failed.",
  narrative: [
    "Tau facilitates APP trafficking to the cell surface, where APP stabilizes ferroportin for iron export.",
    "When iron rises, tau acts as an emergency buffer, binding iron directly.",
    "But rising iron activates GSK3\u03B2 and CDK5, which hyperphosphorylate tau.",
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
  source: "Lei et al. 2012, J Biol Chem; Yamamoto et al. 2002, J Neurochem",
};

// ---------------------------------------------------------------------------
// Step 4: One-sentence summary
// ---------------------------------------------------------------------------

export const summaryLine = {
  text: "Iron kills the cells that protect neurons. Everything else is downstream.",
};
