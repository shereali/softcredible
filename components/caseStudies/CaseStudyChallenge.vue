<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-3xl">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">The Challenge</p>
        <h2 class="text-h2 mb-6">The Problem That Existed</h2>
        <p class="text-body-lg text-ink-soft leading-relaxed">{{ challenge }}</p>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  challenge: string
}>()
</script>
