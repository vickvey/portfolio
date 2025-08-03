"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Intro",
    content: `I'm Vivek Kumar, a passionate full‑stack developer with a love for clean code and creative UI. I enjoy building scalable web applications and solving real‑world problems with technology.`,
  },
  {
    title: "Tech Stack",
    content: `With experience in React, TypeScript, FastAPI, and Python, I love bringing ideas to life from frontend finesse to backend logic.`,
  },
  {
    title: "Current Focus",
    content: `I'm currently exploring design thinking, open‑source contributions, and pushing my limits as a lifelong learner.`,
  },
];

const Typewriter = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [text]);
  return <div className="whitespace-pre-wrap">{display}</div>;
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[var(--about-bg)] text-[var(--about-text)] px-6 md:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center">About Me</h2>

        {/* Grid layout: Image + Terminals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/illustrations/avatar-dev.svg"
              alt="Developer Illustration"
              className="w-full max-w-md md:max-w-lg max-h-96 object-contain drop-shadow-xl"
            />
          </div>

          {/* Right: Terminal Cards */}
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * i, duration: 0.6 }}
                className="relative bg-[var(--terminal-bg)] border border-[var(--terminal-border)] backdrop-blur-md rounded-xl p-4 font-mono text-sm text-[var(--terminal-text)] shadow-md min-h-[180px] max-h-[180px] overflow-hidden hover:scale-102 transition-all duration-400 hover:shadow-md hover:shadow-slate-600"
              >
                {/* Terminal Header */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex gap-2 text-xs">
                    <span className="w-3 h-3 rounded-full bg-[var(--terminal-dot-red)]" />
                    <span className="w-3 h-3 rounded-full bg-[var(--terminal-dot-yellow)]" />
                    <span className="w-3 h-3 rounded-full bg-[var(--terminal-dot-green)]" />
                  </div>
                  <span className="text-xs text-zinc-400 pr-2">
                    {card.title}
                  </span>
                </div>

                {/* Typewriter Text */}
                <div className="px-1 pt-1">
                  <Typewriter text={card.content} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
