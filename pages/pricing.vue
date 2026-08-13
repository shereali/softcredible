<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            <span class="text-xs font-medium text-primary">Pricing</span>
          </div>
          <h1 class="text-display mb-6">
            Transparent Ranges. Honest Estimates.
          </h1>
          <p class="text-body-lg text-ink-soft max-w-xl">
            Every project is scoped individually, but you should not have to guess before you ask. These are real starting ranges, not marketing numbers.
          </p>
        </div>
      </Container>
    </section>

    <!-- Starting ranges -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">Starting Price Ranges</h2>
          <p class="text-body-lg text-ink-soft">Final pricing depends on scope, complexity, integrations, and timeline. These ranges set honest expectations before the first call.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="tier in priceTiers"
            :key="tier.name"
            class="bg-surface border border-border rounded-xl p-6 flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-h4">{{ tier.name }}</h3>
              <span v-if="tier.popular" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                Popular
              </span>
            </div>
            <p class="text-sm text-ink-soft leading-relaxed mb-4">{{ tier.description }}</p>
            <div class="text-h3 mb-6">
              {{ tier.price }}
              <span class="text-sm font-normal text-muted">starting</span>
            </div>
            <ul class="space-y-2.5 mb-8">
              <li v-for="item in tier.includes" :key="item" class="flex items-start gap-2 text-sm text-ink-soft">
                <svg class="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ item }}
              </li>
            </ul>
            <div class="mt-auto">
              <Button variant="primary" size="md" className="w-full" :to="tier.cta.href">{{ tier.cta.label }}</Button>
            </div>
          </div>
        </div>
        <p class="text-sm text-muted text-center mt-10 max-w-2xl mx-auto">
          Projects are scoped based on business requirements, complexity, integrations, and timeline. The range you see above is where each engagement starts, not a quote.
        </p>
      </Container>
    </section>

    <!-- Mini estimator -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-h2 mb-4">What Are You Building?</h2>
            <p class="text-body-lg text-ink-soft">Pick a type and get a rough range in seconds. Then book a free call for a real scope.</p>
          </div>

          <div class="bg-surface border border-border rounded-xl p-6 lg:p-8">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <button
                v-for="opt in estimatorTypes"
                :key="opt.value"
                type="button"
                class="px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all duration-200"
                :class="selectedType === opt.value
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                @click="selectedType = opt.value"
              >
                {{ opt.label }}
              </button>
            </div>

            <Transition name="fade" mode="out-in">
              <div v-if="selectedType" class="border-t border-border pt-8">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <p class="text-caption font-medium text-muted uppercase tracking-wider mb-2">Rough range</p>
                    <p class="text-h3 text-accent">{{ estimateRange }}</p>
                    <p class="text-sm text-ink-soft mt-2 max-w-md">{{ estimateNote }}</p>
                  </div>
                  <div class="flex flex-col gap-2">
                    <Button variant="primary" size="lg" to="/book-a-call">Book a Free Strategy Call</Button>
                    <Button variant="outline" size="md" to="/estimate">Get a Detailed Estimate</Button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Container>
    </section>

    <!-- How pricing works -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">How Pricing Works</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="step in pricingSteps" :key="step.title" class="text-center">
            <div class="text-h1 font-semibold text-accent mb-2">{{ step.number }}</div>
            <h3 class="text-h4 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-ink-soft">{{ step.description }}</p>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeo().setMeta({
  title: 'Pricing — Transparent Ranges for Custom Software',
  description: 'Starting price ranges for custom software, SaaS, CRM, ERP, automation, and more. Get a rough range in seconds, then book a free strategy call.'
})

const priceTiers = [
  {
    name: 'Automation & Integration',
    description: 'Connect the tools you already use and remove manual work.',
    price: '$2,500',
    includes: [
      'Single workflow automation',
      'Up to 2 system integrations',
      'Basic reporting',
      '2 weeks typical delivery'
    ],
    cta: { label: 'Scope an Automation', href: '/estimate' }
  },
  {
    name: 'Business Web App',
    description: 'Custom internal tools, CRMs, dashboards, and portals.',
    price: '$8,000',
    popular: true,
    includes: [
      'Custom web application',
      'Auth, roles and permissions',
      'Up to 3 modules',
      '6–10 weeks typical delivery'
    ],
    cta: { label: 'Scope a Web App', href: '/estimate' }
  },
  {
    name: 'SaaS Platform',
    description: 'Subscription products with billing, teams, and scale.',
    price: '$25,000',
    includes: [
      'Multi-tenant SaaS architecture',
      'Subscription billing',
      'Admin dashboard',
      '3–5 months typical delivery'
    ],
    cta: { label: 'Scope a SaaS', href: '/estimate' }
  }
]

const estimatorTypes = [
  { label: 'Automation', value: 'automation', range: '$2,500 – $15,000', note: 'Typically replaces one manual workflow. Larger automation projects with multiple systems and approvals can reach higher.' },
  { label: 'Web App / CRM', value: 'crm', range: '$8,000 – $40,000', note: 'Internal tools and CRMs vary with modules, users, and integrations.' },
  { label: 'SaaS', value: 'saas', range: '$25,000 – $100,000+', note: 'The range is wide because architecture, billing, and scale drive the real cost.' },
  { label: 'ERP', value: 'erp', range: '$30,000 – $150,000+', note: 'ERPs connect multiple departments, so scope and integrations set the price.' },
  { label: 'eCommerce', value: 'ecommerce', range: '$10,000 – $60,000+', note: 'Storefronts, inventory, payments, and fulfillment all add to scope.' },
  { label: 'AI Integration', value: 'ai', range: '$5,000 – $50,000+', note: 'AI features range from a single automation to a custom model pipeline.' }
]

const selectedType = ref('')
const selected = computed(() => estimatorTypes.find(t => t.value === selectedType.value))
const estimateRange = computed(() => selected.value?.range || '')
const estimateNote = computed(() => selected.value?.note || '')

const pricingSteps = [
  { number: '01', title: 'Discovery call', description: 'We understand the problem and the outcome you need.' },
  { number: '02', title: 'Scope', description: 'We define features, integrations, and what is out of scope.' },
  { number: '03', title: 'Fixed quote', description: 'You get a clear price and timeline before any commitment.' },
  { number: '04', title: 'Build & improve', description: 'Milestones, testing, launch, and ongoing improvement.' }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
