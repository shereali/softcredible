const TOKEN_KEY = 'softcredible:admin-token'

export interface AdminUser {
  id: number
  name: string
  email: string
}

export function useAdminAuth() {
  const api = useApi()
  const config = useRuntimeConfig()

  const token = useState<string | null>('admin-token', () => {
    if (import.meta.client) {
      return localStorage.getItem(TOKEN_KEY)
    }
    return null
  })

  const user = useState<AdminUser | null>('admin-user', () => null)

  /** Authorized fetch helper — attaches the Bearer token. */
  async function authorized<T>(
    endpoint: string,
    options: { method?: string; body?: Record<string, unknown> } = {}
  ): Promise<T> {
    const headers: Record<string, string> = {
      Accept: 'application/json'
    }
    if (options.body) {
      headers['Content-Type'] = 'application/json'
    }
    if (token.value) {
      headers.Authorization = `Bearer ${token.value}`
    }

    const url = `${config.public.apiBase}${endpoint}`
    const response = await $fetch<T>(url, {
      method: (options.method || 'GET') as 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    })

    return response as T
  }

  async function login(email: string, password: string) {
    const result = await api.post<{ token: string; user: AdminUser }>('/auth/login', { email, password })
    token.value = result.token
    user.value = result.user
    if (import.meta.client) {
      localStorage.setItem(TOKEN_KEY, result.token)
    }
    return result
  }

  async function fetchMe() {
    const result = await authorized<AdminUser>('/auth/me')
    user.value = result
    return result
  }

  function clear() {
    token.value = null
    user.value = null
    if (import.meta.client) {
      localStorage.removeItem(TOKEN_KEY)
    }
  }

  async function logout() {
    try {
      await authorized('/auth/logout', { method: 'POST' })
    } catch {
      // Ignore network errors on logout — clear locally regardless.
    } finally {
      clear()
    }
  }

  const isAuthenticated = computed(() => Boolean(token.value))

  return { token, user, isAuthenticated, login, fetchMe, logout, authorized, clear }
}
