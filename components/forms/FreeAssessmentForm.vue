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

        <div v-else class="bg-surface border border-border rounded-xl p-6 lg:p-10 shadow-sm">
          <!-- Progress -->
          <div class="mb-10">
            <div class="flex items-center justify-between mb-3">
              <p class="text-caption font-medium text-muted uppercase tracking-wider">
                Step {{ step + 1 }} of {{ steps.length }}
              </p>
              <p class="text-sm text-muted">{{ stepLabel }}</p>
            </div>
            <div class="h-1.5 bg-steel-100 rounded-full overflow-hidden" role="progressbar" :aria-valuenow="((step + 1) / steps.length) * 100" aria-valuemin="0" aria-valuemax="100">
              <div
                class="h-full bg-accent rounded-full transition-all duration-300 ease-out"
                :style="{ width: `${((step + 1) / steps.length) * 100}%` }"
              />
            </div>
          </div>

          <!-- Step content -->
          <form @submit.prevent="handleSubmit" novalidate>
            <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
              <div :key="step" class="min-h-[320px]">
                <!-- Step 1: build type -->
                <div v-if="step === 0">
                  <h2 class="text-h3 mb-2">What are you looking to build?</h2>
                  <p class="text-sm text-ink-soft mb-6">Select the option closest to your goal.</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      v-for="opt in buildTypes"
                      :key="opt.value"
                      type="button"
                      class="px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all duration-200"
                      :class="form.buildType === opt.value
                        ? 'border-accent bg-accent-soft text-accent'
                        : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                      @click="form.buildType = opt.value"
                    >
                      {{ opt.label }}
                    </button>
                  </div>
                </div>

                <!-- Step 2: problem -->
                <div v-else-if="step === 1">
                  <h2 class="text-h3 mb-2">What problem are you trying to solve?</h2>
                  <p class="text-sm text-ink-soft mb-6">Describe it in your own words. Specific is better.</p>
                  <FormTextarea
                    label="The problem"
                    placeholder="e.g. Our team manages orders in spreadsheets and we lose track of what ships when."
                    :rows="4"
                    v-model="form.mainProblem"
                    :error="problemError"
                    @blur="problemField.onBlur"
                  />
                </div>

                <!-- Step 3: current workflow -->
                <div v-else-if="step === 2">
                  <h2 class="text-h3 mb-2">What does your current workflow look like?</h2>
                  <p class="text-sm text-ink-soft mb-6">What tools and manual steps are involved today?</p>
                  <FormTextarea
                    label="Current workflow"
                    placeholder="e.g. WhatsApp for orders, Excel for stock, everything entered twice."
                    :rows="4"
                    v-model="form.currentSoftware"
                  />
                </div>

                <!-- Step 4: users -->
                <div v-else-if="step === 3">
                  <h2 class="text-h3 mb-2">How many users will use the system?</h2>
                  <p class="text-sm text-ink-soft mb-6">A rough number is fine.</p>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button
                      v-for="opt in userTiers"
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

                <!-- Step 5: existing software -->
                <div v-else-if="step === 4">
                  <h2 class="text-h3 mb-2">Do you have existing software?</h2>
                  <p class="text-sm text-ink-soft mb-6">We can improve or replace what you already have.</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      v-for="opt in existingOptions"
                      :key="opt.value"
                      type="button"
                      class="px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all duration-200"
                      :class="form.hasExisting === opt.value
                        ? 'border-accent bg-accent-soft text-accent'
                        : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                      @click="form.hasExisting = opt.value"
                    >
                      {{ opt.label }}
                    </button>
                  </div>
                </div>

                <!-- Step 6: timeline -->
                <div v-else-if="step === 5">
                  <h2 class="text-h3 mb-2">What is your target timeline?</h2>
                  <p class="text-sm text-ink-soft mb-6">When would you like to start?</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      v-for="opt in timelineOptions"
                      :key="opt.value"
                      type="button"
                      class="px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all duration-200"
                      :class="form.timeline === opt.value
                        ? 'border-accent bg-accent-soft text-accent'
                        : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                      @click="form.timeline = opt.value"
                    >
                      {{ opt.label }}
                    </button>
                  </div>
                </div>

                <!-- Step 7: budget -->
                <div v-else-if="step === 6">
                  <h2 class="text-h3 mb-2">What is your approximate investment range?</h2>
                  <p class="text-sm text-ink-soft mb-6">This helps us understand project scope.</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      v-for="opt in budgetOptions"
                      :key="opt.value"
                      type="button"
                      class="px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all duration-200"
                      :class="form.budget === opt.value
                        ? 'border-accent bg-accent-soft text-accent'
                        : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                      @click="form.budget = opt.value"
                    >
                      {{ opt.label }}
                    </button>
                  </div>
                </div>

                <!-- Step 8: contact -->
                <div v-else>
                  <h2 class="text-h3 mb-2">Where should we send your assessment?</h2>
                  <p class="text-sm text-ink-soft mb-6">No obligation. Response within one business day.</p>
                  <div class="space-y-5">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput label="Name" placeholder="Your name" :required="true" v-model="form.name" :error="nameError" @blur="nameField.onBlur" />
                      <FormInput label="Business Email" type="email" placeholder="you@company.com" :required="true" v-model="form.email" :error="emailError" @blur="emailField.onBlur" />
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput label="Company" placeholder="Company name" v-model="form.company" />
                      <FormInput label="Website" type="url" placeholder="https://yourcompany.com" v-model="form.website" />
                    </div>
                    <FormInput label="WhatsApp / Phone" placeholder="Optional" v-model="form.phone" />
                    <FormCheckbox id="assessment-consent" v-model="form.consent">
                      I agree to the <NuxtLink to="/privacy-policy" class="text-accent hover:underline">Privacy Policy</NuxtLink> and consent to being contacted about my assessment.
                    </FormCheckbox>
                    <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Controls -->
            <div class="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
              <Button v-if="step > 0" variant="ghost" size="md" type="button" @click="handleBack">
                Back
              </Button>
              <span v-else />
              <Button
                v-if="step < steps.length - 1"
                variant="primary"
                size="md"
                type="submit"
              >
                Continue
              </Button>
              <Button
                v-else
                variant="primary"
                size="md"
                type="submit"
                :loading="state.submitting"
                :disabled="state.submitting"
              >
                Request My Free Assessment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { required, isEmail, useFieldError } from '~/composables/useFormValidation'

