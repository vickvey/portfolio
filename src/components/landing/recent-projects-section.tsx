"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  timeTaken: string;
  liveDemoLink: string;
  githubRepoLink: string;
  keywords: string[];
}

export default function RecentProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects/data.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-[var(--projects-bg)] text-[var(--projects-text)] py-32 px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <div className="w-full h-full bg-[radial-gradient(#3b82f680_8px,transparent_12px)] bg-[size:20px_20px]" />
      </div>

      <h2 className="text-4xl font-serif font-bold text-center mb-12 relative z-10">
        Recent Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="backdrop-blur-3xl hover:backdrop-blur-sm shadow-md hover:shadow-lg border border-gray-200 dark:border-zinc-700 transition-all bg-white/80 dark:bg-slate-800/60 hover:scale-105">
              <CardHeader className="p-0">
                <Image
                  src={`/data/projects/images/${project.image}`}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-t-xl w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.keywords.map((keyword, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>⏱ {project.timeTaken}</span>
                  <div className="flex gap-4">
                    <Link
                      href={project.liveDemoLink}
                      target="_blank"
                      className="underline hover:text-blue-600 transition"
                    >
                      Live
                    </Link>
                    <Link
                      href={project.githubRepoLink}
                      target="_blank"
                      className="underline hover:text-blue-600 transition"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
