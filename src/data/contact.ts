export type ContactLink = {
  id: string;
  iconName: string;
  label: string;
  value: string;
  href: string;
  cta: string;
};

export const contactIntro =
  "I work with enterprise teams navigating platform evaluation, POC execution, and Kubernetes-native data adoption. Whether you want to discuss KubeDB, evaluation frameworks, or alliance strategy — I'd love to connect.";

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    iconName: "Mail",
    label: "Email",
    value: "dipto@appsco.de",
    href: "mailto:dipto@appsco.de",
    cta: "Send Email",
  },
  {
    id: "linkedin",
    iconName: "Linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/diptabrata",
    href: "https://linkedin.com/in/diptabrata",
    cta: "View Profile",
  },
  {
    id: "github",
    iconName: "Github",
    label: "GitHub",
    value: "github.com/diptaverse",
    href: "https://github.com/diptaverse",
    cta: "Visit GitHub",
  },
  {
    id: "twitter",
    iconName: "Twitter",
    label: "Twitter",
    value: "@diptaverse",
    href: "https://twitter.com/diptaverse",
    cta: "Follow",
  },
];

export const footerText =
  "© 2026 Dipto Brata Das. All rights reserved. Built with Next.js, TypeScript & Tailwind CSS";
