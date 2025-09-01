import Link from "next/link";

export default function MainLogo() {
  return (
    <div className="col-span-1 lg:backdrop-blur-xs lg:border-t-2 lg:border-b-2">
      <h2 className="font-bold text-gray-300 text-center text-2xl font-majormonodisplay tracking-tighter capitalize">
        <Link href={"/"}>Vivek Kumar</Link>
      </h2>
    </div>
  );
}
