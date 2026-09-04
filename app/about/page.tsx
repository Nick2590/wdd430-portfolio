import SkillsCard from "@/components/SkillsCard";

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "HTML", "CSS"];

export default function AboutPage() {
  return (
    <section className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">About Me</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Nicholas Goodsell</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">
        I am learning full-stack web development and continuing to build my skills through WDD 430. My coursework includes JavaScript, Node.js, Express, PostgreSQL, React, Next.js, and TypeScript.
      </p>
      <div className="mt-10">
        <SkillsCard title="Technical Skills" skills={skills} />
      </div>
    </section>
  );
}