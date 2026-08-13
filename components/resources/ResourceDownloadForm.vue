<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-2xl mx-auto">
        <FormSuccess
          v-if="state.success"
          title="Thanks. Your download is on its way."
          :message="state.nextStep || 'Check your email for the checklist and your next steps.'"
          :steps="[
            { title: 'We email you the download link', description: 'The checklist is sent to the email you provided.' },
            { title: 'Work through the 25 questions', description: 'Identify where your business loses time to manual processes.' },
            { title: 'We follow up with ideas', description: 'If you\'re open to it, we can discuss the highest-payback automation opportunities we see.' }
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
              label="Role"
              placeholder="Your role"
              v-model="form.role"
            />
          </div>
          <FormTextarea
            label="Main Challenge"
            placeholder="What's the biggest manual process you'd like to automate?"
            :rows="3"
            v-model="form.mainChallenge"
          />
          <FormCheckbox id="resource-consent" v-model="form.consent">
            I agree to the <NuxtLink to="/privacy-policy" class="text-accent hover:underline">Privacy Policy</NuxtLink> and consent to receiving the checklist by email.
          </FormCheckbox>
          <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
          <Button type="submit" variant="primary" size="lg" :loading="state.submitting" :disabled="state.submitting" class="w-full sm:w-auto">
            Get the Free Checklist
          </Button>
        </form>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  resourceSlug: string
}>()

const { state, submit } = useFormState({}, 'resource-download')
const tracking = useLeadTracking()

const form = reactive({
  name: '',
  email: '',
  company: '',
  role: '',
  mainChallenge: '',
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
      role: form.role || undefined,
      mainProblem: form.mainChallenge || undefined,
      serviceInterest: props.resourceSlug,
      source: `resource:${props.resourceSlug}`,
      type: 'resource',
      tracking: tracking.get()
    })
    state.nextStep = lead?.nextStep || 'Check your email for the checklist and your next steps.'
    return lead
  })
}
</script>
