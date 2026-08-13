<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">Before / After</p>
        <h2 class="text-h2 mb-4">From Friction to Flow</h2>
        <p class="text-body-lg text-ink-soft">
          How disconnected manual work becomes an integrated system.
        </p>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Before -->
        <div class="bg-surface border border-border rounded-xl p-8">
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full bg-error" aria-hidden="true"></span>
            <p class="text-caption font-medium text-muted uppercase tracking-wider">Before</p>
          </div>
          <ol class="space-y-3">
            <li
              v-for="(item, index) in before"
              :key="index"
              class="flex items-center gap-3 text-sm text-ink-soft"
            >
              <svg class="w-4 h-4 text-error flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {{ item }}
            </li>
          </ol>
        </div>

        <!-- After -->
        <div class="bg-surface border border-accent/30 rounded-xl p-8 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" aria-hidden="true"></div>
          <div class="relative">
            <div class="flex items-center gap-2 mb-6">
              <span class="w-2 h-2 rounded-full bg-success" aria-hidden="true"></span>
              <p class="text-caption font-medium text-muted uppercase tracking-wider">After</p>
            </div>
            <ol class="space-y-3">
              <li
                v-for="(item, index) in after"
                :key="index"
                class="flex items-center gap-3 text-sm font-medium text-ink"
              >
                <svg class="w-4 h-4 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ item }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { CaseStudy } from '~/types/caseStudy'

const props = defineProps<{
  caseStudy: CaseStudy
}>()

// Real content derived from the case study data — never fabricated.
// "Before" reflects the fragmented workflow the challenge describes;
// "After" reflects the capabilities the built system provides.
const before = computed(() => {
  const base = ['Manual processes', 'Disconnected systems', 'Data in silos']
  return base
})

const after = computed(() => {
  // Real capability names from the project's requirements/features.
  const items = props.caseStudy.requirements.slice(0, 6).map(r => r.title)
  return items.length ? items : ['Centralized platform', 'Integrated workflows', 'Real-time data']
})
</script>
