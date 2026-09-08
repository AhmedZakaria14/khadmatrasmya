'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, MessageCircle, Search, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FormEvent, useMemo, useRef, useState } from 'react';

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'الخدمات' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'تواصل معنا' },
];

const searchIndex = [
  { title: 'استخراج تصريح زواج سعودي من أجنبية مقيمة', href: '/services/تصريح-زواج-سعودي-من-أجنبية-مقيمة', group: 'تصاريح الزواج' },
  { title: 'استخراج موافقة زواج من أجنبي غير مقيم', href: '/services/موافقة-زواج-من-أجنبي-غير-مقيم', group: 'تصاريح الزواج' },
  { title: 'استخراج موافقة زواج مفتوح', href: '/services/موافقة-زواج-مفتوح', group: 'تصاريح الزواج' },
  { title: 'استخراج موافقة زواج سعودية من أجنبي', href: '/services/موافقة-زواج-سعودية-من-أجنبي', group: 'تصاريح الزواج' },
  { title: 'تجنيس الكفاءات والأطباء', href: '/services/تجنيس-الكفاءات-والأطباء', group: 'خدمات التجنيس' },
  { title: 'تجنيس المستثمرين ورجال الأعمال', href: '/services/تجنيس-المستثمرين-ورجال-الأعمال', group: 'خدمات التجنيس' },
  { title: 'تجنيس زوجة مواطن', href: '/services/تجنيس-زوجة-مواطن', group: 'خدمات التجنيس' },
  { title: 'تجنيس أبناء المواطنات ومواليد المملكة', href: '/services/تجنيس-أبناء-المواطنات-ومواليد-السعودية', group: 'خدمات التجنيس' },
  { title: 'استخراج التأشيرات المهنية للمؤسسات', href: '/services/التأشيرات-المهنية-للمؤسسات', group: 'التأشيرات والإقامة' },
  { title: 'استخراج تأشيرات فردية عمالية', href: '/services/تأشيرات-فردية-عمالية', group: 'التأشيرات والإقامة' },
  { title: 'تحويل تأشيرة الزيارة إلى إقامة نظامية', href: '/services/تحويل-الزيارة-إلى-إقامة', group: 'التأشيرات والإقامة' },
  { title: 'استخراج موافقة لزوج مقيم', href: '/services/موافقة-لزوج-مقيم', group: 'التأشيرات والإقامة' },
  { title: 'مكتب استخراج تصريح زواج', href: '/services/تصريح-زواج-سعودي-من-أجنبية-مقيمة', group: 'كلمات شائعة' },
  { title: 'معقب موافقات زواج', href: '/services/موافقة-زواج-مفتوح', group: 'كلمات شائعة' },
  { title: 'طلبات التجنيس في السعودية', href: '/services/تجنيس-زوجة-مواطن', group: 'كلمات شائعة' },
  { title: 'من نحن وخبرة المكتب', href: '/about', group: 'الموقع' },
  { title: 'التواصل مع مكتب ابو محمد المطيري', href: '/contact', group: 'الموقع' },
];

