"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type Phase = "idle" | "collapsing" | "explore" | "expanding";

interface TransitionState {
  phase: Phase;
  selectedTopic: string | null;
  isCardNavigation: boolean;
  startTransition: (href: string, slug: string) => void;
  completeExpand: () => void;
}

const TransitionContext = createContext<TransitionState | null>(null);

const COLLAPSE_DELAY = 600; // ms before router.push fires

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseRef = useRef<Phase>("idle");

  const isExplore = pathname.startsWith("/explore");

  // Determine initial phase based on URL
  const [phase, setPhaseRaw] = useState<Phase>(isExplore ? "explore" : "idle");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isCardNavigation, setIsCardNavigation] = useState(false);

  const setPhase = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhaseRaw(p);
  }, []);

  // Card click: start collapsing, delay router.push
  const startTransition = useCallback(
    (href: string, slug: string) => {
      setSelectedTopic(slug);
      setIsCardNavigation(true);
      setPhase("collapsing");

      timerRef.current = setTimeout(() => {
        // Guard: only push if still collapsing
        if (phaseRef.current === "collapsing") {
          router.push(href);
        }
      }, COLLAPSE_DELAY);
    },
    [router, setPhase]
  );

  // Reset to idle
  const completeExpand = useCallback(() => {
    setPhase("idle");
    setSelectedTopic(null);
    setIsCardNavigation(false);
  }, [setPhase]);

  // React to pathname changes
  useEffect(() => {
    const current = phaseRef.current;

    if (isExplore && current === "collapsing") {
      // Card-nav push landed — move to explore
      setPhase("explore");
    } else if (isExplore && current === "idle") {
      // Direct URL navigation to explore (or link from elsewhere)
      setIsCardNavigation(false);
      setSelectedTopic(null);
      setPhase("explore");
    } else if (!isExplore && current === "explore") {
      // Back navigation from explore to /
      setPhase("expanding");
    }
  }, [pathname, isExplore, setPhase]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        phase,
        selectedTopic,
        isCardNavigation,
        startTransition,
        completeExpand,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useExploreTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useExploreTransition must be used within TransitionProvider");
  }
  return ctx;
}
