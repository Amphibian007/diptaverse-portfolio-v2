import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { processSteps } from "@/data/howIWork";
import type { ProcessStep } from "@/data/howIWork";

function Step({ step }: { step: ProcessStep }) {
  return (
    <div className="flex flex-col">
      {/* Number circle */}
      <div
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
        }}
      >
        <span
          className="font-mono text-sm font-bold"
          style={{ color: "var(--accent)" }}
        >
          {step.number}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mt-4 text-sm font-semibold"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--text-primary)",
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="mt-2 text-sm leading-6"
        style={{ color: "var(--text-secondary)" }}
      >
        {step.description}
      </p>
    </div>
  );
}

export function HowIWork() {
  return (
    <SectionContainer id="how-i-work">
      <SectionHeader
        label="My Process"
        title="How I"
        accentWord="Work"
        accentPosition="after"
      />

      {/* Steps wrapper */}
      <div className="relative">
        {/* Connecting line — desktop only */}
        <div
          className="absolute top-5 left-0 right-0 hidden -translate-y-1/2 border-t lg:block"
          style={{ borderColor: "var(--border)" }}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {processSteps.map((step: ProcessStep) => (
            <Step key={step.id} step={step} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
