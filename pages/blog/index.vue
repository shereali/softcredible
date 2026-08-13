<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl">
          <Badge variant="primary" className="mb-6">Blog</Badge>
          <h1 class="text-display mb-6">
            Software Insights for Business Leaders
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl">
            Practical guidance on custom software, SaaS, CRM, ERP, eCommerce, and automation. No hype, no fabricated numbers.
          </p>
          <Button variant="primary" size="lg" to="/resources/business-automation-opportunity-checklist">
            Get the Free Automation Checklist
          </Button>
        </div>
      </Container>
    </section>

    <!-- Category filter -->
    <section class="w-full bg-surface border-y border-border">
      <Container>
        <div class="py-6 flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            class="cursor-pointer"
            :class="activeCategory === 'all' ? '!bg-accent !text-white !border-accent' : ''"
            @click="activeCategory = 'all'"
          >
            All
          </Button>
          <Button
            v-for="category in categories"
            :key="category.slug"
            variant="outline"
            size="sm"
            class="cursor-pointer"
            :class="activeCategory === category.slug ? '!bg-accent !text-white !border-accent' : ''"
            @click="activeCategory = category.slug"
          >
            {{ category.name }}
          </Button>
        </div>
      </Container>
    </section>

    <!-- Posts grid -->
    <section class="w-full bg-background section">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard v-for="post in filteredPosts" :key="post.slug" :post="post" />
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from '~/data/blogPosts'
import { blogCategories } from '~/data/blogCategories'

const activeCategory = ref('all')

const categories = blogCategories
const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') return blogPosts
  return blogPosts.filter(p => p.categorySlug === activeCategory.value)
})

useSeo().setMeta({
  title: 'Blog',
  description: 'Software insights for business leaders: custom software costs, CRM vs off-the-shelf, SaaS builds, ERP, eCommerce, AI automation, and more.'
})
</script>
