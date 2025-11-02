import { BlogSidebar } from "@/components/blogs/blog-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen w-full">
        {/* Sidebar */}
        <BlogSidebar />

        {/* Main content */}
        <main className="flex-1 px-6 py-8 max-w-5xl mx-auto">
          <div className="mb-4">
            <SidebarTrigger />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
