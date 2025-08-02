"use client";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { Card } from "@/components/ui/card";

const tech = [
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
];

export default function TechStackSection() {
  return (
    <section className="bg-gray-50 dark:bg-purple-950 py-20 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center mb-10">My Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {tech.map((item, index) => (
          <Card
            key={index}
            className="w-24 h-24 flex flex-col items-center justify-center hover:scale-110 transition-transform text-primary font-medium"
          >
            {item.icon}
            <span className="text-sm mt-2">{item.name}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
