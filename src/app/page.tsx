import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Metrics from '@/components/Metrics';
import ProjectCard from '@/components/ProjectCard';
import { featuredProjects } from '@/data/projectsData';
import { consultingServices } from '@/data/consulting';
import { experienceData } from '@/data/experience';
import { profile, integrationLabel } from '@/data/profile';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.4fr_0.8fr] lg:py-28">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Viet Tran / Software consulting</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">Reliable integrations.<br /><span className="text-teal-300">Useful digital products.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300">I help companies connect systems, improve workflows and build web and mobile products. Hands-on engineering, from the first technical decision to production.</p>
          <p className="mt-5 text-sm text-gray-300"><strong className="text-white">{integrationLabel}</strong> delivered across my career.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-teal-300 px-6 py-3.5 font-semibold text-gray-950 transition-colors hover:bg-teal-200">Discuss a project<ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3.5 font-medium text-white transition-colors hover:border-gray-300">See selected work<ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <p className="mt-6 text-sm text-gray-400">Helsinki, Finland · Remote collaboration · Selective consulting projects</p>
        </div>
        <aside className="mx-auto w-full max-w-sm rounded-2xl border border-gray-700 bg-gray-800/40 p-7">
          <Image src="/viet-2026.png" alt="Viet Tran" width={320} height={320} sizes="(max-width: 1023px) 320px, 30vw" className="aspect-square w-full rounded-xl object-cover" priority />
          <p className="mt-6 text-xl font-semibold">A developer you work with directly.</p>
          <p className="mt-3 leading-relaxed text-gray-300">Enterprise integration experience, with the practical perspective of building and publishing my own products.</p>
          <Link href="/about/cv" className="mt-5 inline-flex items-center gap-2 font-medium text-teal-300">View one-page CV<ArrowRight size={17} aria-hidden="true" /></Link>
        </aside>
      </section>
      <Metrics />
      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">Selected work</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Live websites. Published apps.</h2><p className="mt-4 max-w-2xl leading-relaxed text-gray-300">A client website and two independent App Store products. Concrete examples of what I build.</p></div><Link href="/projects" className="inline-flex items-center gap-2 font-medium text-teal-300">All projects<ArrowRight size={17} aria-hidden="true" /></Link></div>
        <div className="grid gap-6 md:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <section id="services" className="border-y border-gray-800 bg-gray-950/30 px-6 py-20">
        <div className="mx-auto max-w-7xl"><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">How I can help</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From a specific problem to working software.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{consultingServices.map((service) => <article key={service.number}><p className="font-mono text-sm text-teal-300">{service.number}</p><h3 className="mt-4 text-xl font-semibold">{service.title}</h3><p className="mt-3 leading-relaxed text-gray-300">{service.description}</p></article>)}</div><Link href="/consulting" className="mt-10 inline-flex items-center gap-2 font-medium text-teal-300">Explore consulting services<ArrowRight size={17} aria-hidden="true" /></Link></div>
      </section>
      <section id="about" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-6 py-20 lg:grid-cols-2">
        <div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-300">Background</p><h2 className="text-3xl font-semibold tracking-tight">Enterprise experience.<br />A product builder&apos;s mindset.</h2><p className="mt-6 leading-relaxed text-gray-300">My work spans banking integrations, ERP systems, warehouse software and customer-facing products. I hold a master&apos;s degree in Automation and Electrical Engineering from Aalto University.</p><p className="mt-4 leading-relaxed text-gray-300">I focus on clear interfaces, maintainable code and practical delivery. For consulting projects, we agree the scope and availability before work starts.</p><Link href="/about/cv" className="mt-6 inline-flex items-center gap-2 font-medium text-teal-300">Experience and one-page CV<ArrowRight size={17} aria-hidden="true" /></Link></div>
        <div id="experience" className="scroll-mt-24">{experienceData.slice(0, 3).map((experience) => <div key={experience.company} className="border-b border-gray-700 py-5 first:pt-0"><p className="text-sm text-gray-400">{experience.period}</p><h3 className="mt-2 text-xl font-semibold">{experience.company}</h3><p className="mt-1 text-gray-300">{experience.title}</p></div>)}</div>
      </section>
      <section className="border-t border-gray-800 px-6 py-16"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6"><div><h2 className="text-3xl font-semibold">What are you trying to build?</h2><p className="mt-3 text-gray-300">Send me the problem, your current stack and the result you need.</p></div><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-teal-300 px-6 py-4 font-semibold text-gray-950 hover:bg-teal-200">{profile.email}<ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
    </div>
  );
}
