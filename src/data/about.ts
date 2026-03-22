export type AboutCard = {
  id: string;
  iconName: string;
  title: string;
  description: string;
};

export const aboutIntro =
  "I'm Dipto Brata Das, Director of Sales Engineering & Alliances at AppsCode. I bridge enterprise technical complexity and business decision-making — guiding buyers through structured platform evaluations, proof-of-concept engagements, and production adoption of Kubernetes-native data systems.";

export const aboutCards: AboutCard[] = [
  {
    id: "platform-evaluations",
    iconName: "Target",
    title: "Enterprise Platform Evaluations",
    description:
      "Architecting evaluation frameworks for Kubernetes-native platforms, guiding enterprise buyers through structured technical decision cycles.",
  },
  {
    id: "poc-leadership",
    iconName: "FlaskConical",
    title: "Proof-of-Concept Leadership",
    description:
      "Designing and executing end-to-end POC engagements that translate platform capabilities into measurable, decision-ready outcomes.",
  },
  {
    id: "data-systems",
    iconName: "Database",
    title: "Kubernetes-Native Data Systems",
    description:
      "Deep expertise in KubeDB, Voyager, and AppsCode's data platform ecosystem — from architecture review to production adoption.",
  },
  {
    id: "sales-strategy",
    iconName: "TrendingUp",
    title: "Technical Sales Strategy",
    description:
      "Building and executing enterprise sales motions for complex, multi-stakeholder platform deals with long evaluation cycles.",
  },
  {
    id: "stakeholder-alignment",
    iconName: "Users",
    title: "Stakeholder Alignment",
    description:
      "Translating complex Kubernetes platform capabilities into business-value narratives for C-suite, engineering leads, and procurement teams.",
  },
  {
    id: "architecture-review",
    iconName: "GitBranch",
    title: "Platform Architecture Review",
    description:
      "Conducting deep technical architecture reviews to assess platform fit, scalability, and production readiness for enterprise workloads.",
  },
  {
    id: "poc-to-production",
    iconName: "Rocket",
    title: "POC-to-Production Adoption",
    description:
      "Guiding organizations from successful POC outcomes through to full production deployment and long-term platform adoption.",
  },
  {
    id: "alliance-development",
    iconName: "Network",
    title: "Alliance & Partner Development",
    description:
      "Building strategic alliance programs with AWS, GCP, and Azure — including marketplace integrations and co-sell motions.",
  },
];