const { state, submit } = useFormState({}, 'free-assessment')
const tracking = useLeadTracking()

const steps = ['Build type', 'Problem', 'Workflow', 'Users', 'Existing software', 'Timeline', 'Budget', 'Contact']
const step = ref(0)
const direction = ref<'next' | 'back'>('next')

const stepLabel = computed(() => steps[step.value])

const buildTypes = [
  { label: 'New Business Application', value: 'new-app' },
  { label: 'SaaS Product', value: 'saas' },
  { label: 'CRM', value: 'crm' },
  { label: 'ERP', value: 'erp' },
  { label: 'eCommerce', value: 'ecommerce' },
  { label: 'POS', value: 'pos' },
  { label: 'Automation', value: 'automation' },
  { label: 'AI Application', value: 'ai' },
  { label: 'Improve Existing Software', value: 'improve-existing' },
  { label: 'Development Partnership', value: 'partnership' },
  { label: 'Not Sure', value: 'unsure' }
]
const userTiers = [
  { label: '1–10', value: '1-10' },
  { label: '11–50', value: '11-50' },
  { label: '51–200', value: '51-200' },
  { label: '200+', value: '200-plus' }
]
const existingOptions = [
  { label: 'Yes, we have software', value: 'yes' },
  { label: 'No, mostly manual', value: 'no' }
]
const timelineOptions = [
  { label: 'As soon as possible', value: 'asap' },
  { label: '1 – 3 months', value: '1-3-months' },
  { label: '3 – 6 months', value: '3-6-months' },
  { label: '6+ months', value: '6-plus-months' }
]
const budgetOptions = [
  { label: 'Under $5,000', value: 'under-5k' },
  { label: '$5,000 – $15,000', value: '5k-15k' },
  { label: '$15,000 – $50,000', value: '15k-50k' },
  { label: '$50,000+', value: '50k-plus' },
  { label: 'Not sure yet', value: 'unsure' }
]

const form = reactive({
  buildType: '',
  mainProblem: '',
  currentSoftware: '',
  users: '',
  hasExisting: '',
  timeline: '',
  budget: '',
  name: '',
  email: '',
  company: '',
  website: '',
  phone: '',
  consent: false
})

const nameField = useFieldError(toRef(form, 'name'), [required('Enter your name.')])
const emailField = useFieldError(toRef(form, 'email'), [required('Enter your email.'), isEmail])
const problemField = useFieldError(toRef(form, 'mainProblem'), [required('Describe your main problem.')])

const nameError = toRef(nameField, 'error')
const emailError = toRef(emailField, 'error')
const problemError = toRef(problemField, 'error')

const { submit: submitLead } = useLeads()

function handleNext() {
  if (step.value === 1 && !problemField.validateOnSubmit()) return
  if (step.value === 0 && !form.buildType) {
    state.error = 'Select an option to continue.'
    return
  }
  state.error = ''
  direction.value = 'next'
  step.value = Math.min(step.value + 1, steps.length - 1)
}

function handleBack() {
  direction.value = 'back'
  step.value = Math.max(step.value - 1, 0)
}

async function handleSubmit() {
  if (step.value < steps.length - 1) {
    handleNext()
    return
  }
  const valid = [nameField.validateOnSubmit(), emailField.validateOnSubmit()].every(Boolean)
  if (!valid) return

  if (!form.consent) {
    state.error = 'Please agree to the Privacy Policy to continue.'
    return
  }

  const buildLabel = buildTypes.find(o => o.value === form.buildType)?.label || form.buildType

  await submit(async () => {
    const lead = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      company: form.company || undefined,
      website: form.website || undefined,
      currentSoftware: form.currentSoftware || undefined,
      mainProblem: `${buildLabel}. ${form.mainProblem}`.trim(),
      improvements: form.users ? `Users: ${form.users}` : undefined,
      budget: form.budget || undefined,
      timeline: form.timeline || undefined,
      serviceInterest: form.buildType || 'free-assessment',
      source: 'free-assessment',
      type: 'assessment',
      tracking: tracking.get()
    })
    state.nextStep = lead?.nextStep || 'Our team will review your assessment and get back to you shortly.'
    return lead
  })
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 250ms cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-left-enter-from { opacity: 0; transform: translateX(24px); }
.slide-left-leave-to { opacity: 0; transform: translateX(-24px); }
.slide-right-enter-from { opacity: 0; transform: translateX(-24px); }
.slide-right-leave-to { opacity: 0; transform: translateX(24px); }
@media (prefers-reduced-motion: reduce) {
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: none;
  }
}
</style>
