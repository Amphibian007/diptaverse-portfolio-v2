import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { EnterpriseWork } from "@/sections/experience/EnterpriseWork";
import { SalesApproach } from "@/sections/experience/SalesApproach";
import { Events } from "@/sections/experience/Events";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <EnterpriseWork />
      <SalesApproach />
      <Events />
    </main>
  );
}
