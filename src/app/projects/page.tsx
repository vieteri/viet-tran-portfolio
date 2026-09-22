import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects, featuredProjects } from '@/data/projectsData';

export const metadata: Metadata = {
  title: 'Client Work & Published Apps | Viet Tran',
  description: 'Selected software projects: TM Beauty, KovaFit and DartScope, plus integration tools and earlier experiments.',
  alternates: { canonical: '/projects' },
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-300">Portfolio</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Client work & published products.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">A live business website and two independent App Store apps. Earlier experiments and developer tools are collected below.</p>
      <section aria-labelledby="selected-work" className="mt-14"><h2 id="selected-work" className="mb-7 text-2xl font-semibold text-white">Selected work</h2><div className="grid gap-6 md:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
      <section aria-labelledby="earlier-work" className="mt-20"><h2 id="earlier-work" className="mb-7 text-2xl font-semibold text-white">Tools & earlier projects</h2><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.filter((project) => !project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    </div>
  );
}
