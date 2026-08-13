<template>
  <header class="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
    <Container>
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="Softcredible Home">
          <Logo :size="32" />
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="text-sm font-medium text-ink-soft hover:text-ink transition-colors py-2 inline-flex items-center"
            :class="{ 'text-ink': route.path === item.href }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden lg:flex items-center gap-2">
          <NuxtLink
            to="/estimate"
            class="text-sm font-medium text-ink-soft hover:text-ink transition-colors px-3 py-2 inline-flex items-center"
          >
            Estimate
          </NuxtLink>
          <NuxtLink
            to="/free-assessment"
            class="text-sm font-medium text-ink-soft hover:text-ink transition-colors px-3 py-2 inline-flex items-center"
          >
            Free Assessment
          </NuxtLink>
          <NuxtLink
            to="/book-a-call"
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
          >
            Book a Free Strategy Call
          </NuxtLink>
        </div>

        <button
          type="button"
          class="lg:hidden p-2 -mr-2 text-ink-soft hover:text-ink"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
          :aria-controls="'mobile-menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Container>

    <!-- Mobile Navigation -->
    <TransitionRoot
      :show="mobileMenuOpen"
      enter="transition-all duration-300 ease-out"
      enter-from="opacity-0 -translate-y-1"
      enter-to="opacity-100 translate-y-0"
      leave="transition-all duration-200 ease-in"
      leave-from="opacity-100 translate-y-0"
      leave-to="opacity-0 -translate-y-1"
      @after-enter="onMenuEnter"
    >
      <div ref="mobileMenuRef" id="mobile-menu" class="lg:hidden border-t border-border bg-surface" @keydown="onMenuKeydown">
        <Container>
          <nav class="py-6 space-y-4" aria-label="Mobile navigation">
            <NuxtLink
              v-for="item in navItems"
              :key="item.href"
              :to="item.href"
              class="block text-base font-medium text-ink-soft hover:text-ink transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            <div class="pt-4 border-t border-border space-y-3">
              <NuxtLink
                to="/estimate"
                class="block text-base font-medium text-ink-soft hover:text-ink transition-colors"
                @click="mobileMenuOpen = false"
              >
                Project Estimate
              </NuxtLink>
              <NuxtLink
                to="/free-assessment"
                class="block text-base font-medium text-ink-soft hover:text-ink transition-colors"
                @click="mobileMenuOpen = false"
              >
                Free Assessment
              </NuxtLink>
              <NuxtLink
                to="/book-a-call"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
                @click="mobileMenuOpen = false"
              >
                Book a Free Strategy Call
              </NuxtLink>
            </div>
          </nav>
        </Container>
      </div>
    </TransitionRoot>
  </header>
</template>

<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'

const route = useRoute()
const mobileMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)

const navItems = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Process', href: '/process' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
]

// Escape closes the menu; focus returns to the toggle.
function onMenuKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    mobileMenuOpen.value = false
    const toggle = document.querySelector<HTMLButtonElement>('[aria-controls="mobile-menu"]')
    toggle?.focus()
  }
}

// Move focus to the first link when the menu opens.
function onMenuEnter() {
  mobileMenuRef.value?.querySelector<HTMLAnchorElement>('a')?.focus()
}
</script>
