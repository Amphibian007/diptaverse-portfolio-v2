export type CaseStudy = {
  id: string;
  iconName: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "enterprise-db-migration",
    iconName: "Database",
    title: "Enterprise Database Migration",
    description:
      "A Fortune-500 financial services firm evaluated KubeDB for migrating 40TB PostgreSQL workloads to Kubernetes-native infrastructure. Led full evaluation and POC execution to decision.",
    tags: ["KubeDB", "PostgreSQL", "Enterprise POC"],
    cta: "View Case Study",
  },
  {
    id: "multi-cloud-evaluation",
    iconName: "Cloud",
    title: "Multi-Cloud Platform Evaluation",
    description:
      "Led a 90-day structured evaluation for a global SaaS company choosing between 3 Kubernetes data platforms. Delivered a decision-ready technical readout.",
    tags: ["Platform Evaluation", "Multi-Cloud", "MEDDICC"],
    cta: "View Case Study",
  },
  {
    id: "poc-to-production",
    iconName: "Rocket",
    title: "POC-to-Production in 60 Days",
    description:
      "Designed and executed a POC for a Southeast Asian telecom that resulted in a 7-figure platform adoption decision within 60 days of engagement start.",
    tags: ["POC Leadership", "KubeDB", "Telecom"],
    cta: "View Case Study",
  },
  {
    id: "alliance-program",
    iconName: "Handshake",
    title: "Alliance Partner Program",
    description:
      "Built AppsCode's first structured alliance program with AWS, GCP, and Azure marketplace integrations and co-sell motion from scratch.",
    tags: ["Alliances", "Cloud Marketplace", "GTM"],
    cta: "View Case Study",
  },
];
