// Resource content model (whitepapers, guides, checklists).
// Mirrors the Laravel resources table with the fields the download
// architecture needs. The lead magnet is the Business Automation
// Opportunity Checklist.

export interface ResourceSection {
  heading: string
  paragraphs: string[]
}

export interface ResourceChecklistQuestion {
  id: string
  question: string
}

export interface Resource {
  slug: string
  title: string
  type: 'whitepaper' | 'ebook' | 'guide' | 'checklist' | 'template' | 'tool'
  excerpt: string
  /** Hero copy for the resource page. */
  intro: string
  sections: ResourceSection[]
  /** For the lead magnet: the checklist questions (25 for the checklist). */
  checklist?: ResourceChecklistQuestion[]
  /** File metadata for a downloadable asset (the deliverable). */
  fileUrl?: string
  fileSize?: string
  /** Fields captured before the download is unlocked. */
  gatedFields?: string[]
  published: boolean
  seo: {
    title: string
    description: string
  }
}
