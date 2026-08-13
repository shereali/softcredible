<template>
  <AdminTable
    title="Blog Posts"
    singular="Post"
    endpoint="/admin/blog"
    :form-fields="['summary']"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>
