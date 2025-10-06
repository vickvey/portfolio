import { Card, CardContent } from "../ui/card";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "C++"],
  Frameworks: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express"],
  Tools: ["Git", "Docker", "PostgreSQL", "MongoDB", "Prisma"],
  "AI/ML": ["TensorFlow", "PyTorch", "Transformers", "LangChain", "OpenAI API"],
};

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="bg-transparent border-0 col-span-1 w-full">
      <CardContent className="backdrop-blur-lg text-white/70 text-lg p-6">
        <h3 className="text-white font-orbitron font-bold text-xl mb-4">
          {title}
        </h3>
        <ul className="flex flex-wrap gap-3">
          {items.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 rounded-md border border-white/20 bg-white/5 text-sm hover:bg-white/10 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills-section"
      className="border-t-2 border-b-2 flex items-center h-fit py-24"
    >
      <div className="flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-3xl font-extrabold font-orbitron text-white/90">
            Skills & Tools
          </h2>
          <p className="text-lg text-white/50">
            Technologies and tools I use regularly ...
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} title={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
