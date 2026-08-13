<template>
  <NuxtLink
    :to="`/resources/${resource.slug}`"
    class="group flex flex-col h-full bg-surface border border-border rounded-xl shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 overflow-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
  >
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex items-center gap-2 mb-4">
        <Badge variant="primary">{{ typeLabel }}</Badge>
      </div>
      <h3 class="text-h4 mb-2 group-hover:text-accent transition-colors">{{ resource.title }}</h3>
      <p class="text-sm text-ink-soft leading-relaxed mb-4 flex-grow">{{ resource.excerpt }}</p>
      <div class="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <span class="text-xs text-muted">Free download</span>
        <span class="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
          Get It Free
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resource'

const props = defineProps<{
  resource: Resource
}>()

const typeLabel = computed(() => {
  const labels: Record<string, string> = {
    whitepaper: 'Whitepaper',
    ebook: 'eBook',
    guide: 'Guide',
    checklist: 'Checklist',
    template: 'Template',
    tool: 'Tool'
  }
  return labels[props.resource.type] || 'Resource'
})
</script>
