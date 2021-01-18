<template>
  <div v-editable="blok" class="page page-Home">
    <section class="images-Container images-Container_Landing">
      <ul>
        <LazyThumbnail
          v-for="(image, i) in projectListLanding"
          :key="i"
          :image="image"
          ratio="landing"
        />
      </ul>
    </section>
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <section class="images-Container images-Container_Slider">
      <ul>
        <LazyThumbnail
          v-for="(image, i) in projectListSlider"
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
      projectListLanding: [],
      projectListSlider: []
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects.list
    })
  },
  created() {
    this.sortProjectsSlider()
  },
  mounted() {
    this.sortProjectsLanding()
  },
  methods: {
    sortProjectsLanding() {
      var array = this.projects.slice(1)
      array.forEach((item, index, object) => {
        if (item.content.content.include_project_in == "landing") {
          return item
        } else {
          object.splice(index, 1)
        }
      })
      this.projectListLanding = array
    },
    sortProjectsSlider() {
      var array = this.projects.slice(1)
      array.forEach((item, index, object) => {
        if (item.content.content.include_project_in == "landing") {
          return item
        } else {
          object.splice(index, 1)
        }
      })
      this.projectListSlider = array
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
.landing-Images
  ul
    display: flex
    flex-wrap: wrap
    background: blue
    li
      img
        width: 100%
        height: 100%
        object-fit: cover
    li:first-child
      flex-basis: 100%
    li:nth-child(n+2)
      flex-basis: 50%
    li:nth-child(n+4)
      display: none
</style>
