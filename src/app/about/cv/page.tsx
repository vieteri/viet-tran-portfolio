import type { Metadata } from 'next';
import CVComponent from './CVComponent';

export const metadata: Metadata = {
  title: 'Viet Tran - One-page CV',
  description: 'Software engineer and integration consultant. 100+ client integrations, banking and ERP experience, and two published App Store apps.',
  alternates: { canonical: '/about/cv' },
};

export default function CVPage() {
  return <CVComponent />;
}
