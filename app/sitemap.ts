import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taqeeb-office.com';
  const lastModified = new Date('2026-09-07T00:00:00.000Z');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${baseUrl}/images/sections/hero-saudi-office.webp`,
        `${baseUrl}/images/sections/about-saudi-team.webp`,
        `${baseUrl}/images/brand/logo.png`,
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [
        'marriage-resident.webp',
        'marriage-nonresident.webp',
        'marriage-open-approval.webp',
        'marriage-saudi-woman.webp',
        'citizenship-doctors.webp',
        'citizenship-investors.webp',
        'citizenship-wife.webp',
        'citizenship-children.webp',
        'visa-professional.webp',
        'visa-individual.webp',
        'visit-to-residency.webp',
        'resident-husband-approval.webp',
      ].map((image) => `${baseUrl}/images/services/${image}`),
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
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
