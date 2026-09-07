import Link from 'next/link';
import Image from 'next/image';
import { MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto shrink-0 border-t border-primary-100 bg-white" id="footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.45fr_.75fr_.8fr]">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3 group" id="footer-logo-link">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-primary-100 bg-white" id="footer-logo-container">
                <Image
                  src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png"
                  alt="شعار مكتب ابو محمد المطيري"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="footer-logo-image"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-black leading-none text-primary-900 transition-colors group-hover:text-primary-500">
                  مكتب ابو محمد المطيري
                </span>
                <span className="mt-2 text-[11px] font-bold text-primary-500">للخدمات والمعاملات الرسمية</span>
              </div>
            </Link>
            <p className="max-w-md text-sm font-medium leading-7 text-gray-600">
              الوجهة الموثوقة لإنهاء كافة الخدمات والمعاملات الرسمية في المملكة العربية السعودية. نتميز بالسرعة، الدقة، والمصداقية العالية من خلال سياسة الدفع بعد الإنجاز التام.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-black text-primary-900">روابط سريعة</h2>
            <ul className="space-y-3 text-sm font-bold text-gray-600">
              <li><Link href="/" className="transition hover:text-primary-500">الرئيسية</Link></li>
              <li><Link href="/services" className="transition hover:text-primary-500">قائمة الخدمات</Link></li>
              <li><Link href="/about" className="transition hover:text-primary-500">نبذة عن المركز</Link></li>
              <li><Link href="/contact" className="transition hover:text-primary-500">التواصل والدعم</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-lg font-black text-primary-900">تواصل معنا</h2>
            <ul className="space-y-4 text-sm font-bold text-gray-600">
              <li>
                <a href="https://wa.me/966547147102" className="flex items-center gap-3 transition hover:text-primary-500" dir="ltr">
                  <MessageCircle className="h-5 w-5 text-accent-500" />
                  +966 54 714 7102
                </a>
              </li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary-500" />جميع مناطق المملكة</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary-500" />الدفع بعد الاستلام</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-100 pt-7 text-center text-xs font-medium text-gray-500 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} مكتب ابو محمد المطيري. جميع الحقوق محفوظة.</p>
          <a href="https://nasharhub.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-primary-500">
            تم التصميم والتطوير بواسطة <span className="font-black text-primary-600">NasharHub.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
