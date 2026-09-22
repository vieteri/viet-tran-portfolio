import type { ReactNode } from 'react';

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export interface ListItemProps {
  title: string;
  description: string;
}

export interface ContactLinkProps {
  href: string;
  text?: string;
  children?: ReactNode;
}

export interface ProjectProps {
  title: string;
  slug: string;
  description: string;
  imageSrc?: string | null;
  imageAlt?: string;
  readme?: string;
  githubLink?: string;
  externalLink?: string;
  externalLabel?: string;
  featured?: boolean;
  category?: string;
  cvSummary?: string;
}
