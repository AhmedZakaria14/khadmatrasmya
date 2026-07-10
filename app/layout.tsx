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
    default: 'مكتب خدمات ومعاملات رسمية | في السعودية',
    template: '%s | مكتب خدمات ومعاملات رسمية',
  },
  description: 'مكتب متخصص لإنهاء وتسهيل كافة الخدمات والمعاملات الرسمية والحكومية (الجوازات، مكتب العمل، المرور، التجارة) في المملكة العربية السعودية (الرياض، جدة، وغيرها) بسرعة ودقة. الدفع بعد الإنجاز.',
  keywords: ['معقب', 'مكتب خدمات ومعاملات رسمية', 'معاملات رسمية', 'معقب جوازات', 'معقب مكتب العمل', 'معقب مرور', 'مكتب خدمات عامة', 'الرياض', 'جدة', 'السعودية', 'استخراج تأشيرات', 'تصاريح', 'تأسيس شركات', 'الدفع بعد الانجاز'],
  authors: [{ name: 'مكتب خدمات ومعاملات رسمية' }],
  creator: 'مكتب خدمات ومعاملات رسمية',
  publisher: 'مكتب خدمات ومعاملات رسمية',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png',
        href: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png',
      },
    ],
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png',
  },
  openGraph: {
    title: 'مكتب خدمات ومعاملات رسمية | لجميع الدوائر الحكومية',
    description: 'نخدمك في جميع مدن السعودية (الرياض، جدة، الدمام). نراجع الجوازات، مكتب العمل، والمرور. خدمات سريعة ومضمونة والدفع بعد الإنجاز.',
    url: 'https://taqeeb-office.com',
    siteName: 'مكتب خدمات ومعاملات رسمية',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png',
        width: 800,
        height: 800,
        alt: 'شعار مكتب خدمات ومعاملات رسمية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أفضل مكتب معاملات في السعودية | مكتب خدمات ومعاملات رسمية',
    description: 'معاملات الجوازات ومكتب العمل ووزارة التجارة. إنجاز فوري ودفع بعد التأكد من الخدمة.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png'],
  },
  alternates: {
    canonical: 'https://taqeeb-office.com',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'مكتب خدمات ومعاملات رسمية',
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783701426/%D9%85%D9%83%D8%AA%D8%A8_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D9%88%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A7%D8%AA_%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_xijyad.png',
    description: 'مكتب متخصص لإنهاء وتسهيل كافة الخدمات والمعاملات الرسمية والحكومية في السعودية.',
    url: 'https://taqeeb-office.com',
    telephone: '+966574135600',
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
