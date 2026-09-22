import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projects } from '@/data/projectsData';
import ProjectMedia from '@/components/ProjectMedia';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
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
  const documentation = project.readme ? await readFile(path.join(process.cwd(), 'public', project.readme.replace(/^\//, '')), 'utf8') : null;
  return (
    <article className="shell project-detail"><Link href="/projects" className="text-link"><ArrowLeft size={17} aria-hidden="true" />All projects</Link><header className="project-detail-header"><h1 className="display">{project.title}</h1><p className="work-category">{project.category}</p><p className="lead">{project.description}</p><div className="actions">{project.externalLink && <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="button">{project.externalLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>}{project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-link">View on GitHub<ArrowUpRight size={18} aria-hidden="true" /></a>}</div></header>
      {project.featured && <ProjectMedia project={project} />}
      {documentation && <div className="prose max-w-none project-document"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: ({ children }) => <h2>{children}</h2>, img: ({ src, alt }) => typeof src === 'string' ? <span className="block"><Image src={src.replace(/^\/public\//, '/')} alt={alt || ''} width={800} height={600} unoptimized /></span> : null }}>{documentation}</ReactMarkdown></div>}
    </article>
  );
}