function normalizeArabic(value: string) {
  return value
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[ًٌٍَُِّْـ]/g, '')
    .trim();
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const normalized = normalizeArabic(query);
    if (!normalized) return searchIndex.slice(0, 6);
    return searchIndex.filter((item) => normalizeArabic(`${item.title} ${item.group}`).includes(normalized)).slice(0, 8);
  }, [query]);

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 0);
  };

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (!query.trim()) {
      openSearch();
      return;
    }
    setSearchOpen(true);
  };

  return (
    <header className="relative z-50 w-full border-b border-[#e7e7e7] bg-white" id="navbar">
      <div className="mx-auto flex h-[70px] max-w-[1140px] items-center justify-between gap-4 px-4 md:h-[80px] lg:px-0">
        <Link href="/" className="relative h-[50px] w-[50px] shrink-0 md:h-[88px] md:w-[90px]" id="navbar-logo-link" aria-label="الرئيسية">
          <Image src="/images/brand/logo.png" alt="شعار مكتب ابو محمد المطيري" fill sizes="(max-width: 767px) 50px, 90px" className="object-contain" priority />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {links.map((link) => {
            const active = pathname === link.href || (link.href === '/services' && pathname.startsWith('/services/'));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex h-[80px] items-center px-4 text-[15px] font-semibold transition-colors ${active ? 'text-accent-600' : 'text-[#222] hover:text-primary-500'}`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative mr-1">
            <button
              type="button"
              onClick={() => (searchOpen ? setSearchOpen(false) : openSearch())}
              className="flex h-11 w-11 items-center justify-center text-[#222] transition hover:text-primary-500"
              aria-label="البحث"
              aria-expanded={searchOpen}
            >
              {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>

            {searchOpen && (
              <div className="absolute left-0 top-[52px] w-[360px] overflow-hidden rounded-md border border-[#e5e5e5] bg-white shadow-[0_12px_35px_rgba(0,0,0,.16)]">
                <form onSubmit={submitSearch} className="flex border-b border-[#ededed]">
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="بحث..."
                    className="min-w-0 flex-1 border-0 px-4 py-3 text-sm text-[#222] outline-none"
                    aria-label="ابحث في خدمات الموقع"
                  />
                  <button type="submit" className="flex w-12 items-center justify-center bg-primary-500 text-white" aria-label="تنفيذ البحث">
                    <Search className="h-4 w-4" />
                  </button>
                </form>

                <div className="max-h-[330px] overflow-y-auto py-2">
                  {results.length > 0 ? (
                    results.map((item) => (
                      <Link
                        key={`${item.group}-${item.title}`}
                        href={item.href}
                        onClick={() => {
                          setSearchOpen(false);
                          setQuery('');
                        }}
                        className="block border-b border-[#f2f2f2] px-4 py-3 last:border-0 hover:bg-primary-50"
                      >
                        <span className="block text-[11px] font-bold text-primary-500">{item.group}</span>
                        <span className="mt-1 block text-sm font-semibold leading-6 text-[#222]">{item.title}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-6 text-center text-sm text-gray-500">لا توجد نتائج مطابقة. جرّب كلمة أخرى.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://wa.me/966547147102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[13px] bg-primary-500 px-[30px] py-[15px] text-[13px] font-semibold leading-none text-white transition hover:bg-primary-700"
          >
            <MessageCircle className="h-4 w-4" />
            أحصل على استشارة الآن
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-[5px] bg-primary-500 p-2.5 text-white lg:hidden"
          aria-label="القائمة"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-[#e7e7e7] bg-[#f9f9f9] px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto max-w-[767px]">
            <form onSubmit={submitSearch} className="mb-4 flex overflow-hidden rounded-[5px] border border-[#ddd] bg-white">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="بحث..."
                className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                aria-label="ابحث في الموقع"
              />
              <button type="submit" onClick={() => setSearchOpen(true)} className="flex w-12 items-center justify-center bg-primary-500 text-white" aria-label="بحث">
                <Search className="h-5 w-5" />
              </button>
            </form>

            {query.trim() && (
              <div className="mb-4 overflow-hidden rounded-[5px] border border-[#e5e5e5] bg-white">
                {results.length > 0 ? results.slice(0, 5).map((item) => (
                  <Link
                    key={`${item.group}-${item.title}`}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery('');
                    }}
                    className="block border-b border-[#eee] px-4 py-3 last:border-0"
                  >
                    <span className="block text-[10px] font-bold text-primary-500">{item.group}</span>
                    <span className="mt-1 block text-sm font-semibold text-[#222]">{item.title}</span>
                  </Link>
                )) : <p className="p-4 text-center text-sm text-gray-500">لا توجد نتائج مطابقة.</p>}
              </div>
            )}

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block border-b border-[#e5e5e5] px-4 py-3.5 text-sm font-semibold ${pathname === link.href || (link.href === '/services' && pathname.startsWith('/services/')) ? 'text-accent-600' : 'text-[#222]'}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/966547147102"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-[13px] bg-primary-500 px-5 py-4 font-bold text-white"
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
