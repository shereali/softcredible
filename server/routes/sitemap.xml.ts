import { solutions } from '../../data/solutions'
import { industries } from '../../data/industries'
import { getPublishedCaseStudies } from '../../data/caseStudies'
import { blogPosts } from '../../data/blogPosts'
import { getPublishedResources } from '../../data/resources'

const SITE_URL = 'https://softcredible.com'

function url(path: string, changefreq = 'monthly', priority = 0.7): string {
  return `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

export default defineEventHandler(() => {
  const urls = [
    url('/', 'daily', 1.0),
    url('/solutions', 'weekly', 0.9),
    ...solutions.map(s => url(`/solutions/${s.slug}`, 'monthly', 0.8)),
    url('/solutions/development-partnership', 'monthly', 0.8),
    url('/industries', 'weekly', 0.9),
    ...industries.map(i => url(`/industries/${i.slug}`, 'monthly', 0.8)),
    url('/case-studies', 'weekly', 0.9),
    ...getPublishedCaseStudies().map(cs => url(`/case-studies/${cs.slug}`, 'monthly', 0.8)),
    url('/blog', 'weekly', 0.9),
    ...blogPosts.map(p => url(`/blog/${p.slug}`, 'monthly', 0.8)),
    url('/resources', 'weekly', 0.9),
    ...getPublishedResources().map(r => url(`/resources/${r.slug}`, 'monthly', 0.8)),
    url('/free-assessment', 'monthly', 0.7),
    url('/estimate', 'monthly', 0.7),
    url('/contact', 'monthly', 0.7),
    url('/book-a-call', 'monthly', 0.7),
    url('/about', 'monthly', 0.6),
    url('/process', 'monthly', 0.6)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
})
