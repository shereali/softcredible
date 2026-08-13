<template>
  <div class="flex items-start gap-3">
    <div class="flex items-center relative">
      <!-- Visual checkbox (20px); the ::before expands the tap target to 44px -->
      <input
        :id="id"
        type="checkbox"
        v-model="checked"
        class="peer relative w-5 h-5 shrink-0 rounded border-border bg-surface text-accent focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-2 cursor-pointer before:absolute before:-inset-3 before:content-[''] before:rounded-lg"
      />
    </div>
    <label :for="id" class="text-sm text-ink-soft cursor-pointer select-none">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
const checked = defineModel<boolean>({ default: false })

const props = defineProps<{
  id: string
}>()
</script>
