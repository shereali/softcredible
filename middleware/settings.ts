export default defineNuxtRouteMiddleware((to) => {
  const settings = useSettingsStore()
  
  if (import.meta.client && !settings.state.loading) {
    settings.fetchSettings()
  }
})
