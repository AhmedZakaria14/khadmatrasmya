import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle2, Scale, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata, SITE } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'عن المكتب وخبرتنا في المعاملات الرسمية',
  description: 'تعرف على خبرة مكتب ابو محمد المطيري في متابعة تصاريح الزواج ومعاملات التجنيس والتأشيرات داخل السعودية، مع الالتزام والسرية والدفع بعد الإنجاز.',
  path: '/about',
});

const values = [
  {
    icon: ShieldCheck,
    title: 'الأمانة المطلقة',
    description: 'نتعامل مع بيانات عملائنا ومعاملاتهم بأقصى درجات السرية والأمان.',
  },
  {
    icon: Scale,
    title: 'الالتزام بالنظام',
    description: 'جميع أعمالنا تتوافق مع الأنظمة والتعليمات المعمول بها داخل المملكة.',
  },
  {
    icon: Award,
    title: 'الجودة والسرعة',
    description: 'نوازن بين دقة الإنجاز وسرعة المتابعة والتواصل الواضح مع العميل.',
  },
];

export default function AboutPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE.url}/about/#webpage`,
    url: `${SITE.url}/about`,
    name: 'عن مكتب ابو محمد المطيري',
    description: 'نبذة عن المكتب وخبرته وقيمه في متابعة المعاملات الرسمية داخل المملكة العربية السعودية.',
    inLanguage: 'ar-SA',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#business` },
  };

  return (
    <div className="bg-white font-sans">
      <JsonLd data={pageJsonLd} />

      <section className="ingaz-page-hero py-14 text-white lg:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'الرئيسية', path: '/' }, { name: 'من نحن', path: '/about' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h1 className="font-display mb-5 text-4xl font-extrabold text-white md:text-5xl">عن مكتب ابو محمد المطيري</h1>
            <p className="text-base font-normal leading-8 text-white/90 md:text-lg">
              خبرة في متابعة المعاملات الرسمية داخل المملكة، مع وضوح في الإجراءات وحرص على السرية والدقة وسرعة الإنجاز.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <ScrollReveal direction="right" duration={0.75} className="relative min-h-[380px] sm:min-h-[520px]">
            <Image
              src="/images/sections/about-saudi-team.webp"
              alt="خبرة مكتب ابو محمد المطيري"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="ingaz-about-image object-cover"
            />
          </ScrollReveal>

          <ScrollReveal direction="left" duration={0.75}>
            <h2 className="section-kicker mb-7">من نحن</h2>
            <p className="mb-6 text-base font-bold leading-9 text-[#0e0e0e]">
              مكتب ابو محمد المطيري هو خيار متخصص لمتابعة وإنجاز تصاريح الزواج ومعاملات التجنيس والتأشيرات والإقامة في المملكة العربية السعودية.
            </p>
            <p className="mb-8 text-base font-normal leading-8 text-[#333]">
              نعمل على تيسير الإجراءات الرسمية وتقليل الوقت والجهد على العميل، مع مراجعة المتطلبات قبل البدء ومتابعة المعاملة بصورة واضحة حتى اكتمالها، وبسياسة دفع بعد الإنجاز وفق الاتفاق.
            </p>
            <ul className="space-y-4">
              {[
                'متابعة واضحة لكل مرحلة من مراحل المعاملة',
                'سرية كاملة للبيانات والمستندات',
                'خدمة لجميع مناطق المملكة العربية السعودية',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-bold leading-7 text-[#222]">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-primary-50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex justify-center">
            <h2 className="section-kicker">قيمنا الأساسية</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} direction="up" delay={index * 0.1} duration={0.6} className="h-full">
                  <article className="ingaz-feature-card flex h-full flex-col items-center px-7 py-10 text-center">
                    <Icon className="mb-5 h-8 w-8 text-primary-500" />
                    <h3 className="mb-4 text-lg font-bold text-black">{value.title}</h3>
                    <p className="text-sm font-normal leading-7 text-black">{value.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[920px] px-4 text-center sm:px-6">
          <div className="rounded-[16px] bg-primary-700 px-7 py-12 text-white shadow-xl sm:px-12">
            <h2 className="font-display mb-5 text-3xl font-bold text-white">جاهز لبدء معاملتك؟</h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-white/90">
              تواصل معنا لمراجعة تفاصيل الطلب ومعرفة المستندات والخطوات المناسبة لحالتك قبل البدء.
            </p>
            <Link href="/contact" className="ingaz-button inline-block bg-accent-500 px-8 py-3.5 font-bold text-white hover:bg-accent-600">
              انتقل لصفحة التواصل
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
