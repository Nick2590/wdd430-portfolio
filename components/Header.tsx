import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-300 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-slate-950">Nicholas Goodsell</Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 font-semibold text-slate-700">
            <li><Link href="/" className="hover:text-teal-700">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-700">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}