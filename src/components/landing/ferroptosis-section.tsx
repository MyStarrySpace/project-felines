"use client";

import { motion } from "framer-motion";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";

const EASE = [0.22, 1, 0.36, 1] as const;

// Same chain nodes from iron-buildup-section (reproduced statically)
const chainNodes = [
  { label: "OH\u2022", color: "#f59e0b" },
  { label: "PUFA", color: "#94a3b8" },
  { label: "L\u2022", color: "#ef4444" },
  { label: "O\u2082", color: "#64748b" },
  { label: "LOO\u2022", color: "#ef4444" },
  { label: "PUFA", color: "#94a3b8" },
  { label: "\u2026", color: "#ef4444" },
];

/** Static chain reaction diagram — final state of slide 1 */
function ChainDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 120"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {chainNodes.map((node, i) => {
        const x = 60 + i * 100;
        const y = 60;
        return (
          <g key={i}>
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
          </g>
        );
      })}
    </svg>
  );
}

/** GPX4 shield shape */
function GPX4Shield({
  visible,
  failed,
}: {
  visible: boolean;
  failed: boolean;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ top: "42%", left: "50%", transform: "translate(-50%, -50%)" }}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <svg
        width={100}
        height={110}
        viewBox="0 0 100 110"
        className="drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]"
      >
        {/* Shield shape */}
        <motion.path
          d="M50 5 L90 25 L90 60 Q90 90 50 105 Q10 90 10 60 L10 25 Z"
          fill={failed ? "rgba(127,29,29,0.3)" : "rgba(217,119,6,0.15)"}
          stroke={failed ? "#ef4444" : "rgb(251,191,36)"}
          strokeWidth={2}
          initial={false}
          animate={{
            fill: failed
              ? "rgba(127,29,29,0.3)"
              : "rgba(217,119,6,0.15)",
            stroke: failed ? "#ef4444" : "rgb(251,191,36)",
          }}
          transition={{ duration: 0.5 }}
        />
        {/* GPX4 label */}
        <text
          x={50}
          y={52}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-current text-[15px] font-bold"
          style={{ fill: failed ? "#ef4444" : "rgb(251,191,36)" }}
        >
          GPX4
        </text>

        {/* Red X when failed */}
        {failed && (
          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <line
              x1={25}
              y1={25}
              x2={75}
              y2={85}
              stroke="#ef4444"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <line
              x1={75}
              y1={25}
              x2={25}
              y2={85}
              stroke="#ef4444"
              strokeWidth={4}
              strokeLinecap="round"
            />
          </motion.g>
        )}
      </svg>
    </motion.div>
  );
}

export function FerroptosisSection() {
  const { currentStep: step } = useFullPage();

  return (
    <div
      className="h-full relative overflow-hidden"
      role="region"
      aria-label="Ferroptosis"
    >
      {/* ── Step 0: GPX4 the brake ─────────────────────────── */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto relative">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 mb-4">
            One enzyme stands between the chain reaction and cell death
          </p>

          {/* Compact Fenton reminder */}
          <p className="font-mono text-sm text-gray-500/60 mb-6">
            <span className="text-teal-400/40">Fe²⁺</span> + H₂O₂ → Fe³⁺ +{" "}
            <span className="text-amber-400/60">OH•</span> + OH⁻
          </p>

          <div className="relative w-full max-w-3xl">
            <ChainDiagram className="w-full opacity-60" />
            <GPX4Shield visible failed={false} />
          </div>

          <motion.p
            className="mt-8 text-sm text-teal-400/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            GPX4: the only enzyme that can repair oxidized membrane lipids
          </motion.p>
        </div>
      </StepFragment>

      {/* ── Step 1: GPX4 fails ─────────────────────────────── */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto relative">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 mb-8">
            When iron outpaces the brake, the membrane collapses
          </p>

          <div className="relative w-full max-w-3xl">
            <ChainDiagram className="w-full" />
            <GPX4Shield visible failed />

            {/* Rising red gradient overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(40% 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            >
              <div className="h-full w-full bg-gradient-to-t from-red-900/40 via-red-800/20 to-transparent rounded-lg" />
            </motion.div>
          </div>

          <motion.p
            className="mt-6 text-sm text-red-400/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Without GPX4, a single radical event cascades into total membrane
            destruction
          </motion.p>
        </div>
      </StepFragment>

      {/* ── Step 2: THIS IS FERROPTOSIS ────────────────────── */}
      <StepFragment step={step} appear={2}>
        <div className="flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto relative">
          {/* Background red flood */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.5, ease: EASE }}
          >
            <div className="h-full w-full bg-gradient-to-t from-red-900/30 via-red-950/20 to-transparent" />
          </motion.div>

          <motion.h2
            className="font-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.03em] text-white relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            This is ferroptosis.
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-400 relative z-10 max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            Iron-dependent cell death through lipid peroxidation.
          </motion.p>

          <motion.p
            className="mt-4 text-sm text-gray-600 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Named in 2012. Implicated in every major neurodegenerative disease.
          </motion.p>
        </div>
      </StepFragment>
    </div>
  );
}
