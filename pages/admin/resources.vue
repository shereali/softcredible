<template>
  <AdminTable
    title="Resources"
    singular="Resource"
    endpoint="/admin/resources"
    :form-fields="['summary']"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>
