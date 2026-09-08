import Image from 'next/image';
import Link from 'next/link';
import { MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#006D77] text-white" id="footer">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[65px] overflow-hidden" aria-hidden="true">
        <svg className="absolute left-1/2 top-0 h-[65px] w-[163%] -translate-x-1/2 fill-white" preserveAspectRatio="none" viewBox="0 0 283.5 27.8" xmlns="http://www.w3.org/2000/svg">
          <path d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z" />
          <path d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3C267.7,18.8,269.7,18,269.6,18z" />
          <path d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2S227.6,9.9,227.4,9.8z" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1140px] px-4 pb-8 pt-[133px] sm:px-6 lg:px-0">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-right">
            <Link href="/" className="mb-5 block" aria-label="الرئيسية">
              <div className="relative h-[125px] w-[125px] overflow-hidden rounded-full bg-white">
                <Image src="/images/brand/logo.png" alt="شعار مكتب ابو محمد المطيري" fill sizes="125px" className="object-contain" />
              </div>
            </Link>
            <p className="text-[15px] font-normal leading-7 text-white/95">
              مكتب متخصص في إنجاز ومتابعة المعاملات الرسمية داخل المملكة العربية السعودية باحترافية وسرية ومتابعة واضحة.
            </p>
          </div>

          <div>
            <h2 className="font-display mb-6 text-center text-[23px] font-semibold text-white lg:text-right">روابط مهمة</h2>
            <ul className="space-y-3 text-center text-[15px] font-normal lg:text-right">
              <li><Link href="/" className="hover:text-accent-300">الرئيسية</Link></li>
              <li><Link href="/services" className="hover:text-accent-300">جميع الخدمات</Link></li>
              <li><Link href="/about" className="hover:text-accent-300">من نحن</Link></li>
              <li><Link href="/contact" className="hover:text-accent-300">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display mb-6 text-center text-[23px] font-semibold text-white lg:text-right">أهم خدماتنا</h2>
            <ul className="space-y-3 text-center text-[14px] font-normal leading-7 lg:text-right">
              <li><Link href="/services/تصريح-زواج-سعودي-من-أجنبية-مقيمة" className="hover:text-accent-300">تصريح زواج سعودي من أجنبية مقيمة</Link></li>
              <li><Link href="/services/موافقة-زواج-سعودية-من-أجنبي" className="hover:text-accent-300">موافقة زواج سعودية من أجنبي</Link></li>
              <li><Link href="/services/تجنيس-زوجة-مواطن" className="hover:text-accent-300">تجنيس زوجة مواطن</Link></li>
              <li><Link href="/services/تجنيس-أبناء-المواطنات-ومواليد-السعودية" className="hover:text-accent-300">تجنيس أبناء المواطنات والمواليد</Link></li>
              <li><Link href="/services/التأشيرات-المهنية-للمؤسسات" className="hover:text-accent-300">التأشيرات المهنية للمؤسسات</Link></li>
              <li><Link href="/services/تحويل-الزيارة-إلى-إقامة" className="hover:text-accent-300">تحويل الزيارة إلى إقامة</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display mb-6 text-center text-[23px] font-semibold text-white lg:text-right">تواصل معنا</h2>
            <ul className="space-y-4 text-[15px] font-normal text-white/95">
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

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-7 text-center text-[14px] font-normal text-white/90 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} مكتب ابو محمد المطيري. جميع الحقوق محفوظة.</p>
          <a href="https://nasharhub.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-accent-300">
            تم التصميم والتطوير بواسطة <span className="font-bold">NasharHub.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
