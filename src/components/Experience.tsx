import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  description, 
  technologies 
}: { 
  title: string; 
  company: string; 
  period: string; 
  description: string[]; 
  technologies?: string[] 
}) => (
  <div className="relative pl-8 pb-12 border-l border-gray-700 last:pb-0">
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-900"></div>
    
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className="flex items-center text-sm text-gray-400 mt-1 sm:mt-0">
        <Calendar className="w-4 h-4 mr-2" />
        {period}
      </div>
    </div>
    
    <div className="flex items-center text-blue-400 mb-4">
      <Briefcase className="w-4 h-4 mr-2" />
      {company}
    </div>
    
    <ul className="space-y-2 mb-4">
      {description.map((item, index) => (
        <li key={index} className="text-gray-300 text-sm leading-relaxed flex items-start">
          <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
          {item}
        </li>
      ))}
    </ul>

    {technologies && (
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ExperienceItem
        title="Integration Developer"
        company="S-Pankki"
        period="Aug 2025 - Present"
        description={[
          "Part of integration architecture team designing and implementing enterprise-level solutions.",
          "Creating and managing new APIs throughout the complete development lifecycle.",
          "Leading end-to-end integration projects from architecture through testing to production deployment.",
          "Architecting integration patterns for financial systems and banking infrastructure."
        ]}
        technologies={["Integration Engineering", "Integration Architecture", "API Design", "Banking Systems"]}
      />

      <ExperienceItem
        title="Integration Developer"
        company="Frends Enterprise iPaaS"
        period="Apr 2024 - Aug 2025"
        description={[
          "Developed enterprise integrations for Microsoft Dynamics 365 Finance & Operations.",
          "Built ERP integrations for Business Central in hybrid cloud environments.",
          "Implemented complex SAP integrations and API lifecycle management.",
          "Specialized in C# and .NET development for custom Frends tasks."
        ]}
        technologies={["Frends iPaaS", "C#", ".NET", "SQL", "D365", "Azure", "API Management"]}
      />

      <ExperienceItem
        title="Software Engineer"
        company="Softsys Oy"
        period="Jan 2021 - Apr 2024"
        description={[
          "Architected comprehensive Warehouse Management Systems (WMS).",
          "Developed industrial SCADA systems for automated warehouse control.",
          "Led ERP integration projects and system administration initiatives.",
          "Optimized MS SQL database performance and managed high-volume transactional systems."
        ]}
        technologies={["MS SQL", "SCADA", "C#", "Industrial Automation", "ERP Integration", "System Administration"]}
      />

      <ExperienceItem
        title="Junior Teaching Assistant"
        company="Aalto University"
        period="Oct 2018 - May 2019"
        description={[
          "Taught programming to primary and high school students.",
          "Instructed Scratch programming with robotics integration."
        ]}
        technologies={["Scratch", "Robotics", "Teaching"]}
      />
    </div>
  );
};

export default Experience;