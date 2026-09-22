import { profile, integrationLabel } from '@/data/profile';
import { cvExperience, cvSkills, earlierExperience } from '@/data/cv';
import { educationData } from '@/data/education';
import { featuredProjects } from '@/data/projectsData';
import CVPrintButton from './CVPrintButton';
import './cv.css';

export default function CVComponent() {
  return (
    <div className="cv-page">
      <div className="cv-toolbar no-print">
        <p>One-page CV · A4, 100% scale.<br />Turn off browser headers and footers when saving.</p>
        <CVPrintButton />
      </div>
      <article id="printable-cv" aria-label="Viet Tran curriculum vitae">
        <header className="cv-header">
          <h1>{profile.name}</h1>
          <p className="cv-title">{profile.title}</p>
          <div className="cv-contact"><span>{profile.location}</span><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.website}>viet.fi</a></div>
          <div className="cv-contact cv-contact-secondary"><a href={profile.github}>github.com/vieteri</a><a href={profile.linkedin}>linkedin.com/in/viet-tran-a9a492a8</a></div>
        </header>
        <p>Software engineer and consultant with <strong>{integrationLabel}</strong> delivered across my career. Experience in banking, ERP integrations and industrial software, alongside live client websites and two published App Store apps.</p>
        <section aria-labelledby="cv-experience">
          <h2 id="cv-experience">Experience</h2>
          {cvExperience.map((experience) => (
            <article className="cv-role" key={experience.company}>
              <div className="cv-role-header"><h3>{experience.title}<span className="cv-role-company"> / {experience.company}</span></h3><span className="cv-period">{experience.period}</span></div>
              <ul>{experience.description.map((description) => <li key={description}>{description}</li>)}</ul>
            </article>
          ))}
          {earlierExperience && <p className="cv-earlier"><strong>Earlier:</strong> {earlierExperience.title} / {earlierExperience.company} / {earlierExperience.period}</p>}
        </section>
        <section className="cv-skills" aria-labelledby="cv-skills">
          <h2 id="cv-skills">Technical skills</h2>
          {cvSkills.map((skill) => <p key={skill.title}><strong>{skill.title}:</strong> {skill.text}</p>)}
        </section>
        <section aria-labelledby="cv-work">
          <h2 id="cv-work">Selected work</h2>
          {featuredProjects.map((project) => <p className="cv-project" key={project.slug}><strong>{project.title}</strong> — {project.cvSummary} {project.externalLink && <a className="cv-project-link" href={project.externalLink}>{project.category === 'App Store' ? 'App Store' : 'tmbeauty.fi'} ↗</a>}</p>)}
        </section>
        <section aria-labelledby="cv-education">
          <h2 id="cv-education">Education</h2>
          {educationData.map((education) => <div className="cv-education-row" key={education.degree}><p><strong>{education.school}</strong> / {education.degree}</p><span className="cv-period">{education.year}</span></div>)}
        </section>
        <p className="cv-end"><strong>Languages:</strong> Finnish (native), English (professional).</p>
      </article>
    </div>
  );
}
