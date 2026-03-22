import { Database, Cloud, Rocket, Handshake } from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { caseStudies } from "@/data/caseStudies";
import type { CaseStudy } from "@/data/caseStudies";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="h-4 w-4" />,
  Cloud: <Cloud className="h-4 w-4" />,
  Rocket: <Rocket className="h-4 w-4" />,
  Handshake: <Handshake className="h-4 w-4" />,
};

export function CaseStudies() {
  return (
    <SectionContainer id="case-studies">
      <SectionHeader
        label="Proof of Work"
        title="Case"
        accentWord="Studies"
        accentPosition="after"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {caseStudies.map((study: CaseStudy) => (
          <Card
            key={study.id}
            icon={iconMap[study.iconName]}
            title={study.title}
            description={study.description}
            tags={study.tags}
            cta={{ label: study.cta, href: "#" }}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
