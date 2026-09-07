'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
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
    <nav className="bg-white/95 backdrop-blur-xl border-b border-primary-100 sticky top-0 z-50 shrink-0 w-full" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] lg:h-[88px] flex justify-between items-center gap-5">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-3 group min-w-0" id="navbar-logo-link">
            <div className="relative h-11 w-11 sm:h-14 sm:w-14 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-primary-100" id="logo-image-container">
              <Image
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png"
                alt="شعار مكتب ابو محمد المطيري"
                width={56}
                height={56}
                className="object-contain p-1 transition-transform duration-300 group-hover:scale-105 mix-blend-multiply w-full h-full"
                referrerPolicy="no-referrer"
                id="navbar-logo-image"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-black text-sm sm:text-lg text-primary-900 leading-tight group-hover:text-primary-600 transition-colors truncate">
                مكتب ابو محمد المطيري
              </span>
              <p className="text-[9px] sm:text-[10px] text-primary-500 font-bold mt-1 truncate hidden sm:block">للخدمات والمعاملات الرسمية</p>
            </div>
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-7 text-sm font-bold text-primary-900">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-8 px-1 transition-colors duration-300 after:absolute after:right-0 after:left-0 after:bottom-5 after:h-0.5 after:rounded-full after:transition-transform ${
                pathname === link.href
                  ? 'text-primary-600 after:bg-accent-500 after:scale-x-100'
                  : 'hover:text-primary-600 after:bg-primary-300 after:scale-x-0 hover:after:scale-x-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
           <a
            href="https://wa.me/966547147102"
            className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all duration-200 active:scale-[0.98] select-none shadow-[0_10px_24px_rgba(20,156,165,.22)]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>أحصل على استشارة الآن</span>
          </a>
        </div>

        <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-primary-600 focus:outline-none p-3 -mr-3 rounded-xl hover:bg-primary-50"
              aria-label="القائمة"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-navigation" className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-primary-100 shadow-2xl">
          <div className="px-4 py-5 space-y-1 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-bold transition-colors ${
                  pathname === link.href
                    ? 'text-primary-700 bg-primary-50 border-r-4 border-accent-500'
                    : 'text-primary-900 hover:bg-primary-50 hover:text-primary-600 border-r-4 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/966547147102"
                className="flex items-center justify-center gap-2 w-full bg-primary-500 text-white px-5 py-3.5 rounded-xl font-bold hover:bg-primary-600 transition-all duration-200 active:scale-[0.98] select-none shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>واتساب: +966 54 714 7102</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
