export type ExpertiseGroup = {
  id: string;
  iconName: string;
  title: string;
  items: string[];
};

export const expertiseGroups: ExpertiseGroup[] = [
  {
    id: "kubernetes",
    iconName: "Layers",
    title: "Kubernetes Ecosystem",
    items: ["Kubernetes", "KubeDB", "Helm", "Voyager", "Prometheus", "Grafana"],
  },
  {
    id: "data-platforms",
    iconName: "Database",
    title: "Data Platforms",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Kafka"],
  },
  {
    id: "cloud-infra",
    iconName: "Cloud",
    title: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "Azure", "Docker", "Terraform", "ArgoCD"],
  },
  {
    id: "sales-gtm",
    iconName: "BarChart2",
    title: "Sales & GTM Tools",
    items: ["MEDDICC", "Salesforce", "HubSpot", "Gong", "Notion", "Confluence"],
  },
  {
    id: "evaluation",
    iconName: "ClipboardList",
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
    iconName: "Handshake",
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
