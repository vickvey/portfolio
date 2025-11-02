"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Brain,
  Cpu,
  Atom,
  FunctionSquare,
  Lightbulb,
  PenTool,
  BookText,
  Calendar,
  Settings,
  Home,
} from "lucide-react";
import { ToggleThemeButton } from "@/components/common/toggle-theme-button";

const topics = [
  { name: "Home", icon: Home },
  { name: "Philosophy", icon: Lightbulb },
  { name: "Science", icon: Atom },
  { name: "Maths", icon: FunctionSquare },
  { name: "Tech", icon: Cpu },
  { name: "AI", icon: Brain },
  { name: "Essays", icon: PenTool },
  { name: "All Posts", icon: BookText },
  { name: "Archive", icon: Calendar },
  { name: "Settings", icon: Settings },
];

export function BlogSidebar() {
  return (
    <Sidebar className="bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <SidebarHeader className="p-4 flex flex-col gap-4">
        {/* Branding / Logo */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-logo flex items-center gap-2 select-none">
            <span>Vivek&apos;s Blogs ✨</span>
          </h1>
          <SidebarTrigger className="shrink-0" />
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-start">
          <ToggleThemeButton />
        </div>
      </SidebarHeader>

      {/* ─── MENU CONTENT ───────────────────────────────────────────── */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {topics.map((topic) => (
              <SidebarMenuItem
                key={topic.name}
                className="flex items-center gap-3 px-4 py-2 rounded-md transition-colors cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground font-primary"
              >
                <topic.icon className="h-4 w-4 opacity-80" />
                <span>{topic.name}</span>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <SidebarFooter className="p-4 text-xs text-muted-foreground font-primary border-t border-sidebar-border">
        <p className="text-xs">© 2025 Vivek Writes</p>
        <p className="text-xs text-muted-foreground/70">
          Built with ❤️ and Next.js
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
