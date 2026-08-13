<template>
  <Transition
    appear
    enter-active-class="transition-all duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
  >
    <div class="bg-surface border border-border rounded-xl shadow-sm p-8 sm:p-10 text-center">
    <div class="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-success-soft text-success mb-6">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h2 class="text-h2 mb-3">{{ title }}</h2>
    <p class="text-body-lg text-ink-soft mb-8 max-w-xl mx-auto">{{ message }}</p>
    <div v-if="steps.length" class="text-left max-w-md mx-auto mb-8">
      <ol class="space-y-4">
        <li v-for="(step, index) in steps" :key="index" class="flex items-start gap-4">
          <span class="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-accent-soft text-accent text-sm font-semibold">
            {{ index + 1 }}
          </span>
          <div>
            <p class="text-sm font-medium text-ink">{{ step.title }}</p>
            <p v-if="step.description" class="text-sm text-ink-soft">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button variant="primary" size="lg" :to="primaryCta.href">
        {{ primaryCta.label }}
      </Button>
      <Button v-if="secondaryCta" variant="outline" size="lg" :to="secondaryCta.href">
        {{ secondaryCta.label }}
      </Button>
    </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  message: string
  steps?: Array<{ title: string; description?: string }>
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}>(), {
  steps: () => []
})
</script>
