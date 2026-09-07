import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/seo';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'مكتب ابو محمد المطيري | تصاريح الزواج والتجنيس والتأشيرات',
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  category: 'خدمات المعاملات الرسمية',
  keywords: [
    'مكتب ابو محمد المطيري',
    'معقب في السعودية',
    'تصريح زواج سعودي من أجنبية',
    'موافقة زواج سعودية من أجنبي',
    'خدمات التجنيس في السعودية',
    'استخراج تأشيرات',
    'تحويل الزيارة إلى إقامة',
    'معاملات الجوازات',
    'الدفع بعد الإنجاز',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: SITE.logo,
        href: SITE.logo,
      },
    ],
    shortcut: SITE.logo,
    apple: SITE.logo,
  },
  openGraph: {
    title: 'مكتب ابو محمد المطيري | خدمات المعاملات الرسمية في السعودية',
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.socialImage,
        width: 1672,
        height: 941,
        alt: 'خدمات المعاملات الرسمية في المملكة العربية السعودية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب ابو محمد المطيري | خدمات المعاملات الرسمية في السعودية',
    description: SITE.description,
    images: [SITE.socialImage],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: 'ar-SA',
        publisher: { '@id': `${SITE.url}/#business` },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE.url}/#business`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}${SITE.logo}`,
        image: `${SITE.url}${SITE.socialImage}`,
        description: SITE.description,
        telephone: SITE.phone,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'الرياض',
          addressRegion: 'منطقة الرياض',
          addressCountry: 'SA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 24.7136,
          longitude: 46.6753,
        },
        areaServed: {
          '@type': 'Country',
          name: 'المملكة العربية السعودية',
        },
        serviceType: [
          'استخراج تصاريح وموافقات الزواج',
          'متابعة معاملات التجنيس',
          'خدمات التأشيرات والإقامة',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phone,
          contactType: 'customer service',
          areaServed: 'SA',
          availableLanguage: 'Arabic',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'خدمات المعاملات الرسمية',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تصاريح وموافقات الزواج' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'خدمات التجنيس النوعية' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'خدمات التأشيرات والمقيمين' } },
          ],
        },
      },
    ],
  };

  return (
    <html lang="ar-SA" dir="rtl" className={cairo.variable}>
      <head>
        <JsonLd data={jsonLd} />
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
