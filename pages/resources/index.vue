<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">Resources</Badge>
          <h1 class="text-display mb-6">
            Free Guides and Checklists
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl">
            Practical tools to help you find where your business loses time and what software should be doing instead.
          </p>
        </div>
      </Container>
    </section>

    <!-- Resources grid -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard v-for="resource in resources" :key="resource.slug" :resource="resource" />
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getPublishedResources } from '~/data/resources'

const resources = getPublishedResources()

useSeo().setMeta({
  title: 'Resources',
  description: 'Free guides and checklists from Softcredible, including the Business Automation Opportunity Checklist: 25 questions to find manual work.'
})
</script>
