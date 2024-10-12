import { ReactNode } from "react";

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
    children?: React.ReactNode;
  }

  export interface ProjectItemProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    githubLink: string;
  }