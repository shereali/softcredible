<template>
  <div class="min-h-screen bg-steel-50">
    <!-- Admin header -->
    <header class="sticky top-0 z-40 bg-white border-b border-border">
      <div class="flex items-center justify-between gap-3 px-4 sm:px-6 h-16">
        <div class="flex items-center gap-3 min-w-0">
          <LogoMark :size="28" class="flex-shrink-0" />
          <div class="min-w-0">
            <p class="text-sm font-semibold text-ink leading-tight truncate">Softcredible Admin</p>
            <p class="text-xs text-muted leading-tight hidden sm:block">Content & lead management</p>
          </div>
        </div>
        <div class="flex items-center gap-3 flex-shrink-0">
          <span v-if="auth.user.value" class="text-sm text-ink-soft hidden md:inline">{{ auth.user.value.name }}</span>
          <Button variant="outline" size="sm" @click="handleLogout">
            Sign Out
          </Button>
        </div>
      </div>
    </header>

    <div class="flex flex-col lg:flex-row">
      <!-- Sidebar: horizontal scroll nav on mobile, fixed rail on desktop -->
      <aside class="lg:w-60 lg:flex-shrink-0 bg-white lg:border-r border-b lg:border-b-0 border-border">
        <nav class="flex lg:flex-col gap-1 p-3 lg:p-4 overflow-x-auto lg:overflow-visible space-y-0 lg:space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 active:scale-[0.98]"
            :class="isActive(item.to) ? 'bg-accent-soft text-accent' : 'text-ink-soft hover:bg-steel-100'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon" />
            </svg>
            {{ item.label }}
          </NuxtLink>
        </nav>
      </aside>

      <!-- Content -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const auth = useAdminAuth()

const navItems = [
  { label: 'Dashboard', to: '/admin', icon: 'M4 6h16M4 12h16M4 18h16' },
  { label: 'Leads', to: '/admin/leads', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Services', to: '/admin/services', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Industries', to: '/admin/industries', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { label: 'Blog', to: '/admin/blog', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { label: 'Resources', to: '/admin/resources', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
]

definePageMeta({
  layout: 'blank'
})

// Admin pages must not be indexed.
useSeo().setMeta({
  title: 'Admin',
  description: 'Softcredible admin dashboard.',
  noIndex: true
})

// Route guard: redirect to login when not authenticated.
onMounted(async () => {
  if (!auth.isAuthenticated.value) {
    router.replace('/admin/login')
    return
  }
  if (!auth.user.value) {
    try {
      await auth.fetchMe()
    } catch {
      router.replace('/admin/login')
    }
  }
})

function isActive(to: string) {
  return route.path === to
}

async function handleLogout() {
  await auth.logout()
  router.replace('/admin/login')
}
</script>
