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
    <div className="relative h-screen w-full overflow-x-hidden z-0">
      {/* Background Animated Layer */}
      <div className="absolute h-screen w-full -z-10">
        <Beams
          beamWidth={2.4}
          beamHeight={15}
          beamNumber={12}
          lightColor="violet"
          speed={7}
          noiseIntensity={3}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Content Layer */}
      <div className="relative flex-1 z-10 max-w-screen-xl mx-auto">
        <LayoutGridsColumn />

        {/* Actual Content Layer */}
        <div className="relative flex-1 w-full flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
