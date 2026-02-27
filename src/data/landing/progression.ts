/**
 * Data for the sigmoidal progression section.
 *
 * Why neurodegeneration is silent for decades, then accelerates:
 * iron-coupled positive feedback loops.
 */

export const progressionHeadline = "Decades of silence. Then collapse.";

export const progressionBody =
  "Neurodegeneration follows a sigmoidal curve: years of invisible iron buildup, " +
  "then rapid acceleration once defense thresholds are crossed. " +
  "Four iron-coupled feedback loops explain the shape.";

export interface FeedbackLoop {
  title: string;
  mechanism: string;
  consequence: string;
  /** Citation IDs from the bibliography */
  citationIds: string[];
}

export const feedbackLoops: FeedbackLoop[] = [
  {
    title: "Iron cascade",
    mechanism:
      "Oligodendrocytes store the most iron in the brain. " +
      "When one dies via ferroptosis, it releases its iron load into the extracellular space.",
    consequence:
      "Neighboring cells absorb the released iron, pushing them past their own defense thresholds. " +
      "Each death seeds the next.",
    citationIds: ["stockwell-2022-cell"],
  },
  {
    title: "Hepcidin trap",
    mechanism:
      "Chronic inflammation upregulates hepcidin, which binds ferroportin and triggers its internalization.",
    consequence:
      "Cells lose their only iron export channel. " +
      "Labile iron rises even without new iron entering the brain.",
    citationIds: ["nemeth-2004-science"],
  },
  {
    title: "Copper depletion",
    mechanism:
      "Ferroportin needs ferroxidase (ceruloplasmin, hephaestin) to convert Fe\u00B2\u207A to Fe\u00B3\u207A for safe export. " +
      "Oxidative damage depletes copper, the cofactor both enzymes require.",
    consequence:
      "Ferroportin stalls even when the transporter is present. " +
      "Iron accumulates behind a working but disabled gate.",
    citationIds: ["patel-2002-jneurosci"],
  },
  {
    title: "Recapture failure",
    mechanism:
      "In the healthy brain, ~85% of iron exported to interstitial fluid is recaptured by neighboring cells before reaching CSF.",
    consequence:
      "As neurons die, fewer cells recapture iron from ISF. " +
      "More iron stays in the extracellular space, accelerating damage to surviving cells.",
    citationIds: [],
  },
];

export const progressionInsight =
  "Each loop alone is gradual. When two or more engage simultaneously, " +
  "progression becomes self-reinforcing. By the time symptoms appear, " +
  "multiple loops are already active.";

export const progressionCta = {
  primary: "Explore the model",
  primaryHref: "/explore/clearance",
  secondary: "Back to top",
};
