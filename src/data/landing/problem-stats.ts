import type { ProblemStat } from "./types";

export const problemStats: ProblemStat[] = [
  {
    value: "400+",
    label: "Drugs failed",
    description:
      "Over 400 clinical candidates for Alzheimer's have failed since 2003. Most targeted amyloid or tau.",
  },
  {
    value: "0",
    label: "Cures found ($42.5B spent)",
    description:
      "Despite $42.5 billion in investment, no drug has reversed or halted cognitive decline.",
  },
  {
    value: "5",
    label: "BACE inhibitors worsened cognition",
    description:
      "Five BACE inhibitors reached Phase III. All caused cognitive worsening, not just failure.",
  },
];

export const problemInsight = {
  title: "The wrong model, not the wrong drugs",
  content:
    "These drugs hit their molecular targets. Amyloid levels dropped. Tau tangles cleared. But the disease continued. The problem isn't drug design. It's the assumption that one target drives the disease.",
};
