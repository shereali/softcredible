<template>
  <div :class="['w-full', className]">
    <label v-if="label" :for="inputId" class="block text-sm font-medium text-ink-soft mb-1.5">
      {{ label }}
      <span v-if="!!required" class="text-error ml-0.5">*</span>
    </label>
    <input
      :id="inputId"
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="[
        'w-full px-4 py-3 bg-surface border rounded-lg text-ink text-base',
        'placeholder:text-muted',
        'focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent',
        'transition-colors',
        error ? 'border-error' : 'border-border',
        disabledClasses
      ]"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="mt-1.5 text-sm text-error">{{ error }}</p>
    <p v-else-if="hint" class="mt-1.5 text-sm text-muted">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  modelValue?: string | number
  type?: string
  placeholder?: string
  error?: string | null
  hint?: string
  disabled?: boolean
  required?: boolean
  className?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = `input-${Math.random().toString(36).slice(2, 9)}`

const disabledClasses = computed(() => {
  return 'opacity-60 cursor-not-allowed bg-steel-100'
})
</script>
