<template>
  <LegalPage title="Cookie Policy" updated="August 13, 2026" :sections="sections" />
</template>

<script setup lang="ts">
const sections = [
  {
    heading: 'What cookies we use',
    paragraphs: [
      'This website uses minimal cookies. We use a session cookie for administrative functions and may use privacy-respecting analytics to understand how the site is used.'
    ]
  },
  {
    heading: 'How to control cookies',
    paragraphs: [
      'You can control or delete cookies through your browser settings. Disabling cookies may affect certain functionality of the site.'
    ]
  },
  {
    heading: 'Contact',
    paragraphs: [
      'Questions about this cookie policy can be directed to us through the contact page.'
    ]
  }
]

useSeo().setMeta({
  title: 'Cookie Policy',
  description: 'How the Softcredible website uses cookies.',
  noIndex: true
})
</script>
