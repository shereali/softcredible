<template>
  <div class="min-h-screen">
    <!-- Hero / Offer -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <Badge variant="primary" className="mb-6">Free Assessment</Badge>
          <h1 class="text-display mb-6">
            Is Your Current Software Holding Your Business Back?
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl mx-auto">
            Get a free 15-minute software improvement consultation. We'll help you identify the bottleneck and recommend the most practical next step.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <span class="inline-flex items-center gap-2 text-sm text-ink-soft">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
              </svg>
              No obligation
            </span>
            <span class="inline-flex items-center gap-2 text-sm text-ink-soft">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
              </svg>
              15 minutes
            </span>
            <span class="inline-flex items-center gap-2 text-sm text-ink-soft">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
              </svg>
              Practical next steps
            </span>
          </div>
        </div>
      </Container>
    </section>

    <FreeAssessmentForm />
  </div>
</template>

<script setup lang="ts">
useSeo().setMeta({
  title: 'Free Software Assessment',
  description: 'Is your current software holding your business back? Get a free 15-minute software improvement consultation from Softcredible.'
})
</script>
