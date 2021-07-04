<template lang="pug">
  .bg-dark.py-3.px-10.flex.fixed.top-0.left-0.right-0(:class="{ 'justify-end': ! hasItems }")
    .text-sm.leading-5.text-beige-light.flex(v-if="! hasItems")
      span You have no items in your cart
    .text-accent-light.text-sm.w-full(v-if="hasItems")
      .border-b-2.border-beige-light-transparent.flex.py-4
        .w-1_3
          span Cart
        .w-2_3.flex
          .w-1_3
            span Size
          .w-1_3
            span Quantity
          .w-1_3.text-right
            button(@click="toggleCart")
              CrossIcon.h-4
      .border-b.border-beige-light-transparent.flex.py-6.items-center(v-for="(sku, index) in groupedItems()" :key="index")
        .w-1_3
          span {{ getName() }}
        .w-2_3.flex.items-center
          .w-1_3
            span {{ getSize(sku) }}
          .w-1_3.flex
            select.px-3.py-2.bg-dark.border.border-beige-light-transparent(@change="updateQuantity(sku)" :ref="sku")
              option(v-for="index in 5" :key="index" :value="index" :selected="getQuantity(sku) === index") {{ index }}
            button.opacity-10.hover_opacity-100.text-beige-light.transition.ml-4(@click="removeItem(sku)") Remove
          .w-1_3.text-right
            span {{ formatPrice(getPrice(sku)) }}
      .flex.justify-end.py-6
        .w-1_3
          .flex.justify-between.mb-4
            span.text-md Subtotal (Tax Incl.)
            span.text-2xl {{ formatPrice(getTotalPrice()) }}
          button.bg-beige-light.text-dark.w-full.p-4 Checkout
</template>

<script>
export default {
  computed: {
    hasItems () {
      return this.$store.state.main.cart.items.length;
    }
  },
  methods: {
    toggleCart () {
      this.$store.dispatch('main/toggleCart', this.$store.state.main.cart.open);
    },
    groupedItems () {
      return [...new Set(this.$store.state.main.cart.items)];
    },
    getName () {
      return this.$store.state.main.product.name; // in a production environment this would come from the cart state but for this example we can use the product API response from earlier
    },
    getSize (sku) {
      return this.$store.state.main.product.sizes.find(item => {
        return item.sku === sku
      }).name;
    },
    getQuantity (sku) {
      return this.$store.state.main.cart.items.filter(item => {
        return item === sku
      }).length;
    },
    getPrice (sku) {
      return this.$store.state.main.cart.items.reduce((total, current) => {
        if (current === sku) {
          return total + this.$store.state.main.product.sizes.find(item => {
            return item.sku === sku
          }).price;
        }
        return total;
      }, 0);
    },
    formatPrice(price) {
      return (price / 100).toLocaleString("en-GB", {style: "currency", currency: "GBP"});
    },
    getTotalPrice() {
      return this.$store.state.main.cart.items.reduce((total, current) => {
        return total + this.$store.state.main.product.sizes.find(item => {
          return item.sku === current
        }).price;
      }, 0);
    },
    updateQuantity(sku) {
      this.$store.dispatch('main/updateQuantity', {sku, quantity: this.$refs[sku][0].value});
    },
    removeItem(sku) {
      this.$store.dispatch('main/removeItem', sku);
    }
  }
}
</script>
