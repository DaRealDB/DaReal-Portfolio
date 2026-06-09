"use client";

import { SkillCloud } from "@/components/SkillCloud";

export function Skills() {
  const skillGroups = [
    {
      title: "Languages & Frameworks",
      summary: "Foundation in modern development and system logic.",
      items: ["Java, Python, JS, SQL, C#", "React, Tailwind, .NET, Springboot", "GDScript (Godot Engine)"],
    },
    {
      title: "Networking & Systems",
      summary: "Infrastructure and operational environment knowledge.",
      items: ["VLAN, SSH, Inter-VLAN routing", "OS fundamentals & troubleshooting", "Cisco Packet Tracer"],
    },
    {
      title: "Tools & Concepts",
      summary: "Development workflow and modern IT principles.",
      items: ["Git, GitHub, VS Code", "Cloud fundamentals (AWS/GCP)", "Agile/DevOps & Documentation"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-(--accent) sm:text-base">
            Tech stack
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl">
            Skills{" "}
            <span className="text-gradient-shimmer">Overview</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <SkillCloud />
          </div>
          
          <div className="grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5"
              >
                <h3 className="text-base font-semibold">{group.title}</h3>
                <p className="mt-1 text-xs text-(--muted)">{group.summary}</p>
                <ul className="mt-3 space-y-2 text-sm text-(--muted)">
                  {group.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
