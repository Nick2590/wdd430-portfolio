import ProjectList, { type Project } from "@/components/ProjectList";

const projects: Project[] = [
  {
    title: "CSE 340 Community Volunteer Application",
    description:
      "A server-side web application I built for CSE 340 that allows users to view community projects and volunteer for opportunities.",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL", "JavaScript"],
    link: "https://github.com/Nick2590/CSE-340",
  },
  {
    title: "WDD 430 React Practice",
    description:
      "Week 01 React practice demonstrating direct DOM manipulation, reusable React components, props, JSX, and state.",
    technologies: ["React", "JavaScript", "JSX", "Babel", "HTML"],
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-300 pb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700">WDD 430 Portfolio</p>
        <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">Nicholas Goodsell</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          I am learning full-stack web development through hands-on work with React, Next.js, and TypeScript. This portfolio collects coursework and projects as I continue building practical web development skills.
        </p>
      </section>

      <section className="pt-10" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-3xl font-bold text-slate-950">Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </>
  );
}