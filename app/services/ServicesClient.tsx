'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  FileBadge,
  Globe2,
  MessageCircle,
  Phone,
  PlaneTakeoff,
  Search,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { servicePages } from '@/lib/service-pages';

const services = [
  {
    id: 'marriage',
    title: 'تصريحات وموافقات الزواج',
    icon: FileBadge,
    description: 'نقدم خدماتنا في استخراج كافة التصريحات الرسمية وموافقات الزواج لجميع الحالات بأعلى معايير الدقة.',
    items: [
      { label: 'استخراج تصريح زواج سعودي من أجنبية (مقيمة)', image: '/images/services/marriage-resident.webp' },
      { label: 'استخراج موافقة زواج من أجنبي غير مقيم', image: '/images/services/marriage-nonresident.webp' },
      { label: 'استخراج موافقة زواج (مفتوح)', image: '/images/services/marriage-open-approval.webp' },
      { label: 'استخراج موافقة زواج سعودية من أجنبي', image: '/images/services/marriage-saudi-woman.webp' },
    ],
  },
  {
    id: 'citizenship',
    title: 'خدمات التجنيس النوعية',
    icon: Globe2,
    description: 'نتابع معاملات التجنيس وننهي الإجراءات النظامية للحالات المستوفية للشروط وفقاً للأنظمة المعتمدة.',
    items: [
      { label: 'تجنيس الكفاءات (أطباء)', image: '/images/services/citizenship-doctors.webp' },
      { label: 'تجنيس المستثمرين ورجال الأعمال', image: '/images/services/citizenship-investors.webp' },
      { label: 'تجنيس زوجة مواطن', image: '/images/services/citizenship-wife.webp' },
      { label: 'تجنيس أبناء المواطنات ومواليد المملكة', image: '/images/services/citizenship-children.webp' },
    ],
  },
  {
    id: 'visas',
    title: 'خدمات التأشيرات والمقيمين',
    icon: PlaneTakeoff,
    description: 'ننجز معاملات الجوازات والتأشيرات للشركات والمؤسسات والأفراد بكفاءة عالية.',
    items: [
      { label: 'استخراج التأشيرات المهنية للمؤسسات', image: '/images/services/visa-professional.webp' },
      { label: 'استخراج تأشيرات فردية عمالية', image: '/images/services/visa-individual.webp' },
      { label: 'تحويل تأشيرة الزيارة إلى إقامة نظامية', image: '/images/services/visit-to-residency.webp' },
      { label: 'استخراج موافقة لزوج مقيم', image: '/images/services/resident-husband-approval.webp' },
    ],
  },
];

const getServiceHref = (label: string) => {
  const detail = servicePages.find((page) => page.cardLabel === label);
  return detail ? `/services/${detail.slug}` : '/services';
};

