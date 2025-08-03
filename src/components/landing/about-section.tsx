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
      className="bg-slate-200 dark:bg-slate-950 px-6 md:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center text-zinc-800 dark:text-zinc-100">
          About Me
        </h2>

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
                className="relative bg-zinc-900/80 dark:bg-zinc-800/70 backdrop-blur-md rounded-xl p-4 font-mono text-sm text-green-400 dark:text-emerald-300 shadow-md border border-zinc-700 min-h-[180px] max-h-[180px] overflow-hidden"
              >
                {/* Terminal Header Bar */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex gap-2 text-xs">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
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
