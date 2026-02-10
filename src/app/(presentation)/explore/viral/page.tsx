"use client";

import { Container } from "@/components/ui/container";
import Link from "next/link";

const viralTopics = [
  {
    slug: "ebv-ms",
    title: "EBV & Multiple Sclerosis",
    description:
      "Epstein-Barr virus doesn't need to reactivate. Latent viral proteins disrupt iron buffering and export in oligodendrocytes, driving the iron rim lesions that mark MS progression.",
  },
  {
    slug: "covid",
    title: "SARS-CoV-2 & Neurodegeneration",
    description:
      "SARS-CoV-2 infects pericytes via CD147, directly breaching the blood-brain barrier. Long COVID patients develop neurodegenerative biomarkers within months, compressing decades of decline into a rapid cascade.",
  },
  {
    slug: "latent-proteins",
    title: "Latent Viral Proteins",
    description:
      "The key insight: viruses don't need to be active to cause damage. Latent proteins sabotage iron-buffering systems (tau, alpha-synuclein) while disrupting the antioxidant defenses that contain stored iron.",
  },
];

export default function ViralOverview() {
  return (
    <Container width="full" className="py-12">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Viral Mechanisms
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Viruses don&apos;t need to wake up
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Researchers spent decades hunting for active virus in diseased brains.
          The answer may be simpler: latent viral proteins sabotage iron-buffering
          systems while disrupting antioxidant defenses. No reactivation required.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {viralTopics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/explore/viral/${topic.slug}`}
            className="glass-card glass-card-hover p-6 group block"
          >
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
              {topic.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {topic.description}
            </p>
            <p className="mt-4 text-xs text-gray-500 group-hover:text-teal-400 transition-colors">
              Read more &rarr;
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
