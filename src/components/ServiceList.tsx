import { consultingServices } from '@/data/consulting';

export default function ServiceList({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="service-list">
      {consultingServices.map((service) => <article className="service-item" key={service.title}><h3>{service.title}</h3><p>{service.description}</p>{detailed && <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</article>)}
    </div>
  );
}
