'use client';

import { CheckCircle2, ShieldCheck, FileBadge, Globe, ArrowLeft, ChevronLeft, Search, User, Briefcase, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function ServicesClient() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('marriage');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const services = [
    {
      id: 'marriage',
      title: 'تصريحات وموافقات الزواج',
      icon: <FileBadge className="h-10 w-10 text-primary-900 relative z-10" />,
      description: 'نقدم خدماتنا في استخراج كافة التصريحات الرسمية وموافقات الزواج لجميع الحالات بأعلى معايير الدقة.',
      items: [
        { label: 'استخراج تصريح زواج سعودي من أجنبية (مقيمة)', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540198/%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC_%D9%85%D9%86_%D9%85%D9%82%D9%8A%D9%85%D8%A9_ivibn2.jpg' },
        { label: 'استخراج موافقة زواج من أجنبي غير مقيم', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540198/%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC_%D8%A7%D8%AC%D9%86%D8%A8%D9%89_%D8%BA%D9%8A%D8%B1_%D9%85%D9%82%D9%8A%D9%85_ev9msz.jpg' },
        { label: 'استخراج موافقة زواج (مفتوح)', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540196/%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC_%D9%85%D9%81%D8%AA%D9%88%D8%AD_v2shon.jpg' },
        { label: 'استخراج موافقة زواج سعودية من أجنبي', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540197/%D8%B3%D8%B9%D9%88%D8%AF%D9%89_%D9%85%D9%86_%D8%A7%D8%AC%D9%86%D8%A8%D9%8A%D8%A9%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC_ppcg0z.jpg' }
      ]
    },
    {
      id: 'citizenship',
      title: 'خدمات التجنيس النوعية',
      icon: <Globe className="h-10 w-10 text-primary-900 relative z-10" />,
      description: 'نتابع معاملات التجنيس وننهي الإجراءات النظامية للحالات المستوفية للشروط وفقاً للأنظمة المعتمدة.',
      items: [
        { label: 'تجنيس الكفاءات (أطباء)', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540194/%D8%AA%D8%AC%D9%86%D9%8A%D8%B3_%D8%AF%D9%83%D8%AA%D9%88%D8%B1_c1mcpf.jpg' },
        { label: 'تجنيس المستثمرين ورجال الأعمال', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540196/%D8%AA%D8%AC%D9%86%D9%8A%D8%B3_%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1_apdxd3.jpg' },
        { label: 'تجنيس زوجة مواطن', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540183/%D8%AA%D8%AC%D9%86%D9%8A%D8%B3_%D8%B2%D9%88%D8%AC%D8%A9_%D9%85%D9%88%D8%A7%D8%B7%D9%86_lgkuve.jpg' },
        { label: 'تجنيس أبناء المواطنات ومواليد المملكة', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540196/%D8%AA%D8%AC%D9%86%D9%8A%D8%B3_%D9%85%D9%88%D8%A7%D9%84%D9%8A%D8%AF_ckuram.jpg' }
      ]
    },
    {
      id: 'visas',
      title: 'خدمات التأشيرات والمقيمين',
      icon: <ShieldCheck className="h-10 w-10 text-primary-900 relative z-10" />,
      description: 'ننجز كافة معاملات الجوازات والتأشيرات للشركات والمؤسسات والأفراد بكفاءة عالية.',
      items: [
        { label: 'استخراج التأشيرات المهنية للمؤسسات', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540172/%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%A7%D8%AC_%D9%85%D9%87%D9%86%D9%8A%D8%A9_igayz2.jpg' },
        { label: 'استخراج تأشيرات فردية عمالية', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540179/%D8%AA%D8%A7%D8%B4%D9%8A%D8%B1%D8%A7%D8%AA_%D9%81%D8%B1%D8%AF%D9%8A%D8%A9_i6bggs.jpg' },
        { label: 'تحويل تأشيرة الزيارة إلى إقامة نظامية', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540180/%D8%AA%D8%AD%D9%88%D9%8A%D9%84_%D8%A7%D9%84%D8%B2%D9%8A%D8%A7%D8%B1%D8%A9_bkzeri.jpg' },
        { label: 'استخراج موافقة لزوج مقيم', image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781540195/%D8%AA%D8%AC%D9%86%D9%8A%D8%B3_%D8%B2%D9%88%D8%AC_rjnr7i.jpg' }
      ]
    }
  ];

  const filteredServices = services.filter(
    (service) =>
      service.title.includes(search) ||
      service.items.some((item) => item.label.includes(search))
  );

  return (
    <>
        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-primary-900 mb-6 tracking-tight">
            الخدمات التي <span className="text-accent-500">نقدمها</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            مكتب خدمات ومعاملات رسمية يضع بين يديك خبرة طويلة في إنجاز كافة المعاملات الحكومية والرسمية، مع التزامنا الراسخ بمبدأ الدفع بعد الإنجاز لجميع عملائنا.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-16 max-w-xl mx-auto relative">
            <input
                type="text"
                placeholder="ابحث عن خدمة أو إجراء..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-6 py-4 rounded-sm border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none text-right font-medium pr-14"
            />
            <Search className="absolute left-4 top-4 text-gray-400 h-6 w-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12 lg:space-y-16">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-gray-50 border border-gray-200"
              >
                <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start z-10">
                  <div className="flex-shrink-0">
                    <div className="bg-white w-24 h-24 flex items-center justify-center border border-gray-200 shadow-sm">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow w-full">
                    <h2 className="text-3xl font-extrabold text-primary-900 mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed max-w-3xl">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex flex-col gap-4 border border-gray-100 rounded-sm overflow-hidden bg-white hover:border-primary-900 transition-colors">
                          <div className="relative aspect-video bg-gray-100">
                            <Image src={item.image} alt={item.label} fill className="object-cover" />
                          </div>
                          <div className="p-4 flex items-start gap-4">
                            <div className="shrink-0 mt-1">
                              <CheckCircle2 className="h-5 w-5 text-accent-500" />
                            </div>
                            <span className="text-gray-700 font-bold leading-snug">{item.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-200">
                      <a 
                        href={`https://wa.me/966574135600?text=استفسار بخصوص: ${service.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-900 font-bold hover:text-accent-500 transition-all py-3 -my-3 active:scale-[0.98] select-none group/link"
                      >
                        طلب استشارة مجانية لهذا القسم
                        <ChevronLeft className="w-5 h-5 group-hover/link:-translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20">
                <p className="text-gray-500 font-bold text-lg">لم يتم العثور على خدمات تطابق بحثك حالياً.</p>
            </div>
          )}
        </div>

        {/* Callback Request Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 max-w-3xl mx-auto bg-gray-50 border border-gray-200 p-8 md:p-12 relative"
        >
          <div className="absolute top-0 right-0 w-2 h-full bg-accent-500"></div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-primary-900 mb-3 tracking-tight">طلب إعادة اتصال واستشارة</h2>
            <p className="text-gray-600 font-medium">أدخل بياناتك بالأسفل وسيقوم أحد مسؤولي المعاملات بالتواصل معك في أقرب وقت للحصول على استشارتك المجانية.</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white border border-accent-500/30 p-8 text-center rounded-sm space-y-6"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto text-accent-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">تم استلام طلبك بنجاح!</h3>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                شكراً لثقتك بمكتب خدمات ومعاملات رسمية. لقد تم تسجيل طلب الاستشارة لخدمة <span className="font-extrabold text-primary-900">«{services.find(s => s.id === serviceType)?.title || 'خدمة أخرى'}»</span> باسم <span className="font-extrabold text-primary-900">{name}</span> ورقم الجوال <span className="font-bold">{phone}</span>. سنتصل بك قريباً جداً.
              </p>
              <button 
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setPhone('');
                  setServiceType('marriage');
                }}
                className="text-primary-900 font-bold hover:text-accent-500 transition-colors text-sm underline"
              >
                تقديم طلب اتصال آخر
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleCallbackSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-right text-gray-700 font-bold text-sm">الاسم الكامل</label>
                  <div className="relative">
                    <input 
                      type="text"
                      required
                      placeholder="أدخل اسمك الكريم"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none text-right font-medium pr-12 rounded-sm"
                    />
                    <User className="absolute right-4 top-4 text-gray-400 h-5 w-5" />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-right text-gray-700 font-bold text-sm">رقم الجوال للاتصال</label>
                  <div className="relative">
                    <input 
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      pattern="05[0-9]{8}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none text-left font-medium pr-12 rounded-sm"
                      dir="ltr"
                    />
                    <Phone className="absolute right-4 top-4 text-gray-400 h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Service Type Selection */}
              <div className="space-y-2">
                <label className="block text-right text-gray-700 font-bold text-sm">نوع الخدمة المطلوب مناقشتها</label>
                <div className="relative">
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none text-right font-medium pr-12 rounded-sm appearance-none cursor-pointer"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="other">خدمة مخصصة أخرى / غير مدرجة</option>
                  </select>
                  <Briefcase className="absolute right-4 top-4 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-900 hover:bg-primary-950 text-white font-bold py-4 rounded-sm transition-all duration-200 active:scale-[0.98] select-none flex items-center justify-center gap-2 disabled:bg-gray-400"
              >
                {isSubmitting ? (
                  <span>جاري تسجيل طلبك...</span>
                ) : (
                  <>
                    <span>إرسال طلب الاتصال والاستشارة</span>
                    <ChevronLeft className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* CTA */}
        <div className="mt-24 bg-primary-950 p-10 md:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden border-t-4 border-accent-500">
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">هل تبحث عن خدمة غير مدرجة؟</h2>
              <p className="text-gray-300 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                نحن ننجز مجموعة واسعة من المعاملات الرسمية في دوائر متعددة. تواصل معنا لمناقشة معاملتك وسنقوم بخدمتك لضمان إنجازها.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                 <a
                    href="https://wa.me/966574135600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-500 hover:bg-accent-400 text-primary-950 font-bold text-base md:text-lg px-8 py-5 rounded-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] select-none"
                 >
                    تواصل معنا عبر الواتساب
                 </a>
                 <Link
                    href="/contact"
                    className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-base md:text-lg px-8 py-5 rounded-sm transition-all duration-200 active:scale-[0.98] select-none"
                 >
                    انتقل لصفحة التواصل
                 </Link>
              </div>
           </div>
        </div>
    </>
  );
}
