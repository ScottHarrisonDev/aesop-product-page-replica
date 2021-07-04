<template lang="pug">
  .py-3pt5.text-sm(:class="{ 'border-b border-accent-light': ! last }")
    .font-sans-bold.font-medium.mb-0pt5.leading-6 {{ title }}
    .leading-6.text-copy-light {{ copy }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    copy: {
      type: String,
      required: true
    },
    last: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
