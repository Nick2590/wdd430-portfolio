import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function OpenSourceProjectsPage() {
  const projects = await getProjects("opensource");

  return (
    <section>
      <h1 className="text-4xl font-bold text-slate-950">Open Source Projects</h1>
      <ProjectList projects={projects} />
    </section>
  );
}