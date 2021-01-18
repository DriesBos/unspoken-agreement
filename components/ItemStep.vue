<template>
  <div v-editable="blok" class="item item-Step">
    <h2 v-if="blok.title">{{ blok.title }}</h2>
    <LazyMarkdown v-if="blok.text" :input="blok.text" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log("ITEM STEP", this.blok)
  }
}
</script>
