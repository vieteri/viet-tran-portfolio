export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies?: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        title: "Senior Integration Engineer",
        company: "S-Pankki",
        period: "Aug 2025 - Present",
        description: [
            "Promotion effective Nov 2026; Integration Developer since Aug 2025.",
            "Act as a product owner for banking integrations, translating business needs into technical solutions and writing specifications for developers to implement.",
            "Test completed implementations against business requirements and verify correctness before deploying to production.",
            "Design APIs and integration architecture for financial systems and banking infrastructure.",
            "Participate in occasional CIRT on-call duty."
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
