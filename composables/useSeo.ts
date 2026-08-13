export function useSeo() {
  const siteName = 'Softcredible'
  const siteUrl = 'https://softcredible.com'
  const defaultTitle = 'Softcredible — We Build Software That Moves Businesses Forward'
  const defaultDescription = 'Premium B2B software development and business automation company. Custom web applications, SaaS, CRM, ERP, and AI automation.'

  function setMeta(meta: {
    title?: string
    description?: string
    image?: string
    canonical?: string
    noIndex?: boolean
  }) {
    const title = meta.title ? `${meta.title} | ${siteName}` : defaultTitle
    const description = meta.description || defaultDescription
    const image = meta.image || `${siteUrl}/og-image.jpg`
    const canonical = meta.canonical || `${siteUrl}${useRoute().path}`

    useHead({
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: canonical },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        ...(meta.noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : [])
      ],
      link: [
        { rel: 'canonical', href: canonical }
      ]
    })
  }

  return { setMeta, siteName, siteUrl, defaultTitle, defaultDescription }
}
