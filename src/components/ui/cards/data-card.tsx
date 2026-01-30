type TrendDirection = "up" | "down" | "neutral";

type DataCardProps = {
  value: string;
  unit?: string;
  label: string;
  description?: string;
  trend?: TrendDirection;
  className?: string;
};

const trendIcons: Record<TrendDirection, string> = {
  up: "\u2191",
  down: "\u2193",
  neutral: "\u2192",
};

const trendColors: Record<TrendDirection, string> = {
  up: "text-green-600",
  down: "text-red-600",
  neutral: "text-gray-500",
};

export function DataCard({
  value,
  unit,
  label,
  description,
  trend,
  className = "",
}: DataCardProps) {
  return (
    <div
      className={`bg-surface p-6 shadow-sm ${className}`}
    >
      <div className="mb-2 flex items-baseline gap-1.5">
        <span className="font-serif text-[40px] leading-none tracking-tight text-navy-900">
          {value}
        </span>
        {unit && (
          <span className="text-base font-medium text-text-muted">{unit}</span>
        )}
        {trend && (
          <span className={`ml-1 text-lg ${trendColors[trend]}`}>
            {trendIcons[trend]}
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-text-secondary">{label}</p>
      {description && (
        <p className="mt-1 text-sm text-text-muted">{description}</p>
      )}
    </div>
  );
}
