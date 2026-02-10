"use client";

import { useCitations } from "./citation-provider";

export function References() {
  const { getOrderedCitations } = useCitations();
  const citations = getOrderedCitations();

  if (citations.length === 0) return null;

  return (
    <section className="mt-16 border-t border-white/10 pt-8">
      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-400 mb-4">
        References
      </h3>
      <ol className="space-y-2 text-sm text-gray-400">
        {citations.map(({ number, source }) => {
          const url =
            source.url ||
            (source.doi ? `https://doi.org/${source.doi}` : undefined);

          return (
            <li key={source.id} className="flex gap-2">
              <span className="text-teal-400/70 shrink-0">[{number}]</span>
              <span>
                {source.authors}. {source.title}.{" "}
                <em>{source.journal}</em> ({source.year}).
                {url && (
                  <>
                    {" "}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400/70 hover:text-teal-300 transition-colors"
                    >
                      {source.doi || "Link"}
                    </a>
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
