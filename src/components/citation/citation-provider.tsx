"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { sourcesMap, type Source } from "@/data/bibliography";

type CitationContextType = {
  registerCitation: (sourceId: string) => number;
  getOrderedCitations: () => { number: number; source: Source }[];
};

const CitationContext = createContext<CitationContextType | null>(null);

export function useCitations() {
  const ctx = useContext(CitationContext);
  if (!ctx) {
    throw new Error("useCitations must be used within a CitationProvider");
  }
  return ctx;
}

export function CitationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [, forceUpdate] = useState(0);
  const citationMap = useRef(new Map<string, number>());
  const counter = useRef(0);

  // Reset numbering on pathname change
  useEffect(() => {
    citationMap.current.clear();
    counter.current = 0;
    forceUpdate((n) => n + 1);
  }, [pathname]);

  const registerCitation = useCallback((sourceId: string): number => {
    const existing = citationMap.current.get(sourceId);
    if (existing !== undefined) return existing;

    counter.current += 1;
    const num = counter.current;
    citationMap.current.set(sourceId, num);
    return num;
  }, []);

  const getOrderedCitations = useCallback(() => {
    const entries: { number: number; source: Source }[] = [];
    for (const [sourceId, num] of citationMap.current) {
      const source = sourcesMap.get(sourceId);
      if (source) {
        entries.push({ number: num, source });
      }
    }
    return entries.sort((a, b) => a.number - b.number);
  }, []);

  return (
    <CitationContext.Provider value={{ registerCitation, getOrderedCitations }}>
      {children}
    </CitationContext.Provider>
  );
}
