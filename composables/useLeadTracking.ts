// Client-side lead attribution capture.
// Reads UTM parameters, the referring site, and the landing page from the
// browser on first load and exposes them for form submissions. Works only in
// the client (marketing pages are SSR/prerendered, so the capture happens
// after hydration).

export interface LeadTracking {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  referrer?: string
  landingPage?: string
}

const TRACKING_KEY = 'softcredible:lead-tracking'

function readUtm(url: URL, key: string): string | undefined {
  const value = url.searchParams.get(key)
  return value ? value.slice(0, 255) : undefined
}

function capture(): LeadTracking {
  if (!import.meta.client) return {}

  const url = new URL(window.location.href)
  return {
    utmSource: readUtm(url, 'utm_source'),
    utmMedium: readUtm(url, 'utm_medium'),
    utmCampaign: readUtm(url, 'utm_campaign'),
    utmContent: readUtm(url, 'utm_content'),
    referrer: document.referrer ? document.referrer.slice(0, 500) : undefined,
    landingPage: `${url.pathname}${url.search}`.slice(0, 500)
  }
}

function mergePersisted(current: LeadTracking): LeadTracking {
  if (!import.meta.client) return current
  try {
    const stored = window.sessionStorage.getItem(TRACKING_KEY)
    if (stored) {
      return { ...JSON.parse(stored), ...current }
    }
  } catch {
    // Ignore storage failures — tracking is best-effort.
  }
  return current
}

function persist(tracking: LeadTracking): void {
  if (!import.meta.client) return
  try {
    window.sessionStorage.setItem(TRACKING_KEY, JSON.stringify(tracking))
  } catch {
    // Ignore storage failures.
  }
}

export function useLeadTracking() {
  const tracking = shallowRef<LeadTracking>({})

  function init(): LeadTracking {
    const captured = capture()
    const merged = mergePersisted(captured)
    // Preserve the first landing page and referrer for the session so a lead
    // that converts later still attributes to the original source.
    const result: LeadTracking = {
      ...merged,
      landingPage: merged.landingPage || captured.landingPage,
      referrer: merged.referrer || captured.referrer
    }
    persist(result)
    tracking.value = result
    return result
  }

  function get(): LeadTracking {
    return tracking.value
  }

  if (import.meta.client) {
    init()
  }

  return { tracking, init, get }
}
