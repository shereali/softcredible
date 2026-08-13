<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="item in items" :key="item.label" class="text-center">
          <div class="text-h1 font-semibold text-accent mb-2">
            {{ item.value }}
          </div>
          <div class="text-sm text-ink-soft">
            {{ item.label }}
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    label: string
    value: string
  }>
}>()
</script>
