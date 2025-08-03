import AboutSection from "@/components/landing/about-section";
import HeroSection from "@/components/landing/hero-section";
import RecentProjectsSection from "@/components/landing/recent-projects-section";
import TechStackSection from "@/components/landing/tech-stack-section";

export default function LandingPage() {
  return (
    <div className="relative font-poppins">
      <HeroSection />
      <AboutSection />
      <RecentProjectsSection />
      <TechStackSection />
    </div>
  );
}
