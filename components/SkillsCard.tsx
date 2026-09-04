interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <section className="border border-slate-300 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill} className="border-l-4 border-teal-600 bg-slate-50 px-3 py-2 text-slate-700">{skill}</li>
        ))}
      </ul>
    </section>
  );
}