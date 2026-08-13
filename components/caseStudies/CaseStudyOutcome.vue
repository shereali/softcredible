<template>
  <section class="w-full bg-surface border-y border-border section">
    <Container>
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">Outcome</p>
        <h2 class="text-h2">What Changed</h2>
        <p class="text-body-lg text-ink-soft">Verified outcomes only. Where numbers are unavailable, we describe the qualitative result.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card v-for="outcome in items" :key="outcome.label" className="p-6 h-full">
          <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-success-soft text-success mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="outcome.type === 'qualitative'"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M5 13l4 4L19 7"
              />
              <path
                v-else
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div v-if="outcome.value" class="text-h1 text-accent mb-2">{{ outcome.value }}</div>
          <h3 class="text-h4 mb-2">{{ outcome.label }}</h3>
          <p v-if="outcome.description" class="text-sm text-ink-soft leading-relaxed">{{ outcome.description }}</p>
          <p v-else class="text-sm text-ink-soft leading-relaxed">Qualitative outcome, described honestly without fabricated metrics.</p>
        </Card>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { CaseStudyOutcome } from '~/types/caseStudy'

defineProps<{
  items: CaseStudyOutcome[]
}>()
</script>
