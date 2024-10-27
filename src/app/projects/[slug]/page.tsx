'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { projects } from '@/data/projectsData';
import { ProjectProps } from '@/app/interfaces';
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProjectPage = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState<ProjectProps | null>(null);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!slug) {
          throw new Error('Project slug not found');
        }

        const projectInfo = projects.find((proj) => proj.slug === slug);

        if (!projectInfo) {
          throw new Error('Project not found');
        }

        setProjectData(projectInfo);
        
        try {
          const response = await fetch(projectInfo.readme);
          const content = await response.text();
          setReadmeContent(content);
        } catch (readmeError) {
          console.error('Error loading README:', readmeError);
          setError('Failed to load project documentation');
        }

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadProjectData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-gray-300">Loading project details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-500">
          {error}
        </div>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-500/10 border border-yellow-500 rounded-lg p-4 text-yellow-500">
          Project not found
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        {projectData.githubLink && (
          <Link 
            href={projectData.githubLink} 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        )}
      </div>

      {readmeContent && (
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Removed unused 'node' parameter
              h1: ({ ...props }) => <h1 className="text-4xl font-bold my-4 text-white" {...props} />,
              h2: ({ ...props }) => <h2 className="text-3xl font-semibold my-3 text-white" {...props} />,
              h3: ({ ...props }) => <h3 className="text-2xl font-semibold my-2 text-white" {...props} />,
              p: ({ children, ...props }) => {
                const hasOnlyImage = React.Children.toArray(children).every(
                  child => React.isValidElement(child) && child.type === 'img'
                );
                
                if (hasOnlyImage) {
                  return <>{children}</>;
                }
                
                return <p className="text-lg my-2 text-gray-300" {...props}>{children}</p>;
              },
              img: ({ src, alt }) => {
                if (!src) return null;
                
                const imageUrl = src.startsWith('http') 
                  ? src 
                  : src.replace(/^\/public/, '');
                
                return (
                  <span className="block my-4">
                    <Image
                      src={imageUrl}
                      alt={alt || ''}
                      width={800}
                      height={600}
                      className="rounded-lg"
                      priority
                    />
                  </span>
                );
              },
              // Removed unused 'node' and 'className' parameters
              code: ({ children, ...props }) => (
                <code className="bg-gray-800 rounded px-1 py-0.5" {...props}>{children}</code>
              ),
              // Removed unused 'node' parameter
              pre: ({ children, ...props }) => (
                <pre className="bg-gray-800 rounded p-4 my-4 overflow-x-auto" {...props}>
                  {children}
                </pre>
              ),
            }}
          >
            {readmeContent}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;