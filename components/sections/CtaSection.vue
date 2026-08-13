<template>
  <section class="w-full bg-surface border-y border-border">
    <Container>
      <div class="py-12 sm:py-16">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-h2 mb-4">
            {{ title }}
          </h2>
          <p class="text-body-lg text-ink-soft mb-8">
            {{ subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" :to="primaryCta.href">
              {{ primaryCta.label }}
            </Button>
            <Button v-if="secondaryCta" variant="outline" size="lg" :to="secondaryCta.href">
              {{ secondaryCta.label }}
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
  subtitle?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}>()
</script>