export default function ServicesClient() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('marriage');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredServices = services.filter(
    (service) => service.title.includes(search) || service.items.some((item) => item.label.includes(search)),
  );

  const handleCallbackSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h1 className="font-display mb-5 text-4xl font-extrabold text-white md:text-5xl">خدماتنا المتخصصة</h1>
        <p className="text-base font-normal leading-8 text-white/90 md:text-lg">
          خدمات تصاريح الزواج والتجنيس والتأشيرات والإقامة مع متابعة واضحة والدفع بعد الإنجاز وفق الاتفاق.
        </p>
      </div>

      <div className="relative mx-auto mb-12 max-w-xl">
        <input
          type="search"
          placeholder="ابحث عن خدمة أو إجراء..."
          aria-label="البحث في الخدمات"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-[9px] border border-white/30 bg-white px-5 py-4 pr-12 text-sm font-normal text-black outline-none transition focus:border-accent-500"
        />
        <Search className="absolute right-4 top-4 h-5 w-5 text-primary-500" />
      </div>

      <div className="space-y-12">
        {filteredServices.length ? (
          filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <section key={service.id} className="ingaz-service-card p-6 sm:p-8 lg:p-10">
                <div className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-right">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500 ring-1 ring-primary-100">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="font-display mb-2 text-2xl font-bold text-primary-900 sm:text-3xl">{service.title}</h2>
                    <p className="text-sm font-normal leading-7 text-[#222]">{service.description}</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <Link
                      key={item.label}
                      href={getServiceHref(item.label)}
                      className="group overflow-hidden rounded-[12px] border border-primary-100 bg-white shadow-[0_5px_16px_rgba(0,0,0,.08)] transition hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(20,40,58,.16)]"
                    >
                      <div className="relative aspect-[16/9] bg-primary-50">
                        <Image src={item.image} alt={item.label} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition duration-300 group-hover:scale-[1.025]" />
                      </div>
                      <div className="flex items-start gap-3 px-5 py-5">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-bold leading-7 text-black">{item.label}</h3>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary-500">تفاصيل الخدمة <ChevronLeft className="h-3.5 w-3.5" /></span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 border-t border-primary-100 pt-6 text-center sm:text-right">
                  <a
                    href={`https://wa.me/966547147102?text=${encodeURIComponent(`استفسار بخصوص: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ingaz-button inline-flex items-center gap-2 bg-primary-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-primary-900"
                  >
                    طلب استشارة لهذا القسم
                    <ChevronLeft className="h-4 w-4" />
                  </a>
                </div>
              </section>
            );
          })
        ) : (
          <div className="rounded-[16px] bg-white p-10 text-center shadow-lg">
            <p className="font-bold text-primary-900">لم يتم العثور على خدمات تطابق بحثك حالياً.</p>
          </div>
        )}
      </div>

      <section className="mt-16 rounded-[16px] bg-white p-7 shadow-[0_0_10px_rgba(0,0,0,.28)] sm:p-10">
        <h2 className="font-display mb-3 border-r-4 border-primary-900 pr-3 text-2xl font-bold text-primary-900">طلب إعادة اتصال واستشارة</h2>
        <p className="mb-8 text-sm font-normal leading-7 text-[#333]">
          أدخل بياناتك وسيتم تسجيل طلبك لمراجعته من مسؤول المعاملات.
        </p>

        {isSubmitted ? (
          <div className="rounded-[12px] border border-primary-100 bg-primary-50 p-7 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-accent-500" />
            <h3 className="font-display mb-3 text-2xl font-bold text-primary-900">تم استلام طلبك</h3>
            <p className="mb-5 text-sm leading-7 text-[#333]">
              تم تسجيل طلب الاستشارة لخدمة «{services.find((service) => service.id === serviceType)?.title || 'خدمة أخرى'}» باسم {name} ورقم {phone}.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setPhone('');
                setServiceType('marriage');
              }}
              className="font-bold text-primary-500 underline"
            >
              تقديم طلب آخر
            </button>
          </div>
        ) : (
          <form onSubmit={handleCallbackSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#222]">الاسم الكامل</span>
                <span className="relative block">
                  <User className="absolute right-4 top-4 h-5 w-5 text-primary-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="أدخل اسمك الكريم"
                    className="w-full rounded-[9px] border border-primary-100 bg-primary-50/50 px-5 py-3.5 pr-12 text-sm outline-none focus:border-primary-500"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#222]">رقم الجوال</span>
                <span className="relative block">
                  <Phone className="absolute right-4 top-4 h-5 w-5 text-primary-500" />
                  <input
                    type="tel"
                    required
                    pattern="05[0-9]{8}"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    className="w-full rounded-[9px] border border-primary-100 bg-primary-50/50 px-5 py-3.5 pr-12 text-left text-sm outline-none focus:border-primary-500"
                  />
                </span>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#222]">نوع الخدمة</span>
              <span className="relative block">
                <Briefcase className="absolute right-4 top-4 h-5 w-5 text-primary-500" />
                <select
                  value={serviceType}
                  onChange={(event) => setServiceType(event.target.value)}
                  className="w-full rounded-[9px] border border-primary-100 bg-primary-50/50 px-5 py-3.5 pr-12 text-sm outline-none focus:border-primary-500"
                >
                  {services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
                  <option value="other">خدمة أخرى</option>
                </select>
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="ingaz-button flex w-full items-center justify-center gap-2 bg-primary-500 px-6 py-4 font-bold text-white hover:bg-primary-900 disabled:opacity-60"
            >
              {isSubmitting ? 'جاري تسجيل الطلب...' : 'إرسال طلب الاتصال والاستشارة'}
              {!isSubmitting && <ChevronLeft className="h-5 w-5" />}
            </button>
          </form>
        )}
      </section>

      <section className="mt-16 rounded-[16px] border border-white/20 bg-primary-700 p-8 text-center text-white shadow-xl sm:p-12">
        <h2 className="font-display mb-4 text-3xl font-bold text-white">هل تبحث عن خدمة غير مدرجة؟</h2>
        <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/90">
          تواصل معنا لمناقشة معاملتك ومعرفة إمكانية تنفيذها والمتطلبات اللازمة.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="https://wa.me/966547147102" target="_blank" rel="noopener noreferrer" className="ingaz-button inline-flex items-center justify-center gap-2 bg-accent-500 px-7 py-3.5 font-bold text-white hover:bg-accent-600">
            <MessageCircle className="h-5 w-5" />
            تواصل عبر الواتساب
          </a>
          <Link href="/contact" className="ingaz-button border border-white px-7 py-3.5 font-bold text-white hover:bg-white hover:text-primary-900">
            صفحة التواصل
          </Link>
        </div>
      </section>
    </>
  );
}
