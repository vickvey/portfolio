"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Dr. Arpit Sharma's NLP Lab",
    duration: "May 2025 – Aug 2025",
    description:
      "Built and deployed scalable web applications with a focus on AI-driven features using Next.js, FastAPI, and PostgreSQL. Collaborated closely with data and ML teams to integrate NLP models into production systems.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "HuggingFace", "TailwindCSS"],
  },
  {
    role: "AI/ML Research Assistant",
    company: "IISER Bhopal",
    duration: "May 2024 – Aug 2024",
    description:
      "Exploring Natural Language Processing applications in cognitive neuroscience. Focused on text-based emotion understanding and psychological profiling using large language models.",
    tech: ["Python", "Transformers", "NLP", "Data Analysis", "PyTorch"],
  },
  {
    role: "Freelance Web Developer",
    company: "Remote",
    duration: "2022 – Present",
    description:
      "Developed data-driven portfolio sites and dashboards for clients, blending clean UI design with backend automation and analytics pipelines.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel", "TailwindCSS"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience-section"
      className="relative bg-card/20 py-24 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience Journey
        </h2>

        <div className="relative border-l-2 border-accent/50 pl-8 space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[39px] bg-background border-2 border-accent rounded-full p-2">
                <Briefcase size={20} className="text-accent" />
              </div>

              <div className="bg-card shadow-md rounded-xl p-6 transition-transform hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-accent font-medium text-lg">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.duration}
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
