import ProjectCard from "@/components/ProjectCard";
import type { Project as DatabaseProject } from "@/lib/projects-db";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Array<DatabaseProject | Project>;
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={'id' in project ? project.id : project.title} {...project} />
      ))}
    </div>
  );
}