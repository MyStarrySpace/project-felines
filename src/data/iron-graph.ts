/**
 * SBSF graph data for the FELINE iron metabolism diagram.
 * ~50 nodes and ~27+ edges representing the cellular iron pathway.
 *
 * Positions are manually mapped to match the original SVG layout
 * (viewBox: 0 0 1861 622, left-to-right flow).
 */

import type { GraphData, SbsfNode, SbsfEdge, ModuleDef } from '@untangling/canis';

// ── Modules ────────────────────────────────────────────────────────────────

export const ironModules: ModuleDef[] = [
  { id: 'iron_import', name: 'Iron Import', shortName: 'Import', description: 'Transferrin-mediated cellular iron uptake', color: '#60a5fa' },
  { id: 'endosome', name: 'Endosome Processing', shortName: 'Endo', description: 'Fe3+ reduction and release from endosome', color: '#a78bfa' },
  { id: 'lip', name: 'Labile Iron Pool', shortName: 'LIP', description: 'Cytosolic free iron and chaperones', color: '#fbbf24' },
  { id: 'fenton', name: 'Fenton Damage', shortName: 'Fenton', description: 'Hydroxyl radical production via Fenton chemistry', color: '#f87171' },
  { id: 'lipid_perox', name: 'Lipid Peroxidation', shortName: 'LipPerox', description: 'Membrane lipid oxidation and ferroptosis execution', color: '#fb923c' },
  { id: 'ferritin_storage', name: 'Ferritin Storage', shortName: 'Store', description: 'Iron sequestration in ferritin cages', color: '#34d399' },
  { id: 'mito', name: 'Mitochondrial Damage', shortName: 'Mito', description: 'ROS production and mitochondrial iron usage', color: '#f472b6' },
  { id: 'antioxidant', name: 'Antioxidant Defense', shortName: 'Antox', description: 'Catalase, GPX4, GSH regeneration systems', color: '#2dd4bf' },
  { id: 'mitophagy', name: 'Mitophagy', shortName: 'Mitoph', description: 'Damaged mitochondria clearance and iron recycling', color: '#818cf8' },
];

// ── Nodes ──────────────────────────────────────────────────────────────────

