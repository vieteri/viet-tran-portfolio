// The integration total is career-wide, confirmed by Viet on 22 September 2026.
// It is not a count of distinct customers or integrations at one employer.
export const profile = {
  name: 'Viet Tran',
  title: 'Software Engineer & Integration Consultant',
  location: 'Helsinki, Finland',
  email: 'it@viet.fi',
  website: 'https://viet.fi',
  github: 'https://github.com/vieteri',
  linkedin: 'https://www.linkedin.com/in/viet-tran-a9a492a8/',
  clientIntegrations: 100,
  softwareSince: 2021,
} as const;

export const integrationLabel = `${profile.clientIntegrations}+ client integrations`;
