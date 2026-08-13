<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
      'active:scale-[0.98]',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      sizeClasses,
      variantClasses,
      className
    ]"
    v-bind="$attrs"
    :aria-busy="loading ? true : undefined"
    :aria-disabled="isLinkTag && (disabled || loading) ? true : undefined"
    :tabindex="isLinkTag && (disabled || loading) ? -1 : undefined"
    @click="handleClick"
    @keydown.enter="handleLinkKeydown"
    @keydown.space="handleLinkKeydown"
  >
    <svg
      v-if="loading"
      class="w-4 h-4 animate-spin flex-shrink-0"
      fill="none" viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  to?: string
  href?: string
  className?: string
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false
})

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    // Links don't honor the disabled attribute; stop navigation entirely.
    if (isLinkTag.value) event.preventDefault()
    return
  }
  // Track CTA clicks when this Button navigates somewhere (to/href).
  const { trackCta } = useTrack()
  const target = props.to || props.href
  if (target) {
    const label = (event.currentTarget as HTMLElement | null)?.textContent?.trim().slice(0, 60) || target
    trackCta(label, target)
  }
}

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const isLinkTag = computed(() => props.to !== undefined || props.href !== undefined)

function handleLinkKeydown(event: KeyboardEvent) {
  // Links don't support the disabled attribute; block Enter/Space navigation
  // so a disabled link behaves like a disabled button for keyboard users.
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
}

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'px-4 py-2 text-sm rounded-md'
    case 'lg': return 'px-8 py-4 text-lg rounded-xl'
    default: return 'px-6 py-3 text-base rounded-lg'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-secondary text-white hover:bg-secondary/90 shadow-sm'
    case 'outline':
      return 'border-2 border-border bg-transparent text-ink hover:bg-steel-100/50'
    case 'ghost':
      return 'bg-transparent text-ink hover:bg-steel-100/50'
    default:
      return 'bg-accent text-white hover:bg-accent/90 shadow-sm'
  }
})
</script>
