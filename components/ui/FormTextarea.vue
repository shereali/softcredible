<template>
  <div :class="['w-full', className]">
    <label v-if="label" :for="textareaId" class="block text-sm font-medium text-ink-soft mb-1.5">
      {{ label }}
      <span v-if="!!required" class="text-error ml-0.5">*</span>
    </label>
    <textarea
      :id="textareaId"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      :class="[
        'w-full px-4 py-3 bg-surface border rounded-lg text-ink text-base resize-y',
        'placeholder:text-muted',
        'focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent',
        'transition-colors',
        error ? 'border-error' : 'border-border',
        disabledClasses
      ]"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
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
  rows?: number
  className?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const textareaId = `textarea-${Math.random().toString(36).slice(2, 9)}`

const disabledClasses = computed(() => {
  return 'opacity-60 cursor-not-allowed bg-steel-100'
})
</script>
