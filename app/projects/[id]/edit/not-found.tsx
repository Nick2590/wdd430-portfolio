import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <section className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Portfolio Work</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Project Not Found</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">
        The requested project does not exist.
      </p>
      <Link className="mt-8 inline-block font-semibold text-teal-700 underline hover:text-teal-900" href="/projects">
        Back to Projects
      </Link>
    </section>
  );
}