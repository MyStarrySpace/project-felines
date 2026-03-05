"use client";

import { Container } from "@/components/ui/container";
import { trialCategories, chelationTrifecta } from "@/data/landing/trial-categories";
import { failedTrials } from "@/data/landing/failed-trials";

export default function TrialsPage() {
  return (
    <Container width="full" className="py-12">
      {/* Hero */}
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Trial Analysis
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Why every major trial failed
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          400+ drugs targeted downstream markers. Iron biology explains why
          each category was predicted to fail and what the outcomes actually showed.
        </p>
      </div>

      {/* Validation table */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Category-level predictions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-gray-400">
                <th className="pb-3 pr-4 font-medium">Category</th>
                <th className="pb-3 pr-4 font-medium">Trials</th>
                <th className="pb-3 pr-4 font-medium">Expected outcome</th>
                <th className="pb-3 pr-4 font-medium">Actual outcome</th>
                <th className="pb-3 font-medium">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {trialCategories.map((cat) => (
                <tr
                  key={cat.category}
                  className="border-b border-white/5 text-gray-300"
                >
                  <td className="py-3 pr-4 font-medium text-white">
                    {cat.category}
                  </td>
                  <td className="py-3 pr-4 font-serif text-teal-400">
                    {cat.count}
                  </td>
                  <td className="py-3 pr-4">{cat.expectedOutcome}</td>
                  <td className="py-3 pr-4">{cat.actualOutcome}</td>
                  <td className="py-3 font-serif text-teal-400">
                    {cat.accuracy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Chelation trifecta */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-2">
          The chelation trifecta
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl">
          Iron chelation worked for one disease and worsened two others. The
          pattern only makes sense if the problem is iron maldistribution, not
          iron overload.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {chelationTrifecta.map((row) => (
            <div
              key={row.disease}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white mb-1">
                {row.disease}
              </h3>
              <p className="text-sm text-teal-400 mb-3">
                {row.chelationResult}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {row.ironAnalysis}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Individual trials */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          Individual trial breakdowns
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {failedTrials.map((trial) => (
            <div
              key={trial.trial}
              className="glass-card p-6"
            >
              <h3 className="font-bold text-white mb-1">{trial.trial}</h3>
              <p className="text-xs text-gray-500 mb-2">
                Target: {trial.target}
              </p>
              <p className="text-sm text-red-400/80 mb-3">{trial.result}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {trial.ironAnalysis}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
