<template>
  <div v-editable="blok" class="page page-Projects">
    <section class="images-Container images-Container_Projects">
      <ul>
        <LazyThumbnail
          v-for="(image, i) in projectList"
          :key="i"
          :image="image"
          ratio="square"
        />
      </ul>
    </section>
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
      projectList: []
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects.list
    })
  },
  mounted() {
    this.sortProjects()
    // console.log("PAGE PROJECTS", this.blok)
    // console.log("VUEX PROJECTS LIST", this.projectList)
  },
  methods: {
    sortProjects() {
      this.projectList = this.projects.slice(1)
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

<style lang="sass">
.thumbnail
  &_Overlay
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 1
  &_OverlayActive
    opacity: 0
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    top: 0
    left: 0
    width: 100%
    height: 100%
    &_TagList
      display: flex
      flex-direction: column
      align-items: center
    &_Title
      position: absolute
      display: flex
      flex-direction: column
      align-items: center
      margin: var(--spacing-four) 0
      left: 50%
      transform: translateX(-50%)
      text-align: center
    &_TitleTop
      top: 0
    &_TitleBottom
      bottom: 0
      transform: translateX(-50%) rotate(180deg)
</style>
