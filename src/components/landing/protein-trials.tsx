"use client";

import { useRef, useEffect, useState, useCallback, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { Cite } from "@/components/citation/cite";
import {
  proteinTrialStats,
  proteinTrialContent,
  type ProteinTrialStat,
} from "@/data/landing/teaser";

const DARK_TEXT = "#1A0F0A";
const DARK_GOLD = "#92400E";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Expanded detail content for diseases with notes — JSX with inline <Cite> */
const detailContent: Record<string, ReactNode> = {
  "Alzheimer\u2019s": (
    <div className="space-y-4">
      <p>
        Lecanemab and donanemab target amyloid plaques,
        <br />
        but only slow cognitive decline by
      </p>
      <p
        className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold"
        style={{ color: DARK_TEXT }}
      >
        ~27% over 18 months.
        <Cite id="vandyck-2023-nejm-lecanemab" />
      </p>
      <p>
        That translates to roughly 5 extra months before patients lose the
        ability to manage daily tasks like finances and medications.
        <Cite id="tarawneh-2024-alz-res-ther" /> Patients who stop treatment see
        biomarkers return toward baseline.
        <Cite id="mcdade-2022-alz-res-ther" />
      </p>
      <p>
        <span
          className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold"
          style={{ color: DARK_TEXT }}
        >
          21%
        </span>{" "}
        develop ARIA (brain swelling or microbleeds), requiring regular MRI
        monitoring.
        <Cite id="vandyck-2023-nejm-lecanemab" />
      </p>
      <p>
        A third antibody, aducanumab, was withdrawn from the market in 2024 to{" "}
        <em>
          {"\u201C"}build a leading franchise to address the multiple pathologies
          of the disease.{"\u201D"}
        </em>
        <Cite id="biogen-2024-aduhelm-withdrawal" />
      </p>
    </div>
  ),
  ALS: (
    <div className="space-y-4">
      <p>
        Tofersen targets SOD1 mutations, which account for
      </p>
      <p
        className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold"
        style={{ color: DARK_TEXT }}
      >
        ~2% of ALS cases.
      </p>
      <p>
        Its Phase 3 trial (VALOR) found no statistically significant difference
        from placebo on the primary endpoint (ALSFRS-R functional score).
      </p>
      <p
        className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold"
        style={{ color: DARK_TEXT }}
      >
        P = 0.97.
        <Cite id="miller-2022-nejm-tofersen" />
      </p>
      <p>
        The FDA approved it anyway via accelerated approval, based on a
        biomarker surrogate: a ~50% drop in neurofilament light chain. The
        remaining
      </p>
      <p
        className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold"
        style={{ color: DARK_TEXT }}
      >
        98%
      </p>
      <p>
        of ALS cases, driven by TDP-43 aggregation, still have no
        protein-targeting therapy.
      </p>
    </div>
  ),
};

function ProteinTrialRow({
  stat,
  index,
  progress,
  expanded,
  onToggle,
}: {
  stat: ProteinTrialStat;
  index: number;
  progress: MotionValue<number>;
  expanded: boolean;
  onToggle: () => void;
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

  const hasNote = Boolean(stat.approvedNote);
  const detail = detailContent[stat.disease];

  return (
    <div ref={ref} className="relative flex items-center" style={{ opacity: 0 }}>
      {/* Protein image(s) — sits in the negative-margin gutter on lg */}
      {stat.image && (
        <div className="hidden lg:flex w-[140px] shrink-0 mr-3 items-center justify-center gap-1">
          {(Array.isArray(stat.image) ? stat.image : [stat.image]).map((img) => (
            <Image
              key={img}
              src={`/images/proteins/${img}`}
              alt={`${stat.protein} structure`}
              width={Array.isArray(stat.image) ? 64 : 80}
              height={Array.isArray(stat.image) ? 64 : 80}
            />
          ))}
        </div>
      )}
      {/* Row content */}
      <div
        className="flex-1 flex items-baseline justify-between gap-2 sm:gap-4 py-4 sm:py-5 border-b"
        style={{ borderColor: `${DARK_TEXT}12` }}
      >
        <div className="min-w-0">
          <span
            className="font-serif text-lg sm:text-2xl block"
            style={{ color: DARK_TEXT }}
          >
            {stat.disease}
          </span>
          <span
            className="text-sm sm:text-base"
            style={{ color: `${DARK_TEXT}80` }}
          >
            {stat.protein}
          </span>
        </div>
        <div className="flex items-baseline gap-3 sm:gap-5 shrink-0 tabular-nums text-sm sm:text-lg">
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

      {/* Mobile note */}
      {hasNote && (
        <div className="lg:hidden pt-1 pb-2">
          <span
            className="text-sm font-medium"
            style={{ color: `${DARK_TEXT}99` }}
          >
            {stat.approvedNote}
          </span>
          {detail && (
            <button
              onClick={onToggle}
              className="text-sm font-medium underline underline-offset-2 cursor-pointer ml-1.5"
              style={{ color: DARK_GOLD }}
            >
              {expanded ? "close" : "why?"}
            </button>
          )}
        </div>
      )}

      {/* Desktop note: callout box to the right */}
      {hasNote && (
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-full ml-3 items-center">
          {/* Left-pointing triangle */}
          <div
            className="w-0 h-0 shrink-0"
            style={{
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderRight: `6px solid ${DARK_TEXT}25`,
            }}
          />
          {/* Note box */}
          <div
            className="text-sm leading-snug px-3 py-2 rounded max-w-[16rem]"
            style={{
              border: `1px solid ${DARK_TEXT}20`,
              color: `${DARK_TEXT}CC`,
            }}
          >
            <span className="font-medium">{stat.approvedNote}</span>
            {detail && (
              <button
                onClick={onToggle}
                className="font-medium underline underline-offset-2 cursor-pointer ml-1.5"
                style={{ color: DARK_GOLD }}
              >
                {expanded ? "close" : "why?"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Expanded detail section */}
      <AnimatePresence initial={false}>
        {expanded && detail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div
              className="py-4 px-4 text-sm leading-relaxed rounded-b"
              style={{
                color: `${DARK_TEXT}B3`,
                backgroundColor: `${DARK_TEXT}06`,
              }}
            >
              {detail}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  }, []);

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
          49 drugs targeted the <em>protein.</em>
        </h2>
        <p
          className="text-lg sm:text-xl mt-2"
          style={{ color: `${DARK_TEXT}99` }}
        >
          {proteinTrialContent.subhead}
        </p>
      </div>

      <div className="mt-6 sm:mt-8 lg:-ml-[152px]">
        {proteinTrialStats.map((stat, i) => (
          <ProteinTrialRow
            key={stat.disease}
            stat={stat}
            index={i}
            progress={progress}
            expanded={expandedIndex === i}
            onToggle={() => handleToggle(i)}
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
