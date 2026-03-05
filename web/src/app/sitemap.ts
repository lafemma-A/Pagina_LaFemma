import { MetadataRoute } from 'next'
import { PRODUCTS } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.lafemma.dpdns.org';

    const productUrls = PRODUCTS.map((product) => ({
        url: `${baseUrl}/productos/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const routes = ['', '/archivo', '/artesania', '/historia'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    return [...routes, ...productUrls];
}
