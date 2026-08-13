// https://nuxt.com/docs/api/configuration/nuxt-config
import { solutions } from './data/solutions'
import { industries } from './data/industries'
import { getPublishedCaseStudies } from './data/caseStudies'
import { blogPosts } from './data/blogPosts'
import { getPublishedResources } from './data/resources'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-01',
  devtools: { enabled: true },
  css: [
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/space-grotesk/index.css',
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api'
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/solutions',
        '/solutions/development-partnership',
        ...solutions.map(s => `/solutions/${s.slug}`),
        '/industries',
        ...industries.map(i => `/industries/${i.slug}`),
        '/case-studies',
        ...getPublishedCaseStudies().map(cs => `/case-studies/${cs.slug}`),
        '/blog',
        ...blogPosts.map(p => `/blog/${p.slug}`),
        '/resources',
        ...getPublishedResources().map(r => `/resources/${r.slug}`),
        '/free-assessment',
        '/estimate',
        '/contact',
        '/book-a-call',
        '/about',
        '/process',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
        '/sitemap.xml',
        '/rss.xml'
      ],
      ignore: [
        '/careers'
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Softcredible — We Build Software That Moves Businesses Forward',
      meta: [
        { name: 'description', content: 'Premium B2B software development and business automation company. We build software that moves businesses forward.' },
        { name: 'theme-color', content: '#0B1A2C' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
