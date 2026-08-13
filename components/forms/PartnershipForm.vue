<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-2xl mx-auto">
        <FormSuccess
          v-if="state.success"
          title="Thanks. Your partnership enquiry has been received."
          :message="state.nextStep || 'Our team will review your enquiry and reach out to discuss how we can support your agency.'"
          :steps="[
            { title: 'We review your enquiry', description: 'We look at your agency, your services, and the support you need.' },
            { title: 'We reach out within one business day', description: 'We contact you to understand your current capacity and typical projects in more detail.' },
            { title: 'We propose how to work together', description: 'We outline the collaboration model, communication process, and how handoff works.' }
          ]"
          :primary-cta="{ label: 'Back to Home', href: '/' }"
          :secondary-cta="{ label: 'Explore Our Services', href: '/solutions' }"
        />

        <form v-else @submit.prevent="handleSubmit" class="space-y-6" novalidate>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Agency Name"
              placeholder="Your agency's name"
              :required="true"
              v-model="form.agencyName"
            />
            <FormInput
              label="Contact"
              placeholder="Your name and role"
              :required="true"
              v-model="form.contact"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Business Email"
              type="email"
              placeholder="you@agency.com"
              :required="true"
              v-model="form.email"
            />
            <FormInput
              label="Website"
              type="url"
              placeholder="https://youragency.com"
              v-model="form.website"
            />
          </div>
          <FormSelect
            label="Services"
            placeholder="Select the services you need"
            :required="true"
            v-model="form.services"
          >
            <option value="white-label">White-label development</option>
            <option value="laravel">Laravel development</option>
            <option value="vue-nuxt">Vue / Nuxt development</option>
            <option value="api-integration">API integration</option>
            <option value="custom-applications">Custom applications</option>
            <option value="maintenance">Maintenance</option>
            <option value="feature-development">Feature development</option>
            <option value="long-term-engineering">Long-term engineering support</option>
            <option value="multiple">Multiple of the above</option>
          </FormSelect>
          <FormSelect
            label="Current Development Capacity"
            placeholder="How is your development capacity today?"
            :required="true"
            v-model="form.capacity"
          >
            <option value="no-inhouse">No in-house developers</option>
            <option value="small-team">Small in-house team</option>
            <option value="scaling">Scaling and hiring</option>
            <option value="at-capacity">At full capacity</option>
          </FormSelect>
          <FormTextarea
            label="Typical Projects"
            placeholder="What kinds of projects do you take on? e.g. marketing sites, web apps, SaaS products"
            :rows="4"
            v-model="form.projects"
          />
          <FormTextarea
            label="What support is needed?"
            placeholder="Tell us what would help most: overflow capacity, a specific skill, full project delivery..."
            :rows="4"
            v-model="form.supportNeeded"
          />
          <FormSelect
            label="Timeline"
            placeholder="When would you like to start?"
            v-model="form.timeline"
          >
            <option value="asap">As soon as possible</option>
            <option value="1-3-months">1 – 3 months</option>
            <option value="3-6-months">3 – 6 months</option>
            <option value="exploring">Just exploring</option>
          </FormSelect>
          <FormCheckbox id="partnership-consent" v-model="form.consent">
            I agree to the <NuxtLink to="/privacy-policy" class="text-accent hover:underline">Privacy Policy</NuxtLink> and consent to being contacted about this partnership enquiry.
          </FormCheckbox>
          <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
          <Button type="submit" variant="primary" size="lg" :loading="state.submitting" :disabled="state.submitting" className="w-full sm:w-auto">
            Become a Development Partner
          </Button>
        </form>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
const { state, submit } = useFormState({}, 'partnership')
const tracking = useLeadTracking()

const form = reactive({
  agencyName: '',
  contact: '',
  email: '',
  website: '',
  services: '',
  capacity: '',
  projects: '',
  supportNeeded: '',
  timeline: '',
  consent: false
})

const { submit: submitLead } = useLeads()

async function handleSubmit() {
  if (!form.consent) {
    state.error = 'Please agree to the Privacy Policy to continue.'
    return
  }

  await submit(async () => {
    const lead = await submitLead({
      name: form.contact,
      email: form.email,
      company: form.agencyName,
      website: form.website || undefined,
      serviceInterest: form.services,
      currentSoftware: form.capacity,
      message: [form.projects, form.supportNeeded].filter(Boolean).join('\n\n'),
      timeline: form.timeline || undefined,
      source: 'development-partnership',
      type: 'partnership',
      tracking: tracking.get()
    })
    state.nextStep = lead?.nextStep || 'Our team will review your enquiry and reach out to discuss how we can support your agency.'
    return lead
  })
}
</script>
