export interface FormState {
  submitting: boolean
  success: boolean
  error: string | null
  nextStep: string | null
}

export function useFormState(initial: Partial<FormState> = {}, formName = 'form') {
  const state = reactive<FormState>({
    submitting: false,
    success: false,
    error: null,
    nextStep: null,
    ...initial
  })

  const { trackForm } = useTrack()

  async function submit<T>(
    action: () => Promise<T>
  ): Promise<T | null> {
    state.submitting = true
    state.success = false
    state.error = null
    state.nextStep = null
    try {
      const result = await action()
      state.success = true
      trackForm(formName, 'success')
      return result
    } catch (error: any) {
      state.error = error?.data?.message || error?.message || 'Something went wrong'
      trackForm(formName, 'error')
      return null
    } finally {
      state.submitting = false
    }
  }

  function complete(nextStep: string) {
    state.success = true
    state.nextStep = nextStep
    trackForm(formName, 'success')
  }

  function reset() {
    state.submitting = false
    state.success = false
    state.error = null
    state.nextStep = null
  }

  return { state, submit, complete, reset }
}
