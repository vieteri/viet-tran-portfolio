import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Discuss a Software Project | Viet Tran',
  description: 'Contact Viet Tran about integrations, APIs, web and mobile product development. Based in Helsinki, working remotely.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <section className="shell contact-page"><div><h1 className="display">It starts with<br /><em>a conversation.</em></h1><p className="lead">A new project, a difficult integration or an idea you are still figuring out. Tell me what you have in mind.</p><a href={`mailto:${profile.email}`} className="contact-address">{profile.email}<ArrowUpRight size={30} aria-hidden="true" /></a></div><div className="contact-details"><h2>A little context helps.</h2><p>What are you trying to achieve? Which systems or technologies are involved? Is there a timeline to work towards?</p><p>No detailed brief needed to start. We can agree the scope, schedule and availability together.</p><p className="muted">Based in Helsinki, Finland.<br />Remote collaboration and selective consulting projects.</p><div className="actions"><Link href="/consulting" className="text-link">Consulting services<ArrowRight size={17} aria-hidden="true" /></Link><Link href="/about/cv" className="text-link">One-page CV<ArrowUpRight size={17} aria-hidden="true" /></Link><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn<ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
  );
}
