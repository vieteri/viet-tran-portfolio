import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Globe, Smartphone } from 'lucide-react';
import type { ProjectProps } from '@/app/interfaces';

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const Icon = project.category === 'App Store' ? Smartphone : Globe;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700/70 bg-gray-900 transition-colors hover:border-teal-400/60">
      {project.imageSrc ? (
        <div className="relative h-48 bg-gray-800"><Image src={project.imageSrc} alt={project.imageAlt || project.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-contain p-5" /></div>
      ) : (
        <div className="flex h-32 items-center justify-between border-b border-gray-800 bg-gray-800/40 px-7" aria-hidden="true"><Icon className="h-10 w-10 text-teal-300" /><span className="text-5xl font-semibold tracking-tight text-gray-500">{project.title === 'TM Beauty' ? 'TM' : project.title.slice(0, 1)}</span></div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-300">{project.category}</p>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mb-7 mt-3 flex-1 leading-relaxed text-gray-300">{project.description}</p>
        {project.externalLink ? (
          <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-teal-300 hover:text-teal-200">{project.externalLabel}<ExternalLink size={16} aria-hidden="true" /></a>
        ) : (
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 font-medium text-teal-300 hover:text-teal-200">Project details<ArrowRight size={16} aria-hidden="true" /></Link>
        )}
      </div>
    </article>
  );
}
