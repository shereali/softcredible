export interface Service {
  id: string
  slug: string
  name: string
  summary: string
  description: string
  icon?: string
  features: string[]
  technologies: string[]
  order: number
  published: boolean
  seo: SeoMetadata
  createdAt: string
  updatedAt: string
}

export interface Industry {
  id: string
  slug: string
  name: string
  description: string
  image?: string
  order: number
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  summary: string
  challenge: string
  solution: string
  results: ResultMetric[]
  services: string[]
  technologies: string[]
  images: CaseStudyImage[]
  published: boolean
  featured: boolean
  seo: SeoMetadata
  createdAt: string
  updatedAt: string
}

export interface CaseStudyImage {
  id: string
  url: string
  alt: string
  order: number
}

export interface ResultMetric {
  label: string
  value: string
  unit?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage?: string
  author: Author
  category: Category
  tags: Tag[]
  publishedAt: string
  readingTime: number
  seo: SeoMetadata
  createdAt: string
  updatedAt: string
}

export interface Author {
  id: string
  name: string
  avatar?: string
  bio?: string
}

export interface Category {
  id: string
  slug: string
  name: string
}

export interface Tag {
  id: string
  slug: string
  name: string
}

export interface Resource {
  id: string
  slug: string
  title: string
  description: string
  type: 'whitepaper' | 'ebook' | 'guide' | 'template' | 'tool'
  fileUrl: string
  fileSize?: string
  thumbnail?: string
  published: boolean
  seo: SeoMetadata
  createdAt: string
  updatedAt: string
}

export interface Faq {
  id: string
  question: string
  answer: string
  category?: string
  order: number
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  serviceInterest: string
  budget?: string
  message?: string
  source: string
  status: LeadStatus
  score: number
  createdAt: string
  updatedAt: string
}

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed-won' | 'closed-lost'

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied' | 'closed'
  createdAt: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  name?: string
  status: 'active' | 'unsubscribed'
  subscribedAt: string
  unsubscribedAt?: string
}

export interface SeoMetadata {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

export interface SiteSettings {
  siteName: string
  siteUrl: string
  tagline: string
  description: string
  contactEmail: string
  contactPhone: string
  address: string
  socialLinks: SocialLinks
  analytics: AnalyticsSettings
}

export interface SocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  youtube?: string
  instagram?: string
}

export interface AnalyticsSettings {
  googleAnalyticsId?: string
  googleTagManagerId?: string
  facebookPixelId?: string
}

export interface ApiResponse<T> {
  data: T
  meta?: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
  message?: string
}

export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface FilterParams extends PaginationParams {
  search?: string
  category?: string
  tag?: string
  industry?: string
  service?: string
  status?: string
  published?: boolean
  featured?: boolean
}
