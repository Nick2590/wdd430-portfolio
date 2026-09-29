import { redirect } from 'next/navigation';

interface EditProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const { id: idParam } = await params;
  redirect(`/dashboard/projects/${encodeURIComponent(idParam)}/edit`);
}