import Link from 'next/link';
import './support.css';

export default function LastBastionLayout({ children }: { children: React.ReactNode }) {
  return <div className="shell bastion-doc">
    <nav aria-label="Last Bastion"><Link href="/last-bastion/support">Game support</Link><Link href="/last-bastion/privacy">Privacy policy</Link></nav>
    {children}
  </div>;
}
