<template lang="pug">
  button.mr-6(:class="{ 'text-copy-light': ! selected }") {{ name }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  }
}
</script>
