import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projects } from '@/data/projectsData';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return { title: `${project.title} | Viet Tran`, description: project.description, alternates: { canonical: `/projects/${project.slug}` } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  // Documentation paths come only from the checked-in project catalogue.
  // External references intentionally do not require a README.
  const documentation = project.readme
    ? await readFile(path.join(process.cwd(), 'public', project.readme.replace(/^\//, '')), 'utf8')
    : null;
  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="font-medium text-teal-300 hover:text-teal-200">← All projects</Link>
      <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-teal-300">{project.category}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">{project.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-gray-300">{project.description}</p>
      <div className="my-8 flex flex-wrap gap-5">
        {project.externalLink && <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-teal-300 px-5 py-3 font-semibold text-gray-950 hover:bg-teal-200">{project.externalLabel} ↗</a>}
        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-gray-600 px-5 py-3 font-medium text-white hover:border-gray-300">View on GitHub ↗</a>}
      </div>
      {documentation && <div className="prose prose-invert max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        h1: ({ children }) => <h2>{children}</h2>,
        img: ({ src, alt }) => typeof src === 'string' ? <span className="block"><Image src={src.replace(/^\/public\//, '/')} alt={alt || ''} width={800} height={600} unoptimized className="h-auto max-w-full rounded-lg" /></span> : null,
      }}>{documentation}</ReactMarkdown></div>}
    </article>
  );
}
