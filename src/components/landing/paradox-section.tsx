"use client";

import { useCallback } from "react";
import { type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { CountUp } from "@/components/ui/count-up";
import { deferiproneContent, mislocalizationContent } from "@/data/landing/findings";
import { trialContent } from "@/data/landing/mop-analogy";

function ParadoxStage({ progress }: { progress: MotionValue<number> }) {
  const formatStat = useCallback(
    (v: number) => v.toFixed(2),
    []
  );

  return (
    <div className="h-full flex items-center justify-center px-6 sm:px-8">
      <div className="reading-width w-full relative">

        {/* Beat 1: Deferiprone (0.05–0.30) */}
        <ScrollBeat progress={progress} enter={0.05} hold={0.20} exit={0.30} gone={0.36} enterFrom="fade">
          <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-white mb-8">
            {deferiproneContent.headline}
          </h2>

          <div className="mb-6">
            <span className="font-mono text-[clamp(3rem,10vw,5rem)] text-red-400 leading-none">
              <CountUp
                progress={progress}
                enter={0.08}
                hold={0.18}
                from={0}
                to={-0.80}
                format={formatStat}
              />
            </span>
            <p className="text-sm text-gray-400 mt-1">
              {deferiproneContent.stat.label}
            </p>
            {deferiproneContent.stat.source && (
              <p className="text-xs text-gray-500 mt-1">
                {deferiproneContent.stat.source.label}
              </p>
            )}
          </div>

          <ScrollBeat progress={progress} enter={0.12} hold={0.18} enterFrom="left">
            <p className="text-sm text-gray-500 mb-6">
              {deferiproneContent.cohenD}
            </p>
            <div className="border-l-2 border-red-600/50 pl-6 max-w-lg">
              <p className="text-lg leading-relaxed text-gray-300">
                {deferiproneContent.body}
              </p>
            </div>
          </ScrollBeat>
        </ScrollBeat>

        {/* Beat 2: Maldistribution (0.36–0.65) */}
        <ScrollBeat progress={progress} enter={0.36} hold={0.50} exit={0.65} gone={0.70} enterFrom="fade">
          <ScrollBeat progress={progress} enter={0.36} hold={0.42} enterFrom="right">
            <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-8">
              {mislocalizationContent.headline}
            </h2>
          </ScrollBeat>

          <div className="grid gap-6 sm:grid-cols-2 mb-8">
            {mislocalizationContent.columns.map((col, i) => (
              <ScrollBeat
                key={col.label}
                progress={progress}
                enter={0.38 + (i === 0 ? 0 : 0.02)}
                hold={0.44 + (i === 0 ? 0 : 0.02)}
                enterFrom={i === 0 ? "left" : "right"}
              >
                <div className="border border-white/5 p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
                    {col.label}
                  </p>
                  <p className="text-lg font-semibold text-white mb-4">{col.view}</p>
                  <ul className="space-y-2">
                    {col.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-gray-500">&rarr;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollBeat>
            ))}
          </div>

          <ScrollBeat progress={progress} enter={0.46} hold={0.52} enterFrom="bottom">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-white/5 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
                  Where cells need iron
                </p>
                {mislocalizationContent.functionalIron.map((item) => (
                  <p key={item} className="text-sm text-gray-300">{item}</p>
                ))}
              </div>
              <div className="border border-white/5 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
                  Where iron gets trapped
                </p>
                {mislocalizationContent.trappedIron.map((item) => (
                  <p key={item} className="text-sm text-gray-300">{item}</p>
                ))}
              </div>
            </div>
          </ScrollBeat>
        </ScrollBeat>

        {/* Beat 3: Trial results (0.70–0.95) */}
        <ScrollBeat progress={progress} enter={0.70} hold={0.82} enterFrom="fade">
          <ScrollBeat progress={progress} enter={0.70} hold={0.76} enterFrom="bottom">
            <h2 className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.2] text-white mb-8">
              {trialContent.headline}
            </h2>
          </ScrollBeat>

          <div className="space-y-2">
            {trialContent.rows.map((row, i) => (
              <ScrollBeat
                key={row.drug}
                progress={progress}
                enter={0.74 + i * 0.03}
                hold={0.78 + i * 0.03}
                enterFrom="bottom"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border border-white/5 p-4">
                  <div className="sm:w-28 shrink-0">
                    <p className="text-sm font-bold text-white">{row.drug}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400">{row.mechanism}</p>
                  </div>
                  <div className="sm:w-32 shrink-0 sm:text-right">
                    <span className={`text-sm font-bold ${
                      row.resultType === "positive"
                        ? "text-teal-400"
                        : row.resultType === "negative"
                          ? "text-red-400"
                          : "text-gray-400"
                    }`}>
                      {row.result}
                    </span>
                  </div>
                </div>
              </ScrollBeat>
            ))}
          </div>

          <div className="mt-4 text-xs text-gray-500 space-x-4">
            {trialContent.sources.map((src) => (
              <span key={src}>{src}</span>
            ))}
          </div>
        </ScrollBeat>
      </div>
    </div>
  );
}

export function ParadoxSection() {
  return (
    <ScrollSection id="paradox" label="Paradox" className="py-0" fullWidth>
      <StickyScrollStage height={250}>
        {(progress) => <ParadoxStage progress={progress} />}
      </StickyScrollStage>
    </ScrollSection>
  );
}
