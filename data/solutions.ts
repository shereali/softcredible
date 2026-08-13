import type { Solution } from '~/types/solution'

export const solutions: Solution[] = [
  {
    slug: 'custom-web-development',
    name: 'Custom Web Development',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    summary: 'Software designed around the way your business actually works.',
    hero: {
      title: 'Custom Web Applications Built Around Your Business',
      subtitle: 'Off-the-shelf software makes you adapt to it. We build web applications that adapt to the way your business, your team, and your customers actually work.'
    },
    problem: {
      title: 'Why Off-the-Shelf Software Falls Short',
      subtitle: 'Generic tools solve generic problems. The moment your workflows differ, you start paying for it.',
      pains: [
        { title: 'Workarounds and Hacks', description: 'Teams patch generic tools with spreadsheets and manual steps to cover missing features.', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { title: 'You Adapt to the Tool', description: 'Processes get reshaped around software limitations instead of business needs.', icon: 'M4 6h16M4 12h16M4 18h16' },
        { title: 'Integration Gaps', description: 'Core systems that can\'t talk to each other create data silos and duplicate entry.', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
        { title: 'License and Seat Costs', description: 'Per-user pricing scales painfully as headcount grows, for features you barely use.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
      ]
    },
    challenges: {
      title: 'Common Business Challenges',
      subtitle: 'The symptoms that usually bring companies to us.',
      items: [
        { title: 'Manual data entry', description: 'Hours lost every week re-keying the same information between systems.' },
        { title: 'Unclear business logic', description: 'Rules that live in people\'s heads or emails instead of in the software.' },
        { title: 'Slow internal tools', description: 'Interfaces that were fine at 10 users but painful at 100.' },
        { title: 'Reporting that requires IT', description: 'No way for managers to get the numbers they need without a ticket.' },
        { title: 'Scaling constraints', description: 'The current stack breaks as usage, data volume, or team size grows.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We design and build web applications from the ground up around your operational reality. That starts with mapping your actual workflows — who does what, what information moves where, and which rules govern decisions — then turning that into a system your team actually wants to use. You get a product that fits your process instead of a process that fits your software.',
      cta: { label: 'Discuss Your Requirements', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'The building blocks we put into most custom web applications.',
      items: [
        { title: 'Role-based dashboards', description: 'Every role sees the data and actions it needs — no more noise, no more permission sprawl.', icon: 'M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { title: 'Custom workflow automation', description: 'Approvals, notifications, and handoffs that mirror your internal process.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
        { title: 'Data import and export', description: 'Bring legacy records in cleanly and get reporting data out without IT.', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
        { title: 'Search and filtering', description: 'Find any record fast across large datasets, with saved views for repeated work.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
        { title: 'Audit and activity logs', description: 'A complete trail of who changed what, when — essential for compliance and trust.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
        { title: 'API and integration layer', description: 'Webhooks and REST endpoints so the app fits into your existing ecosystem.', icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who typically needs a custom web application.',
      items: [
        { title: 'Internal operations platforms', description: 'Order management, case tracking, scheduling, and job boards unique to one company.', audience: 'Operations teams' },
        { title: 'Client and member portals', description: 'Self-service areas where customers log in, submit, track, and pay without calling you.', audience: 'Service businesses' },
        { title: 'B2B ordering systems', description: 'Wholesale ordering, quotes, and account management that replace email and spreadsheets.', audience: 'Distributors and manufacturers' },
        { title: 'Data-heavy management tools', description: 'Systems that turn messy operational data into clear, actionable records.', audience: 'Growing companies' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'A pragmatic stack we select around your requirements.',
      items: ['Laravel', 'Vue.js', 'Nuxt', 'TypeScript', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs', 'Tailwind CSS']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'A proven path from first conversation to production.',
      items: [
        { id: 'discover', title: 'Discover', description: 'Workshops to map workflows, users, data, and the real problem.' },
        { id: 'define', title: 'Define', description: 'A prioritized feature roadmap with clear scope and milestones.' },
        { id: 'design', title: 'Design', description: 'Interfaces and architecture designed for usability and scale.' },
        { id: 'build', title: 'Build', description: 'Iterative development with regular demos so you see progress weekly.' },
        { id: 'test', title: 'Test', description: 'Automated and manual testing covering functionality, security, and performance.' },
        { id: 'launch', title: 'Launch', description: 'Deployment, monitoring, and a smooth handover to your team.' }
      ]
    },
    caseStudySlugs: ['healthcare-patient-management'],
    faqs: [
      { id: 'timeline', title: 'How long does a custom web application take?', content: 'A focused internal tool can ship in 8–12 weeks. Larger platforms with integrations, roles, and reporting typically run 4–6 months. After discovery we give you a fixed roadmap with milestones, so you always know what lands when.' },
      { id: 'cost', title: 'How much does custom development cost?', content: 'It depends on scope — a scoped MVP is a fraction of a full platform. After our discovery phase you get a fixed-price or time-and-materials estimate with no surprises. You control the roadmap, so you can launch a first version and expand later.' },
      { id: 'maintenance', title: 'Who maintains the application after launch?', content: 'We offer ongoing maintenance and improvement — bug fixes, security updates, and new features. You own the code, and we can hand over full documentation to your team whenever you want to bring it in-house.' },
      { id: 'existing-systems', title: 'Can you work with our existing systems?', content: 'Yes. Most projects integrate with existing tools — ERPs, CRMs, payment providers, legacy databases. We map your ecosystem early and design the integration layer around it.' }
    ],
    relatedSolutionSlugs: ['api-integration', 'software-modernization', 'dedicated-development-team'],
    seo: {
      title: 'Custom Web Development',
      description: 'Custom web applications built around your business workflows. Role-based dashboards, workflow automation, and integrations from Softcredible.'
    }
  },
  {
    slug: 'saas-development',
    name: 'SaaS Development',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    summary: 'Build scalable subscription-based products from idea to production.',
    hero: {
      title: 'From Idea to a Scalable SaaS Product',
      subtitle: 'We help you design, build, and launch multi-tenant SaaS platforms that grow from your first customer to thousands — without rebuilding along the way.'
    },
    problem: {
      title: 'Why SaaS Products Fail to Scale',
      subtitle: 'Most SaaS stumbles are architectural, not feature-related.',
      pains: [
        { title: 'Single-tenant shortcuts', description: 'Code written for one customer that needs a rewrite the moment a second signs up.', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
        { title: 'Broken onboarding', description: 'Churn starts the moment a trial user can\'t figure out how to get value.', icon: 'M17 8l4 4m0 0l-4 4m4-4H3' },
        { title: 'Billing complexity', description: 'Plans, trials, upgrades, and failed payments that eat engineering time.', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
        { title: 'Feature bloat', description: 'Building for every request instead of the customers who pay.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
      ]
    },
    challenges: {
      title: 'Common Challenges in SaaS Development',
      items: [
        { title: 'Multi-tenant data isolation', description: 'Every customer\'s data must be securely separated, by design.' },
        { title: 'Onboarding and activation', description: 'New users need a clear path to their first win, fast.' },
        { title: 'Usage analytics', description: 'You can\'t improve what you can\'t measure per account.' },
        { title: 'Plan and feature gating', description: 'Different tiers need different capabilities without code forks.' },
        { title: 'Performance under growth', description: 'Slow queries and heavy pages become churn triggers.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We build multi-tenant SaaS platforms end to end: the product core, subscription and billing, admin tooling, onboarding flows, and the analytics that tell you how customers actually use it. We start with a focused MVP that validates your market, then scale the architecture deliberately as adoption grows — multi-tenant from day one, so you never face a painful rewrite.',
      cta: { label: 'Validate Your SaaS Idea', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'The backbone of every SaaS platform we ship.',
      items: [
        { title: 'Multi-tenant architecture', description: 'Secure tenant isolation with shared infrastructure and sane per-tenant limits.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { title: 'Subscription and billing', description: 'Plans, trials, upgrades, downgrades, invoices, and payment recovery built in.', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
        { title: 'Role and permission system', description: 'Fine-grained access control for admins, teams, and end users.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
        { title: 'Tenant admin portal', description: 'Your team manages accounts, plans, and support without touching code.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
        { title: 'Usage analytics', description: 'Dashboards that show activation, retention, and feature adoption per plan.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { title: 'API and webhooks', description: 'Let customers and partners integrate with your platform programmatically.', icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who builds SaaS with us.',
      items: [
        { title: 'B2B SaaS platforms', description: 'Subscription tools for vertical workflows — CRM, billing, project management.', audience: 'Founders and product teams' },
        { title: 'Marketplace and platform businesses', description: 'Multi-sided platforms connecting buyers, sellers, and service providers.', audience: 'Marketplace operators' },
        { title: 'White-label products', description: 'Products your resellers and partners rebrand and sell as their own.', audience: 'Agencies and distributors' },
        { title: 'Internal product spin-offs', description: 'Tooling built for your company, packaged as a commercial product.', audience: 'Corporates' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'Built for scale from the first commit.',
      items: ['Laravel', 'Vue.js', 'Nuxt', 'PostgreSQL', 'Redis', 'Stripe', 'Docker', 'AWS', 'Queue Workers', 'Webhooks']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'Launch fast, scale deliberately.',
      items: [
        { id: 'validate', title: 'Validate', description: 'Define the customer, the problem, and the smallest feature set that proves value.' },
        { id: 'scaffold', title: 'Scaffold', description: 'Set up multi-tenant architecture, CI/CD, and environments from day one.' },
        { id: 'mvp', title: 'Build MVP', description: 'Ship the core loop: sign up, activate, use, and pay.' },
        { id: 'launch', title: 'Launch', description: 'Deploy, monitor, and instrument analytics for real usage data.' },
        { id: 'iterate', title: 'Iterate', description: 'Prioritize by data — retention, activation, and revenue — not opinions.' }
      ]
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'mvp-scope', title: 'What should our MVP include?', content: 'The core loop that delivers value to one customer end to end: signup, onboarding, the primary feature, and payment. Everything else can wait. We help you define the MVP during discovery so you validate demand before investing in the long tail.' },
      { id: 'multi-tenant', title: 'How do you handle multi-tenancy?', content: 'We use a shared-database, tenant-scoped approach for most products — efficient at scale with strict, centrally enforced data isolation. If your compliance needs demand it, we can isolate specific tenants at the database level.' },
      { id: 'billing', title: 'Which billing provider do you use?', content: 'We typically integrate Stripe Billing for subscriptions, trials, invoices, and dunning. If your market requires PayPal, Paddle, or local gateways, we design the billing layer to support them.' },
      { id: 'cost', title: 'How much does a SaaS MVP cost?', content: 'A scoped MVP for a B2B SaaS usually runs 12–20 weeks depending on the feature set. After discovery you get a fixed roadmap and estimate — and you can expand from the MVP in phases as revenue validates it.' }
    ],
    relatedSolutionSlugs: ['custom-web-development', 'api-integration', 'ai-automation'],
    seo: {
      title: 'SaaS Development',
      description: 'Multi-tenant SaaS platforms built end to end — billing, onboarding, admin tooling, and analytics. From MVP to scale with Softcredible.'
    }
  },
  {
    slug: 'crm-development',
    name: 'CRM Development',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    summary: 'Centralize customer relationships, sales pipelines, and reporting.',
    hero: {
      title: 'A CRM That Fits Your Sales Process',
      subtitle: 'Generic CRMs force your team into someone else\'s pipeline. We build customer relationship systems around the way your sales team actually sells.'
    },
    problem: {
      title: 'Why Standard CRMs Lose Deals',
      subtitle: 'The problem isn\'t missing features — it\'s that adoption collapses when the tool fights the process.',
      pains: [
        { title: 'Low team adoption', description: 'Reps stop logging activities when the CRM adds work instead of saving it.', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Rigid pipelines', description: 'Stages that don\'t match your deals force reps to guess where things stand.', icon: 'M9 5l7 7-7 7' },
        { title: 'Siloed customer data', description: 'Sales, support, and marketing each hold a piece of the customer picture.', icon: 'M4 6h16M4 12h16M4 18h16' },
        { title: 'Manual reporting', description: 'Monthly pipeline reports assembled by hand in spreadsheets.', icon: 'M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
      ]
    },
    challenges: {
      title: 'Common CRM Challenges',
      items: [
        { title: 'Duplicate and stale records', description: 'Multiple profiles for the same customer, outdated contact details.' },
        { title: 'No pipeline visibility', description: 'Managers can\'t see deals at risk until it\'s too late.' },
        { title: 'Weak follow-up discipline', description: 'Leads slip through because nothing reminds the owner to act.' },
        { title: 'Territory and ownership conflicts', description: 'Unclear record ownership leads to double-touching and lost trust.' },
        { title: 'Reporting lag', description: 'Numbers that arrive monthly are already stale when reviewed.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We build CRMs around your sales motion — custom pipelines, lead routing, activity tracking, quotes and proposals, and reporting that managers can read in real time. We also connect it to your other tools so customer data flows from marketing to sales to support without re-entry.',
      cta: { label: 'Map Your Sales Process', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'What a custom CRM delivers that generic ones can\'t.',
      items: [
        { title: 'Custom pipelines', description: 'Stages, fields, and win criteria defined around your deal types.', icon: 'M9 5l7 7-7 7' },
        { title: 'Lead capture and routing', description: 'Web forms, imports, and automatic assignment to the right owner.', icon: 'M17 8l4 4m0 0l-4 4m4-4H3' },
        { title: 'Activity tracking', description: 'Calls, emails, and meetings logged in one click from where you work.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Quotes and proposals', description: 'Generate documents from deal data and track when they\'re viewed.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { title: 'Pipeline analytics', description: 'Win rates, cycle time, and stage velocity per rep and team.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { title: 'Automated reminders', description: 'Follow-ups, renewals, and stale deals surfaced before they slip.', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who gets the most from a custom CRM.',
      items: [
        { title: 'B2B sales teams', description: 'Long sales cycles with multiple stakeholders and complex quotes.', audience: 'Sales organizations' },
        { title: 'Agency and services firms', description: 'Client accounts, retainer tracking, and project handoffs from sales.', audience: 'Professional services' },
        { title: 'Membership and subscription businesses', description: 'Renewal pipelines and churn management for recurring revenue.', audience: 'Membership organizations' },
        { title: 'Field sales organizations', description: 'Territory management and visit planning for distributed teams.', audience: 'Field sales' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'The stack behind a reliable CRM.',
      items: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker', 'REST APIs', 'Webhooks', 'Mail Integration', 'Tailwind CSS']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'Built around your sales motion, not around a template.',
      items: [
        { id: 'sales-map', title: 'Sales Map', description: 'Document your pipeline stages, fields, and reporting needs with your sales team.' },
        { id: 'data-plan', title: 'Data Plan', description: 'Define record structure, ownership rules, and how legacy data migrates.' },
        { id: 'design', title: 'Design', description: 'Design the interface around what reps do all day — not what the admin needs.' },
        { id: 'build', title: 'Build', description: 'Ship pipeline, automation, and integrations in weekly working demos.' },
        { id: 'adopt', title: 'Adopt', description: 'Roll out with training, import your data, and tune based on usage.' }
      ]
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'why-custom', title: 'Why not just use Salesforce or HubSpot?', content: 'Those are excellent platforms if their model matches your process. Custom CRM wins when you have deal types, fields, or workflows that force you to hack generic tools — or when per-seat pricing at your scale makes ownership cheaper.' },
      { id: 'data-migration', title: 'Can you migrate our existing CRM data?', content: 'Yes. We map, clean, and migrate records from spreadsheets, legacy CRMs, or exports — preserving ownership, history, and custom fields where possible.' },
      { id: 'integration', title: 'Will it integrate with our email and marketing tools?', content: 'We build native integrations with common email providers and marketing platforms, and use webhooks and APIs for anything custom. Logged emails and campaign activity flow into the contact timeline automatically.' },
      { id: 'timeline', title: 'How long does a CRM project take?', content: 'A focused CRM with two or three pipelines and core integrations typically ships in 10–14 weeks. Larger rollouts with migration and many integrations run longer — the roadmap is fixed after discovery.' }
    ],
    relatedSolutionSlugs: ['custom-web-development', 'api-integration', 'ai-automation'],
    seo: {
      title: 'CRM Development',
      description: 'Custom CRM built around your sales process — pipelines, lead routing, quotes, and real-time reporting from Softcredible.'
    }
  },
  {
    slug: 'erp-development',
    name: 'ERP & Business Management',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    summary: 'Connect operations, finance, inventory, and workflows.',
    hero: {
      title: 'One System for the Whole Business',
      subtitle: 'When operations, finance, inventory, and reporting live in different tools, every handoff is a risk. We build ERP systems that connect them.'
    },
    problem: {
      title: 'The Cost of Disconnected Operations',
      subtitle: 'Spreadsheets and point solutions work until they don\'t — and the failure is expensive.',
      pains: [
        { title: 'Inventory that never matches', description: 'Warehouse counts disagree with finance records, causing stockouts or write-offs.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Blind purchasing', description: 'Buying decisions made without real stock and demand data.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
        { title: 'Month-end chaos', description: 'Reconciling orders, stock, and payments takes days of manual work.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'No real-time visibility', description: 'Managers discover problems days after they happen, from stale reports.', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
      ]
    },
    challenges: {
      title: 'Common ERP Challenges',
      items: [
        { title: 'Data entry duplication', description: 'The same order entered in sales, warehouse, and finance systems.' },
        { title: 'Approval bottlenecks', description: 'Purchases and payments waiting on manual sign-offs with no tracking.' },
        { title: 'Warehouse accuracy', description: 'Receiving, picking, and returns that drift from system counts.' },
        { title: 'Multi-location complexity', description: 'Stock and reporting split across branches or warehouses.' },
        { title: 'Compliance reporting', description: 'Auditors and regulators needing data you can only assemble by hand.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We build ERP and business management systems that unify your core operations: purchasing, inventory, sales, invoicing, and reporting on one data foundation. We start with the processes that hurt most — usually inventory or order flow — and connect the rest in phases, so you get a working system fast without a big-bang replacement.',
      cta: { label: 'Audit Your Operations', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'The operational backbone of a modern ERP.',
      items: [
        { title: 'Unified data model', description: 'One source of truth for products, customers, suppliers, and orders.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { title: 'Inventory management', description: 'Multi-location stock, batch tracking, and cycle counts.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Purchase and supplier workflows', description: 'Requisitions, approvals, purchase orders, and receiving with audit trails.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
        { title: 'Sales and invoicing', description: 'Quotes, orders, invoices, and payments linked to stock movements.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        { title: 'Approval workflows', description: 'Configurable approval chains with full history and escalation.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { title: 'Management dashboards', description: 'Real-time KPIs: stock value, order backlog, margins, and cash flow.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who needs a connected business system.',
      items: [
        { title: 'Distribution and wholesale', description: 'Order-to-cash with accurate stock across warehouses.', audience: 'Distributors' },
        { title: 'Manufacturing operations', description: 'Raw materials, production orders, and finished goods in one flow.', audience: 'Manufacturers' },
        { title: 'Retail chains', description: 'Multi-store inventory and purchasing under one roof.', audience: 'Retail operators' },
        { title: 'Service businesses', description: 'Jobs, parts, billing, and field resources connected.', audience: 'Service companies' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'Reliable, audit-friendly, and built to integrate.',
      items: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs', 'Queue Workers', 'PDF Reporting', 'Barcode/QR', 'Tailwind CSS']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'Incremental by design — connect the painful parts first.',
      items: [
        { id: 'map', title: 'Map', description: 'Document processes, handoffs, and data flows across departments.' },
        { id: 'prioritize', title: 'Prioritize', description: 'Pick the first connected workflow with the highest pain or payback.' },
        { id: 'build', title: 'Build', description: 'Deliver that workflow end to end, including data migration.' },
        { id: 'connect', title: 'Connect', description: 'Link the next departments and processes in short phases.' },
        { id: 'operate', title: 'Operate', description: 'Train teams, monitor usage, and refine reporting as reality surfaces.' }
      ]
    },
    caseStudySlugs: ['enterprise-inventory-erp'],
    faqs: [
      { id: 'big-bang', title: 'Do we have to replace everything at once?', content: 'No — and we recommend you don\'t. We connect the highest-pain workflow first, prove it in production, then extend. This de-risks the project and delivers value in weeks, not a year-long implementation.' },
      { id: 'existing', title: 'Can you work around our existing accounting system?', content: 'Usually yes. Most ERP projects integrate with an existing accounting package rather than replace it. We map where data must sync and keep the accounting system as the financial source of truth where that\'s safer.' },
      { id: 'accuracy', title: 'How do you keep inventory accurate?', content: 'Through workflow discipline: receiving validates against purchase orders, picking decrements stock, and cycle counts run on a schedule. The system flags variances immediately instead of discovering them at year-end.' },
      { id: 'timeline', title: 'How long does an ERP build take?', content: 'A first connected workflow — say inventory plus purchasing — typically ships in 12–16 weeks. Extending across sales, finance, and reporting happens in subsequent phases, each with its own timeline and budget.' }
    ],
    relatedSolutionSlugs: ['custom-web-development', 'api-integration', 'software-modernization'],
    seo: {
      title: 'ERP Development',
      description: 'ERP and business management systems that unify inventory, purchasing, sales, and reporting. Built in connected phases by Softcredible.'
    }
  },
  {
    slug: 'ecommerce-development',
    name: 'eCommerce',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    summary: 'Build high-performance commerce experiences tailored to your business.',
    hero: {
      title: 'eCommerce That Converts and Scales',
      subtitle: 'Your storefront is your sales floor. We build commerce platforms that are fast, conversion-focused, and able to handle your busiest days.'
    },
    problem: {
      title: 'What Holds eCommerce Businesses Back',
      subtitle: 'The platform you picked at launch may be the ceiling you hit at growth.',
      pains: [
        { title: 'Slow page loads', description: 'Every second of delay costs conversions — and mobile users feel it most.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Template limits', description: 'Themes that can\'t express your brand or your merchandising strategy.', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
        { title: 'Checkout friction', description: 'Multi-step, slow, or confusing checkout that leaks revenue at the last step.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
        { title: 'Inventory sync problems', description: 'Overselling, overselling, or manual stock updates between store and warehouse.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' }
      ]
    },
    challenges: {
      title: 'Common eCommerce Challenges',
      items: [
        { title: 'Cart abandonment', description: 'Friction between product page and order confirmation.' },
        { title: 'Peak traffic spikes', description: 'Sales events that take the store down exactly when it matters.' },
        { title: 'Complex catalog rules', description: 'Bundles, variants, and pricing rules templates can\'t express.' },
        { title: 'Order management overhead', description: 'Fulfillment, returns, and support scattered across tools.' },
        { title: 'Poor merchandising tools', description: 'No easy way to run campaigns, promotions, or A/B tests.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We build custom eCommerce platforms on modern commerce architecture — fast storefronts, flexible catalog and pricing, one-page checkout, and order management that keeps up with fulfillment. Whether you\'re leaving a rigid SaaS platform or launching a new brand, we design the commerce experience around your products and customers.',
      cta: { label: 'Scope Your Store', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'The capabilities that separate a storefront from a commerce platform.',
      items: [
        { title: 'High-performance storefront', description: 'Edge-served pages that load fast on every device.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { title: 'Flexible catalog and variants', description: 'Products, bundles, custom options, and complex pricing rules.', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
        { title: 'One-page checkout', description: 'Minimal steps, guest checkout, and saved payment methods.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
        { title: 'Order management', description: 'Fulfillment, returns, refunds, and customer communication in one place.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
        { title: 'Promotions engine', description: 'Discounts, coupons, bundles, and free-shipping rules your team can run.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Analytics and A/B testing', description: 'Understand funnel drop-off and test merchandising changes.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who we build commerce platforms for.',
      items: [
        { title: 'Direct-to-consumer brands', description: 'Brand-led storefronts with storytelling, bundles, and subscriptions.', audience: 'DTC brands' },
        { title: 'B2B commerce', description: 'Account pricing, quotes, and approval flows for business buyers.', audience: 'B2B sellers' },
        { title: 'Multi-store operations', description: 'Several storefronts sharing one catalog and fulfillment engine.', audience: 'Retail groups' },
        { title: 'Marketplace sellers', description: 'Multi-channel listing and order sync from a single source of truth.', audience: 'Marketplace sellers' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'Commerce architecture that stays fast under load.',
      items: ['Nuxt', 'Vue.js', 'Laravel', 'Stripe', 'PayPal', 'MySQL', 'Redis', 'Docker', 'Edge Caching', 'Webhooks']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'From catalog to checkout to launch.',
      items: [
        { id: 'audit', title: 'Audit', description: 'Review your catalog, pricing rules, and current conversion pain points.' },
        { id: 'design', title: 'Design', description: 'Design the storefront and checkout around conversion, not decoration.' },
        { id: 'build', title: 'Build', description: 'Build catalog, cart, checkout, and payments with payment-provider test modes.' },
        { id: 'migrate', title: 'Migrate', description: 'Move products, customers, and order history without downtime.' },
        { id: 'launch', title: 'Launch', description: 'Deploy with monitoring, load testing, and a rollback plan.' }
      ]
    },
    caseStudySlugs: ['retail-ecommerce-platform'],
    faqs: [
      { id: 'saas-vs-custom', title: 'When does custom make sense over Shopify?', content: 'When your catalog rules, pricing, checkout, or integrations force Shopify apps and hacks — or when per-order fees and platform limits cut into your margin at scale. Custom costs more upfront but removes those ceilings.' },
      { id: 'payments', title: 'Which payment providers do you support?', content: 'We integrate Stripe and PayPal as a baseline, plus regional gateways where your market requires them. Recurring payments for subscription products are supported too.' },
      { id: 'migration', title: 'Can you migrate our existing store?', content: 'Yes — products, variants, images, customers, and order history. We run migrations in staging, validate counts and prices, then switch over with a defined cutover window.' },
      { id: 'performance', title: 'How fast will the store actually be?', content: 'We target sub-second page loads by keeping the storefront static-first, caching aggressively, and serving images through a CDN. We load-test against your expected peak traffic before launch.' }
    ],
    relatedSolutionSlugs: ['custom-web-development', 'api-integration', 'pos-development'],
    seo: {
      title: 'eCommerce Development',
      description: 'Custom eCommerce platforms — fast storefronts, flexible catalog and pricing, one-page checkout, and order management from Softcredible.'
    }
  },
  {
    slug: 'pos-development',
    name: 'POS & Inventory',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    summary: 'Modernize sales, inventory, and operational workflows.',
    hero: {
      title: 'A Point of Sale That Keeps Up With Your Floor',
      subtitle: 'Slow, disconnected, or fragile POS systems cost you sales every shift. We build POS and inventory systems that stay fast — even offline.'
    },
    problem: {
      title: 'When the Register Becomes the Bottleneck',
      subtitle: 'The POS is where your business meets the customer. When it fails, everything stops.',
      pains: [
        { title: 'Downtime at the counter', description: 'Internet blips or crashes freeze checkout during peak hours.', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Disconnected stock', description: 'The register, warehouse, and online store each believe different numbers.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { title: 'Slow returns and refunds', description: 'Customers waiting while staff fight a clunky refund flow.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Blind staff reporting', description: 'Owners get numbers days later, from spreadsheets the manager keeps.', icon: 'M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
      ]
    },
    challenges: {
      title: 'Common POS Challenges',
      items: [
        { title: 'Offline fragility', description: 'Sales lost or hand-written when the network drops.' },
        { title: 'Multi-location drift', description: 'Transfers and stock levels between branches never reconcile.' },
        { title: 'Payment integration churn', description: 'Hardware and gateway changes that take the register offline.' },
        { title: 'Training burden', description: 'Interfaces so complex new staff take weeks to be productive.' },
        { title: 'Reporting gaps', description: 'No visibility into per-product, per-shift, or per-until performance.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We build point-of-sale and inventory systems for retail, hospitality, and service businesses: fast touch-optimized checkout, offline-first operation so sales never stop, real-time inventory across locations, and shift-level reporting owners can read from anywhere. The POS becomes a source of truth, not a source of friction.',
      cta: { label: 'Modernize Your Checkout', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'The essentials of a modern POS and inventory system.',
      items: [
        { title: 'Touch-optimized checkout', description: 'Large targets, barcode-first, and lightning-fast item entry.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Offline-first mode', description: 'Sales continue on local cache and sync when the connection returns.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { title: 'Real-time inventory', description: 'Sales decrement stock instantly across all locations and channels.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Returns and refunds', description: 'Streamlined flows with reason codes and audit trails.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
        { title: 'Shift and cash management', description: 'Open/close floats, till counts, and variance tracking per shift.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
        { title: 'Multi-location reporting', description: 'Sales, margins, and stock per store, per category, per shift.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who runs on a Softcredible POS.',
      items: [
        { title: 'Retail stores', description: 'Barcode-driven checkout with instant stock updates.', audience: 'Retailers' },
        { title: 'Restaurants and cafes', description: 'Order entry, split bills, and kitchen ticket printing.', audience: 'Hospitality' },
        { title: 'Service counters', description: 'Appointments, add-ons, and invoicing at the point of service.', audience: 'Service businesses' },
        { title: 'Multi-store chains', description: 'Central pricing, transfers, and consolidated reporting.', audience: 'Chain operators' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'Built to survive a bad connection day.',
      items: ['Nuxt', 'Vue.js', 'Laravel', 'SQLite (offline)', 'MySQL', 'Redis', 'Docker', 'Receipt Printing', 'Barcode/QR', 'Payment Gateways']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'From counter to back office.',
      items: [
        { id: 'floor-walk', title: 'Floor Walk', description: 'Observe a real shift: how orders happen, what slows staff, where stock drifts.' },
        { id: 'spec', title: 'Spec', description: 'Define checkout flows, hardware, offline behavior, and reporting.' },
        { id: 'build', title: 'Build', description: 'Build with touch-first UI and offline sync as a first-class feature.' },
        { id: 'pilot', title: 'Pilot', description: 'Run one location for a week with real staff before wider rollout.' },
        { id: 'rollout', title: 'Rollout', description: 'Deploy to all locations with training and on-call support.' }
      ]
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'offline', title: 'What happens when the internet goes down?', content: 'The register keeps selling. Sales are written to a local store and sync automatically when the connection returns — including inventory movements and payment reconciliation.' },
      { id: 'hardware', title: 'What hardware do we need?', content: 'We build on standard hardware: Android or Windows tablets, USB or Bluetooth receipt printers, barcode scanners, and cash drawers. No proprietary terminals locked to a vendor.' },
      { id: 'migration', title: 'Can we migrate from our current POS?', content: 'Yes. We export your product catalog, pricing, and — where available — transaction history, then run a parallel period so your team can compare before switching fully.' },
      { id: 'channels', title: 'Does it connect to our online store?', content: 'It can. Inventory decrements in the store and online from one stock pool, and we can sync orders back into the POS for pickup or returns.' }
    ],
    relatedSolutionSlugs: ['ecommerce-development', 'custom-web-development', 'api-integration'],
    seo: {
      title: 'POS & Inventory Development',
      description: 'Offline-first point of sale and real-time inventory systems for retail and hospitality. Built by Softcredible.'
    }
  },
  {
    slug: 'ai-automation',
    name: 'AI & Automation',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    summary: 'Reduce repetitive work and connect intelligent automation to existing systems.',
    hero: {
      title: 'AI and Automation That Earn Their Keep',
      subtitle: 'Not AI for the sake of it. We find the repetitive work in your operations and connect automation — including LLMs — to systems you already use.'
    },
    problem: {
      title: 'Where the Time Goes',
      subtitle: 'The work that eats your team\'s week is usually the most automatable.',
      pains: [
        { title: 'Repetitive document work', description: 'Invoices, emails, and forms that staff re-read and re-key daily.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { title: 'Data entry and transfer', description: 'Copying data between systems that should talk to each other.', icon: 'M4 6h16M4 12h16M4 18h16' },
        { title: 'Slow responses', description: 'Customers waiting hours for answers that could be instant.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Knowledge trapped in documents', description: 'Answers buried in PDFs, wikis, and emails instead of at hand.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
      ]
    },
    challenges: {
      title: 'Common Automation Challenges',
      items: [
        { title: 'Broken promises', description: 'Previous automation tools that never quite worked and got abandoned.' },
        { title: 'Poor data quality', description: 'Automation is only as good as the data feeding it.' },
        { title: 'Fear of the unknown', description: 'Teams unsure what AI can safely do with their data.' },
        { title: 'Integration debt', description: 'Systems that have no API or outdated connectors.' },
        { title: 'No measurement', description: 'Automation deployed without tracking the hours or money saved.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We start by auditing your operations to find work that is repetitive, rule-based, or data-heavy — then we build automation around it. That can be workflow automation between systems, document processing pipelines, or LLM-powered assistants grounded in your own knowledge base. Every project starts with a measurable target: hours saved per week, response time, or error rate.',
      cta: { label: 'Find Your Automation', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'What we typically build.',
      items: [
        { title: 'Document processing', description: 'Extract data from invoices, contracts, and forms automatically.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { title: 'Workflow automation', description: 'Connect systems and move work automatically through your process.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
        { title: 'AI assistants and copilots', description: 'Answer questions, draft responses, and summarize from your knowledge base.', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
        { title: 'Email and notification automation', description: 'Route, respond to, and escalate messages automatically.', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { title: 'Reporting automation', description: 'Dashboards that assemble themselves from live data.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { title: 'Human-in-the-loop reviews', description: 'Automation that flags exceptions for people instead of guessing.', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Where automation pays back fastest.',
      items: [
        { title: 'Invoice and document intake', description: 'Parse incoming invoices, match to purchase orders, and route for approval.', audience: 'Finance teams' },
        { title: 'Support triage', description: 'Classify tickets, draft replies, and escalate what needs a human.', audience: 'Support teams' },
        { title: 'Knowledge access', description: 'An assistant that answers internal questions from your own documents.', audience: 'Any team' },
        { title: 'Lead qualification', description: 'Score and route inbound leads based on fit signals.', audience: 'Sales and marketing' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'Pragmatic AI, not hype.',
      items: ['OpenAI', 'LLM Pipelines', 'Vector Databases', 'Laravel', 'Vue.js', 'Python', 'REST APIs', 'Webhooks', 'Queue Workers', 'Docker']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'Start with a measurable win.',
      items: [
        { id: 'audit', title: 'Audit', description: 'Map repetitive work and quantify the hours and errors it costs.' },
        { id: 'prioritize', title: 'Prioritize', description: 'Pick the automation with the fastest, clearest payback.' },
        { id: 'prototype', title: 'Prototype', description: 'Prove the flow on real data with humans in the loop.' },
        { id: 'deploy', title: 'Deploy', description: 'Go live with monitoring, exception handling, and rollback.' },
        { id: 'measure', title: 'Measure', description: 'Report hours saved and accuracy, then expand to the next target.' }
      ]
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'llm-risk', title: 'Isn\'t AI too unreliable for business processes?', content: 'We design for that: LLMs are used where judgment is welcome, and deterministic rules everywhere else. Critical outputs get human review, confidence thresholds, and audit trails. The result is automation that flags exceptions instead of silently guessing.' },
      { id: 'data-safety', title: 'Is our data safe with AI?', content: 'Yes. We use enterprise API terms, keep your data out of training by default, and can deploy on private infrastructure where your policy requires. Data isolation and access control are part of every build.' },
      { id: 'integrations', title: 'Will it work with our existing tools?', content: 'Most likely. We integrate via APIs and webhooks with the tools you already use — CRMs, accounting, help desks, spreadsheets — and can work around systems with no API.' },
      { id: 'start', title: 'Where should we start?', content: 'With the audit. We document the top repetitive processes, estimate the payback of each, and recommend a first automation with a clear success metric — usually hours saved per week.' }
    ],
    relatedSolutionSlugs: ['api-integration', 'custom-web-development', 'saas-development'],
    seo: {
      title: 'AI & Automation',
      description: 'Workflow automation and LLM-powered assistants that reduce repetitive work. Measurable payback, built by Softcredible.'
    }
  },
  {
    slug: 'api-integration',
    name: 'API & System Integration',
    icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z',
    summary: 'Connect the tools your business already depends on.',
    hero: {
      title: 'Make Your Systems Talk to Each Other',
      subtitle: 'Every tool you add increases the need for integration. We connect your systems so data flows once, in the right direction, with the right safeguards.'
    },
    problem: {
      title: 'The Hidden Cost of Disconnected Tools',
      subtitle: 'Integration gaps look like small problems until they compound.',
      pains: [
        { title: 'Duplicate data entry', description: 'The same customer, order, or invoice typed into three systems.', icon: 'M4 6h16M4 12h16M4 18h16' },
        { title: 'Data drift', description: 'Systems that disagree about stock, prices, or status because syncs fail silently.', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Manual reconciliation', description: 'Someone spending hours each week making spreadsheets match.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Brittle point solutions', description: 'Zapier-style chains that break silently when one API changes.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }
      ]
    },
    challenges: {
      title: 'Common Integration Challenges',
      items: [
        { title: 'No APIs', description: 'Legacy systems that only expose files or screen scraping.' },
        { title: 'Rate limits and throttling', description: 'Vendors that cut you off mid-sync without warning.' },
        { title: 'Schema drift', description: 'Vendor API changes that quietly break integrations.' },
        { title: 'Error visibility', description: 'Failed syncs with no alert, discovered weeks later.' },
        { title: 'Security and access', description: 'Credentials, scopes, and keys sprawled across tools.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We design and build integration layers between your systems: event-driven sync, webhook handlers, scheduled jobs with retry and alerting, and a monitoring view so you can see every sync and every failure. We also build APIs for systems that don\'t have them — and document everything so your team can maintain it.',
      cta: { label: 'Map Your Integration Points', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'What a reliable integration layer includes.',
      items: [
        { title: 'Event-driven sync', description: 'Data moves the moment something changes, not on a timer.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { title: 'Webhook handling', description: 'Receive and process vendor callbacks with verification and retry.', icon: 'M17 8l4 4m0 0l-4 4m4-4H3' },
        { title: 'Scheduled jobs', description: 'Reliable batch syncs with locking, retries, and idempotency.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Sync monitoring', description: 'A dashboard showing every run, failure, and alert.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { title: 'Mapping and transformation', description: 'Translate fields and formats between systems without code changes.', icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Secret management', description: 'Credentials encrypted and scoped — never in config files.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who needs an integration layer.',
      items: [
        { title: 'eCommerce to ERP', description: 'Orders, stock, and invoices flowing between storefront and ERP.', audience: 'Retail and distribution' },
        { title: 'CRM to accounting', description: 'Quotes becoming invoices without re-entry.', audience: 'B2B companies' },
        { title: 'Legacy to modern', description: 'Old systems feeding data into new platforms during migration.', audience: 'Enterprises' },
        { title: 'Multi-vendor ecosystems', description: 'Payment, shipping, marketing, and analytics tools staying in sync.', audience: 'Fast-moving teams' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'Battle-tested integration tooling.',
      items: ['Laravel', 'REST APIs', 'Webhooks', 'GraphQL', 'Queue Workers', 'Redis', 'PostgreSQL', 'Docker', 'OAuth 2.0', 'Monitoring Dashboards']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'Integrations that stay connected.',
      items: [
        { id: 'inventory', title: 'Inventory', description: 'Map systems, data flows, and the failures you\'ve already seen.' },
        { id: 'design', title: 'Design', description: 'Define the integration architecture: events, schedules, and error handling.' },
        { id: 'build', title: 'Build', description: 'Implement syncs with idempotency, retries, and alerting from day one.' },
        { id: 'monitor', title: 'Monitor', description: 'Stand up the sync dashboard and alert rules before go-live.' },
        { id: 'harden', title: 'Harden', description: 'Tune retries and throttling from real traffic and failure patterns.' }
      ]
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'vs-zapier', title: 'Why not just use Zapier or Make?', content: 'Those are great for simple, low-volume flows. When you need reliable sync at scale, error handling, audit trails, or transformation logic, a purpose-built integration layer beats a chain of fragile third-party steps — and costs less to run over time.' },
      { id: 'no-api', title: 'What if a system has no API?', content: 'We assess alternatives: vendor import/export files, database-level access where permitted, or building an API layer around the system. Every option gets documented with its reliability trade-offs before we pick one.' },
      { id: 'monitoring', title: 'How do we know when a sync fails?', content: 'You\'ll get a dashboard with every sync run and alerting on failures — email, Slack, or your own tooling. Failed syncs retry automatically and surface with their root cause when they can\'t recover.' },
      { id: 'existing', title: 'Can you fix integrations that already break?', content: 'Yes. We audit the existing flows, identify the failure points — usually silent errors or missing idempotency — and rebuild them with monitoring and retry logic so failures become visible and self-healing.' }
    ],
    relatedSolutionSlugs: ['custom-web-development', 'erp-development', 'ai-automation'],
    seo: {
      title: 'API & System Integration',
      description: 'Reliable API and system integration layers — event-driven sync, webhooks, monitoring, and alerting from Softcredible.'
    }
  },
  {
    slug: 'software-modernization',
    name: 'Software Modernization',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    summary: 'Modernize legacy systems without stopping the business.',
    hero: {
      title: 'Modernize Your Legacy Software, Not Your Business',
      subtitle: 'Legacy systems grow expensive, risky, and slow. We modernize them in place — replacing, rebuilding, or wrapping — without disrupting the operations that depend on them.'
    },
    problem: {
      title: 'When Legacy Becomes a Liability',
      subtitle: 'Old software doesn\'t fail dramatically. It fails slowly, expensively, and in ways that block growth.',
      pains: [
        { title: 'Rising maintenance costs', description: 'Vendor fees, patch debt, and scarce specialists who understand the stack.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Security exposure', description: 'Unsupported frameworks and unpatched dependencies are open doors.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
        { title: 'Slow change', description: 'Every new feature takes weeks and carries regression risk.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Integration dead-ends', description: 'Modern tools can\'t talk to software from a different era.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }
      ]
    },
    challenges: {
      title: 'Common Modernization Challenges',
      items: [
        { title: 'Fear of the big bang', description: 'A full rewrite feels too risky while the business depends on the system.' },
        { title: 'Lost knowledge', description: 'The people who understood the legacy system have left.' },
        { title: 'Data migration risk', description: 'Moving years of business history without corrupting it.' },
        { title: 'Feature-by-feature parity', description: 'Users expect the new system to match the old, quirks included.' },
        { title: 'Change resistance', description: 'Teams comfortable with the old screens resist new workflows.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We modernize in layers rather than big-bang rewrites: first we stabilize what exists and wrap it with APIs so new systems can talk to it, then we replace high-value modules incrementally, and finally we retire the legacy shell. You get a modern, maintainable platform — while the business keeps running on the old system until the new one proves itself.',
      cta: { label: 'Assess Your Legacy System', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'How we modernize, layer by layer.',
      items: [
        { title: 'Legacy assessment', description: 'A documented picture of the system, its risks, and the cost of each path.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { title: 'API wrapping', description: 'Expose legacy capabilities as modern APIs so new systems can use them.', icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Strangler migration', description: 'Replace modules incrementally while the old system keeps running.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { title: 'Data migration', description: 'Extract, transform, and validate years of history safely.', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
        { title: 'Security remediation', description: 'Patch dependencies, modernize auth, and harden the perimeter.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
        { title: 'Documentation and handover', description: 'A maintainable codebase your team — or a new vendor — can own.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'Who needs modernization.',
      items: [
        { title: 'On-premise to cloud', description: 'Move from in-house servers to managed infrastructure.', audience: 'Enterprises' },
        { title: 'Framework upgrades', description: 'Get off unsupported versions and end-of-life stacks.', audience: 'Product owners' },
        { title: 'Monolith to modular', description: 'Break a coupled system into maintainable services.', audience: 'Engineering leaders' },
        { title: 'Merged-company consolidation', description: 'Bring acquired systems onto one platform.', audience: 'Corporates' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'Modern targets for legacy systems.',
      items: ['Laravel', 'Vue.js', 'Nuxt', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'REST APIs', 'CI/CD', 'Automated Testing']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'Low risk, high confidence.',
      items: [
        { id: 'assess', title: 'Assess', description: 'Document the current system: modules, data, integrations, and risk.' },
        { id: 'roadmap', title: 'Roadmap', description: 'Choose the modernization path — wrap, replace, or rebuild — module by module.' },
        { id: 'stabilize', title: 'Stabilize', description: 'Fix the most dangerous risks first: security, data integrity, availability.' },
        { id: 'migrate', title: 'Migrate', description: 'Move modules and data incrementally with parallel runs.' },
        { id: 'retire', title: 'Retire', description: 'Decommission legacy pieces once the new system proves stable.' }
      ]
    },
    caseStudySlugs: ['enterprise-inventory-erp'],
    faqs: [
      { id: 'rewrite-vs-refactor', title: 'Do we need a full rewrite?', content: 'Rarely. Most legacy systems are best modernized incrementally — stabilize, wrap with APIs, replace modules in priority order. A full rewrite only makes sense when the codebase is beyond salvage and the business rules are well understood and documented.' },
      { id: 'risk', title: 'How do you reduce modernization risk?', content: 'Parallel running is the key: the old system stays live while new modules are proven against real data. We validate feature parity, train users, and only retire legacy pieces after the replacement has been stable in production.' },
      { id: 'downtime', title: 'Will there be downtime?', content: 'The goal is none. Module replacements and data migrations are staged behind the scenes, and cutovers happen in defined windows with rollback plans. The business keeps operating through the transition.' },
      { id: 'cost', title: 'How do we know what it will cost?', content: 'The assessment phase produces a documented roadmap: each module, its migration approach, and a cost range. You decide which modules to tackle and in what order — the plan is yours to pace.' }
    ],
    relatedSolutionSlugs: ['custom-web-development', 'api-integration', 'dedicated-development-team'],
    seo: {
      title: 'Software Modernization',
      description: 'Modernize legacy software without stopping the business. Assessment, API wrapping, and incremental migration from Softcredible.'
    }
  },
  {
    slug: 'dedicated-development-team',
    name: 'Dedicated Development Team',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    summary: 'Extend your team with senior developers who work like your own.',
    hero: {
      title: 'A Senior Team That Works Like Your Own',
      subtitle: 'Hiring a full team takes months. We give you one that\'s already working together — senior developers embedded in your product, your tools, and your way of working.'
    },
    problem: {
      title: 'The Real Cost of Hiring and Staffing',
      subtitle: 'The bottleneck isn\'t budget — it\'s the time and risk of building a team from scratch.',
      pains: [
        { title: 'Months to hire', description: 'Sourcing, interviewing, and onboarding one senior engineer can take a quarter.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Team chemistry risk', description: 'Individual hires who don\'t click or don\'t deliver as a unit.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
        { title: 'Knowledge loss on departure', description: 'Key people leaving takes the context — and the momentum — with them.', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { title: 'Fixed overhead', description: 'Salary, benefits, and management load whether or not the workload is steady.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
      ]
    },
    challenges: {
      title: 'Common Engagement Challenges',
      items: [
        { title: 'Unclear ownership', description: 'Who manages the external team and how decisions get made.' },
        { title: 'Process mismatch', description: 'Your workflow and their workflow not aligning on day one.' },
        { title: 'Communication overhead', description: 'Time zones and tools that slow feedback loops.' },
        { title: 'Quality consistency', description: 'Code quality drifting without shared standards.' },
        { title: 'Vendor lock-in', description: 'Feeling stuck with a team you can\'t flex up, down, or exit cleanly.' }
      ]
    },
    solution: {
      title: 'What Softcredible Builds',
      description: 'We assemble a dedicated team around your roadmap — developers, QA, and a technical lead who acts as your engineering partner. The team uses your tools, joins your ceremonies, and reports to you. We scale the team up and down as your roadmap demands, with the same people throughout, so context and quality stay consistent.',
      cta: { label: 'Discuss Your Team Needs', href: '/contact' }
    },
    features: {
      title: 'Core Features',
      subtitle: 'What a dedicated team model gives you.',
      items: [
        { title: 'Senior team leads', description: 'A technical lead who owns delivery, quality, and communication.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
        { title: 'Flexible team size', description: 'Scale up for launches, down for maintenance — the people stay consistent.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        { title: 'Your tools and process', description: 'We work in your project management, repo, and communication channels.', icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { title: 'Knowledge transfer', description: 'Documentation and shared ownership so context never leaves with a person.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { title: 'Weekly reporting', description: 'Transparent progress, risks, and plans in a format you set.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { title: 'Clear exit path', description: 'Everything you need to continue in-house — code, docs, and handover.', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' }
      ]
    },
    useCases: {
      title: 'Use Cases',
      subtitle: 'When a dedicated team is the right call.',
      items: [
        { title: 'Scaling a product roadmap', description: 'More shipping capacity without months of hiring.', audience: 'Startups and scale-ups' },
        { title: 'Filling skill gaps', description: 'Access to expertise you can\'t hire locally — AI, integrations, specific stacks.', audience: 'Growing teams' },
        { title: 'Long-term product builds', description: 'A consistent team across a multi-phase build.', audience: 'Product companies' },
        { title: 'Maintenance and evolution', description: 'Continuous improvement for a live product.', audience: 'Established businesses' }
      ]
    },
    technology: {
      title: 'Technology',
      subtitle: 'The stack we bring to the table.',
      items: ['Laravel', 'Vue.js', 'Nuxt', 'TypeScript', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS', 'CI/CD']
    },
    process: {
      title: 'How We Deliver',
      subtitle: 'A team that slots into your way of working.',
      items: [
        { id: 'match', title: 'Match', description: 'We build the team profile from your roadmap and interview you on expectations.' },
        { id: 'onboard', title: 'Onboard', description: 'Access, tooling, and documentation set up before day one.' },
        { id: 'embed', title: 'Embed', description: 'The team joins your ceremonies and starts shipping within the first weeks.' },
        { id: 'deliver', title: 'Deliver', description: 'Iterate on your roadmap with regular demos and transparent reporting.' },
        { id: 'evolve', title: 'Evolve', description: 'Scale the team as your roadmap changes — up, down, or hand over to in-house.' }
      ]
    },
    caseStudySlugs: [],
    faqs: [
      { id: 'how-start', title: 'How fast can a team start?', content: 'Typically two to three weeks from agreement: we match the team profile, set up access and tooling, and begin with an onboarding sprint so the team is productive — not just present — in the first month.' },
      { id: 'team-size', title: 'What team sizes do you support?', content: 'From a single senior developer to multi-discipline teams of ten or more. We design the composition — developers, QA, lead — around your roadmap, and flex it up and down as work changes.' },
      { id: 'management', title: 'Who manages the team?', content: 'A dedicated technical lead runs the day-to-day — planning, quality, and delivery — while you set priorities. You always know who to talk to and where things stand; we never hide behind account managers.' },
      { id: 'exit', title: 'What happens if we want to stop?', content: 'You keep everything: the code, documentation, environments, and a structured handover. We make the exit path clean and well-documented from the start, so you\'re never locked in.' }
    ],
    relatedSolutionSlugs: ['custom-web-development', 'software-modernization', 'saas-development'],
    seo: {
      title: 'Dedicated Development Team',
      description: 'Extend your team with senior Softcredible developers — embedded in your tools and process. Flexible, consistent, and built around your roadmap.'
    }
  }
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find(s => s.slug === slug)
}

export function getRelatedSolutions(slugs: string[]): Solution[] {
  return slugs
    .map(slug => solutions.find(s => s.slug === slug))
    .filter((s): s is Solution => Boolean(s))
}

export const solutionSlugs = solutions.map(s => s.slug)
