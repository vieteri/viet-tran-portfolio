import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { integrationLabel } from '@/data/profile';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { cvSkills } from '@/data/cv';
import ContactBlock from '@/components/ContactBlock';

export const metadata: Metadata = {
  title: 'About Viet Tran | Software Engineer & Integration Consultant',
  description: 'Software engineering experience across banking, ERP integrations, industrial systems and published mobile products.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <>
      <div className="shell"><section className="page-opening career-header"><div><h1 className="display">Hi, I&apos;m Viet.</h1><p className="lead">A software engineer in Helsinki, with <strong>{integrationLabel}</strong> delivered across my career. My work spans banking, ERP platforms and industrial software, as well as websites and mobile products.</p><div className="actions"><Link href="/about/cv" className="button">View one-page CV<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div><figure className="portrait"><Image src="/viet-2026.png" alt="Viet Tran" width={300} height={300} sizes="(max-width: 700px) 190px, 300px" priority /><figcaption>Based in Helsinki. Working directly with you.</figcaption></figure></section>
        <section aria-labelledby="work-history"><h2 id="work-history" className="section-title">The work behind the work.</h2><div className="career-list">{experienceData.map((experience) => <article className="career-role" key={experience.company}><div><h3>{experience.company}</h3><p className="period">{experience.period}</p></div><div><h4>{experience.title}</h4><ul>{experience.description.map((description) => <li key={description}>{description}</li>)}</ul></div></article>)}</div></section>
        <div className="background-grid"><section aria-labelledby="education"><h2 id="education">Education</h2>{educationData.map((education) => <article key={education.degree}><h3>{education.degree}</h3><p>{education.school} · {education.year}</p><p>{education.description}</p></article>)}</section><section aria-labelledby="technical-focus"><h2 id="technical-focus">Technical focus</h2>{cvSkills.map((skill) => <article key={skill.title}><h3>{skill.title}</h3><p>{skill.text}</p></article>)}</section></div>
      </div><ContactBlock />
    </>
  );
}
