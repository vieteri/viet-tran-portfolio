import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItemProps } from "@/app/interfaces";

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, imageSrc, imageAlt, githubLink }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={250} 
      height={250}  // Remove or keep as needed, adjust in CSS
      className="mb-4 project-image"
      priority={imageSrc === "/path/to/lcp/image.jpg"} // Set priority for LCP image
    />
    <p className="text-gray-300 mb-2">Github repository:</p>
    <Link href={githubLink} className="text-blue-400 hover:text-blue-300 transition-colors">
      {githubLink.split("/").pop()}
    </Link>
  </div>
);

export default function Projects() {
  const projects: ProjectItemProps[] = [
    {
      title: "Tower Defence Game",
      description: "A tower defence game I developed using Python and Pygame",
      imageSrc: "/tornipeli_ingame.png",
      imageAlt: "Tower Defence Game",
      githubLink: "https://github.com/vieteri/Tornipeli"
    },
    // Add more projects here
    {
      title: "Embedded systems",
      description: "An embedded systems school project",
      imageSrc: "/embeddedsystems_translationalengineering.jpg",
      imageAlt: "Tower Defence Game",
      githubLink: "https://github.com/vieteri/raspirockingboat"
    },
    {
      title: "Deno app",
      description: "A web app created as a school project",
      imageSrc: "/placeholder.png",
      imageAlt: "Deno app",
      githubLink: "https://github.com/vieteri/A-Gradewsdproject"
    },
    
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-12 text-white">My Projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
