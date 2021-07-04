<template>
  <svg aria-labelledby="f11ae622-4488-4b9f-b57a-da3ae44b33e2" class="fill-current stroke-current stroke-1 w-5 h-5" :class="parseColourClass" role="img" viewBox="0 0 50 50">
    <title id="f11ae622-4488-4b9f-b57a-da3ae44b33e2">{{title}}</title>
    <g>
      <polygon points="26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 "></polygon>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    colour: {
      type: String,
      required: false,
      default: "dark"
    },
    title: {
      type: String,
      required: false,
      default: "Plus icon"
    }
  },
  computed: {
    parseColourClass () {
      return `text-${this.colour}`;
    }
  }
}
</script>
