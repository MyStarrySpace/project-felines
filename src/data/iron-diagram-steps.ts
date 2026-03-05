/**
 * CANIS PresentationStep[] for the iron metabolism walkthrough.
 * Maps from the existing SVG-based diagramSteps to CANIS node IDs.
 */

import type { PresentationStep } from '@untangling/canis';

export const ironPresentationSteps: PresentationStep[] = [
  {
    id: 'overview',
    label: 'Overview',
    description: 'The full iron metabolism pathway: import, processing, storage, and damage. Click any step to explore.',
    focusNodeIds: [], // Empty = show all
  },
  {
    id: 'iron-import',
    label: 'Iron Import',
    description: 'Transferrin carries Fe³⁺ to TfR1 receptors on the cell surface. Two transferrin-iron complexes bind and get pulled into the cell via endocytosis.',
    focusNodeIds: ['transferrin_1', 'transferrin_2', 'tfr1', 'fe3_extracellular'],
    focusEdgeIds: ['e_tf1_tfr1', 'e_tfr1_endo'],
  },
  {
    id: 'endosome',
    label: 'Endosome Processing',
    description: 'Inside the endosome, STEAP3 reduces Fe³⁺ to Fe²⁺. DMT1 then pumps Fe²⁺ out of the endosome into the cytoplasm.',
    focusNodeIds: ['endosome', 'steap3', 'dmt1', 'fe2_endosomal'],
    focusEdgeIds: ['e_steap3_fe2', 'e_endo_steap3', 'e_fe2_dmt1', 'e_dmt1_lip'],
  },
  {
    id: 'labile-iron-pool',
    label: 'Labile Iron Pool',
    description: 'Free Fe²⁺ in the cytoplasm forms the labile iron pool (LIP). PCBP1/2 chaperones shuttle iron to where it\'s needed. This pool is tightly regulated because free iron is dangerous.',
    focusNodeIds: ['lip', 'fe2_lip', 'pcbp1_2'],
    focusEdgeIds: ['e_lip_pcbp', 'e_lip_fenton', 'e_lip_ferritin', 'e_lip_mito'],
  },
  {
    id: 'fenton-reaction',
    label: 'Fenton Reaction',
    description: 'Free Fe²⁺ reacts with H₂O₂ to produce hydroxyl radicals (OH\u00B7), the most reactive oxygen species in biology. This is the core damage mechanism: iron + peroxide = radical destruction.',
    focusNodeIds: ['fenton', 'h2o2', 'hydroxyl_radical', 'fe2_lip'],
    focusEdgeIds: ['e_lip_fenton', 'e_h2o2_fenton', 'e_fenton_oh'],
  },
  {
    id: 'ferritin-storage',
    label: 'Ferritin Storage',
    description: 'Ferritin sequesters excess iron safely. H-chains oxidize Fe²⁺ to Fe³⁺ (detoxification), L-chains store it long-term. Each ferritin shell holds up to 4,500 iron atoms.',
    focusNodeIds: ['ferritin', 'ncoa4', 'lysosome', 'pcbp1_2'],
    focusEdgeIds: ['e_lip_ferritin', 'e_ncoa4_ferritin', 'e_lysosome_lip'],
  },
  {
    id: 'mitochondria',
    label: 'Mitochondria',
    description: 'Mitochondria use iron for the electron transport chain but produce superoxide (O₂⁻) and H₂O₂ as byproducts. Damaged mitochondria leak more ROS, feeding the Fenton reaction.',
    focusNodeIds: ['mitochondria', 'superoxide_mito', 'h2o2_mito'],
    focusEdgeIds: ['e_lip_mito', 'e_mito_superoxide', 'e_mito_h2o2', 'e_h2o2_mito_fenton'],
  },
  {
    id: 'lipid-peroxidation',
    label: 'Lipid Peroxidation',
    description: 'LOX enzymes and hydroxyl radicals attack PUFAs in cell membranes. This chain reaction, lipid peroxidation, is the execution step of ferroptosis. Once started, it self-propagates.',
    focusNodeIds: ['lipid_perox', 'lox', 'pufas', 'hydroxyl_radical'],
    focusEdgeIds: ['e_oh_lipidperox', 'e_lox_lipidperox', 'e_pufas_lipidperox'],
  },
  {
    id: 'antioxidant-defense',
    label: 'Antioxidant Defense',
    description: 'Catalase converts H₂O₂ to water. NOX enzymes produce superoxide as part of immune signaling. The regeneration system recycles antioxidants (GPX4, GSH) to keep defenses active.',
    focusNodeIds: ['catalase', 'nox', 'regeneration', 'gpx4', 'gsh', 'system_xc'],
    focusEdgeIds: ['e_gpx4_lipidperox', 'e_gsh_gpx4', 'e_xc_gsh', 'e_catalase_h2o2', 'e_nox_superoxide', 'e_regen_gpx4'],
  },
  {
    id: 'mitophagy',
    label: 'Mitophagy',
    description: 'Damaged mitochondria are engulfed by autolysosomes and degraded. DMT1 on the autolysosome membrane exports recycled iron back to the LIP. When this system fails, damaged mitochondria accumulate.',
    focusNodeIds: ['autolysosome', 'mito_degraded', 'dmt1_2', 'fe2_recycled'],
    focusEdgeIds: ['e_mito_autolyso', 'e_autolyso_dmt1', 'e_dmt1_2_lip'],
  },
];
