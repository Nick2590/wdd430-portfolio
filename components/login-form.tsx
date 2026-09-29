'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/login/actions';

export default function LoginForm() {
  const [error, formAction, isPending] = useActionState(authenticate, undefined);
  const inputClassName =
    'mt-2 w-full border border-slate-300 bg-white px-3 py-2 text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700';

  return (
    <form action={formAction} className="mt-8 max-w-md space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="email">
          Email
        </label>
        <input
          autoComplete="email"
          className={inputClassName}
          id="email"
          name="email"
          required
          type="email"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="password">
          Password
        </label>
        <input
          autoComplete="current-password"
          className={inputClassName}
          id="password"
          minLength={6}
          name="password"
          required
          type="password"
        />
      </div>
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      <button
        className="bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:bg-teal-500"
        disabled={isPending}
        type="submit"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}