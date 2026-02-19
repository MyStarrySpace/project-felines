"use client";

import type { DiseasePerturbations } from "@/lib/clearance/types";

interface DiseaseTogglesProps {
  perturbations: DiseasePerturbations;
  onChange: (perturbations: DiseasePerturbations) => void;
}

const toggleConfig: { key: keyof DiseasePerturbations; label: string; effect: string }[] = [
  { key: "hypertension", label: "Hypertension", effect: "Gly -27%" },
  { key: "diabetes", label: "Diabetes", effect: "Gly -67%" },
  { key: "sleepDisruption", label: "Sleep disruption", effect: "Gly -36%" },
  { key: "chronicHepcidin", label: "Chronic hepcidin", effect: "Fpn -40%" },
];

export function DiseaseToggles({ perturbations, onChange }: DiseaseTogglesProps) {
  function toggle(key: keyof DiseasePerturbations) {
    onChange({ ...perturbations, [key]: !perturbations[key] });
  }

  return (
    <div className="space-y-2">
      <h4 className="text-xs font-medium uppercase tracking-wide text-gray-400">
        Disease perturbations
      </h4>
      <div className="space-y-1.5">
        {toggleConfig.map(({ key, label, effect }) => (
          <label
            key={key}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`relative h-5 w-9 rounded-full transition-colors ${
                  perturbations[key] ? "bg-teal-400" : "bg-white/10"
                }`}
              >
                <div
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                    perturbations[key] ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </div>
              <span className="text-gray-200">{label}</span>
            </div>
            <span className="text-xs text-gray-500">{effect}</span>
            <input
              type="checkbox"
              checked={perturbations[key]}
              onChange={() => toggle(key)}
              className="sr-only"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
