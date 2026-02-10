export interface KeyFinding {
  id: string;
  kicker: string;
  headline: string;
  body: string;
  stat?: { value: string; label: string };
  insight: string;
}

export const findings: KeyFinding[] = [
  {
    id: "u-shaped",
    kicker: "Key Finding",
    headline: "Iron has a U-shaped toxicity curve.",
    body: "Too little iron starves oligodendrocytes. Too much iron poisons them. Chelation trials worsened Parkinson\u2019s and Alzheimer\u2019s because they depleted iron from cells that needed it. The problem is distribution, not quantity.",
    stat: { value: "3/3", label: "chelation outcomes predicted" },
    insight:
      "Deferiprone worsened PD. Chelation worsened AD. Chelation helped HD (genuine overload). Same drug, three diseases, three outcomes. The pattern only makes sense if iron distribution matters more than iron levels.",
  },
  {
    id: "amyloid-iron",
    kicker: "Amyloid Reframed",
    headline: "Amyloid gathers around iron. Not the other way around.",
    body: "Amyloid-beta concentrates and reduces iron (Fe\u00B3\u207A to Fe\u00B2\u207A). Diffuse plaques form around iron deposits. Microglia compact them into dense-core plaques, sequestering the iron. Remove the plaques with drugs, and the sequestered iron floods back into tissue.",
    stat: { value: "99%", label: "Alzheimer\u2019s drug failure rate" },
    insight:
      "Five BACE inhibitors worsened cognition. Every anti-amyloid antibody cleared plaques without curing disease. If amyloid is sequestering iron, removing it removes a defense.",
  },
  {
    id: "species",
    kicker: "The Species Problem",
    headline: "Human brains accumulate far more iron than any other species.",
    body: "Mice don\u2019t naturally develop Alzheimer\u2019s. Their brain iron is a fraction of human levels. Human amyloid has a His13 residue that binds iron more tightly than mouse amyloid. Longer myelination periods and higher metabolic demands create a uniquely human vulnerability.",
    insight:
      "This explains why mouse models translate so poorly to human trials. The iron environment is fundamentally different. Transgenic mice develop plaques without the iron context that drives human disease.",
  },
];
