<template lang="pug">
  a(:href="url").flex
    .pb-3pt5.text-sm.w-2_3.text-left
      .font-sans-bold.font-medium.mb-0pt5.leading-6 {{ title }}
      .leading-6.text-copy-light {{ copy }}
    img.w-1_3(:src="imageURL" :alt="imageAlt")
</template>

<script>
export default {
  props: {
    copy: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
}
</script>
