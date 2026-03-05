"use client";

import { Container } from "@/components/ui/container";
import { pillars, pillarDeepDives } from "@/data/landing/pillars";
import Link from "next/link";

const layerSlugs: Record<string, string> = {
  Fe: "fe",
  L: "lysosome",
  I: "insulation",
  N: "neurovascular",
  E: "export",
};

export default function BiologyOverview() {
  return (
    <Container width="full" className="py-12">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Defense Systems
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Five defense layers. One cascade.
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Neurodegeneration begins when multiple defense layers fail
          simultaneously. No single layer failure is sufficient. Iron-driven
          ferroptosis cascades through oligodendrocytes only when the system
          breaks down across layers.
        </p>
      </div>

      {/* Layer cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillarDeepDives.map((pillar) => (
          <Link
            key={pillar.letter}
            href={`/explore/biology/${layerSlugs[pillar.letter]}`}
            className="glass-card glass-card-hover p-6 group block"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-teal-400 font-serif">
                {pillar.letter}
              </span>
              <h3 className="text-lg font-bold text-white">
                {pillar.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {pillar.description}
            </p>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Failure mode
                </p>
                <p className="text-sm text-gray-300">{pillar.failureMode}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Therapeutic target
                </p>
                <p className="text-sm text-teal-400/80">
                  {pillar.therapeuticTarget}
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500 group-hover:text-teal-400 transition-colors">
              Read more &rarr;
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
