import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/DaRealDB",
    icon: Github,
  },
  {
    name: "Email",
    url: "mailto:darylbacusmo11@email.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Daryl D. Bacusmo",
  title: "Computer Engineering Student",
  description: "Motivated Computer Engineering student with foundational knowledge in networking, operating systems, system troubleshooting, and cloud technology concepts.",
};
