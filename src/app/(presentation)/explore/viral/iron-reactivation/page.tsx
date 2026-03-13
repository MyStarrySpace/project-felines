"use client";

import { Container } from "@/components/ui/container";
import { Expandable } from "@/components/ui/expandable";
import { useRegisterSections } from "@/components/providers/explore-sections-context";
import {
  viralReactivationHero,
  latencyBackground,
  jmjcMechanism,
  gshMechanism,
  grMechanism,
  heterochromatinMechanism,
  amplificationSpiral,
  exportFailureTable,
  ageWindowTable,
  ageWindowExplanation,
  epidemiologicalStudies,
  cairnsCascade,
  crossVirusTable,
  testablePredictions,
  type ViralMechanismSection,
} from "@/data/landing/viral-reactivation";
import type { MechanismStep } from "@/data/landing/iron-cascades";

/* ── Mechanism Step Card ─────────────────────────────────────────────── */

function MechanismStepCard({ step }: { step: MechanismStep }) {
  return (
    <Expandable title={`${step.step}. ${step.title}`} variant="dark">
      <div className="space-y-3">
        <p className="text-sm text-gray-300 leading-relaxed">{step.body}</p>
        {step.detail && (
          <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
        )}
        {step.keyPaper && (
          <p className="text-xs font-medium text-teal-400 mt-2">
            {step.keyPaper}
          </p>
        )}
        {step.quote && (
          <blockquote className="text-xs text-gray-500 italic border-l-2 border-white/10 pl-3 mt-2">
            &ldquo;{step.quote}&rdquo;
          </blockquote>
        )}
      </div>
    </Expandable>
  );
}

/* ── Mechanism Section Block ─────────────────────────────────────────── */

