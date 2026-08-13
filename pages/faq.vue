<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">FAQ</Badge>
          <h1 class="text-display mb-6">
            Common Questions, Straight Answers
          </h1>
          <p class="text-body-lg text-ink-soft max-w-xl">
            The questions clients ask before starting a project, answered honestly. If yours is not here, ask us directly.
          </p>
        </div>
      </Container>
    </section>

    <FaqSection :items="faqs" background="surface" />

    <!-- Still have questions -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-h2 mb-4">Still Have a Question?</h2>
          <p class="text-body-lg text-ink-soft mb-8 max-w-xl mx-auto">
            Ask us directly. No sales script, just a straight answer about whether we can help.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/contact">Ask a Question</Button>
            <Button variant="outline" size="lg" to="/book-a-call">Book a Free Strategy Call</Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faqs'

useSeo().setMeta({
  title: 'FAQ — Pricing, Timelines, NDAs, Support & More',
  description: 'Honest answers to the questions clients ask before starting a software project: pricing, timelines, NDAs, IP transfer, existing systems, post-launch support, and more.'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.title,
          acceptedAnswer: { '@type': 'Answer', text: f.content }
        }))
      })
    }
  ]
})
</script>
