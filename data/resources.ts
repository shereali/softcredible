import type { Resource } from '~/types/resource'

// ─────────────────────────────────────────────────────────────────────────────
// RESOURCES
//
// CMS-ready content for downloadable assets. The lead magnet is the
// Business Automation Opportunity Checklist: 25 questions to identify where
// a business loses time through manual processes.
// ─────────────────────────────────────────────────────────────────────────────

export const resources: Resource[] = [
  {
    slug: 'business-automation-opportunity-checklist',
    title: 'The Business Automation Opportunity Checklist',
    type: 'checklist',
    excerpt: '25 questions to identify where your business loses time through manual processes.',
    intro: 'Most businesses lose hours every week to work that could be automated. The challenge is seeing it clearly. This checklist walks through 25 targeted questions across the areas where manual work quietly accumulates, so you can build a concrete list of automation opportunities with real payback.',
    sections: [
      {
        heading: 'How to use this checklist',
        paragraphs: [
          'Go through the questions honestly, one area at a time. For each question, note whether it applies to your business and estimate the time it costs each week. At the end you will have a ranked list of opportunities. The ones with the highest time cost and clearest rules are your best first candidates for automation.'
        ]
      },
      {
        heading: 'What to do with the results',
        paragraphs: [
          'Group your answers into quick wins, mid-size projects, and larger initiatives. Quick wins are usually single workflows you can connect or automate with modest effort. Mid-size projects often involve integrating two systems. Larger initiatives may mean a custom application or a workflow platform. Start with one clear win and measure the hours saved.'
        ]
      }
    ],
    checklist: [
      { id: 'q01', question: 'Do you re-enter the same data into more than one system on a regular basis?' },
      { id: 'q02', question: 'Do you copy information between spreadsheets by hand?' },
      { id: 'q03', question: 'Do you manually prepare the same report on a recurring schedule?' },
      { id: 'q04', question: 'Do you manually reconcile payments, orders, or invoices against another system?' },
      { id: 'q05', question: 'Do you key data from paper documents or PDFs into software?' },
      { id: 'q06', question: 'Do you manually route requests, approvals, or documents to the right person?' },
      { id: 'q07', question: 'Do you follow up on tasks, approvals, or deadlines by chasing people?' },
      { id: 'q08', question: 'Do you assemble quotes, proposals, or invoices from scattered information?' },
      { id: 'q09', question: 'Do you manually update stock levels, prices, or product data across channels?' },
      { id: 'q10', question: 'Do you re-type the same email, message, or response on a regular basis?' },
      { id: 'q11', question: 'Do you manually track which leads or opportunities are due for follow-up?' },
      { id: 'q12', question: 'Do you transfer data between a website, CRM, and accounting system by hand?' },
      { id: 'q13', question: 'Do you manually onboard new clients or customers through multiple steps?' },
      { id: 'q14', question: 'Do you hand-check the output of one system against another for errors?' },
      { id: 'q15', question: 'Do you manually create or update recurring schedules, rosters, or plans?' },
      { id: 'q16', question: 'Do you file, organize, or archive documents one at a time?' },
      { id: 'q17', question: 'Do you manually send reminders, notifications, or confirmations?' },
      { id: 'q18', question: 'Do you combine data from multiple sources into one view by hand?' },
      { id: 'q19', question: 'Do you manually calculate pricing, discounts, or commissions?' },
      { id: 'q20', question: 'Do you re-key information from forms into a database or CRM?' },
      { id: 'q21', question: 'Do you manually update statuses as work moves through a process?' },
      { id: 'q22', question: 'Do you spend time fixing mistakes caused by manual data entry?' },
      { id: 'q23', question: 'Do you manually generate or distribute documents like certificates or confirmations?' },
      { id: 'q24', question: 'Do you manually monitor systems or processes for issues instead of being alerted?' },
      { id: 'q25', question: 'Do you rely on one person who holds critical process knowledge that no system captures?' }
    ],
    fileUrl: '/resources/business-automation-opportunity-checklist.pdf',
    fileSize: 'PDF',
    gatedFields: ['name', 'email', 'company', 'role', 'main_challenge'],
    published: true,
    seo: {
      title: 'The Business Automation Opportunity Checklist',
      description: '25 questions to identify where your business loses time through manual processes. Download the free checklist from Softcredible.'
    }
  }
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug)
}

export function getPublishedResources(): Resource[] {
  return resources.filter(r => r.published)
}

export const resourceSlugs = getPublishedResources().map(r => r.slug)
