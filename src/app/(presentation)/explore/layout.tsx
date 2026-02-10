"use client";

import { ExploreBackLink } from "@/components/layout/explore-back-link";
import { ExploreSectionIndicator } from "@/components/ui/explore-section-indicator";
import { ExploreScrollProgress } from "@/components/ui/explore-scroll-progress";
import { ExploreSectionsProvider } from "@/components/providers/explore-sections-context";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ExploreSectionsProvider>
      <div id="explore-root" className="min-h-screen bg-navy-900 text-white">
        <ExploreBackLink />
        <ExploreSectionIndicator />
        <ExploreScrollProgress />
        <main id="explore-content" role="main">
          {children}
        </main>
      </div>
    </ExploreSectionsProvider>
  );
}
