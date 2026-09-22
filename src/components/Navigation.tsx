'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';

const items = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/about', label: 'About' },
  { href: '/about/cv', label: 'CV' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    const pointerdown = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', pointerdown);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('pointerdown', pointerdown);
    };
  }, [open]);

  const active = (href: string) => href === '/projects' ? pathname.startsWith(href) : pathname === href;
  const links = items.map((item) => (
    <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active(item.href) ? 'page' : undefined} className="nav-link">{item.label}</Link>
  ));

  return (
    <header className="site-header" ref={container}>
      <nav aria-label="Main navigation" className="shell">
        <div className="site-navigation">
          <div className="brand"><Link href="/" className="wordmark" aria-label="Viet Tran home" onClick={() => setOpen(false)}>viet<span>.</span></Link><span className="brand-note">Viet Tran<br />Software engineer, Helsinki</span></div>
          <div className="desktop-navigation">{links}</div>
          <a href={`mailto:${profile.email}`} className="text-link nav-contact">Let&apos;s talk<ArrowUpRight size={16} aria-hidden="true" /></a>
          <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="nav-toggle">{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
        <div id="mobile-navigation" hidden={!open} className="mobile-navigation"><div>{links}<a href={`mailto:${profile.email}`} className="text-link" onClick={() => setOpen(false)}>Discuss a project<ArrowUpRight size={17} aria-hidden="true" /></a></div></div>
      </nav>
    </header>
  );
}
