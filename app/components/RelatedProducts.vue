<template lang="pug">
  .bg-beige-light.text-sm.text-copy-dark.py-36
    .overflow-x-scroll.px-20
      h2.font-display.text-3xl.leading-10 {{ this.$store.state.main.content.content['more-products'].copy }}
      ul.flex.flex-nowrap.lg_pl-96.pb-10
        RelatedProduct(v-for="(product, index) in this.$store.state.main.product['related-products']" :key="index" :title="product.title" :subtitle="product.subtitle" :imageURL="product.image.url" :imageAlt="product.image.alt" :url="product.url")
</template>
