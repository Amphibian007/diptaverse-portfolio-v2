"use client";

import {
  Layers,
  Database,
  Cloud,
  BarChart2,
  ClipboardList,
  Handshake,
} from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { expertiseGroups } from "@/data/expertise";
import type { ExpertiseGroup } from "@/data/expertise";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="h-4 w-4" />,
  Database: <Database className="h-4 w-4" />,
  Cloud: <Cloud className="h-4 w-4" />,
  BarChart2: <BarChart2 className="h-4 w-4" />,
  ClipboardList: <ClipboardList className="h-4 w-4" />,
  Handshake: <Handshake className="h-4 w-4" />,
};

function GroupCard({ group }: { group: ExpertiseGroup }) {
  return (
    <div
      className="rounded-xl p-5 transition-colors"
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
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{
            background: "rgba(54,239,220,0.1)",
            color: "var(--accent)",
          }}
        >
          {iconMap[group.iconName]}
        </div>
        <h3
          className="text-sm font-semibold"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-primary)",
          }}
        >
          {group.title}
        </h3>
      </div>

      {/* Tag chips */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded px-2 py-0.5 font-mono text-[10px] font-medium"
            style={{
              background: "rgba(54,239,220,0.08)",
              color: "var(--accent)",
              border: "1px solid rgba(54,239,220,0.15)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Expertise() {
  return (
    <SectionContainer id="expertise">
      <SectionHeader
        label="What I Work With"
        title="My"
        accentWord="Expertise"
        accentPosition="after"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseGroups.map((group: ExpertiseGroup) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </SectionContainer>
  );
}
