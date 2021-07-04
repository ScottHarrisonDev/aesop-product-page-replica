<template lang="pug">
  div(v-if="contentLoaded")
    Banner
    Transition(name="slide")
      CartNotification(v-if="this.$store.state.main.cart.notification")
    Transition(name="slide")
      Cart(v-if="this.$store.state.main.cart.open")
    Navigation
    Product
    CTA
    .lg_flex.lg_items-center.bg-beige-dark
      Gallery.lg_w-1_2
      Instructions.lg_w-1_2.lg_py-0.py-6
    RelatedProducts
    Footer
</template>

<script>
export default {
  computed: {
    contentLoaded() {
      return this.$store.state.main.content !== null &&
        this.$store.state.main.navigation !== null &&
        this.$store.state.main.product !== null
    }
  },
  mounted() {
    this.$store.dispatch('main/getContent');
    this.$store.dispatch('main/getNavigation');
    this.$store.dispatch('main/getProduct', "in-two-minds-facial-cleanser");
  },
  head() {
    if (this.$store.state.main.content !== null &&
      this.$store.state.main.navigation !== null &&
      this.$store.state.main.product !== null) {
      return {
        title: this.$store.state.main.content.meta['html-title'],
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.$store.state.main.content.meta.description
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: top .5s;
}
.slide-enter, .slide-leave-to {
  top: -100%;
}
</style>

