<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-caption text-accent uppercase tracking-wider mb-3">The Solution</p>
          <h2 class="text-h2 mb-6">How the Software Solved It</h2>
          <p class="text-body-lg text-ink-soft leading-relaxed">{{ solution }}</p>
        </div>
        <div class="bg-surface border border-border rounded-2xl shadow-md p-8">
          <p class="text-caption text-muted uppercase tracking-wider mb-4">Project Type</p>
          <p class="text-h3 mb-6">{{ projectType }}</p>
          <div v-if="technologies.length" class="flex flex-wrap gap-2">
            <span
              v-for="tech in technologies.slice(0, 6)"
              :key="tech"
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-700 border border-brand-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  solution: string
  projectType: string
  technologies: string[]
}>()
</script>
