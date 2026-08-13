<template>
  <div class="min-h-screen flex flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
    >
      Skip to main content
    </a>
    <Header />
    <main id="main-content" class="flex-grow" tabindex="-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeo()
</script>
