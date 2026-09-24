import CreateProjectForm from '@/app/projects/create/create-project-form';

export default function CreateProjectPage() {
  return (
    <section className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Portfolio Work</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Create Project</h1>
      <CreateProjectForm />
    </section>
  );
}