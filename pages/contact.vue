<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <Badge variant="primary" className="mb-6">Contact</Badge>
          <h1 class="text-display mb-6">
            Tell Us About Your Project
          </h1>
          <p class="text-body-lg text-ink-soft mb-8 max-w-2xl mx-auto">
            Share a few details about what you're trying to build, improve, or replace. We'll review your project and get back to you within one business day.
          </p>
        </div>
      </Container>
    </section>

    <ContactForm />
  </div>
</template>

<script setup lang="ts">
useSeo().setMeta({
  title: 'Contact Us',
  description: 'Tell Softcredible about your software project. Share your project type, budget, and timeline and we\'ll respond within one business day.'
})
</script>
