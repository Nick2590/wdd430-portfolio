import { signOut } from '@/auth';

async function signOutAction() {
  'use server';

  await signOut({ redirectTo: '/' });
}

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button
        className="bg-teal-700 px-4 py-2 font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}