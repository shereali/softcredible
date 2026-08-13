<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-h3">{{ title }}</h1>
      <div class="flex items-center gap-3">
        <FormInput
          v-model="search"
          placeholder="Search..."
          className="max-w-xs"
          @keyup.enter="refresh()"
        />
        <Button variant="primary" size="sm" @click="showCreate = true">
          Add {{ singular }}
        </Button>
      </div>
    </div>

    <!-- Create/edit form -->
    <div v-if="showCreate || editingId !== null" class="bg-white border border-border rounded-xl shadow-sm p-6 mb-6">
      <h2 class="text-h4 mb-4">{{ editingId !== null ? `Edit ${singular}` : `Add ${singular}` }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Name"
          :required="true"
          v-model="form.name"
        />
        <FormInput
          label="Slug"
          placeholder="auto-generated"
          v-model="form.slug"
        />
        <FormTextarea
          v-if="formFields.includes('summary') || formFields.includes('description')"
          label="Summary / Description"
          :rows="3"
          v-model="form.summary"
          className="md:col-span-2"
        />
      </div>
      <div class="flex items-center gap-3 mt-4">
        <Button variant="primary" size="sm" :disabled="saving" @click="save">
          {{ saving ? 'Saving...' : 'Save' }}
        </Button>
        <Button variant="ghost" size="sm" @click="cancelForm">
          Cancel
        </Button>
      </div>
      <p v-if="saveError" class="text-sm text-error mt-3">{{ saveError }}</p>
    </div>

    <!-- List -->
    <div v-if="loading" class="text-sm text-muted py-10 text-center">Loading...</div>
    <div v-else-if="items.length" class="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-border bg-steel-50 text-left">
            <th class="px-4 py-3 font-medium text-muted">Name</th>
            <th class="px-4 py-3 font-medium text-muted">Slug</th>
            <th class="px-4 py-3 font-medium text-muted">Published</th>
            <th class="px-4 py-3 font-medium text-muted">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id" class="border-b border-border last:border-b-0 hover:bg-steel-50/50">
            <td class="px-4 py-3 font-medium text-ink">{{ item.name || item.title }}</td>
            <td class="px-4 py-3 text-muted">{{ item.slug }}</td>
            <td class="px-4 py-3">
              <span
                class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                :class="isPublished(item) ? 'bg-success-soft text-success' : 'bg-steel-100 text-muted'"
              >
                {{ isPublished(item) ? 'Yes' : 'No' }}
              </span>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <button class="inline-flex items-center min-h-[44px] px-3 text-accent hover:underline text-xs font-medium" @click="edit(item)">
                  Edit
                </button>
                <button class="inline-flex items-center min-h-[44px] px-3 text-error hover:underline text-xs font-medium" @click="remove(item)">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-sm text-muted py-10 text-center">No items yet.</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  singular: string
  endpoint: string
  formFields?: string[]
}>(), {
  formFields: () => []
})

const auth = useAdminAuth()

interface Row {
  id: number
  name?: string
  title?: string
  slug: string
  summary?: string
  description?: string
  published?: boolean
  [key: string]: unknown
}

const items = ref<Row[]>([])
const search = ref('')
const loading = ref(false)
const showCreate = ref(false)
const editingId = ref<number | null>(null)
const saving = ref(false)
const saveError = ref<string | null>(null)

const form = reactive({
  name: '',
  slug: '',
  summary: ''
})

function isPublished(item: Row) {
  if (typeof item.published === 'boolean') return item.published
  return true
}

async function refresh() {
  loading.value = true
  try {
    const qs = search.value ? `?search=${encodeURIComponent(search.value)}` : ''
    items.value = (await auth.authorized<Row[]>(`${props.endpoint}${qs}`)) || []
  } catch {
    // ignore
  } finally {
    loading.value = false
  }
}

function edit(item: Row) {
  editingId.value = item.id
  form.name = item.name || item.title || ''
  form.slug = item.slug || ''
  form.summary = item.summary || item.description || ''
  showCreate.value = true
}

function cancelForm() {
  showCreate.value = false
  editingId.value = null
  form.name = ''
  form.slug = ''
  form.summary = ''
  saveError.value = null
}

async function save() {
  saving.value = true
  saveError.value = null
  const payload: Record<string, unknown> = {
    name: form.name,
    slug: form.slug || form.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }
  if (props.formFields?.includes('summary')) payload.summary = form.summary

  try {
    if (editingId.value !== null) {
      await auth.authorized(`${props.endpoint}/${editingId.value}`, { method: 'PUT', body: payload })
    } else {
      await auth.authorized(props.endpoint, { method: 'POST', body: payload })
    }
    cancelForm()
    await refresh()
  } catch (err: any) {
    saveError.value = err?.data?.message || 'Failed to save'
  } finally {
    saving.value = false
  }
}

async function remove(item: Row) {
  if (!confirm(`Delete ${item.name || item.title}?`)) return
  try {
    await auth.authorized(`${props.endpoint}/${item.id}`, { method: 'DELETE' })
    await refresh()
  } catch {
    // ignore
  }
}

onMounted(refresh)
</script>
