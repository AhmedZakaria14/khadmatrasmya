import Link from 'next/link';
import { ShieldCheck, Phone, MapPin, Mail, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-300 py-12 border-t border-primary-900 shrink-0 mt-auto" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group" id="footer-logo-link">
              <div className="relative h-12 w-12 flex items-center justify-center overflow-hidden" id="footer-logo-container">
                <Image
                  src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png"
                  alt="شعار مكتب خدمات ومعاملات رسمية"
                  width={40}
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  id="footer-logo-image"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-black text-xl text-white tracking-wide leading-none group-hover:text-accent-400 transition-colors">
                  مكتب خدمات ومعاملات رسمية
                </span>
                <span className="text-[9px] text-gray-400 font-bold tracking-[0.05em] uppercase mt-1">للخدمات والمعاملات الرسمية</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
              الوجهة الموثوقة لإنهاء كافة الخدمات والمعاملات الرسمية في المملكة العربية السعودية. نتميز بالسرعة، الدقة، والمصداقية العالية من خلال سياسة الدفع بعد الإنجاز التام.
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center w-6 h-5 bg-white rounded-sm grayscale opacity-80 text-xs">
                🇸🇦
              </div>
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} مكتب خدمات ومعاملات رسمية. جميع الحقوق محفوظة.</p>
            </div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">روابط سريعة</h4>
             <ul className="space-y-3 text-sm">
               <li><Link href="/" className="hover:text-accent-500 transition-colors">الرئيسية</Link></li>
               <li><Link href="/services" className="hover:text-accent-500 transition-colors">قائمة الخدمات</Link></li>
               <li><Link href="/about" className="hover:text-accent-500 transition-colors">نبذة عن المركز</Link></li>
               <li><Link href="/contact" className="hover:text-accent-500 transition-colors">التواصل والدعم</Link></li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">تواصل معنا</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-center gap-2">
                 <span className="text-accent-500">واتساب:</span>
                 <a href="https://wa.me/966574135600" className="hover:text-white transition-colors" dir="ltr">+966 57 413 5600</a>
               </li>
               <li className="flex items-center gap-2">
                 <span className="text-accent-500">تغطية:</span>
                 <span>جميع مناطق المملكة</span>
               </li>
               <li className="flex items-center gap-2">
                 <span className="text-accent-500">ضمان:</span>
                 <span>الدفع بعد الاستلام</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-900/80 flex flex-col sm:flex-row items-center justify-center text-center">
          <a 
            href="https://nasharhub.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-wrap items-center justify-center gap-2 py-2 px-6 rounded-full bg-primary-900/30 hover:bg-primary-900/50 border border-primary-800/50 hover:border-accent-500/30 transition-all duration-300"
          >
            <span className="text-gray-400 group-hover:text-gray-300 text-sm font-medium transition-colors">
              تم التصميم والتطوير بواسطة
            </span>
            <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 group-hover:from-accent-300 group-hover:to-accent-500 group-hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.4)] transition-all duration-300 transform group-hover:scale-105">
              NasharHub.com
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse hidden sm:block"></div>
          </a>
        </div>
      </div>
    </footer>
  );
}
