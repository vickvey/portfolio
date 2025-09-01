import Beams from "@/Backgrounds/Beams/Beams";
import Footer from "@/components/footer";
import { LayoutGridsColumn } from "@/components/grids/column";
import Header from "@/components/header/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden z-0 font-electrolize">
      {/* Background Animated Layer */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={2.4}
          beamHeight={15}
          beamNumber={12}
          lightColor="white"
          speed={7}
          noiseIntensity={3}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-screen mx-4 lg:mx-16 2xl:mx-40">
        {/* <LayoutGridsColumn /> */}

        {/* Actual Content */}
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
