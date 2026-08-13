<template>
  <div v-if="solution" class="min-h-screen">
    <PageHero
      :badge="solution.name"
      :title="solution.hero.title"
      :subtitle="solution.hero.subtitle"
      :primary-cta="primaryCta"
      :secondary-cta="secondaryCta"
      :breadcrumb="breadcrumb"
    />

    <FeatureGrid
      :title="solution.problem.title"
      :subtitle="solution.problem.subtitle"
      :items="solution.problem.pains"
      background="surface"
    />

    <ChecklistSection
      :title="solution.challenges.title"
      :subtitle="solution.challenges.subtitle"
      :items="solution.challenges.items"
    />

    <SplitSection
      :title="solution.solution.title"
      :description="solution.solution.description"
      :cta="solution.solution.cta"
      background="surface"
    />

    <FeatureGrid
      :title="solution.features.title"
      :subtitle="solution.features.subtitle"
      :items="solution.features.items"
    />

    <UseCaseGrid
      :title="solution.useCases.title"
      :subtitle="solution.useCases.subtitle"
      :items="solution.useCases.items"
      background="surface"
    />

    <TechnologyGrid
      :title="solution.technology.title"
      :subtitle="solution.technology.subtitle"
      :items="solution.technology.items"
    />

    <ProcessSteps
      :title="solution.process.title"
      :subtitle="solution.process.subtitle"
      :items="solution.process.items"
      background="surface"
    />

    <section v-if="caseStudyItems.length" class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Related Case Studies
          </h2>
          <p class="text-body-lg text-ink-soft">
            Real projects where this solution moved the business forward.
          </p>
        </div>
        <CaseStudyGrid :items="caseStudyItems" />
      </Container>
    </section>

    <FaqSection
      title="Frequently Asked Questions"
      :items="solution.faqs"
    />

    <FeatureGrid
      title="Explore Other Solutions"
      subtitle="Continue exploring how we can help you build, connect, and grow."
      :items="relatedSolutions"
    />

    <CtaSection
      title="Ready to Start Your Project?"
      subtitle="Tell us what you're trying to build, improve, automate, or replace. We'll help you understand what the next step should look like."
      :primary-cta="primaryCta"
      :secondary-cta="secondaryCta"
    />
  </div>
</template>

<script setup lang="ts">
import { getSolutionBySlug, getRelatedSolutions } from '~/data/solutions'
import { getCaseStudySummaries } from '~/data/caseStudies'
import type { Solution } from '~/types/solution'

const route = useRoute()
const { siteUrl } = useSeo()

const primaryCta = { label: 'Book a Free Strategy Call', href: '/book-a-call' }
const secondaryCta = { label: 'Request a Project Estimate', href: '/contact' }

const solution = computed<Solution | undefined>(() =>
  getSolutionBySlug(String(route.params.slug))
)

if (!solution.value) {
  throw createError({ statusCode: 404, statusMessage: 'Solution not found' })
}

const breadcrumb = computed(() => [
  { label: 'Solutions', href: '/solutions' },
  { label: solution.value!.name, current: true }
])

const relatedSolutions = computed(() =>
  getRelatedSolutions(solution.value!.relatedSolutionSlugs).map(s => ({
    title: s.name,
    description: s.summary,
    icon: s.icon,
    href: `/solutions/${s.slug}`
  }))
)

const caseStudyItems = computed(() =>
  getCaseStudySummaries(solution.value!.caseStudySlugs)
)

useSeo().setMeta({
  title: solution.value!.seo.title,
  description: solution.value!.seo.description,
  canonical: `${siteUrl}/solutions/${solution.value!.slug}`
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${solution.value!.name} | Softcredible`,
        description: solution.value!.seo.description,
        url: `${siteUrl}/solutions/${solution.value!.slug}`,
        provider: {
          '@type': 'Organization',
          name: 'Softcredible'
        }
      })
    }
  ]
})
</script>
