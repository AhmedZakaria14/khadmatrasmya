import { MetadataRoute } from 'next';
import { servicePages } from '@/lib/service-pages';
import { SITE } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const lastModified = new Date('2026-09-08T00:00:00.000Z');

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${baseUrl}/images/sections/ingaz-main-hero.jpg`,
        `${baseUrl}/images/sections/about-saudi-team.webp`,
        `${baseUrl}/images/brand/logo.png`,
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: servicePages.map((service) => `${baseUrl}${service.image}`),
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}/images/sections/about-saudi-team.webp`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${baseUrl}/services/${encodeURIComponent(service.slug)}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
    images: [`${baseUrl}${service.image}`],
  }));

  return [...corePages, ...serviceEntries];
}
