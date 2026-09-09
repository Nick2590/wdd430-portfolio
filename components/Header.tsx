import Link from "next/link";
import NavLinks from "@/components/NavLinks";

export default function Header() {
  return (
    <header className="border-b border-slate-300 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-slate-950">Nicholas Goodsell</Link>
        <nav aria-label="Main navigation">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}