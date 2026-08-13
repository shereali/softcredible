<template>
  <LegalPage title="Terms of Service" updated="August 13, 2026" :sections="sections" />
</template>

<script setup lang="ts">
const sections = [
  {
    heading: 'Acceptance of terms',
    paragraphs: [
      'By using this website, you agree to these terms of service. If you do not agree, please do not use the site.'
    ]
  },
  {
    heading: 'Use of the website',
    paragraphs: [
      'This website provides information about Softcredible\'s services. You may use the site for lawful purposes only and may not attempt to disrupt or interfere with its operation.'
    ]
  },
  {
    heading: 'Quotes and estimates',
    paragraphs: [
      'Any estimates, timelines, or project descriptions provided through this website are indicative. Final scopes, pricing, and timelines are agreed in a written proposal before work begins.'
    ]
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'The content, design, and branding on this website are the property of Softcredible and may not be reproduced without permission.'
    ]
  },
  {
    heading: 'Contact',
    paragraphs: [
      'Questions about these terms can be directed to us through the contact page.'
    ]
  }
]

useSeo().setMeta({
  title: 'Terms of Service',
  description: 'The terms governing use of the Softcredible website.',
  noIndex: true
})
</script>
