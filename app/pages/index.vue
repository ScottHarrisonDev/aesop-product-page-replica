<template lang="pug">
  div(v-if="contentLoaded")
    // Cart
    // LoginModal
    // SideNav
    Banner
    Navigation
    Product
    CTA
    .flex.items-center.bg-beige-dark
      Gallery.w-1_2
      Instructions.w-1_2
    RelatedProducts
    Footer
</template>

<script>
export default {
  computed: {
    contentLoaded() {
      return this.$store.state.main.content !== null
    }
  },
  mounted() {
    this.$store.dispatch('main/getContent')
    this.$store.dispatch('main/getNavigation')
    this.$store.dispatch('main/getProduct', {slug: "in-two-minds-facial-cleanser"})
  }
}
</script>
