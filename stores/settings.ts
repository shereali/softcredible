export interface SettingsState {
  siteName: string
  siteUrl: string
  tagline: string
  description: string
  contactEmail: string
  contactPhone: string
  address: string
  socialLinks: {
    linkedin?: string
    twitter?: string
    github?: string
    youtube?: string
    instagram?: string
  }
  analytics: {
    googleAnalyticsId?: string
    googleTagManagerId?: string
    facebookPixelId?: string
  }
  loading: boolean
  error: string | null
}

export const useSettingsStore = defineStore('settings', () => {
  const state = reactive<SettingsState>({
    siteName: 'Softcredible',
    siteUrl: 'https://softcredible.com',
    tagline: 'We Build Software That Moves Businesses Forward',
    description: 'Premium B2B software development and business automation company.',
    contactEmail: '',
    contactPhone: '',
    address: '',
    socialLinks: {},
    analytics: {},
    loading: false,
    error: null
  })

  async function fetchSettings() {
    if (import.meta.server) return
    state.loading = true
    state.error = null
    try {
      const api = useApi()
      const data = await api.get<any>('/settings')
      Object.assign(state, data)
    } catch (error) {
      state.error = 'Failed to fetch settings'
      console.error(error)
    } finally {
      state.loading = false
    }
  }

  return { state, fetchSettings }
})
