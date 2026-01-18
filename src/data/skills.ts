import { Code, Database, Server, Cpu, Layers, Terminal, LucideIcon } from 'lucide-react';

export interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
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
