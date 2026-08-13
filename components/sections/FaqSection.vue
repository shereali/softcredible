<template>
  <section class="w-full section" :class="[background === 'surface' ? 'bg-surface border-y border-border' : 'bg-background']">
    <Container>
      <div v-if="title" class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-h2 mb-4">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-body-lg text-ink-soft">
          {{ subtitle }}
        </p>
      </div>
      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="border border-border rounded-lg overflow-hidden"
          >
            <button
              type="button"
              :aria-expanded="openId === item.id"
              :aria-controls="`faq-panel-${item.id}`"
              :class="[
                'w-full flex items-center justify-between px-6 py-4 text-left',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-inset',
                'transition-colors hover:bg-steel-100/50',
                { 'bg-steel-100/30': openId === item.id }
              ]"
              @click="toggle(item.id)"
            >
              <span class="text-sm font-medium text-ink">{{ item.title }}</span>
              <svg
                class="w-5 h-5 text-muted transition-transform duration-200 flex-shrink-0 ml-4"
                :class="{ 'rotate-180': openId === item.id }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <TransitionRoot
              :show="openId === item.id"
              enter="transition-all duration-300 ease-out"
              enter-from="opacity-0 -translate-y-1"
              enter-to="opacity-100 translate-y-0"
              leave="transition-all duration-200 ease-in"
              leave-from="opacity-100 translate-y-0"
              leave-to="opacity-0 -translate-y-1"
            >
              <div
                :id="`faq-panel-${item.id}`"
                role="region"
                :aria-label="item.title"
                class="px-6 pb-4 text-sm text-ink-soft leading-relaxed"
              >
                {{ item.content }}
              </div>
            </TransitionRoot>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  background?: 'default' | 'surface'
  items: Array<{ id: string; title: string; content: string }>
}>(), {
  background: 'default'
})

const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>
