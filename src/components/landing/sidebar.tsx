import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { SidebarClose } from "lucide-react";

export default function Sidebar({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <aside
      className={`fixed top-0 z-50 w-64 bg-sidebar py-5 px-4 h-screen flex flex-col space-y-8 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div id="sidebar-header" className="flex items-center justify-between">
        <Button onClick={toggle}>
          <SidebarClose />
        </Button>
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
          laboriosam. Debitis dicta at esse soluta quibusdam eligendi alias sint
          eius ratione.
        </p>
      </div>
      <div id="sidebar-footer" className="flex justify-between">
        <p>Copyright 2025</p>
        <p>Alex Biswas</p>
      </div>
    </aside>
  );
}
