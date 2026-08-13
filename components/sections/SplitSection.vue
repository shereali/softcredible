<template>
  <section class="w-full section" :class="[background === 'surface' ? 'bg-surface border-y border-border' : 'bg-background']">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-h2 mb-4">
            {{ title }}
          </h2>
          <p class="text-body-lg text-ink-soft mb-6">
            {{ description }}
          </p>
          <div v-if="$slots.default" class="space-y-4">
            <slot />
          </div>
          <div v-if="cta" class="mt-8">
            <Button variant="primary" size="lg" :to="cta.href">
              {{ cta.label }}
            </Button>
          </div>
        </div>
        <div v-if="$slots.media" class="relative">
          <slot name="media" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  background?: 'default' | 'surface'
  cta?: { label: string; href: string }
}>(), {
  background: 'default'
})
</script>
