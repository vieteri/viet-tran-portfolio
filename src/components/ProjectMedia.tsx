import Image from 'next/image';
import type { ProjectProps } from '@/app/interfaces';
import dartscopeMedia from '@/data/dartscopeMedia.json';

export const projectThumbnails: Record<string, string> = {
  'tm-beauty': '/work/tmbeauty.webp',
  kovafit: '/work/kovafit-1.webp',
  dartscope: dartscopeMedia.screenshots[0].src,
};

export default function ProjectMedia({ project }: { project: ProjectProps }) {
  if (project.slug === 'tm-beauty') {
    return <div className="project-media project-media--tm-beauty"><Image src="/work/tmbeauty.webp" alt="TM Beauty's live homepage, showing its services and booking links" width={1440} height={820} sizes="(max-width: 700px) 90vw, 60vw" /></div>;
  }
  if (project.slug === 'dartscope') {
    const previews = dartscopeMedia.screenshots.filter(({ id }) => id === 'discover' || id === 'score');
    return (
      <div className="project-media project-media--dartscope app-proof">
        {previews.map(({ id, src, alt, width, height }) => (
          <Image key={id} src={src} alt={alt} width={width} height={height} sizes="(max-width: 700px) 40vw, 205px" />
        ))}
      </div>
    );
  }
  if (project.slug === 'kovafit') {
    return (
      <div className="project-media project-media--kovafit app-proof">
        {['AI coaching', 'workout logging'].map((description, index) => <Image key={description} src={`/work/kovafit-${index + 1}.webp`} alt={`${project.title}: ${description}, from the published App Store listing`} width={720} height={1560} sizes="(max-width: 700px) 40vw, 205px" />)}
      </div>
    );
  }
  return project.imageSrc ? <div className="project-media project-media--archive"><Image src={project.imageSrc} alt={project.imageAlt || project.title} width={800} height={500} sizes="(max-width: 700px) 90vw, 800px" /></div> : null;
}
