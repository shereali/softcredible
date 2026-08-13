import { blogPosts } from '../../data/blogPosts'
import { getPublishedResources } from '../../data/resources'

const SITE_URL = 'https://softcredible.com'
const SITE_NAME = 'Softcredible'
const SITE_DESCRIPTION = 'Software insights for business leaders: custom software, SaaS, CRM, ERP, eCommerce, and automation.'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildItem(title: string, link: string, description: string, pubDate: string): string {
  return [
    '  <item>',
    `    <title>${escapeXml(title)}</title>`,
    `    <link>${link}</link>`,
    `    <description>${escapeXml(description)}</description>`,
    `    <pubDate>${new Date(`${pubDate}T00:00:00Z`).toUTCString()}</pubDate>`,
    '    <guid isPermaLink="true">' + link + '</guid>',
    '  </item>'
  ].join('\n')
}

export default defineEventHandler(() => {
  const items = [
    ...blogPosts.map(p => buildItem(p.title, `${SITE_URL}/blog/${p.slug}`, p.excerpt, p.publishedAt)),
    ...getPublishedResources().map(r => buildItem(r.title, `${SITE_URL}/resources/${r.slug}`, r.excerpt, '2026-06-01'))
  ]

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${SITE_NAME} — Blog</title>`,
    `    <link>${SITE_URL}/blog</link>`,
    `    <description>${escapeXml(SITE_DESCRIPTION)}</description>`,
    `    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
    '    <language>en</language>',
    ...items,
    '  </channel>',
    '</rss>'
  ].join('\n')

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
})
