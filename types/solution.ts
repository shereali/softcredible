export interface Solution {
  slug: string
  name: string
  icon: string
  summary: string
  hero: {
    title: string
    subtitle: string
  }
  problem: {
    title: string
    subtitle?: string
    pains: Array<{ title: string; description: string; icon: string }>
  }
  challenges: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description?: string }>
  }
  solution: {
    title: string
    description: string
    cta?: { label: string; href: string }
  }
  features: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description: string; icon: string }>
  }
  useCases: {
    title: string
    subtitle?: string
    items: Array<{ title: string; description: string; audience?: string }>
  }
  technology: {
    title: string
    subtitle?: string
    items: string[]
  }
  process: {
    title: string
    subtitle?: string
    items: Array<{ id: string; title: string; description: string }>
  }
  caseStudySlugs: string[]
  faqs: Array<{ id: string; title: string; content: string }>
  relatedSolutionSlugs: string[]
  seo: {
    title: string
    description: string
  }
}
