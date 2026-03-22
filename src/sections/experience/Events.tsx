"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { eventCards } from "@/data/experience";
import type { EventCard } from "@/data/experience";

function EventCardItem({ event }: { event: EventCard }) {
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
            color: "var(--text-primary)",
          }}
        >
          {event.title}
        </h3>
        <span
          className="shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-semibold"
          style={{
            background: "rgba(54,239,220,0.08)",
            color: "var(--accent)",
            border: "1px solid rgba(54,239,220,0.15)",
          }}
        >
          {event.type}
        </span>
      </div>

      {/* Date */}
      <p
        className="mb-4 font-mono text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        {event.date}
      </p>

      {/* Description */}
      <p
        className="mb-5 text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        {event.description}
      </p>

      {/* CTA */}
      <a
        href="#"
        className="font-mono text-[11px] font-semibold transition-opacity hover:opacity-70"
        style={{ color: "var(--accent)" }}
      >
        {event.cta} →
      </a>
    </div>
  );
}

export function Events() {
  return (
    <SectionContainer id="events">
      <SectionHeader
        label="Speaking & Events"
        title="My"
        accentWord="Events"
        accentPosition="after"
      />
      <div className="flex flex-col gap-5">
        {eventCards.map((event: EventCard) => (
          <EventCardItem key={event.id} event={event} />
        ))}
      </div>
    </SectionContainer>
  );
}
