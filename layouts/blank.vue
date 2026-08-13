<template>
  <div class="min-h-screen flex flex-col bg-background">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeo()
</script>
