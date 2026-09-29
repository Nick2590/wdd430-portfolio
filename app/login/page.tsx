import LoginForm from '@/components/login-form';

export default function LoginPage() {
  return (
    <section className="max-w-2xl">
      <h1 className="text-4xl font-bold text-slate-950">Sign In</h1>
      <LoginForm />
    </section>
  );
}