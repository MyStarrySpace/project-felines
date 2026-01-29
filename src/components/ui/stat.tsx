type StatProps = {
  value: string;
  unit?: string;
  label: string;
  description?: string;
  className?: string;
};

export function Stat({
  value,
  unit,
  label,
  description,
  className = "",
}: StatProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-[48px] leading-none tracking-tight text-navy-900">
          {value}
        </span>
        {unit && (
          <span className="text-lg font-medium text-text-muted">{unit}</span>
        )}
      </div>
      <span className="text-sm font-medium text-text-secondary">{label}</span>
      {description && (
        <span className="text-sm text-text-muted">{description}</span>
      )}
    </div>
  );
}
