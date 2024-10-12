import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Viet Tran - Integration Developer',
  description: 'Portfolio of Viet Tran, Integration Developer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-900 text-white`}>
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