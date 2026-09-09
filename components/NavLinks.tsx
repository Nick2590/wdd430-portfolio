"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || (href === "/projects" && pathname.startsWith("/projects/"));

  return (
    <ul className="flex gap-6 font-semibold text-slate-700">
      {links.map((link) => {
        const active = isActive(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={active ? "text-teal-800 underline underline-offset-4" : "hover:text-teal-700"}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}