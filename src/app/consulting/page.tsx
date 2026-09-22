import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile, integrationLabel } from '@/data/profile';
import { featuredProjects } from '@/data/projectsData';
import { projectThumbnails } from '@/components/ProjectMedia';
import ServiceList from '@/components/ServiceList';
import ContactBlock from '@/components/ContactBlock';

export const metadata: Metadata = {
  title: 'Software Consulting & Integration Development | Viet Tran',
  description: 'Hands-on software consulting in Helsinki and remotely. 100+ client integrations, API development, Frends, web and mobile products.',
  alternates: { canonical: '/consulting' },
};

export default function Consulting() {
  return (
    <>
      <section className="shell page-opening"><h1 className="display">Let&apos;s get your<br /><em>software working.</em></h1><p className="lead">Systems that need to connect. A workflow that needs to be simpler. An idea ready to become a product. I bring architecture and implementation together, and work directly with the people who own the problem.</p><div className="actions"><a href={`mailto:${profile.email}`} className="button">Discuss a project<ArrowUpRight size={19} aria-hidden="true" /></a><Link href="/about/cv" className="text-link">View one-page CV<ArrowRight size={17} aria-hidden="true" /></Link></div><p className="hero-proof"><strong>{integrationLabel}</strong> delivered across my career.<br />Helsinki and remote. Scope and availability agreed before work begins.</p></section>
      <section className="shell service-layout consulting-services" id="services"><div className="service-intro"><h2 className="section-title">Where I can<br /><em>help.</em></h2><p>I focus on work where understanding the wider system matters as much as writing the code.</p></div><ServiceList detailed /></section>
      <section className="reference-section" id="references"><div className="shell reference-layout"><div><h2 className="section-title">Less theory.<br /><em>More things you can open.</em></h2><p>TM Beauty is a client website. KovaFit and DartScope are independent apps. These public projects sit alongside my enterprise integration experience.</p></div><div>{featuredProjects.map((project) => <a className="reference-link" href={project.externalLink} target="_blank" rel="noopener noreferrer" key={project.slug}><Image src={projectThumbnails[project.slug]} alt={`${project.title} preview`} width={80} height={96} sizes="80px" /><div><h3>{project.title}</h3><p>{project.category === 'App Store' ? 'Published app · View on the App Store' : 'Client website · Visit tmbeauty.fi'}</p></div><ArrowUpRight size={21} aria-hidden="true" /></a>)}</div></div></section>
      <section className="shell service-layout process-section"><div className="service-intro"><h2 className="section-title">A straightforward<br /><em>way to work.</em></h2><p>Start with the problem. Agree what a useful result looks like. Keep the decisions and the delivery close together.</p></div><ol className="process-list"><li><h3>Understand the problem</h3><p>Review your current systems, constraints and the outcome you need.</p></li><li><h3>Agree the delivery</h3><p>Define scope, responsibilities, milestones and acceptance criteria.</p></li><li><h3>Build, test and hand over</h3><p>Implement the solution, review it together and document how to run it.</p></li></ol></section>
      <ContactBlock />
    </>
  );
}
