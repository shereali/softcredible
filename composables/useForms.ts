import type { LeadTracking } from './useLeadTracking'

export interface LeadPayload {
  name: string
  email: string
  phone?: string
  company?: string
  role?: string
  website?: string
  serviceInterest: string
  currentSoftware?: string
  mainProblem?: string
  improvements?: string
  budget?: string
  timeline?: string
  message?: string
  source: string
  type: 'assessment' | 'contact' | 'booking' | 'partnership' | 'resource'
  tracking?: LeadTracking
}

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  type: 'contact'
  tracking?: LeadTracking
}

export interface LeadResponse {
  success: boolean
  message: string
  nextStep: string
  lead?: {
    id: number
    status: string
  }
}

export function useLeads() {
  const api = useApi()

  const submit = (payload: LeadPayload) => {
    return api.post<LeadResponse>('/leads', payload)
  }

  return { submit }
}

export function useContact() {
  const api = useApi()

  const submit = (payload: ContactPayload) => {
    return api.post<LeadResponse>('/contact', payload)
  }

  return { submit }
}

export function useNewsletter() {
  const api = useApi()

  const subscribe = (email: string, name?: string) => {
    return api.post<{ success: boolean; message: string }>('/newsletter', { email, name })
  }

  const unsubscribe = (email: string) => {
    return api.post<{ success: boolean; message: string }>('/newsletter/unsubscribe', { email })
  }

  return { subscribe, unsubscribe }
}
