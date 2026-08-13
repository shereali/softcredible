<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">About Softcredible</Badge>
          <h1 class="text-display mb-6">
            We Build Software That Moves Businesses Forward
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl">
            Softcredible is a B2B software development and business automation company. We design and build custom web applications, SaaS platforms, CRM, ERP, eCommerce, and automation for businesses that take technology seriously.
          </p>
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="primary" size="lg" to="/contact">
              Discuss Your Project
            </Button>
            <Button variant="outline" size="lg" to="/case-studies">
              See Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- What we do -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">What We Do</h2>
          <p class="text-body-lg text-ink-soft">We turn complex business requirements into reliable software built for growth.</p>
        </div>
        <FeatureGrid :items="whatWeDo" />
      </Container>
    </section>

    <!-- How we're different -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">How We're Different</h2>
          <p class="text-body-lg text-ink-soft">The principles that shape every engagement.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card v-for="value in values" :key="value.title" className="p-6 h-full">
            <h3 class="text-h4 mb-2">{{ value.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed">{{ value.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <CtaSection
      title="Let's Build Something Together"
      subtitle="Tell us about the software you need. We'll help you understand what the next step looks like."
      :primary-cta="{ label: 'Discuss Your Project', href: '/contact' }"
      :secondary-cta="{ label: 'Book a Free Strategy Call', href: '/book-a-call' }"
    />
  </div>
</template>

<script setup lang="ts">
const whatWeDo = [
  { title: 'Custom Software', description: 'Web applications built around the way your business actually works.', href: '/solutions/custom-web-development' },
  { title: 'SaaS Products', description: 'Multi-tenant platforms from MVP to scale, with billing and onboarding.', href: '/solutions/saas-development' },
  { title: 'Business Systems', description: 'CRM, ERP, eCommerce, and POS systems that connect your operations.', href: '/solutions/crm-development' },
  { title: 'AI & Automation', description: 'Workflow automation that reduces manual work with measurable payback.', href: '/solutions/ai-automation' },
  { title: 'Integrations', description: 'Reliable API and system integration layers between your tools.', href: '/solutions/api-integration' },
  { title: 'Modernization', description: 'Incremental legacy software modernization without stopping the business.', href: '/solutions/software-modernization' }
]

const values = [
  { title: 'Business first', description: 'We start by understanding the problem before writing a single line of code.' },
  { title: 'Engineering discipline', description: 'Clean architecture, maintainable code, and scalable systems built to last.' },
  { title: 'Direct communication', description: 'You talk to the people building your software, without unnecessary layers.' },
  { title: 'Transparent process', description: 'You always know what is being built, what comes next, and why.' },
  { title: 'Long-term thinking', description: 'We build systems that can evolve with your business, not just for today.' },
  { title: 'Post-launch support', description: 'The relationship does not end at launch. We stay available for improvement and support.' }
]

useSeo().setMeta({
  title: 'About Us',
  description: 'Softcredible is a B2B software development company building custom web applications, SaaS, CRM, ERP, eCommerce, and automation that move businesses forward.'
})
</script>
