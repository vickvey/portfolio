import Footer from "@/components/main/layout/footer";
import Header from "@/components/main/layout/header";

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
