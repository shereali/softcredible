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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="item in items"
          :key="item.title"
          :interactive="!!item.href"
          className="p-6 h-full flex flex-col"
        >
          <div v-if="item.icon" class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon" />
            </svg>
          </div>
          <h3 class="text-h4 mb-2">{{ item.title }}</h3>
          <p class="text-sm text-ink-soft leading-relaxed flex-grow">{{ item.description }}</p>
          <NuxtLink
            v-if="item.href"
            :to="item.href"
            class="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 mt-4 transition-colors"
          >
            Learn more
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </Card>
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
    title: string
    description: string
    icon?: string
    href?: string
  }>
}>(), {
  background: 'default'
})
</script>
