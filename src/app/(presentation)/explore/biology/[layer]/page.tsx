"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/ui/container";
import { pillarDeepDives } from "@/data/landing/pillars";

const slugToLetter: Record<string, string> = {
  fe: "Fe",
  lysosome: "L",
  insulation: "I",
  neurovascular: "N",
  export: "E",
};

export default function LayerPage() {
  const { layer } = useParams<{ layer: string }>();
  const letter = slugToLetter[layer];
  const pillar = pillarDeepDives.find((p) => p.letter === letter);

  if (!pillar) {
    return (
      <Container width="reading" className="py-12">
        <h1 className="text-2xl font-bold text-white">Layer not found</h1>
        <p className="mt-2 text-gray-400">
          Unknown layer: {layer}
        </p>
      </Container>
    );
  }

  return (
    <Container width="reading" className="py-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl font-bold text-teal-400 font-serif">
          {pillar.letter}
        </span>
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {pillar.title}
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        {pillar.description}
      </p>

      <div className="space-y-8">
        <section className="glass-card p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-2">
            How this layer fails
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {pillar.failureMode}
          </p>
        </section>

        <section className="glass-card p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-2">
            Supporting evidence
          </h2>
          <p className="text-gray-300 leading-relaxed">{pillar.evidence}</p>
        </section>

        <section className="glass-card p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-2">
            Therapeutic target
          </h2>
          <p className="text-teal-400/80 leading-relaxed">
            {pillar.therapeuticTarget}
          </p>
        </section>

        {pillar.entryFor.length > 0 && (
          <section className="glass-card p-6">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-2">
              Primary entry point for
            </h2>
            <div className="flex flex-wrap gap-2">
              {pillar.entryFor.map((disease) => (
                <span
                  key={disease}
                  className="inline-block px-3 py-1 text-sm text-teal-400 border border-teal-400/20 rounded"
                >
                  {disease}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </Container>
  );
}
