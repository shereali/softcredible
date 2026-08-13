<template>
  <section class="w-full bg-surface border-y border-border section">
    <Container>
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">Architecture</p>
        <h2 class="text-h2 mb-4">Technical Approach</h2>
        <p class="text-body-lg text-ink-soft">{{ description }}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card v-for="item in items" :key="item.title" className="p-6 h-full">
          <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-h4 mb-2">{{ item.title }}</h3>
          <p class="text-sm text-ink-soft leading-relaxed">{{ item.description }}</p>
        </Card>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { CaseStudyItem } from '~/types/caseStudy'

defineProps<{
  description: string
  items: CaseStudyItem[]
}>()
</script>
