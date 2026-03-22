export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
};

export type MethodologyCard = {
  id: string;
  iconName: string;
  title: string;
  description: string;
};

export type EventCard = {
  id: string;
  title: string;
  type: string;
  date: string;
  description: string;
  cta: string;
};

export const jobs: ExperienceEntry[] = [
  {
    id: "appsco-de",
    role: "Director of Sales Engineering & Alliances",
    company: "AppsCode",
    dates: "Jan 2022 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    description:
      "Leading enterprise technical sales for KubeDB and AppsCode's Kubernetes-native data platform ecosystem across global enterprise accounts.",
    bullets: [
      "Architecting evaluation frameworks for enterprise buyers across APAC and global markets",
      "Owning end-to-end POC lifecycle from scoping through execution to decision-ready readout delivery",
      "Translating complex Kubernetes platform capabilities into business-value narratives for C-suite stakeholders",
      "Managing strategic alliance partnerships with cloud vendors and technology partners",
      "Driving platform adoption from POC completion through to production deployment",
    ],
  },
];

export const methodologyCards: MethodologyCard[] = [
  {
    id: "meddicc",
    iconName: "CheckSquare",
    title: "MEDDICC Framework",
    description:
      "Qualification methodology applied to all enterprise opportunities — ensuring fit before committing to evaluation cycles.",
  },
  {
    id: "technical-discovery",
    iconName: "Search",
    title: "Technical Discovery",
    description:
      "Deep-dive architecture sessions before any evaluation begins — understanding infrastructure, pain points, and decision criteria.",
  },
  {
    id: "poc-design",
    iconName: "FlaskConical",
    title: "POC Design System",
    description:
      "Structured POC scoping with defined success criteria, fixed timelines, and measurable outcomes agreed upfront with the buyer.",
  },
  {
    id: "executive-alignment",
    iconName: "Users",
    title: "Executive Alignment",
    description:
      "C-suite narrative built alongside technical evaluation — ensuring business and technical stakeholders move together toward a decision.",
  },
];

export const eventCards: EventCard[] = [
  {
    id: "event-1",
    title: "[Event Name — Add Yours]",
    type: "Conference Talk",
    date: "2024",
    description: "[Your event description here]",
    cta: "View Details",
  },
  {
    id: "event-2",
    title: "[Event Name — Add Yours]",
    type: "Webinar",
    date: "2024",
    description: "[Your event description here]",
    cta: "View Details",
  },
  {
    id: "event-3",
    title: "[Event Name — Add Yours]",
    type: "Panel",
    date: "2024",
    description: "[Your event description here]",
    cta: "View Details",
  },
];
