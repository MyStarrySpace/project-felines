import { ReactNode } from "react";

type ContainerWidth = "full" | "reading" | "narrow";

type ContainerProps = {
  children: ReactNode;
  width?: ContainerWidth;
  section?: boolean;
  className?: string;
};

const widthStyles: Record<ContainerWidth, string> = {
  full: "max-w-[var(--width-max)]",
  reading: "max-w-[var(--width-reading)]",
  narrow: "max-w-[var(--width-narrow)]",
};

export function Container({
  children,
  width = "full",
  section = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 ${widthStyles[width]} ${section ? "py-[var(--space-section)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
