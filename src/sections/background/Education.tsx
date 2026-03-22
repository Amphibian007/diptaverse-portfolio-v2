"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { educationEntries, certifications } from "@/data/education";
import type { EducationEntry } from "@/data/education";

const statusColors: Record<string, string> = {
  Completed: "rgba(54,239,220,0.08)",
  "In Progress": "rgba(54,239,220,0.08)",
  Enrolled: "rgba(54,239,220,0.08)",
};

function EduCard({ entry }: { entry: EducationEntry }) {
  return (
    <div
      className="rounded-xl p-6 transition-colors"
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
      {/* Header row */}
      <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
        <h3
          className="text-base font-semibold"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--accent)",
          }}
        >
          {entry.degree}
        </h3>
        <span
          className="shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-semibold"
          style={{
            background: statusColors[entry.status],
            color: "var(--accent)",
            border: "1px solid rgba(54,239,220,0.15)",
          }}
        >
          {entry.status}
        </span>
      </div>

      {/* Meta line */}
      <p
        className="mb-4 font-mono text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        {entry.university}
        <span className="mx-2" style={{ color: "var(--accent)" }}>
          ·
        </span>
        {entry.duration}
      </p>

      {/* Divider */}
      <hr className="mb-4" style={{ borderColor: "var(--border)" }} />

      {/* Description */}
      <p
        className="text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        {entry.description}
      </p>
    </div>
  );
}

export function Education() {
  return (
    <SectionContainer id="education">
      <SectionHeader
        label="Academic Background"
        title="My"
        accentWord="Education"
        accentPosition="after"
      />

      {/* Education cards */}
      <div className="flex flex-col gap-5">
        {educationEntries.map((entry) => (
          <EduCard key={entry.id} entry={entry} />
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-12">
        <p
          className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "var(--text-muted)" }}
        >
          Certifications & Courses
        </p>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert.id}
              className="rounded px-3 py-1 font-mono text-[11px] font-medium"
              style={{
                background: "var(--panel)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              {cert.label}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
