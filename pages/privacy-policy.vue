<template>
  <LegalPage title="Privacy Policy" updated="August 13, 2026" :sections="sections" />
</template>

<script setup lang="ts">
const sections = [
  {
    heading: 'Information we collect',
    paragraphs: [
      'When you submit a form on this website, we collect the information you provide: your name, email address, company, and any details you share about your project or request.',
      'We also collect basic technical information automatically, such as the pages you visit and the source that brought you to the site (for example, UTM parameters and referring pages).'
    ]
  },
  {
    heading: 'How we use your information',
    paragraphs: [
      'We use the information you provide to respond to your enquiry, schedule consultations, prepare project estimates, and deliver resources you request.',
      'We do not sell your personal information to third parties.'
    ]
  },
  {
    heading: 'Data retention',
    paragraphs: [
      'Lead and enquiry data is retained for as long as it is relevant to our business relationship, after which it is deleted or anonymized.'
    ]
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond within a reasonable timeframe.'
    ]
  },
  {
    heading: 'Contact',
    paragraphs: [
      'If you have questions about this privacy policy, contact us through the contact page on this website.'
    ]
  }
]

useSeo().setMeta({
  title: 'Privacy Policy',
  description: 'How Softcredible collects, uses, and protects your personal information.',
  noIndex: true
})
</script>
