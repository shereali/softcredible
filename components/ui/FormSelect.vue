<template>
  <div :class="['w-full', className]">
    <label v-if="label" :for="selectId" class="block text-sm font-medium text-ink-soft mb-1.5">
      {{ label }}
      <span v-if="!!required" class="text-error ml-0.5">*</span>
    </label>
    <div class="relative">
      <select
        :id="selectId"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        :class="[
          'w-full px-4 py-3 bg-surface border rounded-lg text-ink text-base appearance-none',
          'focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent',
          'transition-colors cursor-pointer',
          error ? 'border-error' : 'border-border',
          disabledClasses
        ]"
        v-bind="$attrs"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <slot />
      </select>
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <p v-if="error" class="mt-1.5 text-sm text-error">{{ error }}</p>
    <p v-else-if="hint" class="mt-1.5 text-sm text-muted">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  modelValue?: string
  placeholder?: string
  hint?: string
  error?: string | null
  disabled?: boolean
  required?: boolean
  className?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectId = `select-${Math.random().toString(36).slice(2, 9)}`

const disabledClasses = computed(() => {
  return 'opacity-60 cursor-not-allowed bg-steel-100'
})
</script>
