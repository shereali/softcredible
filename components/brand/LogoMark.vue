<script setup lang="ts">
/**
 * Softcredible icon mark.
 *
 * Abstract modular "S": three architecture blocks — foundation (bottom-left),
 * bridge (center), crown (top-right) — encoded in a 40x40 grid.
 *
 * Variants:
 *  - default: brand gradient (light surfaces)
 *  - mono:    single currentColor (print / monochrome)
 *  - light:   light-on-dark (footer, hero overlays)
 *  - dark:    dark-on-light (alternate light sections)
 */
const props = withDefaults(defineProps<{
  variant?: 'default' | 'mono' | 'light' | 'dark'
  size?: number | string
  class?: string
}>(), {
  variant: 'default',
  size: 40
})

const gradientId = `sc-mark-gradient-${Math.random().toString(36).slice(2, 8)}`

const fill = {
  default: `url(#${gradientId})`,
  mono: 'currentColor',
  light: '#E0EEFA',
  dark: '#0B1A2C'
} as const
</script>

<template>
  <svg
    :class="props.class"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Softcredible"
  >
    <defs>
      <linearGradient
        v-if="props.variant === 'default'"
        :id="gradientId"
        x1="4"
        y1="24"
        x2="36"
        y2="6"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#194A79" />
        <stop offset="0.55" stop-color="#25619B" />
        <stop offset="1" stop-color="#077BD8" />
      </linearGradient>
    </defs>

    <!-- Foundation (bottom-left) -->
    <rect :fill="fill[props.variant]" x="6" y="15" width="14" height="5" rx="2" />
    <!-- Bridge (center, overlapping) -->
    <rect :fill="fill[props.variant]" x="10" y="10" width="14" height="5" rx="2" />
    <!-- Crown (top-right) -->
    <rect :fill="fill[props.variant]" x="20" y="5" width="14" height="5" rx="2" />
  </svg>
</template>