export const ironNodes: SbsfNode[] = [
  // Iron Import module
  { id: 'transferrin_1', label: 'Transferrin-Fe³⁺', category: 'STOCK', subtype: 'Molecule', moduleId: 'iron_import', description: 'Iron-loaded transferrin complex arriving at cell surface', roles: ['iron carrier'], x: 80, y: 120 },
  { id: 'transferrin_2', label: 'Transferrin-Fe³⁺', category: 'STOCK', subtype: 'Molecule', moduleId: 'iron_import', description: 'Second transferrin complex bound to TfR1', roles: ['iron carrier'], x: 80, y: 220 },
  { id: 'tfr1', label: 'TfR1', category: 'STOCK', subtype: 'Protein', moduleId: 'iron_import', description: 'Transferrin receptor 1: binds transferrin-iron complexes for endocytosis', roles: ['receptor', 'transporter'], x: 160, y: 170 },
  { id: 'fe3_extracellular', label: 'Fe³⁺', category: 'STOCK', subtype: 'Molecule', moduleId: 'iron_import', description: 'Ferric iron bound to transferrin', roles: ['substrate'], x: 40, y: 170 },

  // Endosome module
  { id: 'endosome', label: 'Endosome', category: 'STOCK', subtype: 'Organelle', moduleId: 'endosome', description: 'Acidic vesicle where Fe3+ is reduced to Fe2+ for export', roles: ['compartment'], x: 300, y: 170 },
  { id: 'steap3', label: 'STEAP3', category: 'STOCK', subtype: 'Protein', moduleId: 'endosome', description: 'Ferrireductase: reduces Fe3+ to Fe2+ inside endosomes', roles: ['enzyme', 'reductase'], x: 330, y: 100 },
  { id: 'dmt1', label: 'DMT1', category: 'STOCK', subtype: 'Protein', moduleId: 'endosome', description: 'Divalent metal transporter 1: exports Fe2+ from endosome to cytoplasm', roles: ['transporter'], x: 400, y: 170 },
  { id: 'fe2_endosomal', label: 'Fe²⁺', category: 'STOCK', subtype: 'Molecule', moduleId: 'endosome', description: 'Ferrous iron released inside endosome', roles: ['product'], x: 360, y: 170 },

  // Labile Iron Pool module
  { id: 'lip', label: 'LIP', category: 'STOCK', subtype: 'Organelle', moduleId: 'lip', description: 'Cytosolic labile iron pool: tightly regulated free Fe2+', roles: ['compartment', 'hub'], x: 550, y: 280 },
  { id: 'fe2_lip', label: 'Fe²⁺', category: 'STOCK', subtype: 'Molecule', moduleId: 'lip', description: 'Free ferrous iron in the cytoplasm', roles: ['substrate', 'danger signal'], x: 550, y: 200 },
  { id: 'pcbp1_2', label: 'PCBP1/2', category: 'STOCK', subtype: 'Protein', moduleId: 'lip', description: 'Iron chaperones: shuttle Fe2+ to ferritin and other destinations', roles: ['chaperone'], x: 620, y: 350 },

  // Fenton Damage module
  { id: 'fenton', label: 'Fenton Reaction', category: 'PROCESS', subtype: 'BiochemicalReaction', moduleId: 'fenton', description: 'Fe²⁺ + H₂O₂ → Fe³⁺ + OH· + OH⁻', roles: ['damage mechanism'], x: 700, y: 160 },
  { id: 'h2o2', label: 'H₂O₂', category: 'STOCK', subtype: 'Molecule', moduleId: 'fenton', description: 'Hydrogen peroxide: substrate for Fenton reaction', roles: ['substrate', 'oxidant'], x: 700, y: 80 },
  { id: 'hydroxyl_radical', label: 'OH·', category: 'STOCK', subtype: 'Molecule', moduleId: 'fenton', description: 'Hydroxyl radical: most reactive oxygen species in biology', roles: ['product', 'oxidant'], x: 800, y: 160 },
  { id: 'superoxide', label: 'O₂⁻', category: 'STOCK', subtype: 'Molecule', moduleId: 'fenton', description: 'Superoxide anion: precursor to H₂O₂', roles: ['oxidant'], x: 880, y: 80 },

  // Ferritin Storage module
  { id: 'ferritin', label: 'Ferritin', category: 'STOCK', subtype: 'Protein', moduleId: 'ferritin_storage', description: 'Iron storage cage: H-chains oxidize Fe2+ to Fe3+, L-chains store it. Holds up to 4,500 atoms.', roles: ['storage', 'detoxification'], x: 550, y: 440 },
  { id: 'ncoa4', label: 'NCOA4', category: 'STOCK', subtype: 'Protein', moduleId: 'ferritin_storage', description: 'Ferritinophagy receptor: targets ferritin for lysosomal degradation to release iron', roles: ['receptor', 'regulator'], x: 480, y: 500 },

  // Mitochondrial module
  { id: 'mitochondria', label: 'Mitochondria', category: 'STOCK', subtype: 'Organelle', moduleId: 'mito', description: 'Uses iron for ETC but produces superoxide and H₂O₂ as byproducts', roles: ['compartment', 'ROS source'], x: 950, y: 280 },
  { id: 'h2o2_mito', label: 'H₂O₂', category: 'STOCK', subtype: 'Molecule', moduleId: 'mito', description: 'Hydrogen peroxide produced by mitochondrial superoxide dismutation', roles: ['byproduct'], x: 880, y: 200 },
  { id: 'superoxide_mito', label: 'O₂⁻', category: 'STOCK', subtype: 'Molecule', moduleId: 'mito', description: 'Superoxide from electron transport chain leakage', roles: ['byproduct'], x: 1020, y: 200 },

  // Lipid Peroxidation module
  { id: 'lipid_perox', label: 'Lipid Peroxidation', category: 'PROCESS', subtype: 'BiochemicalReaction', moduleId: 'lipid_perox', description: 'Chain reaction oxidizing PUFAs in cell membranes. Execution step of ferroptosis.', roles: ['damage mechanism', 'ferroptosis'], x: 1100, y: 160 },
  { id: 'lox', label: 'LOXs', category: 'STOCK', subtype: 'Protein', moduleId: 'lipid_perox', description: 'Lipoxygenases: enzymes that initiate lipid peroxidation', roles: ['enzyme', 'initiator'], x: 1050, y: 80 },
  { id: 'pufas', label: 'PUFAs', category: 'STOCK', subtype: 'Molecule', moduleId: 'lipid_perox', description: 'Polyunsaturated fatty acids in cell membranes: targets of lipid peroxidation', roles: ['substrate'], x: 1180, y: 80 },

  // Antioxidant Defense module
  { id: 'gpx4', label: 'GPX4', category: 'STOCK', subtype: 'Protein', moduleId: 'antioxidant', description: 'Glutathione peroxidase 4: only enzyme that reduces lipid hydroperoxides', roles: ['enzyme', 'antioxidant'], x: 1200, y: 320 },
  { id: 'gsh', label: 'GSH', category: 'STOCK', subtype: 'Molecule', moduleId: 'antioxidant', description: 'Glutathione: main cellular antioxidant, cofactor for GPX4', roles: ['cofactor', 'antioxidant'], x: 1280, y: 380 },
  { id: 'system_xc', label: 'System xc⁻', category: 'STOCK', subtype: 'Protein', moduleId: 'antioxidant', description: 'Cystine/glutamate antiporter: imports cystine for GSH synthesis', roles: ['transporter'], x: 1360, y: 320 },
  { id: 'catalase', label: 'Catalase', category: 'STOCK', subtype: 'Protein', moduleId: 'antioxidant', description: 'Converts H₂O₂ to water and O₂', roles: ['enzyme', 'antioxidant'], x: 800, y: 440 },
  { id: 'nox', label: 'NOX', category: 'STOCK', subtype: 'Protein', moduleId: 'antioxidant', description: 'NADPH oxidase: produces superoxide for immune signaling', roles: ['enzyme', 'ROS source'], x: 1020, y: 440 },
  { id: 'regeneration', label: 'Regeneration', category: 'PROCESS', subtype: 'BiochemicalReaction', moduleId: 'antioxidant', description: 'Antioxidant recycling: restores GPX4 and GSH to active forms', roles: ['recycling'], x: 1280, y: 440 },

  // Mitophagy module
  { id: 'autolysosome', label: 'Autolysosome', category: 'STOCK', subtype: 'Organelle', moduleId: 'mitophagy', description: 'Fused autophagosome-lysosome that degrades damaged mitochondria', roles: ['compartment'], x: 1500, y: 280 },
  { id: 'mito_degraded', label: 'Degraded Mito', category: 'STOCK', subtype: 'Organelle', moduleId: 'mitophagy', description: 'Damaged mitochondria engulfed for degradation', roles: ['substrate'], x: 1430, y: 200 },
  { id: 'dmt1_2', label: 'DMT1', category: 'STOCK', subtype: 'Protein', moduleId: 'mitophagy', description: 'DMT1 on autolysosome membrane: exports recycled iron back to LIP', roles: ['transporter'], x: 1580, y: 350 },
  { id: 'fe2_recycled', label: 'Fe²⁺', category: 'STOCK', subtype: 'Molecule', moduleId: 'mitophagy', description: 'Recycled iron from degraded mitochondria returning to LIP', roles: ['product'], x: 1650, y: 280 },

  // Lysosome (cross-module)
  { id: 'lysosome', label: 'Lysosome', category: 'STOCK', subtype: 'Organelle', moduleId: 'ferritin_storage', description: 'Degrades ferritin via ferritinophagy, releasing stored iron', roles: ['compartment', 'recycling'], x: 480, y: 550 },
];

