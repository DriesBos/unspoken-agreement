<template>
  <div v-editable="blok" class="page page-Projects">
    <ul class="page-Projects_Images">
      <nuxt-link
        v-for="(project, i) in projectList"
        :key="i"
        :to="project.content.full_slug"
        tag="li"
        class="page-Projects_ImageSingle"
      >
        <div class="aspectRatioOutside square cover">
          <div class="aspectRatioInside">
            <!-- <h2>{{ project.content.title }}</h2> -->
            <img
              v-lazy="
                `${transformImage(
                  project.content.content.thumbnail.filename,
                  '1440x0'
                )}`
              "
              :data-srcset="
                `${transformImage(
                  project.content.content.thumbnail.filename,
                  '400x0'
                )} 400w, 
                 ${transformImage(
                   project.content.content.thumbnail.filename,
                   '800x0'
                 )} 800w, 
                 ${transformImage(
                   project.content.content.thumbnail.filename,
                   '1200x0'
                 )} 1200w,
                 ${transformImage(
                   project.content.content.thumbnail.filename,
                   '1600x0'
                 )} 1600w,
                 ${transformImage(
                   project.content.content.thumbnail.filename,
                   '2000x0'
                 )} 2000w`
              "
              class="lazy"
              :alt="project.content.content.thumbnail.name"
            />
          </div>
        </div>
      </nuxt-link>
    </ul>
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
    this.removeFirstOfArray()
    console.log("PAGE PROJECTS", this.blok)
    console.log("VUEX PROJECTS LIST", this.projectList)
  },
  methods: {
    removeFirstOfArray() {
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
.page-Projects
  &_Images
    display: flex
    flex-wrap: wrap
    gap: var(--spacing-one)
  &_ImageSingle
    flex-basis: calc(50% - (#{var(--spacing-one)} * .5))
    cursor: pointer
  &_ImageSingle
    &:nth-child(5n+3), &:nth-child(5n+4), &:nth-child(5n+5)
      flex-basis: calc(33.3333% - (#{var(--spacing-one)} * .66666))
</style>
