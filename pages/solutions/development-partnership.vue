<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumb :items="breadcrumb" className="mb-8" />
            <Badge variant="primary" className="mb-6">Development Partnership</Badge>
            <h1 class="text-display mb-6">
              Your Clients Need Software. We Can Help You Build It.
            </h1>
            <p class="text-body-lg text-ink-soft mb-8 max-w-xl">
              Extend your team's technical capacity with a reliable development partner for custom web applications, SaaS products, APIs, integrations, and ongoing development.
            </p>
            <div class="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="primary" size="lg" to="/solutions/development-partnership#partnership-form">
                Become a Development Partner
              </Button>
              <Button variant="outline" size="lg" to="/solutions">
                Explore Our Services
              </Button>
            </div>
          </div>
          <div class="bg-surface border border-border rounded-2xl shadow-md p-8">
            <p class="text-caption text-muted uppercase tracking-wider mb-4">Built for</p>
            <ul class="space-y-3">
              <li v-for="audience in audiences" :key="audience" class="flex items-center gap-3">
                <span class="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-accent-soft text-accent">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm text-ink-soft">{{ audience }}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>

    <!-- Services -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">Services</p>
          <h2 class="text-h2 mb-4">What We Can Take Off Your Plate</h2>
          <p class="text-body-lg text-ink-soft">The engineering work we handle so your team stays focused on clients.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            v-for="service in services"
            :key="service.title"
            className="p-6 h-full"
          >
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon" />
              </svg>
            </div>
            <h3 class="text-h4 mb-2">{{ service.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed">{{ service.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- When agencies should work with Softcredible -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">The Right Fit</p>
          <h2 class="text-h2 mb-4">When Agencies Work With Softcredible</h2>
          <p class="text-body-lg text-ink-soft">We're a development partner for agencies that need technical depth without the hiring overhead.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="scenario in whenToPartner"
            :key="scenario.title"
            className="p-6 h-full"
          >
            <h3 class="text-h4 mb-2">{{ scenario.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed">{{ scenario.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- How collaboration works -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">How It Works</p>
          <h2 class="text-h2 mb-4">A Collaboration Model Built for Agencies</h2>
          <p class="text-body-lg text-ink-soft">You stay in front of the client. We handle the engineering behind the scenes.</p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div
            v-for="(step, index) in collaborationSteps"
            :key="step.title"
            class="flex items-start gap-6 py-8 border-b border-border last:border-b-0"
          >
            <span class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent-soft text-accent font-semibold text-lg">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <div>
              <h3 class="text-h4 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-ink-soft leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Commitments -->
    <PartnershipCommitments :items="commitments" />

    <!-- Partnership form -->
    <section id="partnership-form" class="w-full bg-background section">
      <Container>
        <div class="max-w-2xl mx-auto text-center mb-12">
          <p class="text-caption text-accent uppercase tracking-wider mb-3">Become a Development Partner</p>
          <h2 class="text-h2 mb-4">Let's Talk About Working Together</h2>
          <p class="text-body-lg text-ink-soft">
            Tell us about your agency and the support you need. We'll come back with how we can help.
          </p>
        </div>
        <PartnershipForm />
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
const breadcrumb = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Development Partnership', current: true }
]

const audiences = [
  'Digital agencies',
  'Marketing agencies',
  'Design agencies',
  'Consultancies',
  'Software companies'
]

const services = [
  { title: 'White-label development', description: 'Engineering delivered under your brand, invisible to your clients.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { title: 'Laravel development', description: 'Robust backend systems, APIs, and admin panels.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { title: 'Vue / Nuxt development', description: 'Fast, maintainable front ends and full-stack Nuxt applications.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'API integration', description: 'Connecting third-party systems, webhooks, and data flows.', icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Custom applications', description: 'Bespoke web applications built around client requirements.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Maintenance', description: 'Ongoing support, updates, and security for existing builds.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { title: 'Feature development', description: 'New capabilities added to products your clients already run.', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
  { title: 'Long-term engineering support', description: 'A dependable team on call as your agency grows.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' }
]

const whenToPartner = [
  { title: 'Overflow capacity', description: 'You have more work than your team can ship, and hiring isn\'t the answer right now.' },
  { title: 'Skill gaps', description: 'A project needs Laravel, Vue, or integration expertise you don\'t have in-house.' },
  { title: 'Fixed-scope delivery', description: 'You need a dependable team to deliver a defined scope on a defined timeline.' },
  { title: 'Client demand for software', description: 'Your clients keep asking for web applications, not just marketing sites.' },
  { title: 'Scaling without hiring', description: 'You want technical capacity that flexes with your pipeline, not a permanent headcount.' },
  { title: 'Long-term partnerships', description: 'You want a partner who knows your standards and your clients over time.' }
]

const collaborationSteps = [
  { title: 'We scope together', description: 'You share the brief, we estimate the engineering. You own the client relationship and the proposal.' },
  { title: 'We build behind the scenes', description: 'Your clients see your brand. We handle the development in defined milestones with regular updates.' },
  { title: 'You review, we refine', description: 'We deliver working software at each milestone. You review it, and we iterate until it\'s right.' },
  { title: 'We hand over cleanly', description: 'On completion you get documented code, deployment details, and everything needed to run or extend the project.' }
]

const commitments = [
  { title: 'Communication process', description: 'A named technical lead, regular status updates, and direct access to the people building your software. No account-manager layers.', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { title: 'Handoff process', description: 'Structured delivery at the end of every engagement: code, documentation, environment setup, and a clear path for your team to take over.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { title: 'Code ownership', description: 'You own everything we build. Full access to repositories, infrastructure, and credentials from day one.', icon: 'M12 11c0 3.517-1.009 6.799-2.753 8.571-3.373.261-6.247-2.618-5.986-5.99 1.772-1.744 5.054-2.753 8.571-2.753h.339zM12 11c0-3.517 1.009-6.799 2.753-8.571 3.373-.261 6.247 2.618 5.986 5.99-1.772 1.744-5.054 2.753-8.571 2.753h-.339zM12 11v9' },
  { title: 'Confidentiality', description: 'Your clients, your pricing, and your project details stay yours. We sign NDAs and keep your work invisible to the outside.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Long-term support', description: 'Partnerships aren\'t one-off projects. We stay available for maintenance, new features, and the work that comes after launch.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
]

useSeo().setMeta({
  title: 'Development Partnership for Agencies',
  description: 'White-label development, Laravel, Vue/Nuxt, API integration, and long-term engineering support for digital agencies, consultancies, and software companies.'
})
</script>
