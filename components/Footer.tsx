import Image from 'next/image';
import Link from 'next/link';
import { MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-primary-700 text-white" id="footer">
      <div className="absolute inset-x-0 top-0 h-12 bg-white [clip-path:polygon(0_0,100%_0,100%_25%,78%_60%,55%_25%,32%_70%,0_30%)]" aria-hidden="true" />
      <div className="mx-auto max-w-[1180px] px-4 pb-8 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-right">
            <Link href="/" className="mb-5 block" aria-label="الرئيسية">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary-500 bg-white p-4 shadow-lg">
                <Image src="/images/brand/logo.png" alt="شعار مكتب ابو محمد المطيري" fill sizes="128px" className="object-contain p-4" />
              </div>
            </Link>
            <p className="text-sm font-normal leading-7 text-white/90">
              مكتب متخصص في إنجاز ومتابعة المعاملات الرسمية داخل المملكة العربية السعودية باحترافية وسرية ومتابعة واضحة.
            </p>
          </div>

          <div>
            <h2 className="font-display mb-6 text-center text-2xl font-semibold text-white lg:text-right">روابط مهمة</h2>
            <ul className="space-y-3 text-center text-sm font-normal lg:text-right">
              <li><Link href="/" className="hover:text-accent-300">الرئيسية</Link></li>
              <li><Link href="/services" className="hover:text-accent-300">الخدمات</Link></li>
              <li><Link href="/about" className="hover:text-accent-300">من نحن</Link></li>
              <li><Link href="/contact" className="hover:text-accent-300">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display mb-6 text-center text-2xl font-semibold text-white lg:text-right">خدماتنا</h2>
            <ul className="space-y-3 text-center text-sm font-normal leading-7 lg:text-right">
              <li><Link href="/services" className="hover:text-accent-300">استخراج تصاريح الزواج</Link></li>
              <li><Link href="/services" className="hover:text-accent-300">خدمات التجنيس في السعودية</Link></li>
              <li><Link href="/services" className="hover:text-accent-300">التأشيرات وشؤون الإقامة</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display mb-6 text-center text-2xl font-semibold text-white lg:text-right">تواصل معنا</h2>
            <ul className="space-y-4 text-sm font-normal text-white/95">
              <li>
                <a href="https://wa.me/966547147102" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:text-accent-300 lg:justify-start" dir="ltr">
                  <MessageCircle className="h-5 w-5" />
                  +966 54 714 7102
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start"><MapPin className="h-5 w-5" />المملكة العربية السعودية</li>
              <li className="flex items-center justify-center gap-3 lg:justify-start"><Phone className="h-5 w-5" />الدفع بعد الإنجاز</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-7 text-center text-sm font-normal text-white/90 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} مكتب ابو محمد المطيري. جميع الحقوق محفوظة.</p>
          <a href="https://nasharhub.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-accent-300">
            تم التصميم والتطوير بواسطة <span className="font-bold">NasharHub.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
