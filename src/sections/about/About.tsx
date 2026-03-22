import {
  Target,
  FlaskConical,
  Database,
  TrendingUp,
  Users,
  GitBranch,
  Rocket,
  Network,
  Code2,
} from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { aboutIntro, aboutCards } from "@/data/about";
import type { AboutCard } from "@/data/about";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="h-4 w-4" />,
  FlaskConical: <FlaskConical className="h-4 w-4" />,
  Database: <Database className="h-4 w-4" />,
  TrendingUp: <TrendingUp className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  GitBranch: <GitBranch className="h-4 w-4" />,
  Rocket: <Rocket className="h-4 w-4" />,
  Network: <Network className="h-4 w-4" />,
};

export function About() {
  return (
    <SectionContainer id="about">
      <SectionHeader
        label="Who I Am"
        title="About"
        accentWord="Me"
        accentPosition="after"
      />

      <div className="flex flex-col items-center">
        <Code2
          className="mb-6 h-5 w-5"
          style={{ color: "var(--accent)" }}
        />

        <p
          className="mb-12 max-w-2xl text-center text-sm leading-7 sm:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          {aboutIntro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutCards.map((card: AboutCard) => (
          <Card
            key={card.id}
            icon={iconMap[card.iconName]}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
