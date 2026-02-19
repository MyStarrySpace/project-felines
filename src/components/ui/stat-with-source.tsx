"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { StatSource } from "@/data/landing/findings";

type StatWithSourceProps = {
  value: string;
  label: string;
  source?: StatSource;
  valueClassName?: string;
  labelClassName?: string;
};

function StatTooltip({
  source,
  anchorRect,
  visible,
}: {
  source: StatSource;
  anchorRect: DOMRect | null;
  visible: boolean;
}) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.getElementById("citation-portal"));
  }, []);

  if (!portalTarget || !anchorRect) return null;

  const tooltipWidth = 320;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
  const top = anchorRect.top - 8;

  if (left < 8) left = 8;
  if (left + tooltipWidth > window.innerWidth - 8) {
    left = window.innerWidth - tooltipWidth - 8;
  }

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
            <p className="text-xs font-medium text-teal-400 mb-1">
              {source.url ? (
                <span>{source.label}</span>
              ) : (
                source.label
              )}
            </p>
            <p className="text-xs text-gray-300 italic">
              &ldquo;{source.quote}&rdquo;
            </p>
            {source.caveat && (
              <p className="mt-2 text-xs text-gray-500">
                Note: {source.caveat}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget
  );
}

export function StatWithSource({
  value,
  label,
  source,
  valueClassName = "font-serif text-[56px] text-gradient-teal leading-none sm:text-[68px]",
  labelClassName = "mt-1 text-sm font-medium text-gray-400",
}: StatWithSourceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
    setHovered(true);
  };

  const handleClick = () => {
    if (source?.url) {
      window.open(source.url, "_blank", "noopener,noreferrer");
    }
  };

  if (!source) {
    return (
      <div>
        <span className={valueClassName}>{value}</span>
        <p className={labelClassName}>{label}</p>
      </div>
    );
  }

  return (
    <>
      <div
        ref={ref}
        className="cursor-help"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        <span className={valueClassName}>{value}</span>
        <p className={`${labelClassName} decoration-dotted underline underline-offset-4 decoration-gray-600`}>
          {label}
        </p>
      </div>
      <StatTooltip source={source} anchorRect={rect} visible={hovered} />
    </>
  );
}
