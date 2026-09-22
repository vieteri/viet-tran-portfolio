import { permanentRedirect } from 'next/navigation';

export default function CVRedirect() {
  permanentRedirect('/about/cv');
}
