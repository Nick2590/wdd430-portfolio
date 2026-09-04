import ProjectCard from "@/components/ProjectCard";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}