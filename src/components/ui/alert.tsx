import { ReactNode } from "react";

type AlertVariant = "info" | "warning" | "success" | "neutral";

type AlertProps = {
  children: ReactNode;
  variant?: AlertVariant;
  title?: string;
  className?: string;
};

const variantStyles: Record<AlertVariant, string> = {
  info: "border-l-teal-600 bg-teal-50/50 text-teal-800",
  warning: "border-l-amber-600 bg-amber-50/50 text-amber-600",
  success: "border-l-green-600 bg-green-50/50 text-green-600",
  neutral: "border-l-gray-400 bg-gray-100/50 text-gray-700",
};

export function Alert({
  children,
  variant = "info",
  title,
  className = "",
}: AlertProps) {
  return (
    <div
      className={`rounded-r-lg border-l-4 p-4 ${variantStyles[variant]} ${className}`}
      role="alert"
    >
      {title && <p className="mb-1 font-medium">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
