<template lang="pug">
  .bg-dark.py-3.px-10.flex.justify-center
    button.text-sm.leading-5.text-beige-light.flex.justify-center.border-b.border-beige-light.border-opacity-0.hover_border-opacity-100.transition.ease-in-out.duration-500
      span {{ copy }}
      PlusIcon.ml-5(colour="beige-light" title="Find out more")
</template>

<script>
export default {
  computed: {
    copy () {
      return this.$store.state.main.content.content.banner.copy;
    }
  }
}
</script>
