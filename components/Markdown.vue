<template>
  <div class="markdown" v-html="compiledMarkdown"></div>
</template>

<script>
// https://marked.js.org/
const marked = require("marked")
// const renderer = new marked.Renderer()
marked.setOptions({
  // renderer: new marked.Renderer(),
  breaks: true
})

export default {
  name: "MarkdownItem",
  props: {
    input: String
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input)
    }
  }
}
</script>

<style lang="sass">
.markdown p
  white-space: pre-line
// Prefer style handling by cascading css (typography.sass) as much as possible.
</style>
