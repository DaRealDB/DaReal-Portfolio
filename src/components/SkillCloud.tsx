"use client";

import { motion, useFrame, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  SiCsharp,
  SiDotnet,
  SiGit,
  SiJava,
  SiJavascript,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const SKILLS = [
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C#", icon: TbBrandCSharp, color: "#239120" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Springboot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
];

function SkillIcon({ skill, index, total, mouseX, mouseY }: any) {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  const radius = 150;
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x + 0.005 + mouseY.get() * 0.0001,
        y: prev.y + 0.005 + mouseX.get() * 0.0001,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [mouseX, mouseY]);

  // Project 3D to 2D
  const cosX = Math.cos(rotation.x);
  const sinX = Math.sin(rotation.x);
  const cosY = Math.cos(rotation.y);
  const sinY = Math.sin(rotation.y);

  // Rotation around Y
  const x1 = x * cosY + z * sinY;
  const z1 = z * cosY - x * sinY;

  // Rotation around X
  const y2 = y * cosX - z1 * sinX;
  const z2 = z1 * cosX + y * sinX;

  const scale = (z2 + radius * 2) / (radius * 3);
  const opacity = (z2 + radius) / (radius * 2);

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center gap-1"
      style={{
        x: x1,
        y: y2,
        scale,
        opacity: opacity * 0.8 + 0.2,
        zIndex: Math.round(z2),
      }}
    >
      <skill.icon size={24} style={{ color: skill.color }} />
      <span className="text-[10px] font-bold uppercase tracking-tighter text-white/50">
        {skill.name}
      </span>
    </motion.div>
  );
}

export function SkillCloud() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - (rect.left + rect.width / 2));
      mouseY.set(e.clientY - (rect.top + rect.height / 2));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return <div className="h-[400px] w-full" />;

  return (
    <div
      ref={containerRef}
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden"
    >
      <div className="relative">
        {SKILLS.map((skill, i) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            index={i}
            total={SKILLS.length}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>
    </div>
  );
}
