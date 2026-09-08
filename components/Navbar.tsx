'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, MessageCircle, Search, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'الخدمات' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'تواصل معنا' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white shadow-[0_2px_14px_rgba(0,0,0,.05)]" id="navbar">
      <div className="mx-auto flex h-[82px] max-w-[1180px] items-center justify-between gap-5 px-4 sm:px-6 lg:h-[94px] lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" id="navbar-logo-link">
          <div className="relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full bg-white p-1 ring-1 ring-primary-100 lg:h-[72px] lg:w-[72px]">
            <Image src="/images/brand/logo.png" alt="شعار مكتب ابو محمد المطيري" fill sizes="72px" className="object-contain p-1" priority />
          </div>
          <div className="hidden min-w-0 sm:block">
            <div className="font-display truncate text-base font-extrabold text-primary-900 lg:text-lg">مكتب ابو محمد المطيري</div>
            <div className="mt-1 truncate text-[11px] font-bold text-primary-500">للخدمات والمعاملات الرسمية</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="التنقل الرئيسي">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 px-1 py-7 text-sm font-bold transition-colors ${active ? 'border-primary-500 text-primary-500' : 'border-transparent text-[#222] hover:border-primary-500 hover:text-primary-500'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Search className="h-5 w-5 text-[#222]" aria-hidden="true" />
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://wa.me/966547147102"
            target="_blank"
            rel="noopener noreferrer"
            className="ingaz-button inline-flex items-center gap-2 bg-primary-500 px-5 py-3.5 text-sm font-bold text-white hover:bg-primary-700"
          >
            <MessageCircle className="h-4 w-4" />
            أحصل على استشارة الآن
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-lg p-3 text-primary-900 hover:bg-primary-50 lg:hidden"
          aria-label="القائمة"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-primary-100 bg-white px-4 py-5 shadow-xl lg:hidden">
          <div className="mx-auto max-w-[1180px] space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block border-r-4 px-4 py-3.5 text-sm font-bold ${pathname === link.href ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-transparent text-[#222] hover:bg-primary-50'}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/966547147102"
              target="_blank"
              rel="noopener noreferrer"
              className="ingaz-button mt-4 flex items-center justify-center gap-2 bg-primary-500 px-5 py-4 font-bold text-white"
            >
              <MessageCircle className="h-5 w-5" />
              واتساب: +966 54 714 7102
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
