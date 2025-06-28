import Link from "next/link";
import Image from "next/image";
import { ProjectProps } from "@/app/interfaces";
import { projects } from '@/data/projectsData';

const ProjectItem: React.FC<ProjectProps> = ({ title, slug, description, imageSrc, imageAlt, githubLink }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
    {imageSrc && (
      <Link href={`/projects/${slug}`} className="block relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={800}
          height={400}
          className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3 text-white">
        <Link href={`/projects/${slug}`} className="hover:text-blue-400 transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-gray-300 mb-6 line-clamp-3">{description}</p>
      <div className="flex items-center justify-between">
        <Link 
          href={`/projects/${slug}`} 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        {githubLink && (
          <Link 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 text-gray-400 hover:text-white border border-gray-600 rounded-lg hover:border-gray-500 transition-all duration-200"
            title="View on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in modern web development, AI integration, 
              and enterprise solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
