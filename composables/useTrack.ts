// Lightweight, provider-agnostic event tracking.
//
// PHASE 12 conversion tracking: CTA clicks, form submissions, booking clicks,
// email/WhatsApp clicks. Fires a `dataLayer`-style push when a dataLayer is
// present (GA4/GTM) and always logs to console in development. No third-party
// scripts are loaded by this composable — it only records events for whatever
// analytics the site is configured with.

export interface TrackEvent {
  event: string
  category?: string
  label?: string
  value?: number
  [key: string]: unknown
}

export function useTrack() {
  function track(event: TrackEvent) {
    if (import.meta.server) return

    const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer
    if (Array.isArray(dataLayer)) {
      dataLayer.push(event)
    }

    if (import.meta.dev) {
      console.info('[track]', event)
    }
  }

  /** CTA click: hero, section, or conversion button. */
  function trackCta(label: string, location: string) {
    track({ event: 'cta_click', category: 'cta', label, location })
  }

  /** Form submission (fired on successful submit). */
  function trackForm(formName: string, outcome: 'success' | 'error') {
    track({ event: 'form_submit', category: 'form', label: formName, value: outcome === 'success' ? 1 : 0 })
  }

  /** Outbound link click: email or WhatsApp. */
  function trackOutbound(kind: 'email' | 'whatsapp' | 'phone', href: string) {
    track({ event: 'outbound_click', category: 'contact', label: kind, href })
  }

  return { track, trackCta, trackForm, trackOutbound }
}
