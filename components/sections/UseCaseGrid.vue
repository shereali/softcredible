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
        <Card v-for="item in items" :key="item.title" className="p-6 h-full">
          <Badge v-if="item.audience" variant="primary" className="mb-3">
            {{ item.audience }}
          </Badge>
          <h3 class="text-h4 mb-2">{{ item.title }}</h3>
          <p class="text-sm text-ink-soft leading-relaxed">{{ item.description }}</p>
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
  items: Array<{ title: string; description: string; audience?: string }>
}>(), {
  background: 'default'
})
</script>
