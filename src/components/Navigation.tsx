'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';

const items = [
  { href: '/', label: 'Home' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/projects', label: 'Work' },
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
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
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

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const links = items.map((item) => (
    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
      aria-current={active(item.href) ? 'page' : undefined}
      className={`rounded px-2 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 ${active(item.href) ? 'text-teal-300' : 'text-gray-300 hover:text-white'}`}>
      {item.label}
    </Link>
  ));

  return (
    <nav ref={container} aria-label="Main navigation" className="fixed inset-x-0 top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" onClick={() => setOpen(false)} className="font-semibold tracking-tight text-white">Viet Tran<span className="text-teal-300">.</span></Link>
        <div className="hidden items-center gap-5 md:flex">{links}</div>
        <a href={`mailto:${profile.email}`} className="hidden items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-teal-300 md:inline-flex">Discuss a project<ArrowUpRight size={16} aria-hidden="true" /></a>
        <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 md:hidden">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-navigation" hidden={!open} className="border-t border-gray-800 bg-gray-950 px-6 py-4 md:hidden">
        <div className="flex flex-col gap-2">{links}<a href={`mailto:${profile.email}`} onClick={() => setOpen(false)} className="px-2 py-3 font-medium text-teal-300">Discuss a project</a></div>
      </div>
    </nav>
  );
}
