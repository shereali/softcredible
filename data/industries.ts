import type { Industry } from '~/types/industry'
import { Icons } from './icons'

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: Icons.pulse,
    summary: 'Patient management, records, and operations software built around clinical workflows.',
    hero: {
      title: 'Software That Works Around Clinical Workflows',
      subtitle: 'Clinics and care teams already have a way of working. We help you design software around it, not the other way around.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressures care providers deal with daily.',
      items: [
        { title: 'Records split across systems', description: 'Patient data living in separate files, spreadsheets, and legacy platforms with no single view.' },
        { title: 'Manual appointment handling', description: 'Booking, reminders, and no-shows managed by phone and paper.' },
        { title: 'Compliance overhead', description: 'Regulated data handling that makes every system change slower and riskier.' },
        { title: 'Reporting that takes days', description: 'Clinics asked for utilization and outcome reports that staff assemble by hand.' }
      ]
    },
    workflows: {
      title: 'Common workflows in healthcare',
      subtitle: 'The day-to-day processes software often needs to support.',
      items: [
        { title: 'Patient intake', description: 'Registration, consent, history collection, and insurance capture at first contact.', icon: Icons.clipboard },
        { title: 'Appointment scheduling', description: 'Slot management, reminders, cancellations, and waitlist filling.', icon: Icons.calendar },
        { title: 'Care documentation', description: 'Visit notes, treatment plans, and follow-up tasks in a structured record.', icon: Icons.document },
        { title: 'Billing and claims', description: 'Coding, claims submission, payment posting, and patient statements.', icon: Icons.receipt }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas we see in healthcare operations.',
      items: [
        { title: 'A single patient record', description: 'One place for history, visits, and communication instead of scattered files.', icon: Icons.database },
        { title: 'Automated follow-up', description: 'Reminders and recall scheduling that run without staff chasing them.', icon: Icons.clock },
        { title: 'Secure patient portals', description: 'Self-service access to records, bookings, and results with proper access control.', icon: Icons.shield },
        { title: 'Regulatory-ready audit trails', description: 'Complete change history and access logs for compliance review.', icon: Icons.document }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for healthcare organizations.',
      items: [
        { title: 'Patient management platforms', description: 'Records, appointments, and reporting under one roof.', href: '/solutions/custom-web-development' },
        { title: 'Secure portals and apps', description: 'Patient and staff-facing applications with role-based access.', href: '/solutions/custom-web-development' },
        { title: 'Data integration', description: 'Connecting labs, pharmacies, and EMR exports into one workflow.', href: '/solutions/api-integration' }
      ]
    },
    features: {
      title: 'Features healthcare software often needs',
      subtitle: 'Common capabilities in the systems we build for this industry.',
      items: [
        { title: 'Role-based access', description: 'Clinicians, admin, and patients each see only what they should.', icon: Icons.shield },
        { title: 'Appointment automation', description: 'Booking, reminders, and waitlists handled by the system.', icon: Icons.calendar },
        { title: 'Structured records', description: 'Searchable, auditable patient data with clear history.', icon: Icons.database },
        { title: 'Reporting and exports', description: 'Utilization, outcomes, and compliance reports on demand.', icon: Icons.chart }
      ]
    },
    integrations: {
      title: 'Integrations healthcare organizations often need',
      subtitle: 'Systems we commonly connect into healthcare workflows.',
      items: ['EMR / EHR exports', 'Lab systems', 'Billing & claims', 'Calendar platforms', 'Secure messaging', 'Document storage', 'Identity providers', 'Analytics tools']
    },
    caseStudySlugs: ['healthcare-patient-management'],
    faqs: [
      { id: 'compliance', title: 'How do you handle regulated health data?', content: 'We build with access control, encryption, and full audit trails from the start. The specific standard that applies depends on your market and data types, and we design the architecture to support it rather than bolting it on later.' },
      { id: 'emr', title: 'Can this work alongside our existing EMR or practice system?', content: 'Yes. Most projects complement an existing system rather than replace it. We integrate through exports, APIs, and file-based data exchange where available, and document any manual steps clearly.' },
      { id: 'legacy-data', title: 'Can you migrate our existing records?', content: 'We can migrate structured records and scan-based files with mapping and validation, but we always start by understanding the data quality and what regulators require for retention before touching anything.' },
      { id: 'portal', title: 'Is a patient portal worth building?', content: 'For many clinics it removes a large share of phone traffic: booking, reminders, document uploads, and result access become self-service. We scope the feature set to what your patients will actually use.' }
    ],
    relatedIndustrySlugs: ['professional-services', 'startups-saas'],
    relatedSolutionSlugs: ['custom-web-development', 'api-integration', 'software-modernization'],
    seo: {
      title: 'Healthcare Software Development',
      description: 'Software for clinics and care teams: patient management, secure portals, appointment automation, and EMR integration. Built by Softcredible.'
    }
  },
  {
    slug: 'education',
    name: 'Education',
    icon: Icons.book,
    summary: 'Learning platforms, enrollment systems, and institution management tools.',
    hero: {
      title: 'Software That Helps Educators, Not Just Administrators',
      subtitle: 'Schools and training providers need systems that reduce administrative load and give learners a clear path forward.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational friction institutions deal with every term.',
      items: [
        { title: 'Enrollment spreadsheets', description: 'Applications, payments, and class assignment tracked in files that drift apart.' },
        { title: 'Disconnected learning tools', description: 'Content, assessments, and communication living in different platforms.' },
        { title: 'Manual grade workflows', description: 'Results gathered, checked, and published by hand at term end.' },
        { title: 'Parent and student communication gaps', description: 'Updates and alerts that rely on staff remembering to send them.' }
      ]
    },
    workflows: {
      title: 'Common workflows in education',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Admissions and enrollment', description: 'Applications, eligibility checks, offers, and term registration.', icon: Icons.clipboard },
        { title: 'Course scheduling', description: 'Timetables, room allocation, and enrollment limits.', icon: Icons.calendar },
        { title: 'Assessment and grading', description: 'Submission, marking, moderation, and publishing results.', icon: Icons.pencil },
        { title: 'Communication', description: 'Term updates, alerts, and parent-teacher touchpoints.', icon: Icons.chat }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for education institutions.',
      items: [
        { title: 'One enrollment system', description: 'Applications through to term registration in a single flow.', icon: Icons.layers },
        { title: 'A learning hub', description: 'Content, assignments, and progress in one place for learners.', icon: Icons.book },
        { title: 'Automated reporting', description: 'Attendance, results, and progress reports generated on demand.', icon: Icons.chart },
        { title: 'Clear communication', description: 'Alerts and updates delivered automatically to the right people.', icon: Icons.chat }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for schools and training providers.',
      items: [
        { title: 'Enrollment and admissions systems', description: 'Applications, payments, and registration in one flow.', href: '/solutions/custom-web-development' },
        { title: 'Learning platforms', description: 'Content delivery, assignments, and progress tracking.', href: '/solutions/saas-development' },
        { title: 'Institution portals', description: 'Dashboards for staff, students, and parents with the right access.', href: '/solutions/custom-web-development' }
      ]
    },
    features: {
      title: 'Features education software often needs',
      subtitle: 'Common capabilities in the systems we build for this industry.',
      items: [
        { title: 'Enrollment workflows', description: 'Application to registration with automated checks.', icon: Icons.clipboard },
        { title: 'Progress tracking', description: 'Assignments, grades, and completion in a clear view.', icon: Icons.chart },
        { title: 'Role-based portals', description: 'Separate views for staff, learners, and parents.', icon: Icons.users },
        { title: 'Alerts and notifications', description: 'Timely updates without manual chasing.', icon: Icons.bell }
      ]
    },
    integrations: {
      title: 'Integrations education organizations often need',
      subtitle: 'Systems we commonly connect into education workflows.',
      items: ['Payment gateways', 'Video conferencing', 'Calendar platforms', 'Document storage', 'Email and messaging', 'Learning tools', 'Student information exports', 'Analytics tools']
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'lms', title: 'Do we need to replace our LMS?', content: 'Not necessarily. Many institutions keep their learning management system and add software around it: enrollment, scheduling, communication, and reporting that the LMS handles poorly. We integrate rather than assume a replacement.' },
      { id: 'privacy', title: 'How do you handle student data?', content: 'Student data projects get access controls, encryption, and audit trails by default, and we design the architecture around whatever regulations apply to your institution and region.' },
      { id: 'portal', title: 'Who should get a portal?', content: 'Typically staff manage operations, learners see courses and progress, and parents get a read-only view. We define those roles with you early because they shape the whole interface.' },
      { id: 'timeline', title: 'How fast can enrollment software ship?', content: 'A focused enrollment flow with payments and notifications typically ships in 10-14 weeks. If you need it for a specific term start, we plan the timeline backwards from that date.' }
    ],
    relatedIndustrySlugs: ['startups-saas', 'professional-services'],
    relatedSolutionSlugs: ['custom-web-development', 'saas-development', 'api-integration'],
    seo: {
      title: 'Education Software Development',
      description: 'Software for schools and training providers: enrollment systems, learning platforms, portals, and automated reporting. Built by Softcredible.'
    }
  },
  {
    slug: 'retail',
    name: 'Retail',
    icon: Icons.store,
    summary: 'Store operations, inventory, and customer experience software for retailers.',
    hero: {
      title: 'Retail Software That Connects the Store to the Business',
      subtitle: 'Inventory, staff, and customers should share one view of the truth, whether the sale happens online or at the counter.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressure retailers feel daily.',
      items: [
        { title: 'Stock that never quite matches', description: 'Store counts, warehouse data, and online availability disagree.' },
        { title: 'Manual price management', description: 'Price changes and promotions applied store by store by hand.' },
        { title: 'Peak-period strain', description: 'Checkout and ordering systems that slow down exactly when demand spikes.' },
        { title: 'Thin margin visibility', description: 'No clear view of product-level margin until long after decisions are made.' }
      ]
    },
    workflows: {
      title: 'Common workflows in retail',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Purchasing and receiving', description: 'Purchase orders, deliveries, and stock updates at the door.', icon: Icons.box },
        { title: 'Inventory management', description: 'Transfers, counts, adjustments, and reorder points.', icon: Icons.package },
        { title: 'Sales and returns', description: 'Checkout, refunds, exchanges, and loyalty handling.', icon: Icons.cart },
        { title: 'Promotions', description: 'Discounts, bundles, and pricing rules that apply everywhere at once.', icon: Icons.tag }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for retail operations.',
      items: [
        { title: 'Live inventory everywhere', description: 'One stock pool shared by stores, warehouse, and online.', icon: Icons.database },
        { title: 'Central pricing control', description: 'Prices and promotions set once, applied everywhere.', icon: Icons.tag },
        { title: 'Fast, reliable checkout', description: 'Point of sale that keeps working under pressure, even offline.', icon: Icons.cart },
        { title: 'Product-level reporting', description: 'Margin, sell-through, and stock-out visibility per SKU.', icon: Icons.chart }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for retailers.',
      items: [
        { title: 'POS and inventory systems', description: 'Checkout and stock in one system, offline-ready.', href: '/solutions/pos-development' },
        { title: 'eCommerce storefronts', description: 'Online sales that share inventory with the store.', href: '/solutions/ecommerce-development' },
        { title: 'ERP for retail', description: 'Purchasing, inventory, and finance connected.', href: '/solutions/erp-development' }
      ]
    },
    features: {
      title: 'Features retail software often needs',
      subtitle: 'Common capabilities in the systems we build for this industry.',
      items: [
        { title: 'Multi-location inventory', description: 'Stock tracked per store and warehouse in real time.', icon: Icons.package },
        { title: 'Offline-capable checkout', description: 'Sales continue when the network drops, then sync.', icon: Icons.bolt },
        { title: 'Promotion engine', description: 'Rules-based discounts applied consistently.', icon: Icons.tag },
        { title: 'SKU-level reporting', description: 'Sell-through, margin, and stock-out data per product.', icon: Icons.chart }
      ]
    },
    integrations: {
      title: 'Integrations retailers often need',
      subtitle: 'Systems we commonly connect into retail operations.',
      items: ['Payment gateways', 'Accounting platforms', 'Shipping providers', 'Barcode & QR', 'Marketplaces', 'Loyalty programs', 'Inventory exports', 'Analytics tools']
    },
    caseStudySlugs: ['retail-ecommerce-platform'],
    faqs: [
      { id: 'online-store', title: 'Can one system handle both store and online sales?', content: 'Yes, and that is usually the point. A shared inventory pool means stock decrements wherever the sale happens, and your team stops reconciling channels by hand. We build the storefront, POS, and back office on that shared core.' },
      { id: 'offline', title: 'What happens to checkout when the internet goes down?', content: 'The register keeps selling. Sales write to a local store and sync when the connection returns, including inventory movements. Offline behavior is designed in from the start, not patched later.' },
      { id: 'migration', title: 'Can we migrate from a legacy till or ERP?', content: 'Yes. We export your catalog, pricing, and transaction history where available, run a parallel period so staff can compare, then cut over in a defined window with rollback ready.' },
      { id: 'scale', title: 'Can this handle peak sales events?', content: 'We load-test against your expected peak traffic and architect for it, so the systems your team relies on do not slow down during promotions and seasonal spikes.' }
    ],
    relatedIndustrySlugs: ['ecommerce', 'hospitality'],
    relatedSolutionSlugs: ['pos-development', 'ecommerce-development', 'erp-development'],
    seo: {
      title: 'Retail Software Development',
      description: 'Software for retailers: multi-location inventory, offline-ready POS, eCommerce, and SKU-level reporting. Built by Softcredible.'
    }
  },
  {
    slug: 'ecommerce',
    name: 'eCommerce',
    icon: Icons.cart,
    summary: 'Commerce platforms, storefronts, and order operations software for online sellers.',
    hero: {
      title: 'Commerce Software Built Around the Order',
      subtitle: 'From product page to doorstep, every step should share one source of truth and one clear view of performance.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressure online sellers deal with.',
      items: [
        { title: 'Conversion leaks', description: 'Slow pages and checkout friction that quietly erode revenue.' },
        { title: 'Catalog complexity', description: 'Variants, bundles, and pricing rules that platforms cannot express cleanly.' },
        { title: 'Channel chaos', description: 'Orders from multiple channels reconciled into one workflow by hand.' },
        { title: 'Fulfillment bottlenecks', description: 'Picking, packing, and shipping lagging behind order volume.' }
      ]
    },
    workflows: {
      title: 'Common workflows in eCommerce',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Order intake', description: 'Checkout, payment capture, and fraud review.', icon: Icons.cart },
        { title: 'Fulfillment', description: 'Picking, packing, labels, and carrier handoff.', icon: Icons.box },
        { title: 'Returns', description: 'Return requests, approvals, restocking, and refunds.', icon: Icons.receipt },
        { title: 'Merchandising', description: 'Catalog updates, pricing, and campaign launches.', icon: Icons.tag }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for online sellers.',
      items: [
        { title: 'A faster storefront', description: 'Edge-served pages that convert better on every device.', icon: Icons.bolt },
        { title: 'Flexible catalog and pricing', description: 'Variants and rules that fit the products, not the platform.', icon: Icons.layers },
        { title: 'Order operations clarity', description: 'Every order visible from checkout to delivery.', icon: Icons.package },
        { title: 'Channel unification', description: 'Marketplace and store orders in one workflow.', icon: Icons.database }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for online sellers.',
      items: [
        { title: 'Custom storefronts', description: 'Commerce experiences built around your products.', href: '/solutions/ecommerce-development' },
        { title: 'Order management', description: 'Orders, returns, and fulfillment in one system.', href: '/solutions/custom-web-development' },
        { title: 'Channel integrations', description: 'Marketplaces and systems connected to one source of truth.', href: '/solutions/api-integration' }
      ]
    },
    features: {
      title: 'Features eCommerce software often needs',
      subtitle: 'Common capabilities in the systems we build for online sellers.',
      items: [
        { title: 'Fast checkout', description: 'Minimal steps, guest checkout, saved payment methods.', icon: Icons.cart },
        { title: 'Order tracking', description: 'Status visibility for customers and staff.', icon: Icons.package },
        { title: 'Returns management', description: 'Approvals, restocking, and refunds in one flow.', icon: Icons.receipt },
        { title: 'Analytics', description: 'Funnel, margin, and channel performance in view.', icon: Icons.chart }
      ]
    },
    integrations: {
      title: 'Integrations eCommerce businesses often need',
      subtitle: 'Systems we commonly connect into commerce operations.',
      items: ['Payment gateways', 'Shipping carriers', 'Accounting platforms', 'Marketplaces', 'Email and SMS', 'Loyalty programs', 'Inventory systems', 'Analytics tools']
    },
    caseStudySlugs: ['retail-ecommerce-platform'],
    faqs: [
      { id: 'platform', title: 'Do we need a custom storefront or can we use a platform?', content: 'Platforms are a strong fit early on. Custom makes sense when catalog rules, pricing, checkout, or integrations force you to fight the platform, or when per-order fees cut into margin at volume. We help you decide honestly rather than defaulting to custom.' },
      { id: 'migration', title: 'Can you migrate our existing store?', content: 'Yes: products, variants, images, customers, and order history. We validate counts and prices in staging before a defined cutover, and keep the old store live until the new one is proven.' },
      { id: 'multi-channel', title: 'How do you handle multiple sales channels?', content: 'One order management core pulls every channel into a single workflow. Inventory and order status sync from that core, so staff stop re-keying between systems.' },
      { id: 'speed', title: 'How fast will the store actually be?', content: 'We target sub-second page loads with a static-first storefront, aggressive caching, and CDN-served media, and we load-test against your expected peak before launch.' }
    ],
    relatedIndustrySlugs: ['retail', 'logistics'],
    relatedSolutionSlugs: ['ecommerce-development', 'api-integration', 'custom-web-development'],
    seo: {
      title: 'eCommerce Software Development',
      description: 'Commerce software for online sellers: custom storefronts, order management, channel integrations, and fast checkout. Built by Softcredible.'
    }
  },
  {
    slug: 'logistics',
    name: 'Logistics & Distribution',
    icon: Icons.truck,
    summary: 'Fleet, warehouse, and delivery operations software for distributors and 3PLs.',
    hero: {
      title: 'Logistics Software That Keeps Every Move Visible',
      subtitle: 'When every minute and every mile costs money, operations software needs to show exactly where things stand.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressure distributors and logistics teams face.',
      items: [
        { title: 'Inventory blind spots', description: 'Warehouse counts that drift from system records between cycles.' },
        { title: 'Dispatch by gut feel', description: 'Routing and load decisions made without live data on capacity and demand.' },
        { title: 'Proof-of-delivery gaps', description: 'Deliveries documented in paper that never makes it back to the system.' },
        { title: 'Customer updates by phone', description: 'Clients calling for status because nothing notifies them automatically.' }
      ]
    },
    workflows: {
      title: 'Common workflows in logistics',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Warehouse operations', description: 'Receiving, putaway, picking, and dispatch.', icon: Icons.box },
        { title: 'Transport planning', description: 'Route building, load planning, and driver assignment.', icon: Icons.route },
        { title: 'Delivery execution', description: 'Manifests, proof of delivery, and exception handling.', icon: Icons.truck },
        { title: 'Returns and reverse logistics', description: 'Customer returns, inspection, and restocking.', icon: Icons.receipt }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for logistics operations.',
      items: [
        { title: 'Accurate warehouse stock', description: 'Real-time counts through disciplined workflows and cycle counts.', icon: Icons.database },
        { title: 'Smarter dispatch', description: 'Loads and routes built from live capacity and demand data.', icon: Icons.route },
        { title: 'Digital proof of delivery', description: 'Captured at the door, synced automatically.', icon: Icons.document },
        { title: 'Automated customer updates', description: 'Tracking notifications without a call to the office.', icon: Icons.bell }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for logistics and distribution.',
      items: [
        { title: 'Warehouse and inventory systems', description: 'Receiving to dispatch with accurate stock.', href: '/solutions/erp-development' },
        { title: 'Delivery management', description: 'Routes, manifests, and proof of delivery in one flow.', href: '/solutions/custom-web-development' },
        { title: 'Client portals', description: 'Self-service order status and document access.', href: '/solutions/custom-web-development' }
      ]
    },
    features: {
      title: 'Features logistics software often needs',
      subtitle: 'Common capabilities in the systems we build for this industry.',
      items: [
        { title: 'Multi-warehouse inventory', description: 'Stock tracked across locations with transfers.', icon: Icons.package },
        { title: 'Route and load planning', description: 'Build manifests from live capacity.', icon: Icons.route },
        { title: 'Proof of delivery capture', description: 'Signatures and photos linked to orders.', icon: Icons.document },
        { title: 'Tracking notifications', description: 'Automated updates at each milestone.', icon: Icons.bell }
      ]
    },
    integrations: {
      title: 'Integrations logistics businesses often need',
      subtitle: 'Systems we commonly connect into logistics operations.',
      items: ['Carrier APIs', 'Accounting platforms', 'Barcode & QR scanning', 'GPS / telematics', 'ERP systems', 'Customer portals', 'Document storage', 'Analytics tools']
    },
    caseStudySlugs: ['enterprise-inventory-erp'],
    faqs: [
      { id: 'warehouse', title: 'How do you keep warehouse stock accurate?', content: 'Through workflow discipline: receiving validates against purchase orders, picking decrements stock, and cycle counts run on schedule. The system flags variances immediately instead of discovering them at stocktake.' },
      { id: 'carriers', title: 'Can you integrate with our carriers?', content: 'Yes. We integrate carrier APIs for rates, labels, and tracking where available, and fall back to documented file exchange where a carrier has no API. Each integration is built with retries and alerting so failures surface.' },
      { id: 'existing-erp', title: 'Can this work alongside our existing ERP?', content: 'Usually. Most projects extend or connect to an existing ERP rather than replace it. We map where data must sync and keep the ERP as the financial source of truth where that is safer.' },
      { id: 'pilot', title: 'How do you roll out to a busy warehouse?', content: 'We pilot one area or one shift first, with real staff and real stock, tune the workflow, then expand. A warehouse that keeps operating during rollout is the goal.' }
    ],
    relatedIndustrySlugs: ['retail', 'ecommerce'],
    relatedSolutionSlugs: ['erp-development', 'custom-web-development', 'api-integration'],
    seo: {
      title: 'Logistics Software Development',
      description: 'Software for distributors and logistics teams: warehouse inventory, route planning, proof of delivery, and tracking. Built by Softcredible.'
    }
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: Icons.home,
    summary: 'Property, portfolio, and transaction management software for real estate businesses.',
    hero: {
      title: 'Real Estate Software That Keeps Properties and People Connected',
      subtitle: 'Listings, tenants, documents, and maintenance should live in one place, not across inboxes and spreadsheets.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressure real estate businesses deal with.',
      items: [
        { title: 'Listings out of sync', description: 'Portals updated by hand, with the same property entered differently everywhere.' },
        { title: 'Tenant and lease sprawl', description: 'Leases, renewals, and communications tracked in files and email.' },
        { title: 'Maintenance by phone', description: 'Requests logged informally, followed up by chasing.' },
        { title: 'Document chaos', description: 'Contracts, inspection reports, and certificates scattered across folders.' }
      ]
    },
    workflows: {
      title: 'Common workflows in real estate',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Property management', description: 'Portfolios, units, and ownership records in one place.', icon: Icons.building },
        { title: 'Lease administration', description: 'Tenancy terms, renewals, rent reviews, and notices.', icon: Icons.document },
        { title: 'Maintenance and inspections', description: 'Requests, scheduling, completion, and sign-off.', icon: Icons.wrench },
        { title: 'Sales and marketing', description: 'Listings, enquiries, and viewings through to contract.', icon: Icons.key }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for real estate businesses.',
      items: [
        { title: 'A single property record', description: 'Every unit with its documents, history, and status in one view.', icon: Icons.database },
        { title: 'Lease date awareness', description: 'Renewals and rent reviews surfaced before they slip.', icon: Icons.calendar },
        { title: 'Maintenance workflow', description: 'Requests logged, tracked, and billed without phone tag.', icon: Icons.wrench },
        { title: 'Portal distribution', description: 'Listings pushed to portals without re-entry.', icon: Icons.layers }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for real estate businesses.',
      items: [
        { title: 'Property management platforms', description: 'Properties, leases, and maintenance in one system.', href: '/solutions/custom-web-development' },
        { title: 'Agent and tenant portals', description: 'Self-service access for teams, owners, and tenants.', href: '/solutions/custom-web-development' },
        { title: 'Listing distribution', description: 'Connect one catalog to multiple portals.', href: '/solutions/api-integration' }
      ]
    },
    features: {
      title: 'Features real estate software often needs',
      subtitle: 'Common capabilities in the systems we build for this industry.',
      items: [
        { title: 'Property and unit records', description: 'Structured data with documents attached.', icon: Icons.building },
        { title: 'Lease and tenancy tracking', description: 'Terms, renewals, and notices on schedule.', icon: Icons.calendar },
        { title: 'Maintenance management', description: 'Requests through completion with cost capture.', icon: Icons.wrench },
        { title: 'Document storage', description: 'Contracts and reports organized per property.', icon: Icons.document }
      ]
    },
    integrations: {
      title: 'Integrations real estate businesses often need',
      subtitle: 'Systems we commonly connect into real estate operations.',
      items: ['Listing portals', 'Accounting platforms', 'Payment gateways', 'Digital signatures', 'Inspection tools', 'Calendar platforms', 'Document storage', 'CRM systems']
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'crm', title: 'Do we need a real estate CRM or a property system?', content: 'Often both, but they are different things: a CRM tracks people and pipeline, a property system tracks assets and leases. We usually integrate them so enquiries become tenants without re-keying.' },
      { id: 'portals', title: 'Can we push listings to portals automatically?', content: 'Yes. Where portals expose an API or import format, we push from one master catalog. Where they do not, we produce the exact import file your team already uses, eliminating manual re-entry.' },
      { id: 'migration', title: 'Can you migrate our leases and tenant history?', content: 'We migrate structured records with mapping and validation, and we start by auditing data quality, since lease data spread across spreadsheets is often messier than it looks.' },
      { id: 'maintenance', title: 'Who manages maintenance requests in the system?', content: 'That depends on your workflow: tenants can log requests through a portal, staff can log on their behalf, and contractors can be brought in with limited access. We design the roles around how your team actually works.' }
    ],
    relatedIndustrySlugs: ['professional-services', 'finance-operations'],
    relatedSolutionSlugs: ['custom-web-development', 'api-integration', 'crm-development'],
    seo: {
      title: 'Real Estate Software Development',
      description: 'Software for real estate: property management, lease tracking, maintenance workflows, and listing distribution. Built by Softcredible.'
    }
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: Icons.briefcase,
    summary: 'Project, client, and resource management software for agencies, consultancies, and firms.',
    hero: {
      title: 'Software for Firms That Sell Time and Expertise',
      subtitle: 'Consultancies, agencies, and professional firms need systems that turn projects into delivered work and invoices without the admin drag.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressure service firms deal with.',
      items: [
        { title: 'Time tracking after the fact', description: 'Hours reconstructed from memory at the end of the month.' },
        { title: 'Project scope drift', description: 'Work delivered beyond scope without visibility into the impact.' },
        { title: 'Utilization blind spots', description: 'No clear view of who is billable, busy, or available.' },
        { title: 'Invoicing lag', description: 'Invoices assembled from notes and emails weeks after the work.' }
      ]
    },
    workflows: {
      title: 'Common workflows in professional services',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Client onboarding', description: 'Engagement setup, agreements, and kickoff.', icon: Icons.clipboard },
        { title: 'Project delivery', description: 'Tasks, milestones, and time tracking against budget.', icon: Icons.briefcase },
        { title: 'Resource planning', description: 'Assigning the right people to the right work.', icon: Icons.users },
        { title: 'Billing and reporting', description: 'Timesheets to invoices, with margin visibility.', icon: Icons.receipt }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for service firms.',
      items: [
        { title: 'Live project health', description: 'Budget, hours, and milestone status in one view.', icon: Icons.chart },
        { title: 'Real utilization', description: 'Billable and available time visible across the firm.', icon: Icons.users },
        { title: 'Faster billing', description: 'Approved timesheets flowing into invoices.', icon: Icons.receipt },
        { title: 'Client portals', description: 'Shared status, documents, and approvals.', icon: Icons.shield }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for professional services firms.',
      items: [
        { title: 'Project and time systems', description: 'Projects, tasks, and billable time in one place.', href: '/solutions/custom-web-development' },
        { title: 'Client portals', description: 'Status, deliverables, and approvals shared cleanly.', href: '/solutions/custom-web-development' },
        { title: 'CRM for services', description: 'Pipeline and client history tailored to engagements.', href: '/solutions/crm-development' }
      ]
    },
    features: {
      title: 'Features professional services software often needs',
      subtitle: 'Common capabilities in the systems we build for firms.',
      items: [
        { title: 'Project budgeting', description: 'Hours and cost against scope, visible as you go.', icon: Icons.chart },
        { title: 'Time tracking', description: 'Capture time close to the work, not from memory.', icon: Icons.clock },
        { title: 'Resource allocation', description: 'See availability and assign work deliberately.', icon: Icons.users },
        { title: 'Approval workflows', description: 'Timesheets, expenses, and invoices routed for sign-off.', icon: Icons.document }
      ]
    },
    integrations: {
      title: 'Integrations professional services firms often need',
      subtitle: 'Systems we commonly connect into firm operations.',
      items: ['Accounting platforms', 'Calendars', 'Document storage', 'Digital signatures', 'Email and messaging', 'Project tools', 'CRM systems', 'Analytics tools']
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'project-tool', title: 'Do we replace our project management tool?', content: 'Not necessarily. If your team already runs projects in a dedicated tool, we integrate rather than duplicate, and focus custom software on what that tool does poorly: billing, utilization, and client-facing reporting.' },
      { id: 'time-tracking', title: 'How do you get staff to track time consistently?', content: 'Make it part of the workflow, not an end-of-month chore: time captured against tasks as they are worked, with approval and reporting that show the value back to the person entering it.' },
      { id: 'invoicing', title: 'Can timesheets flow into invoices automatically?', content: 'Yes. Approved time and expenses can be grouped into draft invoices against client and project, ready for review before sending. We integrate with your accounting platform for the final push.' },
      { id: 'utilization', title: 'What does a utilization report look like?', content: 'Billable hours, non-billable work, and availability per person against their capacity, plus project margin. The exact view depends on how your firm measures performance, which we define in discovery.' }
    ],
    relatedIndustrySlugs: ['real-estate', 'finance-operations'],
    relatedSolutionSlugs: ['custom-web-development', 'crm-development', 'api-integration'],
    seo: {
      title: 'Professional Services Software Development',
      description: 'Software for agencies and consultancies: project delivery, time tracking, utilization, and billing in one system. Built by Softcredible.'
    }
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: Icons.coffee,
    summary: 'Booking, guest, and operations software for hotels, venues, and food and beverage businesses.',
    hero: {
      title: 'Hospitality Software That Keeps Service Personal',
      subtitle: 'Guests remember the experience, not the back office. Well-built software keeps the back office quiet so the front of house can focus.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressure hospitality businesses deal with.',
      items: [
        { title: 'Bookings across channels', description: 'Direct, phone, and third-party reservations reconciled by hand.' },
        { title: 'Guest preference gaps', description: 'Notes on regulars living in staff memory instead of the system.' },
        { title: 'Peak-time pressure', description: 'Checkout and order systems that slow down when the house is full.' },
        { title: 'Revenue leakage', description: 'Comps, voids, and discounts that no one reviews systematically.' }
      ]
    },
    workflows: {
      title: 'Common workflows in hospitality',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Reservations', description: 'Direct, phone, and channel bookings in one calendar.', icon: Icons.calendar },
        { title: 'Front desk operations', description: 'Check-in, check-out, room changes, and guest requests.', icon: Icons.key },
        { title: 'Food and beverage', description: 'Orders, kitchen tickets, and table management.', icon: Icons.utensils },
        { title: 'Housekeeping', description: 'Room status, task assignment, and inspection.', icon: Icons.clipboard }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for hospitality businesses.',
      items: [
        { title: 'One reservation view', description: 'Every channel and every arrival in a single calendar.', icon: Icons.database },
        { title: 'Guest profiles', description: 'Preferences and history available at check-in.', icon: Icons.users },
        { title: 'Resilient service', description: 'Ordering and checkout that keep working at peak.', icon: Icons.bolt },
        { title: 'Revenue control', description: 'Voids, comps, and discounts visible and reviewable.', icon: Icons.chart }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for hospitality businesses.',
      items: [
        { title: 'Booking systems', description: 'Direct reservations that reduce channel dependency.', href: '/solutions/custom-web-development' },
        { title: 'POS for hospitality', description: 'Orders, payments, and tables built for service speed.', href: '/solutions/pos-development' },
        { title: 'Guest experience platforms', description: 'Requests, preferences, and communication in one place.', href: '/solutions/custom-web-development' }
      ]
    },
    features: {
      title: 'Features hospitality software often needs',
      subtitle: 'Common capabilities in the systems we build for this industry.',
      items: [
        { title: 'Multi-channel reservations', description: 'Direct and channel bookings in one calendar.', icon: Icons.calendar },
        { title: 'Guest profiles', description: 'Preferences, history, and requests per guest.', icon: Icons.users },
        { title: 'Offline-capable ordering', description: 'Service continues even when the network drops.', icon: Icons.bolt },
        { title: 'Revenue reporting', description: 'Sales, voids, and occupancy in clear views.', icon: Icons.chart }
      ]
    },
    integrations: {
      title: 'Integrations hospitality businesses often need',
      subtitle: 'Systems we commonly connect into hospitality operations.',
      items: ['Payment gateways', 'Channel managers', 'Accounting platforms', 'Calendar platforms', 'Kitchen display systems', 'Loyalty programs', 'Email and SMS', 'Analytics tools']
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'pms', title: 'Do we replace our property management system?', content: 'Not necessarily. If you run a PMS, we integrate around it: direct booking, guest requests, and reporting layers that extend what the PMS handles well, without duplicating it.' },
      { id: 'direct-bookings', title: 'How do we get more direct bookings?', content: 'A direct booking experience with a clear rate, confirmation, and follow-up can reduce channel dependency. We help you scope what drives direct bookings for your property specifically.' },
      { id: 'offline', title: 'What happens to ordering if the internet fails?', content: 'Orders keep flowing on a local store and sync when the connection returns. We treat offline as a design requirement, because service cannot stop with the network.' },
      { id: 'peak', title: 'Will it keep up on our busiest night?', content: 'We design and load-test for your peak period, whatever it is: full house, event night, or holiday service. The systems your staff rely on should be the last thing to slow down.' }
    ],
    relatedIndustrySlugs: ['retail', 'startups-saas'],
    relatedSolutionSlugs: ['pos-development', 'custom-web-development', 'api-integration'],
    seo: {
      title: 'Hospitality Software Development',
      description: 'Software for hotels, venues, and F&B: reservations, guest profiles, resilient POS, and revenue reporting. Built by Softcredible.'
    }
  },
  {
    slug: 'finance-operations',
    name: 'Finance & Operations',
    icon: Icons.banknotes,
    summary: 'Back-office finance, reconciliation, and compliance operations software.',
    hero: {
      title: 'Finance Software That Makes the Books Trustworthy',
      subtitle: 'Reconciliation, approvals, and reporting should be systematic, auditable, and fast, not a month-end scramble.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The operational pressure finance teams deal with.',
      items: [
        { title: 'Manual reconciliation', description: 'Bank, payment, and ledger matching done by hand.' },
        { title: 'Approval bottlenecks', description: 'Invoices and payments waiting on sign-off with no tracking.' },
        { title: 'Spreadsheet dependence', description: 'Core numbers assembled in files that only one person understands.' },
        { title: 'Audit preparation pain', description: 'Evidence gathered from folders and inboxes when auditors ask.' }
      ]
    },
    workflows: {
      title: 'Common workflows in finance operations',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Accounts payable', description: 'Invoice intake, approval, scheduling, and payment.', icon: Icons.receipt },
        { title: 'Reconciliation', description: 'Bank and payment matching against the ledger.', icon: Icons.scale },
        { title: 'Billing and receivables', description: 'Invoicing, collections, and payment application.', icon: Icons.banknotes },
        { title: 'Reporting and audit', description: 'Period close, variance review, and evidence trails.', icon: Icons.chart }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for finance teams.',
      items: [
        { title: 'Automated matching', description: 'Rules that reconcile the routine and flag the exceptions.', icon: Icons.bolt },
        { title: 'Controlled approvals', description: 'Invoice and payment approval with full history.', icon: Icons.shield },
        { title: 'Fast close', description: 'Reconciliation and review that do not take a week.', icon: Icons.clock },
        { title: 'Audit-ready trails', description: 'Evidence organized as the work happens.', icon: Icons.document }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for finance and operations teams.',
      items: [
        { title: 'Finance operations platforms', description: 'Payables, approvals, and reconciliation in one system.', href: '/solutions/custom-web-development' },
        { title: 'Automation for finance', description: 'Document intake and matching that remove manual work.', href: '/solutions/ai-automation' },
        { title: 'ERP connections', description: 'Operational data flowing into the finance system.', href: '/solutions/erp-development' }
      ]
    },
    features: {
      title: 'Features finance software often needs',
      subtitle: 'Common capabilities in the systems we build for finance teams.',
      items: [
        { title: 'Approval workflows', description: 'Routing, delegation, and full approval history.', icon: Icons.document },
        { title: 'Reconciliation rules', description: 'Automatic matching with exception handling.', icon: Icons.scale },
        { title: 'Audit trails', description: 'Every change recorded with who and when.', icon: Icons.shield },
        { title: 'Reporting', description: 'Period views and variance visibility.', icon: Icons.chart }
      ]
    },
    integrations: {
      title: 'Integrations finance teams often need',
      subtitle: 'Systems we commonly connect into finance operations.',
      items: ['Accounting platforms', 'Bank feeds', 'Payment gateways', 'Document storage', 'ERP systems', 'Approval tools', 'Tax software', 'Analytics tools']
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'accounting', title: 'Do we replace our accounting platform?', content: 'No, and we recommend you do not. Most projects build around the accounting platform as the source of truth: intake, approval, reconciliation, and reporting layers that reduce the manual work around it.' },
      { id: 'automation', title: 'Is automation reliable for financial data?', content: 'We design for reliability: deterministic rules where they work, machine-assisted extraction with confidence thresholds, and human review for exceptions. Every automated step has an audit trail and a clear fallback.' },
      { id: 'audit', title: 'How does this help with audits?', content: 'Evidence is organized as the work happens: approvals, changes, and reconciliations are stored with context, so assembling an audit file becomes a report rather than a hunt.' },
      { id: 'data', title: 'How do you handle sensitive financial data?', content: 'Access control, encryption, and audit logging are baseline requirements in our build, and we confirm the specific expectations of your finance and compliance teams before designing the data model.' }
    ],
    relatedIndustrySlugs: ['professional-services', 'startups-saas'],
    relatedSolutionSlugs: ['custom-web-development', 'ai-automation', 'erp-development'],
    seo: {
      title: 'Finance & Operations Software Development',
      description: 'Software for finance teams: payables, approvals, reconciliation, and audit-ready reporting. Built by Softcredible.'
    }
  },
  {
    slug: 'startups-saas',
    name: 'Startups & SaaS',
    icon: Icons.rocket,
    summary: 'MVP, product, and platform software for startups and subscription businesses.',
    hero: {
      title: 'Product Software That Ships Fast and Scales Deliberately',
      subtitle: 'Startups need a path from first prototype to dependable platform, with architecture that does not become a rewrite.'
    },
    challenges: {
      title: 'Common challenges in this industry',
      subtitle: 'The pressure startup product teams deal with.',
      items: [
        { title: 'Speed versus stability', description: 'The pressure to ship features fast against the cost of fragile code.' },
        { title: 'Single-tenant shortcuts', description: 'Code shaped for one customer that cannot serve the next ten.' },
        { title: 'Unclear product data', description: 'No reliable view of activation, retention, or feature use.' },
        { title: 'Billing complexity', description: 'Plans, trials, and payment failures eating engineering time.' }
      ]
    },
    workflows: {
      title: 'Common workflows in startups and SaaS',
      subtitle: 'Processes software often needs to carry.',
      items: [
        { title: 'Customer onboarding', description: 'Signup, activation, and first value delivered fast.', icon: Icons.cursor },
        { title: 'Product iteration', description: 'Features shipped, measured, and prioritized by data.', icon: Icons.layers },
        { title: 'Subscription management', description: 'Plans, trials, upgrades, and renewals.', icon: Icons.receipt },
        { title: 'Usage analytics', description: 'Activation, retention, and adoption per account.', icon: Icons.chart }
      ]
    },
    opportunities: {
      title: 'Where software helps most',
      subtitle: 'High-impact areas for startup product teams.',
      items: [
        { title: 'Multi-tenant architecture', description: 'Built for many customers from the first commit.', icon: Icons.layers },
        { title: 'Fast activation', description: 'Onboarding that gets users to value quickly.', icon: Icons.bolt },
        { title: 'Billing that behaves', description: 'Subscriptions and trials handled reliably.', icon: Icons.receipt },
        { title: 'Data-driven decisions', description: 'Usage and retention visible per plan and feature.', icon: Icons.chart }
      ]
    },
    solutions: {
      title: 'Software solutions businesses in this industry often need',
      subtitle: 'The types of systems we build for startups and SaaS.',
      items: [
        { title: 'SaaS platform development', description: 'Multi-tenant products from MVP to scale.', href: '/solutions/saas-development' },
        { title: 'MVP builds', description: 'A focused first version that validates demand.', href: '/solutions/custom-web-development' },
        { title: 'Dedicated teams', description: 'Ongoing capacity without hiring overhead.', href: '/solutions/dedicated-development-team' }
      ]
    },
    features: {
      title: 'Features SaaS software often needs',
      subtitle: 'Common capabilities in the systems we build for subscription products.',
      items: [
        { title: 'Multi-tenancy', description: 'Secure tenant isolation by design.', icon: Icons.layers },
        { title: 'Subscription and billing', description: 'Plans, trials, and invoices handled reliably.', icon: Icons.receipt },
        { title: 'Role and permissions', description: 'Admins, teams, and users with scoped access.', icon: Icons.shield },
        { title: 'Usage analytics', description: 'Activation and retention per account.', icon: Icons.chart }
      ]
    },
    integrations: {
      title: 'Integrations SaaS businesses often need',
      subtitle: 'Systems we commonly connect into product operations.',
      items: ['Payment providers', 'Analytics tools', 'Email and SMS', 'CRM systems', 'Accounting platforms', 'Data warehouses', 'Identity providers', 'Webhooks']
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'mvp', title: 'What should our MVP include?', content: 'The core loop that delivers value to one customer end to end: signup, activation, the primary feature, and payment. Everything else can wait. We define the MVP during discovery so you validate demand before investing in the long tail.' },
      { id: 'architecture', title: 'How do you handle multi-tenancy?', content: 'We use a shared-database, tenant-scoped approach for most products, which is efficient at scale with strict, centrally enforced data isolation. If compliance demands it, we can isolate specific tenants at the database level.' },
      { id: 'billing', title: 'Which billing provider do you use?', content: 'We typically integrate Stripe Billing for subscriptions, trials, invoices, and dunning. If your market requires other gateways, we design the billing layer to support them without coupling.' },
      { id: 'pivot', title: 'What happens when the roadmap changes?', content: 'The architecture is designed to absorb change: modular, tested, and documented. Pivots happen in the roadmap, not in a rewrite. And if you outgrow us, the code and documentation are yours.' }
    ],
    relatedIndustrySlugs: ['education', 'professional-services'],
    relatedSolutionSlugs: ['saas-development', 'custom-web-development', 'dedicated-development-team'],
    seo: {
      title: 'Startup & SaaS Software Development',
      description: 'Product software for startups and SaaS: multi-tenant MVPs, subscription billing, and usage analytics. Built by Softcredible.'
    }
  }
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug)
}

export function getRelatedIndustries(slugs: string[]): Industry[] {
  return slugs
    .map(slug => industries.find(i => i.slug === slug))
    .filter((i): i is Industry => Boolean(i))
}

export const industrySlugs = industries.map(i => i.slug)
