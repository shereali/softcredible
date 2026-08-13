<template>
  <div v-if="resource" class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <Breadcrumb :items="breadcrumb" className="mb-8 justify-center" />
          <Badge variant="primary" className="mb-6">{{ typeLabel }}</Badge>
          <h1 class="text-display mb-6">{{ resource.title }}</h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl mx-auto">{{ resource.excerpt }}</p>
          <div class="flex items-center justify-center gap-3 text-sm text-muted">
            <span class="inline-flex items-center gap-2">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Free download
            </span>
            <span v-if="resource.checklist?.length" class="inline-flex items-center gap-2">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {{ resource.checklist.length }} questions
            </span>
          </div>
        </div>
      </Container>
    </section>

    <!-- Intro + sections -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto space-y-6">
          <p class="text-body-lg text-ink-soft leading-relaxed">{{ resource.intro }}</p>
          <div v-for="section in resource.sections" :key="section.heading" class="space-y-3">
            <h2 class="text-h3">{{ section.heading }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-body text-ink-soft leading-relaxed">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- The checklist -->
    <ResourceChecklist v-if="resource.checklist?.length" :questions="resource.checklist" />

    <!-- Gated download -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-2xl mx-auto text-center mb-12">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">Download</p>
          <h2 class="text-h2 mb-4">Get the Free Checklist</h2>
          <p class="text-body-lg text-ink-soft">
            Enter your details and we'll email you the full checklist.
          </p>
        </div>
        <ResourceDownloadForm :resource-slug="resource.slug" />
      </Container>
    </section>

    <!-- Related -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">Related Articles</h2>
          <p class="text-body-lg text-ink-soft">Dive deeper into automation and business software.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <BlogCard v-for="post in relatedPosts" :key="post.slug" :post="post" />
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <CtaSection
      title="Ready to Act on What You Find?"
      subtitle="Tell us about the manual processes you discovered. We'll help you understand the highest-payback automation."
      :primary-cta="{ label: 'Discuss Your Project', href: '/contact' }"
      :secondary-cta="{ label: 'Book a Free Strategy Call', href: '/book-a-call' }"
    />
  </div>
</template>

<script setup lang="ts">
import { getResourceBySlug } from '~/data/resources'
import { blogPosts } from '~/data/blogPosts'
import type { Resource } from '~/types/resource'

const route = useRoute()
const { siteUrl } = useSeo()

const resource = computed<Resource | undefined>(() =>
  getResourceBySlug(String(route.params.slug))
)

if (!resource.value) {
  throw createError({ statusCode: 404, statusMessage: 'Resource not found' })
}

const typeLabel = computed(() => {
  const labels: Record<string, string> = {
    whitepaper: 'Whitepaper',
    ebook: 'eBook',
    guide: 'Guide',
    checklist: 'Checklist',
    template: 'Template',
    tool: 'Tool'
  }
  return labels[resource.value!.type] || 'Resource'
})

const breadcrumb = computed(() => [
  { label: 'Resources', href: '/resources' },
  { label: resource.value!.title, current: true }
])

const relatedPosts = blogPosts.slice(0, 2)

useSeo().setMeta({
  title: resource.value!.seo.title,
  description: resource.value!.seo.description,
  canonical: `${siteUrl}/resources/${resource.value!.slug}`
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: resource.value!.title,
        description: resource.value!.seo.description,
        url: `${siteUrl}/resources/${resource.value!.slug}`,
        author: { '@type': 'Organization', name: 'Softcredible' },
        publisher: { '@type': 'Organization', name: 'Softcredible' },
        mainEntityOfPage: `${siteUrl}/resources/${resource.value!.slug}`
      })
    }
  ]
})
</script>
