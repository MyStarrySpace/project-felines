"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/ui/container";
import { diseases } from "@/data/landing/diseases";
import { diseaseEntryPoints } from "@/data/landing/entry-points";

const slugToDisease: Record<string, { name: string; entryKey: string }> = {
  alzheimers: { name: "Alzheimer\u2019s Disease", entryKey: "Alzheimer's" },
  parkinsons: { name: "Parkinson\u2019s Disease", entryKey: "Parkinson's" },
  als: { name: "ALS", entryKey: "ALS" },
  ms: { name: "Multiple Sclerosis", entryKey: "MS" },
  "long-covid": { name: "Long COVID", entryKey: "Long COVID" },
  prion: { name: "Prion Disease", entryKey: "Prion" },
};

export default function DiseasePage() {
  const { disease: slug } = useParams<{ disease: string }>();
  const mapping = slugToDisease[slug];

  if (!mapping) {
    return (
      <Container width="reading" className="py-12">
        <h1 className="text-2xl font-bold text-white">Disease not found</h1>
        <p className="mt-2 text-gray-400">Unknown: {slug}</p>
      </Container>
    );
  }

  const card = diseases.find((d) => d.name === mapping.name);
  const entry = diseaseEntryPoints.find((e) => e.disease === mapping.entryKey);

  return (
    <Container width="reading" className="py-12">
      <h1 className="text-3xl font-bold text-white sm:text-4xl mb-2">
        {mapping.name}
      </h1>

      {card && (
        <div className="flex items-baseline gap-3 mb-8">
          <span className="text-3xl font-bold text-teal-400 font-mono">
            {card.stat}
          </span>
          <span className="text-gray-500">{card.statLabel}</span>
        </div>
      )}

      {card && (
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          {card.explanation}
        </p>
      )}

      {entry && (
        <section className="glass-card p-6 mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-4">
            FELINE entry points
          </h2>
          <div className="space-y-3">
            {entry.layers.map((layer) => (
              <div key={layer} className="flex items-start gap-3">
                <span className="text-teal-400 font-mono font-bold text-lg shrink-0 w-8">
                  {layer}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {entry.tooltips[layer]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
