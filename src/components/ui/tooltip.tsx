"use client";

import { useState, useRef, type ReactNode } from "react";

type TooltipProps = {
  term: string;
  children: ReactNode;
  className?: string;
};

/**
 * Inline term tooltip. Renders the term with a dotted underline;
 * on hover/focus shows a popover with the definition.
 */
export function Tooltip({ term, children, className = "" }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  function show() {
    clearTimeout(timeout.current);
    setOpen(true);
  }

  function hide() {
    timeout.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <span
        className="cursor-help border-b border-dotted border-gray-400 text-inherit"
        tabIndex={0}
        role="button"
        aria-describedby={open ? "tooltip-content" : undefined}
      >
        {term}
      </span>
      {open && (
        <span
          id="tooltip-content"
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 bg-navy-900 px-3 py-2 text-xs leading-relaxed text-white shadow-lg"
        >
          {children}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-navy-900" />
        </span>
      )}
    </span>
  );
}
