<template>
  <div class="min-h-screen">
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">Legal</Badge>
          <h1 class="text-h1 mb-4">{{ title }}</h1>
          <p class="text-body-lg text-ink-soft mb-8">Last updated: {{ updated }}</p>
          <div class="space-y-6">
            <div v-for="section in sections" :key="section.heading">
              <h2 class="text-h3 mb-2">{{ section.heading }}</h2>
              <p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-body text-ink-soft leading-relaxed mb-3">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  updated: string
  sections: Array<{ heading: string; paragraphs: string[] }>
}>()
</script>
