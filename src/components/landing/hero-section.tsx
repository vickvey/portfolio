import Image from "next/image";
import { RollingText } from "../animate-ui/text/rolling";
import { RotatingText } from "../animate-ui/text/rotating";
import { Button } from "../ui/button";

function CTAButton({ content }: { content: string }) {
  return (
    <Button
      variant={"outline"}
      className="py-5 hover:scale-110 hover:backdrop-blur-3xl hover:backdrop-brightness-150 hover:shadow-white hover:shadow-xs transition-all duration-300"
    >
      <span className="font-bold tracking-wider">{content}</span>
    </Button>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="border-t-2 border-b-2 py-32 h-fit backdrop-blur-[1px]"
    >
      <div className="flex flex-col gap-6">
        <h3 className="text-center text-2xl font-semibold tracking-wide text-white/50">
          Hello, I'm
        </h3>
        <h1 className="inline-block text-9xl font-monoton opacity-80 tracking-wide font-bold text-center">
          <RollingText text="VIVEK KUMAR" />
        </h1>

        <h2 className="mt-6 text-center text-4xl text-white/50 font-extrabold">
          <RotatingText
            duration={2500}
            text={[
              "Full-Stack Web Developer",
              "UI/UX researcher",
              "Natural Language Processing Enthusiast",
              "Applied Math Explorer",
            ]}
          />
        </h2>

        {/* CTA */}
        <div className="w-fit mx-auto space-x-8">
          <CTAButton content="View Resume" />
          <CTAButton content="Contact Me" />
        </div>
      </div>
    </section>
  );
}
