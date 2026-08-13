<template>
  <section class="w-full bg-background">
    <Container>
      <div class="max-w-2xl mx-auto">
        <FormSuccess
          v-if="state.success"
          title="Thanks. Your call request has been received."
          :message="state.nextStep || 'Our team will reach out to schedule your free strategy call.'"
          :steps="[
            { title: 'We review your request', description: 'We check your details and availability preferences.' },
            { title: 'We send you times', description: 'We email you a few options for the strategy call.' },
            { title: 'We talk', description: 'You get a practical, no-pressure conversation about your next step.' }
          ]"
          :primary-cta="{ label: 'Back to Home', href: '/' }"
          :secondary-cta="{ label: 'Explore Our Solutions', href: '/solutions' }"
        />

        <form v-else @submit.prevent="handleSubmit" class="space-y-6" novalidate>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              placeholder="Your name"
              :required="true"
              v-model="form.name"
            />
            <FormInput
              label="Business Email"
              type="email"
              placeholder="you@company.com"
              :required="true"
              v-model="form.email"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Company"
              placeholder="Company name"
              v-model="form.company"
            />
            <FormInput
              label="Phone / WhatsApp"
              placeholder="+1 (555) 000-0000"
              v-model="form.phone"
            />
          </div>
          <FormTextarea
            label="What would you like to discuss?"
            placeholder="Briefly describe your situation or the problem you're facing..."
            :rows="4"
            v-model="form.message"
          />
          <FormSelect
            label="Preferred time"
            placeholder="When works best for you?"
            v-model="form.timeline"
          >
            <option value="weekday-morning">Weekday morning</option>
            <option value="weekday-afternoon">Weekday afternoon</option>
            <option value="weekday-evening">Weekday evening</option>
            <option value="flexible">Flexible</option>
          </FormSelect>
          <FormCheckbox id="booking-consent" v-model="form.consent">
            I agree to the <NuxtLink to="/privacy-policy" class="text-accent hover:underline">Privacy Policy</NuxtLink> and consent to being contacted about booking a call.
          </FormCheckbox>
          <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
          <Button type="submit" variant="primary" size="lg" :loading="state.submitting" :disabled="state.submitting" className="w-full sm:w-auto">
            Book My Free Call
          </Button>
        </form>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
const { state, submit } = useFormState({}, 'booking')
const tracking = useLeadTracking()

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
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
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      phone: form.phone || undefined,
      message: form.message || undefined,
      timeline: form.timeline || undefined,
      serviceInterest: 'strategy-call',
      source: 'book-a-call',
      type: 'booking',
      tracking: tracking.get()
    })
    state.nextStep = lead?.nextStep || 'Our team will reach out to schedule your free strategy call.'
    return lead
  })
}
</script>
