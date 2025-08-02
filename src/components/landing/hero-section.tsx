"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center px-6 py-12 md:px-16 bg-zinc-100 dark:bg-zinc-900 text-primary-foreground">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary">
              Empowering businesses with modern web experiences.
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              I&apos;m Vivek — a full-stack developer passionate about building
              fast, accessible, and scalable web apps. I focus on delivering
              pixel-perfect UIs with strong backend logic using Next.js,
              TypeScript & modern tools.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Let&apos;s Work Together</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          {/* Highlights / Badges */}
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              ✅ Open to new opportunities
            </span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              🛠 Next.js | React | TypeScript
            </span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              📍 Remote or On-site
            </span>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="/illustrations/hiring.svg"
            alt="Illustration of developer working"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
