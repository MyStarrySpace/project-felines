export interface DiagramStep {
  id: string;
  label: string;
  description: string;
  elementIds: string[]; // SVG group IDs to highlight
}

export const diagramSteps: DiagramStep[] = [
  {
    id: "overview",
    label: "Overview",
    description:
      "The full iron metabolism pathway: import, processing, storage, and damage. Click any step to explore.",
    elementIds: [],
  },
  {
    id: "iron-import",
    label: "Iron Import",
    description:
      "Transferrin carries Fe3+ to TfR1 receptors on the cell surface. Two transferrin-iron complexes bind and get pulled into the cell via endocytosis.",
    elementIds: [
      "Transferrin-complex-1",
      "Transferrin-complex-2",
      "TfR1-receptor",
      "Fe3--1",
      "Fe3--2",
      "Fe3--11",
      "Fe3--21",
      "Fe3--4",
      "Arrow-1",
      "Arrow-2",
    ],
  },
  {
    id: "endosome",
    label: "Endosome Processing",
    description:
      "Inside the endosome, STEAP3 reduces Fe3+ to Fe2+. DMT1 then pumps Fe2+ out of the endosome into the cytoplasm.",
    elementIds: [
      "Endosome",
      "STEAP3",
      "DMT1-1",
      "Fe2--1",
      "Arrow-3",
      "Arrow-4",
      "Arrow-5",
    ],
  },
  {
    id: "labile-iron-pool",
    label: "Labile Iron Pool",
    description:
      "Free Fe2+ in the cytoplasm forms the labile iron pool (LIP). PCBP1/2 chaperones shuttle iron to where it's needed. This pool is tightly regulated because free iron is dangerous.",
    elementIds: [
      "LIP-Ellipse",
      "LIP-Label",
      "Fe2--2",
      "Fe2--3",
      "Fe2--4",
      "PCBP1-2",
      "Arrow-16",
    ],
  },
  {
    id: "fenton-reaction",
    label: "Fenton Reaction",
    description:
      "Free Fe2+ reacts with H2O2 to produce hydroxyl radicals (OH\u00B7), the most reactive oxygen species in biology. This is the core damage mechanism: iron + peroxide = radical destruction.",
    elementIds: [
      "Fenton-reaction",
      "Hydroxyl-radical",
      "Hydroxyl-radical1",
      "H\u2082O\u2082",
      "H\u2082O\u20821",
      "Arrow-12",
      "Arrow-14",
      "Arrow-15",
    ],
  },
  {
    id: "ferritin-storage",
    label: "Ferritin Storage",
    description:
      "Ferritin sequesters excess iron safely. H-chains oxidize Fe2+ to Fe3+ (detoxification), L-chains store it long-term. Each ferritin shell holds up to 4,500 iron atoms.",
    elementIds: [
      "Ferritin",
      "Ferritin-2",
      "Arrow-22",
      "Arrow-23",
    ],
  },
  {
    id: "mitochondria",
    label: "Mitochondria",
    description:
      "Mitochondria use iron for the electron transport chain but produce superoxide (O2\u207B) and H2O2 as byproducts. Damaged mitochondria leak more ROS, feeding the Fenton reaction.",
    elementIds: [
      "Mitochondria",
      "Mitochondria-Double-Star",
      "O\u2082\u207B",
      "H\u2082O\u2082-2",
      "Arrow-9",
      "Arrow-10",
      "Arrow-18",
    ],
  },
  {
    id: "lipid-peroxidation",
    label: "Lipid Peroxidation",
    description:
      "LOX enzymes and hydroxyl radicals attack PUFAs in cell membranes. This chain reaction, lipid peroxidation, is the execution step of ferroptosis. Once started, it self-propagates.",
    elementIds: [
      "LOXs",
      "PUFAs-label",
      "Hydroxyl-radical-Double-Star",
      "Hydroxyl-radical-Double-Star1",
      "Arrow-6",
      "Arrow-7",
      "Arrow-8",
      "Arrow-11",
      "Arrow-17",
    ],
  },
  {
    id: "antioxidant-defense",
    label: "Antioxidant Defense",
    description:
      "Catalase converts H2O2 to water. NOX enzymes produce superoxide as part of immune signaling. The regeneration system recycles antioxidants (GPX4, GSH) to keep defenses active.",
    elementIds: [
      "Catalase",
      "NOX-Enzyme",
      "Regeneration",
      "O\u2082\u207B-2",
      "Arrow-13",
      "Arrow-19",
      "Arrow-20",
      "Arrow-21",
    ],
  },
  {
    id: "mitophagy",
    label: "Mitophagy",
    description:
      "Damaged mitochondria are engulfed by autolysosomes and degraded. DMT1 on the autolysosome membrane exports recycled iron back to the LIP. When this system fails, damaged mitochondria accumulate.",
    elementIds: [
      "Autolysosome-",
      "Mitochondria-degraded",
      "DMT1-2",
      "Fe2--5",
      "Arrow-24",
      "Arrow-25",
      "Arrow-26",
      "Arrow-27",
    ],
  },
];
