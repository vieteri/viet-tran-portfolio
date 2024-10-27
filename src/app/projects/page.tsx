import Link from "next/link";
import Image from "next/image";
import { ProjectProps } from "@/app/interfaces";
import { projects } from '@/data/projectsData';

const ProjectItem: React.FC<ProjectProps> = ({ title, slug, description, imageSrc, imageAlt, githubLink }) => (
  <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
    {imageSrc && (
      <Link href={`/projects/${slug}`} className="block">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={800}
          height={400}
          className="object-cover w-full h-48"
        />
      </Link>
    )}
    <div className="p-6">
      <h3 className="text-3xl font-semibold mb-2 text-white">
        <Link href={`/projects/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <Link href={`/projects/${slug}`} className="text-blue-400 hover:text-blue-300">
          Read more
        </Link>
        {githubLink && (
          <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-5xl font-bold mb-12 text-white text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
