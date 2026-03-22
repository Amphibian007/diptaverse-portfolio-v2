import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { EnterpriseWork } from "@/sections/experience/EnterpriseWork";
import { SalesApproach } from "@/sections/experience/SalesApproach";
import { Events } from "@/sections/experience/Events";
import { HowIWork } from "@/sections/how-i-work/HowIWork";
import { CaseStudies } from "@/sections/case-studies/CaseStudies";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <EnterpriseWork />
      <SalesApproach />
      <Events />
      <HowIWork />
      <CaseStudies />
    </main>
  );
}
