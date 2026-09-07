'use client';

import { CheckCircle2, ShieldCheck, FileBadge, Globe, ChevronLeft, Search, User, Briefcase, Phone } from 'lucide-react';
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
      icon: <FileBadge className="relative z-10 h-9 w-9 text-primary-500" />,
      description: 'نقدم خدماتنا في استخراج كافة التصريحات الرسمية وموافقات الزواج لجميع الحالات بأعلى معايير الدقة.',
      items: [
        { label: 'استخراج تصريح زواج سعودي من أجنبية (مقيمة)', image: '/images/services/marriage-resident.webp' },
        { label: 'استخراج موافقة زواج من أجنبي غير مقيم', image: '/images/services/marriage-nonresident.webp' },
        { label: 'استخراج موافقة زواج (مفتوح)', image: '/images/services/marriage-open-approval.webp' },
        { label: 'استخراج موافقة زواج سعودية من أجنبي', image: '/images/services/marriage-saudi-woman.webp' }
      ]
    },
    {
      id: 'citizenship',
      title: 'خدمات التجنيس النوعية',
      icon: <Globe className="relative z-10 h-9 w-9 text-primary-500" />,
      description: 'نتابع معاملات التجنيس وننهي الإجراءات النظامية للحالات المستوفية للشروط وفقاً للأنظمة المعتمدة.',
      items: [
        { label: 'تجنيس الكفاءات (أطباء)', image: '/images/services/citizenship-doctors.webp' },
        { label: 'تجنيس المستثمرين ورجال الأعمال', image: '/images/services/citizenship-investors.webp' },
        { label: 'تجنيس زوجة مواطن', image: '/images/services/citizenship-wife.webp' },
        { label: 'تجنيس أبناء المواطنات ومواليد المملكة', image: '/images/services/citizenship-children.webp' }
      ]
    },
    {
      id: 'visas',
      title: 'خدمات التأشيرات والمقيمين',
      icon: <ShieldCheck className="relative z-10 h-9 w-9 text-primary-500" />,
      description: 'ننجز كافة معاملات الجوازات والتأشيرات للشركات والمؤسسات والأفراد بكفاءة عالية.',
      items: [
        { label: 'استخراج التأشيرات المهنية للمؤسسات', image: '/images/services/visa-professional.webp' },
        { label: 'استخراج تأشيرات فردية عمالية', image: '/images/services/visa-individual.webp' },
        { label: 'تحويل تأشيرة الزيارة إلى إقامة نظامية', image: '/images/services/visit-to-residency.webp' },
        { label: 'استخراج موافقة لزوج مقيم', image: '/images/services/resident-husband-approval.webp' }
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
          <span className="section-kicker mb-6">خدماتنا المتخصصة</span>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-primary-900 md:text-5xl">
            الخدمات التي <span className="text-primary-500">نقدمها</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            مكتب ابو محمد المطيري يضع بين يديك خبرة طويلة في إنجاز كافة المعاملات الحكومية والرسمية، مع التزامنا الراسخ بمبدأ الدفع بعد الإنجاز لجميع عملائنا.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative mx-auto mb-16 max-w-xl">
            <input
                type="text"
                placeholder="ابحث عن خدمة أو إجراء..."
                aria-label="البحث في الخدمات"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-primary-100 bg-white px-6 py-4 pr-14 text-right font-medium shadow-[0_10px_35px_rgba(8,63,70,.06)] outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
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
                className="group relative overflow-hidden rounded-[30px] border border-primary-100 bg-white shadow-[0_18px_55px_rgba(8,63,70,.07)]"
              >
                <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start z-10">
                  <div className="flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-50 ring-1 ring-primary-100 md:h-24 md:w-24">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow w-full">
                    <h2 className="text-3xl font-extrabold text-primary-900 mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed max-w-3xl">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8">
                      {service.items.map((item) => (
                        <div key={item.label} className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-primary-100 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg">
                          <div className="relative aspect-video bg-primary-50">
                            <Image src={item.image} alt={item.label} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
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
                        href={`https://wa.me/966547147102?text=استفسار بخصوص: ${service.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link -my-3 inline-flex items-center gap-2 rounded-xl bg-primary-50 px-5 py-3 font-bold text-primary-800 transition-all hover:bg-primary-500 hover:text-white active:scale-[0.98]"
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
          className="relative mx-auto mt-24 max-w-3xl overflow-hidden rounded-[30px] border border-primary-100 bg-white p-8 shadow-[0_18px_55px_rgba(8,63,70,.08)] md:p-12"
        >
          <div className="absolute top-0 right-0 h-full w-2 bg-primary-500"></div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-primary-900 mb-3 tracking-tight">طلب إعادة اتصال واستشارة</h2>
            <p className="text-gray-600 font-medium">أدخل بياناتك بالأسفل وسيقوم أحد مسؤولي المعاملات بالتواصل معك في أقرب وقت للحصول على استشارتك المجانية.</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-6 rounded-2xl border border-primary-100 bg-primary-50/60 p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">تم استلام طلبك بنجاح!</h3>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                شكراً لثقتك بمكتب ابو محمد المطيري. لقد تم تسجيل طلب الاستشارة لخدمة <span className="font-extrabold text-primary-900">«{services.find(s => s.id === serviceType)?.title || 'خدمة أخرى'}»</span> باسم <span className="font-extrabold text-primary-900">{name}</span> ورقم الجوال <span className="font-bold">{phone}</span>. سنتصل بك قريباً جداً.
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
                      className="w-full rounded-xl border border-primary-100 bg-primary-50/30 px-5 py-3.5 pr-12 text-right font-medium outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
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
                      className="w-full rounded-xl border border-primary-100 bg-primary-50/30 px-5 py-3.5 pr-12 text-left font-medium outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
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
                    className="w-full cursor-pointer appearance-none rounded-xl border border-primary-100 bg-primary-50/30 px-5 py-3.5 pr-12 text-right font-medium outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
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
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 py-4 font-bold text-white transition-all duration-200 hover:bg-primary-600 active:scale-[0.98] disabled:bg-gray-400"
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
        <div className="relative mt-24 overflow-hidden rounded-[32px] bg-primary-900 p-10 text-center shadow-2xl md:p-16 lg:p-20">
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">هل تبحث عن خدمة غير مدرجة؟</h2>
              <p className="text-gray-300 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                نحن ننجز مجموعة واسعة من المعاملات الرسمية في دوائر متعددة. تواصل معنا لمناقشة معاملتك وسنقوم بخدمتك لضمان إنجازها.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                 <a
                    href="https://wa.me/966547147102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-accent-500 px-8 py-5 text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-accent-600 hover:shadow-lg active:scale-[0.98] md:text-lg"
                 >
                    تواصل معنا عبر الواتساب
                 </a>
                 <Link
                    href="/contact"
                    className="rounded-xl border border-white/30 bg-transparent px-8 py-5 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98] md:text-lg"
                 >
                    انتقل لصفحة التواصل
                 </Link>
              </div>
           </div>
        </div>
    </>
  );
}
