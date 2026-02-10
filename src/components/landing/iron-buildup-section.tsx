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
        y1={220}
        x2={x}
        y2={y - 30}
        stroke="rgba(251,191,36,0.25)"
        strokeWidth={1.5}
        strokeDasharray="4 4"
        initial={false}
        animate={{
          pathLength: visible ? 1 : 0,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.5, delay: visible ? delay : 0 }}
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
          path
            .split("M")
            .filter(Boolean)
            .map((segment, i) => (
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


export function IronBuildupSection() {
  const { currentStep: step } = useFullPage();

  const showBenefits = step >= 1 && step < 2;
  const showFenton = step >= 2;
  const showCycle = step >= 3;
  // Fe circle: large and centered at steps 0-1, smaller and higher at steps 2+
  const feCy = step < 2 ? 200 : 100;
  const feR = step < 2 ? 60 : 40;
  const feTextY = step < 2 ? 205 : 105;
  const feTextSize = step < 2 ? "text-[26px]" : "text-[18px]";

  // Steps 4-6: ferroptosis
  const shieldVisible = step === 4 || step === 5;
  const shieldFailed = step >= 5;
  const cycleOpacity = step === 4 ? 0.6 : step === 5 ? 1 : step === 6 ? 0.15 : 1;
  const showFerroptosisFullscreen = step === 6;

  return (
    <div
      className="h-full relative overflow-hidden"
      role="region"
      aria-label="Iron buildup and ferroptosis"
    >
      {/* Persistent SVG layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 800 560"
          className="w-full max-w-3xl px-6"
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
            <filter id="oh-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Arrowhead for cycle arcs */}
            <marker
              id="cycle-arrow"
              viewBox="0 0 10 10"
              refX={8}
              refY={5}
              markerWidth={6}
              markerHeight={6}
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.35)" />
            </marker>
            {/* Arrowhead for OH -> L path */}
            <marker
              id="oh-arrow"
              viewBox="0 0 10 10"
              refX={8}
              refY={5}
              markerWidth={6}
              markerHeight={6}
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Wrapper group for cycle opacity at steps 4-6 */}
          <motion.g
            initial={false}
            animate={{ opacity: showCycle ? cycleOpacity : 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {/* Fe2+ circle (steps 0-2, fades out at step 3) */}
            <motion.circle
              cx={400}
              cy={feCy}
              r={feR}
              fill="#150D08"
              stroke="rgb(251,191,36)"
              strokeWidth={2.5}
              filter="url(#fe-glow)"
              initial={false}
              animate={{
                cy: feCy,
                r: [feR - 2, feR + 2, feR - 2],
                opacity: showCycle ? 0 : 1,
              }}
              transition={{
                cy: { duration: 0.6, ease: EASE },
                r: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, ease: EASE },
              }}
            />
            <motion.text
              x={400}
              textAnchor="middle"
              dominantBaseline="middle"
              className={`fill-teal-300 font-bold ${feTextSize}`}
              initial={false}
              animate={{ y: feTextY, opacity: showCycle ? 0 : 1 }}
              transition={{
                y: { duration: 0.6, ease: EASE },
                opacity: { duration: 0.5, ease: EASE },
              }}
            >
              Fe²⁺
            </motion.text>

            {/* Benefit branches (step 1 only) */}
            <BenefitIcon
              path={ZapPath}
              label="Energy"
              x={220}
              y={380}
              visible={showBenefits}
              delay={0.1}
            />
            <BenefitIcon
              path={WindPath}
              label="O₂ transport"
              x={400}
              y={380}
              visible={showBenefits}
              delay={0.25}
              multi
            />
            <BenefitIcon
              path={DnaPath}
              label="DNA synthesis"
              x={580}
              y={380}
              visible={showBenefits}
              delay={0.4}
              multi
            />

            {/* Arrow Fe -> Fenton equation (step 2+) */}
            <motion.line
              x1={400}
              y1={142}
              x2={400}
              y2={175}
              stroke="rgba(251,191,36,0.4)"
              strokeWidth={1.5}
              initial={false}
              animate={{ opacity: showFenton && !showCycle ? 1 : 0 }}
              transition={{
                duration: 0.4,
                delay: showFenton && !showCycle ? 0.1 : 0,
              }}
            />

            {/* Fenton equation (step 2 only, fades out at step 3) */}
            <motion.g
              initial={false}
              animate={{
                opacity: showFenton && !showCycle ? 1 : 0,
                y: showFenton ? 0 : 10,
              }}
              transition={{ duration: 0.6, delay: showFenton ? 0.2 : 0, ease: EASE }}
            >
              <text
                x={400}
                y={210}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-300 text-[24px] font-mono"
              >
                <tspan className="fill-teal-400">Fe²⁺</tspan>
                <tspan>{" + H₂O₂  →  "}</tspan>
                <tspan className="fill-gray-500">Fe³⁺</tspan>
                <tspan>{" + "}</tspan>
                <tspan className="fill-transparent">OH•</tspan>
                <tspan>{" + OH⁻"}</tspan>
              </text>
            </motion.g>

            {/* Fenton caption (step 2 only) */}
            <motion.text
              x={400}
              y={255}
              textAnchor="middle"
              className="fill-amber-400/70 text-[15px]"
              initial={false}
              animate={{ opacity: step === 2 ? 1 : 0 }}
              transition={{ duration: 0.4, delay: step === 2 ? 0.4 : 0 }}
            >
              The Fenton reaction: one of the most reactive species in biology
            </motion.text>

            {/* Lipid peroxidation cycle (step 3+) */}

            {/* OH• — persistent element that sits in the equation at step 2
                and animates down to the cycle position at step 3 */}
            <motion.g
              initial={false}
              animate={{
                opacity: showFenton ? 1 : 0,
                x: showCycle ? 230 : 465,
                y: showCycle ? 200 : showFenton ? 210 : 220,
              }}
              transition={{
                opacity: { duration: 0.6, delay: showFenton ? 0.2 : 0, ease: EASE },
                x: { duration: 0.6, ease: EASE },
                y: { duration: 0.6, ease: EASE },
              }}
            >
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#f59e0b"
                filter="url(#oh-glow)"
                className="text-[24px] font-mono font-semibold"
              >
                OH•
              </text>
              <motion.text
                y={22}
                textAnchor="middle"
                className="fill-amber-400/50 text-[14px]"
                initial={false}
                animate={{ opacity: showCycle ? 1 : 0 }}
                transition={{ duration: 0.3, delay: showCycle ? 0.3 : 0 }}
              >
                hydroxyl radical
              </motion.text>
            </motion.g>

            {/* OH• -> L• arrow (vertical drop) */}
            <motion.line
              x1={230}
              y1={230}
              x2={230}
              y2={308}
              stroke="#f59e0b"
              strokeWidth={1.5}
              markerEnd="url(#oh-arrow)"
              initial={false}
              animate={{ opacity: showCycle ? 0.8 : 0 }}
              transition={{ duration: 0.4, delay: showCycle ? 0.3 : 0 }}
            />

            {/* L• node */}
            <motion.g
              initial={false}
              animate={{
                opacity: showCycle ? 1 : 0,
                y: showCycle ? 0 : 10,
              }}
              transition={{ duration: 0.4, delay: showCycle ? 0.3 : 0, ease: EASE }}
            >
              <text
                x={230}
                y={330}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ef4444"
                className="text-[28px] font-mono font-bold"
              >
                L•
              </text>
              <text
                x={230}
                y={356}
                textAnchor="middle"
                className="fill-red-400/50 text-[14px]"
              >
                lipid radical
              </text>
            </motion.g>

            {/* Top arc: L• -> LOO• */}
            <motion.path
              d="M 270 320 C 330 180, 480 180, 535 320"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              markerEnd="url(#cycle-arrow)"
              initial={false}
              animate={
                showCycle && !showFerroptosisFullscreen
                  ? { opacity: [0.2, 0.5, 0.2] }
                  : { opacity: 0 }
              }
              transition={
                showCycle && !showFerroptosisFullscreen
                  ? { duration: 2, repeat: Infinity, delay: 1.0, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
            />
            <motion.text
              x={400}
              y={205}
              textAnchor="middle"
              className="fill-slate-400 text-[15px] font-mono"
              initial={false}
              animate={{ opacity: showCycle ? 0.7 : 0 }}
              transition={{ duration: 0.4, delay: showCycle ? 0.5 : 0 }}
            >
              +O₂
            </motion.text>

            {/* LOO• node */}
            <motion.g
              initial={false}
              animate={{
                opacity: showCycle ? 1 : 0,
                y: showCycle ? 0 : 10,
              }}
              transition={{ duration: 0.4, delay: showCycle ? 0.6 : 0, ease: EASE }}
            >
              <text
                x={570}
                y={330}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ef4444"
                className="text-[28px] font-mono font-bold"
              >
                LOO•
              </text>
              <text
                x={570}
                y={356}
                textAnchor="middle"
                className="fill-red-400/50 text-[14px]"
              >
                peroxyl radical
              </text>
            </motion.g>

            {/* Bottom arc: LOO• -> L• */}
            <motion.path
              d="M 535 348 C 480 485, 330 485, 270 348"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1.5}
              markerEnd="url(#cycle-arrow)"
              initial={false}
              animate={
                showCycle && !showFerroptosisFullscreen
                  ? { opacity: [0.2, 0.5, 0.2] }
                  : { opacity: 0 }
              }
              transition={
                showCycle && !showFerroptosisFullscreen
                  ? { duration: 2, repeat: Infinity, delay: 1.0, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
            />
            <motion.g
              initial={false}
              animate={{ opacity: showCycle ? 0.7 : 0 }}
              transition={{ duration: 0.4, delay: showCycle ? 0.8 : 0 }}
            >
              <text
                x={400}
                y={468}
                textAnchor="middle"
                className="fill-slate-400 text-[15px] font-mono"
              >
                +PUFA
              </text>
              <text
                x={400}
                y={486}
                textAnchor="middle"
                className="fill-slate-500 text-[13px]"
              >
                membrane fat
              </text>
            </motion.g>

            {/* LOOH exit label */}
            <motion.g
              initial={false}
              animate={{ opacity: showCycle ? 0.5 : 0 }}
              transition={{ duration: 0.4, delay: showCycle ? 0.9 : 0 }}
            >
              <line
                x1={570}
                y1={364}
                x2={570}
                y2={386}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth={1}
              />
              <text
                x={570}
                y={402}
                textAnchor="middle"
                className="fill-slate-500 text-[14px] font-mono"
              >
                LOOH
              </text>
              <text
                x={570}
                y={418}
                textAnchor="middle"
                className="fill-slate-600 text-[12px]"
              >
                damaged lipid
              </text>
            </motion.g>
          </motion.g>

          {/* GPX4 shield — positioned on bottom arc (LOO• -> L• propagation path) */}
          <motion.g
            initial={false}
            animate={{
              opacity: shieldVisible ? 1 : 0,
              scale: shieldVisible ? 1 : 0.5,
            }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.path
              d="M 400 395 L 450 415 L 450 445 Q 450 480 400 495 Q 350 480 350 445 L 350 415 Z"
              initial={false}
              animate={{
                fill: shieldFailed
                  ? "rgba(127,29,29,0.3)"
                  : "rgba(217,119,6,0.15)",
                stroke: shieldFailed ? "#ef4444" : "rgb(251,191,36)",
              }}
              strokeWidth={2}
              transition={{ duration: 0.5 }}
            />
            <motion.text
              x={400}
              y={450}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[20px] font-bold"
              initial={false}
              animate={{
                fill: shieldFailed ? "#ef4444" : "rgb(251,191,36)",
              }}
              transition={{ duration: 0.5 }}
            >
              GPX4
            </motion.text>

            {/* Red X when failed */}
            <motion.g
              initial={false}
              animate={{
                opacity: shieldFailed ? 1 : 0,
                scale: shieldFailed ? 1 : 0.5,
              }}
              transition={{
                duration: 0.4,
                delay: shieldFailed ? 0.2 : 0,
              }}
            >
              <line
                x1={365}
                y1={405}
                x2={435}
                y2={485}
                stroke="#ef4444"
                strokeWidth={4}
                strokeLinecap="round"
              />
              <line
                x1={435}
                y1={405}
                x2={365}
                y2={485}
                stroke="#ef4444"
                strokeWidth={4}
                strokeLinecap="round"
              />
            </motion.g>
          </motion.g>
        </svg>

        {/* Rising red gradient overlay (steps 5-6) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={false}
          animate={{
            opacity: step < 5 ? 0 : step === 5 ? 0.6 : 1,
          }}
          transition={{ duration: 1.4, delay: step >= 5 ? 0.3 : 0, ease: EASE }}
        >
          <div className="h-full w-full bg-gradient-to-t from-red-900/30 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Text StepFragments (top-positioned) */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="absolute top-[8vh] inset-x-0 text-center px-6">
          <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.2] tracking-[-0.02em] text-gray-200">
            Iron is the most dangerous essential nutrient in biology
          </p>
        </div>
      </StepFragment>

      <StepFragment step={step} appear={1} recede={2}>
        <div className="absolute top-[8vh] inset-x-0 text-center px-6">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200">
            It&apos;s essential for energy, oxygen transport, and DNA synthesis
          </p>
        </div>
      </StepFragment>

      <StepFragment step={step} appear={2} recede={3}>
        <div className="absolute top-[8vh] inset-x-0 text-center px-6">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200">
            But free ferrous iron catalyzes hydroxyl radicals
          </p>
        </div>
      </StepFragment>

      <StepFragment step={step} appear={3} recede={4}>
        <div className="absolute top-[8vh] inset-x-0 text-center px-6">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200">
            Those radicals attack the fats in every cell membrane
          </p>
        </div>
      </StepFragment>

      <StepFragment step={step} appear={4} recede={5}>
        <div className="absolute top-[8vh] inset-x-0 text-center px-6">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200">
            One enzyme stands between the chain reaction and cell death
          </p>
        </div>
      </StepFragment>

      <StepFragment step={step} appear={5} recede={6}>
        <div className="absolute top-[8vh] inset-x-0 text-center px-6">
          <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200">
            When iron outpaces the brake, the membrane collapses
          </p>
        </div>
      </StepFragment>

      {/* Step 6: fullscreen "This is ferroptosis." */}
      <StepFragment step={step} appear={6}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.h2
            className="font-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.03em] text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            This is ferroptosis.
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-400 max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            Iron-dependent cell death through lipid peroxidation.
          </motion.p>

          <motion.p
            className="mt-4 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Named in 2012. Implicated in every major neurodegenerative disease.
          </motion.p>
        </div>
      </StepFragment>

      {/* Cycle caption (below SVG area, steps 3-5) */}
      <motion.div
        className="absolute bottom-[8vh] inset-x-0 text-center px-6"
        initial={false}
        animate={{
          opacity: step >= 3 && step <= 5 ? 1 : 0,
          y: step >= 3 && step <= 5 ? 0 : 10,
        }}
        transition={{ duration: 0.5, delay: step >= 3 && step <= 5 ? 0.4 : 0, ease: EASE }}
      >
        <motion.p
          className="text-sm max-w-md mx-auto"
          initial={false}
          animate={{
            color:
              step === 3
                ? "rgba(156,163,175,0.7)"
                : step === 4
                  ? "rgba(45,212,191,0.7)"
                  : "rgba(248,113,113,0.7)",
          }}
          transition={{ duration: 0.5 }}
        >
          {step === 3
            ? "Lipid peroxidation: one radical starts a self-propagating cycle that can destroy hundreds of membrane lipids"
            : step === 4
              ? "GPX4: the only enzyme that can repair oxidized membrane lipids"
              : "Without GPX4, a single radical event cascades into total membrane destruction"}
        </motion.p>
      </motion.div>
    </div>
  );
}
