import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Navigation from '@/components/Navigation';
import { profile } from '@/data/profile';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const title = 'Viet Tran | Software Consulting, Integrations & Product Development';
const description = 'Helsinki-based software consultant with 100+ client integrations. API and Frends development, business websites, and published mobile apps.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(profile.website),
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  publisher: profile.name,
  icons: { icon: '/favicon.ico' },
  openGraph: { type: 'website', locale: 'en_GB', title, description, siteName: 'Viet Tran - Software Consulting', images: [{ url: '/viet-2026.png', alt: 'Viet Tran' }] },
  twitter: { card: 'summary', title, description, images: ['/viet-2026.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    url: profile.website,
    sameAs: [profile.github, profile.linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Helsinki', addressCountry: 'FI' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Aalto University' },
    knowsAbout: ['API Development', 'Enterprise Integration', 'Frends iPaaS', 'C#', '.NET', 'React', 'Next.js', 'Flutter'],
  };
  return (
    <html lang="en">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /></head>
      <body className={`${inter.variable} ${robotoMono.variable} flex min-h-screen flex-col bg-gray-900 font-sans text-white`}>
        <a href="#main-content" className="sr-only z-[60] rounded bg-teal-300 p-3 text-gray-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-3">Skip to content</a>
        <Navigation />
        <main id="main-content" className="flex-grow pt-16">{children}</main>
        <footer className="border-t border-gray-800 bg-gray-950 px-6 py-8 text-sm text-gray-400 print:hidden"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5"><p>© {new Date().getFullYear()} Viet Tran</p><div className="flex flex-wrap gap-5"><Link href="/consulting" className="hover:text-white">Consulting</Link><Link href="/about/cv" className="hover:text-white">One-page CV</Link><a href={`mailto:${profile.email}`} className="hover:text-white">{profile.email}</a></div></div></footer>
      </body>
    </html>
  );
}
