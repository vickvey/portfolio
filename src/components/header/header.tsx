import Navbar from "./navbar";
import CTA from "./CTA";
import MainLogo from "./main-logo";

export default function Header() {
  return (
    <header className="py-2 fixed top-0 left-0 right-0 lg:mt-4 w-full z-50 backdrop-blur-xs lg:backdrop-blur-none border-b-2 lg:border-none">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
        <MainLogo />
        {/* Desktop only Navbar */}
        <Navbar />
        <CTA />
      </div>
    </header>
  );
}
