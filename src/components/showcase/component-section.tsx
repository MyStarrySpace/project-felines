import { ReactNode } from "react";

type ComponentSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ComponentSection({
  title,
  description,
  children,
}: ComponentSectionProps) {
  return (
    <section className="border-b border-gray-200 py-16">
      <div className="mb-8">
        <h2 className="font-serif text-[32px] text-navy-900">{title}</h2>
        {description && (
          <p className="mt-2 text-text-muted">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
