import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  timeTaken: string;
  githubRepoLink: string;
  liveDemoLink?: string; // Optional link for live demo
  keywords: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  timeTaken,
  githubRepoLink,
  liveDemoLink,
  keywords,
}: ProjectCardProps) {
  return (
    <Card className="max-w-xl h-fit hover:scale-105 backdrop-blur-xs hover:backdrop-blur-3xl bg-none space-y-1.5">
      <CardHeader className="bg-none">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="bg-none gap-3 flex flex-col">
        <div className="relative w-full h-56">
          <Image
            src={`/data/projects/images/${image}`} // Path to the image inside the public folder
            alt={`${title} image`}
            fill
            objectFit="cover" // Keeps the image responsive
            className="rounded-lg"
          />
        </div>
        <p>Time Taken: {timeTaken}</p>
        <div className="mt-2">
          <strong>Keywords: </strong>
          {keywords.join(", ")}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Link href={githubRepoLink}>
          <Button rel="noopener noreferrer">Github Link</Button>
        </Link>

        {liveDemoLink && (
          <Link href={liveDemoLink}>
            <Button rel="noopener noreferrer">Try Demo Live</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
