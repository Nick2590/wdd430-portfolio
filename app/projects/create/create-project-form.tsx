'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { createProject, type State } from '@/app/projects/actions';

const initialState: State = {
  message: null,
  errors: {},
};

const currentYear = new Date().getFullYear();

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(createProject, initialState);
  const inputClassName = 'mt-2 w-full border border-slate-300 bg-white px-3 py-2 text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700';

  return (
    <form action={formAction} className="mt-8 space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="title">Title</label>
        <input aria-describedby="title-error" className={inputClassName} id="title" name="title" required />
        <div aria-atomic="true" aria-live="polite" id="title-error">
          {state.errors?.title?.map((error) => <p className="mt-2 text-sm text-red-700" key={error}>{error}</p>)}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="description">Description</label>
        <textarea aria-describedby="description-error" className={inputClassName} id="description" name="description" required rows={5} />
        <div aria-atomic="true" aria-live="polite" id="description-error">
          {state.errors?.description?.map((error) => <p className="mt-2 text-sm text-red-700" key={error}>{error}</p>)}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="technologies">Technologies</label>
        <input aria-describedby="technologies-error" className={inputClassName} id="technologies" name="technologies" required />
        <p className="mt-2 text-sm text-slate-600">Separate technologies with commas.</p>
        <div aria-atomic="true" aria-live="polite" id="technologies-error">
          {state.errors?.technologies?.map((error) => <p className="mt-2 text-sm text-red-700" key={error}>{error}</p>)}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="yearCompleted">Year Completed</label>
        <input aria-describedby="yearCompleted-error" className={inputClassName} id="yearCompleted" max={currentYear} min="2000" name="yearCompleted" required type="number" />
        <div aria-atomic="true" aria-live="polite" id="yearCompleted-error">
          {state.errors?.yearCompleted?.map((error) => <p className="mt-2 text-sm text-red-700" key={error}>{error}</p>)}
        </div>
      </div>
      <div aria-atomic="true" aria-live="polite" role="status">
        {state.message && <p className="text-sm text-red-700">{state.message}</p>}
      </div>
      <div className="flex gap-4">
        <button className="bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:bg-teal-500" disabled={isPending} type="submit">
          {isPending ? 'Saving...' : 'Save Project'}
        </button>
        <Link className="px-4 py-2 font-semibold text-teal-700 underline hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" href="/projects">Cancel</Link>
      </div>
    </form>
  );
}