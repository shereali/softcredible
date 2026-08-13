<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-h3 mb-1">Leads</h1>
        <p class="text-sm text-muted">View, filter, and manage the lead pipeline</p>
      </div>
      <div class="flex items-center gap-3">
        <Button variant="outline" size="sm" @click="exportCsv">
          Export CSV
        </Button>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white border border-border rounded-xl shadow-sm p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-2">
          <FormInput
            label="Search"
            placeholder="Name, email, company, service..."
            v-model="search"
            @keyup.enter="loadLeads()"
            @keyup.escape="search = ''; loadLeads()"
          />
        </div>
        <FormSelect label="Status" placeholder="All statuses" v-model="statusFilter" @change="loadLeads()">
          <option v-for="status in statuses" :key="status" :value="status">{{ formatStatus(status) }}</option>
        </FormSelect>
        <FormSelect label="Type" placeholder="All types" v-model="typeFilter" @change="loadLeads()">
          <option value="assessment">Free Assessment</option>
          <option value="contact">Contact</option>
          <option value="booking">Booking</option>
          <option value="partnership">Partnership</option>
          <option value="resource">Resource Download</option>
        </FormSelect>
      </div>
    </div>

    <!-- Table -->
    <div v-if="loading" class="text-sm text-muted py-12 text-center">Loading leads...</div>
    <p v-else-if="error" class="text-sm text-error py-12 text-center">{{ error }}</p>

    <div v-else-if="leads.length" class="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-border bg-steel-50 text-left">
              <th class="px-4 py-3 font-medium text-muted">Lead</th>
              <th class="px-4 py-3 font-medium text-muted">Service</th>
              <th class="px-4 py-3 font-medium text-muted">Source</th>
              <th class="px-4 py-3 font-medium text-muted">Status</th>
              <th class="px-4 py-3 font-medium text-muted">Assigned</th>
              <th class="px-4 py-3 font-medium text-muted">Date</th>
              <th class="px-4 py-3 font-medium text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lead in leads" :key="lead.id" class="border-b border-border last:border-b-0 hover:bg-steel-50/50">
              <td class="px-4 py-3">
                <p class="font-medium text-ink">{{ lead.name }}</p>
                <p class="text-xs text-muted">{{ lead.email }}</p>
                <p v-if="lead.company" class="text-xs text-muted">{{ lead.company }}</p>
              </td>
              <td class="px-4 py-3 text-ink-soft">{{ lead.service_interest }}</td>
              <td class="px-4 py-3 text-ink-soft">{{ lead.source }}</td>
              <td class="px-4 py-3">
                <FormSelect
                  :model-value="lead.status"
                  class="min-w-[130px]"
                  @update:model-value="updateStatus(lead, $event)"
                >
                  <option v-for="status in statuses" :key="status" :value="status">{{ formatStatus(status) }}</option>
                </FormSelect>
              </td>
              <td class="px-4 py-3 text-ink-soft">
                {{ lead.assignee?.name || 'Unassigned' }}
              </td>
              <td class="px-4 py-3 text-muted whitespace-nowrap">{{ formatDate(lead.created_at) }}</td>
              <td class="px-4 py-3">
                <div class="flex items-center gap-1">
                  <button
                    class="inline-flex items-center min-h-[44px] px-3 text-accent hover:underline text-xs font-medium"
                    @click="toggleDetails(lead)"
                  >
                    {{ expandedId === lead.id ? 'Hide' : 'Details' }}
                  </button>
                  <button
                    class="inline-flex items-center min-h-[44px] px-3 text-muted hover:text-ink text-xs font-medium"
                    @click="assignLead(lead)"
                  >
                    Assign
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Expanded details: notes -->
      <Transition
        enter="transition-all duration-300 ease-out"
        enter-from="opacity-0 -translate-y-1"
        enter-to="opacity-100 translate-y-0"
        leave="transition-all duration-200 ease-in"
        leave-from="opacity-100 translate-y-0"
        leave-to="opacity-0 -translate-y-1"
      >
        <div v-if="expandedLead" class="border-t border-border bg-steel-50/50 p-6">
        <div class="flex items-start justify-between gap-6">
          <div class="flex-1">
            <h3 class="text-h4 mb-2">Notes</h3>
            <ul v-if="expandedLead.notes?.length" class="space-y-2 mb-4">
              <li v-for="note in expandedLead.notes" :key="note.id" class="text-sm text-ink-soft bg-white border border-border rounded-lg p-3">
                <p>{{ note.note }}</p>
                <p class="text-xs text-muted mt-1">{{ note.user || 'System' }} · {{ formatDate(note.created_at) }}</p>
              </li>
            </ul>
            <p v-else class="text-sm text-muted mb-4">No notes yet.</p>
            <div class="flex gap-2">
              <FormInput
                v-model="newNote"
                placeholder="Add a note..."
                className="max-w-md"
              />
              <Button variant="primary" size="sm" @click="addNote(expandedLead)">
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
      </Transition>

      <!-- Pagination -->
      <div v-if="meta.lastPage > 1" class="flex items-center justify-between px-4 py-3 border-t border-border">
        <p class="text-sm text-muted">Page {{ meta.page }} of {{ meta.lastPage }}</p>
        <div class="flex gap-2">
          <Button variant="outline" size="sm" :disabled="meta.page <= 1" @click="page--; loadLeads()">
            Prev
          </Button>
          <Button variant="outline" size="sm" :disabled="meta.page >= meta.lastPage" @click="page++; loadLeads()">
            Next
          </Button>
        </div>
      </div>
    </div>

    <div v-else class="py-12 text-center">
      <p class="text-sm text-muted mb-4">No leads match the current filters.</p>
      <Button variant="outline" size="sm" @click="search = ''; statusFilter = ''; typeFilter = ''; loadLeads()">
        Clear Filters
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

