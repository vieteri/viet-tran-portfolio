import { experienceData } from './experience';

// Deliberately curated rather than truncating arbitrary experience bullets.
// Role names, employers and dates still come from the shared career data.
const conciseDescriptions: Record<string, string[]> = {
  'S-Pankki': [
    'Design and implement APIs and integration solutions for banking systems.',
    'Deliver integrations from architecture and development through testing and production.',
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
