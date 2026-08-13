<template>
  <nav :class="['flex items-center gap-2 text-sm', className]" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <span v-if="index > 0" class="text-muted" aria-hidden="true">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <component
        :is="item.current ? 'span' : 'NuxtLink'"
        :href="item.href"
        :class="[
          'transition-colors',
          item.current
            ? 'text-ink font-medium cursor-default'
            : 'text-muted hover:text-ink'
        ]"
        :aria-current="item.current ? 'page' : undefined"
      >
        {{ item.label }}
      </component>
    </template>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; href?: string; current?: boolean }>
  className?: string
}>()
</script>
