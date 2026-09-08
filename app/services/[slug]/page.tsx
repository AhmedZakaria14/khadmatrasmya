import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  FileCheck2,
  ListChecks,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { relatedServicePages, servicePageBySlug, servicePages } from '@/lib/service-pages';
import { SITE } from '@/lib/seo';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePageBySlug(decodeURIComponent(slug));
  if (!service) return {};

  const canonical = `${SITE.url}/services/${encodeURIComponent(service.slug)}`;
  const image = `${SITE.url}${service.image}`;

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: `${service.seoTitle} | ${SITE.name}`,
      description: service.metaDescription,
      url: canonical,
      siteName: SITE.name,
      locale: 'ar_SA',
      type: 'website',
      images: [{ url: image, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.seoTitle} | ${SITE.name}`,
      description: service.metaDescription,
      images: [image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicePageBySlug(decodeURIComponent(slug));
  if (!service) notFound();

  const related = relatedServicePages(service);
  const pageUrl = `${SITE.url}/services/${encodeURIComponent(service.slug)}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: service.seoTitle,
        description: service.metaDescription,
        inLanguage: 'ar-SA',
        isPartOf: { '@id': `${SITE.url}/#website` },
        primaryImageOfPage: `${SITE.url}${service.image}`,
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.title,
        description: service.metaDescription,
        serviceType: service.categoryLabel,
        provider: { '@id': `${SITE.url}/#business` },
        areaServed: {
          '@type': 'Country',
          name: 'المملكة العربية السعودية',
        },
        url: pageUrl,
        image: `${SITE.url}${service.image}`,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'الخدمات', item: `${SITE.url}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main className="bg-white font-sans">
      <JsonLd data={structuredData} />

      <section className="ingaz-page-hero ingaz-pattern relative overflow-hidden pb-16 pt-10 text-white md:pb-20 md:pt-14">
        <div className="ingaz-container">
          <Breadcrumbs
            items={[
              { name: 'الرئيسية', path: '/' },
              { name: 'الخدمات', path: '/services' },
              { name: service.title, path: `/services/${service.slug}` },
            ]}
          />

          <div className="mt-9 grid gap-9 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold text-accent-300">{service.categoryLabel}</p>
              <h1 className="font-display mb-5 text-[32px] font-extrabold leading-[1.45] text-white md:text-[44px]">
                {service.title}
              </h1>
              <p className="max-w-3xl text-[16px] leading-9 text-white/95 md:text-[17px]">{service.intro}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/966547147102?text=${encodeURIComponent(`أرغب في الاستفسار عن خدمة: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ingaz-button inline-flex items-center justify-center gap-2 bg-accent-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-accent-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  استشارة عبر واتساب
                </a>
                <a
                  href="tel:+966547147102"
                  className="ingaz-button inline-flex items-center justify-center gap-2 border border-white px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-primary-900"
                >
                  <PhoneCall className="h-5 w-5" />
                  اتصال مباشر
                </a>
              </div>
            </div>

            <div className="relative min-h-[310px] overflow-hidden rounded-[16px] shadow-[0_0_18px_rgba(0,0,0,.28)] sm:min-h-[420px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="ingaz-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <article className="min-w-0">
            <nav className="mb-10 rounded-[12px] border border-primary-100 bg-primary-50/60 p-6" aria-label="محتويات الصفحة">
              <h2 className="font-display mb-4 text-xl font-bold text-primary-900">محتويات الخدمة</h2>
              <div className="grid gap-3 text-sm font-semibold text-[#222] sm:grid-cols-2">
                <a href="#about-service" className="flex items-center gap-2 hover:text-primary-500"><ChevronLeft className="h-4 w-4 text-primary-500" />عن الخدمة</a>
                <a href="#service-scope" className="flex items-center gap-2 hover:text-primary-500"><ChevronLeft className="h-4 w-4 text-primary-500" />ما الذي نقوم به؟</a>
                <a href="#steps" className="flex items-center gap-2 hover:text-primary-500"><ChevronLeft className="h-4 w-4 text-primary-500" />خطوات المتابعة</a>
                <a href="#documents" className="flex items-center gap-2 hover:text-primary-500"><ChevronLeft className="h-4 w-4 text-primary-500" />المستندات</a>
                <a href="#faq" className="flex items-center gap-2 hover:text-primary-500"><ChevronLeft className="h-4 w-4 text-primary-500" />الأسئلة الشائعة</a>
              </div>
            </nav>

            <section id="about-service" className="scroll-mt-28">
              <h2 className="section-kicker mb-6">عن {service.title}</h2>
              <p className="mb-6 text-[16px] leading-9 text-[#222]">{service.overview}</p>
              <div className="rounded-[12px] border-r-4 border-primary-500 bg-primary-50 px-6 py-5 text-[14px] leading-8 text-[#333]">
                المعلومات هنا تعريفية، والمتطلبات النهائية تعتمد على حالة صاحب الطلب والأنظمة والتعليمات السارية لدى الجهة المختصة وقت الإجراء.
              </div>
            </section>

            <section id="service-scope" className="scroll-mt-28 pt-12">
              <h2 className="font-display mb-6 text-2xl font-extrabold text-primary-900">ما الذي يشمله عملنا في هذه الخدمة؟</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.scope.map((item) => (
                  <div key={item} className="ingaz-feature-card flex items-start gap-3 p-5">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-500" />
                    <p className="text-[14px] leading-7 text-[#222]">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="steps" className="scroll-mt-28 pt-12">
              <h2 className="font-display mb-6 text-2xl font-extrabold text-primary-900">خطوات مراجعة ومتابعة المعاملة</h2>
              <ol className="space-y-4">
                {service.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4 rounded-[10px] border border-primary-100 bg-white p-5 shadow-[0_5px_18px_rgba(20,40,58,.07)]">
                    <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">{index + 1}</span>
                    <p className="pt-1 text-[15px] leading-7 text-[#222]">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="documents" className="scroll-mt-28 pt-12">
              <h2 className="font-display mb-6 text-2xl font-extrabold text-primary-900">مستندات وبيانات يتم مراجعتها غالبًا</h2>
              <div className="rounded-[16px] bg-primary-500 p-6 text-white md:p-8">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {service.documents.map((document) => (
                    <li key={document} className="flex items-start gap-3 text-[14px] leading-7 text-white/95">
                      <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-accent-300" />
                      {document}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pt-12">
              <div className="grid overflow-hidden rounded-[16px] border border-primary-100 bg-white shadow-[0_12px_35px_rgba(20,40,58,.11)] md:grid-cols-[1fr_auto] md:items-center">
                <div className="p-7 md:p-9">
                  <h2 className="font-display mb-3 text-2xl font-bold text-primary-900">هل تريد تقييم حالتك قبل البدء؟</h2>
                  <p className="text-[14px] leading-7 text-[#333]">أرسل تفاصيل المعاملة بشكل مختصر، وسيتم توضيح المستندات المبدئية والمسار المتوقع قبل بدء المتابعة.</p>
                </div>
                <div className="flex h-full items-center justify-center bg-primary-50 p-7 md:p-9">
                  <a
                    href={`https://wa.me/966547147102?text=${encodeURIComponent(`أحتاج تقييم حالتي لخدمة: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ingaz-button inline-flex items-center gap-2 whitespace-nowrap bg-primary-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-900"
                  >
                    <MessageCircle className="h-5 w-5" />
                    ابدأ الآن
                  </a>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-28 pt-12">
              <h2 className="font-display mb-6 text-2xl font-extrabold text-primary-900">الأسئلة الشائعة عن {service.title}</h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-[10px] border border-primary-100 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,.05)]">
                    <summary className="cursor-pointer list-none font-bold leading-7 text-primary-900">{faq.question}</summary>
                    <p className="mt-4 border-t border-primary-100 pt-4 text-[14px] leading-8 text-[#333]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="pt-12">
              <h2 className="font-display mb-6 text-2xl font-extrabold text-primary-900">خدمات مرتبطة قد تهمك</h2>
              <div className="grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.slug} href={`/services/${item.slug}`} className="group overflow-hidden rounded-[12px] border border-primary-100 bg-white shadow-[0_5px_18px_rgba(0,0,0,.07)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-3 text-[15px] font-bold leading-7 text-primary-900">{item.title}</h3>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary-500">عرض الخدمة <ArrowLeft className="h-4 w-4" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-[14px] bg-primary-700 p-6 text-white shadow-lg">
              <ShieldCheck className="mb-4 h-10 w-10 text-accent-300" />
              <h2 className="font-display mb-3 text-xl font-bold text-white">متابعة واضحة للمعاملة</h2>
              <p className="mb-5 text-[13px] leading-7 text-white/90">نراجع الحالة أولًا، نوضح النواقص، ثم نتابع المسار المتفق عليه مع إبقائك على اطلاع بالتحديثات.</p>
              <a href="https://wa.me/966547147102" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-[9px] bg-accent-500 px-5 py-3.5 text-sm font-bold text-white hover:bg-accent-600">
                <MessageCircle className="h-5 w-5" />
                واتساب المكتب
              </a>
            </div>

            <div className="rounded-[14px] border border-primary-100 bg-white p-6 shadow-[0_5px_18px_rgba(0,0,0,.06)]">
              <ListChecks className="mb-4 h-8 w-8 text-primary-500" />
              <h2 className="font-display mb-4 text-lg font-bold text-primary-900">دليل الخدمات</h2>
              <div className="space-y-2">
                <Link href="/services" className="flex items-center justify-between rounded-[8px] bg-primary-50 px-4 py-3 text-sm font-bold text-primary-900 hover:bg-primary-100">
                  جميع الخدمات
                  <ChevronLeft className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="flex items-center justify-between rounded-[8px] bg-primary-50 px-4 py-3 text-sm font-bold text-primary-900 hover:bg-primary-100">
                  تواصل معنا
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
