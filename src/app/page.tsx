import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Metrics from '@/components/Metrics';
import ProjectCard from '@/components/ProjectCard';
import ServiceList from '@/components/ServiceList';
import ContactBlock from '@/components/ContactBlock';
import { featuredProjects } from '@/data/projectsData';
import { profile } from '@/data/profile';
import dartscopeMedia from '@/data/dartscopeMedia.json';

export const metadata: Metadata = { alternates: { canonical: '/' } };
const dartscopePreview = dartscopeMedia.screenshots[0];

export default function Home() {
  return (
    <>
      <section className="shell hero" id="home">
        <div className="hero-copy">
          <h1 className="display">Software that fits<br /><em>how you work.</em></h1>
          <p className="lead">I&apos;m Viet Tran, a software engineer in Helsinki. I connect business systems and build websites and apps, from the first idea to the finished product.</p>
          <div className="actions"><a href={`mailto:${profile.email}`} className="button">Discuss a project<ArrowUpRight size={19} aria-hidden="true" /></a><a href="#projects" className="text-link">See selected work<ArrowRight size={17} aria-hidden="true" /></a></div>
          <Metrics />
        </div>
        <figure className="hero-visual" aria-label="A selection of my live work">
          <figcaption>A client website. Two published apps.</figcaption>
          <a href="https://tmbeauty.fi/" target="_blank" rel="noopener noreferrer" className="hero-web" aria-label="Visit TM Beauty"><Image src="/work/tmbeauty.webp" alt="TM Beauty website" width={1440} height={820} sizes="(max-width: 700px) 85vw, 40vw" priority /></a>
          <a href="https://apps.apple.com/us/app/kovafit/id6758958067" target="_blank" rel="noopener noreferrer" className="hero-fitness" aria-label="KovaFit on the App Store"><Image src="/work/kovafit-2.webp" alt="KovaFit workout logging screenshot" width={720} height={1560} sizes="(max-width: 700px) 30vw, 180px" priority /></a>
          <a href="https://apps.apple.com/us/app/dartscope/id6760133199" target="_blank" rel="noopener noreferrer" className="hero-darts" aria-label="DartScope on the App Store"><Image src={dartscopePreview.src} alt={dartscopePreview.alt} width={dartscopePreview.width} height={dartscopePreview.height} sizes="(max-width: 700px) 25vw, 155px" priority /></a>
        </figure>
      </section>
      <section id="projects" className="shell work-section">
        <div className="section-opening"><div><h2 className="section-title">A few things I&apos;ve built.</h2><p>A business website and two independent products, out in the world.</p></div><Link href="/projects" className="text-link">All projects<ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div className="work-gallery">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <section id="services" className="services-section"><div className="shell service-layout"><div className="service-intro"><h2 className="section-title">The right help.<br /><em>Not a bigger team.</em></h2><p>A focused integration, a new API or a product to bring to life. I can join your engineering team or take on a clearly scoped delivery.</p><Link href="/consulting" className="text-link">Explore consulting services<ArrowRight size={18} aria-hidden="true" /></Link></div><ServiceList /></div></section>
      <section id="about" className="shell about-section">
        <figure className="portrait"><Image src="/viet-2026.png" alt="Viet Tran" width={370} height={370} sizes="(max-width: 700px) 235px, 370px" /><figcaption>Viet Tran · Helsinki, Finland</figcaption></figure>
        <div className="about-copy"><h2 className="section-title">The person<br /><em>behind the code.</em></h2><p>My background is in banking integrations, ERP systems and industrial software. Alongside that work, I build products of my own. Both sides shape how I approach a project: understand the system, but keep the person using it in view.</p><p>You work directly with me, from the first technical questions to implementation and handover.</p><div className="actions"><Link href="/about" className="text-link">More about me<ArrowRight size={17} aria-hidden="true" /></Link><Link href="/about/cv" className="text-link">View one-page CV<ArrowUpRight size={17} aria-hidden="true" /></Link></div><p className="experience-note" id="experience">Experience at S-Pankki, Frends Enterprise iPaaS and Softsys.<br />Master&apos;s degree, Aalto University.</p></div>
      </section>
      <ContactBlock />
    </>
  );
}
