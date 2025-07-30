"use client";

import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/useSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <header className="py-4 px-4 md:sticky md:top-0 md:left-0 md:z-50 md:backdrop-blur-2xl">
        <div className="md:hidden">
          <Button onClick={toggle}>{isOpen ? "Close" : "Open"}</Button>
        </div>
        <div className="hidden md:flex items-center justify-between">
          <h3 className="text-2xl font-bold">Alex Biswas</h3>
          <nav>
            <ul className="flex space-x-8 justify-center">
              <li>Home</li>
              <li>Projects</li>
              <li>Testimonials</li>
              <li>About</li>
            </ul>
          </nav>
          <div>
            <ToggleTheme />
          </div>
        </div>
      </header>

      <aside
        className={`fixed top-0 z-50 w-64 bg-sidebar py-5 px-4 h-screen flex flex-col space-y-8 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div id="sidebar-header" className="flex items-center justify-between">
          <Button onClick={toggle}>{isOpen ? "Close" : "Open"}</Button>
          <ToggleTheme />
        </div>
        <div id="sidebar-main" className="space-y-8 text-lg">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            debitis sapiente officiis rem soluta molestiae! Nisi atque cum sed
            ipsa optio assumenda quibusdam magnam, a aut delectus, corrupti
            reiciendis ut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            libero earum architecto reiciendis eos eaque quaerat sunt voluptatem
            laboriosam. Debitis dicta at esse soluta quibusdam eligendi alias
            sint eius ratione.
          </p>
        </div>
        <div id="sidebar-footer" className="flex justify-between">
          <p>Copyright 2025</p>
          <p>Alex Biswas</p>
        </div>
      </aside>
      <main className={`${isOpen ? "opacity-40" : "opacity-100"}`}>
        <div className="lg:mx-32 mx-8">{children}</div>
      </main>
      <footer className="h-96 bg-footer">
        <div className="flex justify-between">
          <p>Copyright 2025</p>
          <p>Vivek Kumar</p>
        </div>
      </footer>
    </div>
  );
}
