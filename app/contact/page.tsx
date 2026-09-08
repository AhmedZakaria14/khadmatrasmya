import { Clock3, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata, SITE } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'رقم معقب للتواصل والاستشارات',
  description: 'تواصل مع مكتب ابو محمد المطيري على الرقم 0547147102 للاستفسار عن تصاريح الزواج والتجنيس والتأشيرات والإقامة في السعودية، مع استقبال الطلبات طوال الأسبوع.',
  path: '/contact',
});

export default function ContactPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE.url}/contact/#webpage`,
    url: `${SITE.url}/contact`,
    name: 'التواصل مع مكتب ابو محمد المطيري',
    description: 'قنوات التواصل الرسمية للاستفسار وبدء معاملات تصاريح الزواج والتجنيس والتأشيرات.',
    inLanguage: 'ar-SA',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#business` },
  };

  return (
    <div className="bg-white font-sans">
      <JsonLd data={pageJsonLd} />

      <section className="ingaz-page-hero py-14 text-white lg:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'الرئيسية', path: '/' }, { name: 'تواصل معنا', path: '/contact' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h1 className="font-display mb-5 text-4xl font-extrabold text-white md:text-5xl">تواصل معنا</h1>
            <p className="text-base font-normal leading-8 text-white/90 md:text-lg">
              أرسل تفاصيل معاملتك ليتم مراجعتها وتوضيح المتطلبات وخطوات التنفيذ المناسبة لحالتك.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="rounded-[16px] border border-primary-100 bg-primary-50 px-7 py-10 shadow-[0_8px_26px_rgba(0,71,79,.10)] sm:px-10">
            <h2 className="font-display mb-7 border-r-4 border-primary-900 pr-3 text-2xl font-semibold text-primary-900">
              يسعدنا استقبال استفساراتكم وأسئلتكم
            </h2>
            <div className="space-y-6">
              <a href="tel:+966547147102" className="flex items-center gap-4 text-[#111] hover:text-primary-500">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white"><Phone className="h-5 w-5" /></span>
                <span>
                  <strong className="block text-sm">رقم الجوال</strong>
                  <span className="mt-1 block font-display text-lg font-semibold" dir="ltr">+966 54 714 7102</span>
                </span>
              </a>

              <a href="https://wa.me/966547147102" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#111] hover:text-primary-500">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white"><MessageCircle className="h-5 w-5" /></span>
                <span>
                  <strong className="block text-sm">واتساب</strong>
                  <span className="mt-1 block text-sm">بدء محادثة مباشرة مع المكتب</span>
                </span>
              </a>

              <div className="flex items-center gap-4 text-[#111]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white"><MapPin className="h-5 w-5" /></span>
                <span>
                  <strong className="block text-sm">نطاق الخدمة</strong>
                  <span className="mt-1 block text-sm">جميع مناطق المملكة العربية السعودية</span>
                </span>
              </div>

              <div className="flex items-center gap-4 text-[#111]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white"><Clock3 className="h-5 w-5" /></span>
                <span>
                  <strong className="block text-sm">أوقات استقبال الطلبات</strong>
                  <span className="mt-1 block text-sm">على مدار أيام الأسبوع</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-[16px] bg-primary-700 px-7 py-12 text-center text-white shadow-xl sm:px-10">
            <ShieldCheck className="mb-5 h-16 w-16 text-white" />
            <h2 className="font-display mb-5 text-3xl font-bold text-white">ابدأ معاملتك الآن</h2>
            <p className="mb-8 max-w-md text-sm font-normal leading-7 text-white/90">
              أسرع طريقة للبدء هي إرسال نوع المعاملة وتفاصيل الحالة عبر واتساب، ليتم توضيح المطلوب ومراجعة إمكانية التنفيذ.
            </p>
            <a
              href="https://wa.me/966547147102"
              target="_blank"
              rel="noopener noreferrer"
              className="ingaz-button inline-flex items-center gap-2 bg-accent-500 px-8 py-4 font-bold text-white hover:bg-accent-600"
            >
              <MessageCircle className="h-5 w-5" />
              بدء المحادثة الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
