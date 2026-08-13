export interface StoreProduct {
  slug: string
  name: string
  tagline: string
  description: string
  price: number
  priceLabel: string
  category: 'template' | 'script' | 'automation' | 'app'
  license: string
  features: string[]
  includes: string[]
  tech: string[]
  demoUrl?: string
  popular?: boolean
}

// Self-serve digital products. These are starter assets the Softcredible
// team ships (templates, scripts, automation starters) — separate from the
// consultative custom-project funnel. Prices are fixed, low-commitment.
export const storeProducts: StoreProduct[] = [
  {
    slug: 'laravel-saas-starter',
    name: 'Laravel SaaS Starter',
    tagline: 'Production-ready SaaS foundation: auth, billing, teams, roles.',
    description: 'A battle-tested Laravel starter for subscription products. Multi-tenancy via teams, Stripe billing, role-based access, and an admin scaffold. Built the way we build client projects: clean architecture, tests, and no framework lock-in.',
    price: 149,
    priceLabel: 'One-time',
    category: 'template',
    license: 'Single project license',
    features: [
      'Auth, teams, roles and permissions',
      'Stripe subscription billing with webhooks',
      'Admin dashboard scaffold',
      'API with Sanctum tokens',
      'Pest test suite',
      'Filament-ready structure'
    ],
    includes: ['Source code (Laravel 11)', 'Setup documentation', '1 project license'],
    tech: ['Laravel', 'Vue', 'MySQL'],
    popular: true
  },
  {
    slug: 'nuxt-marketing-kit',
    name: 'Nuxt Marketing Kit',
    tagline: 'High-converting marketing site structure with SEO baked in.',
    description: 'The marketing-site pattern we use for client launches: hero, proof sections, conversion funnels, and schema-ready SEO. Ships with Tailwind, accessible components, and a sitemap/robots setup.',
    price: 89,
    priceLabel: 'One-time',
    category: 'template',
    license: 'Single project license',
    features: [
      'Component library with dark mode',
      'SEO: meta, OG, schema, sitemap',
      'Lead-capture form wired to any API',
      'Accessible by default',
      'Lighthouse-friendly structure'
    ],
    includes: ['Source code (Nuxt 4)', 'Setup guide', '1 project license'],
    tech: ['Nuxt', 'Vue', 'Tailwind']
  },
  {
    slug: 'whatsapp-order-bot',
    name: 'WhatsApp Order Bot',
    tagline: 'Automated order intake and confirmation over WhatsApp.',
    description: 'A Laravel + WhatsApp Business API script that takes orders, confirms them, and routes them to your team. Removes the "order taken, then re-typed" workflow entirely.',
    price: 59,
    priceLabel: 'One-time',
    category: 'automation',
    license: 'Single business license',
    features: [
      'Order capture over WhatsApp',
      'Confirmation + receipt messages',
      'Order feed for your team',
      'Simple dashboard to manage orders',
      'Webhook-ready'
    ],
    includes: ['Source code', 'Deploy instructions', '1 business license'],
    tech: ['Laravel', 'WhatsApp API']
  },
  {
    slug: 'invoice-automation-script',
    name: 'Invoice Automation Script',
    tagline: 'Turn recurring work into invoices without the copy-paste.',
    description: 'Generates and emails professional invoices from your existing workflow data. Handles recurring billing, overdue reminders, and a clean PDF every time.',
    price: 49,
    priceLabel: 'One-time',
    category: 'script',
    license: 'Single business license',
    features: [
      'Recurring invoice generation',
      'Automatic PDF output',
      'Overdue payment reminders',
      'Email delivery built in',
      'CSV import from spreadsheets'
    ],
    includes: ['Source code (PHP)', 'Setup guide', '1 business license'],
    tech: ['PHP', 'Laravel']
  },
  {
    slug: 'crm-lightweight-starter',
    name: 'CRM Lightweight Starter',
    tagline: 'A focused CRM foundation: contacts, pipeline, follow-ups.',
    description: 'A lean CRM you can extend: contact management, a simple sales pipeline, and follow-up queues. Ideal when a full CRM is overkill but spreadsheets stopped working.',
    price: 119,
    priceLabel: 'One-time',
    category: 'app',
    license: 'Single project license',
    features: [
      'Contact and company records',
      'Visual sales pipeline',
      'Follow-up queue and reminders',
      'Activity history',
      'Import from CSV'
    ],
    includes: ['Source code (Laravel + Vue)', 'Setup documentation', '1 project license'],
    tech: ['Laravel', 'Vue', 'MySQL'],
    popular: true
  },
  {
    slug: 'lead-scoring-script',
    name: 'Lead Scoring Script',
    tagline: 'Prioritize inbound leads by fit and intent automatically.',
    description: 'A lightweight scoring engine that evaluates new leads against your criteria and assigns priority, so your team calls the right people first.',
    price: 45,
    priceLabel: 'One-time',
    category: 'script',
    license: 'Single business license',
    features: [
      'Configurable scoring rules',
      'Fit + intent scoring',
      'Priority queue output',
      'Webhook integration',
      'CSV export'
    ],
    includes: ['Source code (PHP)', 'Setup guide', '1 business license'],
    tech: ['PHP', 'Laravel']
  }
]

export function getProductBySlug(slug: string): StoreProduct | undefined {
  return storeProducts.find(p => p.slug === slug)
}
