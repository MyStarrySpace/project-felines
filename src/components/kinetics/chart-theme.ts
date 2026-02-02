import type { PartialTheme } from "@nivo/theming";

/** Custom series type for numeric x/y data */
export type NumericSeries = {
  id: string;
  data: readonly { x: number; y: number }[];
};

/** Shared Nivo theme for kinetics charts */
export const felineTheme: PartialTheme = {
  background: "transparent",
  text: {
    fontSize: 11,
    fill: "#6B7280", // gray-500
    fontFamily: "var(--font-sans), system-ui, sans-serif",
  },
  axis: {
    domain: {
      line: {
        stroke: "#D1D5DB", // gray-300
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#D1D5DB",
        strokeWidth: 1,
      },
      text: {
        fontSize: 11,
        fill: "#6B7280",
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: "#6B7280",
      },
    },
  },
  grid: {
    line: {
      stroke: "#E5E7EB", // gray-200
      strokeWidth: 0.5,
    },
  },
  crosshair: {
    line: {
      stroke: "#9CA3AF", // gray-400
      strokeWidth: 1,
      strokeDasharray: "4 4",
    },
  },
  tooltip: {
    container: {
      background: "rgba(13, 19, 45, 0.92)",
      color: "#ffffff",
      fontSize: 12,
      borderRadius: "6px",
      boxShadow: "0 2px 8px rgba(13, 19, 45, 0.15)",
      padding: "8px 12px",
      fontFamily: "var(--font-sans), system-ui, sans-serif",
    },
  },
  legends: {
    text: {
      fontSize: 11,
      fill: "#6B7280",
    },
  },
};

/** Colors for the three damage scenarios */
export const SCENARIO_COLORS = {
  mild: "#06B6D4", // teal-400
  moderate: "#0891B2", // teal-600
  severe: "#0E7490", // teal-800
} as const;

/** Colors for APOE genotype scenarios (spontaneous mode) */
export const APOE_COLORS = {
  "e3e3": "#06B6D4", // teal-400
  "e3e4": "#0891B2", // teal-600
  "e4e4": "#0E7490", // teal-800
} as const;

/** Colors for defense layers */
export const LAYER_COLORS = {
  Export: "#0891B2", // teal-600
  Neurovascular: "#06B6D4", // teal-400
  Insulation: "#D97706", // amber-600
  Lysosome: "#DC2626", // red-600
  GPX4: "#059669", // green-600
} as const;

/** Iron series colors */
export const IRON_COLORS = {
  free: "#DC2626", // red-600
  stored: "#D97706", // amber-600
  total: "#6B7280", // gray-500
} as const;
