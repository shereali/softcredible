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
      <div class="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
        <TrustBadge v-for="tech in items" :key="tech" :label="tech" />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  background?: 'default' | 'surface'
  items: string[]
}>(), {
  background: 'default'
})
</script>
