export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "Onboardly",
    title: "Onboardly:Multi-Tenant SaaS Platform",
    description: "Onboardly is a secure, white-labeled B2B platform that replaces messy paperwork with onboarding portals for any organization.",
    tags: ["TypeScript", "React", "Next.js",  "PostgreSQL", "SaaS", "Supabase"],
    github: "https://github.com/DaRealDB/Onboardly_1",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-violet-500/90 to-fuchsia-500/90",
    screenshots: [
      "/Onboardly.png",
    ],
  },
  {
    id: "top-down-game",
    title: "Hero's Descent: A Wizard's End - Action RPG",
    description: "Hero's Descent is an indie action RPG built in Godot using GDScript, featuring custom state machines, quests, and combat systems. Developed as a CIT-U university project following Michael Games' tutorial framework, it expands on the base artwork with custom narrative, dialogue, and creative direction.",
    tags: ["GDScript", "Godot Engine", "Game Dev"],
    github: "https://darealindie.itch.io/heros-descent-a-wizards-end",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-emerald-500/90 to-teal-500/90",
    screenshots: [
      "/Game.png",
    ],
  },
  {
    id: "networking-config",
    title: "Networking & Infrastructure Configuration",
    description: "Designed and deployed a segmented enterprise network with VLANs, inter-VLAN routing, and SSH-secured remote administration across 10+ virtual nodes.",
    tags: ["Cisco Packet Tracer", "CLI", "SSH", "Networking"],
    github: "https://github.com/DaRealDB",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-blue-500/90 to-cyan-500/90",
    screenshots: [
      "/Network.png",
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description: "A personal portfolio website built using React, showcasing my projects, skills, and experience. The website features a clean and modern design, with sections for an about me, project showcase, and contact information. It is responsive and optimized for both desktop and mobile devices.",
    tags: ["GDScript", "Godot Engine", "Game Dev"],
    github: "https://github.com/DaRealDB",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-emerald-500/90 to-teal-500/90",
    screenshots: [
      "/Portfolio.png",
    ],
  },
];
