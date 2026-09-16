import { sql } from '@vercel/postgres';

export const PROJECTS_PER_PAGE = 6;

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export async function getProjects(
  type?: string | null
): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT * FROM projects ORDER BY id
  `;
  return rows;
}

function sanitizeQuery(query?: string | null): string {
  return (query ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 100);
}

function escapeLikePattern(query: string): string {
  return query.replace(/[\\%_]/g, (character) => `\\${character}`);
}

function getSearchPattern(query?: string | null): string | null {
  const sanitizedQuery = sanitizeQuery(query);

  return sanitizedQuery ? `%${escapeLikePattern(sanitizedQuery)}%` : null;
}

function normalizePage(page?: string | number): number {
  const parsedPage = Number(page);

  return Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
}

export async function fetchFilteredProjects(
  query?: string | null,
  page?: string | number
): Promise<Project[]> {
  const searchPattern = getSearchPattern(query);
  const safePage = normalizePage(page);
  const offset = (safePage - 1) * PROJECTS_PER_PAGE;

  if (searchPattern) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects
      WHERE title ILIKE ${searchPattern} ESCAPE ${'\\'}
         OR description ILIKE ${searchPattern} ESCAPE ${'\\'}
         OR type ILIKE ${searchPattern} ESCAPE ${'\\'}
      ORDER BY id
      LIMIT ${PROJECTS_PER_PAGE} OFFSET ${offset}
    `;
    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    ORDER BY id
    LIMIT ${PROJECTS_PER_PAGE} OFFSET ${offset}
  `;
  return rows;
}

export async function fetchProjectsPages(query?: string | null): Promise<number> {
  const searchPattern = getSearchPattern(query);

  if (searchPattern) {
    const { rows } = await sql<{ count: number }>`
      SELECT COUNT(*)::int AS count FROM projects
      WHERE title ILIKE ${searchPattern} ESCAPE ${'\\'}
         OR description ILIKE ${searchPattern} ESCAPE ${'\\'}
         OR type ILIKE ${searchPattern} ESCAPE ${'\\'}
    `;
    return Math.ceil(Number(rows[0]?.count ?? 0) / PROJECTS_PER_PAGE);
  }

  const { rows } = await sql<{ count: number }>`
    SELECT COUNT(*)::int AS count FROM projects
  `;
  return Math.ceil(Number(rows[0]?.count ?? 0) / PROJECTS_PER_PAGE);
}

export async function getProjectById(
  id: number
): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}