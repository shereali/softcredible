<template>
  <span
    :class="[
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
      variantClasses,
      className
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  className?: string
}>(), {
  variant: 'default'
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-brand-100 text-brand-700 border-brand-200'
    case 'success':
      return 'bg-success-soft text-success border-success/20'
    case 'warning':
      return 'bg-warning-soft text-warning border-warning/20'
    case 'error':
      return 'bg-error-soft text-error border-error/20'
    default:
      return 'bg-steel-100 text-ink-soft border-border'
  }
})
</script>
