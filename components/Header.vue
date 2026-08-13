<template>
  <header
    class="sticky top-0 z-50 w-full transition-all duration-300"
    :class="scrolled
      ? 'border-b border-border bg-surface/90 backdrop-blur-md shadow-sm'
      : 'border-b border-transparent bg-surface/60 backdrop-blur-sm'"
  >
    <Container>
      <div class="flex h-16 items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-2.5 flex-shrink-0" aria-label="Softcredible Home">
          <Logo :size="32" />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          <!-- Solutions mega-menu (includes Industries as a sub-tab) -->
          <div class="relative" @mouseenter="openMenu = 'solutions'" @mouseleave="openMenu = null">
            <NuxtLink
              to="/solutions"
              class="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              :class="isActive('/solutions') ? 'text-ink bg-surface-2' : 'text-ink-soft hover:text-ink hover:bg-surface-2'"
              @click="openMenu = openMenu === 'solutions' ? null : 'solutions'"
            >
              Solutions
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': openMenu === 'solutions' }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>
            <Transition
              enter="transition-all duration-200 ease-out"
              enter-from="opacity-0 translate-y-1"
              enter-to="opacity-100 translate-y-0"
              leave="transition-all duration-150 ease-in"
              leave-from="opacity-100 translate-y-0"
              leave-to="opacity-0 translate-y-1"
            >
              <div v-if="openMenu === 'solutions'" class="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px]">
                <div class="rounded-xl border border-border bg-surface shadow-xl overflow-hidden">
                  <div class="grid grid-cols-2 gap-1 p-3">
                    <NuxtLink
                      v-for="sol in megaSolutions"
                      :key="sol.slug"
                      :to="`/solutions/${sol.slug}`"
                      class="group flex items-start gap-3 rounded-lg p-3 hover:bg-surface-2 transition-colors"
                      @click="openMenu = null"
                    >
                      <div class="w-8 h-8 flex items-center justify-center rounded-md bg-accent-soft text-accent flex-shrink-0">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="sol.icon" />
                        </svg>
                      </div>
                      <div class="min-w-0">
                        <p class="text-sm font-semibold text-ink group-hover:text-accent transition-colors">{{ sol.shortTitle }}</p>
                        <p class="text-xs text-muted leading-snug mt-0.5 line-clamp-2">{{ sol.shortDescription }}</p>
                      </div>
                    </NuxtLink>
                  </div>
                  <!-- Industries folded into Solutions as a sub-tab -->
                  <div class="border-t border-border px-4 py-3">
                    <p class="text-xs font-semibold text-muted uppercase tracking-wider mb-2">By industry</p>
                    <div class="flex flex-wrap gap-1.5">
                      <NuxtLink
                        v-for="ind in navIndustries"
                        :key="ind.slug"
                        :to="`/industries/${ind.slug}`"
                        class="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-ink-soft hover:text-ink hover:border-accent/40 transition-colors"
                        @click="openMenu = null"
                      >
                        {{ ind.name }}
                      </NuxtLink>
                      <NuxtLink
                        to="/industries"
                        class="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-accent hover:underline"
                        @click="openMenu = null"
                      >
                        All industries →
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="border-t border-border bg-surface-2/60 px-4 py-3 flex items-center justify-between">
                    <NuxtLink to="/solutions/development-partnership" class="text-sm font-medium text-accent hover:underline" @click="openMenu = null">
                      For Agencies →
                    </NuxtLink>
                    <NuxtLink to="/solutions" class="text-sm font-medium text-ink hover:text-accent transition-colors" @click="openMenu = null">
                      View all solutions →
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink
            v-for="item in plainNavItems"
            :key="item.href"
            :to="item.href"
            class="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="isActive(item.href) ? 'text-ink bg-surface-2' : 'text-ink-soft hover:text-ink hover:bg-surface-2'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA cluster -->
        <div class="hidden lg:flex items-center gap-1.5 flex-shrink-0">
          <NuxtLink
            to="/estimate"
            class="px-3 py-2 rounded-lg text-sm font-medium text-ink-soft hover:text-ink hover:bg-surface-2 transition-colors"
          >
            Estimate
          </NuxtLink>
          <NuxtLink
            to="/book-a-call"
            class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg shadow-sm shadow-accent/20 transition-all duration-200 active:scale-[0.98]"
          >
            Book a Free Strategy Call
          </NuxtLink>
        </div>

        <!-- Mobile toggle -->
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
      <div ref="mobileMenuRef" id="mobile-menu" class="lg:hidden border-t border-border bg-surface max-h-[calc(100vh-4rem)] overflow-y-auto" @keydown="onMenuKeydown">
        <Container>
          <nav class="py-6 space-y-1" aria-label="Mobile navigation">
            <NuxtLink
              to="/solutions"
              class="block px-3 py-2.5 rounded-lg text-base font-medium text-ink-soft hover:text-ink hover:bg-surface-2 transition-colors"
              @click="mobileMenuOpen = false"
            >
              Solutions
            </NuxtLink>
            <NuxtLink
              v-for="sol in mobileSolutions"
              :key="sol.slug"
              :to="`/solutions/${sol.slug}`"
              class="block pl-6 pr-3 py-2 text-sm text-muted hover:text-ink transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ sol.shortTitle }}
            </NuxtLink>
            <NuxtLink
              to="/industries"
              class="block pl-6 pr-3 py-2 text-sm text-muted hover:text-ink transition-colors"
              @click="mobileMenuOpen = false"
            >
              By industry
            </NuxtLink>
            <NuxtLink
              v-for="item in plainNavItems"
              :key="item.href"
              :to="item.href"
              class="block px-3 py-2.5 rounded-lg text-base font-medium text-ink-soft hover:text-ink hover:bg-surface-2 transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            <NuxtLink
              to="/about#process"
              class="block px-3 py-2.5 rounded-lg text-base font-medium text-ink-soft hover:text-ink hover:bg-surface-2 transition-colors"
              @click="mobileMenuOpen = false"
            >
              Process
            </NuxtLink>
            <div class="pt-4 mt-2 border-t border-border space-y-2">
              <NuxtLink
                to="/estimate"
                class="block px-3 py-2.5 rounded-lg text-base font-medium text-ink-soft hover:text-ink hover:bg-surface-2 transition-colors"
                @click="mobileMenuOpen = false"
              >
                Project Estimate
              </NuxtLink>
              <NuxtLink
                to="/book-a-call"
                class="inline-flex items-center justify-center w-full px-5 py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg shadow-sm shadow-accent/20 transition-colors"
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
import { solutions } from '~/data/solutions'
import { industries } from '~/data/industries'

const route = useRoute()
const mobileMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)
const openMenu = ref<string | null>(null)
const scrolled = ref(false)

const navIndustries = industries.slice(0, 5)

const megaSolutions = solutions
  .filter(s => s.slug !== 'development-partnership')
  .map(s => ({
    slug: s.slug,
    icon: s.icon,
    shortTitle: s.name,
    shortDescription: s.summary
  }))
  .slice(0, 8)

const mobileSolutions = megaSolutions.slice(0, 5)

const plainNavItems = [
  { label: 'Work', href: '/case-studies' },
  { label: 'Store', href: '/store' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' }
]

function isActive(href: string) {
  return route.path === href || (href !== '/' && route.path.startsWith(href))
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

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
