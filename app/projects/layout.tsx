import Link from "next/link";

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <nav className="mb-10 border-b border-slate-300 pb-4" aria-label="Projects navigation">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-semibold text-slate-700">
          <li><Link href="/projects" className="hover:text-teal-700">Overview</Link></li>
          <li><Link href="/projects/opensource" className="hover:text-teal-700">Open Source</Link></li>
          <li><Link href="/projects/school" className="hover:text-teal-700">School</Link></li>
          <li><Link href="/projects/settings" className="hover:text-teal-700">Settings</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}