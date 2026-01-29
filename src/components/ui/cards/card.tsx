import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  hover?: boolean;
  className?: string;
};

export function Card({ children, hover = false, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg bg-surface p-[var(--space-card)] shadow-sm ${hover ? "transition-all duration-[var(--duration-fast)] hover:-translate-y-1 hover:shadow-md" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
