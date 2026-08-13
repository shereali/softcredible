<template>
  <div :class="['w-full mx-auto px-6 sm:px-8 lg:px-10', sizeClasses]" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'default' | 'narrow' | 'wide' | 'full'
}>(), {
  size: 'default'
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'narrow': return 'max-w-3xl'
    case 'wide': return 'max-w-7xl'
    case 'full': return 'max-w-none'
    default: return 'max-w-6xl'
  }
})
</script>
