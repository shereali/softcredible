<template>
  <div v-if="caseStudy" class="min-h-screen">
    <CaseStudyHero :case-study="caseStudy" :breadcrumb="breadcrumb" />

    <CaseStudyChallenge :challenge="caseStudy.challenge" />

    <CaseStudyBeforeAfter :case-study="caseStudy" />

    <CaseStudyRequirements :items="caseStudy.requirements" />

    <CaseStudySolution
      :solution="caseStudy.solution"
      :project-type="caseStudy.projectType"
      :technologies="caseStudy.technologies"
    />

    <CaseStudyArchitecture
      :description="caseStudy.architecture.description"
      :items="caseStudy.architecture.items"
    />

    <CaseStudyFeatures :items="caseStudy.features" />

    <CaseStudyGallery :images="caseStudy.images" />

    <CaseStudyOutcome :items="caseStudy.outcome" />

    <CaseStudyTechnology :items="caseStudy.technologies" />

    <!-- Development -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">Development</p>
          <h2 class="text-h2 mb-4">Technology & Implementation</h2>
          <p class="text-body-lg text-ink-soft">{{ caseStudy.development.description }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card v-for="item in caseStudy.development.items" :key="item.title" className="p-6 h-full">
            <h3 class="text-h4 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed">{{ item.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Related case studies -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">Related Case Studies</h2>
          <p class="text-body-lg text-ink-soft">More projects that might be relevant to your work.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <CaseStudyCard v-for="item in related" :key="item.slug" :item="item" />
        </div>
      </Container>
    </section>

    <!-- Solutions used -->
    <FeatureGrid
      v-if="relatedSolutions.length"
      title="Solutions in This Project"
      subtitle="The service areas behind this build."
      :items="relatedSolutions"
      background="surface"
    />

    <CaseStudyCTA />
  </div>
</template>

<script setup lang="ts">
import { getCaseStudyBySlug, getRelatedCaseStudies } from '~/data/caseStudies'
import { getRelatedSolutions } from '~/data/solutions'
import type { CaseStudy } from '~/types/caseStudy'

const route = useRoute()
const { siteUrl } = useSeo()

const caseStudy = computed<CaseStudy | undefined>(() =>
  getCaseStudyBySlug(String(route.params.slug))
)

if (!caseStudy.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
}

const breadcrumb = computed(() => [
  { label: 'Case Studies', href: '/case-studies' },
  { label: caseStudy.value!.title, current: true }
])

const related = computed(() =>
  getRelatedCaseStudies(caseStudy.value!.slug).map(cs => ({
    slug: cs.slug,
    title: cs.title,
    summary: cs.summary,
    industry: cs.industry,
    client: cs.client,
    technologies: cs.technologies.slice(0, 4),
    featured: cs.featured
  }))
)

const relatedSolutions = computed(() =>
  getRelatedSolutions(caseStudy.value!.services).map(s => ({
    title: s.name,
    description: s.summary,
    icon: s.icon,
    href: `/solutions/${s.slug}`
  }))
)

useSeo().setMeta({
  title: caseStudy.value!.seo.title,
  description: caseStudy.value!.seo.description,
  canonical: `${siteUrl}/case-studies/${caseStudy.value!.slug}`
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: caseStudy.value!.title,
        description: caseStudy.value!.seo.description,
        url: `${siteUrl}/case-studies/${caseStudy.value!.slug}`,
        author: { '@type': 'Organization', name: 'Softcredible' },
        publisher: { '@type': 'Organization', name: 'Softcredible' }
      })
    }
  ]
})
</script>
