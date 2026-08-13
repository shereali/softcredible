<template>
  <div class="min-h-screen bg-steel-50 flex items-center justify-center p-6">
    <div class="w-full max-w-md">
      <div class="bg-white border border-border rounded-xl shadow-sm p-8">
        <div class="flex items-center gap-3 mb-8">
          <LogoMark :size="32" />
          <div>
            <p class="text-lg font-semibold text-ink leading-tight">Softcredible Admin</p>
            <p class="text-sm text-muted">Sign in to manage content and leads</p>
          </div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5" novalidate>
          <FormInput
            label="Email"
            type="email"
            placeholder="admin@softcredible.com"
            :required="true"
            v-model="email"
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Your password"
            :required="true"
            v-model="password"
          />
          <p v-if="error" class="text-sm text-error">{{ error }}</p>
          <Button type="submit" variant="primary" size="lg" :loading="submitting" :disabled="submitting" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
      <p class="text-center text-sm text-muted mt-6">
        <NuxtLink to="/" class="hover:text-ink transition-colors">← Back to site</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const auth = useAdminAuth()

const email = ref('')
const password = ref('')
const submitting = ref(false)
const error = ref<string | null>(null)

definePageMeta({
  layout: 'blank'
})

// Admin login must not be indexed.
useSeo().setMeta({
  title: 'Admin Login',
  description: 'Softcredible admin login.',
  noIndex: true
})

// Already authenticated? Go straight to the dashboard.
onMounted(() => {
  if (auth.isAuthenticated.value) {
    router.replace('/admin')
  }
})

async function handleLogin() {
  error.value = null
  submitting.value = true
  try {
    await auth.login(email.value, password.value)
    router.replace('/admin')
  } catch (err: any) {
    error.value = err?.data?.errors?.email?.[0] || err?.data?.message || 'Invalid credentials'
  } finally {
    submitting.value = false
  }
}
</script>
