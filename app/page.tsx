import Image from 'next/image';
import Link from 'next/link';
import {
  Clock3,
  FileBadge,
  Globe2,
  MapPin,
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
      'في المملكة العربية السعودية تمثل إجراءات تصاريح الزواج، وخاصة عند اختلاف جنسية أحد الطرفين، إجراءات دقيقة تتطلب فهم المتطلبات والمستندات ومتابعة الطلب حتى اكتماله. نساعدك على إدارة المعاملة بوضوح وسرعة.',
  },
  {
    title: 'تجنيس في السعودية',
    icon: Globe2,
    image: '/images/services/citizenship-doctors.webp',
    description:
      'عملية التجنيس في السعودية تتطلب فهمًا دقيقًا للإجراءات والشروط. نتابع معاملات الحالات المستوفية للمتطلبات، بما يشمل الكفاءات والمستثمرين وأسر المواطنين والمواليد وفق الأنظمة المعمول بها.',
  },
  {
    title: 'التأشيرات وشؤون الإقامة',
    icon: PlaneTakeoff,
    image: '/images/services/visa-professional.webp',
    description:
      'خدمات التأشيرات المهنية والفردية وتحويل الزيارة إلى إقامة ومتابعة معاملات الجوازات للأفراد والمنشآت، مع مراجعة المتطلبات وتوضيح الخطوات قبل بدء التنفيذ.',
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

      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden text-white md:min-h-[78vh]">
        <Image
          src="/images/sections/hero-saudi-office.webp"
          alt="مكتب ابو محمد المطيري للخدمات والمعاملات الرسمية"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1140px] flex-col items-center px-4 py-12 text-center">
          <ScrollReveal direction="up" duration={0.65} className="flex flex-col items-center">
            <div className="relative mb-4 h-[75px] w-[75px] overflow-hidden rounded-full bg-white">
              <Image src="/images/brand/logo.png" alt="شعار مكتب ابو محمد المطيري" fill sizes="75px" className="object-contain" />
            </div>

            <h1 className="font-display mb-2 text-[34px] font-bold leading-[1.3] text-white md:text-[43px]">
              مكتب ابو محمد المطيري
            </h1>
            <h2 className="font-display mb-6 max-w-3xl whitespace-pre-line text-[23px] font-semibold leading-[1.3] text-white md:text-[28px]">
              لاستخراج تصاريح الزواج{`\n`}وخدمات التجنيس والتأشيرات بالسعودية
            </h2>

            <a
              href="https://wa.me/966547147102"
              target="_blank"
              rel="noopener noreferrer"
              className="ingaz-button mb-7 inline-flex items-center gap-2 bg-accent-500 px-7 py-3.5 text-[15px] font-bold text-white hover:bg-accent-600"
            >
              <MessageCircle className="h-5 w-5" />
              لطلب عرض سعر والتنفيذ الفوري
            </a>

            <h2 className="font-display max-w-3xl text-[23px] font-bold leading-[1.3] text-white md:text-[25px]">
              خدمة خاصة لمعاملات الـ VIP والطلبات الهامة والعاجلة
            </h2>
          </ScrollReveal>
        </div>

        <svg aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-[18px] w-full fill-white" preserveAspectRatio="none" viewBox="0 0 283.5 19.6" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z" opacity=".33" />
          <path d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z" opacity=".33" />
          <path d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z" opacity=".33" />
          <path d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z" />
        </svg>
      </section>

      <section className="bg-white pt-[35px] md:pt-[120px]">
        <div className="ingaz-container">
          <ScrollReveal direction="up" duration={0.55} className="flex justify-center">
            <h2 className="section-kicker">ما يميزنا</h2>
          </ScrollReveal>

          <div className="grid gap-[13px] md:grid-cols-3 md:gap-[2%]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const stagger = index === 1 ? 'mt-3 md:mt-[29px]' : 'mt-3 md:mt-[50px]';
              return (
                <ScrollReveal key={feature.title} direction="up" delay={index * 0.08} duration={0.55} className={`h-full ${stagger}`}>
                  <article className="ingaz-feature-card flex min-h-[220px] h-full flex-col items-center justify-center px-6 py-10 text-center">
                    <Icon className="mb-4 h-8 w-8 text-primary-500" />
                    <h3 className="mb-3 text-[18px] font-bold text-black">{feature.title}</h3>
                    <p className="text-[15px] font-normal leading-7 text-black">{feature.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-[70px] bg-white md:mt-[100px]">
        <div className="ingaz-container grid overflow-hidden lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="right" duration={0.7} className="order-1 flex h-full flex-col justify-center py-8 lg:py-0 lg:pl-11">
            <h2 className="section-kicker mb-6 self-start">من نحن</h2>
            <p className="mb-6 text-[16px] font-bold leading-9 text-[#111]">
              يقدم مكتب ابو محمد المطيري خدمات متخصصة في متابعة وإنجاز تصاريح الزواج ومعاملات التجنيس والتأشيرات والإقامة داخل المملكة العربية السعودية. نسعى لتسهيل الإجراءات الرسمية بأقل وقت وجهد، مع متابعة واضحة منذ بداية الطلب وحتى اكتماله.
            </p>
            <p className="mb-7 text-[16px] font-normal leading-8 text-[#222]">
              نلتزم بالسرية والدقة واحترام الأنظمة المعمول بها، ونوفر تواصلاً مباشرًا لمراجعة حالة المعاملة وتوضيح المتطلبات قبل البدء.
            </p>

            <a href="tel:+966547147102" className="inline-flex items-center gap-4 self-start text-primary-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500">
                <PhoneCall className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-lg">هل لديك استفسار؟</strong>
                <span className="mt-1 block font-display text-lg font-semibold text-black" dir="ltr">+966 54 714 7102</span>
              </span>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left" duration={0.7} className="order-2 relative min-h-[360px] sm:min-h-[480px] lg:min-h-[520px]">
            <Image
              src="/images/sections/about-saudi-team.webp"
              alt="فريق مكتب ابو محمد المطيري"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="ingaz-about-image object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="ingaz-pattern mt-[50px] pt-[72px] pb-[22px] md:pt-[40px] md:pb-[74px]">
        <div className="ingaz-container">
          <div className="mb-[22px] flex justify-center">
            <h2 className="font-display border-r-[3px] border-white pr-[11px] text-[24px] font-extrabold text-white/85 md:text-[32px]">الخدمات</h2>
          </div>

          <div className="grid gap-[28px] md:grid-cols-2 md:gap-[6%]">
            {services.map((service, index) => {
              const Icon = service.icon;
              const centeredThird = index === 2 ? 'md:col-span-2 md:w-[47%] md:justify-self-center' : '';
              return (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.08} duration={0.6} className={`h-full ${centeredThird}`}>
                  <article className="ingaz-service-card flex h-full flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden bg-primary-50">
                      <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 47vw" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col items-center px-6 pb-[22px] pt-5 text-center">
                      <Icon className="mb-3 h-7 w-7 text-primary-500" />
                      <h3 className="font-display mb-4 text-[22px] font-bold text-primary-900">{service.title}</h3>
                      <p className="mb-5 flex-1 text-[15px] font-normal leading-8 text-black">{service.description}</p>
                      <Link href="/services" className="ingaz-button bg-primary-500 px-6 py-3 text-[14px] font-medium text-white hover:bg-primary-900">
                        المزيد من التفاصيل
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-[50px] bg-white pb-12">
        <div className="ingaz-container">
          <div className="mb-9 flex justify-center">
            <h2 className="section-kicker">تواصل معنا</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="pt-3">
              <h2 className="font-display mb-6 text-[24px] font-semibold leading-relaxed text-primary-900">
                يسعدنا استقبال استفساراتكم وأسئلتكم
              </h2>
              <div className="space-y-[19px] text-[20px] font-normal text-[#0f0f0f]">
                <a href="tel:+966547147102" className="flex items-center gap-3 transition hover:text-primary-500" dir="ltr">
                  <PhoneCall className="h-[21px] w-[21px] text-primary-500" />
                  +966 54 714 7102
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-[21px] w-[21px] text-primary-500" />
                  المملكة العربية السعودية
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 className="h-[21px] w-[21px] text-primary-500" />
                  استقبال الطلبات على مدار الأسبوع
                </div>
              </div>

              <a
                href="https://wa.me/966547147102"
                target="_blank"
                rel="noopener noreferrer"
                className="ingaz-button mt-8 inline-flex items-center gap-2 bg-primary-500 px-7 py-3.5 font-bold text-white hover:bg-primary-900"
              >
                <MessageCircle className="h-5 w-5" />
                بدء المحادثة الآن
              </a>
            </div>

            <div className="ingaz-contact-map overflow-hidden rounded-[6px] border border-[#e9e9e9] shadow-[0_4px_18px_rgba(0,0,0,.08)]">
              <iframe
                title="المملكة العربية السعودية"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Saudi%20Arabia&z=5&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
