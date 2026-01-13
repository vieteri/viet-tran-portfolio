import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Viet Tran - Software engineer | Enterprise Systems & AI Solutions',
  description: 'Software engineer specializing in Enterprise Systems, API Architecture, and AI Solutions. Expert in Microsoft Dynamics 365, Business Central, SAP integrations, and modern web technologies.',
  keywords: ['Integration Developer', 'API Development', 'Enterprise Integration', 'Microsoft Dynamics 365', 'Business Central', 'SAP', 'AI Solutions', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Viet Tran', url: 'https://viettran.dev' }],
  creator: 'Viet Tran',
  publisher: 'Viet Tran',
  icons: {
    icon: '/viet-sword-favicon.svg',
  },
  metadataBase: new URL('https://viettran.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viettran.dev',
    title: 'Viet Tran - Software engineer | Enterprise Systems & AI Solutions',
    description: 'Software engineer specializing in Enterprise Systems, API Architecture, and AI Solutions. Expert in Microsoft Dynamics 365, Business Central, SAP integrations, and modern web technologies.',
    siteName: 'Viet Tran Portfolio',
    images: [
      {
        url: '/viet.png',
        width: 1200,
        height: 630,
        alt: 'Viet Tran - Software engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viet Tran - Software engineer',
    description: 'Software engineer specializing in Enterprise Systems, API Architecture, and AI Solutions.',
    images: ['/viet.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Viet Tran",
    "jobTitle": "Integration Developer",
    "email": "it@viet.fi",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Helsinki",
      "addressCountry": "FI"
    },
    "url": "https://viettran.dev",
    "knowsAbout": [
      "API Management",
      "ERP Integration",
      "D365 Integrations",
      "SQL",
      "SAP",
      "Python",
      "TypeScript",
      "JavaScript",
      "C#",
      "C++"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "S-Pankki",
      "startDate": "2025-08"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Aalto University",
      "areaServed": "Helsinki"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans min-h-screen flex flex-col bg-gray-900 text-white`}>
        <ScrollProgress />
        <Navigation />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p>© {new Date().getFullYear()} Viet Tran. All rights reserved.</p>
          </div>
        </footer>
        <BackToTop />
      </body>
    </html>
  );
}