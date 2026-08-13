export interface BlogCategory {
  slug: string
  name: string
  description: string
}

export const blogCategories: BlogCategory[] = [
  { slug: 'business-software', name: 'Business Software', description: 'Practical guidance on software that runs business operations.' },
  { slug: 'saas', name: 'SaaS', description: 'Building, launching, and scaling subscription software products.' },
  { slug: 'crm', name: 'CRM', description: 'Customer relationship management systems and sales software.' },
  { slug: 'erp', name: 'ERP', description: 'Enterprise resource planning and business management systems.' },
  { slug: 'ecommerce', name: 'eCommerce', description: 'Online storefronts, order management, and commerce operations.' },
  { slug: 'ai-automation', name: 'AI Automation', description: 'Artificial intelligence and workflow automation for business.' },
  { slug: 'web-development', name: 'Web Development', description: 'Building web applications with modern engineering practices.' },
  { slug: 'software-architecture', name: 'Software Architecture', description: 'Technical design decisions that shape long-term systems.' },
  { slug: 'business-technology', name: 'Business Technology', description: 'Technology strategy for business leaders.' }
]

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find(c => c.slug === slug)
}
