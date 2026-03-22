type SectionHeaderProps = {
  label: string;
  title: string;
  accentWord: string;
  accentPosition?: "before" | "after";
  subtitle?: string;
};

export function SectionHeader({
  label,
  title,
  accentWord,
  accentPosition = "after",
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <span
        className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>

      <h2
        className="text-3xl font-bold sm:text-4xl"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--text-primary)",
        }}
      >
        {accentPosition === "before" && (
          <>
            <span style={{ color: "var(--accent)" }}>{accentWord}</span>{" "}
            {title}
          </>
        )}
        {accentPosition === "after" && (
          <>
            {title}{" "}
            <span style={{ color: "var(--accent)" }}>{accentWord}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p
          className="mt-4 max-w-2xl text-sm leading-7 sm:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
