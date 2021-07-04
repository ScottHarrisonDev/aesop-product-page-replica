<template lang="pug">
  li.w-96.flex-shrink-0.flex-grow-0
    a.text-center(:href="url")
      img.h-400(:src="imageURL" :alt="imagealt")
      .font-sans-bold.font-medium.mb-4 {{ title }}
      div {{ subtitle }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
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
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
