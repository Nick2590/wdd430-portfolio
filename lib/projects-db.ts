export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CSE 340 Community Volunteer Application",
    description:
      "A server-side web application for viewing community projects and volunteering for opportunities.",
    type: "opensource",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL", "JavaScript"],
    link: "https://github.com/Nick2590/CSE-340",
  },
  {
    id: 2,
    title: "WDD 430 React Practice",
    description:
      "Coursework demonstrating direct DOM manipulation, reusable React components, props, JSX, and state.",
    type: "school",
    technologies: ["React", "JavaScript", "JSX", "Babel", "HTML"],
  },
];

export function getProjects(type?: string | null): Project[] {
  if (type) {
    return projects.filter((project) => project.type === type);
  }

  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find((project) => project.id === id) ?? null;
}