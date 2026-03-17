import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { RotatingRole } from "@/sections/hero/RotatingRole";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Evaluations", href: "#evaluations" },
  { label: "Proof", href: "#proof" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const fieldDots = [
  { top: "7%", left: "10%", size: "h-1 w-1" },
  { top: "12%", left: "32%", size: "h-1 w-1" },
  { top: "11%", left: "63%", size: "h-1.5 w-1.5" },
  { top: "15%", left: "90%", size: "h-1 w-1" },
  { top: "24%", left: "18%", size: "h-1 w-1" },
  { top: "27%", left: "71%", size: "h-1 w-1" },
  { top: "31%", left: "83%", size: "h-1 w-1" },
  { top: "39%", left: "27%", size: "h-1 w-1" },
  { top: "43%", left: "59%", size: "h-1 w-1" },
  { top: "46%", left: "78%", size: "h-1.5 w-1.5" },
  { top: "58%", left: "14%", size: "h-1 w-1" },
  { top: "63%", left: "44%", size: "h-1 w-1" },
  { top: "68%", left: "87%", size: "h-1 w-1" },
  { top: "74%", left: "24%", size: "h-1.5 w-1.5" },
  { top: "79%", left: "66%", size: "h-1 w-1" },
  { top: "84%", left: "8%", size: "h-1 w-1" },
  { top: "88%", left: "53%", size: "h-1 w-1" },
  { top: "91%", left: "92%", size: "h-1 w-1" },
];

const fieldLines = [
  { top: "10%", left: "8%", width: "w-6", rotate: "-rotate-12" },
  { top: "22%", left: "69%", width: "w-8", rotate: "rotate-12" },
  { top: "37%", left: "75%", width: "w-7", rotate: "-rotate-45" },
  { top: "54%", left: "33%", width: "w-8", rotate: "rotate-12" },
  { top: "70%", left: "80%", width: "w-10", rotate: "-rotate-12" },
  { top: "83%", left: "19%", width: "w-7", rotate: "rotate-45" },
];

const ecosystemHints = [
  { top: "18%", left: "12%", label: "cloud", rotate: "-rotate-12" },
  { top: "26%", left: "84%", label: "ai agent", rotate: "rotate-6" },
  { top: "71%", left: "16%", label: "terraform", rotate: "rotate-3" },
  { top: "79%", left: "82%", label: "kubernetes", rotate: "-rotate-6" },
];

const portraitSrc = "/images/dipta.jpg";

function HeroField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {fieldDots.map((dot) => (
        <span
          key={`${dot.top}-${dot.left}`}
          className={`absolute rounded-full bg-[#30d1c8]/55 ${dot.size}`}
          style={{ top: dot.top, left: dot.left }}
        />
      ))}
      {fieldLines.map((line) => (
        <span
          key={`${line.top}-${line.left}`}
          className={`absolute ${line.width} ${line.rotate} border-t border-[#30d1c8]/20`}
          style={{ top: line.top, left: line.left }}
        />
      ))}
      {ecosystemHints.map((hint) => (
        <span
          key={hint.label}
          className={`absolute ${hint.rotate} font-mono text-[10px] tracking-[0.28em] text-[#8fe9e2]/[0.12]`}
          style={{ top: hint.top, left: hint.left }}
        >
          {hint.label}
        </span>
      ))}
    </div>
  );
}

function HeroAvatar() {
  return (
    <div className="relative mb-8 h-32 w-32 sm:h-44 sm:w-44">
      <div className="absolute inset-1 rounded-full bg-[#2ed1c8]/12 blur-2xl" />
      <div className="absolute inset-0 rounded-full border border-[#29d0c6] bg-[#162338]" />
      <div className="absolute inset-[5px] overflow-hidden rounded-full bg-[#122033]">
        <Image
          src={portraitSrc}
          alt="Portrait of Dipta Brata Das"
          fill
          className="object-cover object-center"
          sizes="(min-width: 640px) 11rem, 8rem"
          quality={100}
          priority
        />
      </div>
      <span className="absolute bottom-1.5 right-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#0f1828] bg-[#29d0c6]" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0f1828]"
    >
      <HeroField />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pt-5 pb-8 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-5">
          <a
            href="#hero"
            className="font-mono text-sm font-semibold tracking-tight text-[#2ed1c8]"
          >
            &lt;diptaverse /&gt;
          </a>

          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 font-mono text-[11px] font-semibold text-[#dce8f4]"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-[#2ed1c8] ${
                  item.label === "Home"
                    ? "border-b border-[#2ed1c8] pb-1 text-[#2ed1c8]"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex max-w-4xl flex-col items-center text-center">
            <HeroAvatar />

            <h1 className="max-w-[11ch] text-balance font-mono text-[2.1rem] font-bold leading-none tracking-tight text-[#edf5fb] sm:max-w-none sm:text-[4.1rem]">
              Hi! I&apos;m{" "}
              <span className="text-[#2ed1c8]">Dipta Brata Das</span>.
            </h1>

            <p className="mt-5 min-h-[3.6rem] max-w-3xl font-mono text-lg leading-snug text-[#2ed1c8] sm:min-h-[2.1rem] sm:text-[1.7rem]">
              <RotatingRole />
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#95a6b7] sm:text-[0.95rem]">
              Driving enterprise platform adoption through strategic
              evaluation, proof-of-concept leadership, and Kubernetes-native
              data systems.
            </p>

            <p className="mt-5 font-mono text-xs text-[#8d9eaf] sm:text-[0.82rem]">
              Director of Sales Engineering &amp; Alliances{" "}
              <span className="text-[#2ed1c8]">•</span>{" "}
              <a
                href="https://appscode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9eafbe] transition-colors hover:text-[#2ed1c8]"
              >
                AppsCode
              </a>{" "}
              <span className="text-[#2ed1c8]">•</span> DevOps SaaS Platforms
            </p>

            <a
              href="#experience"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#1fc9c1] px-5 py-3 font-mono text-xs font-semibold text-[#0d1b2a] transition-colors hover:bg-[#33d8d1]"
            >
              Explore My Work →
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 pb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[#708295]">
          <span>Scroll</span>
          <ChevronDown className="h-3.5 w-3.5 text-[#2ed1c8]" />
        </div>
      </div>
    </section>
  );
}
