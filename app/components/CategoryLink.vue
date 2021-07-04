<template lang="pug">
  li.flex.items-center
    a.text-sm(:href="link") {{ label }}
    .px-2pt5(v-if="! last")
      span •
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    last: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    link () {
      return `https://www.aesop.com/uk/c/skin/${this.slug}`
    }
  }
}
</script>
