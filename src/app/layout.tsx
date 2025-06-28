import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '@/components/Navigation';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Viet Tran - Integration Developer',
  description: 'Portfolio of Viet Tran, Integration Developer',
  icons: {
    icon: '/viet-sword-favicon.svg',
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
      "name": "Frends Oy",
      "startDate": "2024-01"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Aalto University",
      "areaServed": "Helsinki"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col bg-gray-900 text-white`}>
        <header className="bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <Navigation />
          </div>
        </header>
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
        <footer className="bg-gray-800 text-gray-300 py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            © {new Date().getFullYear()} Viet Tran. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}