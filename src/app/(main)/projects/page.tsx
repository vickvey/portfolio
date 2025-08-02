"use client";

import ProjectCard from "@/components/projects/project-card";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from the JSON file inside the public folder
    const fetchProjects = async () => {
      const response = await fetch("/data/projects/data.json");
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 min-h-screen py-12">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          title={project.title}
          description={project.description}
          image={project.image}
          timeTaken={project.timeTaken}
          githubRepoLink={project.githubRepoLink}
          liveDemoLink={project.liveDemoLink} // Optional
          keywords={project.keywords}
        />
      ))}
    </div>
  );
}
