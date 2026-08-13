<template>
  <div v-if="industry" class="min-h-screen">
    <PageHero
      :badge="industry.name"
      :title="industry.hero.title"
      :subtitle="industry.hero.subtitle"
      :primary-cta="primaryCta"
      :secondary-cta="secondaryCta"
      :breadcrumb="breadcrumb"
    />

    <ChecklistSection
      :title="industry.challenges.title"
      :subtitle="industry.challenges.subtitle"
      :items="industry.challenges.items"
      background="surface"
    />

    <FeatureGrid
      :title="industry.workflows.title"
      :subtitle="industry.workflows.subtitle"
      :items="industry.workflows.items"
    />

    <FeatureGrid
      :title="industry.opportunities.title"
      :subtitle="industry.opportunities.subtitle"
      :items="industry.opportunities.items"
      background="surface"
    />

    <FeatureGrid
      :title="industry.solutions.title"
      :subtitle="industry.solutions.subtitle"
      :items="industry.solutions.items"
    />

    <FeatureGrid
      :title="industry.features.title"
      :subtitle="industry.features.subtitle"
      :items="industry.features.items"
      background="surface"
    />

    <TechnologyGrid
      :title="industry.integrations.title"
      :subtitle="industry.integrations.subtitle"
      :items="industry.integrations.items"
    />

    <section v-if="caseStudyItems.length" class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Related Case Studies
          </h2>
          <p class="text-body-lg text-ink-soft">
            Real projects where this industry's workflows moved forward.
          </p>
        </div>
        <CaseStudyGrid :items="caseStudyItems" />
      </Container>
    </section>

    <FaqSection
      title="Frequently Asked Questions"
      :items="industry.faqs"
    />

    <FeatureGrid
      title="Explore Other Industries"
      subtitle="Continue exploring how we build software for different industries."
      :items="relatedIndustries"
      background="surface"
    />

    <FeatureGrid
      title="Solutions Often Used Here"
      subtitle="The service areas we typically pair with this industry's workflows."
      :items="relatedSolutions"
    />

    <CtaSection
      title="Discuss Your Project"
      subtitle="Tell us how your industry works and what you're trying to build, improve, or replace. We'll help you understand what the next step should look like."
      :primary-cta="primaryCta"
      :secondary-cta="secondaryCta"
    />
  </div>
</template>

<script setup lang="ts">
import { getIndustryBySlug, getRelatedIndustries } from '~/data/industries'
import { getRelatedSolutions } from '~/data/solutions'
import { getCaseStudySummaries } from '~/data/caseStudies'
import type { Industry } from '~/types/industry'

const route = useRoute()
const { siteUrl } = useSeo()

const primaryCta = { label: 'Discuss Your Project', href: '/contact' }
const secondaryCta = { label: 'Request a Project Estimate', href: '/contact' }

const industry = computed<Industry | undefined>(() =>
  getIndustryBySlug(String(route.params.slug))
)

if (!industry.value) {
  throw createError({ statusCode: 404, statusMessage: 'Industry not found' })
}

const breadcrumb = computed(() => [
  { label: 'Industries', href: '/industries' },
  { label: industry.value!.name, current: true }
])

const relatedIndustries = computed(() =>
  getRelatedIndustries(industry.value!.relatedIndustrySlugs).map(i => ({
    title: i.name,
    description: i.summary,
    icon: i.icon,
    href: `/industries/${i.slug}`
  }))
)

const relatedSolutions = computed(() =>
  getRelatedSolutions(industry.value!.relatedSolutionSlugs).map(s => ({
    title: s.name,
    description: s.summary,
    icon: s.icon,
    href: `/solutions/${s.slug}`
  }))
)

const caseStudyItems = computed(() =>
  getCaseStudySummaries(industry.value!.caseStudySlugs)
)

useSeo().setMeta({
  title: industry.value!.seo.title,
  description: industry.value!.seo.description,
  canonical: `${siteUrl}/industries/${industry.value!.slug}`
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${industry.value!.name} Software Development | Softcredible`,
        description: industry.value!.seo.description,
        url: `${siteUrl}/industries/${industry.value!.slug}`,
        provider: {
          '@type': 'Organization',
          name: 'Softcredible'
        }
      })
    }
  ]
})
</script>
