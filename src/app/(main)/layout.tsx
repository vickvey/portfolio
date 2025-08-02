"use client";

import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Sidebar from "@/components/landing/sidebar";
import { useSidebar } from "@/hooks/useSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
