<template>
  <AdminTable
    title="Services"
    singular="Service"
    endpoint="/admin/services"
    :form-fields="['summary']"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>
