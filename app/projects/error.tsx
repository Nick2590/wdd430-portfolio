'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ProjectsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProjectsError({ error, reset }: ProjectsErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Portfolio Work</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Something went wrong</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">
        We could not complete that project request. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800" onClick={reset} type="button">Try Again</button>
        <Link className="px-4 py-2 font-semibold text-teal-700 underline hover:text-teal-900" href="/projects">Back to Projects</Link>
      </div>
    </section>
  );
}