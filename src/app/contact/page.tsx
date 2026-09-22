import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Discuss a Software Project | Viet Tran',
  description: 'Contact Viet Tran about integrations, APIs, web and mobile product development. Based in Helsinki, working remotely.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-teal-300">Contact / Helsinki, Finland</p>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">Let&apos;s talk about what you need to build.</h1>
      <p className="mt-7 max-w-3xl text-xl leading-relaxed text-gray-300">Tell me about the problem, your current systems and the outcome you need. A short message is enough to start.</p>
      <a href={`mailto:${profile.email}`} className="mt-9 inline-flex items-center gap-3 rounded-lg bg-teal-300 px-6 py-4 text-lg font-semibold text-gray-950 hover:bg-teal-200"><Mail size={20} aria-hidden="true" />{profile.email}<ArrowUpRight size={18} aria-hidden="true" /></a>
      <section className="mt-16 grid gap-8 border-t border-gray-700 pt-10 md:grid-cols-2">
        <div><h2 className="text-2xl font-semibold text-white">Useful details to include</h2><p className="mt-4 leading-relaxed text-gray-300">The problem you want to solve, the systems or technologies involved, and any target timeline. Scope and availability are agreed before work begins.</p></div>
        <div><h2 className="text-2xl font-semibold text-white">Learn more</h2><div className="mt-4 flex flex-col items-start gap-4"><Link href="/consulting" className="font-medium text-teal-300 hover:text-teal-200">Consulting services</Link><Link href="/about/cv" className="font-medium text-teal-300 hover:text-teal-200">One-page CV</Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-teal-300 hover:text-teal-200">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-medium text-teal-300 hover:text-teal-200">GitHub ↗</a></div></div>
      </section>
    </div>
  );
}
