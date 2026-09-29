import Link from 'next/link';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

export const dynamic = 'force-dynamic';

export default async function DashboardProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold text-slate-950">Manage Projects</h1>
        <Link
          className="bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          href="/dashboard/projects/new"
        >
          New Project
        </Link>
      </div>
      {projects.length > 0 ? (
        <ProjectList management projects={projects} />
      ) : (
        <p className="mt-6 text-slate-700">No projects yet.</p>
      )}
    </section>
  );
}