"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface Service {
  name: string;
  description: string;
  proficiency: number;
  since: string;
  image: string;
  projects?: number;
}

const services: Service[] = [
  {
    name: "Web Portfolio Design & Development",
    description:
      "I design and build clean, modern, and responsive portfolios — blending great UI/UX with scalable full-stack architecture.",
    proficiency: 90,
    since: "2021",
    image: "/images/services/portfolio-dev.jpg",
    projects: 12,
  },
  {
    name: "Full Stack Data-driven Applications",
    description:
      "From idea to deployment, I create robust web applications powered by real data — integrating backend APIs, databases, and ML pipelines.",
    proficiency: 85,
    since: "2021",
    image: "/images/services/fullstack-data.jpg",
    projects: 9,
  },
  {
    name: "Data Analysis & Time Series Modeling",
    description:
      "Turning raw datasets into insights — exploratory analysis, visualizations, and forecasting using Python, Pandas, and modern ML tools.",
    proficiency: 80,
    since: "2022",
    image: "/images/services/data-analysis.jpg",
    projects: 6,
  },
  {
    name: "Data Engineering Pipelines",
    description:
      "Building automated data pipelines for scalable processing and analytics — from ingestion to transformation and model deployment.",
    proficiency: 75,
    since: "2023",
    image: "/images/services/data-engineering.jpg",
    projects: 4,
  },
  {
    name: "Mathematics & Statistics Knowledge",
    description:
      "Strong foundation in probability, linear algebra, and applied statistics — the backbone of both ML and analytical reasoning.",
    proficiency: 88,
    since: "2019",
    image: "/images/services/maths.jpg",
    projects: 0,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services-section"
      aria-labelledby="services-heading"
      className="px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 border-l-4 border-accent pl-6">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-3"
          >
            Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium italic">
            What I can build and deliver — backed by years of hands-on
            experience.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  name,
  description,
  proficiency,
  since,
  image,
  projects,
}: Service) {
  return (
    <Card className="overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-card/50 border-border/60 rounded-2xl">
      <CardHeader className="p-0 relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
            <span>Proficiency</span>
            <span>{proficiency}%</span>
          </div>
          <Progress value={proficiency} className="h-2" />
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
          <span>
            Since <strong>{since}</strong>
          </span>
          {projects !== undefined && (
            <span>
              {projects > 0 ? `${projects}+ Projects` : "Exploratory Work"}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
