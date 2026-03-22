"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { blogPosts } from "@/data/blogs";
import type { BlogPost } from "@/data/blogs";

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    const isHeading = block.startsWith("**") && block.endsWith("**");
    if (isHeading) {
      return (
        <p
          key={i}
          className="mt-5 text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {block.slice(2, -2)}
        </p>
      );
    }
    return (
      <p
        key={i}
        className="mt-3 text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        {block}
      </p>
    );
  });
}

function BlogCard({
  post,
  expanded,
  onToggle,
}: {
  post: BlogPost;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-xl p-6 transition-colors"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Title */}
      <h3
        className="text-base font-semibold leading-snug"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--text-primary)",
        }}
      >
        {post.title}
      </h3>

      {/* Meta row */}
      <p
        className="mt-2 font-mono text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        {formatDate(post.date)}
        <span className="mx-2" style={{ color: "var(--accent)" }}>
          ·
        </span>
        {post.readTime}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
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

      {/* Excerpt */}
      <p
        className="mt-3 text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        {post.excerpt}
      </p>

      {/* Expanded body */}
      {expanded && (
        <div className="mt-5">
          <hr className="mb-5" style={{ borderColor: "var(--border)" }} />
          {renderBody(post.body)}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="mt-5 font-mono text-[11px] font-semibold transition-opacity hover:opacity-70"
        style={{ color: "var(--accent)" }}
      >
        {expanded ? "Collapse ↑" : "Read Article →"}
      </button>
    </div>
  );
}

export function Blogs() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function handleToggle(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <SectionContainer id="blogs">
      <SectionHeader
        label="Thought Leadership"
        title="My"
        accentWord="Blogs"
        accentPosition="after"
      />
      <div className="flex flex-col gap-4">
        {blogPosts.map((post: BlogPost) => (
          <BlogCard
            key={post.id}
            post={post}
            expanded={expandedId === post.id}
            onToggle={() => handleToggle(post.id)}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
