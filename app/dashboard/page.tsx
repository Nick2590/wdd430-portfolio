import Link from 'next/link';
import { auth } from '@/auth';
import SignOutButton from '@/components/sign-out-button';

export default async function DashboardPage() {
  const session = await auth();

  return (
    <section className="max-w-2xl">
      <h1 className="text-4xl font-bold text-slate-950">Dashboard</h1>
      <p className="mt-4 text-slate-700">
        {session?.user
          ? 'You are signed in as the portfolio owner.'
          : 'You are not signed in.'}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          className="bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          href="/dashboard/projects"
        >
          Manage Projects
        </Link>
        <SignOutButton />
      </div>
    </section>
  );
}