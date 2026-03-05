"use client";

import { Container } from "@/components/ui/container";
import { diseases } from "@/data/landing/diseases";
import { diseaseEntryPoints, defenseLayers } from "@/data/landing/entry-points";
import Link from "next/link";

const diseaseSlugMap: Record<string, string> = {
  "Alzheimer\u2019s Disease": "alzheimers",
  "Parkinson\u2019s Disease": "parkinsons",
  "Long COVID": "long-covid",
  ALS: "als",
  "Multiple Sclerosis": "ms",
  "Prion Disease": "prion",
};

const entrySlugMap: Record<string, string> = {
  "Alzheimer's": "alzheimers",
  "Parkinson's": "parkinsons",
  "Long COVID": "long-covid",
  ALS: "als",
  MS: "ms",
  Prion: "prion",
};

export default function DiseasesOverview() {
  return (
    <Container width="full" className="py-12">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Disease Profiles
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Same cascade, different entry points
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Each disease enters the ferroptosis cascade through different defense
          layers, but they all converge on iron-driven oligodendrocyte death.
        </p>
      </div>

      {/* Entry point matrix */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-6">
          Entry point matrix
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-3 pr-4 text-gray-400 font-medium">
                  Disease
                </th>
                {defenseLayers.map((layer) => (
                  <th
                    key={layer}
                    className="pb-3 px-4 text-center text-teal-400 font-serif font-bold"
                  >
                    {layer}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {diseaseEntryPoints.map((entry) => (
                <tr
                  key={entry.disease}
                  className="border-b border-white/5"
                >
                  <td className="py-3 pr-4 font-medium text-white">
                    <Link
                      href={`/explore/diseases/${entrySlugMap[entry.disease] || entry.disease.toLowerCase()}`}
                      className="hover:text-teal-400 transition-colors"
                    >
                      {entry.disease}
                    </Link>
                  </td>
                  {defenseLayers.map((layer) => (
                    <td key={layer} className="py-3 px-4 text-center">
                      {entry.layers.includes(layer) ? (
                        <span
                          className="inline-block w-3 h-3 rounded-full bg-teal-400"
                          title={entry.tooltips[layer]}
                        />
                      ) : (
                        <span className="inline-block w-3 h-3 rounded-full bg-white/5" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Disease cards */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6">
          Disease profiles
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diseases.map((disease) => {
            const slug = diseaseSlugMap[disease.name];
            return (
              <Link
                key={disease.name}
                href={slug ? `/explore/diseases/${slug}` : "#"}
                className="glass-card glass-card-hover p-6 group block"
              >
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                  {disease.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-teal-400 font-serif">
                    {disease.stat}
                  </span>
                  <span className="text-sm text-gray-500">
                    {disease.statLabel}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {disease.explanation}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
