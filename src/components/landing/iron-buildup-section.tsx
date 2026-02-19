"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";

function IronStage({ progress }: { progress: MotionValue<number> }) {
  // SVG beat opacities
  const feOpacity = useTransform(progress, [0.00, 0.10], [0, 1]);
  const fentonOpacity = useTransform(progress, [0.18, 0.28], [0, 1]);
  const gpx4Opacity = useTransform(progress, [0.34, 0.44], [0, 1]);
  const shieldStroke = useTransform(progress, [0.34, 0.48], ["rgb(251,191,36)", "#ef4444"]);
  const shieldFill = useTransform(
    progress,
    [0.34, 0.48],
    ["rgba(217,119,6,0.15)", "rgba(127,29,29,0.3)"]
  );
  const xOpacity = useTransform(progress, [0.44, 0.48], [0, 1]);
  const diagramDim = useTransform(progress, [0.55, 0.65], [1, 0.15]);
  const ferroptosisOpacity = useTransform(progress, [0.60, 0.75], [0, 1]);

  return (
    <div className="h-full relative">
      {/* SVG diagram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div style={{ opacity: diagramDim }} className="w-full max-w-3xl px-6">
          <svg
            viewBox="0 0 800 560"
            className="w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
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
            </defs>

            {/* Fe2+ label and benefits (beat 1) */}
            <motion.g style={{ opacity: feOpacity }}>
              <text
                x={400}
                y={100}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-teal-300 font-bold text-[22px]"
              >
                Fe&#xB2;&#x207A;
              </text>
              <text x={220} y={180} textAnchor="middle" className="fill-gray-300 text-[13px] font-medium">
                Energy
              </text>
              <text x={400} y={180} textAnchor="middle" className="fill-gray-300 text-[13px] font-medium">
                O&#x2082; transport
              </text>
              <text x={580} y={180} textAnchor="middle" className="fill-gray-300 text-[13px] font-medium">
                DNA synthesis
              </text>
              <line x1={400} y1={115} x2={220} y2={165} stroke="rgba(251,191,36,0.25)" strokeWidth={1} strokeDasharray="4 4" />
              <line x1={400} y1={115} x2={400} y2={165} stroke="rgba(251,191,36,0.25)" strokeWidth={1} strokeDasharray="4 4" />
              <line x1={400} y1={115} x2={580} y2={165} stroke="rgba(251,191,36,0.25)" strokeWidth={1} strokeDasharray="4 4" />
            </motion.g>

            {/* Fenton + lipid peroxidation cycle (beat 2) */}
            <motion.g style={{ opacity: fentonOpacity }}>
              <text x={400} y={70} textAnchor="middle" className="fill-gray-400 text-[14px] font-mono">
                <tspan className="fill-teal-400/60">Fe&#xB2;&#x207A;</tspan>
                <tspan>{" + H\u2082O\u2082 \u2192 "}</tspan>
                <tspan className="fill-gray-500/60">Fe&#xB3;&#x207A;</tspan>
                <tspan>{" + OH\u2022 + OH\u207B"}</tspan>
              </text>

              <text x={230} y={220} textAnchor="middle" fill="#f59e0b" className="text-[22px] font-mono font-semibold">
                OH&#x2022;
              </text>
              <text x={230} y={242} textAnchor="middle" className="fill-amber-400/50 text-[12px]">
                hydroxyl radical
              </text>

              <text x={230} y={330} textAnchor="middle" fill="#ef4444" className="text-[24px] font-mono font-bold">
                L&#x2022;
              </text>
              <text x={230} y={356} textAnchor="middle" className="fill-red-400/50 text-[12px]">
                lipid radical
              </text>

              <line x1={230} y1={250} x2={230} y2={308} stroke="#f59e0b" strokeWidth={1.5} opacity={0.6} />

              <text x={570} y={330} textAnchor="middle" fill="#ef4444" className="text-[24px] font-mono font-bold">
                LOO&#x2022;
              </text>
              <text x={570} y={356} textAnchor="middle" className="fill-red-400/50 text-[12px]">
                peroxyl radical
              </text>

              <path
                d="M 270 320 C 330 200, 480 200, 535 320"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth={1.5}
                markerEnd="url(#cycle-arrow)"
              />
              <text x={400} y={225} textAnchor="middle" className="fill-slate-400 text-[13px] font-mono">
                +O&#x2082;
              </text>

              <path
                d="M 535 348 C 480 475, 330 475, 270 348"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth={1.5}
                markerEnd="url(#cycle-arrow)"
              />
              <text x={400} y={450} textAnchor="middle" className="fill-slate-400 text-[13px] font-mono">
                +PUFA
              </text>
              <text x={400} y={468} textAnchor="middle" className="fill-slate-500 text-[11px]">
                membrane fat
              </text>

              <text x={570} y={402} textAnchor="middle" className="fill-slate-500 text-[12px] font-mono">
                LOOH
              </text>
              <text x={570} y={418} textAnchor="middle" className="fill-slate-600 text-[10px]">
                damaged lipid
              </text>
            </motion.g>

            {/* GPX4 shield (beat 3) */}
            <motion.g style={{ opacity: gpx4Opacity }}>
              <motion.path
                d="M 400 395 L 450 415 L 450 445 Q 450 480 400 495 Q 350 480 350 445 L 350 415 Z"
                style={{ fill: shieldFill, stroke: shieldStroke }}
                strokeWidth={2}
              />
              <motion.text
                x={400}
                y={450}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[18px] font-bold"
                style={{ fill: shieldStroke }}
              >
                GPX4
              </motion.text>

              <motion.g style={{ opacity: xOpacity }}>
                <line x1={365} y1={405} x2={435} y2={485} stroke="#ef4444" strokeWidth={4} strokeLinecap="round" />
                <line x1={435} y1={405} x2={365} y2={485} stroke="#ef4444" strokeWidth={4} strokeLinecap="round" />
              </motion.g>
            </motion.g>
          </svg>
        </motion.div>
      </div>

      {/* Text beats overlay — positioned bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 pointer-events-none">
        <div className="reading-width mx-auto">
          <ScrollBeat progress={progress} enter={0.08} hold={0.14} exit={0.14} gone={0.20} enterFrom="left">
            <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 max-w-xl">
              Iron is the most dangerous essential nutrient in biology.
              Essential for energy, oxygen transport, and DNA synthesis.
            </p>
          </ScrollBeat>

          <ScrollBeat progress={progress} enter={0.18} hold={0.28} exit={0.28} gone={0.34} enterFrom="left">
            <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 max-w-xl">
              Free iron catalyzes hydroxyl radicals that attack every cell membrane.
            </p>
          </ScrollBeat>

          <ScrollBeat progress={progress} enter={0.40} hold={0.48} exit={0.48} gone={0.55} enterFrom="left">
            <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 max-w-xl">
              GPX4 is the only brake. When iron outpaces it, the membrane collapses.
            </p>
          </ScrollBeat>
        </div>
      </div>

      {/* "This is ferroptosis." overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <ScrollBeat progress={progress} enter={0.60} hold={0.75} enterFrom="scale">
          <h2 className="font-serif text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
            This is ferroptosis.
          </h2>
        </ScrollBeat>
        <ScrollBeat progress={progress} enter={0.72} hold={0.80} enterFrom="bottom">
          <p className="mt-6 text-lg text-gray-400 max-w-lg">
            Iron-dependent cell death through lipid peroxidation.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Named in 2012. Implicated in every major neurodegenerative disease.
          </p>
        </ScrollBeat>
      </div>
    </div>
  );
}

export function IronBuildupSection() {
  return (
    <ScrollSection id="iron" label="Iron" className="py-0" fullWidth>
      <StickyScrollStage height={300}>
        {(progress) => <IronStage progress={progress} />}
      </StickyScrollStage>
    </ScrollSection>
  );
}
