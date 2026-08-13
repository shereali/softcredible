<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">Industries</Badge>
          <h1 class="text-display mb-6">
            Software Built for How Your Industry Works
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl">
            Every industry has its own workflows, constraints, and pressures. We build software around the way your industry actually operates, so your team spends less time fighting tools and more time doing the work.
          </p>
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="primary" size="lg" to="/contact">
              Discuss Your Project
            </Button>
            <Button variant="outline" size="lg" to="/solutions">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Industry Grid -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Industries We Build For
          </h2>
          <p class="text-body-lg text-ink-soft">
            Ten industries, one engineering standard. Pick a starting point, or tell us about your workflow and we'll map the software around it.
          </p>
        </div>
        <FeatureGrid :items="industryCards" />
        <div class="mt-12 text-center">
          <Button variant="outline" size="lg" to="/contact">
            Don't See Your Industry?
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { industries } from '~/data/industries'

const industryCards = industries.map(i => ({
  title: i.name,
  description: i.summary,
  icon: i.icon,
  href: `/industries/${i.slug}`
}))

useSeo().setMeta({
  title: 'Industries',
  description: 'Industry-specific software development. Healthcare, education, retail, eCommerce, logistics, real estate, professional services, hospitality, finance, and SaaS.'
})
</script>
