<template>
  <div v-editable="blok" class="page page-Client">
    <p>PAGE CLIENT</p>
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
    // console.log("PAGE CLIENT", this.blok)
  }
}
</script>
