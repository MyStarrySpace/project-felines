/** Clearance model chart colors */
export const CLEARANCE_COLORS = {
  LIP: "#DC2626", // red-600 — labile iron pool
  ferritin: "#D97706", // amber-600 — ferritin storage
  ISF: "#7C3AED", // violet-600 — interstitial fluid
  CSF: "#2563EB", // blue-600 — cerebrospinal fluid
  fpn: "#10B981", // emerald-500 — ferroportin fraction
  gly: "#06B6D4", // cyan-500 — glymphatic fraction
} as const;

/** Phase band colors */
export const PHASE_COLORS = {
  phase0: "transparent",
  phase1: "rgba(251, 191, 36, 0.12)", // amber, sublethal
  phase2: "rgba(220, 38, 38, 0.12)", // red, frank ferroptosis
  phase1Line: "#FBBF24",
  phase2Line: "#DC2626",
  healthyRef: "#6B7280", // gray-500 for healthy reference overlay
} as const;

/** Cell-type budget bar chart colors */
export const CELL_TYPE_COLORS: Record<string, string> = {
  "Excitatory neurons": "#3B82F6", // blue-500
  "Inhibitory neurons": "#6366F1", // indigo-500
  "Astrocytes": "#8B5CF6", // violet-500
  "Oligodendrocytes": "#A78BFA", // violet-400
  "Microglia": "#DC2626", // red-600 — dominant exporter
  "Endothelial/pericyte": "#059669", // green-600
} as const;
