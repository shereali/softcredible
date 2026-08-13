<template>
  <section v-if="images.length" class="w-full bg-surface border-y border-border section">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure
          v-for="(image, index) in images"
          :key="image.id"
          class="bg-surface border border-border rounded-xl overflow-hidden shadow-sm"
        >
          <img
            v-if="image.url"
            :src="image.url"
            :alt="image.alt"
            loading="lazy"
            class="w-full h-auto"
          />
          <div v-else class="aspect-video bg-gradient-to-br from-brand-100 to-accent-soft flex items-center justify-center">
            <svg class="w-12 h-12 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <figcaption v-if="image.alt" class="px-6 py-4 text-sm text-ink-soft">
            {{ image.alt }}
          </figcaption>
        </figure>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { CaseStudyImage } from '~/types/caseStudy'

defineProps<{
  images: CaseStudyImage[]
}>()
</script>
