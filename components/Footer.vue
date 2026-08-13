<template>
  <footer class="w-full border-t border-border bg-background">
    <Container>
      <div class="py-12 sm:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          <div class="lg:col-span-2">
            <Logo :size="32" class="mb-4" />
            <p class="text-sm text-ink-soft leading-relaxed max-w-sm">
              We build software that moves businesses forward. Premium B2B software development and business automation partner.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
              >
                Start a Conversation
              </NuxtLink>
            </div>
          </div>

          <div v-for="column in footerColumns" :key="column.title">
            <h3 class="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
              {{ column.title }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in column.links" :key="link.label">
                <NuxtLink
                  v-if="link.href"
                  :to="link.href"
                  class="text-sm text-ink-soft hover:text-ink transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
                <span v-else class="text-sm text-ink-soft">{{ link.label }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-muted">
            © {{ currentYear }} Softcredible. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink to="/privacy-policy" class="text-sm text-muted hover:text-ink transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms-of-service" class="text-sm text-muted hover:text-ink transition-colors">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/cookie-policy" class="text-sm text-muted hover:text-ink transition-colors">
              Cookie Policy
            </NuxtLink>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Custom Web Applications', href: '/solutions/custom-web-development' },
      { label: 'SaaS Development', href: '/solutions/saas-development' },
      { label: 'CRM Systems', href: '/solutions/crm-development' },
      { label: 'ERP & Business Management', href: '/solutions/erp-development' },
      { label: 'eCommerce', href: '/solutions/ecommerce-development' },
      { label: 'Software Modernization', href: '/solutions/software-modernization' },
      { label: 'Dedicated Development Team', href: '/solutions/dedicated-development-team' },
      { label: 'Development Partnership', href: '/solutions/development-partnership' },
    ]
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Retail & eCommerce', href: '/industries/retail' },
      { label: 'Logistics', href: '/industries/logistics' },
      { label: 'Real Estate', href: '/industries/real-estate' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Guides', href: '/resources' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Technology Insights', href: '/resources' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/about#process' },
      { label: 'Work', href: '/case-studies' },
      { label: 'Store', href: '/store' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ]
  }
]
</script>
