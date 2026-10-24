import { experienceData } from './experience';

// Deliberately curated rather than truncating arbitrary experience bullets.
// Role names, employers and dates still come from the shared career data.
const conciseDescriptions: Record<string, string[]> = {
  'S-Pankki': [
    'Promotion effective Nov 2026; Integration Developer since Aug 2025.',
    'Act as a product owner: translate business needs into technical solutions and write specifications for developers to implement.',
    'Test implementations against business requirements and verify correctness before production deployment.',
  ],
  'Frends Enterprise iPaaS': [
    'Developed ERP integrations for Dynamics 365 Finance & Operations, Business Central and SAP.',
    'Built custom Frends tasks with C#/.NET and worked with SQL, Azure and API management.',
  ],
  'Softsys Oy': [
    'Developed warehouse management and SCADA software for industrial automation.',
    'Delivered ERP integrations and optimized Microsoft SQL Server databases.',
  ],
};

export const cvExperience = experienceData
  .filter((experience) => conciseDescriptions[experience.company])
  .map((experience) => ({ ...experience, description: conciseDescriptions[experience.company] }));
export const earlierExperience = experienceData.find((experience) => experience.company === 'Aalto University');
export const cvSkills = [
  { title: 'Integration & APIs', text: 'Frends iPaaS, REST, SOAP, ERP integration, API design' },
  { title: 'Backend & data', text: 'C#, .NET, Python, SQL Server, PostgreSQL, Azure' },
  { title: 'Web & mobile', text: 'TypeScript, React, Next.js, Flutter, AI API integration' },
];
