import ServicesClient from './ServicesClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata, SITE } from '@/lib/seo';
import { servicePages } from '@/lib/service-pages';

export const metadata = createPageMetadata({
  title: 'خدمات تصاريح الزواج والتجنيس والتأشيرات',
  description: 'اطلع على خدمات استخراج تصاريح وموافقات الزواج، متابعة معاملات التجنيس، والتأشيرات والإقامة للأفراد والمؤسسات في جميع مناطق السعودية.',
  path: '/services',
});

export default function ServicesPage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'خدمات مكتب ابو محمد المطيري',
    numberOfItems: servicePages.length,
    itemListElement: servicePages.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.metaDescription,
        url: `${SITE.url}/services/${encodeURIComponent(service.slug)}`,
        provider: { '@id': `${SITE.url}/#business` },
        areaServed: 'المملكة العربية السعودية',
        image: `${SITE.url}${service.image}`,
      },
    })),
  };

  return (
    <div className="ingaz-pattern min-h-screen bg-primary-500 py-14 font-sans lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'الرئيسية', path: '/' }, { name: 'الخدمات', path: '/services' }]} />
        <JsonLd data={servicesJsonLd} />
        <ServicesClient />
      </div>
    </div>
  );
}
