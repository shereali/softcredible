<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-3xl">
        <Breadcrumb :items="breadcrumb" className="mb-8" />
        <Badge v-if="badge" variant="primary" className="mb-6">
          {{ badge }}
        </Badge>
        <h1 class="text-display mb-6">
          {{ title }}
        </h1>
        <p class="text-body-lg text-ink-soft mb-8 max-w-2xl">
          {{ subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row items-start gap-4">
          <Button variant="primary" size="lg" :to="primaryCta.href">
            {{ primaryCta.label }}
          </Button>
          <Button variant="outline" size="lg" :to="secondaryCta.href">
            {{ secondaryCta.label }}
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  badge?: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  breadcrumb: Array<{ label: string; href?: string; current?: boolean }>
}>()
</script>
