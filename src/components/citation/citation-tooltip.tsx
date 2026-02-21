"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Source } from "@/data/bibliography";

type CitationTooltipProps = {
  source: Source;
  number: number;
  anchorRect: DOMRect | null;
  visible: boolean;
  onEnter: () => void;
  onLeave: () => void;
  /** Show specific citation quotes (by citationId). Shows first quote if omitted. */
  citationIds?: string[];
};

export function CitationTooltip({
  source,
  number,
  anchorRect,
  visible,
  onEnter,
  onLeave,
  citationIds,
}: CitationTooltipProps) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.getElementById("citation-portal"));
  }, []);

  if (!portalTarget || !anchorRect) return null;

  // Position above the anchor, centered horizontally
  const tooltipWidth = 360;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
  const top = anchorRect.top - 12;

  // Clamp to viewport
  if (left < 8) left = 8;
  if (left + tooltipWidth > window.innerWidth - 8) {
    left = window.innerWidth - tooltipWidth - 8;
  }

  const doiUrl = source.doi ? `https://doi.org/${source.doi}` : undefined;
  const linkUrl = source.url || doiUrl;

  // Select quotes: specific citationIds if provided, otherwise first quote
  const quotes = citationIds
    ? source.citations.filter((c) => citationIds.includes(c.citationId)).map((c) => c.quote)
    : source.citations[0]?.quote ? [source.citations[0].quote] : [];

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className="fixed z-[101]"
          style={{
            left,
            top,
            width: tooltipWidth,
            transform: "translateY(-100%)",
          }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          {/* Invisible bridge so cursor can travel from sup to tooltip */}
          <div className="h-3" />
          <div className="rounded bg-navy-900/95 px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur-sm border border-white/10">
            <p className="text-xs text-teal-400 mb-1">[{number}]</p>
            {linkUrl ? (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white text-xs leading-snug hover:text-teal-300 transition-colors"
              >
                {source.title}
              </a>
            ) : (
              <p className="font-medium text-white text-xs leading-snug">
                {source.title}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-400">{source.authors}</p>
            <p className="text-xs text-gray-500">
              {source.journal} ({source.year})
            </p>
            {quotes.length > 0 && (
              <div className="mt-2 space-y-1.5">
                {quotes.map((q, i) => (
                  <p key={i} className="text-xs text-gray-400 italic border-l border-white/10 pl-2 line-clamp-3">
                    &ldquo;{q}&rdquo;
                  </p>
                ))}
              </div>
            )}
            {linkUrl && (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-teal-400/70 hover:text-teal-300 transition-colors truncate max-w-full"
              >
                {source.doi ? `doi: ${source.doi}` : linkUrl}
              </a>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget
  );
}
