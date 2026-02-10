"use client";

import { type ReactNode } from "react";
import { CitationProvider } from "@/components/citation/citation-provider";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <CitationProvider>{children}</CitationProvider>;
}
