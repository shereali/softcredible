<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-3xl mx-auto">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">Related Services</p>
        <h2 class="text-h2 mb-8">Services That Support This Topic</h2>
        <FeatureGrid :items="items" />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ title: string; description: string; icon?: string; href?: string }>
}>()
</script>
