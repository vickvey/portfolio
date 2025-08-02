import AboutSection from "@/components/landing/about-section";
import HeroSection from "@/components/landing/hero-section";
import ProjectsSection from "@/components/landing/projects-section";
import TechStackSection from "@/components/landing/tech-stack-section";
import Image from "next/image";

function FillerSection({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col space-y-8 min-h-screen ${className}`.trim()}
    >
      <h2 className="text-3xl font-bold">Filler Section</h2>
      <div className="space-y-6 text-lg">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          commodi quibusdam, ut odio culpa quas vitae porro voluptas beatae
          perspiciatis sit mollitia accusamus corporis sapiente tempore ratione
          tenetur dolorem nihil!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          perferendis minus facilis quasi, eos saepe, sed cumque ullam
          voluptatum voluptate blanditiis, atque ipsa soluta officiis. Totam
          amet magni aspernatur quos.
        </p>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="relative font-poppins">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Skills & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "FastAPI",
              "Python",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-300 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
