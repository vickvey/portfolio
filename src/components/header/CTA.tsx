import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="px-8 col-span-1 flex lg:justify-center justify-end items-center lg:backdrop-blur-xs lg:border-t-2 lg:border-b-2 space-x-6 lg:space-x-0">
      <Button
        variant={"ghost"}
        className="text-lg font-semibold text-gray-400 hover:cursor-pointer hover:bg-gray-600"
      >
        Hire me
      </Button>
      <Image
        height={40}
        width={40}
        src={"/burger-menu-svgrepo-com.svg"}
        alt="Hamburger Menu"
        className="invert lg:hidden"
      />
    </div>
  );
}
