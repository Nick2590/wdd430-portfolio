'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { sql } from '@vercel/postgres';

const ProjectFormSchema = z.object({
  title: z.string().trim().min(1, 'Title is required.'),
  description: z.string().trim().min(1, 'Description is required.'),
  technologies: z
    .string()
    .trim()
    .refine(
      (value) => value.split(',').some((technology) => technology.trim().length > 0),
      'At least one technology is required.'
    ),
});

function parseProjectFormData(formData: FormData) {
  const validation = ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
  });

  if (!validation.success) {
    return null;
  }

  const technologies = validation.data.technologies
    .split(',')
    .map((technology) => technology.trim())
    .filter(Boolean);

  return { ...validation.data, technologies };
}

export async function createProject(formData: FormData) {
  const project = parseProjectFormData(formData);

  if (!project) {
    return;
  }

  try {
    await sql`
      INSERT INTO projects (title, description, technologies)
      VALUES (
        ${project.title},
        ${project.description},
        string_to_array(${project.technologies.join(',')}, ${','})
      )
    `;
  } catch (error) {
    console.error('Failed to create project:', error);
    throw new Error('Unable to create the project. Please try again.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: number, formData: FormData) {
  const project = parseProjectFormData(formData);

  if (!project) {
    return;
  }

  try {
    await sql`
      UPDATE projects
      SET title = ${project.title},
          description = ${project.description},
        technologies = string_to_array(${project.technologies.join(',')}, ${','})
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Failed to update project:', error);
    throw new Error('Unable to update the project. Please try again.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(formData: FormData) {
  const id = Number(formData.get('id'));

  if (!Number.isInteger(id) || id <= 0) {
    return;
  }

  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
  } catch (error) {
    console.error('Failed to delete project:', error);
    throw new Error('Unable to delete the project. Please try again.');
  }

  revalidatePath('/projects');
}