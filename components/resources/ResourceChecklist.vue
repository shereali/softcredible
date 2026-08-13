<template>
  <section class="w-full bg-surface border-y border-border section">
    <Container>
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">The Checklist</p>
          <h2 class="text-h2">25 Questions to Find the Manual Work</h2>
          <p class="text-body-lg text-ink-soft mt-4">
            Answer honestly. Where the answer is yes, note how much time it costs each week.
          </p>
        </div>
        <ol class="space-y-3">
          <li
            v-for="(question, index) in questions"
            :key="question.id"
            class="flex items-start gap-4 bg-background border border-border rounded-xl p-5"
          >
            <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent-soft text-accent text-sm font-semibold">
              {{ index + 1 }}
            </span>
            <p class="text-sm text-ink leading-relaxed">{{ question.question }}</p>
          </li>
        </ol>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { ResourceChecklistQuestion } from '~/types/resource'

defineProps<{
  questions: ResourceChecklistQuestion[]
}>()
</script>
