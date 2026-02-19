"use client";

import { Expandable } from "@/components/ui/expandable";
import { ParameterSlider } from "@/components/ui/parameter-slider";
import { DiseaseToggles } from "./disease-toggles";
import { parameterMeta } from "@/lib/clearance/parameters";
import type {
  ClearanceParameters,
  DiseasePerturbations,
  Sex,
  APOEGenotype,
} from "@/lib/clearance/types";

interface ClearanceControlsProps {
  params: Partial<ClearanceParameters>;
  perturbations: DiseasePerturbations;
  showReference: boolean;
  onParamChange: (key: string, value: number | string) => void;
  onPerturbationsChange: (perturbations: DiseasePerturbations) => void;
  onToggleReference: () => void;
}

export function ClearanceControls({
  params,
  perturbations,
  showReference,
  onParamChange,
  onPerturbationsChange,
  onToggleReference,
}: ClearanceControlsProps) {
  const fpnMeta = parameterMeta.filter((m) => m.group === "fpn");
  const glyMeta = parameterMeta.filter((m) => m.group === "glymphatic");
  const advMeta = parameterMeta.filter((m) => m.group === "advanced");

  const currentSex = (params.sex as Sex) ?? "male";
  const currentApoe = (params.apoe_genotype as APOEGenotype) ?? "e3/e3";

  return (
    <div className="space-y-4">
      {/* Disease toggles */}
      <DiseaseToggles
        perturbations={perturbations}
        onChange={onPerturbationsChange}
      />

      {/* Demographics */}
      <Expandable title="Demographics" variant="dark">
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-300">
              Sex
            </label>
            <div className="flex gap-2">
              {(["male", "female"] as Sex[]).map((sex) => (
                <button
                  key={sex}
                  onClick={() => onParamChange("sex", sex)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    currentSex === sex
                      ? "bg-teal-400 text-navy-900"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {sex === "male" ? "Male" : "Female"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-300">
              APOE genotype
            </label>
            <div className="flex gap-2">
              {(["e3/e3", "e3/e4", "e4/e4"] as APOEGenotype[]).map((g) => (
                <button
                  key={g}
                  onClick={() => onParamChange("apoe_genotype", g)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    currentApoe === g
                      ? "bg-teal-400 text-navy-900"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Expandable>

      {/* Fpn Kinetics */}
      <Expandable title="Ferroportin kinetics" variant="dark">
        <div className="space-y-3">
          {fpnMeta.map((meta) => (
            <ParameterSlider
              key={meta.key}
              label={meta.label}
              value={(params[meta.key] as number) ?? meta.min}
              min={meta.min}
              max={meta.max}
              step={meta.step}
              unit={meta.unit}
              confidence={meta.confidence}
              onChange={(v) => onParamChange(meta.key, v)}
            />
          ))}
        </div>
      </Expandable>

      {/* Glymphatic */}
      <Expandable title="Glymphatic clearance" variant="dark">
        <div className="space-y-3">
          {glyMeta.map((meta) => (
            <ParameterSlider
              key={meta.key}
              label={meta.label}
              value={(params[meta.key] as number) ?? meta.min}
              min={meta.min}
              max={meta.max}
              step={meta.step}
              unit={meta.unit}
              confidence={meta.confidence}
              onChange={(v) => onParamChange(meta.key, v)}
            />
          ))}
        </div>
      </Expandable>

      {/* Advanced */}
      <Expandable title="Advanced parameters" variant="dark">
        <div className="space-y-3">
          {advMeta.map((meta) => (
            <ParameterSlider
              key={meta.key}
              label={meta.label}
              value={(params[meta.key] as number) ?? meta.min}
              min={meta.min}
              max={meta.max}
              step={meta.step}
              unit={meta.unit}
              confidence={meta.confidence}
              onChange={(v) => onParamChange(meta.key, v)}
            />
          ))}
        </div>
      </Expandable>

      {/* Compare toggle */}
      <label className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-white/10 px-3 py-2.5">
        <div
          className={`relative h-5 w-9 rounded-full transition-colors ${
            showReference ? "bg-teal-400" : "bg-white/10"
          }`}
        >
          <div
            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
              showReference ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </div>
        <span className="text-sm text-gray-300">Compare to healthy</span>
        <input
          type="checkbox"
          checked={showReference}
          onChange={onToggleReference}
          className="sr-only"
        />
      </label>

      {/* Confidence legend */}
      <div className="rounded-lg border border-white/10 px-3 py-2.5">
        <p className="mb-1.5 text-xs font-medium text-gray-400">
          Confidence indicator
        </p>
        <div className="flex flex-wrap gap-3">
          {(["high", "moderate", "low"] as const).map((level) => (
            <div key={level} className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{
                  backgroundColor:
                    level === "high"
                      ? "#059669"
                      : level === "moderate"
                        ? "#D97706"
                        : "#DC2626",
                }}
              />
              <span className="text-xs capitalize text-gray-500">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
