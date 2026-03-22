export type EducationEntry = {
  id: string;
  degree: string;
  university: string;
  duration: string;
  status: "Completed" | "In Progress" | "Enrolled";
  description: string;
};

export type Certification = {
  id: string;
  label: string;
};

export type LeadershipEntry = {
  id: string;
  role: string;
  organization: string;
  year: string;
  description: string;
};

export const educationEntries: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "[Your Degree — e.g. BSc Computer Science]",
    university: "[University Name]",
    duration: "[Year – Year]",
    status: "Completed",
    description: "[Add your focus areas here]",
  },
  {
    id: "edu-2",
    degree: "[Your Degree]",
    university: "[University Name]",
    duration: "[Year – Year]",
    status: "In Progress",
    description: "[Add your focus areas here]",
  },
];

export const certifications: Certification[] = [
  { id: "cert-1", label: "[Certification 1]" },
  { id: "cert-2", label: "[Certification 2]" },
  { id: "cert-3", label: "[Certification 3]" },
  { id: "cert-4", label: "[Certification 4]" },
];

export const leadershipEntries: LeadershipEntry[] = [
  {
    id: "lead-1",
    role: "[Leadership Role]",
    organization: "[Organization Name]",
    year: "[Year]",
    description: "[What you did, your impact]",
  },
  {
    id: "lead-2",
    role: "[Leadership Role]",
    organization: "[Organization Name]",
    year: "[Year]",
    description: "[What you did, your impact]",
  },
];
