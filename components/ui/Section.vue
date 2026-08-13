<template>
  <section
    :class="[
      'w-full',
      paddingClasses,
      backgroundClasses,
      className
    ]"
    v-bind="$attrs"
  >
    <Container :size="containerSize">
      <slot />
    </Container>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  padding?: 'none' | 'sm' | 'md' | 'lg'
  background?: 'default' | 'muted' | 'surface'
  container?: 'default' | 'narrow' | 'wide' | 'full'
  className?: string
}>(), {
  padding: 'md',
  background: 'default',
  container: 'default'
})

const paddingClasses = computed(() => {
  switch (props.padding) {
    case 'none': return ''
    case 'sm': return 'py-8 sm:py-12'
    case 'lg': return 'py-16 sm:py-24 lg:py-32'
    default: return 'py-12 sm:py-16 lg:py-24'
  }
})

const backgroundClasses = computed(() => {
  switch (props.background) {
    case 'muted': return 'bg-steel-100/50'
    case 'surface': return 'bg-surface'
    default: return 'bg-background'
  }
})

const containerSize = computed(() => {
  switch (props.container) {
    case 'narrow': return 'narrow'
    case 'wide': return 'wide'
    case 'full': return 'full'
    default: return 'default'
  }
})
</script>
