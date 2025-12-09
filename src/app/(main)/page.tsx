// ./src/app/(main)/page.tsx

import AboutSection from "@/components/main/sections/about-section";
import ContactSection from "@/components/main/sections/contact-section";
import ExperienceSection from "@/components/main/sections/experience-section";
import HeroSection from "@/components/main/sections/hero-section";
import ProjectsSection from "@/components/main/sections/projects-section";
import ServicesSection from "@/components/main/sections/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
