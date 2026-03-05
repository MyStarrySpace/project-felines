"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  hypothesis,
  convergenceFactors,
  keyEvidence,
  topStrategies,
  biomarkerComparison,
  criticalTests,
  predictedOutcomes,
  roadmap,
  ironMemoryConnection,
  openQuestions,
} from "@/data/biosensor/monocyte-biosensor";

export default function BiosensorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-white/5 py-16 px-6">
        <Container width="reading">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
            Original Proposal
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            {hypothesis.headline}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {hypothesis.core}
          </p>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-3xl font-serif text-teal-400">
                {hypothesis.cost}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {hypothesis.comparison}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Key insight callout */}
      <section className="border-b border-white/5 py-10 px-6">
        <Container width="reading">
          <div className="glass-card p-6 border-l-2 border-teal-400/40">
            <p className="text-gray-300 leading-relaxed">
              {hypothesis.keyInsight}
            </p>
          </div>
        </Container>
      </section>

      {/* Convergence */}
      <section className="border-b border-white/5 py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            Every AD risk factor converges on monocyte iron
          </h2>
          <p className="text-gray-400 mb-8">
            Six independent categories of Alzheimer&apos;s risk. One common
            denominator.
          </p>
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {convergenceFactors.map((f) => (
              <motion.div key={f.factor} variants={fadeInUp} className="glass-card p-5">
                <div className="flex items-start gap-4">
                  <span className="text-teal-400 font-serif font-bold text-lg shrink-0 w-auto">
                    {f.factor}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1 mb-2">{f.adRisk}</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {f.ironLink}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Evidence */}
      <section className="border-b border-white/5 py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            Existing evidence
          </h2>
          <p className="text-gray-400 mb-8">
            Seven independent research groups have already published pieces of
            this puzzle.
          </p>
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {keyEvidence.map((s) => (
              <motion.div key={s.id} variants={fadeInUp} className="glass-card p-5">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <p className="text-white font-medium">{s.title}</p>
                  <span className="text-xs text-gray-500 shrink-0">
                    {s.authors} {s.year}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-2">
                  {s.finding}
                </p>
                <p className="text-xs text-teal-400/70 leading-relaxed">
                  {s.significance}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Assay strategies */}
      <section className="border-b border-white/5 py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            Three practical assay strategies
          </h2>
          <p className="text-gray-400 mb-8">
            From off-the-shelf to functional kinetics. Eight strategies were
            evaluated; these three are the most actionable.
          </p>
          <div className="space-y-6">
            {topStrategies.map((s) => (
              <div key={s.id} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-teal-400 border border-teal-400/20 rounded px-2 py-0.5">
                    {s.label}
                  </span>
                  <h3 className="text-white font-medium">{s.name}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {s.principle}
                </p>
                <div className="grid gap-3 sm:grid-cols-3 text-sm">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Advantage
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {s.advantage}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Limitation
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {s.limitation}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Readiness
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {s.readiness}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Biomarker comparison */}
      <section className="border-b border-white/5 py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            Biomarker landscape
          </h2>
          <p className="text-gray-400 mb-8">
            How monocyte iron compares to existing AD biomarkers.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-500 font-medium py-3 pr-4">
                    Biomarker
                  </th>
                  <th className="text-left text-gray-500 font-medium py-3 pr-4">
                    Timing
                  </th>
                  <th className="text-left text-gray-500 font-medium py-3 pr-4">
                    Cost
                  </th>
                  <th className="text-left text-gray-500 font-medium py-3">
                    Access
                  </th>
                </tr>
              </thead>
              <tbody>
                {biomarkerComparison.map((b) => (
                  <tr key={b.name} className="border-b border-white/5">
                    <td className="py-3 pr-4">
                      <span
                        className={`font-medium ${
                          b.name === "Monocyte iron"
                            ? "text-teal-400"
                            : "text-white"
                        }`}
                      >
                        {b.name}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {b.type}
                      </span>
                    </td>
                    <td className="text-gray-400 py-3 pr-4">{b.timing}</td>
                    <td className="text-gray-400 py-3 pr-4">{b.cost}</td>
                    <td className="text-gray-400 py-3">{b.accessibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Critical tests */}
      <section className="border-b border-white/5 py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            Two critical test populations
          </h2>
          <p className="text-gray-400 mb-8">
            Long COVID and Gulf War Illness provide clean tests of the FELINE
            causal ordering. Both have chronic neuroinflammation and FELINE
            layer disruptions, but it is unknown whether amyloid pathology has
            started.
          </p>
          <div className="space-y-6 mb-10">
            {criticalTests.map((t) => (
              <div key={t.population} className="glass-card p-6">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-white font-medium">{t.population}</h3>
                  <span className="text-xs text-gray-500 shrink-0">
                    {t.size}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  {t.rationale}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {t.felineOverlap.map((f) => (
                    <span
                      key={f}
                      className="text-xs border border-white/5 rounded px-2 py-0.5 text-gray-400"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-teal-400/70 leading-relaxed">
                  {t.prediction}
                </p>
              </div>
            ))}
          </div>

          {/* Predicted outcomes table */}
          <h3 className="text-white font-medium mb-4">Predicted outcomes</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-500 font-medium py-3 pr-4 w-8">
                    #
                  </th>
                  <th className="text-left text-gray-500 font-medium py-3 pr-4">
                    Monocyte iron
                  </th>
                  <th className="text-left text-gray-500 font-medium py-3 pr-4">
                    SMOC1
                  </th>
                  <th className="text-left text-gray-500 font-medium py-3 pr-4">
                    Interpretation
                  </th>
                  <th className="text-left text-gray-500 font-medium py-3">
                    FELINE
                  </th>
                </tr>
              </thead>
              <tbody>
                {predictedOutcomes.map((o) => (
                  <tr key={o.label} className="border-b border-white/5">
                    <td className="text-teal-400 font-serif font-bold py-3 pr-4">
                      {o.label}
                    </td>
                    <td
                      className={`py-3 pr-4 ${
                        o.monocyteIron === "Abnormal"
                          ? "text-amber-400"
                          : "text-gray-400"
                      }`}
                    >
                      {o.monocyteIron}
                    </td>
                    <td
                      className={`py-3 pr-4 ${
                        o.smoc1 === "Abnormal"
                          ? "text-amber-400"
                          : "text-gray-400"
                      }`}
                    >
                      {o.smoc1}
                    </td>
                    <td className="text-gray-300 py-3 pr-4">
                      {o.interpretation}
                    </td>
                    <td className="text-gray-400 py-3">{o.felineStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Roadmap */}
      <section className="border-b border-white/5 py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            Experimental roadmap
          </h2>
          <p className="text-gray-400 mb-8">
            Four phases from proof-of-concept to population screening.
          </p>
          <div className="space-y-6">
            {roadmap.map((p) => (
              <div key={p.phase} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-teal-400 font-serif font-bold text-xl">
                    {p.phase}
                  </span>
                  <div>
                    <h3 className="text-white font-medium">{p.title}</h3>
                    <p className="text-xs text-gray-500">
                      {p.cost} &middot; {p.timeline}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  {p.objective}
                </p>
                <ul className="space-y-1.5">
                  {p.keySteps.map((step, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-gray-600"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Iron → Memory connection */}
      <section className="border-b border-white/5 py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            {ironMemoryConnection.headline}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            {ironMemoryConnection.intro}
          </p>
          <div className="space-y-4 mb-8">
            {ironMemoryConnection.mechanisms.map((m) => (
              <div key={m.title} className="glass-card p-5">
                <h3 className="text-white font-medium mb-2">{m.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="glass-card p-6 border-l-2 border-teal-400/40">
            <p className="text-gray-300 leading-relaxed text-sm">
              {ironMemoryConnection.implication}
            </p>
          </div>
        </Container>
      </section>

      {/* Open questions */}
      <section className="py-12 px-6">
        <Container width="reading">
          <h2 className="font-serif text-2xl text-white mb-2">
            Open questions and risks
          </h2>
          <p className="text-gray-400 mb-8">
            Honest assessment of what could go wrong.
          </p>
          <div className="space-y-4">
            {openQuestions.map((q) => (
              <div key={q.question} className="glass-card p-5">
                <h3 className="text-white font-medium mb-2">{q.question}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
