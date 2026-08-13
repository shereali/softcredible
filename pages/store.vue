<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            <span class="text-xs font-medium text-primary">Digital products</span>
          </div>
          <h1 class="text-display mb-6">
            Ready-Made Tools, Templates &amp; Scripts
          </h1>
          <p class="text-body-lg text-ink-soft max-w-xl">
            Self-serve starters built the way we build client projects. Buy once, use immediately. For anything custom, talk to us about a tailored build.
          </p>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
            <Button variant="primary" size="lg" href="#store-grid">Browse Tools</Button>
            <Button variant="outline" size="lg" to="/estimate">Need Something Custom?</Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Category filter -->
    <section id="store-grid" class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat.value"
              type="button"
              class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200"
              :class="activeCategory === cat.value
                ? 'border-accent bg-accent-soft text-accent'
                : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
              @click="activeCategory = cat.value"
            >
              {{ cat.label }}
            </button>
          </div>
          <p class="text-sm text-muted">{{ filteredProducts.length }} product{{ filteredProducts.length === 1 ? '' : 's' }}</p>
        </div>

        <!-- Product grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="product in filteredProducts"
            :key="product.slug"
            class="bg-surface border border-border rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 overflow-hidden flex flex-col"
          >
            <div class="relative aspect-video bg-gradient-to-br from-brand-100 to-accent-soft flex items-center justify-center">
              <div class="w-16 h-16 flex items-center justify-center rounded-xl bg-surface/80 border border-border shadow-sm">
                <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </div>
              <span v-if="product.popular" class="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                Popular
              </span>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center justify-between mb-2">
                <span class="text-caption font-medium text-muted uppercase tracking-wider">{{ product.category }}</span>
                <span class="text-xs font-medium text-muted">{{ product.license }}</span>
              </div>
              <h3 class="text-h4 mb-1">{{ product.name }}</h3>
              <p class="text-sm text-ink-soft leading-relaxed mb-4">{{ product.tagline }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="feat in product.features.slice(0, 4)" :key="feat" class="flex items-start gap-2 text-sm text-ink-soft">
                  <svg class="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ feat }}
                </li>
              </ul>
              <div class="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-border">
                <div class="text-h3 text-ink">
                  ${{ product.price }}
                  <span class="text-xs font-normal text-muted">/ {{ product.priceLabel.toLowerCase() }}</span>
                </div>
                <div class="flex gap-2">
                  <Button v-if="product.demoUrl" variant="outline" size="sm" :to="product.demoUrl">Demo</Button>
                  <Button variant="primary" size="sm" @click="openCheckout(product)">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Custom work cross-sell -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-h2 mb-4">Need Something Custom?</h2>
          <p class="text-body-lg text-ink-soft mb-8 max-w-xl mx-auto">
            The store covers ready-made assets. For custom software, automation, or a full product, we scope projects around your business.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/estimate">Get a Project Estimate</Button>
            <Button variant="outline" size="lg" to="/contact">Talk to Us</Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Checkout modal (self-serve, separate from consultation) -->
    <TransitionRoot :show="checkoutOpen" as="template" @after-leave="selectedProduct = null">
      <Dialog as="div" class="relative z-50" @close="checkoutOpen = false">
        <TransitionChild
          as="template"
          enter="duration-200 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-150 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-ink/50 backdrop-blur-sm" aria-hidden="true" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-200 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-150 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform rounded-2xl bg-surface p-6 shadow-2xl border border-border">
                <div v-if="selectedProduct">
                  <div class="flex items-start justify-between mb-6">
                    <div>
                      <p class="text-caption font-medium text-muted uppercase tracking-wider mb-1">Checkout</p>
                      <DialogTitle as="h3" class="text-h4">{{ selectedProduct.name }}</DialogTitle>
                      <p class="text-sm text-ink-soft mt-1">{{ selectedProduct.license }} · ${{ selectedProduct.price }}</p>
                    </div>
                    <button
                      type="button"
                      class="p-2 -mr-2 text-ink-soft hover:text-ink"
                      aria-label="Close checkout"
                      @click="checkoutOpen = false"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <form @submit.prevent="handleCheckout" class="space-y-5" novalidate>
                    <FormInput label="Name" placeholder="Your name" :required="true" v-model="form.name" :error="nameError" @blur="nameField.onBlur" />
                    <FormInput label="Business Email" type="email" placeholder="you@company.com" :required="true" v-model="form.email" :error="emailError" @blur="emailField.onBlur" />
                    <label class="flex items-start gap-3 text-sm text-ink-soft cursor-pointer">
                      <input
                        v-model="form.accepted"
                        type="checkbox"
                        class="mt-0.5 w-4 h-4 rounded border-border text-accent focus:ring-accent"
                        required
                      />
                      <span>
                        I accept the {{ selectedProduct.license.toLowerCase() }} and agree to receive the download link by email.
                      </span>
                    </label>
                    <p v-if="state.error" class="text-sm text-error">{{ state.error }}</p>
                    <Button type="submit" variant="primary" size="lg" :loading="state.submitting" :disabled="state.submitting || !form.accepted" className="w-full">
                      Buy Now — ${{ selectedProduct.price }}
                    </Button>
                    <p class="text-xs text-muted text-center">Instant delivery by email. No subscription.</p>
                  </form>
                </div>

                <div v-else class="text-center py-8">
                  <svg class="w-10 h-10 mx-auto text-success mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 class="text-h4 mb-2">Order received</h3>
                  <p class="text-sm text-ink-soft">{{ state.nextStep }}</p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { required, isEmail, useFieldError } from '~/composables/useFormValidation'
import { storeProducts } from '~/data/store'
import type { StoreProduct } from '~/data/store'

useSeo().setMeta({
  title: 'Digital Products Store — Templates, Scripts & Automation Tools',
  description: 'Self-serve software templates, scripts, and automation starters from Softcredible. Buy once, use immediately.'
})

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Templates', value: 'template' },
  { label: 'Apps', value: 'app' },
  { label: 'Automation', value: 'automation' },
  { label: 'Scripts', value: 'script' }
]

const activeCategory = ref('all')
const filteredProducts = computed(() =>
  activeCategory.value === 'all'
    ? storeProducts
    : storeProducts.filter(p => p.category === activeCategory.value)
)

const checkoutOpen = ref(false)
const selectedProduct = ref<StoreProduct | null>(null)

const form = reactive({
  name: '',
  email: '',
  accepted: false
})

const nameField = useFieldError(toRef(form, 'name'), [required('Enter your name.')])
const emailField = useFieldError(toRef(form, 'email'), [required('Enter your email.'), isEmail])
const nameError = toRef(nameField, 'error')
const emailError = toRef(emailField, 'error')

const { state, submit } = useFormState({}, 'store')
const tracking = useLeadTracking()
const { submit: submitLead } = useLeads()

function openCheckout(product: StoreProduct) {
  selectedProduct.value = product
  checkoutOpen.value = true
}

async function handleCheckout() {
  const valid = [nameField.validateOnSubmit(), emailField.validateOnSubmit()].every(Boolean)
  if (!valid || !selectedProduct.value) return

  const product = selectedProduct.value
  await submit(async () => {
    const lead = await submitLead({
      name: form.name,
      email: form.email,
      serviceInterest: `store:${product.slug}`,
      mainProblem: `Digital product order: ${product.name} (${product.license}).`,
      budget: `$${product.price}`,
      source: 'store',
      type: 'store',
      tracking: tracking.get()
    })
    state.nextStep = 'Check your email for the download link and license key. Delivery is instant.'
    return lead
  })
}
</script>
