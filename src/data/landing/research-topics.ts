export interface ResearchTopic {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const researchTopics: ResearchTopic[] = [
  {
    slug: "iron-biology",
    title: "Iron Biology",
    description: "U-shaped toxicity, Fenton chemistry, distribution vs. overload",
    href: "/explore/iron-biology",
  },
  {
    slug: "amyloid-iron",
    title: "Amyloid & Iron",
    description: "How amyloid-beta interacts with iron, APP and ferroportin",
    href: "/explore/amyloid-iron",
  },
  {
    slug: "cascades",
    title: "Iron Cascades",
    description: "How iron drives amyloid, tau, demyelination, and cholinergic failure",
    href: "/explore/iron-cascades",
  },
  {
    slug: "defense-systems",
    title: "Defense Systems",
    description: "Six layers protecting the brain from iron-driven damage",
    href: "/explore/biology",
  },
  {
    slug: "diseases",
    title: "Disease Profiles",
    description: "A shared iron signature across six diseases?",
    href: "/explore/diseases",
  },
  {
    slug: "trials",
    title: "Trial Analysis",
    description: "Why 400+ drugs failed and what the outcomes reveal",
    href: "/explore/trials",
  },
  {
    slug: "viral",
    title: "Viral Mechanisms",
    description: "Could viruses drive neurodegeneration without reactivating?",
    href: "/explore/viral",
  },
  {
    slug: "species",
    title: "Species Comparison",
    description: "Why humans get Alzheimer\u2019s and mice don\u2019t",
    href: "/explore/species-comparison",
  },
  {
    slug: "proteins",
    title: "Protein Roles",
    description: "Tau, alpha-synuclein, and ferritin as iron-buffering systems",
    href: "/explore/protein-roles",
  },
  {
    slug: "glial",
    title: "Glial Biology",
    description: "LDAM, oligodendrocyte vulnerability, astrocyte iron",
    href: "/explore/glial-biology",
  },
  {
    slug: "pns",
    title: "Peripheral Nerves",
    description: "How the same iron cascade plays out without a blood-brain barrier",
    href: "/explore/pns",
  },
  {
    slug: "pattern",
    title: "Barrier Pattern",
    description: "Same cascade in the placenta, retina, and peripheral nerves",
    href: "/explore/barrier",
  },
  {
    slug: "kinetics",
    title: "Kinetic Modeling",
    description: "Computational models of iron cascade timing",
    href: "/kinetics",
  },
];
