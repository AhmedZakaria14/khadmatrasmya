'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'الخدمات الخاصة' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'اتصل بنا' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm shrink-0 w-full" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-3 group min-w-0" id="navbar-logo-link">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center overflow-hidden" id="logo-image-container">
              <Image
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png"
                alt="شعار مكتب ابو محمد المطيري"
                width={40}
                height={40}
                className="object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply w-full h-full"
                referrerPolicy="no-referrer"
                id="navbar-logo-image"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-black text-sm sm:text-xl text-primary-900 leading-tight tracking-wide group-hover:text-accent-600 transition-colors truncate">
                مكتب ابو محمد المطيري
              </span>
              <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-[0.1em] uppercase mt-0.5 truncate hidden sm:block">للخدمات والمعاملات الرسمية</p>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-bold text-primary-900">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 px-1 transition-colors duration-300 border-b-2 ${
                pathname === link.href
                  ? 'border-accent-500 text-accent-600'
                  : 'border-transparent hover:text-accent-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
           <a
            href="https://wa.me/966547147102"
            className="bg-primary-950 hover:bg-primary-900 text-white px-6 py-2.5 rounded-sm text-sm font-bold flex items-center gap-2 transition-all duration-200 active:scale-[0.98] select-none border border-primary-900 shadow-sm"
            dir="ltr"
          >
            <span>واتساب: +966 54 714 7102</span>
          </a>
        </div>

        <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-accent-500 focus:outline-none p-3 -mr-3"
              aria-label="القائمة"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1 sm:px-6 shadow-inner">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-bold transition-colors ${
                  pathname === link.href
                    ? 'text-accent-600 bg-accent-50 border-r-4 border-accent-500'
                    : 'text-primary-900 hover:bg-gray-50 hover:text-accent-500 border-r-4 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/966547147102"
                className="flex items-center justify-center gap-2 w-full bg-primary-900 text-white px-5 py-3.5 rounded-sm font-bold hover:bg-primary-800 transition-all duration-200 active:scale-[0.98] select-none shadow-sm"
                dir="ltr"
              >
                <span>+966 54 714 7102</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
