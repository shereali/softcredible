// Blog content model.
// CMS-ready: mirrors the Laravel blog_posts table (backend migration) with
// additional PHASE 10 sections (search intent, sections, pros/cons, related
// services, FAQ). Content is data-driven from data/blogPosts.ts so real posts
// can be added through the CMS later.

export interface BlogSection {
  heading: string
  paragraphs: string[]
}

export interface ProsCons {
  pros: string[]
  cons: string[]
}

export interface BlogFaq {
  id: string
  title: string
  content: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  publishedAt: string
  readingTime: number
  /** Search intent — what the visitor is looking for. */
  searchIntent: string
  /** Clear answer up front. */
  answer: string
  /** The detailed explanation. */
  intro: string
  sections: BlogSection[]
  /** Real examples where applicable (no fabricated stats). */
  examples?: string[]
  prosCons?: ProsCons
  /** Internal links to solutions. */
  relatedServiceSlugs: string[]
  faqs: BlogFaq[]
  seo: {
    title: string
    description: string
  }
}
