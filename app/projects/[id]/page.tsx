import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { getProjectById } from '@/lib/projects-db';

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

const getCachedProjectById = cache(getProjectById);

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) {
    return {
      title: 'Project Not Found',
      description: 'The requested portfolio project could not be found.',
    };
  }

  const project = await getCachedProjectById(id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested portfolio project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const project = await getCachedProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-3xl">
      <Link
        className="font-semibold text-teal-700 underline hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        href="/projects"
      >
        Back to projects
      </Link>
      <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-teal-700">
        {project.type === 'opensource' ? 'Open Source' : 'School'}
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">{project.title}</h1>
      <p className="mt-5 leading-8 text-slate-700">{project.description}</p>
      <h2 className="mt-8 text-xl font-bold text-slate-950">Technologies</h2>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li key={technology} className="bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
            {technology}
          </li>
        ))}
      </ul>
      {project.link && (
        <a
          className="mt-8 inline-block font-semibold text-teal-700 underline hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          View project
        </a>
      )}
    </article>
  );
}