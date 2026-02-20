"use client";

import { useRef, useEffect } from "react";
import { useTransform, type MotionValue } from "framer-motion";
import {
  proteinTrialStats,
  proteinTrialContent,
  type ProteinTrialStat,
} from "@/data/landing/teaser";

const DARK_TEXT = "#1A0F0A";
const DARK_GOLD = "#92400E";

function ProteinTrialRow({
  stat,
  index,
  progress,
}: {
  stat: ProteinTrialStat;
  index: number;
  progress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const enterStart = 0.29 + index * 0.02;
  const enterEnd = enterStart + 0.03;
  const opacity = useTransform(progress, [enterStart, enterEnd], [0, 1]);
  const y = useTransform(progress, [enterStart, enterEnd], [15, 0]);

  useEffect(() => {
    const unsubO = opacity.on("change", (v) => {
      if (ref.current) ref.current.style.opacity = String(v);
    });
    const unsubY = y.on("change", (v) => {
      if (ref.current) ref.current.style.transform = `translateY(${v}px)`;
    });
    return () => {
      unsubO();
      unsubY();
    };
  }, [opacity, y]);

  return (
    <div ref={ref} className="relative" style={{ opacity: 0 }}>
      {/* Row content */}
      <div
        className="flex items-baseline justify-between gap-2 sm:gap-4 py-2.5 sm:py-3 border-b"
        style={{ borderColor: `${DARK_TEXT}12` }}
      >
        <div className="min-w-0">
          <span
            className="font-semibold text-base sm:text-lg"
            style={{ color: DARK_TEXT }}
          >
            {stat.disease}
          </span>
          <span
            className="text-sm sm:text-base ml-2"
            style={{ color: `${DARK_TEXT}80` }}
          >
            {stat.protein}
          </span>
        </div>
        <div className="flex items-baseline gap-3 sm:gap-5 shrink-0 tabular-nums text-sm sm:text-base">
          <span style={{ color: `${DARK_TEXT}B3` }}>
            {stat.tested} tested
          </span>
          <span>
            <span
              className={stat.approved === 0 ? "font-semibold" : ""}
              style={{
                color: stat.approved === 0 ? DARK_GOLD : `${DARK_TEXT}80`,
              }}
            >
              {stat.approved}
            </span>
            <span style={{ color: `${DARK_TEXT}80` }}> approved</span>
          </span>
        </div>
      </div>

      {/* Mobile note: subtle text below the row */}
      {stat.approvedNote && (
        <p
          className="lg:hidden text-xs pt-1 pb-2"
          style={{ color: `${DARK_TEXT}66` }}
        >
          {stat.approvedNote}
        </p>
      )}

      {/* Desktop note: callout box to the right with left-pointing arrow */}
      {stat.approvedNote && (
        <div
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-full ml-3 items-center"
        >
          {/* Left-pointing triangle */}
          <div
            className="w-0 h-0 shrink-0"
            style={{
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderRight: `5px solid ${DARK_TEXT}18`,
            }}
          />
          {/* Note box */}
          <div
            className="text-xs leading-snug px-2.5 py-1.5 rounded max-w-[10rem]"
            style={{
              border: `1px solid ${DARK_TEXT}15`,
              color: `${DARK_TEXT}80`,
            }}
          >
            {stat.approvedNote}
          </div>
        </div>
      )}
    </div>
  );
}

export function ProteinTrials({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const headingRef = useRef<HTMLDivElement>(null);
  const punchRef = useRef<HTMLDivElement>(null);

  const headingOpacity = useTransform(progress, [0.26, 0.30], [0, 1]);
  const headingY = useTransform(progress, [0.26, 0.30], [20, 0]);

  const punchOpacity = useTransform(progress, [0.38, 0.41], [0, 1]);
  const punchY = useTransform(progress, [0.38, 0.41], [15, 0]);

  useEffect(() => {
    const unsubs = [
      headingOpacity.on("change", (v) => {
        if (headingRef.current) headingRef.current.style.opacity = String(v);
      }),
      headingY.on("change", (v) => {
        if (headingRef.current)
          headingRef.current.style.transform = `translateY(${v}px)`;
      }),
      punchOpacity.on("change", (v) => {
        if (punchRef.current) punchRef.current.style.opacity = String(v);
      }),
      punchY.on("change", (v) => {
        if (punchRef.current)
          punchRef.current.style.transform = `translateY(${v}px)`;
      }),
    ];
    return () => unsubs.forEach((u) => u());
  }, [headingOpacity, headingY, punchOpacity, punchY]);

  return (
    <div className="reading-width mx-auto w-full">
      <div ref={headingRef} style={{ opacity: 0 }}>
        <h2
          className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em]"
          style={{ color: DARK_TEXT }}
        >
          {proteinTrialContent.heading}
        </h2>
        <p
          className="text-lg sm:text-xl mt-2"
          style={{ color: `${DARK_TEXT}99` }}
        >
          {proteinTrialContent.subhead}
        </p>
      </div>

      <div className="mt-6 sm:mt-8">
        {proteinTrialStats.map((stat, i) => (
          <ProteinTrialRow
            key={stat.disease}
            stat={stat}
            index={i}
            progress={progress}
          />
        ))}
      </div>

      <div ref={punchRef} className="mt-6 sm:mt-8" style={{ opacity: 0 }}>
        <p
          className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-tight font-semibold"
          style={{ color: DARK_GOLD }}
        >
          {proteinTrialContent.punchline}
        </p>
      </div>
    </div>
  );
}
