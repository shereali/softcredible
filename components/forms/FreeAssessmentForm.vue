<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-2xl mx-auto">
        <FormSuccess
          v-if="state.success"
          title="Thanks. Your request has been received."
          :message="state.nextStep || 'Our team will review your assessment and get back to you shortly.'"
          :steps="[
            { title: 'We review your assessment', description: 'A member of our team reads through your current software and the problem you described.' },
            { title: 'We reach out within one business day', description: 'We contact you at the email you provided to schedule your free 15-minute consultation.' },
            { title: 'You get practical next steps', description: 'During the call we identify the bottleneck and recommend the most practical next move.' }
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
              :error="nameError"
              @blur="nameField.onBlur"
            />
            <FormInput
              label="Business Email"
              type="email"
              placeholder="you@company.com"
              :required="true"
              v-model="form.email"
              :error="emailError"
              @blur="emailField.onBlur"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Company"
              placeholder="Company name"
              v-model="form.company"
            />
            <FormInput
              label="Website"
              type="url"
              placeholder="https://yourcompany.com"
              v-model="form.website"
            />
          </div>
          <FormInput
            label="Current Software"
            placeholder="e.g. Spreadsheets, legacy CRM, nothing yet"
            v-model="form.currentSoftware"
          />
          <FormTextarea
            label="Main Problem"
            placeholder="What is the biggest problem your current software (or lack of it) causes?"
            :rows="4"
            :required="true"
            v-model="form.mainProblem"
            :error="problemError"
            @blur="problemField.onBlur"
          />
          <FormTextarea
            label="What would you like to improve?"
            placeholder="e.g. reduce manual work, connect systems, automate reporting"
            :rows="3"
            v-model="form.improvements"
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormSelect
              label="Budget Range"
              placeholder="Select a range"
              v-model="form.budget"
            >
              <option value="under-5k">Under $5,000</option>
              <option value="5k-15k">$5,000 – $15,000</option>
              <option value="15k-50k">$15,000 – $50,000</option>
              <option value="50k-100k">$50,000 – $100,000</option>
              <option value="100k-plus">$100,000+</option>
              <option value="unsure">Not sure yet</option>
            </FormSelect>
            <FormSelect
              label="Timeline"
              placeholder="When would you like to start?"
              v-model="form.timeline"
            >
              <option value="asap">As soon as possible</option>
              <option value="1-3-months">1 – 3 months</option>
              <option value="3-6-months">3 – 6 months</option>
              <option value="6-plus-months">6+ months</option>
              <option value="exploring">Just exploring</option>
            </FormSelect>
          </div>
          <FormCheckbox id="assessment-consent" v-model="form.consent">
            I agree to the <NuxtLink to="/privacy-policy" class="text-accent hover:underline">Privacy Policy</NuxtLink> and consent to being contacted about my assessment.
          </FormCheckbox>
          <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
          <Button type="submit" variant="primary" size="lg" :loading="state.submitting" :disabled="state.submitting" className="w-full sm:w-auto">
            Request My Free Assessment
          </Button>
        </form>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { required, isEmail, useFieldError } from '~/composables/useFormValidation'

const { state, submit } = useFormState({}, 'free-assessment')
const tracking = useLeadTracking()

const form = reactive({
  name: '',
  email: '',
  company: '',
  website: '',
  currentSoftware: '',
  mainProblem: '',
  improvements: '',
  budget: '',
  timeline: '',
  consent: false
})

const nameField = useFieldError(toRef(form, 'name'), [required('Enter your name.')])
const emailField = useFieldError(toRef(form, 'email'), [required('Enter your email.'), isEmail])
const problemField = useFieldError(toRef(form, 'mainProblem'), [required('Describe your main problem.')])

const nameError = toRef(nameField, 'error')
const emailError = toRef(emailField, 'error')
const problemError = toRef(problemField, 'error')

const { submit: submitLead } = useLeads()

async function handleSubmit() {
  const valid = [
    nameField.validateOnSubmit(),
    emailField.validateOnSubmit(),
    problemField.validateOnSubmit()
  ].every(Boolean)

  if (!valid) return

  if (!form.consent) {
    state.error = 'Please agree to the Privacy Policy to continue.'
    return
  }

  await submit(async () => {
    const lead = await submitLead({
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      website: form.website || undefined,
      currentSoftware: form.currentSoftware || undefined,
      mainProblem: form.mainProblem,
      improvements: form.improvements || undefined,
      budget: form.budget || undefined,
      timeline: form.timeline || undefined,
      serviceInterest: 'free-assessment',
      source: 'free-assessment',
      type: 'assessment',
      tracking: tracking.get()
    })
    state.nextStep = lead?.nextStep || 'Our team will review your assessment and get back to you shortly.'
    return lead
  })
}
</script>
