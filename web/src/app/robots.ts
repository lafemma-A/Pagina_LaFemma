import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/checkout', '/private/'],
        },
        sitemap: 'https://www.lafemma.dpdns.org/sitemap.xml',
    }
}
