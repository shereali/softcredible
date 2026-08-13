<template>
  <div v-if="post" class="min-h-screen">
    <ArticleHero :post="post" :breadcrumb="breadcrumb" />

    <section class="w-full bg-background">
      <Container>
        <ArticleSections :post="post" />
      </Container>
    </section>

    <!-- FAQ -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">FAQ</p>
          <h2 class="text-h2 mb-8">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div
              v-for="faq in post.faqs"
              :key="faq.id"
              class="border border-border rounded-lg overflow-hidden"
            >
              <button
                type="button"
                :aria-expanded="openFaq === faq.id"
                :aria-controls="`article-faq-panel-${faq.id}`"
                class="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-inset transition-colors hover:bg-steel-100/50"
                @click="openFaq = openFaq === faq.id ? null : faq.id"
              >
                <span class="text-sm font-medium text-ink">{{ faq.title }}</span>
                <svg
                  class="w-5 h-5 text-muted transition-transform duration-200 flex-shrink-0 ml-4"
                  :class="{ 'rotate-180': openFaq === faq.id }"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <div
                  v-if="openFaq === faq.id"
                  :id="`article-faq-panel-${faq.id}`"
                  role="region"
                  :aria-label="faq.title"
                  class="px-6 pb-4 text-sm text-ink-soft leading-relaxed"
                >
                  {{ faq.content }}
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Related posts -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">Related Articles</h2>
          <p class="text-body-lg text-ink-soft">Continue exploring the topic.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <BlogCard v-for="related in relatedPosts" :key="related.slug" :post="related" />
        </div>
      </Container>
    </section>

    <!-- Related services -->
    <ArticleServices :items="relatedServices" />

    <!-- Lead magnet -->
    <ArticleLeadMagnet
      title="The Business Automation Opportunity Checklist"
      description="25 questions to identify where your business loses time through manual processes. Free download."
      href="/resources/business-automation-opportunity-checklist"
    />

    <!-- CTA -->
    <CtaSection
      title="Have a Software Question?"
      subtitle="Tell us what you're trying to build, improve, or replace. We'll help you understand the next step."
      :primary-cta="{ label: 'Discuss Your Project', href: '/contact' }"
      :secondary-cta="{ label: 'Book a Free Strategy Call', href: '/book-a-call' }"
    />
  </div>
</template>

<script setup lang="ts">
import { getBlogPostBySlug, getRelatedPosts } from '~/data/blogPosts'
import { getRelatedSolutions } from '~/data/solutions'
import type { BlogPost } from '~/types/blog'

const route = useRoute()
const { siteUrl } = useSeo()

const post = computed<BlogPost | undefined>(() =>
  getBlogPostBySlug(String(route.params.slug))
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const openFaq = ref<string | null>(null)

const breadcrumb = computed(() => [
  { label: 'Blog', href: '/blog' },
  { label: post.value!.category, href: `/blog?category=${post.value!.categorySlug}` },
  { label: post.value!.title, current: true }
])

const relatedPosts = computed(() => getRelatedPosts(post.value!.slug))

const relatedServices = computed(() =>
  getRelatedSolutions(post.value!.relatedServiceSlugs).map(s => ({
    title: s.name,
    description: s.summary,
    icon: s.icon,
    href: `/solutions/${s.slug}`
  }))
)

useSeo().setMeta({
  title: post.value!.seo.title,
  description: post.value!.seo.description,
  canonical: `${siteUrl}/blog/${post.value!.slug}`
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.value!.title,
        description: post.value!.seo.description,
        datePublished: post.value!.publishedAt,
        url: `${siteUrl}/blog/${post.value!.slug}`,
        author: { '@type': 'Organization', name: 'Softcredible' },
        publisher: { '@type': 'Organization', name: 'Softcredible' },
        mainEntityOfPage: `${siteUrl}/blog/${post.value!.slug}`
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 2, name: post.value!.category, item: `${siteUrl}/blog?category=${post.value!.categorySlug}` },
          { '@type': 'ListItem', position: 3, name: post.value!.title, item: `${siteUrl}/blog/${post.value!.slug}` }
        ]
      })
    }
  ]
})
</script>
