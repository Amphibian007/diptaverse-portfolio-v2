import { ChevronDown } from "lucide-react";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Expertise", href: "#expertise" },
  {
    label: "Experience",
    href: "#experience",
    children: [
      { label: "Enterprise Work", href: "#enterprise-work" },
      { label: "Sales Approach", href: "#sales-approach" },
      { label: "Events", href: "#events" },
    ],
  },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blogs", href: "#blogs" },
  {
    label: "Background",
    href: "#background",
    children: [
      { label: "Education", href: "#education" },
      { label: "Leadership", href: "#leadership" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

function NavDropdown({ item }: { item: NavItem }) {
  const isHome = item.label === "Home";

  if (!item.children) {
    return (
      <a
        href={item.href}
        className={`pb-1 transition-colors hover:text-[#2ed1c8] focus-visible:text-[#2ed1c8] focus-visible:outline-none ${
          isHome ? "border-b border-[#2ed1c8] text-[#2ed1c8]" : ""
        }`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="group/navitem relative">
      <a
        href={item.href}
        className="inline-flex items-center gap-1 pb-1 transition-colors hover:text-[#2ed1c8] focus-visible:text-[#2ed1c8] focus-visible:outline-none"
      >
        <span>{item.label}</span>
        <ChevronDown className="h-3 w-3 translate-y-px" />
      </a>

      <div className="invisible absolute top-full left-0 z-20 mt-2 min-w-[12.75rem] translate-y-1 rounded-md border border-white/10 bg-[#142033]/95 p-1.5 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-150 group-hover/navitem:visible group-hover/navitem:translate-y-0 group-hover/navitem:opacity-100 group-focus-within/navitem:visible group-focus-within/navitem:translate-y-0 group-focus-within/navitem:opacity-100">
        <div className="flex flex-col">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              className="rounded-sm px-3 py-2 text-[11px] text-[#9eafbe] transition-colors hover:bg-white/[0.03] hover:text-[#2ed1c8] focus-visible:bg-white/[0.03] focus-visible:text-[#2ed1c8] focus-visible:outline-none"
            >
              {child.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroNav() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-5">
      <a
        href="#home"
        className="font-mono text-sm font-semibold tracking-tight text-[#2ed1c8]"
      >
        &lt;diptaverse /&gt;
      </a>

      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 font-mono text-[11px] font-semibold text-[#dce8f4]"
      >
        {navItems.map((item) => (
          <NavDropdown key={item.label} item={item} />
        ))}
      </nav>
    </header>
  );
}
