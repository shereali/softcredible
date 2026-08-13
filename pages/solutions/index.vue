<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="primary" className="mb-6">Solutions</Badge>
            <h1 class="text-display mb-6">
              One Technology Partner.<br />
              Multiple Business Solutions.
            </h1>
            <p class="text-body-lg text-ink-soft mb-8">
              From custom SaaS platforms and business automation to CRM, ERP, eCommerce, and AI-powered applications, Softcredible turns complex business requirements into reliable software built for growth.
            </p>
            <div class="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="primary" size="lg" to="/contact">
                Book a Free Strategy Call
              </Button>
              <Button variant="outline" size="lg" to="/case-studies">
                View Our Work
              </Button>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square bg-surface border border-border rounded-2xl overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-brand-100 to-accent-soft flex items-center justify-center">
                <svg class="w-32 h-32 text-brand-500" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="15" width="14" height="5" rx="2" fill="currentColor" />
                  <rect x="10" y="10" width="14" height="5" rx="2" fill="currentColor" opacity="0.7" />
                  <rect x="20" y="5" width="14" height="5" rx="2" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- All Solutions -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            What We Build
          </h2>
          <p class="text-body-lg text-ink-soft">
            Ten solution areas, one engineering standard. Pick a starting point — or let us find it with you.
          </p>
        </div>
        <FeatureGrid :items="solutionCards" />
        <div class="mt-12 text-center">
          <Button variant="outline" size="lg" to="/contact">
            Not Sure Where to Start?
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { solutions } from '~/data/solutions'

const solutionCards = solutions.map(s => ({
  title: s.name,
  description: s.summary,
  icon: s.icon,
  href: `/solutions/${s.slug}`
}))

useSeo().setMeta({
  title: 'Solutions',
  description: 'Custom software solutions for businesses. Custom web development, SaaS, CRM, ERP, eCommerce, POS, AI automation, API integration, software modernization, and dedicated teams.'
})
</script>
