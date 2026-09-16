"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ProjectSearch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParamsRef = useRef(new URLSearchParams(searchParams.toString()));
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    searchParamsRef.current = new URLSearchParams(searchParams.toString());
    const query = searchParams.get("query") ?? "";

    if (inputRef.current && inputRef.current.value !== query) {
      inputRef.current.value = query;
    }
  }, [searchParams]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (value: string) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      const params = new URLSearchParams(searchParamsRef.current.toString());
      const trimmedQuery = value.trim();

      if (trimmedQuery) {
        params.set("query", trimmedQuery);
      } else {
        params.delete("query");
      }

      params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);
  };

  return (
    <div className="mt-6">
      <label className="text-sm font-semibold text-slate-700" htmlFor="project-search">
        Search projects
      </label>
      <input
        className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-200"
        id="project-search"
        name="query"
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search by title or description"
        ref={inputRef}
        type="search"
        defaultValue={searchParams.get("query") ?? ""}
      />
    </div>
  );
}
