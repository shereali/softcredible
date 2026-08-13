<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-md border transition-colors duration-200 whitespace-nowrap',
      'bg-surface border-border text-ink-soft',
      'hover:border-accent/50 hover:text-ink',
      className
    ]"
  >
    <svg class="w-3 h-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <span class="text-xs font-medium tracking-wide">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  className?: string
}>()
</script>
