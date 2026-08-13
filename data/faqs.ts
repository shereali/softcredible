export interface FaqItem {
  id: string
  title: string
  content: string
}

// Objection-based FAQ: the questions that decide whether a visitor
// trusts us enough to book a call. Used on the homepage (condensed)
// and the full /faq page.
export const faqs: FaqItem[] = [
  {
    id: 'pricing',
    title: 'How do you price projects?',
    content: 'Every project is scoped individually. We start with a free strategy call, define the features, integrations, and timeline, then give you a fixed quote before any work begins. You can see our starting ranges on the pricing page so you have a realistic expectation before the first conversation.'
  },
  {
    id: 'timeline',
    title: 'How long does a typical project take?',
    content: 'A focused automation or integration typically ships in 2–4 weeks. A custom business web app usually takes 6–10 weeks. A SaaS platform or ERP generally runs 3–6 months. You get a clear milestone plan before we start, and you always know what is being built and what comes next.'
  },
  {
    id: 'nda-ip',
    title: 'Do you sign NDAs and handle IP transfer?',
    content: 'Yes. We sign NDAs before discussing sensitive details, and the code and all intellectual property transfer to you on final payment. You own everything we build. If you already have a contract, we are happy to work within it.'
  },
  {
    id: 'existing-system',
    title: 'What if I already have an existing system?',
    content: 'That is common, and usually an advantage. We audit what you have, identify what is worth keeping, and modernize or extend it instead of throwing it away. Many of our projects start as improvements to an existing application.'
  },
  {
    id: 'post-launch',
    title: 'Do you offer post-launch support?',
    content: 'Yes. The relationship does not end at launch. We offer maintenance, monitoring, and improvement retainers, so you have a team that already understands your system when you need the next feature or a fix.'
  },
  {
    id: 'seo-branding',
    title: 'Can you handle SEO and branding alongside development?',
    content: 'We build every site SEO-ready: clean semantic HTML, structured data, meta and Open Graph, sitemaps, and fast load times. For design and branding, we work with trusted partners, or we can recommend a path that fits your budget.'
  },
  {
    id: 'communication',
    title: 'How do we communicate during the project?',
    content: 'Directly. You work with the people building your software, not through layers of account managers. We use a shared channel, weekly updates, and a clear milestone plan so you always know exactly where the project stands.'
  },
  {
    id: 'payment',
    title: 'How does payment work?',
    content: 'For custom projects, we typically work in milestones: a deposit to start, then payments tied to delivered milestones, with a final payment on handover. This keeps risk low for you and keeps the work moving.'
  }
]

export const featuredFaqs = faqs.slice(0, 6)
