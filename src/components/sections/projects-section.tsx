"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tech: string[];
  duration: string;
  image: string;
  liveUrl: string;
  likes?: number;
}

const projects: Project[] = [
  {
    title: "AI-Powered Story Teller",
    description:
      "A web app that generates personalized bedtime stories using open-source language models from Hugging Face.",
    tech: ["Next.js", "TypeScript", "Tailwind", "FastAPI", "Hugging Face"],
    duration: "2 weeks",
    image: "/next.svg",
    liveUrl: "#projects-section",
    likes: 86,
  },
  {
    title: "EmotionSense",
    description:
      "An emotion analysis dashboard that detects and visualizes user emotions from text inputs using NLP models.",
    tech: ["React", "Python", "Flask", "Plotly", "Pandas"],
    duration: "10 days",
    image: "/next.svg",
    liveUrl: "#projects-section",
    likes: 65,
  },
  {
    title: "Time-Series Insight",
    description:
      "A data visualization web app for analyzing and forecasting time-series trends with ARIMA and Prophet models.",
    tech: ["Next.js", "Python", "Pandas", "Prophet", "Chart.js"],
    duration: "3 weeks",
    image: "/next.svg",
    liveUrl: "#projects-section",
    likes: 72,
  },
  {
    title: "Portfolio Builder",
    description:
      "A modern portfolio generator where users can build, customize, and deploy personal portfolios instantly.",
    tech: ["Next.js", "Node.js", "Prisma", "Tailwind", "Supabase"],
    duration: "12 days",
    image: "/next.svg",
    liveUrl: "#projects-section",
    likes: 104,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects-section"
      aria-labelledby="projects-heading"
      className="px-6 md:px-12 lg:px-24 py-24 bg-linear-to-br from-card via-card/80 to-card-foreground/5"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 border-l-4 border-accent pl-6">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-3"
          >
            Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium italic">
            A collection of things I&apos;ve built — blending design, AI, and
            data.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  duration,
  image,
  liveUrl,
  likes = 0,
}: Project) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-card/90 border-border/60 rounded-2xl">
      {/* Image Header */}
      <CardHeader className="p-0 relative h-44">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      </CardHeader>

      {/* Card Body */}
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="text-xs font-medium text-muted-foreground border-border/50"
            >
              {t}
            </Badge>
          ))}
        </div>

        {/* Duration + Likes */}
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
          <span>⏱️ {duration}</span>

          <button
            onClick={toggleLike}
            className="flex items-center space-x-1 hover:text-accent transition-colors"
            aria-label="Like project"
          >
            <Heart
              size={18}
              className={`transition-colors ${
                liked ? "fill-accent text-accent" : ""
              }`}
            />
            <span>{likeCount}</span>
          </button>
        </div>

        {/* Live Demo Button */}
        <Button
          variant="secondary"
          className="w-full mt-3"
          onClick={() => window.open(liveUrl, "_blank")}
        >
          View Live Demo
        </Button>
      </CardContent>
    </Card>
  );
}
