import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { profile, integrationLabel } from '@/data/profile';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { cvSkills } from '@/data/cv';

export const metadata: Metadata = {
  title: 'About Viet Tran | Software Engineer & Integration Consultant',
  description: 'Software engineering experience across banking, ERP integrations, industrial systems and published mobile products.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <section className="grid items-center gap-10 md:grid-cols-[1fr_240px]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-300">Background</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">About Viet Tran.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">I am a software engineer and integration consultant based in Helsinki. I have delivered <strong className="text-white">{integrationLabel}</strong> across my career, working with banking systems, ERP platforms and industrial software.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-300">Alongside enterprise work, I build business websites and mobile products. TM Beauty, KovaFit and DartScope show that work in practice.</p>
          <Link href="/about/cv" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-5 py-3 font-semibold text-gray-950 hover:bg-teal-200">View one-page CV<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <Image src="/viet-2026.png" alt="Viet Tran" width={240} height={240} sizes="240px" priority className="rounded-2xl object-cover" />
      </section>
      <section className="mt-16" aria-labelledby="work-history"><h2 id="work-history" className="text-3xl font-semibold text-white">Work history</h2><div className="mt-8 grid gap-6 md:grid-cols-2">{experienceData.map((experience) => <article key={experience.company} className="rounded-2xl border border-gray-700 bg-gray-800/30 p-7"><p className="text-sm text-gray-400">{experience.period}</p><h3 className="mt-3 text-xl font-semibold text-white">{experience.company}</h3><p className="mt-1 font-medium text-teal-300">{experience.title}</p><ul className="mt-5 list-disc space-y-2 pl-5 text-gray-300">{experience.description.map((description) => <li key={description} className="leading-relaxed">{description}</li>)}</ul></article>)}</div></section>
      <div className="mt-16 grid gap-12 md:grid-cols-2"><section aria-labelledby="education"><h2 id="education" className="text-3xl font-semibold text-white">Education</h2>{educationData.map((education) => <div key={education.degree} className="mt-6 border-b border-gray-700 pb-6"><h3 className="text-lg font-semibold text-white">{education.degree}</h3><p className="mt-2 text-teal-300">{education.school} · {education.year}</p><p className="mt-2 leading-relaxed text-gray-300">{education.description}</p></div>)}</section><section aria-labelledby="technical-focus"><h2 id="technical-focus" className="text-3xl font-semibold text-white">Technical focus</h2>{cvSkills.map((skill) => <div key={skill.title} className="mt-6"><h3 className="font-semibold text-white">{skill.title}</h3><p className="mt-2 leading-relaxed text-gray-300">{skill.text}</p></div>)}</section></div>
      <section className="mt-16 border-t border-gray-700 pt-10"><h2 className="text-3xl font-semibold text-white">Work together</h2><p className="mt-4 leading-relaxed text-gray-300">For a focused integration, an API or a digital product, send me the problem and the result you need.</p><div className="mt-6 flex flex-wrap gap-6"><a href={`mailto:${profile.email}`} className="font-medium text-teal-300 hover:text-teal-200">{profile.email}</a><Link href="/consulting" className="inline-flex items-center gap-2 font-medium text-teal-300">Consulting services<ArrowRight size={17} aria-hidden="true" /></Link><Link href="/projects" className="font-medium text-teal-300">Selected work</Link></div></section>
    </div>
  );
}
