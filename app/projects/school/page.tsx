import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default function SchoolProjectsPage() {
  const projects = getProjects("school");

  return (
    <section>
      <h1 className="text-4xl font-bold text-slate-950">School Projects</h1>
      <ProjectList projects={projects} />
    </section>
  );
}