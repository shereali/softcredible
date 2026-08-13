<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-3xl mx-auto">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">Resources</p>
        <h2 class="text-h2 mb-8">Free Guide</h2>
        <div class="bg-surface border border-border rounded-xl overflow-hidden">
          <div class="p-8 sm:p-10 text-center">
            <div class="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-accent-soft text-accent mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-h3 mb-3">{{ title }}</h3>
            <p class="text-body-lg text-ink-soft mb-8 max-w-md mx-auto">{{ description }}</p>
            <Button variant="primary" size="lg" :to="href">
              Get the Free Checklist
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  href: string
}>()
</script>
