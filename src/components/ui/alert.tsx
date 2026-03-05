import { ReactNode } from "react";

type AlertVariant = "info" | "warning" | "success" | "neutral";

type AlertProps = {
  children: ReactNode;
  variant?: AlertVariant;
  title?: string;
  className?: string;
};

const variantBorder: Record<AlertVariant, string> = {
  info: "border-l-teal-500/50",
  warning: "border-l-amber-500/50",
  success: "border-l-green-500/50",
  neutral: "border-l-gray-500/40",
};

export function Alert({
  children,
  variant = "info",
  title,
  className = "",
}: AlertProps) {
  return (
    <div
      className={`border-l-2 pl-4 py-3 ${variantBorder[variant]} ${className}`}
      role="alert"
    >
      {title && <p className="mb-1 text-sm font-medium text-gray-200">{title}</p>}
      <div className="text-sm text-gray-400">{children}</div>
    </div>
  );
}
