function ProjectListSkeleton() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, index) => (
        <article
          key={index}
          className="animate-pulse border border-slate-300 bg-white p-6 shadow-sm"
        >
          <div className="h-7 w-3/4 bg-slate-200" />
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full bg-slate-200" />
            <div className="h-4 w-5/6 bg-slate-200" />
            <div className="h-4 w-2/3 bg-slate-200" />
          </div>
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-20 bg-teal-100" />
            <div className="h-7 w-24 bg-teal-100" />
            <div className="h-7 w-16 bg-teal-100" />
          </div>
          <div className="mt-6 h-5 w-28 bg-slate-200" />
        </article>
      ))}
    </div>
  );
}

export default function OpenSourceProjectsLoading() {
  return (
    <section>
      <div className="h-10 w-3/4 animate-pulse bg-slate-200" />
      <ProjectListSkeleton />
    </section>
  );
}
