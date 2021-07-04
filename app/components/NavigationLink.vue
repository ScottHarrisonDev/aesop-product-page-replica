<template lang="pug">
  li.mr-6.text-sm
    a(v-if="! interactive" :href="slug") {{ label }}
    button(v-if="interactive" @click="eventHandler(id)") {{ label }}
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    interactive: {
      type: Boolean,
      required: true
    },
    slug: {
      type: [String, null],
      required: false,
      default: null
    }
  },
  methods: {
    eventHandler (id) {
      switch (id) {
        case "search":
          // Open side panel with search form
          break;
        case "login":
          // Open login modal
          break;
        case "cart":
          this.$store.dispatch('main/toggleCart', this.$store.state.main.cart.open);
          break;
      }
    }
  }
}
</script>
