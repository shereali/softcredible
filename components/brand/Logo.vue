<script setup lang="ts">
/**
 * Softcredible logo lockup: icon mark + wordmark.
 */
const props = withDefaults(defineProps<{
  variant?: 'default' | 'mono' | 'light' | 'dark'
  icon?: boolean
  size?: number | string
  class?: string
}>(), {
  variant: 'default',
  icon: false,
  size: 32
})

const wordmarkColor = {
  default: 'text-ink',
  mono: 'text-current',
  light: 'text-white',
  dark: 'text-brand-950'
} as const
</script>

<template>
  <div :class="['inline-flex items-center gap-2.5', props.class]">
    <LogoMark :variant="props.variant" :size="props.size" />
    <span
      v-if="!props.icon"
      :class="[
        'font-display font-medium tracking-tight whitespace-nowrap',
        wordmarkColor[props.variant]
      ]"
      :style="{ fontSize: `calc(${props.size}px * 0.5)` }"
      aria-label="Softcredible"
    >
      SOFTCREDIBLE
    </span>
  </div>
</template>
