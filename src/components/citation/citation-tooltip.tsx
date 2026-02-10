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
};

export function CitationTooltip({
  source,
  number,
  anchorRect,
  visible,
}: CitationTooltipProps) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.getElementById("citation-portal"));
  }, []);

  if (!portalTarget || !anchorRect) return null;

  // Position above the anchor, centered horizontally
  const tooltipWidth = 320;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
  const top = anchorRect.top - 8;

  // Clamp to viewport
  if (left < 8) left = 8;
  if (left + tooltipWidth > window.innerWidth - 8) {
    left = window.innerWidth - tooltipWidth - 8;
  }

  const doiUrl = source.doi ? `https://doi.org/${source.doi}` : undefined;
  const linkUrl = source.url || doiUrl;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed z-[101]"
          style={{
            left,
            top,
            width: tooltipWidth,
            transform: "translateY(-100%)",
          }}
        >
          <div className="rounded bg-navy-900/95 px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur-sm border border-white/10">
            <p className="text-xs text-teal-400 mb-1">[{number}]</p>
            <p className="font-medium text-white text-xs leading-snug">
              {source.title}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {source.authors}
            </p>
            <p className="text-xs text-gray-500">
              {source.journal} ({source.year})
            </p>
            {linkUrl && (
              <p className="mt-1 text-xs text-teal-400/70 truncate">
                {source.doi || linkUrl}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget
  );
}
