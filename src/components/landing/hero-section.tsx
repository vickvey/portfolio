"use client";

import { Button } from "@/components/ui/button";
import MovingHeadline from "./moving-headline";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="dark:bg-[var(--purple-bg)] text-[var(--purple-text)] border-b"
    >
      <MovingHeadline />

      <div className="lg:-m-2 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-12 mx-auto px-6 md:px-20 lg:px-38 pb-14">
        {/* Left Text Section */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-[var(--purple-text)] text-xl max-w-md opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I help startups, entrepreneurs, and businesses craft modern,
            scalable, and beautiful web applications, from frontend polish to
            backend performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                className="bg-[var(--purple-accent)] text-white hover:bg-purple-700"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button
                variant="secondary"
                className="border border-[var(--purple-light)] bg-[var(--purple-light)] text-[var(--purple-text)]"
                asChild
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-3 mt-4 text-sm"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              "✅ Open to new opportunities",
              "🛠 Next.js | React.js | Typescript | Express.js",
              "📍 Remote or On-site",
            ].map((text, i) => (
              <motion.span
                key={i}
                className="bg-[var(--purple-badge)] text-[var(--purple-text)] px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/illustrations/hiring.svg"
            alt="Illustration of developer working"
            className="hover:scale-108 transition-all duration-1000 dark:opacity-75 w-full max-w-[260px] md:max-w-[340px] lg:max-w-[380px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
