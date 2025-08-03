"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ToggleTheme } from "../toggle-theme";
import { SidebarOpen } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Kite() {
  return (
    <div className="h-4 w-4 rotate-45 flex justify-center items-center shadow-md">
      <div className="h-1.5 w-1.5 border bg-secondary"></div>
    </div>
  );
}

export default function Header({
  isOpen,
  toggle,
}: {
  isOpen?: boolean;
  toggle: () => void;
}) {
  return (
    <header className="sticky bg-transparent top-0 z-50 w-full px-4 py-3 md:px-8 backdrop-blur-lg border-b">
      {/* Mobile View */}
      <div className="flex items-center justify-between lg:hidden">
        <Logo />
        <Button>Hire Me</Button>
        <MobileNavToggle toggle={toggle} />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between">
        <Logo />
        <NavLinks />
        <HeaderRightSection />
      </div>
    </header>
  );
}

// ─── Components ────────────────────────────────────────────────

function Logo() {
  return (
    <div className="flex flex-col leading-tight">
      <Link
        href="/"
        className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight font-serif"
      >
        Vivek <span className="text-blue-950 dark:text-blue-200">Kumar</span>
      </Link>
      <span className="hidden lg:inline text-xs lg:text-sm text-muted-foreground ">
        Building modern, meaningful software.
      </span>
    </div>
  );
}

function MobileNavToggle({ toggle }: { toggle: () => void }) {
  return (
    <Button
      onClick={toggle}
      size="icon"
      variant="ghost"
      aria-label="Toggle Menu"
    >
      <SidebarOpen className="h-16 w-16" />
    </Button>
  );
}

function NavLinks() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HeaderRightSection() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"default"}>Let's Work Together</Button>
      <ToggleTheme />
    </div>
  );
}