interface LeadNote {
  id: number
  note: string
  user?: string
  created_at: string
}

interface LeadRecord {
  id: number
  name: string
  email: string
  company?: string
  service_interest: string
  source: string
  status: string
  assigned_to?: number
  assignee?: { id: number; name: string }
  created_at: string
  notes?: LeadNote[]
}

interface LeadsResponse {
  data: LeadRecord[]
  meta: { total: number; page: number; lastPage: number; perPage: number }
}

const auth = useAdminAuth()

const statuses = [
  'new', 'contacted', 'qualified', 'meeting scheduled', 'proposal sent',
  'negotiation', 'won', 'lost', 'follow up'
]

const leads = ref<LeadRecord[]>([])
const meta = ref({ total: 0, page: 1, lastPage: 1, perPage: 25 })
const search = ref('')
const statusFilter = ref('')
const typeFilter = ref('')
const page = ref(1)
const loading = ref(false)
const error = ref<string | null>(null)
const expandedId = ref<number | null>(null)
const expandedLead = ref<LeadRecord | null>(null)
const newNote = ref('')

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1)
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function queryParams() {
  const params = new URLSearchParams({ page: String(page.value), per_page: '25' })
  if (search.value) params.set('search', search.value)
  if (statusFilter.value) params.set('status', statusFilter.value)
  if (typeFilter.value) params.set('type', typeFilter.value)
  return params.toString()
}

async function loadLeads() {
  loading.value = true
  error.value = null
  try {
    const result = await auth.authorized<LeadsResponse>(`/admin/leads?${queryParams()}`)
    leads.value = result.data
    meta.value = result.meta
  } catch (err: any) {
    error.value = err?.data?.message || 'Failed to load leads'
  } finally {
    loading.value = false
  }
}

async function updateStatus(lead: LeadRecord, status: string) {
  try {
    const result = await auth.authorized<{ data: LeadRecord }>(`/admin/leads/${lead.id}/status`, {
      method: 'PATCH',
      body: { status }
    })
    lead.status = result.data.status
  } catch {
    // Revert handled implicitly; log nothing client-side
  }
}

async function toggleDetails(lead: LeadRecord) {
  if (expandedId.value === lead.id) {
    expandedId.value = null
    expandedLead.value = null
    return
  }
  try {
    const result = await auth.authorized<{ data: LeadRecord; notes: LeadNote[] }>(`/admin/leads/${lead.id}`)
    expandedLead.value = { ...result.data, notes: result.notes }
    expandedId.value = lead.id
  } catch {
    // ignore
  }
}

async function addNote(lead: LeadRecord) {
  if (!newNote.value.trim()) return
  try {
    await auth.authorized(`/admin/leads/${lead.id}/notes`, {
      method: 'POST',
      body: { note: newNote.value }
    })
    newNote.value = ''
    await toggleDetails(lead)
  } catch {
    // ignore
  }
}

async function assignLead(lead: LeadRecord) {
  const target = prompt(`Assign lead to user id (current: ${lead.assigned_to || 'unassigned'}):`)
  if (!target) return
  try {
    const result = await auth.authorized<{ data: LeadRecord }>(`/admin/leads/${lead.id}/assign`, {
      method: 'PATCH',
      body: { assigned_to: Number(target) }
    })
    lead.assigned_to = result.data.assigned_to
    lead.assignee = result.data.assignee
  } catch {
    // ignore
  }
}

async function exportCsv() {
  const params = new URLSearchParams()
  if (statusFilter.value) params.set('status', statusFilter.value)
  if (typeFilter.value) params.set('type', typeFilter.value)
  const qs = params.toString()

  try {
    const config = useRuntimeConfig()
    const blob = await $fetch<Blob>(`${config.public.apiBase}/admin/leads/export${qs ? `?${qs}` : ''}`, {
      headers: { Authorization: `Bearer ${auth.token.value}` },
      responseType: 'blob'
    })
    const url = URL.createObjectURL(blob as Blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'leads.csv'
    link.click()
    URL.revokeObjectURL(url)
  } catch {
    // ignore
  }
}

onMounted(loadLeads)
</script>
