import Image from 'next/image';
import Link from 'next/link';
import {
  Clock3,
  FileBadge,
  Globe2,
  MessageCircle,
  PhoneCall,
  PlaneTakeoff,
  Scale,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata, SITE } from '@/lib/seo';

const homeMetadata = createPageMetadata({
  title: 'تصاريح الزواج والتجنيس والتأشيرات في السعودية',
  description: 'إنجاز تصاريح وموافقات الزواج، معاملات التجنيس، وخدمات التأشيرات والإقامة في السعودية بمتابعة واضحة والدفع بعد الإنجاز. تواصل مباشرة للاستشارة.',
  path: '/',
});

export const metadata = {
  ...homeMetadata,
  title: { absolute: 'مكتب ابو محمد المطيري | تصاريح الزواج والتجنيس والتأشيرات' },
};

const features = [
  {
    icon: Zap,
    title: 'السرعة في الإنجاز',
    description: 'نلتزم بإتمام المعاملة في أقصر وقت ممكن دون تعقيدات، بفضل خبرتنا الطويلة في هذا المجال.',
  },
  {
    icon: Scale,
    title: 'خبرة قانونية واسعة',
    description: 'فريق متخصص على دراية بكافة الإجراءات والأنظمة المتعلقة بتصاريح الزواج وخدمات التجنيس.',
  },
  {
    icon: Clock3,
    title: 'تنفيذ الخدمات على مدار الساعة',
    description: 'نحن معك في كل خطوة، عبر الهاتف أو الواتساب، على مدار 24 ساعة.',
  },
];

const services = [
  {
    title: 'استخراج تصاريح الزواج',
    icon: FileBadge,
    image: '/images/services/marriage-resident.webp',
    description:
      'نتابع إجراءات تصاريح وموافقات الزواج للحالات المختلفة داخل المملكة، مع مراجعة المتطلبات والمستندات ومتابعة الطلب حتى اكتماله.',
  },
  {
    title: 'تجنيس في السعودية',
    icon: Globe2,
    image: '/images/services/citizenship-doctors.webp',
    description:
      'متابعة معاملات التجنيس للحالات المستوفية للشروط، بما يشمل الكفاءات والمستثمرين وأسر المواطنين والمواليد وفق الأنظمة المعمول بها.',
  },
  {
    title: 'التأشيرات وشؤون الإقامة',
    icon: PlaneTakeoff,
    image: '/images/services/visa-professional.webp',
    description:
      'خدمات التأشيرات المهنية والفردية وتحويل الزيارة إلى إقامة ومتابعة معاملات الجوازات للأفراد والمنشآت بكفاءة ووضوح.',
  },
];

