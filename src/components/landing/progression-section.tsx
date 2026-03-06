"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cite } from "@/components/citation/cite";
import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { useScrollContext } from "@/components/providers/scroll-context";
import {
  progressionHeadline,
  progressionBody,
  feedbackLoops,
  progressionInsight,
  progressionCta,
} from "@/data/landing/progression";

export function ProgressionSection() {
  const { scrollToSection } = useScrollContext();

  return (
    <ScrollSection id="progression" label="Decades of silence, then collapse" className="py-24 sm:py-32">
      <ScrollAnimate enterFrom="scale">
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
          {progressionHeadline}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-[52ch]">
          {progressionBody}
        </p>
      </ScrollAnimate>

      <div className="space-y-6 mb-14">
        {feedbackLoops.map((loop, i) => (
          <ScrollAnimate key={loop.title} enterFrom="bottom">
            <div className="border border-white/5 p-6">
              <div className="flex gap-4 mb-3">
                <span className="shrink-0 text-sm font-bold text-teal-400 tabular-nums pt-0.5">
                  {i + 1}.
                </span>
                <h3 className="text-white font-semibold">{loop.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-2 ml-8">
                {loop.mechanism}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed ml-8">
                {loop.consequence}
                {loop.citationIds.map((id) => (
                  <Cite key={id} id={id} />
                ))}
              </p>
            </div>
          </ScrollAnimate>
        ))}
      </div>

      <ScrollAnimate enterFrom="left">
        <div className="border-l-2 border-white/10 pl-4 mb-14">
          <p className="text-gray-300 text-base leading-relaxed">
            {progressionInsight}
          </p>
        </div>
      </ScrollAnimate>

      <ScrollAnimate>
        <div className="flex justify-center gap-4">
          <Link href={progressionCta.primaryHref}>
            <Button variant="primary-inverse" size="lg">
              {progressionCta.primary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="secondary-inverse"
            size="lg"
            onClick={() => scrollToSection("teaser")}
          >
            {progressionCta.secondary}
          </Button>
        </div>
        <p className="mt-8 text-xs text-gray-500 text-center">
          Project FELINES. For research and educational purposes.
        </p>
      </ScrollAnimate>
    </ScrollSection>
  );
}
