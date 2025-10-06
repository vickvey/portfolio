import AboutSection from "@/components/landing/about-section";
import HeroSection from "@/components/landing/hero-section";
import ProjectsSection from "@/components/landing/projects-section";
import SkillsSection from "@/components/landing/skills-section";
import Image from "next/image";

function VerticalSeparator() {
  return (
    <div className={`my-16 flex items-center justify-center`}>
      <div className="my-auto text-2xl font-bold text-white/50 flex justify-center items-center">
        <Image
          height={25}
          width={25}
          src={"/mouse-scroll-wheel-svgrepo-com.svg"}
          alt="Mouse Scroll Wheel Image"
          className="invert-100 opacity-50 hover:cursor-pointer"
        />
        <span>Scroll</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <div className="mt-28"></div>
        <HeroSection />
        <VerticalSeparator />
        <AboutSection />
        <VerticalSeparator />
        <SkillsSection />
        <VerticalSeparator />
        <ProjectsSection />
        <VerticalSeparator />
      </div>
    </div>
  );
}

// function Filler() {
//   return (
//     <div className="max-w-lg mx-auto my-24">
//       <p className="text-2xl font-light">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
//         debitis blanditiis possimus quaerat voluptatum veritatis neque at odio
//         quo quam quibusdam ad similique eum sint eos explicabo nihil repudiandae
//         voluptates?
//       </p>
//     </div>
//   );
// }
