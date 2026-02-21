"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useCitations } from "./citation-provider";
import { CitationTooltip } from "./citation-tooltip";
import { sourcesMap } from "@/data/bibliography";

type CiteProps = {
  id: string;
  /** Show specific citation quotes in the tooltip (by citationId). Shows first quote if omitted. */
  citationIds?: string[];
};

export function Cite({ id, citationIds }: CiteProps) {
  const { registerCitation } = useCitations();
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Cleanup timeout on unmount
  useEffect(() => () => clearTimeout(hideTimeout.current), []);

  const source = sourcesMap.get(id);
  if (!source) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`<Cite>: unknown source id "${id}"`);
    }
    return <sup className="text-red-400">[?]</sup>;
  }

  const number = registerCitation(id);

  const handleClick = () => {
    const url =
      source.url || (source.doi ? `https://doi.org/${source.doi}` : undefined);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const show = useCallback(() => {
    clearTimeout(hideTimeout.current);
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
    setHovered(true);
  }, []);

  const startHide = useCallback(() => {
    hideTimeout.current = setTimeout(() => setHovered(false), 150);
  }, []);

  return (
    <>
      <sup
        ref={ref}
        className="cursor-pointer text-teal-600 hover:text-teal-400 transition-colors text-[0.65em] ml-0.5"
        onMouseEnter={show}
        onMouseLeave={startHide}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        [{number}]
      </sup>
      <CitationTooltip
        source={source}
        number={number}
        anchorRect={rect}
        visible={hovered}
        onEnter={show}
        onLeave={startHide}
        citationIds={citationIds}
      />
    </>
  );
}
