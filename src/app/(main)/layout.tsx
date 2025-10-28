import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      <div className="flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
