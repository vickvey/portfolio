import { Button } from "../ui/button";
import AnimatedIntrobar from "./animated-introbar";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-8 min-h-screen">
      <AnimatedIntrobar />
      <div className="flex flex-col gap-8 max-w-2xl">
        <h1 className="lg:text-7xl font-extrabold">
          Hi, I&apos;m Alex - a Full Stack Developer with a passion for AI &
          NLP.
        </h1>
        <h3>
          I&apos;m a 4th-year computer science student building scalable web
          apps and experimenting with natural language models to make tech more
          human.
        </h3>
        <div aria-label="CTA" className="flex flex-col lg:flex-row gap-4">
          <Button>View My Projects</Button>
          <Button variant={"outline"}>Download Resume</Button>
        </div>
      </div>
    </section>
  );
}
