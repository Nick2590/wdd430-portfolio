import Link from "next/link";
import { deleteProject } from "@/app/projects/actions";

interface ProjectCardProps {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ id, title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="border border-slate-300 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {technologies.map((technology) => (
          <li key={technology} className="bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">{technology}</li>
        ))}
      </ul>
      {link && (
        <a className="mt-6 inline-block font-semibold text-teal-700 underline hover:text-teal-900" href={link} target="_blank" rel="noopener noreferrer">
          View project
        </a>
      )}
      {id !== undefined && (
        <div className="mt-6 flex items-center gap-4">
          <Link className="font-semibold text-teal-700 underline hover:text-teal-900" href={`/projects/${id}/edit`}>Edit</Link>
          <form action={deleteProject}>
            <input type="hidden" name="id" value={id} />
            <button className="font-semibold text-red-700 underline hover:text-red-900" type="submit">Delete</button>
          </form>
        </div>
      )}
    </article>
  );
}