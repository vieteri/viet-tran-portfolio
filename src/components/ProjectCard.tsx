import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectProps } from '@/app/interfaces';
import ProjectMedia from './ProjectMedia';

// An unboxed project story. Kept under the existing export name for compatibility.
export default function ProjectCard({ project }: { project: ProjectProps }) {
  const href = project.externalLink || `/projects/${project.slug}`;
  const external = project.externalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <article className={`work-entry work-entry--${project.slug}`}>
      <Link href={href} {...external} className="work-visual-link" aria-label={`Open ${project.title}`}><ProjectMedia project={project} /></Link>
      <div className="work-description">
        <h3><Link href={href} {...external}>{project.title}</Link></h3>
        <p className="work-category">{project.category === 'App Store' ? 'Independent product · Published on the App Store' : 'Client website · Web development'}</p>
        <p>{project.description}</p>
        <Link href={href} {...external} className="text-link">{project.externalLabel || 'Project details'}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
