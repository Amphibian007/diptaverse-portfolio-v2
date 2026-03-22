"use client";

type CardCta = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
  cta?: CardCta;
};

export function Card({ icon, title, description, tags, cta }: CardProps) {
  return (
    <div
      className="flex flex-col gap-4 rounded-xl p-5 transition-colors"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background =
          "var(--panel-secondary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "var(--panel)";
      }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg"
        style={{ background: "rgba(54,239,220,0.1)", color: "var(--accent)" }}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3
          className="text-sm font-semibold"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded px-2 py-0.5 font-mono text-[10px] font-medium"
              style={{
                background: "rgba(54,239,220,0.08)",
                color: "var(--accent)",
                border: "1px solid rgba(54,239,220,0.15)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {cta && (
        <div className="mt-auto pt-1">
          {cta.href ? (
            <a
              href={cta.href}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              {cta.label} →
            </a>
          ) : (
            <button
              onClick={cta.onClick}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              {cta.label} →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
