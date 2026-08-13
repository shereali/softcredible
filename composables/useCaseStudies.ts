export interface CaseStudiesResponse {
  data: any[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export function useCaseStudies() {
  const api = useApi()

  const list = (params?: Record<string, any>) => {
    return api.get<CaseStudiesResponse>('/case-studies', params)
  }

  const getBySlug = (slug: string) => {
    return api.get<any>(`/case-studies/${slug}`)
  }

  const getFeatured = () => {
    return api.get<any[]>('/case-studies/featured')
  }

  const getByIndustry = (industrySlug: string) => {
    return api.get<any[]>(`/case-studies/industry/${industrySlug}`)
  }

  return {
    list,
    getBySlug,
    getFeatured,
    getByIndustry
  }
}