// ── Edges ──────────────────────────────────────────────────────────────────

export const ironEdges: SbsfEdge[] = [
  // Iron Import
  { id: 'e_tf1_tfr1', source: 'transferrin_1', target: 'tfr1', relation: 'binds', moduleId: 'iron_import', causalConfidence: 'L7', keyInsight: 'Receptor binding', weight: 1 },
  { id: 'e_tfr1_endo', source: 'tfr1', target: 'endosome', relation: 'transports', moduleId: 'iron_import', causalConfidence: 'L7', keyInsight: 'Endocytosis', weight: 1 },

  // Endosome Processing
  { id: 'e_steap3_fe2', source: 'steap3', target: 'fe2_endosomal', relation: 'produces', moduleId: 'endosome', causalConfidence: 'L7', keyInsight: 'Fe³⁺ → Fe²⁺ reduction', weight: 1 },
  { id: 'e_endo_steap3', source: 'endosome', target: 'steap3', relation: 'requires', moduleId: 'endosome', causalConfidence: 'L7', weight: 1 },
  { id: 'e_dmt1_lip', source: 'dmt1', target: 'lip', relation: 'transports', moduleId: 'endosome', causalConfidence: 'L7', keyInsight: 'Fe²⁺ export', weight: 1 },
  { id: 'e_fe2_dmt1', source: 'fe2_endosomal', target: 'dmt1', relation: 'transports', moduleId: 'endosome', causalConfidence: 'L7', weight: 1 },

  // LIP → destinations
  { id: 'e_lip_fenton', source: 'fe2_lip', target: 'fenton', relation: 'increases', moduleId: 'lip', causalConfidence: 'L7', keyInsight: 'Free iron feeds Fenton', weight: 1 },
  { id: 'e_lip_ferritin', source: 'pcbp1_2', target: 'ferritin', relation: 'transports', moduleId: 'lip', causalConfidence: 'L7', keyInsight: 'Iron storage', weight: 1 },
  { id: 'e_lip_mito', source: 'fe2_lip', target: 'mitochondria', relation: 'transports', moduleId: 'lip', causalConfidence: 'L6', keyInsight: 'ETC iron supply', weight: 0.8 },
  { id: 'e_lip_pcbp', source: 'lip', target: 'pcbp1_2', relation: 'produces', moduleId: 'lip', causalConfidence: 'L7', weight: 1 },

  // Fenton Reaction
  { id: 'e_h2o2_fenton', source: 'h2o2', target: 'fenton', relation: 'increases', moduleId: 'fenton', causalConfidence: 'L7', keyInsight: 'H₂O₂ substrate', weight: 1 },
  { id: 'e_fenton_oh', source: 'fenton', target: 'hydroxyl_radical', relation: 'produces', moduleId: 'fenton', causalConfidence: 'L7', keyInsight: 'OH· production', weight: 1 },

  // Mitochondria → ROS
  { id: 'e_mito_superoxide', source: 'mitochondria', target: 'superoxide_mito', relation: 'produces', moduleId: 'mito', causalConfidence: 'L7', keyInsight: 'ETC leakage', weight: 1 },
  { id: 'e_mito_h2o2', source: 'mitochondria', target: 'h2o2_mito', relation: 'produces', moduleId: 'mito', causalConfidence: 'L7', keyInsight: 'SOD conversion', weight: 1 },
  { id: 'e_h2o2_mito_fenton', source: 'h2o2_mito', target: 'fenton', relation: 'increases', moduleId: 'mito', causalConfidence: 'L6', keyInsight: 'Feeds Fenton', weight: 0.8 },

  // Lipid Peroxidation
  { id: 'e_oh_lipidperox', source: 'hydroxyl_radical', target: 'lipid_perox', relation: 'increases', moduleId: 'lipid_perox', causalConfidence: 'L7', keyInsight: 'Radical attack', weight: 1 },
  { id: 'e_lox_lipidperox', source: 'lox', target: 'lipid_perox', relation: 'catalyzes', moduleId: 'lipid_perox', causalConfidence: 'L7', keyInsight: 'Enzymatic initiation', weight: 1 },
  { id: 'e_pufas_lipidperox', source: 'pufas', target: 'lipid_perox', relation: 'requires', moduleId: 'lipid_perox', causalConfidence: 'L7', keyInsight: 'Membrane substrate', weight: 1 },

  // Antioxidant Defense
  { id: 'e_gpx4_lipidperox', source: 'gpx4', target: 'lipid_perox', relation: 'decreases', moduleId: 'antioxidant', causalConfidence: 'L7', keyInsight: 'Reduces lipid hydroperoxides', weight: 1 },
  { id: 'e_gsh_gpx4', source: 'gsh', target: 'gpx4', relation: 'requires', moduleId: 'antioxidant', causalConfidence: 'L7', keyInsight: 'GPX4 cofactor', weight: 1 },
  { id: 'e_xc_gsh', source: 'system_xc', target: 'gsh', relation: 'increases', moduleId: 'antioxidant', causalConfidence: 'L7', keyInsight: 'Cystine for GSH synthesis', weight: 1 },
  { id: 'e_catalase_h2o2', source: 'catalase', target: 'h2o2', relation: 'decreases', moduleId: 'antioxidant', causalConfidence: 'L7', keyInsight: 'H₂O₂ → H₂O', weight: 1 },
  { id: 'e_nox_superoxide', source: 'nox', target: 'superoxide', relation: 'produces', moduleId: 'antioxidant', causalConfidence: 'L7', keyInsight: 'Immune signaling', weight: 1 },
  { id: 'e_regen_gpx4', source: 'regeneration', target: 'gpx4', relation: 'increases', moduleId: 'antioxidant', causalConfidence: 'L6', keyInsight: 'Recycles antioxidants', weight: 0.8 },

  // Ferritin Storage
  { id: 'e_ncoa4_ferritin', source: 'ncoa4', target: 'lysosome', relation: 'transports', moduleId: 'ferritin_storage', causalConfidence: 'L7', keyInsight: 'Ferritinophagy', weight: 1 },
  { id: 'e_lysosome_lip', source: 'lysosome', target: 'lip', relation: 'increases', moduleId: 'ferritin_storage', causalConfidence: 'L6', keyInsight: 'Iron release', weight: 0.8 },

  // Mitophagy
  { id: 'e_mito_autolyso', source: 'mito_degraded', target: 'autolysosome', relation: 'transports', moduleId: 'mitophagy', causalConfidence: 'L7', keyInsight: 'Engulfment', weight: 1 },
  { id: 'e_autolyso_dmt1', source: 'autolysosome', target: 'dmt1_2', relation: 'requires', moduleId: 'mitophagy', causalConfidence: 'L7', weight: 1 },
  { id: 'e_dmt1_2_lip', source: 'dmt1_2', target: 'lip', relation: 'transports', moduleId: 'mitophagy', causalConfidence: 'L6', keyInsight: 'Iron recycling to LIP', weight: 0.8 },
];

// ── Complete GraphData ─────────────────────────────────────────────────────

export const ironGraphData: GraphData = {
  nodes: ironNodes,
  edges: ironEdges,
  modules: ironModules,
};
