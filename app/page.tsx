import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Clock3,
  FileBadge,
  Globe,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    title: 'تصريحات وموافقات زواج',
    icon: FileBadge,
    list: [
      'تصريح زواج سعودي من مقيمة',
      'موافقة زواج من خارج المملكة',
      'موافقة زواج من أجنبية (مفتوح)',
      'زواج سعودية من أجنبي مقيم',
    ],
  },
  {
    title: 'خدمات التجنيس الخاصة',
    icon: Globe,
    list: [
      'تجنيس الكفاءات الطبية والهندسية',
      'تجنيس المستثمرين ورجال الأعمال',
      'تجنيس زوجة مواطن / زوج مواطنة',
      'تجنيس أبناء المواطنات والمواليد',
    ],
  },
  {
    title: 'التأشيرات وشؤون الإقامة',
    icon: ShieldCheck,
    list: [
      'شؤون التأشيرات المهنية',
      'إصدار التأشيرات الفردية',
      'تحويل تأشيرة الزيارة إلى إقامة',
      'إدارة معاملات الجوازات',
    ],
  },
];

const features = [
  {
    icon: Clock3,
    title: 'السرعة في الإنجاز',
    description: 'نلتزم بإتمام المعاملة في أقصر وقت ممكن دون تعقيدات، بفضل خبرتنا الطويلة في هذا المجال.',
  },
  {
    icon: Award,
    title: 'خبرة قانونية واسعة',
    description: 'فريق متخصص على دراية بكافة الإجراءات والأنظمة المتعلقة بتصاريح الزواج وخدمات التجنيس.',
  },
  {
    icon: MessageCircle,
    title: 'تنفيذ على مدار الساعة',
    description: 'نحن معك في كل خطوة، عبر الهاتف أو الواتساب، على مدار 24 ساعة.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <section className="relative flex min-h-[calc(100svh-76px)] items-center justify-center overflow-hidden bg-primary-950 text-white lg:min-h-[calc(100svh-88px)]">
        <Image
          src="/images/sections/hero-saudi-office.webp"
          alt="مكتب ابو محمد المطيري"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-950/45 to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-14 text-center sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={0.8} className="flex flex-col items-center">
            <div className="relative mb-7 h-28 w-28 overflow-hidden rounded-full bg-white p-2 shadow-[0_16px_50px_rgba(0,0,0,.25)] ring-4 ring-white/30 sm:h-36 sm:w-36">
              <Image
                src="/images/brand/logo.png"
                alt="شعار مكتب ابو محمد المطيري"
                fill
                sizes="144px"
                className="object-contain p-2"
              />
            </div>

            <span className="mb-4 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-bold text-primary-50 backdrop-blur-md sm:text-sm">
              للخدمات والمعاملات الرسمية في السعودية
            </span>
            <h1 className="mb-5 text-4xl font-black leading-[1.15] text-white drop-shadow-xl sm:text-5xl lg:text-7xl">
              مكتب ابو محمد المطيري
            </h1>
            <p className="mb-9 max-w-3xl text-xl font-bold leading-relaxed text-white/95 drop-shadow-lg sm:text-2xl lg:text-4xl">
              لاستخراج تصاريح الزواج وخدمات التجنيس بالسعودية
            </p>

            <a
              href="https://wa.me/966547147102"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-10 inline-flex min-h-14 w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-accent-500 px-7 py-4 text-base font-extrabold text-white shadow-[0_14px_40px_rgba(80,185,91,.35)] transition hover:-translate-y-0.5 hover:bg-accent-600 sm:w-auto sm:px-11 sm:text-xl"
            >
              <MessageCircle className="h-6 w-6" />
              لطلب عرض سعر والتنفيذ الفوري
            </a>

            <p className="max-w-4xl border-t border-white/20 px-3 pt-8 text-xl font-black leading-relaxed text-white sm:text-2xl lg:text-4xl">
              خدمة خاصة لمعاملات الـ VIP والطلبات الهامة والعاجلة
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute -right-28 top-14 h-72 w-72 rounded-full bg-primary-50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:items-start">
            <ScrollReveal direction="right" duration={0.7}>
              <div className="lg:sticky lg:top-32">
                <span className="section-kicker mb-5">لماذا نحن</span>
                <h2 className="text-4xl font-black leading-tight text-primary-900 sm:text-5xl lg:text-6xl">
                  ما <span className="text-primary-500">يميزنا</span>
                </h2>
                <p className="mt-6 max-w-md text-base font-medium leading-8 text-gray-600">
                  خدمات حكومية متخصصة تُدار باحترافية، مع متابعة واضحة من بداية الطلب وحتى اكتمال المعاملة.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollReveal key={feature.title} direction="up" delay={index * 0.12} duration={0.65}>
                    <div className="group h-full rounded-[28px] border border-primary-100 bg-white p-7 shadow-[0_16px_50px_rgba(8,63,70,.07)] transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_20px_60px_rgba(8,63,70,.12)]">
                      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-500 group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-3 text-xl font-black text-primary-900">{feature.title}</h3>
                      <p className="text-sm font-medium leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-grid bg-primary-50/55 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={0.6} className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="section-kicker mb-5">ماذا نقدم</span>
              <h2 className="text-4xl font-black text-primary-900 sm:text-5xl">
                نخبة <span className="text-primary-500">الخدمات</span>
              </h2>
              <p className="mt-4 text-lg font-medium text-gray-600">باقة من الخدمات الحكومية المتخصصة، تتم إدارتها عبر فريق من الخبراء.</p>
            </div>
            <Link href="/services" className="hidden items-center gap-2 font-extrabold text-primary-700 transition hover:text-primary-500 md:inline-flex">
              عرض كافة الخدمات
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} direction="up" delay={index * 0.12} duration={0.7} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white p-7 shadow-[0_16px_50px_rgba(8,63,70,.08)] ring-1 ring-primary-100 transition duration-300 hover:-translate-y-1 hover:ring-primary-300 sm:p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-6 text-2xl font-black text-primary-900">{service.title}</h3>
                    <ul className="mb-8 flex-grow space-y-4">
                      {service.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-bold leading-6 text-gray-600">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-50 px-5 py-3.5 text-sm font-extrabold text-primary-800 transition group-hover:bg-primary-500 group-hover:text-white">
                      التفاصيل والطلب
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <Link href="/services" className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 font-bold text-white md:hidden">
            عرض كافة الخدمات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <ScrollReveal direction="right" duration={0.8} className="relative">
            <div className="relative min-h-[430px] overflow-hidden rounded-[32px] bg-primary-100 sm:min-h-[560px]">
              <Image
                src="/images/sections/about-saudi-team.webp"
                alt="خدمات مكتب ابو محمد المطيري"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-primary-900 p-6 text-white shadow-2xl sm:left-8 sm:right-auto sm:max-w-xs sm:p-8">
              <ShieldCheck className="mb-3 h-9 w-9 text-accent-400" />
              <h3 className="mb-2 text-xl font-black">موثوقية تامة</h3>
              <p className="text-sm font-medium leading-6 text-primary-100">نلتزم بالأنظمة والقوانين المعمول بها في دوائر المملكة الرسمية بلا استثناء.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" duration={0.8} className="pt-8 lg:pt-0">
            <span className="section-kicker mb-5">من نحن</span>
            <h2 className="mb-6 text-4xl font-black leading-tight text-primary-900 sm:text-5xl">الالتزام والمصداقية هما أساس عملنا.</h2>
            <p className="mb-8 text-lg font-medium leading-8 text-gray-600">
              نحن ندرك حساسية المعاملات الحكومية، ولذلك أسسنا منصتنا على قواعد صلبة من الامتثال والشفافية. فريقنا المتمرس يدير أصعب الطلبات باحترافية وسرية تامة.
            </p>
            <div className="space-y-5">
              <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-5">
                <h3 className="mb-2 text-lg font-black text-primary-900">دفع بعد الإنجاز التام</h3>
                <p className="text-sm font-medium leading-7 text-gray-600">نضمن حقوق عملائنا بشكل كامل، حيث لا يتم استلام أي مستحقات إلا بعد إنهاء الإجراءات وتسليم الوثائق.</p>
              </div>
              <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-5">
                <h3 className="mb-2 text-lg font-black text-primary-900">تغطية لكافة مناطق المملكة</h3>
                <p className="text-sm font-medium leading-7 text-gray-600">نوفر خدماتنا عن بعد بكفاءة عالية أينما كنت داخل المملكة، عبر فريقنا المكون من مندوبين ووُكلاء محترفين.</p>
              </div>
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary-200 px-6 py-3.5 font-extrabold text-primary-800 transition hover:border-primary-500 hover:bg-primary-500 hover:text-white">
              تعرف علينا أكثر
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-primary-900 px-4 py-20 text-center text-white lg:py-24">
        <ScrollReveal direction="up" duration={0.7} className="mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold text-primary-100">استشارة أولية مباشرة</span>
          <h2 className="mb-6 text-4xl font-black leading-tight sm:text-5xl">ابدأ في إنجاز معاملتك اليوم.</h2>
          <p className="mx-auto mb-9 max-w-2xl text-lg font-medium leading-8 text-primary-100">
            تواصل معنا مباشرة عبر القنوات الرسمية وسيتم الرد على طلبك فوراً من قِبل ممثلي المركز.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/966547147102" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-accent-500 px-8 py-4 font-extrabold text-white transition hover:bg-accent-600">
              التواصل المباشر (واتساب)
            </a>
            <a href="tel:+966547147102" className="rounded-xl border border-white/30 px-8 py-4 font-extrabold text-white transition hover:bg-white/10" dir="ltr">
              +966 54 714 7102
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
