export type ExpertiseGroup = {
  id: string;
  title: string;
  items: string[];
};

export const expertiseGroups: ExpertiseGroup[] = [
  {
    id: "kubernetes",
    title: "Kubernetes Ecosystem",
    items: ["Kubernetes", "KubeDB", "Helm", "Voyager", "Prometheus", "Grafana"],
  },
  {
    id: "data-platforms",
    title: "Data Platforms",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Kafka"],
  },
  {
    id: "cloud-infra",
    title: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "Azure", "Docker", "Terraform", "ArgoCD"],
  },
  {
    id: "sales-gtm",
    title: "Sales & GTM Tools",
    items: ["MEDDICC", "Salesforce", "HubSpot", "Gong", "Notion", "Confluence"],
  },
  {
    id: "evaluation",
    title: "Evaluation Frameworks",
    items: [
      "POC Design",
      "RFP Response",
      "TCO Modeling",
      "ROI Analysis",
      "Win/Loss Review",
      "Competitive Analysis",
    ],
  },
  {
    id: "alliances",
    title: "Alliances & Partnerships",
    items: [
      "AWS Marketplace",
      "GCP Marketplace",
      "Azure Marketplace",
      "Co-Sell Programs",
      "Partner Portal",
      "ISV Programs",
    ],
  },
];
