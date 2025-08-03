"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headlines = [
  "🚀 Want a high-converting website for your business?",
  "📄 Need a portfolio website to land your dream job?",
  "🛒 Planning to launch an eCommerce that scales?",
  "💼 Want to revamp your company's online presence?",
  "📱 Building a fast, mobile first and web-ready app?",
  "🧠 Have an idea? Let's bring it to life with modern tech!",
];

export default function MovingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-primary pt-8 pb-5 px-6 md:pt-16 md:pb-7 lg:pt-20 lg:pb-0 md:px-14">
      <div className="max-w-7xl mx-auto relative min-h-[8rem] md:min-h-[11.5rem] lg:min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={headlines[index]}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-[var(--purple-text)]/80 text-3xl sm:text-4xl md:text-6xl font-bold text-center"
          >
            {headlines[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
