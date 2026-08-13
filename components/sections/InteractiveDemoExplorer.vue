<template>
  <div class="max-w-5xl mx-auto">
    <!-- Category tabs -->
    <div class="flex flex-wrap items-center justify-center gap-2.5 mb-10" role="tablist" aria-label="Product demonstrations">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        role="tab"
        :aria-selected="activeTab === tab.value"
        :aria-controls="`demo-panel-${tab.value}`"
        class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200"
        :class="activeTab === tab.value
          ? 'border-accent bg-accent-soft text-accent'
          : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
        @click="activeTab = tab.value"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Demo panel -->
    <Transition name="fade" mode="out-in">
      <div
        :key="activeDemo.slug"
        :id="`demo-panel-${activeTab}`"
        role="tabpanel"
        class="bg-surface border border-border rounded-xl overflow-hidden"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <!-- Left: interface mock -->
          <div class="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-border">
            <div class="p-6 lg:p-8">
              <div class="flex items-center justify-between mb-5">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full bg-accent-soft text-accent flex items-center justify-center">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="activeDemo.icon" />
                    </svg>
                  </span>
                  <p class="text-sm font-semibold text-ink">{{ activeDemo.title }}</p>
                </div>
                <span class="text-xs text-muted">Demo interface</span>
              </div>

              <!-- Interactive module selector -->
              <div class="flex flex-wrap gap-2 mb-5">
                <button
                  v-for="module in activeDemo.modules"
                  :key="module.key"
                  type="button"
                  class="px-3 py-1.5 rounded-md border text-xs font-medium transition-all duration-200"
                  :class="activeModule === module.key
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
                  @click="activeModule = module.key"
                >
                  {{ module.label }}
                </button>
              </div>

              <!-- Module viewport -->
              <div class="aspect-[4/3] bg-background border border-border rounded-lg p-5 flex flex-col">
                <template v-if="activeView">
                  <div class="flex items-center justify-between mb-4">
                    <p class="text-sm font-semibold text-ink">{{ activeView.title }}</p>
                    <span class="text-xs text-muted">{{ activeView.meta }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2.5 flex-grow">
                    <div v-for="cell in activeView.cells" :key="cell.label" class="bg-surface border border-border rounded-md px-3 py-2.5">
                      <p class="text-[11px] text-muted mb-0.5">{{ cell.label }}</p>
                      <p class="text-sm font-medium text-ink truncate">{{ cell.value }}</p>
                    </div>
                  </div>
                  <div class="mt-4 flex items-center justify-between">
                    <p class="text-xs text-muted">{{ activeView.statusLabel }}</p>
                    <span class="inline-flex items-center gap-1.5 text-xs font-medium text-success">
                      <span class="w-1.5 h-1.5 rounded-full bg-success" aria-hidden="true"></span>
                      {{ activeView.status }}
                    </span>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- Right: problem → workflow → capability -->
          <div class="lg:col-span-5">
            <div class="p-6 lg:p-8 space-y-6">
              <div>
                <p class="text-caption font-medium text-accent uppercase tracking-wider mb-2">Problem</p>
                <p class="text-sm text-ink-soft leading-relaxed">{{ activeDemo.problem }}</p>
              </div>

              <div>
                <p class="text-caption font-medium text-accent uppercase tracking-wider mb-2">Workflow</p>
                <ol class="space-y-2">
                  <li v-for="(step, index) in activeDemo.workflow" :key="step" class="flex items-center gap-3 text-sm text-ink">
                    <span class="w-6 h-6 rounded-full bg-accent-soft text-accent text-xs font-semibold flex items-center justify-center flex-shrink-0">{{ index + 1 }}</span>
                    {{ step }}
                  </li>
                </ol>
              </div>

              <div>
                <p class="text-caption font-medium text-accent uppercase tracking-wider mb-2">Capability</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="cap in activeDemo.capabilities" :key="cap" class="px-2.5 py-1 rounded-full bg-surface border border-border text-xs font-medium text-ink">
                    {{ cap }}
                  </span>
                </div>
              </div>

              <div class="pt-4 border-t border-border">
                <Button variant="outline" size="sm" :to="`/case-studies/${activeDemo.slug}`">
                  Read the Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { caseStudies } from '~/data/caseStudies'

// Interactive demo explorer built from REAL case-study data.
// No fabricated metrics: problem = challenge, workflow = requirements,
// capabilities = features, modules = architecture items.
const demos = computed(() => caseStudies.filter(cs => cs.published).map(cs => {
  const moduleItems = cs.architecture?.items?.slice(0, 3) ?? []
  return {
    slug: cs.slug,
    title: cs.title,
    icon: cs.features?.[0]?.icon ?? 'M4 6h16M4 12h16M4 18h16',
    problem: cs.challenge,
    workflow: (cs.requirements ?? []).map(r => r.title).slice(0, 5),
    capabilities: (cs.features ?? []).map(f => f.title).slice(0, 6),
    modules: moduleItems.map((m, i) => ({
      key: `m${i}`,
      label: m.title,
      view: {
        title: m.title,
        meta: 'Module',
        cells: [
          { label: 'Purpose', value: m.description.split('.')[0] },
          { label: 'Status', value: 'Live' }
        ],
        statusLabel: 'Module status',
        status: 'Active'
      }
    }))
  }
}))

const tabs = computed(() => demos.value.map((d, i) => ({ value: d.slug, label: d.title.split(' ').slice(0, 2).join(' ') || `Project ${i + 1}` })))

const activeTab = ref(demos.value[0]?.slug ?? '')
const activeModule = ref('')

const activeDemo = computed(() => demos.value.find(d => d.slug === activeTab.value) ?? demos.value[0] ?? {
  slug: '',
  title: 'No projects yet',
  icon: 'M4 6h16M4 12h16M4 18h16',
  problem: 'Published case studies will appear here as they are added.',
  workflow: [],
  capabilities: [],
  modules: []
})
const activeView = computed(() => {
  const demo = activeDemo.value
  if (!demo) return undefined
  const mod = demo.modules.find(m => m.key === activeModule.value)
  return mod?.view
})

watch(activeTab, () => {
  activeModule.value = activeDemo.value?.modules[0]?.key ?? ''
}, { immediate: true })
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
