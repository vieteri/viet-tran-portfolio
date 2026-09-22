import { profile } from '@/data/profile';
import { featuredProjects } from '@/data/projectsData';

export default function Metrics() {
  const metrics = [
    { value: `${profile.clientIntegrations}+`, label: 'Client integrations', detail: 'Delivered across my career' },
    { value: String(featuredProjects.filter((project) => project.category === 'App Store').length), label: 'App Store apps', detail: 'KovaFit and DartScope' },
    { value: String(profile.softwareSince), label: 'Building software since', detail: 'Enterprise systems and digital products' },
  ];
  return (
    <section aria-label="Experience in numbers" className="border-y border-gray-800 bg-gray-950/40">
      <dl className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <dt className="order-2 mt-2 font-medium text-gray-200">{metric.label}</dt>
            <dd className="order-1 text-4xl font-semibold tracking-tight text-teal-300">{metric.value}</dd>
            <dd className="order-3 mt-1 text-sm text-gray-400">{metric.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
