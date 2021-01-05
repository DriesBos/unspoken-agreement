<template>
  <div v-editable="blok" class="page page-Studio">
    <p>PAGE Home</p>
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    blok: Object
  },
  data() {
    return {
      projectListLanding: [],
      projectListSlider: []
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects.list
    })
  },
  mounted() {
    this.sortProjects()
    console.log("PAGE STUDIO", this.blok)
    console.log("VUEX PROJECTS LIST", this.projectList)
  },
  methods: {
    sortProjects() {
      console.log(this.projects)
    },
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    }
  }
}
</script>
