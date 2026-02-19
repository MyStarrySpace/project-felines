"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useScrollContext } from "@/components/providers/scroll-context";

interface ScrollSectionProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
  /** Skip the reading-width wrapper (for full-viewport sticky stages) */
  fullWidth?: boolean;
  /** Section-progress breakpoints (0-1) for click-to-advance navigation */
  breakpoints?: number[];
}

export function ScrollSection({ id, label, children, className, fullWidth, breakpoints }: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { registerSection, unregisterSection } = useScrollContext();

  useEffect(() => {
    if (ref.current) {
      registerSection(id, label, ref.current, breakpoints);
    }
    return () => unregisterSection(id);
  }, [id, label, registerSection, unregisterSection, breakpoints]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${className ?? ""}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="reading-width mx-auto px-6 sm:px-8">
          {children}
        </div>
      )}
    </section>
  );
}
