<template lang="pug">
  // empty alt attribute as this image is for aesthetic only and serves no purpose for screen reader users. Empty alt is preferred to missing alt as a missing alt will read the full image URL in most screen readers.
  img(:src="this.$store.state.main.product.gallery[0].url" alt="")
</template>

<script>
export default {}
</script>
