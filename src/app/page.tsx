import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { EnterpriseWork } from "@/sections/experience/EnterpriseWork";
import { SalesApproach } from "@/sections/experience/SalesApproach";
import { Events } from "@/sections/experience/Events";
import { HowIWork } from "@/sections/how-i-work/HowIWork";
import { CaseStudies } from "@/sections/case-studies/CaseStudies";
import { Expertise } from "@/sections/expertise/Expertise";
import { Blogs } from "@/sections/blogs/Blogs";
import { Education } from "@/sections/background/Education";
import { Leadership } from "@/sections/background/Leadership";
import { Contact } from "@/sections/contact/Contact";

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
      <Expertise />
      <Blogs />
      <Education />
      <Leadership />
      <Contact />
    </main>
  );
}
