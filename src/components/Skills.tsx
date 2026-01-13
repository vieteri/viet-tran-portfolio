'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Layers, Terminal } from 'lucide-react';

const SkillCard = ({
  title,
  icon: Icon,
  skills,
  index
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-gradient-to-br from-gray-800/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/10"
  >
    <div className="flex items-center mb-5">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative p-3 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl border border-primary-500/20">
          <Icon className="w-6 h-6 text-primary-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white ml-4 group-hover:text-primary-400 transition-colors">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, skillIndex) => (
        <span
          key={skillIndex}
          className="px-3 py-1.5 bg-gray-900/70 text-gray-300 text-sm rounded-lg border border-gray-700/50 hover:border-primary-500/50 hover:text-white hover:bg-gray-800/70 transition-all duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Integration",
      icon: Layers,
      skills: ["Frends iPaaS", "API Development", "D365 F&O", "Business Central", "SAP", "SOAP/REST"]
    },
    {
      title: "Backend & Languages",
      icon: Server,
      skills: ["C#", ".NET", "Python", "Node.js", "TypeScript", "C++"]
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL Server", "PostgreSQL", "T-SQL", "MariaDB", "Data Modeling"]
    },
    {
      title: "Web & Frontend",
      icon: Code,
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "AI & Data",
      icon: Cpu,
      skills: ["Gemini API", "RAG", "Prompt Engineering", "ETL Processes"]
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      skills: ["Git", "Docker", "Azure", "Linux/Bash", "PowerShell"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => (
        <SkillCard
          key={index}
          title={category.title}
          icon={category.icon}
          skills={category.skills}
          index={index}
        />
      ))}
    </div>
  );
};

export default Skills;