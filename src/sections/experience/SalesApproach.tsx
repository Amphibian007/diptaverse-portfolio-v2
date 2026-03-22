import {
  CheckSquare,
  Search,
  FlaskConical,
  Users,
} from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { methodologyCards } from "@/data/experience";
import type { MethodologyCard } from "@/data/experience";

const iconMap: Record<string, React.ReactNode> = {
  CheckSquare: <CheckSquare className="h-4 w-4" />,
  Search: <Search className="h-4 w-4" />,
  FlaskConical: <FlaskConical className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
};

export function SalesApproach() {
  return (
    <SectionContainer id="sales-approach">
      <SectionHeader
        label="How I Qualify"
        title="Sales"
        accentWord="Approach"
        accentPosition="after"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {methodologyCards.map((card: MethodologyCard) => (
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
