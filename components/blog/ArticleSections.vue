<template>
  <div class="max-w-3xl mx-auto space-y-12">
    <!-- Search intent -->
    <div class="bg-surface border border-border rounded-xl p-6">
      <p class="text-caption text-accent uppercase tracking-wider mb-2">Search Intent</p>
      <p class="text-body text-ink-soft">{{ post.searchIntent }}</p>
    </div>

    <!-- Clear answer -->
    <div class="bg-accent-soft border border-accent/20 rounded-xl p-6">
      <p class="text-caption text-accent uppercase tracking-wider mb-2">The Short Answer</p>
      <p class="text-body-lg text-ink font-medium">{{ post.answer }}</p>
    </div>

    <!-- Intro -->
    <div class="prose-custom">
      <p class="text-body-lg text-ink-soft leading-relaxed">{{ post.intro }}</p>
    </div>

    <!-- Sections -->
    <div
      v-for="section in post.sections"
      :key="section.heading"
      class="space-y-4"
    >
      <h2 class="text-h3">{{ section.heading }}</h2>
      <p
        v-for="paragraph in section.paragraphs"
        :key="paragraph"
        class="text-body text-ink-soft leading-relaxed"
      >
        {{ paragraph }}
      </p>
    </div>

    <!-- Examples -->
    <div v-if="post.examples?.length">
      <h2 class="text-h3 mb-4">Examples</h2>
      <div class="space-y-4">
        <div
          v-for="(example, index) in post.examples"
          :key="index"
          class="flex items-start gap-4 bg-surface border border-border rounded-xl p-6"
        >
          <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent-soft text-accent text-sm font-semibold">
            {{ index + 1 }}
          </span>
          <p class="text-sm text-ink-soft leading-relaxed">{{ example }}</p>
        </div>
      </div>
    </div>

    <!-- Pros / Cons -->
    <div v-if="post.prosCons">
      <h2 class="text-h3 mb-6">Pros and Cons</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-surface border border-border rounded-xl p-6">
          <h3 class="text-h4 mb-4 flex items-center gap-2">
            <span class="w-6 h-6 flex items-center justify-center rounded-full bg-success-soft text-success">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Pros
          </h3>
          <ul class="space-y-3">
            <li v-for="pro in post.prosCons.pros" :key="pro" class="flex items-start gap-2 text-sm text-ink-soft">
              <span class="text-success mt-0.5">+</span>
              <span>{{ pro }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-surface border border-border rounded-xl p-6">
          <h3 class="text-h4 mb-4 flex items-center gap-2">
            <span class="w-6 h-6 flex items-center justify-center rounded-full bg-error-soft text-error">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            Cons
          </h3>
          <ul class="space-y-3">
            <li v-for="con in post.prosCons.cons" :key="con" class="flex items-start gap-2 text-sm text-ink-soft">
              <span class="text-error mt-0.5">–</span>
              <span>{{ con }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

defineProps<{
  post: BlogPost
}>()
</script>
