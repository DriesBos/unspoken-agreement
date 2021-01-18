<template>
  <div v-editable="blok" class="page page-ClientPortal">
    <p>PAGE CLIENT PORTAL</p>
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
    // console.log("PAGE CLIENT PORTAL", this.blok)
  }
}
</script>
