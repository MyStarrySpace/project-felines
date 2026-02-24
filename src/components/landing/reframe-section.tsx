"use client";

import { useCallback } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { CountUp } from "@/components/ui/count-up";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { mopContent, convergenceContent } from "@/data/landing/mop-analogy";
import { olContent, tauContent, summaryLine } from "@/data/landing/reframe";

function ReframeStage({ progress }: { progress: MotionValue<number> }) {
  // Horizontal rule scaleX
  const ruleScale = useTransform(progress, [0.30, 0.32], [0, 1]);

  // OL iron concentration format
  const formatMM = useCallback((v: number) => v.toFixed(2) + " mM", []);
  const formatRatio = useCallback((v: number) => v.toFixed(1) + "\u00D7", []);

  return (
    <div className="h-full flex items-center justify-center px-6 sm:px-8">
      <div className="reading-width w-full relative">

        {/* Beat 1: Mop analogy (0.05–0.25) */}
        <ScrollBeat progress={progress} enter={0.05} hold={0.20} exit={0.25} gone={0.30} enterFrom="fade">
          <blockquote className="border-l-2 border-teal-600/50 pl-6">
            {mopContent.analogy.map((line, i) => (
              <ScrollBeat
                key={i}
                progress={progress}
                enter={0.05 + i * 0.03}
                hold={0.11 + i * 0.03}
                enterFrom="bottom"
              >
                <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 mb-4 last:mb-0">
                  {line}
                </p>
              </ScrollBeat>
            ))}
          </blockquote>
          <ScrollBeat progress={progress} enter={0.15} hold={0.20} enterFrom="left">
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {mopContent.reframe}
            </p>
          </ScrollBeat>
        </ScrollBeat>

        {/* Horizontal rule */}
        <ScrollBeat progress={progress} enter={0.29} hold={0.32} exit={0.52} gone={0.56} enterFrom="fade">
          <motion.div
            className="h-px bg-white/10 my-0"
            style={{ scaleX: ruleScale, transformOrigin: "center" }}
          />
        </ScrollBeat>

        {/* Beat 2: Cross-proteinopathy convergence (0.32–0.52) */}
        <ScrollBeat progress={progress} enter={0.32} hold={0.44} exit={0.52} gone={0.56} enterFrom="fade">
          <ScrollBeat progress={progress} enter={0.32} hold={0.38} enterFrom="right">
            <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-8">
              {convergenceContent.headline}
            </h2>
          </ScrollBeat>

          <div className="space-y-4">
            {convergenceContent.proteins.map((p, i) => (
              <ScrollBeat
                key={p.name}
                progress={progress}
                enter={0.34 + i * 0.015}
                hold={0.39 + i * 0.015}
                enterFrom="bottom"
              >
                <div className="border border-white/5 px-6 py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <div className="shrink-0 sm:w-44">
                    <span className="text-base font-semibold text-white">{p.name}</span>
                    <span className="ml-2 text-xs text-gray-500">{p.disease}</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm text-gray-300">{p.ironRole}</p>
                    <p className="text-xs text-gray-500">{p.contrastLabel ?? "Without iron:"} {p.withoutIron}</p>
                  </div>
                </div>
              </ScrollBeat>
            ))}
          </div>

          <ScrollBeat progress={progress} enter={0.44} hold={0.48} enterFrom="fade">
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {convergenceContent.insight}
            </p>
          </ScrollBeat>
        </ScrollBeat>

        {/* Beat 3: Oligodendrocytes (0.56–0.70) */}
        <ScrollBeat progress={progress} enter={0.56} hold={0.66} exit={0.70} gone={0.74} enterFrom="fade">
          <ScrollBeat progress={progress} enter={0.56} hold={0.62} enterFrom="bottom">
            <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-8">
              {olContent.headline}
            </h2>
          </ScrollBeat>

          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-200 tabular-nums sm:text-3xl">
                <CountUp progress={progress} enter={0.58} hold={0.64} from={0} to={3.05} format={formatMM} />
              </span>
              <span className="text-sm text-gray-400">{olContent.stats[0].label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-200 tabular-nums sm:text-3xl">
                <CountUp progress={progress} enter={0.59} hold={0.65} from={0} to={5.4} format={formatRatio} />
              </span>
              <span className="text-sm text-gray-400">{olContent.stats[2].label}</span>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {olContent.failureSteps.map((f, i) => (
              <ScrollBeat
                key={f.title}
                progress={progress}
                enter={0.60 + i * 0.02}
                hold={0.64 + i * 0.02}
                enterFrom="bottom"
              >
                <div className="flex gap-4">
                  <span className="shrink-0 text-sm font-bold text-gray-500 tabular-nums pt-0.5">
                    {i + 1}.
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-gray-400">{f.detail}</p>
                  </div>
                </div>
              </ScrollBeat>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-gray-300">{olContent.insight}</p>
          <p className="mt-2 text-xs text-gray-500">{olContent.source}</p>
        </ScrollBeat>

        {/* Beat 4: Tau (0.74–0.86) */}
        <ScrollBeat progress={progress} enter={0.74} hold={0.82} exit={0.86} gone={0.90} enterFrom="fade">
          <ScrollBeat progress={progress} enter={0.74} hold={0.78} enterFrom="right">
            <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-8">
              {tauContent.headline}
            </h2>
          </ScrollBeat>

          <div className="space-y-4 mb-8">
            {tauContent.narrative.map((line, i) => (
              <ScrollBeat
                key={i}
                progress={progress}
                enter={0.76 + i * 0.015}
                hold={0.79 + i * 0.015}
                enterFrom="fade"
              >
                <p className="text-lg leading-relaxed text-gray-300">{line}</p>
              </ScrollBeat>
            ))}
          </div>

          <ScrollBeat progress={progress} enter={0.80} hold={0.84} enterFrom="bottom">
            <div className="border border-white/5 p-6 mb-8">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-3">
                {tauContent.feedbackLoop.title}
              </p>
              <ol className="list-decimal list-inside space-y-1">
                {tauContent.feedbackLoop.steps.map((s, i) => (
                  <li key={i} className="text-sm text-gray-300">{s}</li>
                ))}
              </ol>
            </div>
          </ScrollBeat>

          <p className="text-lg leading-relaxed text-gray-300">{tauContent.insight}</p>
          <p className="mt-2 text-xs text-gray-500">{tauContent.source}</p>
        </ScrollBeat>

        {/* Beat 5: Summary (0.90–1.00) */}
        <ScrollBeat progress={progress} enter={0.90} hold={0.97} enterFrom="scale">
          <p className="font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.15] tracking-[-0.02em] text-white text-center">
            {summaryLine.text}
          </p>
        </ScrollBeat>
      </div>
    </div>
  );
}

function ReframeFlowing() {
  return (
    <div className="py-24 space-y-20 px-6">
      {/* Beat 1: Mop analogy */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <blockquote className="border-l-2 border-teal-600/50 pl-6">
            {mopContent.analogy.map((line, i) => (
              <p key={i} className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 mb-4 last:mb-0">
                {line}
              </p>
            ))}
          </blockquote>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            {mopContent.reframe}
          </p>
        </div>
      </ScrollAnimate>

      <div className="reading-width mx-auto">
        <div className="h-px bg-white/10" />
      </div>

      {/* Beat 2: Cross-proteinopathy convergence */}
      <ScrollAnimate enterFrom="right">
        <div className="reading-width mx-auto">
          <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-8">
            {convergenceContent.headline}
          </h2>
        </div>
      </ScrollAnimate>

      <div className="reading-width mx-auto space-y-4 px-6">
        {convergenceContent.proteins.map((p, i) => (
          <ScrollAnimate key={p.name} enterFrom="bottom">
            <div className="border border-white/5 px-6 py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <div className="shrink-0 sm:w-44">
                <span className="text-base font-semibold text-white">{p.name}</span>
                <span className="ml-2 text-xs text-gray-500">{p.disease}</span>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm text-gray-300">{p.ironRole}</p>
                <p className="text-xs text-gray-500">Without iron: {p.withoutIron}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>

      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <p className="text-lg leading-relaxed text-gray-300">
            {convergenceContent.insight}
          </p>
        </div>
      </ScrollAnimate>

      {/* Beat 3: Oligodendrocytes */}
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-8">
            {olContent.headline}
          </h2>

          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-200 tabular-nums sm:text-3xl">
                3.05 mM
              </span>
              <span className="text-sm text-gray-400">{olContent.stats[0].label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-200 tabular-nums sm:text-3xl">
                5.4×
              </span>
              <span className="text-sm text-gray-400">{olContent.stats[2].label}</span>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {olContent.failureSteps.map((f, i) => (
              <div key={f.title} className="flex gap-4">
                <span className="shrink-0 text-sm font-bold text-gray-500 tabular-nums pt-0.5">
                  {i + 1}.
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-sm text-gray-400">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-gray-300">{olContent.insight}</p>
          <p className="mt-2 text-xs text-gray-500">{olContent.source}</p>
        </div>
      </ScrollAnimate>

      {/* Beat 4: Tau */}
      <ScrollAnimate enterFrom="right">
        <div className="reading-width mx-auto">
          <h2 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] text-white mb-8">
            {tauContent.headline}
          </h2>

          <div className="space-y-4 mb-8">
            {tauContent.narrative.map((line, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-300">{line}</p>
            ))}
          </div>

          <div className="border border-white/5 p-6 mb-8">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-3">
              {tauContent.feedbackLoop.title}
            </p>
            <ol className="list-decimal list-inside space-y-1">
              {tauContent.feedbackLoop.steps.map((s, i) => (
                <li key={i} className="text-sm text-gray-300">{s}</li>
              ))}
            </ol>
          </div>

          <p className="text-lg leading-relaxed text-gray-300">{tauContent.insight}</p>
          <p className="mt-2 text-xs text-gray-500">{tauContent.source}</p>
        </div>
      </ScrollAnimate>

      {/* Beat 5: Summary */}
      <ScrollAnimate enterFrom="scale">
        <div className="reading-width mx-auto">
          <p className="font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.15] tracking-[-0.02em] text-white text-center">
            {summaryLine.text}
          </p>
        </div>
      </ScrollAnimate>
    </div>
  );
}

export function ReframeSection() {
  return (
    <ScrollSection id="reframe" label="Reframe" className="py-0" fullWidth>
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={500}>
          {(progress) => <ReframeStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <ReframeFlowing />
      </div>
    </ScrollSection>
  );
}
