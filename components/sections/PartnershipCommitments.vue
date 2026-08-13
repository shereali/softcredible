<template>
  <section class="w-full bg-surface border-y border-border section">
    <Container>
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="text-caption text-accent uppercase tracking-wider mb-3">How the Partnership Works</p>
        <h2 class="text-h2">Built for Serious B2B Collaboration</h2>
        <p class="text-body-lg text-ink-soft">Clear processes, clear ownership, and no surprises.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="item in items"
          :key="item.title"
          className="p-6 h-full flex flex-col"
        >
          <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon" />
            </svg>
          </div>
          <h3 class="text-h4 mb-2">{{ item.title }}</h3>
          <p class="text-sm text-ink-soft leading-relaxed">{{ item.description }}</p>
        </Card>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ title: string; description: string; icon: string }>
}>()
</script>
