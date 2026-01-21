"use client";

import { useState } from "react";
import HeroSection from "./hero-section";
import ResumeModal from "./resume-modal";

export default function HeroSectionClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeroSection onResumeClick={() => setOpen(true)} />
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
