"use client";

import type { OptionalExtensions } from "@/lib/clearance/types";

interface ExtensionTogglesProps {
  extensions: Partial<OptionalExtensions>;
  onChange: (extensions: Partial<OptionalExtensions>) => void;
}

const toggleConfig: {
  key: keyof OptionalExtensions;
  label: string;
  effect: string;
}[] = [
  { key: "hypertension", label: "Hypertension", effect: "Gly -32%" },
  { key: "diabetes", label: "Diabetes", effect: "Gly -84%" },
  { key: "sleepDisruption", label: "Sleep disruption", effect: "Gly -36%" },
  { key: "chronicHepcidin", label: "Chronic hepcidin", effect: "Fpn -40%" },
  { key: "bbbLeak", label: "BBB leak", effect: "+0.3 \u00B5M/yr ISF" },
  { key: "ferritinophagy", label: "Extra ferritinophagy", effect: "+Fe recycle" },
];

export function ExtensionToggles({ extensions, onChange }: ExtensionTogglesProps) {
  function toggle(key: keyof OptionalExtensions) {
    const current = extensions[key];
    const enabled = current ? !current.enabled : true;
    onChange({
      ...extensions,
      [key]: { ...current, enabled },
    });
  }

  function isEnabled(key: keyof OptionalExtensions): boolean {
    return extensions[key]?.enabled ?? false;
  }

  return (
    <div className="space-y-2">
      <h4 className="text-xs font-medium uppercase tracking-wide text-gray-300">
        Optional extensions
      </h4>
      <div className="space-y-1">
        {toggleConfig.map(({ key, label, effect }) => {
          const on = isEnabled(key);
          return (
            <label
              key={key}
              className="flex cursor-pointer items-center justify-between gap-3 border border-transparent px-3 py-2 text-sm transition-colors hover:border-white/5"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                    on
                      ? "border-teal-400 bg-teal-400/15"
                      : "border-white/20 bg-transparent"
                  }`}
                >
                  {on && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  )}
                </div>
                <span className={on ? "text-gray-100" : "text-gray-300"}>{label}</span>
              </div>
              <span className="text-xs text-gray-400">{effect}</span>
              <input
                type="checkbox"
                checked={on}
                onChange={() => toggle(key)}
                className="sr-only"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
