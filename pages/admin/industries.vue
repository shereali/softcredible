<template>
  <AdminTable
    title="Industries"
    singular="Industry"
    endpoint="/admin/industries"
    :form-fields="['description']"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>
