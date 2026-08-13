<template>
  <div class="bg-white border border-border rounded-xl shadow-sm p-5">
    <p class="text-caption text-muted uppercase tracking-wider mb-2">{{ label }}</p>
    <p
      class="text-h3"
      :class="{
        'text-success': tone === 'success',
        'text-error': tone === 'error',
        'text-ink': !tone
      }"
    >
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  value: string
  tone?: 'success' | 'error'
}>(), {
  tone: undefined
})
</script>
