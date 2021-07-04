<template lang="pug">
  .bg-beige-light.text-copy-dark.flex.justify-between.h-20
    ul.w-1_3.flex.justify-start.px-10.items-center
      NavigationLink(v-for="(link, index) in this.$store.state.main.navigation.left"
      :key="link.id" :label="link.label" :interactive="link.interactive" :slug="link.slug" :id="link.id")
    ul.w-1_3.flex.justify-end.px-10.items-center
      NavigationLink(v-for="(link) in this.$store.state.main.navigation.right"
        :key="link.id" :label="link.label" :interactive="link.interactive" :slug="link.slug" :id="link.id")
</template>
