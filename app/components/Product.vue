<template lang="pug">
  .bg-beige-light.text-copy-dark.pb-44.flex.justify-end.items-center.min-h-85vh
    .w-1_3
      Transition(name="fade" appear mode="out-in")
        img.max-w-md.mx-auto(v-for="(size, index) in this.$store.state.main.product.sizes" :key="index" :src="size.image.url" alt="size.image.alt" v-if="isSelected(index)")
    .w-1_4.mr-8pc
      ul.flex.mb-6
        CategoryLink(v-for="(category, index) in this.$store.state.main.product.category" :key="category.slug" :label="category.label" :slug="category.slug" :last="isLast(index, $store.state.main.product.category)")
      .pb-6.border-b-2.border-accent-dark
        h1.text-3xl.leading-10.mb-4 {{ this.$store.state.main.product.name }}
        p.text-sm {{ this.$store.state.main.product.description }}
      div
        ProductDetail(v-for="(detail, index) in this.$store.state.main.product.details" :key="index" :title="detail.title" :copy="detail.copy")
      .py-3pt5.text-sm
        .font-sans-bold.font-medium.mb-0pt5.leading-6 Sizes
        .flex
          SizeButton(v-for="(size, index) in this.$store.state.main.product.sizes" :key="index" :name="size.name" :selected="isSelected(index)" :setSize="setSize" :index="index")
      button.bg-copy-dark.text-beige-light.py-5.px-3pt5.w-full.text-sm.hover_bg-black.transition.duration-200.ease-in-out.mb-3pt5(@click="addToCart($store.state.main.product.sizes[selectedSize].sku)") Add to your cart - {{ formatPrice(this.$store.state.main.product.sizes[selectedSize].price) }}
      ProductCTA(:copy="this.$store.state.main.product.cta.copy" :title="this.$store.state.main.product.cta.title" :url="this.$store.state.main.product.cta.url" :imageURL="this.$store.state.main.product.cta.image.url" :imageAlt="this.$store.state.main.product.cta.image.alt")
</template>

<script>

export default {
  data() {
    return {
      selectedSize: 0
    }
  },
  methods: {
    isLast(currentIndex, fullArray) {
      return currentIndex === fullArray.length - 1;
    },
    isSelected(index) {
      return index === this.selectedSize;
    },
    formatPrice(price) {
      return (price / 100).toLocaleString("en-GB", {style: "currency", currency: "GBP"});
    },
    setSize(index) {
      this.selectedSize = index;
    },
    addToCart(sku) {
      this.$store.dispatch('main/addToCart', sku);
      this.$store.dispatch('main/toggleNotification', this.$store.state.main.cart.notification);
      setTimeout(() => {
        this.$store.dispatch('main/toggleNotification', this.$store.state.main.cart.notification);
      }, 3000);
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
