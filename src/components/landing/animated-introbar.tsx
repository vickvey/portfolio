"use client";

import { useEffect, useState } from "react";

function ColoredCircle({ className }: { className: string }) {
  return <div className={`h-4 w-4 rounded-full ${className}`.trim()}></div>;
}

const infoText =
  "Code quality depends a lot upon the modularity and organization of the code. - Albert Leonard Einstein";

export default function AnimatedIntrobar() {
  const [appearedText, setAppearedText] = useState("");

  useEffect(() => {
    if (appearedText.length === infoText.length) return;

    const timeouts: NodeJS.Timeout[] = [];

    infoText.split("").forEach((char, idx) => {
      const timeout = setTimeout(() => {
        setAppearedText((prev) => prev + char);
      }, idx * 50);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="my-4 bg-[#1e1e2e] hover:scale-105 hover:shadow-lg flex flex-col gap-1.5 h-fit p-3 rounded-lg border-4 border-border shadow-lg shadow-accent">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <ColoredCircle className="bg-red-500" />
          <ColoredCircle className="bg-yellow-500" />
          <ColoredCircle className="bg-green-500" />
        </div>
        <div>Terminal</div>
      </div>

      <div className="flex flex-col font-mono text-sm text-[#b0b8d4]">
        <p>
          <span className="text-[#617cae]">Bash$ </span>
          {appearedText}
        </p>
      </div>
    </div>
  );
}
