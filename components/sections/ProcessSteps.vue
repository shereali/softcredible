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
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        <div
          v-for="(step, index) in items"
          :key="step.id"
          class="text-center"
        >
          <div class="text-h1 font-semibold text-accent mb-2">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <h3 class="text-h4 mb-1">{{ step.title }}</h3>
          <p class="text-sm text-ink-soft">
            {{ step.description }}
          </p>
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
  items: Array<{
    id: string
    title: string
    description: string
  }>
}>(), {
  background: 'default'
})
</script>
