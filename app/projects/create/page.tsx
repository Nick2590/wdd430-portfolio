import Link from 'next/link';
import { createProject } from '@/app/projects/actions';

export default function CreateProjectPage() {
  return (
    <section className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Portfolio Work</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Create Project</h1>
      <form action={createProject} className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-800" htmlFor="title">Title</label>
          <input className="mt-2 w-full border border-slate-300 bg-white px-3 py-2 text-slate-950" id="title" name="title" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-800" htmlFor="description">Description</label>
          <textarea className="mt-2 w-full border border-slate-300 bg-white px-3 py-2 text-slate-950" id="description" name="description" required rows={5} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-800" htmlFor="technologies">Technologies</label>
          <input className="mt-2 w-full border border-slate-300 bg-white px-3 py-2 text-slate-950" id="technologies" name="technologies" required />
          <p className="mt-2 text-sm text-slate-600">Separate technologies with commas.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800" type="submit">Create project</button>
          <Link className="px-4 py-2 font-semibold text-teal-700 underline hover:text-teal-900" href="/projects">Cancel</Link>
        </div>
      </form>
    </section>
  );
}