export default function Home() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}/#webpage`,
    url: SITE.url,
    name: 'تصاريح الزواج والتجنيس والتأشيرات في السعودية',
    description: SITE.description,
    inLanguage: 'ar-SA',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#business` },
    primaryImageOfPage: `${SITE.url}${SITE.socialImage}`,
  };

  return (
    <div className="font-sans">
      <JsonLd data={pageJsonLd} />

      <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden text-white md:min-h-[82vh]">
        <Image
          src="/images/sections/hero-saudi-office.webp"
          alt="مكتب ابو محمد المطيري للخدمات والمعاملات الرسمية"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-[18px] bg-white [clip-path:polygon(0_75%,18%_20%,35%_72%,53%_12%,72%_70%,87%_30%,100%_76%,100%_100%,0_100%)]" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6">
          <ScrollReveal direction="up" duration={0.7} className="flex flex-col items-center">
            <div className="relative mb-5 h-[86px] w-[86px] overflow-hidden rounded-full bg-white p-2 shadow-xl ring-1 ring-white/40 sm:h-[104px] sm:w-[104px]">
              <Image src="/images/brand/logo.png" alt="شعار مكتب ابو محمد المطيري" fill sizes="104px" className="object-contain p-2" />
            </div>

            <h1 className="font-display mb-3 text-[34px] font-bold leading-tight text-white sm:text-[43px]">
              مكتب ابو محمد المطيري
            </h1>
            <h2 className="font-display mb-7 max-w-3xl whitespace-pre-line text-[23px] font-semibold leading-relaxed text-white sm:text-[27px]">
              لاستخراج تصاريح الزواج{`\n`}وخدمات التجنيس والتأشيرات بالسعودية
            </h2>

            <a
              href="https://wa.me/966547147102"
              target="_blank"
              rel="noopener noreferrer"
              className="ingaz-button mb-8 inline-flex items-center gap-2 bg-accent-500 px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-accent-600 sm:px-9"
            >
              <MessageCircle className="h-5 w-5" />
              لطلب عرض سعر والتنفيذ الفوري
            </a>

            <h2 className="font-display max-w-3xl text-[21px] font-bold leading-relaxed text-white sm:text-[25px]">
              خدمة خاصة لمعاملات الـ VIP والطلبات الهامة والعاجلة
            </h2>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={0.6} className="mb-10 flex justify-center lg:mb-12">
            <h2 className="section-kicker">ما يميزنا</h2>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} direction="up" delay={index * 0.1} duration={0.6} className="h-full">
                  <article className="ingaz-feature-card flex h-full flex-col items-center px-6 py-10 text-center">
                    <Icon className="mb-5 h-8 w-8 text-primary-500" />
                    <h3 className="mb-4 text-lg font-bold text-black">{feature.title}</h3>
                    <p className="text-[15px] font-normal leading-7 text-black">{feature.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <ScrollReveal direction="right" duration={0.75} className="relative min-h-[360px] sm:min-h-[480px]">
            <Image
              src="/images/sections/about-saudi-team.webp"
              alt="فريق مكتب ابو محمد المطيري"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="ingaz-about-image object-cover"
            />
          </ScrollReveal>

          <ScrollReveal direction="left" duration={0.75}>
            <h2 className="section-kicker mb-6">من نحن</h2>
            <p className="mb-7 text-base font-bold leading-9 text-[#0e0e0e]">
              يقدم مكتب ابو محمد المطيري خدمات متخصصة في متابعة وإنجاز تصاريح الزواج ومعاملات التجنيس والتأشيرات والإقامة داخل المملكة العربية السعودية. نسعى لتسهيل الإجراءات الرسمية بأقل وقت وجهد، مع متابعة واضحة منذ بداية الطلب وحتى اكتماله.
            </p>
            <p className="mb-8 text-base font-normal leading-8 text-[#222]">
              نلتزم بالسرية، الدقة، واحترام الأنظمة المعمول بها، ونوفر تواصلاً مباشرًا لمراجعة حالة المعاملة وتوضيح المتطلبات قبل البدء.
            </p>

            <a href="tel:+966547147102" className="inline-flex items-center gap-4 text-primary-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500">
                <PhoneCall className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-lg">هل لديك استفسار؟</strong>
                <span className="mt-1 block font-display text-lg font-semibold text-black" dir="ltr">+966 54 714 7102</span>
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="ingaz-pattern bg-primary-500 py-[72px] lg:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex justify-center">
            <h2 className="font-display border-r-[3px] border-white pr-3 text-2xl font-extrabold text-white/85 sm:text-3xl">الخدمات</h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.1} duration={0.65} className="h-full">
                  <article className="ingaz-service-card flex h-full flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden bg-primary-50">
                      <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-6 text-center">
                      <Icon className="mb-3 h-7 w-7 text-primary-500" />
                      <h3 className="mb-4 text-xl font-bold text-primary-900">{service.title}</h3>
                      <p className="mb-6 flex-1 text-sm font-normal leading-7 text-black">{service.description}</p>
                      <Link href="/services" className="ingaz-button bg-primary-500 px-6 py-3 text-sm font-bold text-white hover:bg-primary-900">
                        اطلب الخدمة الآن
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[16px] border border-primary-100 bg-white shadow-[0_12px_35px_rgba(0,71,79,.12)] lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-primary-50 px-7 py-10 sm:px-10 lg:px-12">
              <h2 className="font-display mb-5 border-r-4 border-primary-900 pr-3 text-2xl font-semibold leading-relaxed text-primary-900">
                يسعدنا استقبال استفساراتكم وأسئلتكم
              </h2>
              <div className="space-y-5 text-base text-black">
                <a href="tel:+966547147102" className="flex items-center gap-3 hover:text-primary-500" dir="ltr">
                  <PhoneCall className="h-5 w-5 text-primary-500" />
                  +966 54 714 7102
                </a>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary-500" />
                  المملكة العربية السعودية
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-primary-500" />
                  استقبال الطلبات على مدار الأسبوع
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-7 py-10 text-center sm:px-10 lg:px-12">
              <ShieldCheck className="mb-4 h-14 w-14 text-primary-500" />
              <h2 className="font-display mb-4 text-2xl font-bold text-primary-900">تواصل معنا</h2>
              <p className="mb-7 max-w-md text-sm leading-7 text-[#333]">
                أرسل تفاصيل معاملتك عبر واتساب ليتم مراجعتها وتوضيح المتطلبات وخطوات التنفيذ قبل البدء.
              </p>
              <a
                href="https://wa.me/966547147102"
                target="_blank"
                rel="noopener noreferrer"
                className="ingaz-button inline-flex items-center gap-2 bg-primary-500 px-7 py-3.5 font-bold text-white hover:bg-primary-900"
              >
                <MessageCircle className="h-5 w-5" />
                بدء المحادثة الآن
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
