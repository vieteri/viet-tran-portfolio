import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import './studio.css';
import Navigation from '@/components/Navigation';
import { profile } from '@/data/profile';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const newsreader = Newsreader({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-display', display: 'swap' });
const title = 'Viet Tran | Software Consulting, Integrations & Product Development';
const description = 'Helsinki-based software consultant with 100+ client integrations. API and Frends development, business websites, and published mobile apps.';

export const metadata: Metadata = {
  title, description, metadataBase: new URL(profile.website),
  authors: [{ name: profile.name, url: profile.website }], creator: profile.name, publisher: profile.name,
  icons: { icon: '/favicon.ico' },
  openGraph: { type: 'website', locale: 'en_GB', title, description, siteName: 'Viet Tran - Software Consulting', images: [{ url: '/viet-2026.png', alt: 'Viet Tran' }] },
  twitter: { card: 'summary', title, description, images: ['/viet-2026.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.title,
    email: profile.email, url: profile.website, sameAs: [profile.github, profile.linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Helsinki', addressCountry: 'FI' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Aalto University' },
    knowsAbout: ['API Development', 'Enterprise Integration', 'Frends iPaaS', 'C#', '.NET', 'React', 'Next.js', 'Flutter'],
  };
  return (
    <html lang="en">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /></head>
      <body className={`${manrope.variable} ${newsreader.variable} site-body`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navigation />
        <main id="main-content" className="site-main">{children}</main>
        <footer className="site-footer"><div className="shell footer-inner"><p>© {new Date().getFullYear()} Viet Tran · Helsinki, Finland</p><div className="footer-links"><Link href="/about/cv">One-page CV</Link><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div></footer>
      </body>
    </html>
  );
}
