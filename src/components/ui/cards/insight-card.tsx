import { ReactNode } from "react";
import { Badge } from "../badge";

type InsightCardProps = {
  icon?: ReactNode;
  badge?: string;
  title: string;
  children: ReactNode;
  href?: string;
  className?: string;
};

export function InsightCard({
  icon,
  badge,
  title,
  children,
  href,
  className = "",
}: InsightCardProps) {
  const content = (
    <div
      className={`border-l-4 border-l-teal-600 bg-surface p-6 shadow-sm ${href ? "transition-all duration-[var(--duration-fast)] hover:-translate-y-1 hover:shadow-md" : ""} ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        {icon && <span className="text-teal-600">{icon}</span>}
        {badge && <Badge variant="accent">{badge}</Badge>}
      </div>
      <h3 className="mb-2 font-serif text-lg text-navy-900">{title}</h3>
      <div className="text-sm leading-relaxed text-text-secondary">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {content}
      </a>
    );
  }

  return content;
}
