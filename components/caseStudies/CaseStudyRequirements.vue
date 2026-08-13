<template>
  <section class="w-full bg-surface border-y border-border section">
    <Container>
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">Requirements</p>
        <h2 class="text-h2">What Needed to Be Built</h2>
        <p class="text-body-lg text-ink-soft">The outcomes the project had to deliver.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex items-start gap-4 bg-background border border-border rounded-xl p-6"
        >
          <div class="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-accent-soft text-accent mt-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 class="text-h4 mb-1">{{ item.title }}</h3>
            <p class="text-sm text-ink-soft">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { CaseStudyItem } from '~/types/caseStudy'

defineProps<{
  items: CaseStudyItem[]
}>()
</script>
