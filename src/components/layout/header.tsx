import { ToggleThemeButton } from "@/components/toggle-theme-button";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-50 sticky top-0 bg-background">
      <div className="w-full px-4 lg:px-16 flex justify-between items-center py-4">
        <Logo />
        <Navbar />
        <CTA />
      </div>
    </header>
  );
}

const Logo = () => (
  <div className="logo">
    <h2 className="text-4xl font-logo select-none">
      <Link href={"/"}>Vivek Kumar</Link>
    </h2>
  </div>
);

const CTA = () => (
  <div className="flex items-center space-x-2 lg:space-x-8">
    <ToggleThemeButton />
    <Button>Hire Me</Button>
  </div>
);
