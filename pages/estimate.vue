<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section overflow-hidden">
      <Container>
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            <span class="text-xs font-medium text-primary">Project estimate</span>
          </div>
          <h1 class="text-display mb-6">
            Get a Clearer Idea of Your Project.
          </h1>
          <p class="text-body-lg text-ink-soft max-w-xl">
            Every software project is different. Tell us what you have in mind, and we'll give you a clear sense of its scope and complexity before any commitment.
          </p>
        </div>
      </Container>
    </section>

    <!-- Configurator -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Config inputs -->
          <div class="lg:col-span-7 space-y-10">
            <div>
              <label class="block text-caption font-medium text-muted uppercase tracking-wider mb-4">Project type</label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <button
                  v-for="opt in config.projectTypes"
                  :key="opt.value"
                  type="button"
                  class="px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all duration-200"
                  :class="form.projectType === opt.value
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                  @click="form.projectType = opt.value"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>

            <div>
              <label class="block text-caption font-medium text-muted uppercase tracking-wider mb-4">Number of users</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  v-for="opt in config.userTiers"
                  :key="opt.value"
                  type="button"
                  class="px-4 py-3 rounded-lg border text-sm font-medium text-center transition-all duration-200"
                  :class="form.users === opt.value
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                  @click="form.users = opt.value"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>

            <div>
              <label class="block text-caption font-medium text-muted uppercase tracking-wider mb-4">Core features</label>
              <div class="flex flex-wrap gap-2.5">
                <button
                  v-for="feat in config.features"
                  :key="feat.value"
                  type="button"
                  class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200"
                  :class="form.features.includes(feat.value)
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                  @click="toggleFeature(feat.value)"
                >
                  {{ feat.label }}
                </button>
              </div>
            </div>

            <div>
              <label class="block text-caption font-medium text-muted uppercase tracking-wider mb-4">Integrations</label>
              <div class="flex flex-wrap gap-2.5">
                <button
                  v-for="opt in config.integrations"
                  :key="opt.value"
                  type="button"
                  class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200"
                  :class="form.integrations.includes(opt.value)
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                  @click="toggleIntegration(opt.value)"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label class="block text-caption font-medium text-muted uppercase tracking-wider mb-4">Design complexity</label>
                <FormSelect v-model="form.design" placeholder="Select level">
                  <option value="standard">Standard</option>
                  <option value="custom">Custom UI</option>
                  <option value="premium">Premium / Brand-led</option>
                </FormSelect>
              </div>
              <div>
                <label class="block text-caption font-medium text-muted uppercase tracking-wider mb-4">Timeline</label>
                <FormSelect v-model="form.timeline" placeholder="Select range">
                  <option value="asap">As soon as possible</option>
                  <option value="1-3-months">1 – 3 months</option>
                  <option value="3-6-months">3 – 6 months</option>
                  <option value="6-plus-months">6+ months</option>
                </FormSelect>
              </div>
              <div>
                <label class="block text-caption font-medium text-muted uppercase tracking-wider mb-4">Support</label>
                <FormSelect v-model="form.support" placeholder="Select level">
                  <option value="launch-only">Launch only</option>
                  <option value="maintenance">Ongoing maintenance</option>
                  <option value="partnership">Long-term partnership</option>
                </FormSelect>
              </div>
            </div>
          </div>

          <!-- Live result -->
          <div class="lg:col-span-5">
            <div class="lg:sticky lg:top-8 bg-background border border-border rounded-xl p-6 lg:p-8">
              <p class="text-caption font-medium text-muted uppercase tracking-wider mb-4">Project complexity</p>
              <p class="text-h3 mb-2">{{ complexity.label }}</p>
              <p class="text-sm text-ink-soft mb-6">{{ complexity.description }}</p>

              <dl class="space-y-3 text-sm border-t border-border pt-6 mb-6">
                <div class="flex justify-between gap-4">
                  <dt class="text-muted">Type</dt>
                  <dd class="font-medium text-ink text-right">{{ projectTypeLabel }}</dd>
                </div>
                <div class="flex justify-between gap-4">
                  <dt class="text-muted">Users</dt>
                  <dd class="font-medium text-ink">{{ usersLabel }}</dd>
                </div>
                <div class="flex justify-between gap-4">
                  <dt class="text-muted">Features</dt>
                  <dd class="font-medium text-ink">{{ form.features.length }}</dd>
                </div>
                <div class="flex justify-between gap-4">
                  <dt class="text-muted">Integrations</dt>
                  <dd class="font-medium text-ink">{{ form.integrations.length }}</dd>
                </div>
              </dl>

              <p class="text-sm text-muted mb-6">
                Your project requires a tailored estimate. Share your details and we'll get back to you with a clear picture of scope, timeline, and investment.
              </p>

              <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
                <FormInput label="Name" placeholder="Your name" :required="true" v-model="form.name" :error="nameError" @blur="nameField.onBlur" />
                <FormInput label="Business Email" type="email" placeholder="you@company.com" :required="true" v-model="form.email" :error="emailError" @blur="emailField.onBlur" />
                <FormInput label="Company" placeholder="Company name" v-model="form.company" />
                <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
                <Button type="submit" variant="primary" size="lg" :loading="state.submitting" :disabled="state.submitting" className="w-full">
                  Request Project Estimate
                </Button>
                <p class="text-xs text-muted text-center">No obligation. Response within one business day.</p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { required, isEmail, useFieldError } from '~/composables/useFormValidation'

