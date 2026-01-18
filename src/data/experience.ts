export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies?: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        title: "Integration Developer",
        company: "S-Pankki",
        period: "Aug 2025 - Present",
        description: [
            "Part of integration architecture team designing and implementing enterprise-level solutions.",
            "Creating and managing new APIs throughout the complete development lifecycle.",
            "Leading end-to-end integration projects from architecture through testing to production deployment.",
            "Architecting integration patterns for financial systems and banking infrastructure."
        ],
        technologies: ["Integration Engineering", "Integration Architecture", "API Design", "Banking Systems"]
    },
    {
        title: "Integration Developer",
        company: "Frends Enterprise iPaaS",
        period: "Apr 2024 - Aug 2025",
        description: [
            "Developed enterprise integrations for Microsoft Dynamics 365 Finance & Operations.",
            "Built ERP integrations for Business Central in hybrid cloud environments.",
            "Implemented complex SAP integrations and API lifecycle management.",
            "Specialized in C# and .NET development for custom Frends tasks."
        ],
        technologies: ["Frends iPaaS", "C#", ".NET", "SQL", "D365", "Azure", "API Management"]
    },
    {
        title: "Software Engineer",
        company: "Softsys Oy",
        period: "Jan 2021 - Apr 2024",
        description: [
            "Architected comprehensive Warehouse Management Systems (WMS).",
            "Developed industrial SCADA systems for automated warehouse control.",
            "Led ERP integration projects and system administration initiatives.",
            "Optimized MS SQL database performance and managed high-volume transactional systems."
        ],
        technologies: ["MS SQL", "SCADA", "C#", "Industrial Automation", "ERP Integration", "System Administration"]
    },
    {
        title: "Junior Teaching Assistant",
        company: "Aalto University",
        period: "Oct 2018 - May 2019",
        description: [
            "Taught programming to primary and high school students.",
            "Instructed Scratch programming with robotics integration."
        ],
        technologies: ["Scratch", "Robotics", "Teaching"]
    }
];
