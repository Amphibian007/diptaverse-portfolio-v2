# Diptaverse Portfolio v2 — Claude Instructions

## Who I Am
Name: Dipto Brata Das
Title: Director of Sales Engineering & Alliances
Company: AppsCode
Location: Dhaka, Bangladesh
Email: dipto@appsco.de
LinkedIn: linkedin.com/in/diptabrata
GitHub: github.com/diptaverse
Twitter: @diptaverse

## What This Project Is
Premium personal portfolio website.
Vibe: enterprise technical credibility, structured
thinking, calm confidence.
NOT a freelancer portfolio. NOT flashy.

## Tech Stack
Next.js · TypeScript · Tailwind v4 · Framer Motion
Node 18+ · React 19

## Design System
Background: #071426
Panels: #0F223F
Secondary: #13294B
Text primary: #EAF7FF
Text secondary: #9DB7C8
Text muted: #6F8DA1
Accent: #36EFDC
Borders: rgba(255,255,255,0.08)
Fonts: Space Grotesk (heading) · Inter (body) ·
JetBrains Mono (mono)

## Architecture Rules
- Sections: src/sections/[name]/ComponentName.tsx
- All content: src/data/ as typed TypeScript exports
- Shared UI: src/components/
- Zero hardcoded content in JSX components
- All content editable via data files only

## Navbar Order
Home → About → Experience → How I Work →
Case Studies → Expertise → Blogs → Background → Contact
Experience dropdown: Enterprise Work · Sales Approach · Events
Background dropdown: Education · Leadership

## Section IDs
#home #about #enterprise-work #sales-approach
#events #how-i-work #case-studies #expertise
#blogs #education #leadership #contact

## Completed Sections
- Hero ✅ (do NOT modify)

## Workflow Rules
- Always read CLAUDE.md before doing anything
- One section at a time
- Show plan first, wait for approval, then implement
- After each section: self-review, wire into page.tsx
- Never redesign — replicate PDF layout
- Never merge sections
- Never hardcode content in components

## Reference
PDF: Emanuel Lázaro's portfolio (uploaded in chat)
Replicate his layout, spacing, and visual hierarchy.
Replace his content with mine.

## Content Files
src/data/blogs.ts — 6 blog posts (fully editable)
src/data/experience.ts — work history
src/data/caseStudies.ts — 4 case studies
src/data/expertise.ts — skill groups
src/data/education.ts — placeholder, fill later
src/data/contact.ts — contact links

## Important Notes
- Hero uses #2ed1c8 accent — fix to #36EFDC in Phase 3
- Background section uses placeholder content
- Events section uses placeholder content
- Both filled by me later
- Blogs: Claude writes full 450-word posts,
  stored in blogs.ts, fully editable by me

## Section Completion Status
- Hero ✅
- About ✅
- Experience ✅
- How I Work ⬜
- Case Studies ⬜
- Expertise ⬜
- Blogs ⬜
- Background ⬜
- Contact ⬜
