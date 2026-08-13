export interface Industry {
  slug: string
  name: string
  icon: string
  summary: string
  hero: {
    title: string
    subtitle: string
  }
  challenges: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description?: string }>
  }
  workflows: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description: string; icon: string }>
  }
  opportunities: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description: string; icon: string }>
  }
  solutions: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description: string; href: string }>
  }
  features: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description: string; icon: string }>
  }
  integrations: {
    title: string
    subtitle?: string
    items: string[]
  }
  caseStudySlugs: string[]
  faqs: Array<{ id: string; title: string; content: string }>
  relatedIndustrySlugs: string[]
  relatedSolutionSlugs: string[]
  seo: {
    title: string
    description: string
  }
}
