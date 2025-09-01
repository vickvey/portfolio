import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

function InfoCard({ className }: { className?: string }) {
  return (
    <Card
      className={`shadow-xs hover:scale-105 transition-all duration-500 hover:shadow-lg shadow-white bg-transparent backdrop-blur-3xl backdrop-brightness-150 w-64 mx-auto ${className}`.trim()}
    >
      <CardHeader>
        <h2 className="text-2xl font-light font-revalia">Scalable Systems</h2>
      </CardHeader>
      <CardContent className="text-white/50">
        Building intelligent, scalable systems that understand human language.
        From neural nets to neatly written code, I blend machine learning with
        mathematical precision.
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default function AboutSection() {
  return (
    <section className="border-t-2 border-b-2 py-32 h-[40rem]">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-extrabold font-orbitron mb-8">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-8">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </section>
  );
}
