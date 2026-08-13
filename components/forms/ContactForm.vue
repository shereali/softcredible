<template>
  <section class="w-full bg-background section">
    <Container>
      <div class="max-w-2xl mx-auto">
        <FormSuccess
          v-if="state.success"
          title="Thanks. Your request has been received."
          :message="state.nextStep || 'Our team will review your project details and get back to you shortly.'"
          :steps="[
            { title: 'We review your project details', description: 'Our team reads through your project type, description, and budget.' },
            { title: 'We respond within one business day', description: 'We reply at the email you provided with initial thoughts and questions.' },
            { title: 'We schedule a discussion', description: 'If it looks like a good fit, we set up a call to talk through the next steps.' }
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
              :error="nameError"
              v-model="form.name"
              @blur="nameField.onBlur()"
            />
            <FormInput
              label="Business Email"
              type="email"
              placeholder="you@company.com"
              :required="true"
              :error="emailError"
              v-model="form.email"
              @blur="emailField.onBlur()"
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
          <FormInput
            label="Website"
            type="url"
            placeholder="https://yourcompany.com"
            :error="websiteError"
            v-model="form.website"
            @blur="websiteField.onBlur()"
          />
          <FormSelect
            label="Project Type"
            placeholder="Select a service"
            :required="true"
            :error="serviceError"
            v-model="form.service"
            @blur="serviceField.onBlur()"
          >
            <option value="custom-web">Custom Web Application</option>
            <option value="saas">SaaS Platform</option>
            <option value="crm">CRM System</option>
            <option value="erp">ERP & Business Management</option>
            <option value="ecommerce">eCommerce</option>
            <option value="pos">POS & Inventory</option>
            <option value="ai-automation">AI & Automation</option>
            <option value="api-integration">API & System Integration</option>
            <option value="modernization">Software Modernization</option>
            <option value="partnership">Dedicated Development Partnership</option>
          </FormSelect>
          <FormTextarea
            label="Project Description"
            placeholder="Tell us about your project, goals, and timeline..."
            :rows="5"
            :required="true"
            :error="messageError"
            v-model="form.message"
            @blur="messageField.onBlur()"
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormSelect
              label="Budget"
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
          <FormSelect
            label="How did you hear about us?"
            placeholder="Select a source"
            v-model="form.source"
          >
            <option value="search">Search engine</option>
            <option value="referral">Referral</option>
            <option value="social">Social media</option>
            <option value="case-study">Case study</option>
            <option value="existing-client">Existing client</option>
            <option value="other">Other</option>
          </FormSelect>
          <FormCheckbox id="contact-consent" v-model="form.consent">
            I agree to the <NuxtLink to="/privacy-policy" class="text-accent hover:underline">Privacy Policy</NuxtLink> and consent to being contacted about my inquiry.
          </FormCheckbox>
          <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
          <Button type="submit" variant="primary" size="lg" :loading="state.submitting" :disabled="state.submitting" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { required, isEmail, isUrl, useFieldError } from '~/composables/useFormValidation'

const { state, submit } = useFormState({}, 'contact')
const tracking = useLeadTracking()

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  website: '',
  service: '',
  message: '',
  budget: '',
  timeline: '',
  source: '',
  consent: false
})

const nameField = useFieldError(toRef(form, 'name'), [required('Enter your name.')])
const emailField = useFieldError(toRef(form, 'email'), [required('Enter your email.'), isEmail])
const websiteField = useFieldError(toRef(form, 'website'), [isUrl])
const serviceField = useFieldError(toRef(form, 'service'), [required('Select a project type.')])
const messageField = useFieldError(toRef(form, 'message'), [required('Tell us about your project.')])

const nameError = toRef(nameField, 'error')
const emailError = toRef(emailField, 'error')
const websiteError = toRef(websiteField, 'error')
const serviceError = toRef(serviceField, 'error')
const messageError = toRef(messageField, 'error')

const { submit: submitLead } = useLeads()

async function handleSubmit() {
  const valid = [
    nameField.validateOnSubmit(),
    emailField.validateOnSubmit(),
    websiteField.validateOnSubmit(),
    serviceField.validateOnSubmit(),
    messageField.validateOnSubmit()
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
      phone: form.phone || undefined,
      website: form.website || undefined,
      serviceInterest: form.service,
      message: form.message,
      budget: form.budget || undefined,
      timeline: form.timeline || undefined,
      source: form.source || 'website',
      type: 'contact',
      tracking: tracking.get()
    })
    state.nextStep = lead?.nextStep || 'Our team will review your project details and get back to you shortly.'
    return lead
  })
}
</script>
