import { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export function Display({ children, className = "" }: TypographyProps) {
  return (
    <h1
      className={`font-serif text-[56px] leading-[1.1] tracking-[-0.02em] text-navy-900 ${className}`}
    >
      {children}
    </h1>
  );
}

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = TypographyProps & {
  level?: HeadingLevel;
  as?: "h1" | "h2" | "h3" | "h4";
};

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-[42px] leading-[1.15] tracking-[-0.02em]",
  2: "text-[32px] leading-[1.2] tracking-[-0.01em]",
  3: "text-[24px] leading-[1.3] tracking-[-0.005em]",
  4: "text-[20px] leading-[1.4]",
};

export function Heading({
  level = 1,
  as,
  children,
  className = "",
}: HeadingProps) {
  const Tag = as ?? (`h${level}` as const);
  return (
    <Tag
      className={`font-serif text-navy-900 ${headingStyles[level]} ${className}`}
    >
      {children}
    </Tag>
  );
}

type BodySize = "lg" | "base" | "sm";

type BodyProps = TypographyProps & {
  size?: BodySize;
};

const bodyStyles: Record<BodySize, string> = {
  lg: "text-lg leading-[1.7]",
  base: "text-base leading-[1.7]",
  sm: "text-sm leading-[1.6]",
};

export function Body({ size = "base", children, className = "" }: BodyProps) {
  return (
    <p className={`text-text-secondary ${bodyStyles[size]} ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ children, className = "" }: TypographyProps) {
  return (
    <span className={`text-xs leading-[1.5] text-text-muted ${className}`}>
      {children}
    </span>
  );
}

type LabelProps = TypographyProps & {
  uppercase?: boolean;
};

export function Label({
  children,
  uppercase = false,
  className = "",
}: LabelProps) {
  return (
    <span
      className={`text-sm font-medium leading-[1.4] text-text-secondary ${uppercase ? "uppercase tracking-[0.05em]" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
