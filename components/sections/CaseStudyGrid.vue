<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      v-for="item in items"
      :key="item.slug"
      :interactive="true"
      className="overflow-hidden h-full flex flex-col"
    >
      <div v-if="item.image" class="aspect-video bg-steel-100 overflow-hidden">
        <div class="w-full h-full bg-gradient-to-br from-brand-100 to-accent-soft flex items-center justify-center">
          <svg class="w-12 h-12 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex items-center gap-2 mb-3">
          <Badge v-if="item.industry" variant="default">{{ item.industry }}</Badge>
          <Badge v-if="item.featured" variant="primary">Featured</Badge>
        </div>
        <h3 class="text-h4 mb-2">{{ item.title }}</h3>
        <p class="text-sm text-ink-soft leading-relaxed mb-4 flex-grow">
          {{ item.summary }}
        </p>
        <div class="flex items-center gap-4 text-xs text-muted mb-4">
          <span v-if="item.client">{{ item.client }}</span>
          <span v-if="item.technologies?.length">{{ item.technologies.slice(0, 3).join(' · ') }}</span>
        </div>
        <NuxtLink
          :to="`/case-studies/${item.slug}`"
          class="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          View Case Study
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    slug: string
    title: string
    summary: string
    image?: string
    industry?: string
    client?: string
    technologies?: string[]
    featured?: boolean
  }>
}>()
</script>
