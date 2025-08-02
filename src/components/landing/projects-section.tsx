"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  image: string;
  timeTaken: string;
  liveDemoLink: string;
  githubRepoLink: string;
  keywords: string[];
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects/data.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <section id="projects" className="bg-zinc-100 dark:bg-zinc-800 py-32 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="backdrop-blur-sm transition-all duration-300 hover:backdrop-blur-3xl shadow-md hover:shadow-lg border border-gray-200"
          >
            <CardHeader className="p-0">
              <Image
                src={`/data/projects/images/${project.image}`}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-xl w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
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
        ))}
      </div>
    </section>
  );
}
