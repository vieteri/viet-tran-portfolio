import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '@/data/education';

const EducationItem = ({
  degree,
  school,
  year,
  description
}: {
  degree: string;
  school: string;
  year: string;
  description: string;
}) => (
  <div className="relative pl-8 pb-12 border-l border-gray-700 last:pb-0">
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-gray-900"></div>

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h3 className="text-xl font-bold text-white">{degree}</h3>
      <div className="flex items-center text-sm text-gray-400 mt-1 sm:mt-0">
        <Calendar className="w-4 h-4 mr-2" />
        {year}
      </div>
    </div>

    <div className="flex items-center text-purple-400 mb-4">
      <GraduationCap className="w-4 h-4 mr-2" />
      {school}
    </div>

    <p className="text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {educationData.map((edu, index) => (
        <EducationItem
          key={index}
          degree={edu.degree}
          school={edu.school}
          year={edu.year}
          description={edu.description}
        />
      ))}
    </div>
  );
};

export default Education;