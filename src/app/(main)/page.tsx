import { RotatingText } from "@/components/animate-ui/text/rotating";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <HeroSection />

        {/* Some Fillers */}
        {/* <section>
          {Array.from({ length: 10 }).map((_, i) => (
            <Filler key={i} />
          ))}
        </section> */}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="my-12">
      <div className="flex flex-col">
        <h2 className="text-center font-sans tracking-wide text-2xl font-light opacity-80">
          Hi.
        </h2>
        <h2 className="text-center text-4xl font-delius font-extrabold tracking-wider mt-2">
          I am Vivek Kumar. I am interested in ...
        </h2>

        <h1 className="opacity-65 py-8 mt-6 px-6 lg:px-0 text-3xl lg:text-8xl font-extrabold tracking-wide text-center font-merriweather">
          <RotatingText
            text={[
              "Full-Stack Developer",
              "AI & Data Explorer",
              "Building Intelligent Systems for the Web & Beyond",
              "Engineering Software. Exploring Language. Building with Data.",
            ]}
          />
        </h1>
        <div className="flex gap-6 w-fit mx-auto">
          <Button variant={"secondary"}>View My Projects</Button>
          <Button variant={"secondary"}>View My Research</Button>
        </div>
      </div>
    </section>
  );
}

function Filler() {
  return (
    <div className="max-w-lg mx-auto my-24">
      <p className="text-2xl font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        debitis blanditiis possimus quaerat voluptatum veritatis neque at odio
        quo quam quibusdam ad similique eum sint eos explicabo nihil repudiandae
        voluptates?
      </p>
    </div>
  );
}
