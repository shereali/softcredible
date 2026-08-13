<template>
  <section class="w-full bg-background section">
    <Container>
      <Breadcrumb :items="breadcrumb" className="mb-8" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="flex items-center gap-2 mb-6">
            <Badge variant="primary">{{ caseStudy.industry }}</Badge>
            <Badge v-if="caseStudy.featured" variant="success">Featured</Badge>
          </div>
          <h1 class="text-display mb-6">{{ caseStudy.title }}</h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-xl">{{ caseStudy.summary }}</p>
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="primary" size="lg" to="/contact">
              Build Something Similar
            </Button>
            <Button variant="outline" size="lg" to="/case-studies">
              All Case Studies
            </Button>
          </div>
        </div>
        <div>
          <div class="bg-surface border border-border rounded-2xl shadow-md p-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p class="text-caption text-muted uppercase tracking-wider mb-1">Client</p>
                <p class="text-h4">{{ caseStudy.client }}</p>
              </div>
              <div>
                <p class="text-caption text-muted uppercase tracking-wider mb-1">Industry</p>
                <NuxtLink :to="`/industries/${caseStudy.industrySlug}`" class="text-h4 text-accent hover:text-accent/80 transition-colors">
                  {{ caseStudy.industry }}
                </NuxtLink>
              </div>
              <div>
                <p class="text-caption text-muted uppercase tracking-wider mb-1">Project Type</p>
                <p class="text-h4">{{ caseStudy.projectType }}</p>
              </div>
              <div>
                <p class="text-caption text-muted uppercase tracking-wider mb-1">Technology</p>
                <p class="text-h4">{{ caseStudy.technologies.slice(0, 3).join(', ') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { CaseStudy } from '~/types/caseStudy'

defineProps<{
  caseStudy: CaseStudy
  breadcrumb: Array<{ label: string; href?: string; current?: boolean }>
}>()
</script>
