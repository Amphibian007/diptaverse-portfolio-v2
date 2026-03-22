"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { jobs } from "@/data/experience";
import type { ExperienceEntry } from "@/data/experience";

function JobCard({ job }: { job: ExperienceEntry }) {
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
          className="text-lg font-semibold"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--accent)",
          }}
        >
          {job.role}
        </h3>
        <span
          className="shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-semibold"
          style={{
            background: "rgba(54,239,220,0.08)",
            color: "var(--accent)",
            border: "1px solid rgba(54,239,220,0.15)",
          }}
        >
          {job.type}
        </span>
      </div>

      {/* Meta line */}
      <p
        className="mb-4 font-mono text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        {job.company}
        <span className="mx-2" style={{ color: "var(--accent)" }}>
          ·
        </span>
        {job.dates}
        <span className="mx-2" style={{ color: "var(--accent)" }}>
          ·
        </span>
        {job.location}
      </p>

      {/* Divider */}
      <hr
        className="mb-4"
        style={{ borderColor: "var(--border)" }}
      />

      {/* Description */}
      <p
        className="mb-4 text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        {job.description}
      </p>

      {/* Bullets */}
      <ul className="flex flex-col gap-2">
        {job.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-6">
            <span
              className="mt-[3px] shrink-0 font-mono text-xs"
              style={{ color: "var(--accent)" }}
            >
              ·
            </span>
            <span style={{ color: "var(--text-secondary)" }}>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EnterpriseWork() {
  return (
    <SectionContainer id="enterprise-work">
      <SectionHeader
        label="Where I've Worked"
        title="Enterprise"
        accentWord="Work"
        accentPosition="after"
      />
      <div className="flex flex-col gap-5">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </SectionContainer>
  );
}
