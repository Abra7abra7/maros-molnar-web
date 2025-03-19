import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*'],
    },
    sitemap: 'https://www.marosmolnar.sk/sitemap.xml', // Replace with your actual domain
  };
}
