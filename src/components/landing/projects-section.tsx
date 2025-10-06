import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered Resume Parser",
    description:
      "Built a full-stack application that extracts and analyzes resume data using NLP and machine learning.",
    image: "/projects/resume-parser.jpg",
    techStack: ["Next.js", "Python", "OpenAI API", "MongoDB"],
    link: "https://github.com/your-username/resume-parser",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application with authentication, message history, and WebSocket-based updates.",
    image: "/projects/chat-app.jpg",
    techStack: ["React", "Node.js", "Socket.IO", "Tailwind CSS"],
    link: "https://github.com/your-username/chat-app",
  },
  // Add more projects as needed
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-transparent border-0 w-full col-span-1">
      <CardContent className="backdrop-blur-3xl rounded-2xl border-2 mx-16 hover:scale-105 transition-all duration-500 hover:shadow-2xl backdrop-brightness-200 text-white/70 text-base p-6 flex flex-col gap-4 z-50">
        <div className="w-full h-48 relative rounded-md overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-md grayscale hover:grayscale-0 transition duration-300"
          />
        </div>

        <h3 className="text-xl text-white font-orbitron font-bold">
          {project.title}
        </h3>

        <p className="text-white/60">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-sm">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/10 text-white/70 rounded-md border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <div className="mt-2">
            <Button
              variant={"outline"}
              className="text-white hover:bg-white/10 hover:text-white/90 text-sm py-2 px-4"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects-section"
      className="border-t-2 border-b-2 flex items-center h-fit py-24"
    >
      <div className="flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <div className="flex flex-col gap-2 mb-12 text-center">
          <h2 className="text-3xl font-extrabold font-orbitron text-white/90">
            Projects
          </h2>
          <p className="text-lg text-white/50">
            Some things I&apos;ve been building lately ...
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
