"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { leadershipEntries } from "@/data/education";
import type { LeadershipEntry } from "@/data/education";

function LeadershipCard({ entry }: { entry: LeadershipEntry }) {
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
          {entry.role}
        </h3>
        <span
          className="shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-semibold"
          style={{
            background: "rgba(54,239,220,0.08)",
            color: "var(--accent)",
            border: "1px solid rgba(54,239,220,0.15)",
          }}
        >
          {entry.year}
        </span>
      </div>

      {/* Meta line */}
      <p
        className="mb-4 font-mono text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        {entry.organization}
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

export function Leadership() {
  return (
    <SectionContainer id="leadership">
      <SectionHeader
        label="Community & Impact"
        title="My"
        accentWord="Leadership"
        accentPosition="after"
      />
      <div className="flex flex-col gap-5">
        {leadershipEntries.map((entry: LeadershipEntry) => (
          <LeadershipCard key={entry.id} entry={entry} />
        ))}
      </div>
    </SectionContainer>
  );
}
