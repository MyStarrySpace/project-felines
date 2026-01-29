import { Badge } from "../badge";

type PathwayCardProps = {
  step: number;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
};

export function PathwayCard({
  step,
  title,
  description,
  tags,
  className = "",
}: PathwayCardProps) {
  return (
    <div
      className={`rounded-lg bg-surface p-6 shadow-sm transition-all duration-[var(--duration-fast)] hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      <div className="mb-3">
        <Badge variant="default" size="md">
          Step {step}
        </Badge>
      </div>
      <h3 className="mb-2 font-serif text-xl text-navy-900">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="neutral" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
