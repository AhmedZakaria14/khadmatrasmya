import Link from 'next/link';
import Image from 'next/image';
import { FileBadge, ShieldCheck, CheckCircle2, Globe, MapPin, ArrowLeft, MessageCircle, Phone, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#0d1622] text-white min-h-[90vh] flex items-center justify-center overflow-hidden border-b-4 border-accent-500">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1920&auto=format&fit=crop" 
            alt="Kingdom Centre Riyadh"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b131e]/90 via-[#0f1a26]/70 to-[#0b131e]/95 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center mt-12 md:mt-20 mb-12">
          <ScrollReveal direction="up" duration={0.8} className="flex flex-col items-center">
              {/* Logo */}
              <div className="mb-8 w-32 h-32 md:w-44 md:h-44 relative">
                <Image 
                  src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png" 
                  alt="شعار مكتب خدمات ومعاملات رسمية"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl text-center">
                مكتب خدمات ومعاملات رسمية
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-3xl lg:text-4xl leading-snug mb-10 max-w-3xl font-bold text-gray-100 drop-shadow-lg">
                لاستخراج تصاريح الزواج وخدمات التجنيس بالسعودية
              </p>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/966574135600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#50b95b] hover:bg-[#40a04a] text-white font-bold text-lg md:text-2xl px-8 md:px-12 py-4 md:py-5 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 active:scale-[0.98] select-none text-center flex justify-center items-center gap-3 rounded-xl mb-16 border border-green-400/30"
              >
                لطلب عرض سعر و التنفيذ الفوري
                <MessageCircle className="h-7 w-7" />
              </a>

              {/* VIP Service Text */}
              <div className="text-2xl md:text-4xl font-extrabold text-white max-w-4xl leading-tight drop-shadow-xl tracking-wide border-t-2 border-white/10 pt-10 px-4">
                خدمة خاصة لمعاملات الـ VIP و الطلبات الهامة والعاجلة
              </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services Preview */}
      <section className="py-24 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <ScrollReveal direction="up" duration={0.6} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-5xl font-black text-primary-900 mb-4 tracking-tight">نخبة <span className="text-accent-600">الخدمات</span></h2>
                <p className="text-gray-600 text-lg font-medium">باقة من الخدمات الحكومية المتخصصة، تتم إدارتها عبر فريق من الخبراء.</p>
              </div>
              <Link href="/services" className="text-primary-900 font-bold hover:text-accent-600 hidden md:flex items-center gap-2 text-sm uppercase tracking-wide border-b border-primary-900 hover:border-accent-600 pb-1 transition-colors">
                عرض كافة الخدمات
                <ArrowLeft className="h-4 w-4" />
              </Link>
           </ScrollReveal>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'تصريحات وموافقات زواج', 
                  icon: <FileBadge className="h-8 w-8" />, 
                  list: ['تصريح زواج سعودي من مقيمة', 'موافقة زواج من خارج المملكة', 'موافقة زواج من أجنبية (مفتوح)', 'زواج سعودية من أجنبي مقيم'] 
                },
                { 
                  title: 'خدمات التجنيس الخاصة', 
                  icon: <Globe className="h-8 w-8" />, 
                  list: ['تجنيس الكفاءات الطبية والهندسية', 'تجنيس المستثمرين ورجال الأعمال', 'تجنيس زوجة مواطن / زوج مواطنة', 'تجنيس أبناء المواطنات والمواليد'] 
                },
                { 
                  title: 'التأشيرات وشؤون الإقامة', 
                  icon: <ShieldCheck className="h-8 w-8" />, 
                  list: ['شؤون التأشيرات المهنية', 'إصدار التأشيرات الفردية', 'تحويل تأشيرة الزيارة إلى إقامة', 'إدارة معاملات الجوازات'] 
                },
              ].map((service, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15} duration={0.7} className="h-full">
                  <div className="bg-white border text-primary-900 border-gray-200 p-8 flex flex-col h-full hover:border-primary-900 transition-colors shadow-sm">
                     <div className="mb-6 text-accent-500">
                       {service.icon}
                     </div>
                     <h3 className="font-black text-xl mb-6">{service.title}</h3>
                     <ul className="space-y-4 mb-10 flex-grow">
                       {service.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-gray-600 text-sm font-bold">
                            <CheckCircle2 className="w-5 h-5 mt-0 shrink-0 text-gray-300" />
                            <span className="leading-snug">{item}</span>
                          </li>
                       ))}
                     </ul>
                     <Link 
                       href="/services" 
                       className="w-full text-center py-4 text-sm font-bold transition-all flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-primary-900 hover:bg-primary-900 hover:text-white rounded-sm"
                     >
                       التفاصيل والطلب
                     </Link>
                  </div>
                </ScrollReveal>
              ))}
           </div>
           
           <div className="mt-12 text-center md:hidden">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 text-primary-900 font-bold border border-primary-900 px-8 py-4 w-full text-sm">
                عرض كافة الخدمات
              </Link>
           </div>
        </div>
      </section>

      {/* Corporate Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <ScrollReveal direction="right" duration={0.8}>
                <span className="inline-block border-b-2 border-accent-500 text-primary-900 text-sm font-bold pb-2 uppercase tracking-widest mb-6">
                  معايير العمل
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-primary-900 mb-6 leading-tight">الالتزام والمصداقية <br/>هما أساس عملنا.</h2>
                <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8">
                  نحن ندرك حساسية المعاملات الحكومية، ولذلك أسسنا منصتنا على قواعد صلبة من الامتثال والشفافية. فريقنا المتمرس يدير أصعب الطلبات باحترافية وسرية تامة.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary-50 rounded-sm flex items-center justify-center border border-primary-100">
                      <Award className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary-900 mb-1">دفع بعد الإنجاز التام</h4>
                      <p className="text-gray-500 text-sm font-medium">نضمن حقوق عملائنا بشكل كامل، حيث لا يتم استلام أي مستحقات إلا بعد إنهاء الإجراءات وتسليم الوثائق.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary-50 rounded-sm flex items-center justify-center border border-primary-100">
                      <Globe className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary-900 mb-1">تغطية لكافة مناطق المملكة</h4>
                      <p className="text-gray-500 text-sm font-medium">نوفر خدماتنا عن بعد بكفاءة عالية أينما كنت داخل المملكة، عبر فريقنا المكون من مندوبين ووُكلاء محترفين.</p>
                    </div>
                  </div>
                </div>
             </ScrollReveal>
             <ScrollReveal direction="left" duration={0.8} className="relative">
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1920&auto=format&fit=crop" alt="مكتب خدمات ومعاملات رسمية" fill className="object-cover grayscale opacity-80" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-primary-900 p-8 shadow-xl max-w-xs border-r-4 border-accent-500">
                  <div className="text-accent-400 mb-4"><ShieldCheck className="w-10 h-10" /></div>
                  <h4 className="text-white font-bold text-xl mb-2">موثوقية تامة</h4>
                  <p className="text-gray-400 text-sm font-medium">نلتزم بالأنظمة والقوانين المعمول بها في دوائر المملكة الرسمية بلا استثناء.</p>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-950 py-24 text-center px-4 border-t border-primary-900 overflow-hidden">
        <ScrollReveal direction="up" duration={0.7} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">ابدأ في إنجاز معاملتك اليوم.</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            تواصل معنا مباشرة عبر القنوات الرسمية وسيتم الرد على طلبك فوراً من قِبل ممثلي المركز.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a
                href="https://wa.me/966574135600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-400 text-primary-950 font-bold text-base px-8 py-5 rounded-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] select-none"
             >
                التواصل المباشر (واتساب)
             </a>
             <a
                href="tel:+966574135600"
                className="bg-transparent text-white border border-gray-600 hover:border-white font-bold text-base px-8 py-5 rounded-sm transition-all duration-200 active:scale-[0.98] select-none"
                dir="ltr"
             >
                +966 57 413 5600
             </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
