import type { NitroFetchOptions } from 'nitropack'

export interface UseApiOptions {
  baseURL?: string
  defaultHeaders?: Record<string, string>
}
export function useApi(options: UseApiOptions = {}) {
  const config = useRuntimeConfig()
  const baseURL = options.baseURL || config.public.apiBase || '/api'
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.defaultHeaders
  }

  async function request<T>(
    endpoint: string,
    init: NitroFetchOptions<string> = {}
  ): Promise<T> {
    const url = `${baseURL}${endpoint}`
    const response = await $fetch<T>(url, {
      ...init,
      headers: {
        ...defaultHeaders,
        ...(init.headers || {})
      },
      onRequestError({ error }) {
        console.error(`API request failed: ${init.method || 'GET'} ${url}`, error)
      },
      onResponseError({ error }) {
        console.error(`API response error: ${init.method || 'GET'} ${url}`, error)
      }
    })
    return response as T
  }

  const get = <T>(endpoint: string, params?: Record<string, any>) => {
    const url = params ? `${endpoint}?${new URLSearchParams(params).toString()}` : endpoint
    return request<T>(url, { method: 'GET' })
  }

  const post = <T>(endpoint: string, body?: any) => {
    return request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    })
  }

  const put = <T>(endpoint: string, body?: any) => {
    return request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    })
  }

  const del = <T>(endpoint: string) => {
    return request<T>(endpoint, { method: 'DELETE' })
  }

  return {
    baseURL,
    request,
    get,
    post,
    put,
    del
  }
}
