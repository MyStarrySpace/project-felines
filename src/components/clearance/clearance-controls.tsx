"use client";

import { Expandable } from "@/components/ui/expandable";
import { ParameterSlider } from "@/components/ui/parameter-slider";
import { ExtensionToggles } from "./disease-toggles";
import { parameterMeta, citations } from "@/lib/clearance/parameters";
import type {
  CoreParameters,
  OptionalExtensions,
  Sex,
  APOEGenotype,
} from "@/lib/clearance/types";

interface ClearanceControlsProps {
  params: Partial<CoreParameters>;
  extensions: Partial<OptionalExtensions>;
  showReference: boolean;
  onParamChange: (key: string, value: number | string) => void;
  onExtensionsChange: (extensions: Partial<OptionalExtensions>) => void;
  onToggleReference: () => void;
}

export function ClearanceControls({
  params,
  extensions,
  showReference,
  onParamChange,
  onExtensionsChange,
  onToggleReference,
}: ClearanceControlsProps) {
  const coreMeta = parameterMeta.filter((m) => m.group === "core");
  const clearanceMeta = parameterMeta.filter((m) => m.group === "clearance");
  const thresholdMeta = parameterMeta.filter((m) => m.group === "thresholds");

  const currentSex = (params.sex as Sex) ?? "male";
  const currentApoe = (params.apoe_genotype as APOEGenotype) ?? "e3/e3";

  return (
    <div className="space-y-4">
      {/* Extension toggles */}
      <ExtensionToggles
        extensions={extensions}
        onChange={onExtensionsChange}
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
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
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
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
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

      {/* Core parameters */}
      <Expandable title="Core parameters" variant="dark">
        <div className="space-y-3">
          {coreMeta.map((meta) => {
            const c = meta.citationKey ? citations[meta.citationKey] : undefined;
            return (
              <ParameterSlider
                key={meta.key}
                label={meta.label}
                value={(params[meta.key as keyof CoreParameters] as number) ?? meta.min}
                min={meta.min}
                max={meta.max}
                step={meta.step}
                unit={meta.unit}
                source={meta.source}
                cite={c?.cite ?? meta.cite}
                citationNote={c?.note}
                pmid={c?.pmid}
                onChange={(v) => onParamChange(meta.key, v)}
              />
            );
          })}
        </div>
      </Expandable>

      {/* Clearance decline */}
      <Expandable title="Clearance decline rates" variant="dark">
        <div className="space-y-3">
          {clearanceMeta.map((meta) => {
            const c = meta.citationKey ? citations[meta.citationKey] : undefined;
            return (
              <ParameterSlider
                key={meta.key}
                label={meta.label}
                value={(params[meta.key as keyof CoreParameters] as number) ?? meta.min}
                min={meta.min}
                max={meta.max}
                step={meta.step}
                unit={meta.unit}
                source={meta.source}
                cite={c?.cite ?? meta.cite}
                citationNote={c?.note}
                pmid={c?.pmid}
                onChange={(v) => onParamChange(meta.key, v)}
              />
            );
          })}
        </div>
      </Expandable>

      {/* Thresholds */}
      <Expandable title="Ferroptosis thresholds" variant="dark">
        <div className="space-y-3">
          {thresholdMeta.map((meta) => {
            const c = meta.citationKey ? citations[meta.citationKey] : undefined;
            return (
              <ParameterSlider
                key={meta.key}
                label={meta.label}
                value={(params[meta.key as keyof CoreParameters] as number) ?? meta.min}
                min={meta.min}
                max={meta.max}
                step={meta.step}
                unit={meta.unit}
                source={meta.source}
                cite={c?.cite ?? meta.cite}
                citationNote={c?.note}
                pmid={c?.pmid}
                onChange={(v) => onParamChange(meta.key, v)}
              />
            );
          })}
        </div>
      </Expandable>

      {/* Compare toggle */}
      <label className="flex cursor-pointer items-center gap-2.5 border border-white/10 px-3 py-2.5">
        <div
          className={`flex h-4 w-4 items-center justify-center border transition-colors ${
            showReference
              ? "border-teal-400 bg-teal-400/15"
              : "border-white/20 bg-transparent"
          }`}
        >
          {showReference && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4l2.5 2.5L9 1" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          )}
        </div>
        <span className="text-sm text-gray-200">Compare to healthy</span>
        <input
          type="checkbox"
          checked={showReference}
          onChange={onToggleReference}
          className="sr-only"
        />
      </label>

      {/* Source legend */}
      <div className="border border-white/10 px-3 py-2.5">
        <p className="mb-1.5 text-xs font-medium text-gray-400">
          Parameter source
        </p>
        <div className="flex flex-wrap gap-3">
          {(["measured", "derived", "assumed"] as const).map((level) => (
            <div key={level} className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{
                  backgroundColor:
                    level === "measured"
                      ? "#059669"
                      : level === "derived"
                        ? "#D97706"
                        : "#DC2626",
                }}
              />
              <span className="text-xs capitalize text-gray-400">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