function MechanismSectionBlock({
  section,
}: {
  section: ViralMechanismSection;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="py-16 px-6"
    >
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          {section.kicker}
        </p>
        <h2
          id={`${section.id}-heading`}
          className="text-2xl font-bold text-white mb-2"
        >
          {section.title}
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">{section.subtitle}</p>

        <div className="max-w-3xl space-y-3">
          {section.mechanismSteps.map((step) => (
            <MechanismStepCard key={step.step} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Hero/Intro ──────────────────────────────────────────────────────── */

function IntroSection() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className="py-16 px-6">
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          {viralReactivationHero.kicker}
        </p>
        <h1
          id="intro-heading"
          className="font-serif text-4xl font-bold text-white sm:text-5xl"
        >
          {viralReactivationHero.title}
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          {viralReactivationHero.subtitle}
        </p>

        {/* Visual: One master loop diagram */}
        <div className="mt-12 max-w-xl">
          <div className="glass-card p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-4">
              Conventional model: 3 independent loops
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
              <span className="bg-white/5 border border-white/10 px-3 py-1.5">
                Iron loop
              </span>
              <span className="text-gray-500">+</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5">
                Tau loop
              </span>
              <span className="text-gray-500">+</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5">
                Virus loop
              </span>
            </div>

            <p className="text-xs font-medium uppercase tracking-wide text-teal-400 mb-4">
              FELINES model: 1 master loop + 2 amplifiers
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-teal-400/10 border border-teal-400/30 px-3 py-1.5 text-teal-400 font-medium">
                Iron (master)
              </span>
              <span className="text-gray-500">&rarr;</span>
              <div className="flex flex-col gap-1.5">
                <span className="bg-white/5 border border-white/10 px-3 py-1.5 text-gray-400">
                  Tau amplifier
                </span>
                <span className="bg-white/5 border border-white/10 px-3 py-1.5 text-gray-400">
                  Virus amplifier
                </span>
              </div>
              <span className="text-gray-500">&rarr;</span>
              <span className="text-xs text-gray-500">
                both feed
                <br />
                back to iron
              </span>
            </div>
          </div>
        </div>

        {/* Jump-to nav */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
          {[jmjcMechanism, gshMechanism, grMechanism, heterochromatinMechanism].map(
            (section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="glass-card p-5 transition-colors hover:border-teal-400/30"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-teal-400 mb-2">
                  {section.kicker}
                </p>
                <p className="text-sm font-medium text-white">
                  {section.title}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {section.mechanismSteps.length} steps
                </p>
              </a>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

/* ── Latency Background ──────────────────────────────────────────────── */

function LatencySection() {
  return (
    <section
      id="latency"
      aria-labelledby="latency-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="latency-heading"
          className="text-2xl font-bold text-white mb-6"
        >
          {latencyBackground.title}
        </h2>
        <div className="max-w-2xl space-y-4">
          {latencyBackground.points.map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-gray-500">
                {i + 1}
              </span>
              <p className="text-sm text-gray-300 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Amplification Spiral ────────────────────────────────────────────── */

function AmplificationSection() {
  return (
    <section
      id="amplification"
      aria-labelledby="amplification-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="amplification-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          The amplification spiral
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Iron export failure compounds all four mechanisms. Tau aggregation and
          hepcidin surges both trap iron, creating a feed-forward loop.
        </p>

        {/* Cycle diagram */}
        <div className="my-8 max-w-2xl mx-auto">
          <div className="glass-card p-8">
            <div className="relative mx-auto" style={{ width: 320, height: 320 }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xs text-gray-500 text-center leading-tight">
                  Feed-forward
                  <br />
                  loop
                </p>
              </div>

              {amplificationSpiral.map((step, i) => {
                const angle =
                  (i / amplificationSpiral.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 130;
                const x = 160 + radius * Math.cos(angle);
                const y = 160 + radius * Math.sin(angle);

                return (
                  <div
                    key={step.id}
                    className="absolute flex items-center justify-center"
                    style={{
                      left: x - 55,
                      top: y - 18,
                      width: 110,
                      height: 36,
                    }}
                  >
                    <span className="bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs font-medium text-white text-center leading-tight whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
                );
              })}

              <svg
                className="absolute inset-0"
                width={320}
                height={320}
                viewBox="0 0 320 320"
                aria-hidden="true"
              >
                {amplificationSpiral.map((_, i) => {
                  const from =
                    (i / amplificationSpiral.length) * 2 * Math.PI - Math.PI / 2;
                  const to =
                    ((i + 1) / amplificationSpiral.length) * 2 * Math.PI -
                    Math.PI / 2;
                  const r = 100;
                  const midAngle = (from + to) / 2;
                  const x1 = 160 + r * Math.cos(from);
                  const y1 = 160 + r * Math.sin(from);
                  const mx = 160 + (r - 10) * Math.cos(midAngle);
                  const my = 160 + (r - 10) * Math.sin(midAngle);
                  const x2 = 160 + r * Math.cos(to);
                  const y2 = 160 + r * Math.sin(to);

                  return (
                    <path
                      key={i}
                      d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                      stroke="rgba(45,212,191,0.3)"
                      strokeWidth="1.5"
                      fill="none"
                      markerEnd="url(#viral-arrowhead)"
                    />
                  );
                })}
                <defs>
                  <marker
                    id="viral-arrowhead"
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 8 3, 0 6"
                      fill="rgba(45,212,191,0.5)"
                    />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Export failure table */}
        <div className="mt-10 max-w-4xl">
          <h3 className="text-lg font-bold text-white mb-4">
            Export failure modes
          </h3>
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 text-left font-medium text-gray-400">
                    Export failure
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-400">
                    Iron consequence
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-400">
                    Reactivation effect
                  </th>
                </tr>
              </thead>
              <tbody>
                {exportFailureTable.map((row, i) => (
                  <tr
                    key={row.exportFailure}
                    className={
                      i < exportFailureTable.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }
                  >
                    <td className="px-4 py-3 font-medium text-white text-xs">
                      {row.exportFailure}
                    </td>
                    <td className="px-4 py-3 text-gray-300 text-xs">
                      {row.ironConsequence}
                    </td>
                    <td className="px-4 py-3 text-xs text-red-400">
                      {row.reactivationEffect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Age Window ──────────────────────────────────────────────────────── */

function AgeWindowSection() {
  return (
    <section
      id="age-window"
      aria-labelledby="age-window-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="age-window-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          The age window
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Shingles, Alzheimer&apos;s, Parkinson&apos;s, and peak basal ganglia
          iron all converge on the same age window. Under FELINES, this is not
          coincidence.
        </p>

        <div className="max-w-3xl">
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-3 text-left font-medium text-gray-400">
                    Phenomenon
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-400">
                    Age threshold
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-400">
                    References
                  </th>
                </tr>
              </thead>
              <tbody>
                {ageWindowTable.map((row, i) => (
                  <tr
                    key={row.phenomenon}
                    className={
                      i < ageWindowTable.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }
                  >
                    <td className="px-4 py-3 font-medium text-white text-xs">
                      {row.phenomenon}
                    </td>
                    <td className="px-4 py-3 text-teal-400 text-xs font-serif">
                      {row.ageThreshold}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      {row.references}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="glass-card p-6 mt-6">
            <p className="text-sm text-gray-300 leading-relaxed">
              {ageWindowExplanation}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Epidemiological Evidence ────────────────────────────────────────── */

function EpidemiologySection() {
  return (
    <section
      id="epidemiology"
      aria-labelledby="epidemiology-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="epidemiology-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          Epidemiological evidence
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          If viral reactivation drives neurodegeneration, preventing
          reactivation should reduce dementia. Five independent studies confirm
          this prediction.
        </p>

        <div className="max-w-3xl space-y-4">
          {epidemiologicalStudies.map((study) => (
            <div key={study.study} className="glass-card p-6">
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-xs font-medium text-teal-400">
                  {study.study}
                </p>
                <span className="text-xs text-gray-500">
                  {study.journal}, {study.year}
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {study.finding}
              </p>
              {study.detail && (
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {study.detail}
                </p>
              )}
            </div>
          ))}

          {/* Cairns cascade highlight */}
          <div className="glass-card p-6 border-teal-400/20">
            <p className="text-xs font-medium uppercase tracking-wide text-teal-400 mb-3">
              {cairnsCascade.title}
            </p>
            <p className="text-xs text-gray-500 mb-2">
              {cairnsCascade.study}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {cairnsCascade.finding}
            </p>
            {cairnsCascade.detail && (
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                {cairnsCascade.detail}
              </p>
            )}
            <div className="border-t border-white/10 pt-3 mt-3">
              <p className="text-xs font-medium text-teal-400 mb-1">
                FELINES interpretation
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {cairnsCascade.felineInterpretation}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Cross-Virus Comparison ──────────────────────────────────────────── */

function CrossVirusSection() {
  return (
    <section
      id="cross-virus"
      aria-labelledby="cross-virus-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="cross-virus-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          Cross-virus comparison
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Iron-dependent reactivation is not unique to HSV-1. Every major
          human herpesvirus latent in the nervous system shares this
          vulnerability.
        </p>

        <div className="max-w-5xl overflow-x-auto border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left font-medium text-gray-400">
                  Virus
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-400">
                  Latency site
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-400">
                  Disease
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-400">
                  Target tissue
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-400">
                  Iron link
                </th>
              </tr>
            </thead>
            <tbody>
              {crossVirusTable.map((row, i) => (
                <tr
                  key={row.virus}
                  className={
                    i < crossVirusTable.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }
                >
                  <td className="px-4 py-3 font-medium text-white text-xs whitespace-nowrap">
                    {row.virus}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-xs">
                    {row.latencySite}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-xs">
                    {row.disease}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-xs">
                    {row.targetTissue}
                  </td>
                  <td className="px-4 py-3 text-xs text-teal-400">
                    {row.ironLink}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* ── Testable Predictions ────────────────────────────────────────────── */

function PredictionsSection() {
  return (
    <section
      id="predictions"
      aria-labelledby="predictions-heading"
      className="py-16 px-6 pb-24"
    >
      <Container width="full">
        <h2
          id="predictions-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          Testable predictions
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          If iron-dependent viral reactivation is real, each prediction below
          should hold. Several are testable with existing tools and cohorts.
        </p>

        <div className="max-w-3xl grid gap-4 sm:grid-cols-2">
          {testablePredictions.map((pred) => (
            <div key={pred.number} className="glass-card p-5">
              <p className="text-xs font-medium text-teal-400 mb-2">
                Prediction {pred.number}
              </p>
              <p className="text-sm font-medium text-white mb-3 leading-relaxed">
                {pred.prediction}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {pred.rationale}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

const PAGE_SECTIONS = [
  { id: "intro", label: "Overview" },
  { id: "latency", label: "Latency" },
  { id: "jmjc", label: "JmjC enzymes" },
  { id: "gsh", label: "GSH depletion" },
  { id: "gr", label: "GR activation" },
  { id: "heterochromatin", label: "Heterochromatin" },
  { id: "amplification", label: "Amplification" },
  { id: "age-window", label: "Age window" },
  { id: "epidemiology", label: "Evidence" },
  { id: "cross-virus", label: "Cross-virus" },
  { id: "predictions", label: "Predictions" },
];

export default function IronReactivationPage() {
  useRegisterSections(PAGE_SECTIONS);

  return (
    <div>
      <IntroSection />
      <LatencySection />
      <MechanismSectionBlock section={jmjcMechanism} />
      <MechanismSectionBlock section={gshMechanism} />
      <MechanismSectionBlock section={grMechanism} />
      <MechanismSectionBlock section={heterochromatinMechanism} />
      <AmplificationSection />
      <AgeWindowSection />
      <EpidemiologySection />
      <CrossVirusSection />
      <PredictionsSection />
    </div>
  );
}
