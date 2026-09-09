import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Portfolio Work</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Projects Overview</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">
        Explore my open source work and school projects through the section links above.
      </p>
      <ProjectList projects={projects} />
    </section>
  );
}