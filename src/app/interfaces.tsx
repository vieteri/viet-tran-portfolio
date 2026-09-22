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
}
