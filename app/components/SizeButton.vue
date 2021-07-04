<template lang="pug">
  button.mr-6.flex.items-center(:class="{ 'text-copy-light': ! selected }" @click="setSize(index)")
    div.w-3.h-3.border.rounded-full.flex.items-center.justify-center.mr-3(:class="{ 'border-copy-dark': selected, 'border-copy-light': ! selected}")
      span.w-1pt5.h-1pt5.rounded-full.flex(v-if="selected" :class="{ 'bg-copy-dark': selected }")
    span {{ name }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    },
    setSize: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>
