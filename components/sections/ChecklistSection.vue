<template>
  <section class="w-full section" :class="[background === 'surface' ? 'bg-surface border-y border-border' : 'bg-background']">
    <Container>
      <div v-if="title" class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-h2 mb-4">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-body-lg text-ink-soft">
          {{ subtitle }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex items-start gap-4 bg-surface border border-border rounded-xl p-6"
        >
          <div class="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-success-soft text-success mt-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 class="text-h4 mb-1">{{ item.title }}</h3>
            <p v-if="item.description" class="text-sm text-ink-soft">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  background?: 'default' | 'surface'
  items: Array<{ title: string; description?: string }>
}>(), {
  background: 'default'
})
</script>
