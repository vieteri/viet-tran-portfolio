
import type { Metadata } from 'next';
import { Inter } from
 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Viet Tran - Integration Developer',
  description: 'Portfolio of Viet Tran, Integration Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
       <link rel="icon" href="/favicon.ico" /> 
       {/* ... other head tags ... */}
     </Head>
      <body className={`${inter.className} min-h-screen flex flex-col`}> {/* Add min-h-screen and flex flex-col */}
        <header>
          <Navigation />
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow"> {/* Add flex-grow to main */}
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © {new Date().getFullYear()} Viet Tran. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
