<template lang="pug">
  a(:href="this.$store.state.main.content.content.cta.url").block.text-center.w-full.pb-24.text-sm.bg-beige-light
    .max-w-md.mx-auto
      .font-sans-bold.font-medium.mb-0pt5.leading-6.text-copy-dark {{ this.$store.state.main.content.content.cta.title }}
      .text-copy-light {{ this.$store.state.main.content.content.cta.copy }}
</template>
