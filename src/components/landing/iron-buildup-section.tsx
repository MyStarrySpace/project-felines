"use client";

import { motion } from "framer-motion";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";

const EASE = [0.22, 1, 0.36, 1] as const;

// Lucide-style SVG paths for benefit icons
const ZapPath = "M13 2L3 14h9l-1 10 10-12h-9l1-10z";
const WindPath =
  "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2";
const DnaPath =
  "M2 15c6.667-6 13.333 0 20-6M2 9c6.667 6 13.333 0 20 6M6.5 3v4M6.5 17v4M15.5 3v4M15.5 17v4M11 3v1M11 20v1";

function BenefitIcon({
  path,
  label,
  x,
  y,
  visible,
  delay,
  multi,
}: {
  path: string;
  label: string;
  x: number;
  y: number;
  visible: boolean;
  delay: number;
  multi?: boolean;
}) {
  return (
    <motion.g
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 15,
      }}
      transition={{ duration: 0.5, delay: visible ? delay : 0, ease: EASE }}
    >
      {/* Line from Fe to icon */}
      <motion.line
        x1={400}
        y1={180}
        x2={x}
        y2={y - 30}
        stroke="rgba(251,191,36,0.25)"
        strokeWidth={1.5}
        strokeDasharray="4 4"
        initial={false}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, delay: visible ? delay : 0 }}
      />
      {/* Icon */}
      <g transform={`translate(${x - 12}, ${y - 42})`}>
        <motion.path
          d={multi ? undefined : path}
          fill="none"
          stroke="rgb(251,191,36)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {multi &&
          path.split("M").filter(Boolean).map((segment, i) => (
            <motion.path
              key={i}
              d={`M${segment}`}
              fill="none"
              stroke="rgb(251,191,36)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
      </g>
      {/* Label */}
      <text
        x={x}
        y={y}
        textAnchor="middle"
        className="fill-gray-300 text-[13px] font-medium"
      >
        {label}
      </text>
    </motion.g>
  );
}

// Chain reaction nodes for step 3
const chainNodes = [
  { label: "OH\u2022", color: "#f59e0b" },
  { label: "PUFA", color: "#94a3b8" },
  { label: "L\u2022", color: "#ef4444" },
  { label: "O\u2082", color: "#64748b" },
  { label: "LOO\u2022", color: "#ef4444" },
  { label: "PUFA", color: "#94a3b8" },
  { label: "\u2026", color: "#ef4444" },
];

