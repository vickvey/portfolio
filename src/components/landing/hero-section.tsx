import Image from "next/image";
import { RollingText } from "../animate-ui/text/rolling";
import { RotatingText } from "../animate-ui/text/rotating";

export default function HeroSection() {
  return (
    <section className="border-t-2 border-b-2 py-32 h-[40rem]">
      <div className="flex flex-col gap-6">
        <h3 className="text-center text-2xl font-semibold tracking-wide text-white/50">
          Hello, I'm
        </h3>
        <h1 className="inline-block text-9xl font-monoton tracking-wide font-bold text-center">
          <RollingText text="VIVEK KUMAR" />
        </h1>

        <h2 className="mt-6 text-center text-4xl text-white/50 font-extrabold">
          <RotatingText
            duration={2500}
            text={[
              "Full-Stack Web Developer",
              "UI/UX researcher",
              "Natural Language Processing Enthusiast",
              "Applied Math Explorer",
            ]}
          />
        </h2>

        <div className="h-full mt-24 text-2xl font-bold text-white/50 flex justify-center items-center">
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
    </section>
  );
}
