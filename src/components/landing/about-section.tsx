import Image from "next/image";
import { Card, CardContent } from "../ui/card";

function InfoCard({ className }: { className?: string }) {
  return (
    <Card
      className={`border-0 w-full col-span-1 bg-transparent ${className}`.trim()}
    >
      {/* <CardHeader>
        <div>
          <h2 className="text-3xl font-extrabold font-orbitron mb-8 text-white/90">
            About Me
          </h2>
        </div>
      </CardHeader> */}
      <CardContent className="text-white/70 text-2xl flex flex-col gap-6">
        <p className="backdrop-blur-lg">
          Hey! I&apos;m{" "}
          <span className="text-white font-semibold">Vivek Kumar</span> — a
          full-stack web developer and AI/ML enthusiast with a deep interest in
          Natural Language Processing.
        </p>
        <p className="backdrop-blur-lg">
          I&apos;m fascinated by the intersection of human language and
          technology. Whether it&apos;s building seamless web experiences or
          experimenting with large language models, I&apos;m driven by the
          challenge of making machines understand us better.
        </p>
        <p className="backdrop-blur-lg">
          Currently, I&apos;m focused on building AI-first web tools that
          combine robust engineering with the power of NLP — helping turn
          complex ideas into intuitive, user-friendly applications.
        </p>
      </CardContent>
    </Card>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="border-t-2 border-b-2 flex items-center h-fit py-24"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold font-orbitron text-white/90">
            About Me
          </h2>
          <p className="text-lg text-white/50">
            A little bit about me and what I love ...
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 space-x-8">
          <InfoCard />
          <Image
            height={1000}
            width={1000}
            className="cols-span-1 mx-auto my-auto rounded-lg w-80 grayscale-100"
            src={"/profile-photo.jpg"}
            alt="Profile Photo"
          />
        </div>
      </div>
    </section>
  );
}
