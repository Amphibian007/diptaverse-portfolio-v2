export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    description:
      "Understand the buyer's infrastructure, pain points, existing stack, and key decision stakeholders before any evaluation begins.",
  },
  {
    id: "qualification",
    number: "02",
    title: "Qualification",
    description:
      "Apply MEDDICC to assess fit, budget, authority, timeline, and competitive landscape before committing to evaluation cycles.",
  },
  {
    id: "evaluation",
    number: "03",
    title: "Evaluation",
    description:
      "Architect the technical assessment framework — define scope, success criteria, and evaluation environment with the buyer.",
  },
  {
    id: "poc",
    number: "04",
    title: "POC",
    description:
      "Execute a time-boxed proof-of-concept with agreed success criteria, daily progress visibility, and decision-ready readout delivery.",
  },
  {
    id: "adoption",
    number: "05",
    title: "Adoption",
    description:
      "Guide from signed contract through production deployment — architecture review, onboarding, and long-term platform health monitoring.",
  },
];