useSeo().setMeta({
  title: 'Project Estimate — Get a Clearer Idea of Your Project',
  description: 'Configure your project and get a clear sense of its scope and complexity. Custom software estimates tailored to your business.'
})

const config = {
  projectTypes: [
    { label: 'New Business App', value: 'new-app' },
    { label: 'SaaS Product', value: 'saas' },
    { label: 'CRM', value: 'crm' },
    { label: 'ERP', value: 'erp' },
    { label: 'eCommerce', value: 'ecommerce' },
    { label: 'POS', value: 'pos' },
    { label: 'Automation', value: 'automation' },
    { label: 'AI Application', value: 'ai' },
    { label: 'Improve Existing', value: 'improve-existing' },
    { label: 'Not Sure Yet', value: 'unsure' }
  ],
  userTiers: [
    { label: '1–10', value: '1-10' },
    { label: '11–50', value: '11-50' },
    { label: '51–200', value: '51-200' },
    { label: '200+', value: '200-plus' }
  ],
  features: [
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Auth & Roles', value: 'auth' },
    { label: 'Payments', value: 'payments' },
    { label: 'Reporting', value: 'reporting' },
    { label: 'Notifications', value: 'notifications' },
    { label: 'Multi-tenant', value: 'multi-tenant' },
    { label: 'Mobile-friendly', value: 'mobile' },
    { label: 'AI features', value: 'ai-features' }
  ],
  integrations: [
    { label: 'Payment gateways', value: 'payments' },
    { label: 'Email / SMS', value: 'email' },
    { label: 'Accounting', value: 'accounting' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'CRM', value: 'crm' },
    { label: '3rd-party APIs', value: 'apis' }
  ]
}

const form = reactive({
  projectType: '',
  users: '',
  features: [] as string[],
  integrations: [] as string[],
  design: '',
  timeline: '',
  support: '',
  name: '',
  email: '',
  company: ''
})

const nameField = useFieldError(toRef(form, 'name'), [required('Enter your name.')])
const emailField = useFieldError(toRef(form, 'email'), [required('Enter your email.'), isEmail])
const nameError = toRef(nameField, 'error')
const emailError = toRef(emailField, 'error')

const complexity = computed(() => {
  let score = 0
  if (['erp', 'saas', 'ai'].includes(form.projectType)) score += 2
  else if (form.projectType) score += 1
  if (form.users === '200-plus' || form.users === '51-200') score += 1
  if (form.features.length >= 4) score += 1
  if (form.integrations.length >= 3) score += 1
  if (form.design === 'premium') score += 1
  if (form.support === 'partnership') score += 1

  if (score >= 6) return { label: 'Enterprise', description: 'A large, mission-critical system with complex integrations and long-term support.' }
  if (score >= 4) return { label: 'Advanced', description: 'A substantial system with multiple modules, integrations, and custom workflows.' }
  if (score >= 2) return { label: 'Moderate', description: 'A focused application with a clear feature set and a few integrations.' }
  return { label: 'Simple', description: 'A well-scoped application with a straightforward feature set.' }
})

const projectTypeLabel = computed(() => config.projectTypes.find(o => o.value === form.projectType)?.label || 'Not selected')
const usersLabel = computed(() => config.userTiers.find(o => o.value === form.users)?.label || 'Not selected')

function toggleFeature(value: string) {
  const i = form.features.indexOf(value)
  if (i === -1) form.features.push(value)
  else form.features.splice(i, 1)
}
function toggleIntegration(value: string) {
  const i = form.integrations.indexOf(value)
  if (i === -1) form.integrations.push(value)
  else form.integrations.splice(i, 1)
}

const { state, submit } = useFormState({}, 'estimate')
const tracking = useLeadTracking()
const { submit: submitLead } = useLeads()

async function handleSubmit() {
  const valid = [nameField.validateOnSubmit(), emailField.validateOnSubmit()].every(Boolean)
  if (!valid) return

  if (!form.projectType) {
    state.error = 'Select a project type to continue.'
    return
  }

  const summary = [
    `Type: ${projectTypeLabel.value}`,
    `Users: ${usersLabel.value}`,
    `Features: ${form.features.length}`,
    `Integrations: ${form.integrations.length}`,
    `Design: ${form.design || 'standard'}`,
    `Timeline: ${form.timeline || 'not specified'}`,
    `Support: ${form.support || 'not specified'}`,
    `Complexity: ${complexity.value.label}`
  ].join(' · ')

  await submit(async () => {
    const lead = await submitLead({
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      serviceInterest: projectTypeLabel.value.toLowerCase().replace(/\s+/g, '-'),
      mainProblem: summary,
      budget: complexity.value.label,
      timeline: form.timeline || undefined,
      source: 'estimate',
      type: 'estimate',
      tracking: tracking.get()
    })
    state.nextStep = lead?.nextStep || 'Our team will review your project configuration and get back to you with a tailored estimate.'
    return lead
  })
}
</script>
