"use client";

import { clearanceScenarios } from "@/lib/clearance/parameters";

interface ScenarioSelectorProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export function ScenarioSelector({ activeId, onSelect }: ScenarioSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {clearanceScenarios.map((scenario) => (
        <button
          key={scenario.id}
          onClick={() => onSelect(scenario.id)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
            activeId === scenario.id
              ? "bg-teal-400 text-navy-900 shadow-md"
              : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
          }`}
          title={scenario.description}
        >
          {scenario.label}
        </button>
      ))}
    </div>
  );
}
