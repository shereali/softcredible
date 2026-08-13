<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">Our Process</Badge>
          <h1 class="text-display mb-6">
            From Idea to Production, Deliberately
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl">
            A proven process that takes you from a rough idea to a live, maintainable product. You always know what is being built, what comes next, and why.
          </p>
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="primary" size="lg" to="/contact">
              Discuss Your Project
            </Button>
            <Button variant="outline" size="lg" to="/case-studies">
              See the Results
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Steps -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-4xl mx-auto">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="flex items-start gap-6 py-8 border-b border-border last:border-b-0"
          >
            <span class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent-soft text-accent font-semibold text-lg">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <div>
              <h2 class="text-h3 mb-2">{{ step.title }}</h2>
              <p class="text-body text-ink-soft leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Principles -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">How We Work</h2>
          <p class="text-body-lg text-ink-soft">The principles that hold every engagement together.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card v-for="principle in principles" :key="principle.title" className="p-6 h-full">
            <h3 class="text-h4 mb-2">{{ principle.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed">{{ principle.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <CtaSection
      title="Ready to Start the Process?"
      subtitle="Tell us what you're trying to build. We'll walk you through each step."
      :primary-cta="{ label: 'Discuss Your Project', href: '/contact' }"
      :secondary-cta="{ label: 'Book a Free Strategy Call', href: '/book-a-call' }"
    />
  </div>
</template>

<script setup lang="ts">
const steps = [
  { id: 'discover', title: 'Discover', description: 'We start by understanding your business, users, workflows, and goals. Workshops map the real problem before any code is written.' },
  { id: 'define', title: 'Define', description: 'We translate requirements into a clear technical and product roadmap, with scope, milestones, and priorities agreed up front.' },
  { id: 'design', title: 'Design', description: 'We design intuitive interfaces and scalable architecture, reviewing key screens and decisions with you before building.' },
  { id: 'build', title: 'Build', description: 'We develop the application in working increments, so you see progress weekly rather than waiting for a reveal.' },
  { id: 'test', title: 'Test', description: 'We validate functionality, performance, security, and usability with automated and manual testing throughout.' },
  { id: 'launch', title: 'Launch', description: 'We deploy the product, set up monitoring, and make sure the production environment is stable and documented.' },
  { id: 'grow', title: 'Grow', description: 'After launch we improve, optimize, automate, and add new capabilities as the business evolves.' }
]

const principles = [
  { title: 'Business first', description: 'We start with the problem, not the technology. The right solution is the one that moves your business forward.' },
  { title: 'Transparent progress', description: 'Weekly working demos, clear milestones, and direct access to the people building your software.' },
  { title: 'Built for the long run', description: 'Clean architecture, documented code, and systems designed to evolve rather than be rewritten.' }
]

useSeo().setMeta({
  title: 'Our Process',
  description: 'From idea to production: Softcredible\'s proven process for custom software development, from discovery through launch and beyond.'
})
</script>
