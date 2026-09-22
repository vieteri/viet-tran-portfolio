import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { profile, integrationLabel } from '@/data/profile';
import { consultingServices } from '@/data/consulting';
import { featuredProjects } from '@/data/projectsData';
import Metrics from '@/components/Metrics';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Software Consulting & Integration Development | Viet Tran',
  description: 'Hands-on software consulting in Helsinki and remotely. 100+ client integrations, API development, Frends, web and mobile products.',
  alternates: { canonical: '/consulting' },
};

export default function Consulting() {
  return (
    <div className="bg-gray-900 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Independent software consulting / Helsinki + remote</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl">Your systems should work together.<br /><span className="text-teal-300">Your ideas should make it to production.</span></h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-gray-300">I bring hands-on integration and software development experience, with <strong className="text-white">{integrationLabel}</strong> delivered across my career. I can contribute to your engineering team or deliver a clearly scoped project.</p>
        <div className="mt-9 flex flex-wrap gap-4"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-teal-300 px-6 py-4 font-semibold text-gray-950 hover:bg-teal-200">Discuss a project<ArrowUpRight size={18} aria-hidden="true" /></a><a href="#references" className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-4 font-medium hover:border-gray-300">See the work<ArrowRight size={18} aria-hidden="true" /></a><Link href="/about/cv" className="inline-flex items-center px-3 py-4 font-medium text-teal-300">View one-page CV</Link></div>
      </section>
      <Metrics />
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Focused services. Hands-on delivery.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">{consultingServices.map((service) => <article key={service.number} className="rounded-2xl border border-gray-700 bg-gray-800/30 p-7"><p className="font-mono text-sm text-teal-300">{service.number}</p><h3 className="mt-5 text-2xl font-semibold">{service.title}</h3><p className="mt-4 leading-relaxed text-gray-300">{service.description}</p><ul className="mt-6 space-y-3">{service.details.map((detail) => <li key={detail} className="flex gap-3 text-sm leading-relaxed text-gray-300"><Check size={18} className="mt-0.5 shrink-0 text-teal-300" aria-hidden="true" /><span>{detail}</span></li>)}</ul></article>)}</div>
      </section>
      <section id="references" className="scroll-mt-24 border-y border-gray-800 bg-gray-950/30 px-6 py-20"><div className="mx-auto max-w-7xl"><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">Selected references</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Work you can open and use.</h2><p className="mt-4 max-w-2xl leading-relaxed text-gray-300">TM Beauty is client work. KovaFit and DartScope are independently developed products published on the App Store.</p><div className="mt-10 grid gap-6 md:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div><p className="mt-6 text-sm leading-relaxed text-gray-400">The integration total describes my career delivery experience, not the number of public case studies or distinct customers. Employer work is separate from these independent references.</p></div></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2"><div><h2 className="text-3xl font-semibold tracking-tight">A clear way to work together.</h2><p className="mt-5 leading-relaxed text-gray-300">Start with a focused integration, an API, a product milestone or a technical review. Scope, schedule and availability are agreed before implementation.</p><p className="mt-4 leading-relaxed text-gray-300">You work directly with the person designing and building the solution. The aim is useful software, understandable decisions and a handover your team can work with.</p></div><ol className="space-y-6">{[
        ['Understand the problem', 'Review the current systems, constraints and the outcome you need.'],
        ['Agree the delivery', 'Define scope, responsibilities, milestones and acceptance criteria.'],
        ['Build, test and hand over', 'Implement the solution, review it together and document how to run it.'],
      ].map(([title, text], index) => <li key={title} className="flex gap-5"><span className="font-mono text-teal-300">0{index + 1}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-gray-300">{text}</p></div></li>)}</ol></section>
      <section id="contact" className="scroll-mt-24 border-t border-gray-800 px-6 py-20"><div className="mx-auto max-w-3xl"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tell me what needs to work better.</h2><p className="mt-5 text-lg leading-relaxed text-gray-300">A short description of the problem, your current stack and your target timeline is enough to start a conversation.</p><a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-6 py-4 font-semibold text-gray-950 hover:bg-teal-200">{profile.email}<ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
    </div>
  );
}
