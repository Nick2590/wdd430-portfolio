import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Not Found',
  description: 'The requested portfolio project could not be found.',
};

export default function ProjectDetailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}