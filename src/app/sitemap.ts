import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vreaucalcul.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/calculatoare/salariu`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/calculatoare/cheltuieli`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/calculatoare/pensie`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/calculatoare/auto`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/calculatoare/balanta`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/calculatoare/calendar`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/ghiduri/e-factura`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ghiduri/recuperare-taxe`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/ghiduri/investitii`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/despre-noi`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
