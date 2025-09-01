import AboutSection from "@/components/landing/about-section";
import HeroSection from "@/components/landing/hero-section";

function VerticalSeparator({ topMargin = "24" }: { topMargin?: string }) {
  return <div className={`mt-${topMargin}`}></div>;
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <VerticalSeparator />
        <HeroSection />
        <VerticalSeparator />
        <AboutSection />
        <VerticalSeparator />
      </div>
    </div>
  );
}

function Filler() {
  return (
    <div className="max-w-lg mx-auto my-24">
      <p className="text-2xl font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        debitis blanditiis possimus quaerat voluptatum veritatis neque at odio
        quo quam quibusdam ad similique eum sint eos explicabo nihil repudiandae
        voluptates?
      </p>
    </div>
  );
}
