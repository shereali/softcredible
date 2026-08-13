export interface ServicesResponse {
  data: any[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export function useServices() {
  const api = useApi()

  const list = (params?: Record<string, any>) => {
    return api.get<ServicesResponse>('/services', params)
  }

  const getBySlug = (slug: string) => {
    return api.get<any>(`/services/${slug}`)
  }

  const getFeatured = () => {
    return api.get<any[]>('/services/featured')
  }

  return {
    list,
    getBySlug,
    getFeatured
  }
}
