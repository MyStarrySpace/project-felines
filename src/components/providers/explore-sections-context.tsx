"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface PageSection {
  id: string;
  label: string;
}

interface ExploreSectionsContextValue {
  sections: PageSection[];
  registerSections: (sections: PageSection[]) => void;
  clearSections: () => void;
}

const ExploreSectionsContext = createContext<ExploreSectionsContextValue>({
  sections: [],
  registerSections: () => {},
  clearSections: () => {},
});

export function ExploreSectionsProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<PageSection[]>([]);

  const registerSections = useCallback((s: PageSection[]) => {
    setSections(s);
  }, []);

  const clearSections = useCallback(() => {
    setSections([]);
  }, []);

  return (
    <ExploreSectionsContext.Provider
      value={{ sections, registerSections, clearSections }}
    >
      {children}
    </ExploreSectionsContext.Provider>
  );
}

export function useExploreSections() {
  return useContext(ExploreSectionsContext);
}

export function useRegisterSections(pageSections: PageSection[]) {
  const { registerSections, clearSections } = useExploreSections();

  useEffect(() => {
    registerSections(pageSections);
    return () => clearSections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
