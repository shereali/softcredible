<template>
  <div class="min-h-screen flex items-center justify-center bg-background">
    <Container>
      <div class="max-w-md mx-auto text-center">
        <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-error-soft text-error">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 class="text-h1 mb-4">Something Went Wrong</h1>
        <p class="text-body-lg text-ink-soft mb-8">
          We are experiencing some technical difficulties. Please try again later or contact us if the problem persists.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" @click="refresh">
            Try Again
          </Button>
          <Button variant="outline" size="lg" to="/">
            Back to Home
          </Button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
function refresh() {
  window.location.reload()
}

useSeo().setMeta({
  title: 'Server Error',
  description: 'Something went wrong on our end.',
  noIndex: true
})
</script>
