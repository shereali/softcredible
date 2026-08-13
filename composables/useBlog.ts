export interface BlogResponse {
  data: any[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export function useBlog() {
  const api = useApi()

  const list = (params?: Record<string, any>) => {
    return api.get<BlogResponse>('/blog', params)
  }

  const getBySlug = (slug: string) => {
    return api.get<any>(`/blog/${slug}`)
  }

  const getByCategory = (categorySlug: string) => {
    return api.get<any[]>(`/blog/category/${categorySlug}`)
  }

  const getByTag = (tagSlug: string) => {
    return api.get<any[]>(`/blog/tag/${tagSlug}`)
  }

  const getRelated = (slug: string, limit = 3) => {
    return api.get<any[]>(`/blog/${slug}/related`, { limit })
  }

  return {
    list,
    getBySlug,
    getByCategory,
    getByTag,
    getRelated
  }
}
