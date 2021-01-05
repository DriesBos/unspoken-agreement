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
          <div class="page-Projects_Overlay">
            <div class="page-Projects_Overlay_Title">
              <h2>
                {{ project.content.content.title | upperCase }} |
                {{ project.content.content.location }}
              </h2>
            </div>
          </div>
          <div class="page-Projects_OverlayActive">
            <div
              class="page-Projects_OverlayActive_Title page-Projects_OverlayActive_TitleTop"
            >
              <h2>{{ project.content.content.title | upperCase }}</h2>
              <h2>
                {{ project.content.content.location }}
              </h2>
            </div>
            <ul class="page-Projects_OverlayActive_TagList">
              <li v-for="(tag, index) in project.content.tag_list" :key="index">
                <h2>
                  <h2>{{ tag | upperCase }}</h2>
                </h2>
              </li>
            </ul>
            <div
              class="page-Projects_OverlayActive_Title page-Projects_OverlayActive_TitleBottom"
            >
              <h2>{{ project.content.content.title | upperCase }}</h2>
              <h2>
                {{ project.content.content.location }}
              </h2>
            </div>
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
    position: relative
    flex-basis: calc(50% - (#{var(--spacing-one)} * .5))
    cursor: pointer
    color: white
    &:hover
      @media (hover: hover)
        .page-Projects_Overlay
          opacity: 0
        .page-Projects_OverlayActive
          opacity: 1

  &_ImageSingle
    &:nth-child(5n+3), &:nth-child(5n+4), &:nth-child(5n+5)
      flex-basis: calc(33.3333% - (#{var(--spacing-one)} * .66666))
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
