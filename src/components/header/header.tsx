import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 py-4 w-full px-8 z-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-muted-foreground text-2xl tracking-tighter capitalize font-mono">
            Vivek Kumar
          </h2>
        </div>

        <nav>
          <ul className="py-2 flex gap-12 bg-background border-2 rounded-lg px-8">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Testimonials</li>
          </ul>
        </nav>

        {/* CTA */}
        <div>
          <Button>Hire me</Button>
        </div>
      </div>
    </header>
  );
}
