<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">Technology</p>
        <h2 class="text-h2 mb-4">Tech Stack</h2>
        <p class="text-body-lg text-ink-soft">The technologies the team used to build and run the platform.</p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
        <TrustBadge v-for="tech in items" :key="tech" :label="tech" />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>
