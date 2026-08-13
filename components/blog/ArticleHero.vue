<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-3xl mx-auto">
        <Breadcrumb :items="breadcrumb" className="mb-8" />
        <div class="flex items-center gap-2 mb-4">
          <Badge variant="primary">{{ post.category }}</Badge>
          <span class="text-sm text-muted">{{ readingTime }} min read</span>
        </div>
        <h1 class="text-h1 mb-6">{{ post.title }}</h1>
        <p class="text-body-lg text-ink-soft mb-6">{{ post.excerpt }}</p>
        <div class="flex items-center gap-3 text-sm text-muted">
          <span>Softcredible</span>
          <span aria-hidden="true">·</span>
          <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

const props = defineProps<{
  post: BlogPost
  breadcrumb: Array<{ label: string; href?: string; current?: boolean }>
}>()

const readingTime = computed(() => props.post.readingTime)

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`)
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date)
}
</script>
