// Lightweight field-level validation for lead forms.
// Fires format errors on blur and required errors on submit (per interaction
// guidance: format after blur, required on submit). Errors are inline per field.

import type { Ref } from 'vue'

export type FieldValidator = (value: string) => string | null

export const required = (message: string): FieldValidator =>
  (value: string) => (value.trim() ? null : message)

export const isEmail: FieldValidator =
  (value: string) => {
    if (!value.trim()) return null
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Enter a valid email address.'
  }

export const isUrl: FieldValidator =
  (value: string) => {
    if (!value.trim()) return null
    return /^https?:\/\/.+\..+/.test(value) ? null : 'Enter a valid URL, e.g. https://company.com'
  }

export function useFieldError(
  value: Ref<string>,
  validators: FieldValidator[]
) {
  const error = ref<string | null>(null)
  const touched = ref(false)
  function validate(): string | null {
    for (const validator of validators) {
      const message = validator(value.value)
      if (message) {
        error.value = message
        return message
      }
    }
    error.value = null
    return null
  }

  function onBlur() {
    touched.value = true
    // Only format errors on blur, not required. Required fires on submit.
    const hasValue = Boolean(value.value.trim())
    if (!hasValue) {
      error.value = null
      return
    }
    for (const validator of validators) {
      const message = validator(value.value)
      if (message) {
        error.value = message
        return
      }
    }
    error.value = null
  }

  function validateOnSubmit(): boolean {
    touched.value = true
    return validate() === null
  }

  function clear() {
    error.value = null
    touched.value = false
  }

  return { error, touched, onBlur, validateOnSubmit, clear }
}
