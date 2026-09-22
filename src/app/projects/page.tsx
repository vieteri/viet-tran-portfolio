import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import ContactBlock from '@/components/ContactBlock';
import { projects, featuredProjects } from '@/data/projectsData';

export const metadata: Metadata = {
  title: 'Client Work & Published Apps | Viet Tran',
  description: 'Selected software projects: TM Beauty, KovaFit and DartScope, plus integration tools and earlier experiments.',
  alternates: { canonical: '/projects' },
};

export default function Projects() {
  return (
    <>
      <div className="shell"><header className="page-opening"><h1 className="display">Built to be<br /><em>used.</em></h1><p className="lead">A client website, independent apps and the tools I have built along the way.</p></header>
        <section aria-labelledby="selected-work" className="work-section"><h2 id="selected-work" className="sr-only">Selected work</h2><div className="work-gallery">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          <section className="archive-section" aria-labelledby="earlier-work"><h2 id="earlier-work" className="section-title">Tools & earlier explorations.</h2><div className="archive-list">{projects.filter((project) => !project.featured).map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} className="archive-row"><div><h3>{project.title}</h3><small>{project.category}</small></div><p>{project.description}</p><ArrowUpRight size={22} aria-hidden="true" /></Link>)}</div></section>
        </section>
      </div>
      <ContactBlock />
    </>
  );
}
