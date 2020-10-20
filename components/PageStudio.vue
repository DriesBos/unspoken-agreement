<template>
  <div v-editable="blok" class="page page-Studio">
    <h1>PAGE STUDIO</h1>
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("PAGE", this.blok)
  }
}
</script>
