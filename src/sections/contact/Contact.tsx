"use client";

import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { contactLinks, contactIntro, footerText } from "@/data/contact";
import type { ContactLink } from "@/data/contact";

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Github: <Github className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
};

function ContactCard({ link }: { link: ContactLink }) {
  return (
    <div
      className="flex flex-col rounded-xl p-6 transition-colors"
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
      {/* Icon */}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg"
        style={{
          background: "rgba(54,239,220,0.1)",
          color: "var(--accent)",
        }}
      >
        {iconMap[link.iconName]}
      </div>

      {/* Label */}
      <p
        className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-widest"
        style={{ color: "var(--text-muted)" }}
      >
        {link.label}
      </p>

      {/* Value */}
      <p
        className="mt-1 text-sm font-semibold"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--text-primary)",
        }}
      >
        {link.value}
      </p>

      {/* CTA */}
      <a
        href={link.href}
        target={link.href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="mt-auto pt-5 font-mono text-[11px] font-semibold transition-opacity hover:opacity-70"
        style={{ color: "var(--accent)" }}
      >
        {link.cta} →
      </a>
    </div>
  );
}

export function Contact() {
  return (
    <SectionContainer id="contact">
      <SectionHeader
        label="Get in Touch"
        title="Let's"
        accentWord="Connect"
        accentPosition="after"
      />

      {/* Intro */}
      <p
        className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 sm:text-base"
        style={{ color: "var(--text-secondary)" }}
      >
        {contactIntro}
      </p>

      {/* Contact cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactLinks.map((link: ContactLink) => (
          <ContactCard key={link.id} link={link} />
        ))}
      </div>

      {/* Footer */}
      <div
        className="mt-16 border-t pt-8 text-center font-mono text-xs"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-muted)",
        }}
      >
        {footerText}
      </div>
    </SectionContainer>
  );
}
