<template lang="pug">
  .text-copy-dark
    .w-2_3.mx-auto
      .text-sm.font-sans-bold.font-medium.mb-1 {{ this.$store.state.main.product.instructions.primary.title }}
      h2.font-display.text-3xl.leading-10.border-b-2.border-accent-dark.pb-4 {{ this.$store.state.main.product.instructions.primary.copy }}
      SecondaryInstruction(v-for="(instruction, index) in this.$store.state.main.product.instructions.secondary" :key="index" :title="instruction.title" :copy="instruction.copy" :last="isLast(index, $store.state.main.product.instructions.secondary)")
</template>

<script>
export default {
  methods: {
    isLast(currentIndex, fullArray) {
      return currentIndex === fullArray.length - 1;
    },
  }
}
</script>
