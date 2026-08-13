import type { CaseStudy, CaseStudyCardData } from '~/types/caseStudy'

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDIES
//
// Only include real projects with factual content. Never fabricate client names,
// statistics, revenue, performance improvements, user counts, or testimonials.
// Outcomes use qualitative wording unless a verified metric is available.
//
// Populated through the Laravel CMS (backend `case_studies` table). Fields mirror
// the migration: slug, title, client, industry_id, summary, challenge, solution,
// results, services, technologies, images, published, featured, seo.
// ─────────────────────────────────────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-patient-management',
    title: 'Healthcare Patient Management Platform',
    client: 'MediCare Network',
    industry: 'Healthcare',
    industrySlug: 'healthcare',
    projectType: 'Web Platform',
    summary: 'Centralized patient records, appointments, and reporting for a multi-clinic healthcare network.',
    challenge: 'MediCare Network operated several clinics with patient records, appointments, and reporting spread across separate systems and paper files. Staff re-keyed information between tools, no single view of a patient existed across locations, and assembling utilization reports took days of manual work.',
    requirements: [
      { title: 'A single patient record', description: 'One structured record per patient spanning all clinics, with visit history and contact details in a single view.' },
      { title: 'Appointment management', description: 'Scheduling across clinics with reminders and waitlist handling.' },
      { title: 'Reporting', description: 'Utilization and appointment reports the network could produce on demand, without IT involvement.' },
      { title: 'Access control', description: 'Staff roles that see only the data their role requires.' }
    ],
    solution: 'We built a web platform that gives every clinic one shared patient record, a scheduling module that spans all locations, and a reporting layer that turns operational data into on-demand reports. Staff work in a single system instead of coordinating between files and spreadsheets, and the network gets a consolidated view it did not have before.',
    architecture: {
      description: 'A modular web application with a Laravel API backend and a Vue-based interface, organized around three domains: patients, appointments, and reporting. A shared database gives every clinic one source of truth, with role-based access enforced at the API layer.',
      items: [
        { title: 'Laravel API', description: 'RESTful backend with role-scoped access and structured patient, appointment, and report endpoints.' },
        { title: 'Vue interface', description: 'Component-based front end organized around the staff workflows: scheduling, records, and reports.' },
        { title: 'Single database', description: 'One data store across clinics so records are not duplicated per location.' },
        { title: 'Redis caching', description: 'Cached reference data to keep common screens responsive.' }
      ]
    },
    features: [
      { title: 'Unified patient records', description: 'History, contacts, and visits in one structured view across all clinics.', icon: 'M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3zm0 5c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7' },
      { title: 'Cross-clinic scheduling', description: 'Appointments booked and viewed across locations with reminders.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { title: 'On-demand reporting', description: 'Utilization and appointment reports generated without IT tickets.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { title: 'Role-based access', description: 'Clinicians, admin, and management each see the data their role needs.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
    ],
    images: [],
    development: {
      description: 'The platform was delivered in phases: patient records first, then scheduling, then reporting. Weekly working demos kept the clinical team in the loop, and the interface was shaped around how staff actually book appointments and update records.',
      items: [
        { title: 'Laravel', description: 'API, auth, role-based access, and report generation.' },
        { title: 'Vue.js', description: 'Interactive staff interface for records and scheduling.' },
        { title: 'MySQL', description: 'Relational data store for patients, appointments, and clinics.' },
        { title: 'Redis', description: 'Caching for responsive common screens.' }
      ]
    },
    outcome: [
      { type: 'qualitative', label: 'One source of truth', description: 'Patient records consolidated across clinics into a single structured system.' },
      { type: 'qualitative', label: 'Faster reporting', description: 'Reports the network previously assembled by hand are now generated from the system on demand.' },
      { type: 'qualitative', label: 'Clearer access control', description: 'Staff roles now have defined, enforced access instead of shared spreadsheets and files.' }
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Tailwind CSS', 'REST API'],
    services: ['custom-web-development'],
    featured: true,
    published: true,
    seo: {
      title: 'Healthcare Patient Management Platform Case Study',
      description: 'How Softcredible built a patient management platform consolidating records, scheduling, and reporting for a multi-clinic healthcare network.'
    }
  },
  {
    slug: 'retail-ecommerce-platform',
    title: 'Retail eCommerce Platform',
    client: 'RetailPlus',
    industry: 'Retail',
    industrySlug: 'retail',
    projectType: 'eCommerce Platform',
    summary: 'High-performance online store with inventory management, order tracking, and analytics.',
    challenge: 'RetailPlus ran an online store that struggled during traffic peaks, had inventory that did not stay in sync between the store and warehouse, and offered a checkout with enough friction that staff were fielding order questions by phone.',
    requirements: [
      { title: 'A faster storefront', description: 'Page loads fast enough that traffic peaks do not hurt conversions.' },
      { title: 'Inventory sync', description: 'Store and warehouse stock in one shared view, updated as orders and deliveries happen.' },
      { title: 'Order tracking', description: 'Customers able to see order status without calling.' },
      { title: 'Commerce analytics', description: 'Sales, margin, and funnel data the team can read directly.' }
    ],
    solution: 'We built a custom eCommerce platform with a static-first storefront for speed, a single inventory pool shared by the store and warehouse, order management with status visibility for customers, and an analytics view of sales and margin. Checkout was rebuilt around fewer steps and guest purchase.',
    architecture: {
      description: 'A Nuxt-based storefront served statically with edge caching, backed by a Laravel commerce API. Inventory is a single source of truth consumed by the storefront, order management, and warehouse workflows, so every channel reads the same stock numbers.',
      items: [
        { title: 'Nuxt storefront', description: 'Static-first pages with edge caching for fast loads at peak.' },
        { title: 'Laravel commerce API', description: 'Catalog, cart, checkout, orders, and inventory behind one API.' },
        { title: 'Shared inventory pool', description: 'One stock source used by storefront and warehouse.' },
        { title: 'Stripe payments', description: 'Checkout and payment processing integrated directly.' }
      ]
    },
    features: [
      { title: 'Fast, static-first storefront', description: 'Edge-served pages that hold up during peak traffic.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { title: 'Unified inventory', description: 'Store and warehouse read the same stock numbers.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
      { title: 'Order tracking', description: 'Status visible to customers and staff at every step.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
      { title: 'Commerce analytics', description: 'Sales, margin, and funnel visibility for the team.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
    ],
    images: [],
    development: {
      description: 'Built in stages: catalog and inventory first, then checkout and payments, then order management and analytics. The storefront was load-tested against expected peak traffic before launch, and the old store stayed live until the new platform was proven.',
      items: [
        { title: 'Nuxt', description: 'Static-first storefront with edge caching.' },
        { title: 'Laravel', description: 'Commerce API: catalog, cart, orders, inventory.' },
        { title: 'MySQL', description: 'Products, orders, stock, and customers.' },
        { title: 'Stripe', description: 'Payment processing and checkout.' }
      ]
    },
    outcome: [
      { type: 'qualitative', label: 'Resilient at peak', description: 'The storefront was load-tested for expected peaks and is served from cache rather than rendering on demand.' },
      { type: 'qualitative', label: 'One inventory view', description: 'Store and warehouse now share a single stock source instead of reconciling separate counts.' },
      { type: 'qualitative', label: 'Self-service order status', description: 'Customers can track orders directly, reducing status calls to staff.' }
    ],
    technologies: ['Nuxt', 'Vue.js', 'Laravel', 'MySQL', 'Stripe', 'Tailwind CSS', 'REST API'],
    services: ['ecommerce-development'],
    featured: true,
    published: true,
    seo: {
      title: 'Retail eCommerce Platform Case Study',
      description: 'How Softcredible built a high-performance eCommerce platform with unified inventory, order tracking, and analytics for a retail business.'
    }
  },
  {
    slug: 'enterprise-inventory-erp',
    title: 'Enterprise Inventory ERP',
    client: 'Swift Logistics',
    industry: 'Logistics',
    industrySlug: 'logistics',
    projectType: 'ERP System',
    summary: 'Unified inventory, procurement, and warehouse management system for a regional distributor.',
    challenge: 'Swift Logistics managed inventory, purchasing, and warehouse operations across disconnected tools and spreadsheets. Stock counts drifted between locations, purchasing decisions were made without a live view of demand, and management had no real-time picture of stock value or order status.',
    requirements: [
      { title: 'Accurate multi-location stock', description: 'Inventory tracked per location with movement history.' },
      { title: 'Purchasing workflow', description: 'Requisitions, approvals, and purchase orders with an audit trail.' },
      { title: 'Warehouse operations', description: 'Receiving and dispatch that update stock at the point of work.' },
      { title: 'Management visibility', description: 'Stock value, order backlog, and status in real time.' }
    ],
    solution: 'We delivered an ERP system connecting inventory, purchasing, and warehouse operations on one data foundation. Stock movements update at the point of work, purchasing runs through an approval workflow, and management dashboards show stock value and order backlog in real time.',
    architecture: {
      description: 'A Laravel-backed ERP with a Vue interface, organized around inventory, purchasing, and reporting. A single relational model links products, locations, stock movements, purchase orders, and approvals, so every module reads from the same data.',
      items: [
        { title: 'Laravel backend', description: 'Inventory, purchasing, approval, and reporting modules on one API.' },
        { title: 'Vue interface', description: 'Warehouse and purchasing screens built around the daily workflow.' },
        { title: 'Relational model', description: 'Products, locations, and movements linked in one schema.' },
        { title: 'Docker deployment', description: 'Containerized environment for consistent staging and production.' }
      ]
    },
    features: [
      { title: 'Multi-location inventory', description: 'Stock per location with full movement history.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
      { title: 'Approval workflows', description: 'Purchasing with tracked approvals and audit history.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
      { title: 'Receiving and dispatch', description: 'Stock updated at the point of work, not after the fact.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
      { title: 'Real-time dashboards', description: 'Stock value and order backlog for management.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
    ],
    images: [],
    development: {
      description: 'Delivered in connected phases rather than a big-bang replacement: inventory first, then purchasing and approvals, then management dashboards. Each phase went live with real data and a parallel run so the business kept operating throughout.',
      items: [
        { title: 'Laravel', description: 'ERP modules: inventory, purchasing, approvals, reporting.' },
        { title: 'Vue.js', description: 'Warehouse and management interfaces.' },
        { title: 'MySQL', description: 'Products, locations, movements, and orders.' },
        { title: 'Docker', description: 'Consistent environments from development to production.' }
      ]
    },
    outcome: [
      { type: 'qualitative', label: 'Connected operations', description: 'Inventory, purchasing, and warehouse now run on one data foundation instead of separate tools.' },
      { type: 'qualitative', label: 'Auditable purchasing', description: 'Approvals and purchase history are tracked with a full trail.' },
      { type: 'qualitative', label: 'Real-time visibility', description: 'Management can read stock value and order status live rather than waiting for assembled reports.' }
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Tailwind CSS', 'REST API'],
    services: ['erp-development'],
    featured: false,
    published: true,
    seo: {
      title: 'Enterprise Inventory ERP Case Study',
      description: 'How Softcredible built an ERP system unifying inventory, purchasing, and warehouse management for a regional distributor.'
    }
  }
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug)
}

export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(cs => cs.published)
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getPublishedCaseStudies().filter(cs => cs.featured)
}

export function getRelatedCaseStudies(slug: string, limit = 2): CaseStudy[] {
  const current = getCaseStudyBySlug(slug)
  const others = getPublishedCaseStudies().filter(cs => cs.slug !== slug)
  if (!current) return others.slice(0, limit)

  // Prefer studies that share an industry or service.
  const shared = others.filter(
    cs => cs.industrySlug === current.industrySlug || cs.services.some(s => current.services.includes(s))
  )
  return [...shared, ...others].slice(0, limit)
}

/** Cards for grid components (kept light and shape-compatible with CaseStudyGrid). */
export const caseStudyCards: CaseStudyCardData[] = getPublishedCaseStudies().map(cs => ({
  slug: cs.slug,
  title: cs.title,
  summary: cs.summary,
  industry: cs.industry,
  client: cs.client,
  technologies: cs.technologies.slice(0, 4),
  featured: cs.featured
}))

/** Summaries used by solution/industry pages. */
export function getCaseStudySummaries(slugs: string[]): CaseStudyCardData[] {
  return slugs
    .map(slug => caseStudyCards.find(cs => cs.slug === slug))
    .filter((cs): cs is CaseStudyCardData => Boolean(cs))
}
