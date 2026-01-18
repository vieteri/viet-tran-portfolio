import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '@/data/experience';

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
      {experienceData.map((exp, index) => (
        <ExperienceItem
          key={index}
          title={exp.title}
          company={exp.company}
          period={exp.period}
          description={exp.description}
          technologies={exp.technologies}
        />
      ))}
    </div>
  );
};

export default Experience;