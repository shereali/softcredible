<template>
  <div
    :class="[
      'bg-surface border border-border rounded-xl shadow-sm',
      'transition-all duration-200',
      { 'hover:shadow-md hover:-translate-y-0.5': interactive },
      className
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  interactive?: boolean
  className?: string
}>()
</script>
