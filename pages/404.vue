<template>
  <div class="min-h-screen flex items-center justify-center bg-background">
    <Container>
      <div class="max-w-md mx-auto text-center">
        <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-steel-100 text-muted">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-h1 mb-4">Page Not Found</h1>
        <p class="text-body-lg text-ink-soft mb-8">
          Looks like this page took a different route. Let us help you find your way back.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" to="/">
            Back to Home
          </Button>
          <Button variant="outline" size="lg" to="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
useSeo().setMeta({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  noIndex: true
})
</script>
