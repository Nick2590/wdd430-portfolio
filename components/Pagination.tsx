"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  return (
    <nav className="mt-8 flex items-center justify-between" aria-label="Project pagination">
      {currentPage > 1 ? (
        <Link
          className="font-semibold text-teal-700 hover:text-teal-900"
          href={createPageURL(previousPage)}
        >
          Previous
        </Link>
      ) : (
        <span className="text-slate-400">Previous</span>
      )}
      <span className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages ? (
        <Link
          className="font-semibold text-teal-700 hover:text-teal-900"
          href={createPageURL(nextPage)}
        >
          Next
        </Link>
      ) : (
        <span className="text-slate-400">Next</span>
      )}
    </nav>
  );
}
