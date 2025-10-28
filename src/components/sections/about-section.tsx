"use client";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="bg-linear-to-br from-card/80 via-card to-card-foreground/5 text-card-foreground px-6 md:px-12 lg:px-24 py-20"
    >
      <div className="max-w-3xl mx-auto">
        <article>
          <SectionHeader
            title="About Me"
            subtitle="A short story about what drives me."
            id="about-heading"
          />
          <AboutContent />
        </article>
      </div>
    </section>
  );
}

function SectionHeader({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle: string;
  id: string;
}) {
  return (
    <header className="mb-12 border-l-4 border-accent pl-6">
      <h2
        id={id}
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-3"
      >
        {title}
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground font-medium italic tracking-wide">
        {subtitle}
      </p>
    </header>
  );
}

function AboutContent() {
  return (
    <div className="max-w-prose mx-auto leading-relaxed text-lg md:text-xl space-y-6 text-foreground">
      <p className="first-letter:text-6xl first-letter:font-extrabold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
        Hey! I&apos;m <strong className="font-semibold">Vivek Kumar</strong> — a
        full-stack web developer and AI/ML enthusiast passionate about the
        convergence of language, intelligence, and design.
      </p>
      <p>
        My work lies at the intersection of human expression and computation. I
        love building elegant, reliable systems that make complex ideas feel
        effortless — from intuitive web interfaces to experiments in natural
        language processing.
      </p>
      <p>
        Right now, I&apos;m focused on crafting{" "}
        <span className="text-accent font-semibold underline decoration-wavy decoration-accent/70">
          AI-driven web applications
        </span>{" "}
        that combine thoughtful engineering with human-centered design — turning
        advanced models into clear, accessible tools that genuinely help people
        think, create, and connect.
      </p>
    </div>
  );
}
