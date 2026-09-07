import type { Metadata } from 'next';

export const SITE = {
  name: 'مكتب ابو محمد المطيري',
  url: 'https://taqeeb-office.com',
  phone: '+966547147102',
  logo: '/images/brand/logo.png',
  socialImage: '/images/sections/hero-saudi-office.webp',
  description:
    'مكتب متخصص في استخراج تصاريح الزواج ومتابعة معاملات التجنيس والتأشيرات والإقامة في المملكة العربية السعودية، مع متابعة واضحة والدفع بعد الإنجاز.',
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const canonical = path === '/' ? SITE.url : `${SITE.url}${path}`;

  return {
    title,
    description,
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
      title: `${title} | ${SITE.name}`,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: 'ar_SA',
      type: 'website',
      images: [
        {
          url: SITE.socialImage,
          width: 1672,
          height: 941,
          alt: 'خدمات المعاملات الرسمية في المملكة العربية السعودية',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE.name}`,
      description,
      images: [SITE.socialImage],
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? SITE.url : `${SITE.url}${item.path}`,
    })),
  };
}
