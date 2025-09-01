import Link from "next/link";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Skills", href: "/skills" },
  { title: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  return (
    <nav className="col-span-2 hidden lg:block">
      <ul className="flex justify-center backdrop-blur-lg border-2 rounded-lg px-8">
        {navItems.map((item, i) => (
          <li
            key={item.title}
            className={`font-orbitron text-lg hover:bg-black hover:text-white text-white/50 py-3 px-4 font-bold transition-colors duration-100 border-r-2 ${
              i === 0 && "border-l-2"
            }`}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
