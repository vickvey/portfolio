"use client";

import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about-section" },
  { name: "Services", href: "#services-section" },
  { name: "Projects", href: "#projects-section" },
  { name: "Experience", href: "#experience-section" },
  { name: "Contact", href: "#contact-section" },
];

export default function Navbar() {
  const router = useRouter();

  const handleNavClick = (href: string) => {
    if (href === "/") {
      router.push("/");
      return;
    }

    // scroll to section smoothly
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.history.pushState(null, "", href); // update URL hash
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav aria-label="Primary navigation" className="hidden lg:block">
      <ul className="font-accent flex items-center space-x-2">
        {navItems.map(({ name, href }) => (
          <li key={href}>
            {/* prevent default link jump, use smooth scroll */}
            <button
              onClick={() => handleNavClick(href)}
              className="px-4 py-2.5 text-xl font-primary rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
