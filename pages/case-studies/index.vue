<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">Case Studies</Badge>
          <h1 class="text-display mb-6">
            Real Projects. Real Software.
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl">
            A look at how we've built software for real businesses: the problems they faced, the systems we delivered, and what changed as a result.
          </p>
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="primary" size="lg" to="/contact">
              Discuss Your Project
            </Button>
            <Button variant="outline" size="lg" to="/solutions">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Featured -->
    <section v-if="featured.length" class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">Featured Work</h2>
          <p class="text-body-lg text-ink-soft">Projects that show the range of what we build.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <CaseStudyCard v-for="item in featured" :key="item.slug" :item="item" />
        </div>
      </Container>
    </section>

    <!-- All case studies -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">All Case Studies</h2>
          <p class="text-body-lg text-ink-soft">Browse the full collection by industry.</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button
            v-for="filter in filters"
            :key="filter.value"
            :variant="activeFilter === filter.value ? 'primary' : 'outline'"
            size="sm"
            class="cursor-pointer"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </Button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard v-for="item in filtered" :key="item.slug" :item="item" />
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { caseStudyCards } from '~/data/caseStudies'
import type { CaseStudyCardData } from '~/types/caseStudy'

const activeFilter = ref('all')

const filters = computed(() => {
  const industries = [...new Set(caseStudyCards.map(cs => cs.industry).filter((i): i is string => Boolean(i)))]
  return [
    { label: 'All', value: 'all' as const },
    ...industries.map(i => ({ label: i, value: i }))
  ]
})

const featured = computed(() => caseStudyCards.filter(cs => cs.featured))

const filtered = computed(() => {
  if (activeFilter.value === 'all') return caseStudyCards
  return caseStudyCards.filter(cs => cs.industry === activeFilter.value)
})

useSeo().setMeta({
  title: 'Case Studies',
  description: 'Real software projects built by Softcredible: the problems clients faced, the systems we delivered, and the outcomes that followed.'
})
</script>
