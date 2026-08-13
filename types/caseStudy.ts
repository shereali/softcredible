// Case study content model.
// Mirrors the Laravel `case_studies` table (backend/database/migrations) so data
// can be inserted through the CMS: slug, title, client, industry, summary,
// challenge, solution, results, services, technologies, images, featured, seo, published.
// Extended with the additional sections PHASE 7 pages render (requirements,
// architecture, features, development).

export interface CaseStudyImage {
  id: string
  url: string
  alt: string
  order: number
}

export interface CaseStudyItem {
  title: string
  description: string
  icon?: string
}

export interface CaseStudyOutcome {
  /** 'metric' only for verified, sourced numbers. Use 'qualitative' otherwise. */
  type: 'metric' | 'qualitative'
  label: string
  /** Only set for verified metrics. */
  value?: string
  description?: string
}

/** Verified before→after metric or qualitative transformation, when available. */
export interface CaseStudyTransformation {
  before: string
  after: string
  /** Set only when the metric is verified and sourced. */
  metric?: string
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  /** Display name, e.g. 'Healthcare'. */
  industry: string
  /** Links to /industries/{slug}. */
  industrySlug: string
  /** Project type, e.g. 'Web Platform'. */
  projectType: string
  summary: string
  /** Section 2 — the problem that existed. */
  challenge: string
  /** Section 3 — what needed to be built. */
  requirements: CaseStudyItem[]
  /** Section 4 — how the software solved the problem. */
  solution: string
  /** Section 5 — technical approach. */
  architecture: {
    description: string
    items: CaseStudyItem[]
  }
  /** Section 6 — most important features. */
  features: CaseStudyItem[]
  /** Section 7 — real screenshots where available. */
  images: CaseStudyImage[]
  /** Section 8 — technology and implementation. */
  development: {
    description: string
    items: CaseStudyItem[]
  }
  /** Section 9 — verified outcomes only. */
  outcome: CaseStudyOutcome[]
  /** Optional verified before→after transformation (Step 4). Renders only when populated. */
  transformation?: CaseStudyTransformation
  /** Optional client role/industry context for the pull-quote (Step 4). */
  clientRole?: string
  /** Optional verified pull-quote. Never fabricate. */
  pullQuote?: string
  /** Section 10 — technology stack. */
  technologies: string[]
  /** Internal links to /solutions/{slug}. */
  services: string[]
  featured: boolean
  published: boolean
  seo: {
    title: string
    description: string
  }
}

/** Shape used by case study cards in grids. */
export interface CaseStudyCardData {
  slug: string
  title: string
  summary: string
  industry?: string
  client?: string
  technologies?: string[]
  featured?: boolean
}
