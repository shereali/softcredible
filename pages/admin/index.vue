<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-h3 mb-1">Dashboard</h1>
        <p class="text-sm text-muted">Lead pipeline overview</p>
      </div>
    </div>

    <div v-if="loading" class="text-sm text-muted py-12 text-center">Loading lead metrics...</div>
    <p v-else-if="error" class="text-sm text-error py-12 text-center">{{ error }}</p>

    <template v-else-if="stats">
      <!-- Stat cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Leads" :value="String(stats.totalLeads)" />
        <StatCard label="New Leads" :value="String(stats.newLeads)" />
        <StatCard label="Qualified" :value="String(stats.qualified)" />
        <StatCard label="Meetings" :value="String(stats.meetings)" />
        <StatCard label="Proposals" :value="String(stats.proposals)" />
        <StatCard label="Won" :value="String(stats.won)" tone="success" />
        <StatCard label="Lost" :value="String(stats.lost)" tone="error" />
        <StatCard label="Conversion Rate" :value="`${stats.conversionRate}%`" />
      </div>

      <!-- Lead sources -->
      <div class="bg-white border border-border rounded-xl shadow-sm p-6">
        <h2 class="text-h4 mb-4">Lead Sources</h2>
        <div v-if="stats.sources.length" class="space-y-3">
          <div v-for="source in stats.sources" :key="source.source" class="flex items-center gap-4">
            <span class="w-40 text-sm text-ink-soft truncate">{{ source.source }}</span>
            <div class="flex-1 h-2 bg-steel-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-accent rounded-full origin-left transition-transform duration-500 ease-out"
                :style="{ transform: `scaleX(${sourcePct(source.total) / 100})` }"
              />
            </div>
            <span class="w-10 text-sm font-medium text-right text-ink">{{ source.total }}</span>
          </div>
        </div>
        <p v-else class="text-sm text-muted">No leads yet.</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface DashboardStats {
  totalLeads: number
  newLeads: number
  qualified: number
  meetings: number
  proposals: number
  won: number
  lost: number
  followUp: number
  conversionRate: number
  sources: Array<{ source: string; total: number }>
}

definePageMeta({
  layout: 'admin'
})

const auth = useAdminAuth()
const stats = ref<DashboardStats | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

function sourcePct(total: number) {
  if (!stats.value || stats.value.totalLeads === 0) return 0
  return Math.round((total / stats.value.totalLeads) * 100)
}

onMounted(async () => {
  try {
    stats.value = await auth.authorized<DashboardStats>('/admin/dashboard')
  } catch (err: any) {
    error.value = err?.data?.message || 'Failed to load dashboard'
  } finally {
    loading.value = false
  }
})
</script>
