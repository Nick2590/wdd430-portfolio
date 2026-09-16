import Pagination from "@/components/Pagination";
import ProjectList from "@/components/ProjectList";
import ProjectSearch from "@/components/ProjectSearch";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";

export const dynamic = "force-dynamic";

interface ProjectsPageProps {
  searchParams: Promise<{ query?: string; page?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { query, page } = await searchParams;
  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, page),
    fetchProjectsPages(query),
  ]);

  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Portfolio Work</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Projects Overview</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">
        Explore my open source work and school projects through the section links above.
      </p>
      <ProjectSearch />
      <ProjectList projects={projects} />
      <Pagination totalPages={totalPages} />
    </section>
  );
}