import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taqeeb-office.com'),
  title: {
    default: 'مكتب ابو محمد المطيري | في السعودية',
    template: '%s | مكتب ابو محمد المطيري',
  },
  description: 'مكتب متخصص لإنهاء وتسهيل كافة الخدمات والمعاملات الرسمية والحكومية (الجوازات، مكتب العمل، المرور، التجارة) في المملكة العربية السعودية (الرياض، جدة، وغيرها) بسرعة ودقة. الدفع بعد الإنجاز.',
  keywords: ['معقب', 'مكتب ابو محمد المطيري', 'معاملات رسمية', 'معقب جوازات', 'معقب مكتب العمل', 'معقب مرور', 'مكتب خدمات عامة', 'الرياض', 'جدة', 'السعودية', 'استخراج تأشيرات', 'تصاريح', 'تأسيس شركات', 'الدفع بعد الانجاز'],
  authors: [{ name: 'مكتب ابو محمد المطيري' }],
  creator: 'مكتب ابو محمد المطيري',
  publisher: 'مكتب ابو محمد المطيري',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/images/brand/logo.png',
        href: '/images/brand/logo.png',
      },
    ],
    shortcut: '/images/brand/logo.png',
    apple: '/images/brand/logo.png',
  },
  openGraph: {
    title: 'مكتب ابو محمد المطيري | لجميع الدوائر الحكومية',
    description: 'نخدمك في جميع مدن السعودية (الرياض، جدة، الدمام). نراجع الجوازات، مكتب العمل، والمرور. خدمات سريعة ومضمونة والدفع بعد الإنجاز.',
    url: 'https://taqeeb-office.com',
    siteName: 'مكتب ابو محمد المطيري',
    images: [
      {
        url: '/images/brand/logo.png',
        width: 800,
        height: 800,
        alt: 'شعار مكتب ابو محمد المطيري',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أفضل مكتب معاملات في السعودية | مكتب ابو محمد المطيري',
    description: 'معاملات الجوازات ومكتب العمل ووزارة التجارة. إنجاز فوري ودفع بعد التأكد من الخدمة.',
    images: ['/images/brand/logo.png'],
  },
  alternates: {
    canonical: 'https://taqeeb-office.com',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'مكتب ابو محمد المطيري',
    image: 'https://taqeeb-office.com/images/brand/logo.png',
    description: 'مكتب متخصص لإنهاء وتسهيل كافة الخدمات والمعاملات الرسمية والحكومية في السعودية.',
    url: 'https://taqeeb-office.com',
    telephone: '+966547147102',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7136',
      longitude: '46.6753',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '00:00',
        closes: '23:59',
      }
    ],
    priceRange: '$$',
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-primary-900 bg-[#FAFAFA] min-h-screen flex flex-col selection:bg-accent-500 selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
