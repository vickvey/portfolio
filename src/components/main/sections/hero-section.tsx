import Image from "next/image";
import RotatingText from "@/components/common/rotating-text";
import { Button } from "@/components/ui/button";
import StatsSection from "./stats-section";

const roles = [
  "Full Stack Web Developer.",
  "UI/UX Designer.",
  "Frontend Developer.",
  "Backend Developer.",
  "NLP Researcher.",
];

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="Introduction and professional roles"
      className="py-16 md:py-24 w-full px-4 lg:px-8 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 lg:max-w-5xl lg:mx-auto">
        <LeftContent />
        <RightContent />
      </div>
      <StatsSection />
    </section>
  );
}

function LeftContent() {
  return (
    <div className="flex flex-col max-w-lg">
      <HeroName />
      <Tagline />
      <Description />
      <CallToActions />
    </div>
  );
}

function HeroName() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-primary text-foreground/70 mb-1">
        Hi. I&apos;m,
      </h3>
      <h1 className="font-accent text-6xl font-thin leading-tight text-foreground">
        Vivek Kumar.
      </h1>
    </div>
  );
}

function Tagline() {
  return (
    <div
      aria-live="polite"
      className="flex items-center text-3xl font-accent text-foreground/80 gap-2 mb-6"
    >
      <span>I am a</span>
      <RotatingText
        texts={roles}
        mainClassName="text-primary inline-flex overflow-hidden whitespace-nowrap"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        rotationInterval={2800}
      />
    </div>
  );
}

function Description() {
  return (
    <p className="text-muted-foreground max-w-md text-2xl leading-relaxed mb-8">
      I design and develop modern, responsive websites built on clean code and
      seamless user experiences.
    </p>
  );
}

function CallToActions() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button
        variant="outline"
        aria-label="View My Work"
        className="transition-transform duration-300 hover:scale-105"
      >
        View My Work
      </Button>
      <Button
        aria-label="Hire Me"
        className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-transform duration-300 hover:scale-105"
      >
        Let's Talk
      </Button>
    </div>
  );
}

function RightContent() {
  return (
    <div className="w-full max-w-md drop-shadow-lg">
      <Image
        src="/undraw_code-thinking_0vf2.svg"
        alt="Man sitting beside a computer"
        width={500}
        height={500}
        priority
        className="rounded-lg"
      />
    </div>
  );
}
