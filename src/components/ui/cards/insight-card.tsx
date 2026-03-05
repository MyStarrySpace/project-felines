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
      className={`border border-white/5 p-6 ${href ? "transition-all duration-[var(--duration-fast)] hover:-translate-y-1 hover:border-white/10" : ""} ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        {icon && <span className="text-teal-400">{icon}</span>}
        {badge && <Badge variant="accent">{badge}</Badge>}
      </div>
      <h3 className="mb-2 font-serif text-lg text-gray-200">{title}</h3>
      <div className="text-sm leading-relaxed text-gray-400">
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
