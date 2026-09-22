import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ContactBlock() {
  return (
    <section className="contact-block">
      <div className="shell"><h2 className="section-title">Have something<br /><em>in mind?</em></h2><div><p>Tell me what you are building, what needs to work better, or where you could use another pair of hands.</p><a href={`mailto:${profile.email}`} className="text-link">{profile.email}<ArrowUpRight size={23} aria-hidden="true" /></a></div></div>
    </section>
  );
}