export function IronBuildupSection() {
  const { currentStep: step } = useFullPage();

  return (
    <div
      className="h-full relative overflow-hidden"
      role="region"
      aria-label="Iron buildup"
    >
      {/* ── Step 0: Iron is dangerous ───────────────────────── */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.2] tracking-[-0.02em] text-gray-200">
            Iron is the most dangerous essential nutrient in biology
          </p>
          <svg
            viewBox="0 0 800 300"
            className="w-full max-w-lg mt-8"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="fe-glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.circle
              cx={400}
              cy={150}
              r={65}
              fill="#150D08"
              stroke="rgb(251,191,36)"
              strokeWidth={2.5}
              filter="url(#fe-glow)"
              animate={{ r: [63, 67, 63] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <text
              x={400}
              y={155}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-teal-300 text-[28px] font-bold"
            >
              Fe²⁺
            </text>
          </svg>
        </div>
      </StepFragment>

      {/* ── Step 1: Benefits ───────────────────────────────── */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <svg
            viewBox="0 0 800 400"
            className="w-full max-w-2xl"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="fe-glow-1">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Central Fe circle */}
            <motion.circle
              cx={400}
              cy={160}
              r={55}
              fill="#150D08"
              stroke="rgb(251,191,36)"
              strokeWidth={2}
              filter="url(#fe-glow-1)"
              animate={{ r: [53, 57, 53] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <text
              x={400}
              y={165}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-teal-300 text-[22px] font-bold"
            >
              Fe²⁺
            </text>

            {/* Benefit branches */}
            <BenefitIcon
              path={ZapPath}
              label="Energy"
              x={220}
              y={340}
              visible
              delay={0.1}
            />
            <BenefitIcon
              path={WindPath}
              label="O₂ transport"
              x={400}
              y={340}
              visible
              delay={0.25}
              multi
            />
            <BenefitIcon
              path={DnaPath}
              label="DNA synthesis"
              x={580}
              y={340}
              visible
              delay={0.4}
              multi
            />
          </svg>
        </div>
      </StepFragment>

      {/* ── Step 2: Fenton reaction ────────────────────────── */}
      <StepFragment step={step} appear={2} recede={3}>
        <div className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 mb-8">
            But free ferrous iron catalyzes hydroxyl radicals
          </p>
          <svg
            viewBox="0 0 800 280"
            className="w-full max-w-2xl"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="fe-glow-2">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="oh-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Fe circle (smaller, top) */}
            <motion.circle
              cx={400}
              cy={60}
              r={40}
              fill="#150D08"
              stroke="rgb(251,191,36)"
              strokeWidth={2}
              filter="url(#fe-glow-2)"
            />
            <text
              x={400}
              y={65}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-teal-300 text-[18px] font-bold"
            >
              Fe²⁺
            </text>

            {/* Fenton equation */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <text
                x={400}
                y={160}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-300 text-[18px] font-mono"
              >
                <tspan className="fill-teal-400">Fe²⁺</tspan>
                <tspan>{" + H₂O₂  →  "}</tspan>
                <tspan className="fill-gray-500">Fe³⁺</tspan>
                <tspan>{" + "}</tspan>
                <tspan className="fill-amber-400" filter="url(#oh-glow)">
                  OH•
                </tspan>
                <tspan>{" + OH⁻"}</tspan>
              </text>
            </motion.g>

            {/* Arrow down from Fe to equation */}
            <motion.line
              x1={400}
              y1={102}
              x2={400}
              y2={135}
              stroke="rgba(251,191,36,0.4)"
              strokeWidth={1.5}
              markerEnd="url(#arrow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />

            {/* Caption */}
            <text
              x={400}
              y={220}
              textAnchor="middle"
              className="fill-amber-400/70 text-[13px]"
            >
              The Fenton reaction: one of the most reactive species in biology
            </text>
          </svg>
        </div>
      </StepFragment>

      {/* ── Step 3: Chain reaction ─────────────────────────── */}
      <StepFragment step={step} appear={3}>
        <div className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 mb-6">
            Those radicals attack the fats in every cell membrane
          </p>

          {/* Fenton (compact) */}
          <p className="font-mono text-sm text-gray-500 mb-8">
            <span className="text-teal-400/60">Fe²⁺</span> + H₂O₂ → Fe³⁺ +{" "}
            <span className="text-amber-400">OH•</span> + OH⁻
          </p>

          {/* Chain reaction diagram */}
          <svg
            viewBox="0 0 800 120"
            className="w-full max-w-3xl"
            preserveAspectRatio="xMidYMid meet"
          >
            {chainNodes.map((node, i) => {
              const x = 60 + i * 100;
              const y = 60;
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 * i,
                    ease: EASE,
                  }}
                >
                  {/* Node */}
                  <rect
                    x={x - 32}
                    y={y - 18}
                    width={64}
                    height={36}
                    rx={8}
                    fill="#150D08"
                    stroke={node.color}
                    strokeWidth={1.5}
                    opacity={0.9}
                  />
                  <text
                    x={x}
                    y={y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={node.color}
                    className="text-[13px] font-mono font-medium"
                  >
                    {node.label}
                  </text>
                  {/* Arrow to next */}
                  {i < chainNodes.length - 1 && (
                    <motion.line
                      x1={x + 34}
                      y1={y}
                      x2={x + 66}
                      y2={y}
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth={1.5}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.1 * i,
                      }}
                    />
                  )}
                </motion.g>
              );
            })}
          </svg>

          <p className="mt-6 text-sm text-gray-500 max-w-md">
            Lipid peroxidation: one radical can destroy hundreds of membrane
            lipids in a self-propagating chain
          </p>
        </div>
      </StepFragment>
    </div>
  );
}
