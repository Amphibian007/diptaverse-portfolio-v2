type SectionContainerProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionContainer({
  id,
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${className}`}
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}
