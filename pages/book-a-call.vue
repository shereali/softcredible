<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <Badge variant="primary" className="mb-6">Book a Call</Badge>
          <h1 class="text-display mb-6">
            Book a Free Strategy Call
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl mx-auto">
            A no-pressure conversation about your business and your software. Here's how it works.
          </p>
        </div>
      </Container>
    </section>

    <!-- The 4 steps -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="text-center"
          >
            <div class="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-accent-soft text-accent font-semibold text-lg mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-h4 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-ink-soft">{{ step.description }}</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Booking form -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-h2 mb-4">Request Your Call</h2>
            <p class="text-body-lg text-ink-soft">
              Tell us a little about your situation and we'll be in touch to schedule a time.
            </p>
          </div>
          <BookingForm />
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Understand your business', description: 'We learn how your business operates, what your team deals with daily, and what success looks like.' },
  { title: 'Identify the problem', description: 'Together we pinpoint where the software, process, or tooling is holding you back.' },
  { title: 'Discuss possible solutions', description: 'We talk through realistic options, including what we would and would not recommend.' },
  { title: 'Recommend a practical next step', description: 'You leave with a clear, actionable recommendation, whether or not it involves us.' }
]

useSeo().setMeta({
  title: 'Book a Free Strategy Call',
  description: 'Book a free strategy call with Softcredible. We understand your business, identify the problem, discuss solutions, and recommend a practical next step.'
})
</script>
